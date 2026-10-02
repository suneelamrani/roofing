import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/app/components/sections/Contact";
import { getAllLocations } from "@/app/lib/locations";
import Image from "next/image";

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
    );
}

export const metadata: Metadata = {
    title: "Locations We Serve Across Florida | Neal Roofing & Waterproofing",
    description:
        "Explore our service areas across Florida. Neal Roofing & Waterproofing provides expert residential & commercial roofing services throughout Palm Beach County, Central Florida, and South Florida.",
    alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
    const locations = getAllLocations();

    return (
        <main>
            <div className="pt-24 pb-24 sm:pb-32 bg-lightishPink">
                <div className="px-6 mx-auto max-w-7xl lg:px-8">
                    {/* Header */}
                    <div className="text-center" data-aos="fade-in">
                        <p className="block p-2 mx-auto mb-5 text-xs border border-gray-500 w-fit rounded-xl text-gray-800">
                            LOCATIONS
                        </p>
                        <h1 className="mt-1 text-4xl font-bold text-black">
                            Your Roofing Solution across South Florida
                        </h1>
                        <p className="max-w-2xl mx-auto mt-5 text-lg text-gray-900">
                            Experience unmatched durability and expert craftsmanship with our roofing services tailored for South
                            Florida's unique climate.

                        </p>
                    </div>

                    {/* Locations Grid */}
                    <div className="flex justify-center">
                        <div className="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-3">
                            {locations.map((location) => (
                                <div className="flex max-w-sm overflow-hidden bg-gray-100 border divide-y divide-gray-200 rounded-lg shadow border-custom">
                                    <Link
                                        key={location.slug}
                                        href={`/locations/${location.slug}`}
                                        className="flex flex-col justify-between"
                                    >
                                        <div className="flex items-center justify-center flex-grow w-full px-4 py-5 text-center sm:px-6">
                                            <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
                                                {location.name}
                                            </h2>
                                        </div>
                                        <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                                            <img
                                                src={location.image}
                                                alt={`Roofing services in ${location.name}`}
                                                loading="lazy"
                                                className="min-w-full border-b rounded-b-lg h-72 border-teal"
                                            />
                                        </div>
                                    </Link>
                                </div>

                            ))}
                        </div>
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
            </div>


            {/* Contact Form */}
            <div className="bg-white px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <Contact />
                </div>
            </div>
        </main>
    );
}
