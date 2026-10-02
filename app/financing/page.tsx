import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";
import FinancingHero from "@/app/components/financing/FinancingHero";
import FinancingFeatures from "../components/financing/FinancingFeatures";
import Packages from "../components/financing/Packages";
import Faq from "@/app/components/sections/Faq";
import { FINANCING_FAQS } from "@/app/lib/faqs";


export const metadata: Metadata = {
    title: `Roofing Financing | Neal Roofing & Waterproofing`,
    description: "No cash? No problem! Finance your roof replacement with Neal Roofing & Waterproofing and enjoy stress-free payments. Learn more.",
    alternates: { canonical: "/financing" },
};

export default function FinancingPage() {
    return (
        <main>

            <FinancingHero />

            <FinancingFeatures />

            <Packages />

            <Faq items={FINANCING_FAQS} description="Answering your questions about roofing financing." />

            <Contact />
        </main>
    );
}