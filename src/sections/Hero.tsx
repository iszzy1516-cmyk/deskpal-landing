import { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'
import { ChatWidget } from '@/components/ChatWidget'
import { Reveal } from '@/components/Reveal'

export function Hero() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  return (
    <section id="top" className="grid lg:min-h-screen lg:grid-cols-2">
      {/* Left — copy + capture */}
      <div className="flex items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16 lg:pb-24 lg:pt-40 xl:pl-[max(4rem,calc((100vw-1440px)/2+3rem))]">
        <div className="max-w-xl">
          <Reveal>
            <h1 className="mt-7 font-display text-[3.4rem] font-medium leading-[1.02] tracking-[-0.025em] text-ink sm:text-7xl lg:text-[5.1rem]">
              Your documents, on{' '}
              <em className="font-medium italic text-amber">duty.</em>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-mist">
              Upload your PDFs and FAQs. Deskpal trains a chatbot that answers customer
              questions only from those documents — with the source cited under every
              answer. Embed it on your site with one line of code.
            </p>
          </Reveal>

          <Reveal delay={260}>
            {sent ? (
              <div className="mt-9 flex max-w-md items-center gap-3 rounded-2xl border border-teal/30 bg-teal-tint px-5 py-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal text-white">
                  <Check className="h-4 w-4" />
                </span>
                <p className="text-[14px] font-medium leading-snug text-teal-deep">
                  You're on the list — we'll send your workspace invite to{' '}
                  <span className="font-semibold">{email}</span> shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} className="mt-9 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yourbusiness.com"
                  className="h-[52px] flex-1 rounded-xl border border-line bg-white px-4 text-[15px] text-ink outline-none transition-all placeholder:text-mist/60 focus:border-teal focus:ring-4 focus:ring-teal/15"
                />
                <button
                  type="submit"
                  className="group flex h-[52px] items-center justify-center gap-2 rounded-xl bg-teal px-6 text-[15px] font-semibold text-white shadow-[0_8px_24px_-10px_rgba(37,139,131,0.7)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-deep"
                >
                  Get started
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
            <p className="mt-4 font-label text-xs tracking-wide text-mist/80">
              Free plan, no card required · Live on your site in under 10 minutes
            </p>
          </Reveal>
        </div>
      </div>

      {/* Right — teal panel with live widget mockup */}
      <div className="relative flex items-center justify-center overflow-hidden bg-teal px-6 py-16 lg:py-24">
        {/* faint seal watermark */}
        <svg
          viewBox="0 0 48 48"
          className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-[0.08]"
          aria-hidden="true"
        >
          <circle cx="24" cy="24" r="22" stroke="#F4F7F6" strokeWidth="1" />
          <circle cx="24" cy="24" r="17" stroke="#F4F7F6" strokeWidth="0.8" strokeDasharray="1.6 3.1" />
        </svg>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            background:
              'radial-gradient(60% 55% at 70% 30%, rgba(47,163,152,0.55) 0%, rgba(37,139,131,0) 70%)',
          }}
          aria-hidden="true"
        />
        <Reveal delay={200} className="relative">
          <ChatWidget />
          <p className="mt-5 text-center font-label text-[11px] font-medium uppercase tracking-[0.18em] text-paper/60">
            The widget your customers will see
          </p>
        </Reveal>
      </div>
    </section>
  )
}
