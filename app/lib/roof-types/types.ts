import type { FaqEntry } from "@/app/lib/faqs";

export type RoofTypeItem = {
    title: string;
    text: string;
};

export type RoofTypePage = {
    /** Must match the URL: /roof-types/<slug> */
    slug: string;
    hero: {
        title: string;
        /** Rendered in the accent color after the title */
        highlight: string;
        description: string;
        image: string;
    };
    /** Heading, intro and three icon cards */
    overview: {
        heading: string;
        description: string;
        cards: RoofTypeItem[];
    };
    /** Text with a checklist, next to a framed image */
    highlight: {
        eyebrow: string;
        heading: string;
        description: string;
        items: RoofTypeItem[];
        image: { src: string; alt: string };
    };
    faqs: {
        /** Line under "Frequently Asked Questions" */
        description: string;
        items: FaqEntry[];
    };
};