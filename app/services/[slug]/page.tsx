import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Contact from "@/app/components/sections/Contact";
import Faq from "@/app/components/sections/Faq";
import FeatureSection from "@/app/components/services/FeatureSection";
import ServiceHero from "@/app/components/services/ServiceHero";
import { getAllServices, getServiceBySlug } from "@/app/lib/services";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
    return getAllServices().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) return {};

    return {
        title: `${service.hero.title} ${service.hero.highlight} | Neal Roofing & Waterproofing`,
        description: service.hero.description,
        alternates: { canonical: `/services/${slug}` },
    };
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    if (!service) notFound();

    return (
        <>
            <ServiceHero {...service.hero} />

            {service.features.map((block: any, index: any) => (
                <FeatureSection
                    key={block.heading}
                    block={block}
                    imageSide={index % 2 === 0 ? "right" : "left"}
                />
            ))}

            <Faq items={service.faqs} />
            <Contact />
        </>
    );
}