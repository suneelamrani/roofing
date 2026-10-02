export type FaqEntry = {
    question: string;
    /** Opening sentence, or the whole answer when there is no list */
    answer: string;
    list?: string[];
    outro?: string;
};


export const All_FAQS: FaqEntry[] = [
    {
        question: "How long does a roof last in Florida?",
        answer: "The lifespan of a roof depends on the material used:",
        list: [
            "Asphalt Shingles: Typically last 12 to 30 years.",
            "Metal Roofs: Can endure 30 to 50 years.",
            "Slate Roofs: Often last 75 to 150 years.",
            "Clay Tiles: May last over a century.",
        ],
        outro: "Regular maintenance can extend these durations.",
    },

    {
        question: "How much does a new roof cost in Florida?",
        answer:
            "Roof replacement costs vary based on material, labor, and roof size. On average, replacements range from $5,500 to $11,000. Factors like hurricane-resistant materials or additional structural requirements may increase costs.",
    },

    {
        question: "How long does a roof replacement take in Florida?",
        answer:
            "The duration depends on roof size, complexity, and weather conditions. Typically, a residential roof replacement takes 1 to 3 days.",
    },

    {
        question: "What are the best roofing materials for Florida homes?",
        answer: "The ideal material depends on your needs:",
        list: [
            "Asphalt Shingles: Affordable and widely used.",
            "Metal Roofing: Durable and energy-efficient.",
            "Slate: Offers longevity and a classic look.",
            "Clay or Concrete Tiles: Excellent for hot climates.",
        ],
        outro:
            "Consider factors like budget, aesthetics, and local climate.",
    },

    {
        question: "How can I tell if my roof is leaking in Florida's rainy season?",
        answer:
            "Signs of a leaking roof include water stains on ceilings or walls, missing shingles, and moisture in the attic. Regular inspection can help detect leaks early.",
    },

    {
        question: "When should I replace my roof in Florida?",
        answer:
            "Consider replacement if your roof shows signs of aging, frequent leaks, missing shingles, or if it's nearing the end of its expected lifespan.",
    },

    {
        question: "How do I know if my roof needs repair or replacement in Florida?",
        answer:
            "Minor damage or isolated leaks may only require repairs. However, widespread issues, structural damage, or an aging roof often necessitate replacement.",
    },

    {
        question: "What does a roofing warranty cover in Florida?",
        answer:
            "Florida roofing warranties vary but generally cover material defects and workmanship. At Neal Roofing, we offer 20-year product warranties, ensuring long-term protection.",
    },

    {
        question: "What is the process of filing an insurance claim for Florida roof damage?",
        answer: "The process includes:",
        list: [
            "Document Damage: Take photos and notes.",
            "Contact Your Insurer: Report the damage promptly.",
            "Schedule an Inspection: An adjuster will assess the damage.",
            "Review the Claim: Understand coverage and any deductibles.",
            "Repair or Replace: Once approved, proceed with the work. We can assist throughout this process.",
        ],
    },

    {
        question:
            "What are the signs of a roof leak in Florida's hurricane-prone areas?",
        answer:
            "Look for water stains, mold growth, dampness in the attic, or peeling paint. Earlier signs include missing or damaged shingles.",
    },

    {
        question: "What is the best season to replace a roof in Florida?",
        answer:
            "Spring and fall offer mild weather, ideal for roof replacements. However, we operate year-round, ensuring minimal disruption.",
    },

    {
        question:
            "Do I need to replace all gutters when getting a new roof in Florida?",
        answer:
            "Not necessarily. If your gutters are in good condition and functioning properly, they can often be reused with your new roof.",
    },

    {
        question: "Can I stay in my home during roof replacement in Florida?",
        answer:
            "Yes, most homeowners stay in their homes during roof replacement. The work is primarily external, though there may be noise during working hours.",
    },

    {
        question: "How do you protect my property during roofing work in Florida?",
        answer:
            "We use tarps and protective barriers to shield your property, landscaping, and outdoor furniture. Our cleanup process ensures no debris or nails are left behind.",
    },

    {
        question: "What maintenance does a Florida roof need?",
        answer:
            "Regular maintenance includes annual inspections, gutter cleaning, removing debris, and checking for damaged shingles. Professional inspections are recommended every 2–3 years.",
    },

    {
        question: "Will a new roof lower my energy bills in Florida?",
        answer:
            "Yes, a properly installed new roof with good insulation and ventilation can improve energy efficiency and potentially lower your heating and cooling costs.",
    },

    {
        question: "Do you offer emergency repairs in Florida?",
        answer:
            "Yes, we provide 24/7 emergency repair services for urgent situations like storm damage or sudden leaks to prevent further damage to your home.",
    },

    {
        question: "What should I look for in a roofing warranty for Florida homes?",
        answer:
            "Look for warranties that cover both materials and workmanship. Check the duration, what's covered, and any maintenance requirements to maintain warranty validity.",
    },
];

export const FINANCING_FAQS: FaqEntry[] = [
    {
        question:
            "What financing options are available for roofing services in Palm Beach County?",
        answer:
            "At Neal Roofing & Waterproofing, we offer a variety of financing options to meet your needs, including flexible payment plans and competitive rates. We strive to make our roofing services accessible and affordable for every homeowner in Palm Beach County.",
    },

    {
        question:
            "How do I qualify for roofing financing with Neal Roofing & Waterproofing?",
        answer:
            "Qualifying for roofing financing with us is straightforward. Start by filling out our simple application form online or contact us directly. Our team will guide you through the process, considering your financial situation to find the best plan for you.",
    },

    {
        question:
            "Can I finance both roofing and waterproofing services together?",
        answer:
            "Yes, you can finance both roofing and waterproofing services together at Neal Roofing & Waterproofing. Combining services not only provides you with comprehensive protection for your home but also allows for more convenient financing options under one plan.",
    },
];