import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { SealLogo } from '@/components/SealLogo'
import { cn } from '@/lib/utils'

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Demo', href: '#demo' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Security', href: '#security' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-line bg-paper/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center gap-8 px-6 lg:px-12">
        <a href="#top" className="flex items-center gap-2.5" aria-label="Deskpal home">
          <SealLogo className="h-9 w-9" />
          <span className="font-display text-[22px] font-semibold tracking-[-0.01em] text-ink">
            Deskpal
          </span>
        </a>

        <nav className="ml-6 hidden items-center gap-7 lg:flex" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium text-ink-soft/80 transition-colors duration-150 hover:text-teal-deep"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto hidden items-center gap-3 lg:flex">
          <a
            href={`${import.meta.env.BASE_URL}signin`}
            className={cn(
              'rounded-xl px-4 py-2.5 text-[14px] font-semibold transition-colors',
              scrolled ? 'text-ink-soft hover:text-teal-deep' : 'text-paper/90 hover:text-white',
            )}
          >
            Sign in
          </a>
          <a
            href={`${import.meta.env.BASE_URL}get-started`}
            className={cn(
              'rounded-xl px-5 py-2.5 text-[14px] font-semibold transition-all duration-200 hover:-translate-y-0.5',
              scrolled
                ? 'bg-teal text-white shadow-[0_6px_18px_-8px_rgba(37,139,131,0.6)] hover:bg-teal-deep hover:shadow-[0_10px_24px_-8px_rgba(37,139,131,0.7)]'
                : 'bg-white text-teal-deep shadow-[0_6px_18px_-8px_rgba(0,0,0,0.35)] hover:bg-paper',
            )}
          >
            Get started
          </a>
        </div>

        <button
          className="ml-auto rounded-lg p-2 text-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-b border-line bg-paper transition-all duration-300 lg:hidden',
          open ? 'max-h-96 opacity-100' : 'max-h-0 border-b-0 opacity-0',
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-4" aria-label="Mobile">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-[15px] font-medium text-ink-soft transition-colors hover:bg-teal-tint"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-2 flex gap-3 border-t border-line pt-4">
            <a
              href={`${import.meta.env.BASE_URL}signin`}
              className="flex-1 rounded-xl border border-line px-4 py-3 text-center text-[14px] font-semibold text-ink"
            >
              Sign in
            </a>
            <a
              href={`${import.meta.env.BASE_URL}get-started`}
              onClick={() => setOpen(false)}
              className="flex-1 rounded-xl bg-teal px-4 py-3 text-center text-[14px] font-semibold text-white"
            >
              Get started
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}
