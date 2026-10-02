import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Contact from "@/app/components/sections/Contact";
import Faq from "@/app/components/sections/Faq";
import RoofTypeHighlight from "@/app/components/roof-types/RoofTypeHighlight";
import RoofTypeOverview from "@/app/components/roof-types/RoofTypeOverview";
import ServiceHero from "@/app/components/services/ServiceHero";
import { getAllRoofTypes, getRoofTypeBySlug } from "@/app/lib/roof-types";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllRoofTypes().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const roof = getRoofTypeBySlug(slug);
    if (!roof) return {};

    return {
        title: `${roof.hero.title} ${roof.hero.highlight} | Neal Roofing & Waterproofing`,
        description: roof.hero.description,
        alternates: { canonical: `/roof-types/${slug}` },
    };
}

export default async function RoofTypePage({ params }: Props) {
    const { slug } = await params;
    const roof = getRoofTypeBySlug(slug);
    if (!roof) notFound();

    return (
        <>
            <ServiceHero {...roof.hero} />
            <RoofTypeOverview {...roof.overview} />
            <RoofTypeHighlight {...roof.highlight} />
            <Faq items={roof.faqs.items} description={roof.faqs.description} />
            <Contact />
        </>
    );
}