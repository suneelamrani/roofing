import Image from "next/image";

/* -------------------------------- Icons -------------------------------- */

function ArrowRightIcon({ className }: { className?: string }) {
    return (
        <svg viewBox="0 0 256 256" fill="currentColor" aria-hidden="true" focusable="false" className={className}>
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
    );
}

/* --------------------------------- Data --------------------------------- */

const STORY: string[] = [
    "As co-founders and childhood friends, Sam and Andrew have always dreamed of creating a business that not only excels in its field but also truly makes a difference in the lives of our customers. Fast forward to today, and Neal Roofing is serving over 2000 customers per year, in the communities that we grew up in.",
    "Our humble beginnings started with a shared vision, rooted in our close bond as friends and family. We wanted to create a company that we could be proud of, and that would reflect our values of integrity, hard work, and commitment. We've always believed that the strength of our company lies in the relationships we've built, and that is why we have carefully handpicked our team, inviting family and close friends to join us on this incredible journey.",
    "As we've grown, we've also made it our mission to break the mold and challenge the status quo in the roofing industry. We've welcomed top talent from various sectors, embracing a diverse and progressive approach to our work. By harnessing the power of technology, we're continually striving to enhance our services and make a real impact in the world of roofing.",
    "We recognize that your home is more than just a building; it's a sanctuary, a place where memories are made and cherished. With this in mind, we consider it an honor to be entrusted with your roofing and waterproofing needs. Our commitment to you goes beyond the completion of a project; we aim to create lasting relationships and to be your go-to roofing partner for years to come.",
    "As we continue to grow and evolve, we promise never to lose sight of our roots, our passion for our work, and our dedication to you, our valued customers. We are grateful for the opportunity to serve you, and we look forward to building a brighter, safer, and more comfortable future for your home and family.",
    "Thank you for considering Neal Roofing And Waterproofing. We can't wait to welcome you to our ever-growing family.",
];

/* ------------------------------- Component ------------------------------- */

export default function About() {
    return (
        <section
            id="about"
            className="py-16 overflow-hidden bg-gray-100"
            aria-labelledby="about-heading"
            data-aos="fade-in"
            data-aos-duration="2000"
        >
            <div className="px-6 mx-auto space-y-8 max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-12">
                    {/* Story */}
                    <div className="relative z-10">
                        <div className="mx-auto space-y-4 text-gray-900 max-w-prose lg:max-w-none">
                            <p className="text-lg font-semibold text-custom">About</p>
                            <h2
                                id="about-heading"
                                className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 md:text-4xl"
                            >
                                Neal Roofing &amp; Waterproofing
                            </h2>

                            {STORY.map((paragraph) => (
                                <p key={paragraph.slice(0, 40)} className="text-base">
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative mx-auto mt-12 aspect-[4/3] w-full max-w-prose overflow-hidden rounded-md lg:mt-0 lg:aspect-auto lg:h-[500px] lg:max-w-none">
                        <Image
                            src="/assets/core/truck.jpeg"
                            alt="Neal Roofing & Waterproofing truck"
                            fill
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover"
                        />
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