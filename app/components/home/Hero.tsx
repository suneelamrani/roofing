import Image from "next/image";
import HeroForm from "../HeroForm";

const SERVICES = ["Roof Replacement", "Roof Repair", "Roofing Services"];

function CheckIcon() {
    return (
        <svg viewBox="0 0 256 256" aria-hidden="true" className="w-[15px] shrink-0" fill="currentColor">
            <path d="M232.49,80.49l-128,128a12,12,0,0,1-17,0l-56-56a12,12,0,1,1,17-17L96,183,215.51,63.51a12,12,0,0,1,17,17Z" />
        </svg>
    );
}

export default function Hero() {
    return (
        <section className="relative pt-10 pb-20">
            <Image
                src="/assets/core/roof.webp"
                alt="roof"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-dark/85" />

            <div className="relative mx-auto max-w-7xl">
                <div className="px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:mx-auto lg:col-span-6 lg:flex lg:items-center lg:text-left">
                        <div>
                            <div className="flex justify-start gap-10 mx-auto sm:justify-center lg:justify-start">
                                <div className="flex items-center justify-between gap-1 mb-5">
                                    <Image src="/assets/core/tree-left.webp" alt="tree left" width={40} height={40} className="w-auto h-10" />
                                    <p className="text-white text-[10px] max-w-[100px] sm:text-[13px] sm:max-w-[130px]">
                                        <span className="font-bold">4.9—STAR</span> RATED BY 800+ CUSTOMERS
                                    </p>
                                    <Image src="/assets/core/tree-right.webp" alt="tree right" width={40} height={40} className="w-auto h-10" />
                                </div>

                                <div className="flex gap-3">
                                    <Image src="/assets/core/protection.svg" alt="protection" width={40} height={40} className="w-auto h-10" />
                                    <p className="text-white text-[10px] sm:text-sm">
                                        <span className="font-bold">50-YEAR</span> PRODUCT <br />
                                        WARRANTIES
                                    </p>
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-[59px]">
                                #1 Top-Rated Roofing Company <br />
                                in <span className="text-lightPurple">Florida</span>
                            </h1>

                            <p className="mt-3 text-base text-gray-300 sm:mt-5">
                                With over 50 years in the roofing industry, our team is ready to answer your
                                questions and address your concerns.{" "}
                                <span className="font-bold">
                                    We know you will be thrilled with the finished product.
                                </span>
                            </p>

                            <ul className="flex flex-col justify-center gap-4 mt-5 md:flex-row lg:justify-start">
                                {SERVICES.map((service) => (
                                    <li
                                        key={service}
                                        className="flex items-center gap-3 p-3 text-sm text-white bg-dark/90 rounded-3xl"
                                    >
                                        <CheckIcon />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="mt-16 ml-auto sm:mt-24 lg:col-span-6 lg:mt-0">
                        <div className="max-w-md mx-auto border border-gray-600 bg-dark/60 rounded-xl sm:w-full sm:overflow-hidden">
                            <div className="px-4 md:px-6 py-8 text-center lg:px-10">
                                <p className="mb-1 text-lg text-white">
                                    Schedule your <span className="font-bold underline">FREE</span>
                                </p>
                                <p className="text-xl font-bold text-white">Roof Inspection/Estimate Today!</p>

                                <div className="mt-6">
                                    <HeroForm />
                                </div>

                                <Image
                                    src="/assets/core/reviews.webp"
                                    alt="Customer reviews"
                                    width={448}
                                    height={120}
                                    className="w-full h-auto mt-5"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}