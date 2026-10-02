import type { Metadata } from "next";
import Contact from "@/app/components/sections/Contact";
import Services from "@/app/components/services/Services";

const TITLE = "Expert Roofing for Homes & Businesses in South Florida";
const DESCRIPTION =
    "Regardless of the issues you're facing with your roof, gutters, or siding, Neal Roofing And Waterproofing has the answer. We offer a wide range of roofing options to fit your needs.";

export const metadata: Metadata = {
    title: `${TITLE} | Neal Roofing & Waterproofing`,
    description: DESCRIPTION,
    alternates: { canonical: "/services" },
};

export default function ServicesPage() {
    return (
        <main>
            <Services as="h1" title={TITLE} description={DESCRIPTION} />
            <Contact />
        </main>
    );
}