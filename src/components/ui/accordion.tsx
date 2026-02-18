"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionProps {
    children: React.ReactNode;
    className?: string;
    type?: "single" | "multiple";
    collapsible?: boolean;
}

const AccordionContext = React.createContext<{
    activeItem: string | null;
    setActiveItem: (value: string | null) => void;
}>({
    activeItem: null,
    setActiveItem: () => { },
});

export function Accordion({ children, className, type = "single", collapsible = true }: AccordionProps) {
    const [activeItem, setActiveItem] = React.useState<string | null>(null);

    const toggleItem = (value: string | null) => {
        if (value === null) {
            setActiveItem(null);
            return;
        }
        setActiveItem((prev) => (prev === value && collapsible ? null : value));
    };

    return (
        <AccordionContext.Provider value={{ activeItem, setActiveItem: toggleItem }}>
            <div className={className}>{children}</div>
        </AccordionContext.Provider>
    );
}

interface AccordionItemProps {
    children: React.ReactNode;
    value: string;
    className?: string;
}

export function AccordionItem({ children, value, className }: AccordionItemProps) {
    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child as any, { value });
        }
        return child;
    });

    return <div className={`border-b border-slate-200 dark:border-slate-800 ${className || ""}`}>{childrenWithProps}</div>;
}

interface AccordionTriggerProps {
    children: React.ReactNode;
    className?: string;
    value?: string; // Injected by AccordionItem
}

export function AccordionTrigger({ children, className, value }: AccordionTriggerProps) {
    const { activeItem, setActiveItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    return (
        <button
            onClick={() => value && setActiveItem(value)}
            className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className || ""} ${isOpen ? "[&[data-state=open]>svg]:rotate-180" : ""}`}
            data-state={isOpen ? "open" : "closed"}
        >
            {children}
            <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
        </button>
    );
}

interface AccordionContentProps {
    children: React.ReactNode;
    className?: string;
    value?: string; // Injected by AccordionItem
}

export function AccordionContent({ children, className, value }: AccordionContentProps) {
    const { activeItem } = React.useContext(AccordionContext);
    const isOpen = activeItem === value;

    return (
        <AnimatePresence initial={false}>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                >
                    <div className={`pt-0 pb-4 text-sm ${className || ""}`}>{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
