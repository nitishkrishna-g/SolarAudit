import * as React from "react"



import { cn } from "@/lib/utils"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    asChild?: boolean
    variant?: "primary" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? React.Fragment : "button"

        // Compute classes
        const buttonClass = cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            {
                "bg-primary text-white hover:bg-emerald-700 shadow-lg shadow-emerald-500/20": variant === "primary",
                "bg-secondary text-slate-900 hover:bg-amber-400": variant === "secondary",
                "border border-border-color bg-surface hover:bg-slate-100 dark:hover:bg-slate-800 text-text-primary": variant === "outline",
                "hover:bg-slate-100 dark:hover:bg-slate-800 text-text-primary": variant === "ghost",
                "h-10 px-4 py-2": size === "default",
                "h-9 rounded-md px-3": size === "sm",
                "h-11 rounded-md px-8": size === "lg",
                "h-10 w-10": size === "icon",
            },
            className
        )

        if (asChild && React.isValidElement(props.children)) {
            const childKey = (props.children as React.ReactElement<any>).key || undefined;
            return React.cloneElement(props.children as React.ReactElement<any>, {
                className: cn(buttonClass, (props.children as React.ReactElement<any>).props.className),
                ...props,
                key: childKey, // Preserve key if it exists
                ref,
            } as any)
        }

        return (
            <button
                className={buttonClass}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
