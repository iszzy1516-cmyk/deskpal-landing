import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ThumbsDown, ThumbsUp } from 'lucide-react'
import { SourceChip } from '@/components/SourceChip'
import { cn } from '@/lib/utils'

export type DemoQA = {
  question: string
  answer: string
  source: string
}

type Phase = 'idle' | 'asked' | 'thinking' | 'typing' | 'done'

/**
 * Interactive demo chat — click a question chip, watch the answer type out
 * with a blinking cursor, then the source citation chip fades in.
 * Pure front-end, mock data.
 */
export function TypingChat({ items }: { items: DemoQA[] }) {
  const [active, setActive] = useState<number | null>(null)
  const [phase, setPhase] = useState<Phase>('idle')
  const [typed, setTyped] = useState('')
  const [feedback, setFeedback] = useState<null | 'up' | 'down'>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const timers = useRef<number[]>([])

  const clearTimers = () => {
    timers.current.forEach(clearTimeout)
    timers.current = []
  }

  useEffect(() => clearTimers, [])

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [typed, phase, active])

  const ask = (i: number) => {
    if (phase === 'thinking' || phase === 'typing') return
    clearTimers()
    setActive(i)
    setTyped('')
    setFeedback(null)
    setPhase('asked')
    timers.current.push(window.setTimeout(() => setPhase('thinking'), 450))
    timers.current.push(
      window.setTimeout(() => {
        setPhase('typing')
        const full = items[i].answer
        let pos = 0
        const tick = () => {
          pos += 1
          setTyped(full.slice(0, pos))
          if (pos < full.length) {
            const ch = full[pos - 1]
            const pause = ch === '.' || ch === ',' || ch === '—' ? 90 : 0
            timers.current.push(window.setTimeout(tick, 14 + Math.random() * 22 + pause))
          } else {
            timers.current.push(window.setTimeout(() => setPhase('done'), 350))
          }
        }
        tick()
      }, 1250),
    )
  }

  const current = active !== null ? items[active] : null
  const showThinking = phase === 'thinking'
  const showAnswer = phase === 'typing' || phase === 'done'

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_20px_48px_-16px_rgba(11,65,65,0.10)]">
      {/* Question chips */}
      <div className="border-b border-line bg-paper-warm px-5 py-4 sm:px-7">
        <p className="mb-3 font-label text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
          Try a question
        </p>
        <div className="flex flex-wrap gap-2">
          {items.map((item, i) => (
            <button
              key={item.question}
              onClick={() => ask(i)}
              disabled={phase === 'thinking' || phase === 'typing'}
              className={cn(
                'group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-[13px] font-medium transition-all duration-200',
                active === i
                  ? 'border-teal bg-teal text-white shadow-[0_4px_14px_-4px_rgba(37,139,131,0.5)]'
                  : 'border-line bg-white text-ink-soft hover:-translate-y-0.5 hover:border-teal/50 hover:text-teal-deep hover:shadow-[0_6px_16px_-8px_rgba(37,139,131,0.4)]',
                (phase === 'thinking' || phase === 'typing') && active !== i && 'opacity-50',
              )}
            >
              {item.question}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          ))}
        </div>
      </div>

      {/* Answer area */}
      <div ref={scrollRef} className="min-h-[240px] scroll-smooth px-5 py-6 sm:px-7">
        {phase === 'idle' && (
          <div className="flex h-[190px] flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-tint">
              <ArrowUpRight className="h-5 w-5 text-teal" />
            </div>
            <p className="max-w-[240px] text-[14px] leading-relaxed text-mist">
              Pick a question above — every answer is typed live from the sample documents.
            </p>
          </div>
        )}

        {current && phase !== 'idle' && (
          <div className="flex flex-col gap-4">
            {/* Echoed question */}
            <div className="animate-fade-up max-w-[85%] self-end rounded-2xl rounded-br-md bg-ink px-4 py-3 text-[14px] leading-relaxed text-paper">
              {current.question}
            </div>

            {showThinking && (
              <div className="flex animate-fade-up items-center gap-1.5 self-start rounded-2xl rounded-bl-md border border-line bg-paper-warm px-4 py-3.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-teal"
                    style={{ animationDelay: `${i * 0.18}s` }}
                  />
                ))}
              </div>
            )}

            {showAnswer && (
              <div className="max-w-full self-start">
                <div className="rounded-2xl rounded-bl-md border border-line bg-paper-warm px-4 py-3.5 text-[15px] leading-relaxed text-ink-soft">
                  {typed}
                  {phase === 'typing' && (
                    <span className="type-cursor ml-0.5 inline-block h-[1.05em] w-[2px] translate-y-[3px] bg-teal" />
                  )}
                  <span
                    className={cn(
                      'block transition-all duration-500',
                      phase === 'done' ? 'mt-3 translate-y-0 opacity-100' : 'mt-0 h-0 translate-y-2 overflow-hidden opacity-0',
                    )}
                  >
                    <SourceChip file={current.source} />
                  </span>
                </div>
                <div
                  className={cn(
                    'mt-2 flex items-center gap-1 pl-1 transition-all duration-500',
                    phase === 'done' ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                  )}
                >
                  <button
                    aria-label="Helpful"
                    onClick={() => setFeedback(feedback === 'up' ? null : 'up')}
                    className={cn(
                      'rounded-md p-1.5 transition-all duration-200 hover:scale-110 active:scale-95',
                      feedback === 'up'
                        ? 'bg-teal text-white'
                        : 'text-mist hover:bg-teal-tint hover:text-teal-deep',
                    )}
                  >
                    <ThumbsUp className="h-3.5 w-3.5" fill={feedback === 'up' ? 'currentColor' : 'none'} />
                  </button>
                  <button
                    aria-label="Not helpful"
                    onClick={() => setFeedback(feedback === 'down' ? null : 'down')}
                    className={cn(
                      'rounded-md p-1.5 transition-all duration-200 hover:scale-110 active:scale-95',
                      feedback === 'down'
                        ? 'bg-amber text-white'
                        : 'text-mist hover:bg-amber-tint hover:text-amber-deep',
                    )}
                  >
                    <ThumbsDown className="h-3.5 w-3.5" fill={feedback === 'down' ? 'currentColor' : 'none'} />
                  </button>
                  <span
                    className={cn(
                      'ml-2 font-label text-[10px] tracking-wide transition-colors duration-300',
                      feedback ? 'text-teal' : 'text-mist/70',
                    )}
                  >
                    {feedback === 'up' && 'Thanks — glad it helped'}
                    {feedback === 'down' && 'Noted — this helps us improve'}
                    {!feedback && 'Cited, never invented'}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
