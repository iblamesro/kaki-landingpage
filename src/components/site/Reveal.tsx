import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'

export function Reveal({
  children,
  className = '',
  delay = '0s',
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`${visible ? 'fade-up' : 'opacity-0'} ${className}`} style={{ animationDelay: delay }}>
      {children}
    </Tag>
  )
}
