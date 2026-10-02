import type { ServicePage } from "@/app/lib/services/types";

export const commercialRoofing: ServicePage = {
    slug: "commercial-roofing-palm-beach-county-fl",
    hero: {
        title: "Top Commercial Roofing in",
        highlight: "Palm Beach County, FL",
        description:
            "Our dedicated team uses the finest materials and state-of-the-art techniques to deliver durable, weather-resistant roofing solutions tailored to your business needs.",
        image: "/assets/services/commercial/commercial.jpg",
    },
    features: [
        {
            eyebrow: "Unmatched Quality and Reliability",
            heading: "Why Choose Neal Roofing & Waterproofing?",
            items: [
                {
                    title: "Comprehensive Roof Types",
                    text: "We offer BURs, EPDM, Flat, Modified Bitumen, PVC, Coatings, Spray Foam, and TPO.",
                },
                {
                    title: "Advanced Technology",
                    text: "Leveraging the latest roofing technology for efficient, long-lasting results.",
                },
                {
                    title: "Exceptional Customer Service",
                    text: "Dedicated support and transparent communication throughout your roofing project.",
                },
            ],
            image: {
                src: "/assets/services/commercial/commercial-roof.jpeg",
                alt: "Commercial flat roof with skylight and rooftop vent",
            },
        },
        {
            heading: "Why We Stand Out As Roofing Leaders in Palm Beach County",
            items: [
                {
                    title: "Expertise and Experience",
                    text: "Decades of roofing expertise ensuring your project is in skilled hands in [Palm Beach County, FL](/locations).",
                },
                {
                    title: "Quality Materials",
                    text: "We use only the highest quality materials for durability and performance.",
                },
                {
                    title: "Tailored Solutions",
                    text: "Customized roofing solutions designed to meet the unique needs of your commercial property.",
                },
            ],
            image: {
                src: "/assets/services/commercial/roofing.webp",
                alt: "Aerial view of a multi-level commercial building roof",
            },
            cta: "Free Estimate",
        },
    ],
    faqs: [
        {
            question: "What commercial roofing services do you offer in Palm Beach County?",
            answer: "TODO: add answer",
        },
        {
            question: "How do you ensure the quality of your roofing projects?",
            answer: "TODO: add answer",
        },
        {
            question: "Can you handle large commercial roofing projects?",
            answer: "TODO: add answer",
        },
    ],
};