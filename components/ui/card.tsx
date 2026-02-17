import { cn } from "@/lib/utils";
import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "glass-light";
}

export function Card({ className, variant = "glass", ...props }: CardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl p-6 transition-all duration-300",
                variant === "glass" && "glass text-foreground",
                variant === "glass-light" && "glass-light text-foreground",
                variant === "default" && "bg-card text-card-foreground shadow-lg",
                className
            )}
            {...props}
        />
    );
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return <h3 className={cn("font-semibold leading-none tracking-tight", className)} {...props} />;
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn("p-6 pt-0", className)} {...props} />;
}
