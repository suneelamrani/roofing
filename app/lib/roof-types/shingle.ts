import type { RoofTypePage } from "./types";

export const shingleRoof: RoofTypePage = {
    slug: "shingle",
    hero: {
        title: "Palm Beach County Leading",
        highlight: "Shingle Roofing Contractor",
        description:
            "Our team of experts commits to nothing less than the best work on your project and communicate with you every step of the way.",
        image: "/assets/core/shingle-roof.webp",
    },
    overview: {
        heading: "Types of Shingle Roofs We Install",
        description:
            "When it comes to asphalt shingles, there are three types to consider for your project: three-tab asphalt shingles, architectural, and luxury asphalt shingles.",
        cards: [
            {
                title: "Three-tab Asphalt Shingles",
                text: "These lightweight and energy-efficient shingles are the most common and easy to maintain, they are named for the cutout.",
            },
            {
                title: "Architectural Asphalt Shingles",
                text: "The longest-lasting shingles, and the choice for homes where curb appeal matters most. Great choice for a wider range of options.",
            },
            {
                title: "Luxury Shingles",
                text: "For those who value both style and cost, luxury shingles are a worthwhile investment. The luxury style is designed to emulate high-end cedar.",
            },
        ],
    },
    highlight: {
        eyebrow: "Elevate Your Roof",
        heading: "Why You Need a Shingle Roof",
        description:
            "Discover the durability, aesthetic appeal, and cost-effectiveness of shingle roofing for your home.",
        items: [
            {
                title: "Affordability",
                text: "Shingle is the go-to answer for homeowners on a budget. With proper installation and maintenance, a quality roof doesn't have to break the bank.",
            },
            {
                title: "Color Variety",
                text: "From neutrals to statement colors, there are a variety of options to choose from. Based on your budget, you can even choose shingle roofing that emulates wood.",
            },
            {
                title: "Simple Installation",
                text: "Shingle roof repair is simple and the most cost-effective. Should the job require it, new shingles can be installed on top of existing shingles with little difficulty.",
            },
        ],
        image: {
            src: "/assets/core/shingle.jpg",
            alt: "Aerial view of a shingle roof in Palm Beach County",
        },
    },
    faqs: {
        description: "Answering your questions about shingle roofing.",
        items: [
            { question: "What's the cost of a new shingle roof in Palm Beach County?", answer: "The cost of asphalt roofs can vary based on the project scope. The size and slope of your home will impact the final cost, in addition to repairs that may be needed underneath your old shingles, and the type of shingles you choose for the project." },
            { question: "What are the most popular types of shingles in Palm Beach County?", answer: "Architectural shingles have been growing steadily in popularity in the area, and with their longevity, it’s clear to see why. Take solace in knowing that when you install an architectural roof that it is built to last a long time." },
            { question: "What is the average lifespan of a roof?", answer: "With proper maintenance, the average roof can last about 25 years, while luxury roofs can go for as long as 40 years." },
        ],
    },
};