import { FileText } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { TypingChat, type DemoQA } from '@/components/TypingChat'

const DOCS = [
  { name: 'menu.pdf', meta: '24 pages · updated Mar 2026', pages: 'Menu, prices, seasonal specials' },
  { name: 'delivery-zones.pdf', meta: '2 pages · updated Jan 2026', pages: 'Zones, fees, delivery windows' },
  { name: 'allergens.pdf', meta: '6 pages · updated Feb 2026', pages: 'Full allergen matrix per item' },
  { name: 'cake-ordering.pdf', meta: '4 pages · updated Apr 2026', pages: 'Lead times, sizes, deposits' },
]

const QA: DemoQA[] = [
  {
    question: 'Do you deliver to the suburbs?',
    answer:
      'Yes — we deliver to all suburbs within 25 km of the city center, Tuesday through Saturday. Orders over $40 qualify for free delivery; smaller orders carry a flat $5 fee.',
    source: 'delivery-zones.pdf',
  },
  {
    question: 'What allergens are in the chocolate cake?',
    answer:
      'The chocolate layer cake contains gluten, eggs, milk, and soy. It’s made in a kitchen that also handles tree nuts and peanuts, so we can’t guarantee it’s trace-free.',
    source: 'allergens.pdf',
  },
  {
    question: 'How far ahead should I order a cake?',
    answer:
      'Custom cakes need at least 72 hours’ notice. For tiered or wedding cakes, please order two weeks ahead — a 30% deposit holds your date.',
    source: 'cake-ordering.pdf',
  },
]

export function LiveDemo() {
  return (
    <section id="demo" className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
      <SectionHeading
        index="01"
        eyebrow="Live demo"
        title={
          <>
            Don’t take our word for it.{' '}
            <em className="italic text-amber">Ask it yourself.</em>
          </>
        }
        sub="We uploaded four documents from a fictional bakery. The bot below answers only from them — click a question and watch it cite its source."
      />

      <div className="mt-14 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-14">
        {/* Document stack */}
        <Reveal delay={120}>
          <p className="mb-4 font-label text-[11px] font-semibold uppercase tracking-[0.16em] text-mist">
            What the bot was trained on
          </p>
          <ul className="flex flex-col gap-3">
            {DOCS.map((doc) => (
              <li
                key={doc.name}
                className="group flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-teal/40 hover:shadow-[0_10px_24px_-12px_rgba(11,65,65,0.18)]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-teal-tint text-teal-deep transition-colors group-hover:bg-teal group-hover:text-white">
                  <FileText className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-label text-[14px] font-semibold tracking-wide text-ink">
                    {doc.name}
                  </span>
                  <span className="block text-[12.5px] text-mist">{doc.pages}</span>
                </span>
                <span className="ml-auto hidden shrink-0 font-label text-[11px] tracking-wide text-mist/70 sm:block">
                  {doc.meta}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[13.5px] leading-relaxed text-mist">
            No fine-tuning, no prompt engineering. Drop in the files your team already
            maintains — when a document changes, answers change with it.
          </p>
        </Reveal>

        {/* Interactive chat */}
        <Reveal delay={240}>
          <TypingChat items={QA} />
        </Reveal>
      </div>
    </section>
  )
}
