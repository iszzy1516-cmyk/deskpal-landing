import { SealLogo } from '@/components/SealLogo'

const COLUMNS = [
  {
    title: 'Product',
    links: ['Features', 'Live demo', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact', 'Press kit'],
  },
  {
    title: 'Trust',
    links: ['Security', 'Privacy policy', 'Terms of service', 'DPA', 'Status'],
  },
]

export function Footer() {
  return (
    <footer className="bg-ink-deep">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-12 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <SealLogo tone="light" className="h-9 w-9" />
              <span className="font-display text-[22px] font-semibold tracking-[-0.01em] text-paper">
                Deskpal
              </span>
            </a>
            <p className="mt-5 max-w-xs font-display text-[19px] italic leading-snug text-paper/70">
              Answers with receipts.
            </p>
            <p className="mt-4 max-w-xs text-[13.5px] leading-relaxed text-paper/45">
              A chatbot that only knows what your documents tell it — and shows its work
              every time.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-label text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-bright">
                {col.title}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="text-[14px] text-paper/60 transition-colors duration-150 hover:text-paper"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-label text-xs tracking-wide text-paper/40">
            © 2026 Deskpal, Inc. All rights reserved.
          </p>
          <p className="font-label text-xs tracking-wide text-paper/40">
            Made for the businesses that answer their own phones.
          </p>
        </div>
      </div>
    </footer>
  )
}
