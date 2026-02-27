"use client";

import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faqData";

export function HomeFAQ() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-950 relative z-10">
            <div className="container mx-auto px-4 max-w-3xl">
                <h2 className="text-3xl font-bold text-center mb-12">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-4">
                    {faqItems.map((faq) => (
                        <AccordionItem
                            key={faq.value}
                            value={faq.value}
                            className="bg-white dark:bg-slate-900 px-6 rounded-2xl border border-slate-200 dark:border-slate-800"
                        >
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
}
