import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SealLogo } from '@/components/SealLogo'

export function FinalCta() {
  return (
    <section id="cta" className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-[1440px] px-6 py-28 text-center lg:px-12 lg:py-36">
        <Reveal>
          <SealLogo className="mx-auto h-14 w-14" />
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mx-auto mt-8 max-w-3xl font-display text-5xl font-medium leading-[1.05] tracking-[-0.025em] text-ink sm:text-6xl lg:text-7xl">
            Put your documents on <em className="italic text-amber">duty.</em>
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-mist">
            Upload your first document tonight. Your chatbot could be answering customers
            before tomorrow’s coffee.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#top"
              className="group flex items-center gap-2 rounded-xl bg-amber px-8 py-4 text-[15.5px] font-semibold text-white shadow-[0_12px_32px_-12px_rgba(206,122,18,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-deep"
            >
              Get started free
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#demo"
              className="rounded-xl border border-line bg-white px-8 py-4 text-[15.5px] font-semibold text-ink transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/50 hover:text-teal-deep"
            >
              Try the demo again
            </a>
          </div>
          <p className="mt-5 font-label text-xs tracking-wide text-mist/80">
            Free plan · No credit card · One line of code to embed
          </p>
        </Reveal>
      </div>
    </section>
  )
}
