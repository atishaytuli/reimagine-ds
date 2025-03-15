import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (

      <input
        type={type}
        autoComplete="off"
        autoCorrect="off"
        spellCheck="true"
        className={cn(
          "flex h-10 w-full bg-transparent px-0 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 focus-visible:border-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
