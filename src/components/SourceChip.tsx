import { FileText } from 'lucide-react'
import { cn } from '@/lib/utils'

type SourceChipProps = {
  file: string
  className?: string
  dark?: boolean
}

/** The signature citation chip — proof the answer came from your documents. */
export function SourceChip({ file, className, dark = false }: SourceChipProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-label text-[11px] font-medium tracking-wide',
        dark
          ? 'border-white/15 bg-white/10 text-paper/85'
          : 'border-amber/30 bg-amber-tint text-amber-deep',
        className,
      )}
    >
      <FileText className="h-3 w-3" strokeWidth={2.2} />
      {file}
    </span>
  )
}
