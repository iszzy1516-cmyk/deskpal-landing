const BUSINESSES = [
  'Golden Crumb Bakery',
  'Hartley & Vine',
  'Nordica Cycles',
  'Copper Kettle Coffee',
  'Bluebird Books',
  'Petal Press Flowers',
  'Fern & Field Nursery',
  'Lumen Dental Studio',
]

/** Quiet, continuous marquee of customer wordmarks. Pauses on hover. */
export function LogoMarquee() {
  const row = [...BUSINESSES, ...BUSINESSES]
  return (
    <section aria-label="Trusted by small businesses" className="border-y border-line bg-paper-warm py-10">
      <p className="mb-7 text-center font-label text-[11px] font-semibold uppercase tracking-[0.2em] text-mist">
        On duty at 2,400+ small businesses
      </p>
      <div className="marquee-mask overflow-hidden">
        <div className="marquee-track flex w-max animate-marquee items-center gap-16 pr-16">
          {row.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="whitespace-nowrap font-display text-[21px] font-medium tracking-[-0.01em] text-ink/45 transition-colors duration-200 hover:text-ink"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
