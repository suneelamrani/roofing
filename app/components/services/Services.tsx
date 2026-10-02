import Image from "next/image";
import ServiceCard from "./ServiceCard";
import { SERVICE_CARDS } from "@/app/lib/services/cards";

const DEFAULT_TITLE = "Premier Roofing Services for Homes & Businesses in Florida";
const DEFAULT_DESCRIPTION =
    "Whether you need roof repairs, replacement, or maintenance, Neal Roofing & Waterproofing has the expertise to handle it all. Our comprehensive roofing solutions are tailored to meet your needs and ensure your home is protected. Trust us to deliver top-quality service and lasting results.";

type Props = {
    title?: string;
    description?: string;
    as?: "h1" | "h2";
};


function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
    );
}

export default function Services({
    title = DEFAULT_TITLE,
    description = DEFAULT_DESCRIPTION,
    as: Heading = "h2",
}: Props) {
    return (
        <section className="pt-24 pb-24 sm:pb-32 bg-lightishPink" aria-labelledby="services-heading">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                {/* Heading */}
                <div className="text-center" data-aos="fade-in" data-aos-duration="2000">
                    <p className="block p-2 mx-auto mb-5 text-xs text-gray-900 border border-gray-500 w-fit rounded-xl">
                        <span className="text-gray-800">OUR SERVICES</span> ・ TYPES OF ROOFINGS
                    </p>
                    <h2 id="services-heading" className="mt-1 text-3xl font-bold text-black md:text-4xl">
                        Premier Roofing Services for Homes &amp; Businesses in Florida
                    </h2>
                    <p className="max-w-4xl mx-auto mt-5 text-lg text-gray-900">
                        Whether you need roof repairs, replacement, or maintenance, Neal Roofing &amp;
                        Waterproofing has the expertise to handle it all. Our comprehensive roofing solutions are
                        tailored to meet your needs and ensure your home is protected. Trust us to deliver
                        top-quality service and lasting results.
                    </p>
                </div>

                {/* Cards */}
                <div className="flex justify-center">
                    <ul className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                        {SERVICE_CARDS.map((service) => (
                            <li key={service.href}>
                                <ServiceCard {...service} />
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA + trust badges */}
                <div className="flex flex-col items-center justify-center gap-5">
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-12 py-4 mt-20 text-lg font-semibold text-white rounded-md bg-custom w-fit hover:opacity-80"
                    >
                        Get My Free Estimate
                        <ArrowRightIcon className="w-5 h-5" />
                    </a>

                    <div className="flex gap-5">
                        <div className="flex gap-2 mb-5">
                            <Image src="/assets/core/tree-left-black.png" alt="Tree" width={28} height={28} className="w-auto h-7" />
                            <p className="text-xs text-gray-800">
                                <span className="font-bold">4.9—STAR</span> RATED BY <br />
                                800+ CUSTOMERS
                            </p>
                            <Image src="/assets/core/tree-right-black.png" alt="Tree" width={28} height={28} className="w-auto h-7" />
                        </div>

                        <div className="flex gap-2">
                            <Image src="/assets/icons/protection-black.svg" alt="Protection" width={20} height={20} className="w-auto h-5" />
                            <p className="text-xs text-gray-800">
                                <span className="font-bold">50-YEAR</span> PRODUCT <br />
                                WARRANTIES
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}