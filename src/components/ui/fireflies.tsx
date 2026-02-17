"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Firefly {
    id: number;
    top: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
}

export const Fireflies = () => {
    const [fireflies, setFireflies] = useState<Firefly[]>([]);

    useEffect(() => {
        // Generate random fireflies only on client side to avoid hydration mismatch
        const count = 30;
        const newFireflies = Array.from({ length: count }).map((_, i) => ({
            id: i,
            top: Math.random() * 100,
            left: Math.random() * 100,
            size: Math.random() * 4 + 2, // 2px to 6px
            duration: Math.random() * 10 + 10, // 10s to 20s
            delay: Math.random() * 5,
        }));
        setFireflies(newFireflies);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {fireflies.map((fly) => (
                <motion.div
                    key={fly.id}
                    className="absolute rounded-full bg-emerald-400/60 blur-[1px]"
                    style={{
                        top: `${fly.top}%`,
                        left: `${fly.left}%`,
                        width: fly.size,
                        height: fly.size,
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                        opacity: [0, 1, 0.5, 0],
                        scale: [1, 1.5, 0.8, 1],
                    }}
                    transition={{
                        duration: fly.duration,
                        repeat: Infinity,
                        delay: fly.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};
