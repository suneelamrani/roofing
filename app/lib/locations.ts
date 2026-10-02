export type BulletItem = {
    title: string;
    text: string;
};

export type ServiceOption = {
    title: string;
    href: string;
    image: string;
    imageAlt: string;
    description: string;
};

export type LocationData = {
    slug: string;
    name: string;
    city: string;
    state: string;
    county: string;
    image: string;
    description: string;
    heroTitle?: string;
    services?: ServiceOption[];
    whyChooseUs?: {
        eyebrow?: string;
        title?: string;
        bullets: BulletItem[];
        image?: string;
    };
    localExperience?: {
        title?: string;
        bullets: BulletItem[];
        image?: string;
        cta?: string;
    };
    faqs?: Array<{
        question: string;
        answer: string;
    }>;
    faqSubtitle?: string;
};

export const LOCATIONS: LocationData[] = [
    {
        slug: "apollo-beach-fl",
        name: "Apollo Beach, FL",
        city: "Apollo Beach",
        state: "FL",
        county: "Hillsborough County",
        image: "/assets/locations/apollo-beach-fl.jpg",
        heroTitle: "Apollo Beach, FL",
        description: "Canal-front living puts salt air against the roof year-round. The fasteners, flashing, drip edge and vents degrade well before the shingle or tile above them does, and a roof specified as though it were six miles inland will come up short.",
        services: [
            {
                title: "Roof Repair",
                href: "/services/roof-repair-palm-beach-county-fl",
                image: "/assets/core/residential-roofing.webp",
                imageAlt: "Roof repair in Apollo Beach, FL",
                description: "Our expert team diagnoses and fixes leak issues, replacing damaged shingles or tile and restoring your roof's integrity.",
            },
            {
                title: "Roof Replacement",
                href: "/services/roof-replacement-palm-beach-county-fl",
                image: "/assets/core/replacement.webp",
                imageAlt: "Roof replacement in Apollo Beach, FL",
                description: "From complete tear-offs to new roof installations, we provide long-lasting materials and building-code compliant work.",
            },
        ],
        whyChooseUs: {
            eyebrow: "For exemplary roof installation, repair, & replacement service in Apollo Beach, FL",
            title: "Why Apollo Beach Homeowners Choose Neal Roofing",
            bullets: [
                {
                    title: "Corrosion-Resistant Fasteners and Components",
                    text: "We specify stainless or heavy-galvanized fasteners, stainless drip edge and marine-grade flashings for homes within a mile of salt water—standard galvanized nails rot out far sooner than the shingle above them.",
                },
                {
                    title: "Hyper-Local Weather Shielding",
                    text: "Coastal winds test every seam. We overlap underlayment beyond standard code and double-seal high-wind risk zones like ridges, gables, and perimeter eaves so wind-driven rain can't find an entry point.",
                },
                {
                    title: "Immediate Assessment of Storm Damage",
                    text: "When severe weather rolls off the bay, our local teams arrive fast with emergency tarping and documented roof damage reports for your insurance company.",
                },
            ],
            image: "/assets/services/residential/roof.webp",
        },
        localExperience: {
            title: "What Local Experience Means on an Apollo Beach Roof",
            bullets: [
                {
                    title: "Dedicated Waterproofing for Canal Homes",
                    text: "Salt moisture sits on flat and low-slope roof sections longer. We specify modified bitumen and elastomeric coatings that prevent ponding water intrusion.",
                },
                {
                    title: "Saltwater-Conscious Sealants and Metal Treatments",
                    text: "Standard sealants crack under salt and sun. We apply high-grade polyurethane and silicone sealants engineered for marine exposure.",
                },
                {
                    title: "Proven Resistance for Canal-Facing Properties",
                    text: "Wind speeds over open water hit waterfront homes harder. We use high-wind fastening patterns rated for coastal wind zones.",
                },
            ],
            image: "/assets/core/replacement.webp",
            cta: "Free Estimate",
        },
        faqs: [
            {
                question: "What fails first on a coastal roof in Apollo Beach?",
                answer: "Fasteners, metal flashings, and exposed sealants fail long before shingles or tiles. Salt air corrodes standard galvanized nails, allowing water into nail holes even when shingles look intact.",
            },
            {
                question: "What material holds up best near the water?",
                answer: "Heavy-duty tile and metal roofing systems perform best against salt air and hurricane-force winds. Dual-layer underlayments are essential on canal-front homes.",
            },
            {
                question: "How often should a canal-front roof be inspected?",
                answer: "We recommend inspecting canal-front roofs annually. Early detection of rusted flashing or sealant separation prevents costly deck rot and internal water damage.",
            },
        ],
        faqSubtitle: "Answering your questions about roofing services in Apollo Beach, FL.",
    },
    {
        slug: "atlantis-fl",
        name: "Atlantis, FL",
        city: "Atlantis",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/atlantis-fl.jpg",
        heroTitle: "Atlantis, FL",
        description: "A city of roughly two thousand people with consistent architecture means consistent expectations. Roof material, profile and color are governed here, and because the community was developed over a comparatively short span, neighbouring homes tend to reach the end of their roof life within a few years of one another.",
        services: [
            {
                title: "Roof Repair",
                href: "/services/roof-repair-palm-beach-county-fl",
                image: "/assets/core/residential-roofing.webp",
                imageAlt: "Roof repair in Atlantis, FL",
                description: "Swift and dependable repairs to fix leaks, damaged tiles, or flashing issues, preserving your home's structural integrity.",
            },
            {
                title: "Roof Replacement",
                href: "/services/roof-replacement-palm-beach-county-fl",
                image: "/assets/core/replacement.webp",
                imageAlt: "Roof replacement in Atlantis, FL",
                description: "Full-scale roof replacements using premium tiles and shingles, compliant with local architectural guidelines.",
            },
            {
                title: "Residential Roofing",
                href: "/services/residential-roofing-palm-beach-county-fl",
                image: "/assets/core/residential.jpeg",
                imageAlt: "Residential roofing in Atlantis, FL",
                description: "Specialized residential roofing for Atlantis estate homes, adhering to strict HOA guidelines and high architectural standards.",
            },
            {
                title: "Commercial Roofing",
                href: "/services/commercial-roofing-palm-beach-county-fl",
                image: "/assets/core/commercial-roof.webp",
                imageAlt: "Commercial roofing in Atlantis, FL",
                description: "Low-slope and flat roof systems for commercial and club facilities, designed for maximum durability and water resistance.",
            },
        ],
        whyChooseUs: {
            eyebrow: "For exemplary roof installation, repair, & replacement service in Atlantis, FL",
            title: "Why Atlantis Homeowners Choose Neal Roofing & Waterproofing",
            bullets: [
                {
                    title: "Systematic Inspections",
                    text: "We inspect entire roof planes to identify thermal cycling stress, tile fatigue, and flashing degradation before leaks impact interior spaces.",
                },
                {
                    title: "Proactive Maintenance Plans",
                    text: "Scheduled maintenance keeps gutters clear, replaces cracked mortar caps, and reseals vent penetrations to extend overall roof life.",
                },
                {
                    title: "Color-Coordinated Roofing Systems",
                    text: "We source approved tile colors and shingle profiles that match Atlantis neighborhood standards while exceeding current wind uplift codes.",
                },
            ],
            image: "/assets/services/residential/roof.webp",
        },
        localExperience: {
            title: "What Local Experience Means on an Atlantis Roof",
            bullets: [
                {
                    title: "Mastery of Thermal Protection",
                    text: "High UV exposure degrades underlayment. We install self-adhering modified bitumen underlayments that withstand intense South Florida heat.",
                },
                {
                    title: "Continuous Monitoring of Structural Supports",
                    text: "Roof decks expand and contract during summer rainstorms. We reinforce deck attachment points to prevent tile slippage and ridge cap cracking.",
                },
                {
                    title: "Expert Handling of Drainage Channels",
                    text: "We clear and align valley metals and scuppers so heavy rainfall flows off roofs quickly without pooling against fascia boards.",
                },
            ],
            image: "/assets/core/commercial-roof.webp",
            cta: "Free Estimate",
        },
        faqs: [
            {
                question: "Can a roofing contractor work within Atlantis HOA rules?",
                answer: "Yes. We work closely with Atlantis architectural review committees to ensure all tile colors, shingle profiles, and materials meet community standards before work begins.",
            },
            {
                question: "If my roof doesn't leak, why replace it in Atlantis?",
                answer: "Because thermal cycling degrades fastening systems and underlayment long before water penetrates ceilings. Replacing aging underlayment prevents catastrophic deck decay.",
            },
            {
                question: "How long does a roof replacement take in Atlantis?",
                answer: "Most residential tile and shingle replacements take 2 to 4 days, with full site cleanup and debris removal completed daily.",
            },
        ],
        faqSubtitle: "Questions from Atlantis homeowners about local roof repair, replacement and re-roofing.",
    },
    {
        slug: "aventura-fl",
        name: "Aventura, FL",
        city: "Aventura",
        state: "FL",
        county: "Miami-Dade County",
        image: "/assets/locations/aventura.jpg",
        description: "High-rise condominiums and waterfront properties in Aventura demand high-wind rated tile, metal, and modified bitumen roofing solutions.",
    },
    {
        slug: "belle-glade-fl",
        name: "Belle Glade, FL",
        city: "Belle Glade",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/belle-glade-fl.jpg",
        description: "Heavy agricultural exposure and intense sun in Belle Glade require heat-resistant shingle, metal, and agricultural building roofing systems.",
    },
    {
        slug: "boca-raton-fl",
        name: "Boca Raton, FL",
        city: "Boca Raton",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/boca-raton-fl.avif",
        description: "Luxury Mediterranean tile, metal, and architectural shingle roofing engineered for coastal high winds in Boca Raton, FL.",
    },
    {
        slug: "boynton-beach-fl",
        name: "Boynton Beach, FL",
        city: "Boynton Beach",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/boynton-beach.jpg",
        description: "Reliable residential tile and shingle reroofing services for Boynton Beach coastal communities and commercial properties.",
    },
    {
        slug: "brandon-fl",
        name: "Brandon, FL",
        city: "Brandon",
        state: "FL",
        county: "Hillsborough County",
        image: "/assets/locations/brandon-fl.jpg",
        description: "Comprehensive roof replacement and storm restoration services for single-family homes and business parks across Brandon, FL.",
    },
    {
        slug: "briny-breezes-fl",
        name: "Briny Breezes, FL",
        city: "Briny Breezes",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/briny-breezes-fl.jpeg",
        description: "Direct oceanfront exposure requires marine-grade stainless fasteners and hurricane-rated roofing systems in Briny Breezes, FL.",
    },
    {
        slug: "clearwater-fl",
        name: "Clearwater, FL",
        city: "Clearwater",
        state: "FL",
        county: "Pinellas County",
        image: "/assets/locations/clearwater-fl.jpeg",
        description: "Coastal hurricane-rated roofing and waterproof membrane installations built for Clearwater, FL homes and resorts.",
    },
    {
        slug: "cloud-lake-fl",
        name: "Cloud Lake, FL",
        city: "Cloud Lake",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/lake-worth-fl.jpeg",
        description: "Specialized shingle and tile roof replacement services for quiet residential enclaves in Cloud Lake, FL.",
    },
    {
        slug: "coral-springs-fl",
        name: "Coral Springs, FL",
        city: "Coral Springs",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/coral-springs.jpg",
        description: "High-performance tile and shingle roof installations tailored for Coral Springs family neighborhoods.",
    },
    {
        slug: "dania-beach-fl",
        name: "Dania Beach, FL",
        city: "Dania Beach",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/dania-beach.jpg",
        description: "Marine-rated commercial flat roofing and residential reroofing solutions in Dania Beach, FL.",
    },
    {
        slug: "davie-fl",
        name: "Davie, FL",
        city: "Davie",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/davie.jpg",
        description: "Equestrian estate and residential roof replacements engineered for high winds and heavy rainfall in Davie, FL.",
    },
    {
        slug: "deerfield-beach-fl",
        name: "Deerfield Beach, FL",
        city: "Deerfield Beach",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/deerfield-beach.jpg",
        description: "Oceanfront roofing systems, tile repair, and waterproofing protection for Deerfield Beach properties.",
    },
    {
        slug: "delray-beach-fl",
        name: "Delray Beach, FL",
        city: "Delray Beach",
        state: "FL",
        county: "Palm Beach County",
        image: "/assets/locations/delray-beach-fl.jpg",
        description: "Architectural tile, standing seam metal, and shingle reroofing for Delray Beach historic homes and coastal estates.",
    },
];

export function getAllLocations(): LocationData[] {
    return LOCATIONS;
}

export function getLocationBySlug(slug: string): LocationData | undefined {
    return LOCATIONS.find((loc) => loc.slug === slug);
}
