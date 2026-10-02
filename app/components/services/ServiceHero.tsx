import Image from "next/image";
import type { ReactNode } from "react";

const CHIPS = ["Roof Replacement", "Roof Repair", "Roofing Services"];

function CheckIcon() {
    return (
        <svg viewBox="0 0 256 256" aria-hidden="true" className="w-[15px] shrink-0" fill="currentColor">
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
        </svg>
    );
}

function QuoteCard() {
    return (
        <div className="max-w-md mx-auto border border-gray-600 bg-dark/60 rounded-xl sm:w-full">
            <div className="px-6 py-8 text-center sm:px-10">
                <h2 className="text-xl font-bold text-white">Roof Trouble? Let Us Help.</h2>
                {/* TODO: embed the CRM form here, or pass it through the `aside` prop */}
            </div>
        </div>
    );
}

type Props = {
    title: string;
    highlight: string;
    description: string;
    image: string;
    /** Replaces the default card, e.g. the CRM embed */
    aside?: ReactNode;
};

export default function ServiceHero({ title, highlight, description, image, aside }: Props) {
    return (
        <section className="relative pt-10 pb-20">
            <Image src={image} alt="" fill priority sizes="100vw" className="object-cover object-center" />
            <div className="absolute inset-0 bg-dark/85" />

            <div className="relative mx-auto max-w-7xl">
                <div className="px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-6 lg:flex lg:items-center">
                        <div>
                            {/* Trust badges */}
                            <div className="flex justify-start gap-10 mb-5">
                                <div className="flex items-center gap-1">
                                    <Image src="/assets/core/tree-left.webp" alt="tree-left" width={40} height={40} className="w-auto h-10" />
                                    <p className="text-white text-[10px] max-w-[100px] sm:text-[13px] sm:max-w-[130px]">
                                        <span className="font-bold">4.9—STAR</span> RATED BY 800+ CUSTOMERS
                                    </p>
                                    <Image src="/assets/core/tree-right.webp" alt="tree-right" width={40} height={40} className="w-auto h-10" />
                                </div>
                                <div className="flex gap-3">
                                    <Image src="/assets/core/protection.svg" alt="protection" width={40} height={40} className="w-auto h-10" />
                                    <p className="text-white text-[10px] sm:text-sm">
                                        <span className="font-bold">50-YEAR</span> PRODUCT <br />
                                        WARRANTIES
                                    </p>
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-[59px]">
                                {title} <span className="text-lightPurple">{highlight}</span>
                            </h1>

                            <p className="mt-3 text-base text-gray-300 sm:mt-5">{description}</p>

                            <ul className="flex flex-col gap-4 mt-5 md:flex-row">
                                {CHIPS.map((chip) => (
                                    <li key={chip} className="flex items-center gap-3 p-3 text-sm text-white bg-dark/90 rounded-3xl">
                                        <CheckIcon />
                                        {chip}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 lg:col-span-6 lg:mt-0">{aside ?? <QuoteCard />}</div>
                </div>
            </div>
        </section>
    );
}