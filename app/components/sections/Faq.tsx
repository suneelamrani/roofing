"use client";

import type { FaqEntry } from "@/app/lib/faqs";
import Link from "next/link";
import { useId, useState } from "react";

/* -------------------------------- Icons -------------------------------- */

function PlusMinusIcon({ open }: { open: boolean }) {
    return (
        <svg
            className={`w-6 h-6 transition-transform duration-300 ${open ? "rotate-45" : "rotate-0"}`}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5px"
            stroke="#111827"
            aria-hidden="true"
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" stroke="#111827" fill="none" strokeWidth="1.5px" />
        </svg>
    );
}

/* ------------------------------- Component ------------------------------- */

type Props = {
    items: FaqEntry[];
    description?: string;
    showAllLink?: boolean;

};

export default function Faq({
    items,
    description = "Answering your questions about roofing.",
    showAllLink = false,
}: Props) {
    const baseId = useId();
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => setOpenIndex((current) => (current === index ? null : index));

    return (
        <section className="py-24 bg-white" aria-labelledby="faq-heading">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-4xl mx-auto divide-y divide-gray-900/10">
                    {/* Heading */}
                    <div className="text-center">
                        <p className="block p-2 mx-auto mb-5 text-xs text-gray-900 border border-gray-500 w-fit rounded-xl">
                            <span className="text-gray-800">FAQs</span> ・ WHAT CLIENTS ASK US
                        </p>
                        <h2
                            id="faq-heading"
                            className="mt-2 mb-6 text-3xl font-bold tracking-tight text-black md:text-4xl"
                        >
                            Frequently Asked Questions
                        </h2>
                        <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">{description}</p>
                    </div>

                    {/* Accordion */}
                    <div className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {items.map(({ question, answer, list, outro }, index) => {
                            const isOpen = openIndex === index;
                            const buttonId = `${baseId}-button-${index}`;
                            const panelId = `${baseId}-panel-${index}`;

                            return (
                                <div key={question} className="pb-6 mt-6">
                                    <h3>
                                        <button
                                            type="button"
                                            id={buttonId}
                                            aria-expanded={isOpen}
                                            aria-controls={panelId}
                                            onClick={() => toggle(index)}
                                            className="flex items-start justify-between w-full text-left text-gray-900"
                                        >
                                            <span className="text-base font-semibold leading-7">{question}</span>
                                            <span className="flex items-center ml-6 h-7">
                                                <PlusMinusIcon open={isOpen} />
                                            </span>
                                        </button>
                                    </h3>

                                    <div
                                        id={panelId}
                                        role="region"
                                        aria-labelledby={buttonId}
                                        hidden={!isOpen}
                                        className="pr-12 mt-2 text-base leading-7 text-gray-600"
                                    >
                                        <div className="space-y-4">
                                            {answer.split("\n\n").map((paragraph) => (
                                                <p key={paragraph}>{paragraph}</p>
                                            ))}
                                        </div>

                                        {list && (
                                            <ul className="pl-5 mt-2 list-disc">
                                                {list.map((item) => (
                                                    <li key={item}>{item}</li>
                                                ))}
                                            </ul>
                                        )}

                                        {outro && <p className="mt-2">{outro}</p>}
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Link to all FAQs */}
                    {showAllLink && (
                        <div className="pt-4 mt-8 text-center">
                            <p className="mb-4 text-gray-600">
                                For expert advice on roof replacements in Florida, contact us today for a free
                                inspection!
                            </p>

                            <Link
                                href="/faqs"
                                className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800"
                            >
                                View All FAQs
                                <span aria-hidden="true" className="ml-2">
                                    →
                                </span>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}