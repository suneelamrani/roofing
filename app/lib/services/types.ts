import type { FaqEntry } from "../faqs";

export type ServiceCardData = {
    title: string;
    href: string;
    image: string;
    imageAlt: string;
    description: string;
};

export type FeatureItem = {
    title: string;
    text: string;
};

export type FeatureBlock = {
    eyebrow?: string;
    heading: string;
    items: FeatureItem[];
    image: {
        src: string;
        alt: string;
    };
    cta?: string;
};

export type ServiceHeroData = {
    title: string;
    highlight: string;
    description: string;
    image: string;
};

export type ServicePage = {
    slug: string;
    hero: ServiceHeroData;
    features: FeatureBlock[];
    faqs: FaqEntry[];
};