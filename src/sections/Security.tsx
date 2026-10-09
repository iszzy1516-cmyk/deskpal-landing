import { FileScan, LockKeyhole, ShieldCheck, Vault } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'

const ITEMS = [
  {
    icon: ShieldCheck,
    title: 'Prompt-injection defense',
    body: 'The bot answers from your documents only. Clever prompts can’t jailbreak it into freelancing, leaking instructions, or making things up.',
  },
  {
    icon: FileScan,
    title: 'Virus scanning',
    body: 'Every uploaded file is scanned and sanitized before it’s ever indexed. A poisoned PDF never reaches your customers.',
  },
  {
    icon: Vault,
    title: 'Tenant isolation',
    body: 'Your documents live in their own silo — separate index, separate keys. No cross-customer leakage, ever.',
  },
  {
    icon: LockKeyhole,
    title: 'Encrypted & audited',
    body: 'AES-256 at rest, TLS 1.3 in transit, and a full audit trail of who uploaded, asked, and changed what.',
  },
]

export function Security() {
  return (
    <section id="security" className="bg-ink">
      <div className="mx-auto max-w-[1440px] px-6 py-24 lg:px-12 lg:py-32">
        <SectionHeading
          index="03"
          eyebrow="Security"
          dark
          title={
            <>
              Security isn’t a <em className="italic text-amber">footer badge.</em>
            </>
          }
          sub="Your documents are your business. We treat them that way — architecturally, not just in the marketing copy."
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={i * 90} className="bg-ink">
              <div className="group flex h-full flex-col gap-4 p-7 transition-colors duration-200 hover:bg-ink-soft lg:p-8">
                <item.icon
                  className="h-7 w-7 text-teal-bright transition-transform duration-200 group-hover:-translate-y-1"
                  strokeWidth={1.6}
                />
                <h3 className="font-display text-[21px] font-medium leading-snug text-paper">
                  {item.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-paper/65">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <p className="mt-10 font-label text-xs uppercase tracking-[0.18em] text-paper/40">
            SOC 2 Type II in progress · GDPR-ready DPAs · Data never used to train shared models
          </p>
        </Reveal>
      </div>
    </section>
  )
}
