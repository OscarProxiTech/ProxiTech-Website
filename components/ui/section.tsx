import * as React from 'react'
import { cn } from '@/lib/utils'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary'
}

function Section({ className, variant = 'primary', ...props }: SectionProps) {
  return (
    <section
      className={cn(
        'py-20',
        variant === 'primary' ? 'bg-section-primary' : 'bg-section-secondary',
        className
      )}
      {...props}
    />
  )
}

function SectionTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn('text-3xl md:text-4xl font-bold mb-4 text-heading', className)}
      {...props}
    />
  )
}

function SectionDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn('text-lg text-subheading max-w-2xl mx-auto', className)}
      {...props}
    />
  )
}

function SectionHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('text-center mb-12', className)}
      {...props}
    />
  )
}

export { Section, SectionTitle, SectionDescription, SectionHeader }

