import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/app/components/sections/Contact";
import Faq from "@/app/components/sections/Faq";
import ServiceCard from "@/app/components/services/ServiceCard";
import LocationHero from "@/app/components/locations/LocationHero";
import { SERVICE_CARDS } from "@/app/lib/services/cards";
import { getAllLocations, getLocationBySlug } from "@/app/lib/locations";
import type { FaqEntry } from "@/app/lib/faqs";

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
    );
}

function CheckIconBlue() {
    return (
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-custom shrink-0 mt-0.5">
            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
    );
}

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
    return getAllLocations().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const location = getLocationBySlug(slug);
    if (!location) return {};

    return {
        title: `${location.heroTitle || `Roofing Company in ${location.name}`} | Neal Roofing & Waterproofing`,
        description: location.description,
        alternates: { canonical: `/locations/${slug}` },
    };
}

export default async function LocationSlugPage({ params }: Props) {
    const { slug } = await params;
    const location = getLocationBySlug(slug);

    if (!location) notFound();

    // Default fallbacks if location-specific custom data isn't set yet
    const displayServices = location.services || SERVICE_CARDS;

    const whyChooseUsBullets = location.whyChooseUs?.bullets || [
        {
            title: "Corrosion-Resistant Fasteners and Components",
            text: `We specify stainless or heavy-galvanized fasteners and marine-grade flashings for homes across ${location.name} to ensure long-lasting protection.`,
        },
        {
            title: "Hyper-Local Weather Shielding",
            text: `We overlap underlayment beyond standard code and double-seal high-wind risk zones like ridges and eaves so wind-driven rain can't penetrate.`,
        },
        {
            title: "Immediate Assessment of Storm Damage",
            text: `When severe weather strikes ${location.name}, our local teams arrive fast with emergency tarping and documented damage reports.`,
        },
    ];

    const localExperienceBullets = location.localExperience?.bullets || [
        {
            title: "Florida Code Compliance",
            text: "Complete adherence to strict Florida building codes and high-velocity hurricane zone standards.",
        },
        {
            title: "Precision Underlayment",
            text: "Advanced waterproof underlayment layers to protect your home against severe tropical rain intrusion.",
        },
        {
            title: "Fast Local Response",
            text: `Prompt inspection and emergency tarping service across ${location.name} whenever weather strikes.`,
        },
    ];

    const displayFaqs: FaqEntry[] = location.faqs || [
        {
            question: `Why choose a local roofing contractor in ${location.city}?`,
            answer: `Choosing a local contractor in ${location.city} ensures fast response times, deep knowledge of local Florida building codes, hurricane compliance, and personalized service.`,
        },
        {
            question: `What roofing services are offered in ${location.name}?`,
            answer: `We offer full-service residential and commercial roofing in ${location.name}, including complete roof replacement, roof repair, waterproofing, shingle, tile, metal, and flat roof installations.`,
        },
        {
            question: `Do you provide free roofing estimates in ${location.name}?`,
            answer: `Yes! We offer 100% free, no-obligation roof inspections and detailed estimates for homeowners and businesses in ${location.name}.`,
        },
    ];

    const whyChooseEyebrow = location.whyChooseUs?.eyebrow || `For exemplary roof installation, repair, & replacement service in ${location.name}`;
    const whyChooseTitle = location.whyChooseUs?.title || `Why ${location.city} Homeowners Choose Neal Roofing & Waterproofing`;
    const localExpTitle = location.localExperience?.title || `What Local Experience Means on an ${location.city} Roof`;
    const faqSubtitle = location.faqSubtitle || `Answering your questions about roofing services in ${location.name}.`;

    return (
        <main className="bg-white">
            {/* HERO SECTION */}
            <LocationHero
                heroTitle={location.heroTitle}
                name={location.name}
                description={location.description}
            />

            {/* SERVICES AVAILABLE IN THIS LOCATION */}
            <section className="pt-24 pb-24 sm:pb-32 bg-lightishPink" aria-labelledby="location-services-heading">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    <div className="text-center">
                        <p className="block p-2 mx-auto mb-5 text-xs text-gray-800 border border-gray-500 w-fit rounded-xl uppercase font-semibold">
                            OUR SERVICES
                        </p>
                        <h2 id="location-services-heading" className="mt-1 text-3xl md:text-4xl font-bold text-black">
                            Roofing for {location.city} Homes and Businesses
                        </h2>
                        <p className="max-w-3xl mx-auto mt-5 text-base md:text-lg text-gray-900 leading-relaxed">
                            {location.description}
                        </p>
                    </div>

                    {/* Services Cards */}
                    <div className="flex justify-center">
                        <ul className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                            {displayServices.map((service) => (
                                <li key={service.title} className="flex">
                                    <ServiceCard {...service} />
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA + trust badges */}
                    <div className="flex flex-col items-center justify-center gap-5 mt-16">
                        <a
                            href="#contact"
                            className="flex items-center gap-2 px-10 py-4 text-base md:text-lg font-semibold text-white rounded-md bg-custom w-fit hover:opacity-90 shadow-md transition-all"
                        >
                            Get My Free Estimate
                            <ArrowRightIcon className="w-5 h-5" />
                        </a>

                        <div className="flex flex-wrap justify-center gap-6 mt-2">
                            <div className="flex items-center gap-2">
                                <Image src="/assets/core/tree-left-black.png" alt="Tree" width={28} height={28} className="w-auto h-7" />
                                <p className="text-xs text-gray-800 leading-tight">
                                    <span className="font-bold">4.9—STAR</span> RATED BY <br />
                                    800+ CUSTOMERS
                                </p>
                                <Image src="/assets/core/tree-right-black.png" alt="Tree" width={28} height={28} className="w-auto h-7" />
                            </div>

                            <div className="flex items-center gap-2">
                                <Image src="/assets/icons/protection-black.svg" alt="Protection" width={20} height={20} className="w-auto h-5" />
                                <p className="text-xs text-gray-800 leading-tight">
                                    <span className="font-bold">50-YEAR</span> PRODUCT <br />
                                    WARRANTIES
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US SECTION */}
            <section className="py-20 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 space-y-6">
                        <p className="text-sm font-semibold text-custom tracking-normal">
                            {whyChooseEyebrow}
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            {whyChooseTitle}
                        </h2>

                        <ul className="space-y-5 text-gray-700 text-base">
                            {whyChooseUsBullets.map((bullet) => (
                                <li key={bullet.title} className="flex items-start gap-3">
                                    <CheckIconBlue />
                                    <div>
                                        <strong className="text-gray-900 font-bold">{bullet.title}: </strong>
                                        <span>{bullet.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3]">
                            <Image
                                src={location.whyChooseUs?.image || location.image || "/assets/services/residential/roof.webp"}
                                alt={`Roofing contractor in ${location.name}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCAL EXPERIENCE SECTION */}
            <section className="py-20 bg-lightishPink border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-5 order-2 lg:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3]">
                            <Image
                                src={location.localExperience?.image || "/assets/core/commercial-roof.webp"}
                                alt={`Roofing work in ${location.city}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
                        <div className="w-9 h-9 rounded-full bg-custom text-white flex items-center justify-center font-bold text-base shadow-sm">
                            <Image src="/assets/icons/check-icon-white.svg" alt="icon" width={16} height={16} className="w-auto h-4" />
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight text-gray-900">
                            {localExpTitle}
                        </h2>

                        <ul className="space-y-5 text-gray-700 text-base">
                            {localExperienceBullets.map((bullet) => (
                                <li key={bullet.title} className="flex items-start gap-3">
                                    <CheckIconBlue />
                                    <div>
                                        <strong className="text-gray-900 font-bold">{bullet.title}: </strong>
                                        <span>{bullet.text}</span>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-2">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-custom rounded-md hover:opacity-90 shadow-sm transition-all"
                            >
                                {location.localExperience?.cta || "Free Estimate"}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* LOCATION FAQS */}
            <Faq
                items={displayFaqs}
                description={faqSubtitle}
            />

            {/* CONTACT FORM SECTION */}
            <div className="px-6 mx-auto max-w-7xl lg:px-8 py-10" id="contact">
                <Contact />
            </div>

            {/* MAP / SERVICE AREA */}
            <section className="py-16 bg-lightishPink border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <p className="text-xs font-semibold text-custom uppercase tracking-wider mb-2">
                        OUR MAP
                    </p>
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Service Area
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-base">
                        Serving <strong className="text-custom">{location.name}</strong> and surrounding South Florida communities.
                    </p>

                    <div className="w-full h-80 rounded-2xl overflow-hidden border border-gray-300 shadow-md">
                        <iframe
                            src={`https://maps.google.com/maps?q=${encodeURIComponent(location.name)}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
                            className="w-full h-full border-0"
                            loading="lazy"
                            title={`Map of ${location.name}`}
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
