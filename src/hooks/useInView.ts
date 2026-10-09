import { useEffect, useRef, useState } from 'react'

type Options = IntersectionObserverInit & { once?: boolean }

export function useInView<T extends HTMLElement = HTMLDivElement>(options?: Options) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const optionsRef = useRef(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const { once = true, ...init } = optionsRef.current ?? {}
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px', ...init },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
