"use client";

import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface SliderProps {
    min: number;
    max: number;
    step?: number;
    value: number;
    onChange: (value: number) => void;
    className?: string;
}

export const Slider: React.FC<SliderProps> = ({
    min,
    max,
    step = 1,
    value,
    onChange,
    className,
}) => {
    const [dragging, setDragging] = React.useState(false);
    const progressBarRef = React.useRef<HTMLDivElement>(null);

    const percentage = ((value - min) / (max - min)) * 100;

    const handleInteraction = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!progressBarRef.current) return;

        const rect = progressBarRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX;

        let newValue = ((clientX - rect.left) / rect.width) * (max - min) + min;
        newValue = Math.max(min, Math.min(max, newValue));

        // Round to step
        newValue = Math.round(newValue / step) * step;

        onChange(newValue);
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        setDragging(true);
        handleInteraction(e);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setDragging(true);
        handleInteraction(e);
    };

    React.useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (dragging) {
                handleInteraction(e);
            }
        };

        const handleMouseUp = () => {
            setDragging(false);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (dragging) {
                handleInteraction(e);
            }
        };

        if (dragging) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [dragging, min, max, step, onChange]);

    return (
        <div
            className={cn("relative h-6 w-full flex items-center select-none cursor-pointer touch-none", className)}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            ref={progressBarRef}
        >
            {/* Track Background */}
            <div className="absolute h-2 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                {/* Fill */}
                <motion.div
                    className="h-full bg-emerald-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentage}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>

            {/* Thumb */}
            <motion.div
                className="absolute h-6 w-6 bg-white border-2 border-emerald-500 rounded-full shadow-md z-10 flex items-center justify-center"
                initial={{ left: 0 }}
                animate={{ left: `calc(${percentage}% - 12px)` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
                <div className="w-2 h-2 bg-emerald-500 rounded-full" />
            </motion.div>
        </div>
    );
};
