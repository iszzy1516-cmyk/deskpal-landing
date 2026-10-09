import { cn } from '@/lib/utils'

type SealLogoProps = {
  className?: string
  /** 'light' for dark backgrounds, 'dark' for light backgrounds */
  tone?: 'light' | 'dark'
}

/**
 * Deskpal seal — a certification-stamp style badge.
 * Solid outer ring, perforated inner ring, Fraunces "D".
 */
export function SealLogo({ className, tone = 'dark' }: SealLogoProps) {
  const ring = tone === 'light' ? '#F4F7F6' : '#258B83'
  const letter = tone === 'light' ? '#F4F7F6' : '#0B4141'
  const perforation = tone === 'light' ? 'rgba(244,247,246,0.55)' : 'rgba(37,139,131,0.45)'
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn('h-9 w-9', className)} aria-label="Deskpal logo">
      <circle cx="24" cy="24" r="22" stroke={ring} strokeWidth="2.4" />
      <circle cx="24" cy="24" r="17" stroke={perforation} strokeWidth="1.4" strokeDasharray="1.6 3.1" strokeLinecap="round" />
      <text
        x="24"
        y="30.5"
        textAnchor="middle"
        fill={letter}
        fontFamily="Fraunces, Georgia, serif"
        fontWeight="600"
        fontSize="21"
      >
        D
      </text>
    </svg>
  )
}
