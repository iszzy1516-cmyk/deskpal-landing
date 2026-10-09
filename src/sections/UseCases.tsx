import { ArrowUpRight, Check } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

const CASES = [
  {
    label: 'Customer support',
    headline: 'Deflect the questions you’ve answered a hundred times.',
    benefits: [
      'Instant answers from your policies, menus, and FAQs — 24/7',
      'Every reply cites the exact document it came from',
      'Graceful handoff to a human when your docs don’t cover it',
    ],
  },
  {
    label: 'Pre-sales',
    headline: 'Turn “just browsing” into “just bought.”',
    benefits: [
      'Answers product, pricing, and availability questions while you sleep',
      'Quotes specs and terms verbatim — never improvises a promise',
      'Captures an email when a conversation starts heating up',
    ],
  },
  {
    label: 'Internal knowledge',
    headline: 'One brain for the whole team.',
    benefits: [
      'New hires ask the bot instead of interrupting Slack',
      'SOPs and handbooks become a conversation, not a scavenger hunt',
      'Scoped permissions keep sensitive documents where they belong',
    ],
  },
]

export function UseCases() {
  return (
    <section id="product" className="border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <SectionHeading
          index="02"
          eyebrow="Use cases"
          title={
            <>
              One bot, every <em className="italic text-amber">question.</em>
            </>
          }
          sub="The same documents power three very different conversations — on your website, in your sales flow, and inside your team."
        />

        <div className="mt-16 flex flex-col gap-16 lg:gap-20">
          {CASES.map((c, i) => {
            const flip = i % 2 === 1
            return (
              <Reveal key={c.label}>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
                  {/* Text side */}
                  <div className={cn(flip && 'lg:order-2')}>
                    <h3 className="font-display text-3xl font-medium leading-[1.12] tracking-[-0.015em] text-ink sm:text-4xl">
                      {c.headline}
                    </h3>
                    <ul className="mt-6 flex flex-col gap-3.5">
                      {c.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-[15.5px] leading-relaxed text-ink-soft/90">
                          <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-tint">
                            <Check className="h-3 w-3 text-teal-deep" strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual side — stylized vignette card */}
                  <div className={cn(flip && 'lg:order-1')}>
                    <div className="relative overflow-hidden rounded-2xl border border-line bg-paper p-7 sm:p-9">
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            'radial-gradient(80% 90% at 85% 10%, rgba(37,139,131,0.10) 0%, rgba(37,139,131,0) 60%)',
                        }}
                        aria-hidden="true"
                      />
                      <div className="relative flex flex-col gap-3">
                        <div className="max-w-[80%] self-end rounded-2xl rounded-br-md bg-ink px-4 py-2.5 text-[13.5px] text-paper">
                          {i === 0 && 'Where’s my order #1042?'}
                          {i === 1 && 'Does the oak finish cost extra?'}
                          {i === 2 && 'What’s our refund SOP again?'}
                        </div>
                        <div className="max-w-[88%] self-start rounded-2xl rounded-bl-md border border-line bg-white px-4 py-3 text-[13.5px] leading-relaxed text-ink-soft shadow-[0_2px_8px_rgba(11,65,65,0.05)]">
                          {i === 0 &&
                            'Order #1042 shipped Tuesday and is due Thursday. Tracking was emailed — want me to resend it?'}
                          {i === 1 &&
                            'Yes — oak adds $40 per unit and two days to the build time, per the current price list.'}
                          {i === 2 &&
                            'Refunds within 30 days need a receipt; manager approval covers 31–60 days. Full steps in refunds-sop.pdf.'}
                          <span className="mt-2.5 block">
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber/30 bg-amber-tint px-2.5 py-1 font-label text-[10.5px] font-medium tracking-wide text-amber-deep">
                              <ArrowUpRight className="h-3 w-3" />
                              {i === 0 && 'shipping-policy.pdf'}
                              {i === 1 && 'price-list-2026.pdf'}
                              {i === 2 && 'refunds-sop.pdf'}
                            </span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
