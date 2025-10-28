import * as React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface ThemedCardProps extends React.ComponentProps<typeof Card> {
  mode?: 'education' | 'engineering'
}

function ThemedCard({ className, mode, ...props }: ThemedCardProps) {
  return (
    <Card
      className={cn(
        'group hover:shadow-lg transition-shadow bg-card-themed border-card-themed',
        className
      )}
      {...props}
    />
  )
}

function ThemedCardHeader({ className, ...props }: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader className={cn(className)} {...props} />
}

function ThemedCardTitle({ className, ...props }: React.ComponentProps<typeof CardTitle>) {
  return (
    <CardTitle
      className={cn('text-heading', className)}
      {...props}
    />
  )
}

function ThemedCardDescription({ className, ...props }: React.ComponentProps<typeof CardDescription>) {
  return (
    <CardDescription
      className={cn('text-subheading', className)}
      {...props}
    />
  )
}

function ThemedCardContent({ className, ...props }: React.ComponentProps<typeof CardContent>) {
  return <CardContent className={cn(className)} {...props} />
}

export {
  ThemedCard,
  ThemedCardHeader,
  ThemedCardTitle,
  ThemedCardDescription,
  ThemedCardContent,
}

