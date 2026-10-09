import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/Reveal'

type SectionHeadingProps = {
  /** Section number, e.g. "01" */
  index: string
  eyebrow: string
  title: ReactNode
  sub?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  className?: string
}

/** Numbered eyebrow + Fraunces headline, the editorial rhythm of the page. */
export function SectionHeading({
  title,
  sub,
  align = 'left',
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn(align === 'center' && 'text-center', className)}>
      <h2
        className={cn(
          'mt-5 font-display text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-5xl lg:text-[3.4rem]',
          dark ? 'text-paper' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            'mt-5 max-w-xl text-[17px] leading-relaxed',
            dark ? 'text-paper/70' : 'text-mist',
            align === 'center' && 'mx-auto',
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  )
}
