import Image from "next/image";

type Logo = {
    src: string;
    alt: string;
    width: number;
    height: number;
    maxHeight: string;
};

const LOGOS: Logo[] = [
    {
        src: "/assets/core/post.png",
        alt: "The Palm Beach Post",
        width: 300,
        height: 100,
        maxHeight: "max-h-16",
    },
    {
        src: "/assets/core/wp.png",
        alt: "25 WPBF News",
        width: 300,
        height: 100,
        maxHeight: "max-h-12",
    },
    {
        src: "/assets/core/herald.png",
        alt: "The Miami Herald",
        width: 300,
        height: 100,
        maxHeight: "max-h-10",
    },
    {
        src: "/assets/core/sm-2026-pb-winner.png",
        alt: "2026 Community Choice Awards Palm Beach County Winner",
        width: 200,
        height: 200,
        maxHeight: "max-h-24",
    },
    {
        src: "/assets/core/membership-seal-2026-community-partner-dark.png",
        alt: "Chamber of Commerce of the Palm Beaches Community Partner 2026",
        width: 200,
        height: 200,
        maxHeight: "max-h-24",
    },
];

export default function PressLogos() {
    return (
        <section className="pt-8 bg-dark sm:pt-12" aria-labelledby="press-heading">
            <div className="px-6 mx-auto max-w-7xl">
                <h2
                    id="press-heading"
                    className="text-2xl font-semibold leading-8 text-center text-gray-200"
                >
                    As seen on
                </h2>

                <ul className="grid items-center mx-auto mt-6 gap-x-8 gap-y-10 sm:grid-cols-5 sm:gap-x-10">
                    {LOGOS.map((logo) => (
                        <li key={logo.src}>
                            <Image
                                src={logo.src}
                                alt={logo.alt}
                                width={logo.width}
                                height={logo.height}
                                sizes="(min-width: 640px) 20vw, 100vw"
                                className={`h-auto w-full object-contain ${logo.maxHeight}`}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}