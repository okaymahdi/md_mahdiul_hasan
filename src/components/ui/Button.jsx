import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        btn: 'border border-input dark:bg-slate-50 bg-quaternary dark:text-tertiary text-gray-50 shadow-sm hover:scale-105 shadow-md hover:bg-quaternary/80 dark:hover:bg-slate-100 transition-all duration-300 delay-300 ease-in-out',
        default:
          'bg-primary text-primary-foreground shadow hover:bg-primary/90 transition-all duration-300 delay-300 ease-in-out',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 transition-all duration-300 delay-300 ease-in-out',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground transition-all duration-300 delay-300 ease-in-out',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80 transition-all duration-300 delay-300 ease-in-out',
        ghost:
          'hover:bg-accent hover:text-accent-foreground transition-all duration-300 delay-300 ease-in-out',
        link: 'text-primary-forground underline-offset-4 hover:scale-105 transition-all duration-300 delay-300 ease-in-out',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
