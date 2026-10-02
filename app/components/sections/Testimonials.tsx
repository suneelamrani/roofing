import Image from "next/image";

/* -------------------------------- Icons -------------------------------- */

function StarIcon({ filled }: { filled: boolean }) {
    return (
        <svg
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
            className={`mb-1 w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
        >
            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
        </svg>
    );
}

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
    );
}

/* --------------------------------- Data --------------------------------- */

type Testimonial = {
    name: string;
    quote: string;
    /** 1-5 */
    rating: number;
};

const TESTIMONIALS: Testimonial[] = [
    {
        name: "Keith D",
        rating: 5,
        quote:
            "I was extremely satisfied with the service provided in reparing a roof leak in my home. Not only was the initial inspection very thorough but the repair was done efficiently, followed by photos from the installers of the work progress. Additionally, all employees that I dealt with were very polite and professional. Highly recommend Neal Roofing.",
    },
    {
        name: "Richard A.",
        rating: 5,
        quote:
            "Tom was great to work with. He was with the project from beginning to end. We called a few days later with an issue with the scupper. He was on it immediately and took care of it beautifully. The work crew was awesome. Really great guys. Friendly, funny, courteous, and cleaned up everything. We definitely recommend these guys.",
    },
    {
        name: "Esther Greene",
        rating: 5,
        quote:
            'Thank you Neal Roofing & Waterproofing for a job well done on my new roof.. Thank you for your professionalism and timely manner of handling this project from the very beginning to the end...To the ladies in the office,thank you for all the emails and correspondence..Isaiah, "You Rock"!!! Thank you for being my go to person!!!',
    },
];

/* ------------------------------- Component ------------------------------- */

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 bg-white" aria-labelledby="reviews-heading">
            <div className="max-w-md px-6 mx-auto text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                {/* Heading */}
                <div data-aos="fade-up">
                    <p className="block p-2 mx-auto mb-5 text-xs text-gray-900 border border-gray-500 w-fit rounded-xl">
                        <span className="text-gray-800">TESTIMONIALS</span> ・ WHAT CLIENTS SAY ABOUT US
                    </p>
                    <h2
                        id="reviews-heading"
                        className="mt-2 text-3xl font-bold tracking-tight text-black md:text-4xl"
                    >
                        See Why Florida Residents Choose Us for Roofing
                    </h2>
                    <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">
                        Hear from homeowners who&apos;ve experienced our service and see why they say
                        we&apos;re the top roofers.
                    </p>
                </div>

                {/* Review cards */}
                <ul className="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3">
                    {TESTIMONIALS.map(({ name, quote, rating }, index) => (
                        <li key={name}>
                            <figure
                                className="relative flex flex-col justify-between h-full p-12 bg-gray-100 border rounded-lg shadow-md border-custom"
                                data-aos="fade-up"
                                data-aos-duration={1000 + index * 500}
                            >
                                <Image
                                    src="/assets/core/google.png"
                                    alt="Google review"
                                    width={48}
                                    height={48}
                                    className="absolute left-4 top-2 z-[2] h-12 w-12"
                                />

                                <div>
                                    <div
                                        role="img"
                                        aria-label={`${rating} out of 5 stars`}
                                        className="flex justify-center gap-0.5"
                                    >
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <StarIcon key={i} filled={i < rating} />
                                        ))}
                                    </div>

                                    <figcaption className="mt-4 text-xl font-bold text-black sm:text-2xl">
                                        {name}
                                    </figcaption>

                                    <blockquote className="mt-4 text-gray-900">
                                        <p>{quote}</p>
                                    </blockquote>
                                </div>
                            </figure>
                        </li>
                    ))}
                </ul>

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
                            <Image src="/assets/core/tree-left-black.png" alt="tree" width={28} height={28} className="w-auto h-7" />
                            <p className="text-xs text-gray-800">
                                <span className="font-bold">4.9—STAR</span> RATED BY <br />
                                800+ CUSTOMERS
                            </p>
                            <Image src="/assets/core/tree-right-black.png" alt="tree" width={28} height={28} className="w-auto h-7" />
                        </div>

                        <div className="flex gap-2">
                            <Image src="/assets/icons/protection-black.svg" alt="protection" width={20} height={20} className="w-auto h-5" />
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