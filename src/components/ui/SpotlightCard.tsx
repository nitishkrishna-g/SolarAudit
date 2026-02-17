"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({
    children,
    className = "",
    spotlightColor = "rgba(16, 185, 129, 0.15)" // Default to Emerald
}: {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={cn(
                "group relative border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden rounded-3xl",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative h-full z-10">{children}</div>
        </div>
    );
};
