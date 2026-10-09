import { Check, Users } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { cn } from '@/lib/utils'

const PLANS = [
  {
    name: 'Free',
    price: '$0',
    cadence: 'forever',
    blurb: 'For trying it on a real question.',
    features: ['1 chatbot', '20 documents', '50 answers / month', 'Deskpal badge on widget'],
    cta: 'Start free',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$19',
    cadence: 'per month',
    blurb: 'For businesses that live on their website.',
    features: [
      '3 chatbots',
      '200 documents',
      '2,000 answers / month',
      'Remove the badge, match your brand',
      'Embed on unlimited pages',
    ],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    name: 'Business',
    price: '$49',
    cadence: 'per month',
    blurb: 'For teams with serious document sets.',
    features: [
      '10 chatbots',
      'Unlimited documents',
      '10,000 answers / month',
      'Audit logs & API access',
      'Priority support',
    ],
    cta: 'Talk to us',
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading
        index="04"
        eyebrow="Pricing"
        align="center"
        title={
          <>
            Priced for the <em className="italic text-amber">small</em> in small business.
          </>
        }
        sub="Start free, upgrade when the answers start paying for themselves."
      />

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 lg:grid-cols-3">
        {PLANS.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100}>
            <div
              className={cn(
                'relative flex h-full flex-col rounded-2xl border p-8 transition-all duration-200',
                plan.featured
                  ? 'border-ink bg-ink text-paper shadow-[0_28px_60px_-20px_rgba(11,65,65,0.5)] lg:-translate-y-3'
                  : 'border-line bg-white hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_16px_36px_-16px_rgba(11,65,65,0.2)]',
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-8 rounded-full bg-amber px-3.5 py-1.5 font-label text-[11px] font-semibold uppercase tracking-[0.12em] text-white">
                  Most popular
                </span>
              )}
              <h3
                className={cn(
                  'font-label text-xs font-semibold uppercase tracking-[0.18em]',
                  plan.featured ? 'text-teal-bright' : 'text-teal',
                )}
              >
                {plan.name}
              </h3>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl font-medium tracking-[-0.02em]">
                  {plan.price}
                </span>
                <span className={cn('text-[13px]', plan.featured ? 'text-paper/60' : 'text-mist')}>
                  {plan.cadence}
                </span>
              </div>
              <p className={cn('mt-3 text-[14px] leading-relaxed', plan.featured ? 'text-paper/70' : 'text-mist')}>
                {plan.blurb}
              </p>
              <ul className="mt-7 flex flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[14px] leading-snug">
                    <Check
                      className={cn('mt-0.5 h-4 w-4 shrink-0', plan.featured ? 'text-teal-bright' : 'text-teal')}
                      strokeWidth={2.6}
                    />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#cta"
                className={cn(
                  'mt-8 rounded-xl py-3 text-center text-[14.5px] font-semibold transition-all duration-200 hover:-translate-y-0.5',
                  plan.featured
                    ? 'bg-amber text-white shadow-[0_8px_24px_-10px_rgba(206,122,18,0.7)] hover:bg-amber-deep'
                    : 'border border-line bg-paper-warm text-ink hover:border-teal/50 hover:text-teal-deep',
                )}
              >
                {plan.cta}
              </a>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={200}>
        <div className="mx-auto mt-10 flex max-w-5xl items-center justify-center gap-2.5 rounded-2xl border border-teal/25 bg-teal-tint px-6 py-4">
          <Users className="h-5 w-5 shrink-0 text-teal-deep" />
          <p className="text-center text-[14.5px] font-medium text-teal-deep">
            Unlimited teammates on every plan — including Free. You pay for answers, not seats.
          </p>
        </div>
      </Reveal>
    </section>
  )
}
