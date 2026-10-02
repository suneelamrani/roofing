import Image from "next/image";
import type { ReactNode } from "react";

const CHIPS = ["Roof Replacement", "Roof Repair", "Roofing Services"];

function CheckIcon() {
    return (
        <svg viewBox="0 0 256 256" aria-hidden="true" className="w-[15px] shrink-0 text-white" fill="currentColor">
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
        </svg>
    );
}

function WaterLeakIcon() {
    return (
        <svg className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
        </svg>
    );
}

function StormIcon() {
    return (
        <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
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
    heroTitle?: string;
    name: string;
    description: string;
    aside?: ReactNode;
};

export default function LocationHero({ heroTitle, name, description, aside }: Props) {
    const titleText = heroTitle || `Roofing Company in ${name}`;

    return (
        <section className="relative pt-12 pb-20 overflow-hidden bg-dark">
            <Image
                src="/assets/gallery/roof-project.jpeg"
                alt="roofing"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-dark/85" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                <div className="relative lg:grid lg:grid-cols-12 lg:gap-8 items-center">
                    {/* Left content */}
                    <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-7 lg:col-start-1 lg:text-left space-y-6">
                        {/* Trust badges */}
                        <div className="flex flex-wrap items-center justify-start gap-8">
                            <div className="flex items-center gap-2">
                                <Image src="/assets/core/tree-left.webp" alt="tree-left" width={40} height={40} className="w-auto h-9" />
                                <p className="text-white text-[11px] leading-tight max-w-[120px]">
                                    <span className="font-bold">4.9—STAR</span> RATED BY 800+ CUSTOMERS
                                </p>
                                <Image src="/assets/core/tree-right.webp" alt="tree-right" width={40} height={40} className="w-auto h-9" />
                            </div>

                            <div className="flex items-center gap-2">
                                <Image src="/assets/core/protection.svg" alt="protection" width={32} height={32} className="w-auto h-8" />
                                <p className="text-white text-[11px] leading-tight">
                                    <span className="font-bold">50-YEAR</span> PRODUCT <br />
                                    WARRANTIES
                                </p>
                            </div>
                        </div>

                        <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                            Trusted Company in <span className="text-lightPurple">{titleText}</span>
                        </h1>

                        <p className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed">
                            {description}
                        </p>

                        <ul className="flex flex-wrap items-center gap-3 pt-2">
                            {CHIPS.map((chip) => (
                                <li key={chip} className="flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-dark/90 border border-gray-700 rounded-full">
                                    <CheckIcon />
                                    {chip}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Card */}
                    <div className="mt-10 lg:mt-0 lg:col-span-5 lg:col-start-8 w-full">
                        {aside ?? <QuoteCard />}
                    </div>
                </div>
            </div>
        </section>
    );
}