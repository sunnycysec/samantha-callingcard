import { cn } from '@/lib/utils'

export function Sprig({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn('h-5 w-28', className)}
    >
      <path d="M4 12h112" />
      <path d="M60 12c-4-5-9-7-14-6 3 4 8 6 14 6Z" />
      <path d="M60 12c4-5 9-7 14-6-3 4-8 6-14 6Z" />
      <path d="M60 12c-4 5-9 7-14 6 3-4 8-6 14-6Z" />
      <path d="M60 12c4 5 9 7 14 6-3-4-8-6-14-6Z" />
      <circle cx="60" cy="12" r="1.6" fill="currentColor" />
      <circle cx="18" cy="12" r="1.2" fill="currentColor" />
      <circle cx="102" cy="12" r="1.2" fill="currentColor" />
    </svg>
  )
}

export function Leaf({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      aria-hidden="true"
      className={cn('size-4', className)}
    >
      <path d="M4 20C4 10 10 4 20 4c0 10-6 16-16 16Z" />
      <path d="M4 20 14 10" />
    </svg>
  )
}
