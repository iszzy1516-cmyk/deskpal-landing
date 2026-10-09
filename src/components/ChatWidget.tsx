import { useEffect, useState } from 'react'
import { RotateCcw, Send, ThumbsDown, ThumbsUp } from 'lucide-react'
import { SealLogo } from '@/components/SealLogo'
import { SourceChip } from '@/components/SourceChip'
import { useInView } from '@/hooks/useInView'
import { cn } from '@/lib/utils'

/**
 * Hero chat mockup — plays a staged sequence once when scrolled into view:
 * question → typing dots → answer → citation chip → feedback row.
 */
export function ChatWidget() {
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.35 })
  const [stage, setStage] = useState(0)
  const [runId, setRunId] = useState(0)

  useEffect(() => {
    if (!inView) return
    const timers = [
      window.setTimeout(() => setStage(1), 500), // customer question
      window.setTimeout(() => setStage(2), 1400), // typing dots
      window.setTimeout(() => setStage(3), 2500), // bot answer
      window.setTimeout(() => setStage(4), 3300), // source chip
      window.setTimeout(() => setStage(5), 3900), // thumbs
    ]
    return () => timers.forEach(clearTimeout)
  }, [inView, runId])

  const replay = () => {
    setStage(0)
    setRunId((n) => n + 1)
  }

  return (
    <div
      ref={ref}
      className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-paper shadow-[0_32px_80px_-24px_rgba(0,0,0,0.45)]"
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-line bg-paper-warm px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="h-2.5 w-2.5 rounded-full bg-line" />
        <span className="ml-3 font-label text-[11px] font-medium tracking-wide text-mist">
          golden-crumb-bakery.com
        </span>
        <button
          onClick={replay}
          aria-label="Replay demo"
          className="ml-auto rounded-md p-1.5 text-mist transition-colors hover:bg-teal-tint hover:text-teal-deep"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* Chat body */}
      <div className="flex min-h-[380px] flex-col gap-4 px-5 py-6">
        {/* Customer question */}
        <div
          className={cn(
            'max-w-[85%] self-end rounded-2xl rounded-br-md bg-ink px-4 py-3 text-[14px] leading-relaxed text-paper transition-all duration-500',
            stage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0',
          )}
        >
          Do you offer free shipping to Brooklyn?
        </div>

        {/* Typing dots */}
        <div
          className={cn(
            'flex items-center gap-1.5 self-start rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3.5 transition-opacity duration-300',
            stage === 2 ? 'opacity-100' : 'pointer-events-none absolute opacity-0',
          )}
          aria-hidden={stage !== 2}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-dot-pulse rounded-full bg-teal"
              style={{ animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>

        {/* Bot answer */}
        <div
          className={cn(
            'max-w-[92%] self-start transition-all duration-500',
            stage >= 3 ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-3 opacity-0',
          )}
        >
          <div className="rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3 text-[14px] leading-relaxed text-ink-soft shadow-[0_2px_8px_rgba(11,65,65,0.05)]">
            <div className="mb-2 flex items-center gap-2">
              <SealLogo className="h-5 w-5" />
              <span className="font-label text-[11px] font-semibold uppercase tracking-[0.14em] text-teal">
                Deskpal
              </span>
            </div>
            Yes — orders over <strong className="font-semibold">$35 ship free</strong> to Brooklyn,
            and usually arrive within 2 business days. Orders under $35 ship for a flat $4.95.
            <div
              className={cn(
                'mt-3 transition-all duration-500',
                stage >= 4 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
              )}
            >
              <SourceChip file="shipping-policy.pdf" />
            </div>
          </div>

          {/* Feedback row */}
          <div
            className={cn(
              'mt-2 flex items-center gap-1 pl-1 transition-all duration-500',
              stage >= 5 ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
            )}
          >
            <button
              aria-label="Helpful"
              className="rounded-md p-1.5 text-mist transition-colors hover:bg-teal-tint hover:text-teal-deep"
            >
              <ThumbsUp className="h-3.5 w-3.5" />
            </button>
            <button
              aria-label="Not helpful"
              className="rounded-md p-1.5 text-mist transition-colors hover:bg-amber-tint hover:text-amber-deep"
            >
              <ThumbsDown className="h-3.5 w-3.5" />
            </button>
            <span className="ml-2 font-label text-[10px] tracking-wide text-mist/70">
              Answered from your documents
            </span>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="border-t border-line bg-paper-warm px-4 py-3">
        <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5">
          <span className="flex-1 text-[13px] text-mist/80">Ask a question…</span>
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-teal text-white">
            <Send className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </div>
  )
}
