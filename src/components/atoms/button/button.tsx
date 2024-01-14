import { forwardRef, ButtonHTMLAttributes } from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      /**
       * Intent of the button
       * @default "fill"
       */
      intent: {
        fill: "",
        outline:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
       /**
       * Tone of the button
       * @default "primary"
       */
      tone: {
        primary: "",
        secondary:
          "",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        creative:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      /**
       * Size of the button
       * @default "medium"
       */
      size: {
        small: "h-9 px-3",
        medium: "h-10 px-4 py-2",
        large: "h-11 px-8",
      },
    },
    compoundVariants: [{
      intent: 'fill',
      tone: 'primary',
      className: 'bg-primary text-primary-foreground hover:bg-primary/90'
    }, {
      intent: 'fill',
      tone: 'secondary',
      className: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
    },
    {
      intent: 'ghost',
      tone: 'primary',
      className: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
    }],
    defaultVariants: {
      intent: "fill",
      tone: "primary",
      size: "medium",
    },
  }
)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>,
   VariantProps<typeof buttonVariants> {
  icon?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ intent, tone, size, children, ...props }, ref) => {
     return(
      <button
        role="button"
        className={cn(buttonVariants({ intent, tone, size }))}
        ref={ref}
        {...props}>
        {children}
      </button>
    );
  }
)
Button.displayName = "Button"

export default Button