import Image from "next/image";
import Link from "next/link";

/* -------------------------------- Icons -------------------------------- */

type IconProps = { className?: string };

const svgProps = {
    viewBox: "0 0 256 256",
    fill: "currentColor",
    "aria-hidden": true,
    focusable: false,
} as const;

function GemIcon({ className }: IconProps) {
    return (
        <svg {...svgProps} className={className}>
            <path d="M244.52,100.05l-56-64A6,6,0,0,0,184,34H72a6,6,0,0,0-4.52,2l-56,64a6,6,0,0,0,.13,8l112,120a6,6,0,0,0,8.78,0l112-120A6,6,0,0,0,244.52,100.05ZM75.94,110l34.6,86.49L29.81,110Zm91.2,0L128,207.84,88.86,110ZM92,98l36-48,36,48Zm88.06,12h46.13l-80.73,86.49Zm46.72-12H179L140,46h41.28ZM74.72,46H116L77,98H29.22Z" />
        </svg>
    );
}

function LightningIcon({ className }: IconProps) {
    return (
        <svg {...svgProps} className={className}>
            <path d="M213.84,118.63a6,6,0,0,0-3.73-4.25L150.88,92.17l15-75a6,6,0,0,0-10.27-5.27l-112,120a6,6,0,0,0,2.28,9.71l59.23,22.21-15,75a6,6,0,0,0,3.14,6.52A6.07,6.07,0,0,0,96,246a6,6,0,0,0,4.39-1.91l112-120A6,6,0,0,0,213.84,118.63ZM106,220.46l11.85-59.28a6,6,0,0,0-3.77-6.8l-55.6-20.85,91.46-98L138.12,94.82a6,6,0,0,0,3.77,6.8l55.6,20.85Z" />
        </svg>
    );
}

function ChartLineIcon({ className }: IconProps) {
    return (
        <svg {...svgProps} className={className}>
            <path d="M230,208a6,6,0,0,1-6,6H32a6,6,0,0,1-6-6V48a6,6,0,0,1,12,0v98.78l54.05-47.3a6,6,0,0,1,7.55-.28l60.11,45.08,60.34-52.8a6,6,0,0,1,7.9,9l-64,56a6,6,0,0,1-7.55.28L96.29,111.72,38,162.72V202H224A6,6,0,0,1,230,208Z" />
        </svg>
    );
}

function ArrowRightIcon({ className }: IconProps) {
    return (
        <svg {...svgProps} className={className}>
            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
        </svg>
    );
}

/* --------------------------------- Data --------------------------------- */

const CUSTOMER_MAP_URL =
    "https://www.google.com/maps/d/embed?mid=1mRoQgxKwRCjkS5RoPRFlYSz3cVb4Dc4&ehbc=2E312F";

const FEATURES = [
    {
        icon: GemIcon,
        title: "Get priority access to materials",
        description:
            "We are the number one spender with our local supplier, so we get material faster than any of our competition.",
    },
    {
        icon: LightningIcon,
        title: "You can track your progress in real time",
        description: "We leverage technology to keep you updated on the status of your jobs.",
    },
    {
        icon: ChartLineIcon,
        title: "Have your roof made with the highest quality and expertise.",
        description:
            "We only use the best quality products and crews so we are more expensive for good reason.",
    },
];

/* ------------------------------- Component ------------------------------- */

export default function Standards() {
    return (
        <section className="pt-10 pb-24 bg-dark sm:pb-32" aria-labelledby="standards-heading">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                {/* Heading */}
                <div className="max-w-2xl mx-auto sm:text-center">
                    <p className="block p-2 mx-auto mb-5 text-xs text-gray-400 border border-gray-500 w-fit rounded-xl">
                        <span className="text-gray-200">OUR STANDARDS</span> ・ WHAT MAKES US STAND OUT
                    </p>
                    <h2 id="standards-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                        An Unmatched <span className="text-lightPurple">Roofing Service</span>
                        <br className="hidden md:block" />
                        <span className="text-lightPurple">Just For You</span> across Florida
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        What makes Neal Roofing and Waterproofing exceptional? We offer a premium experience to
                        effortlessly match your needs.
                    </p>
                </div>

                {/* CTA + trust badges */}
                <div className="flex flex-col items-center justify-center gap-5">
                    <Link
                        href={CUSTOMER_MAP_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-12 py-4 mt-20 text-lg font-semibold text-white rounded-md bg-custom w-fit hover:opacity-80"
                    >
                        View Customer Map
                        <ArrowRightIcon className="w-5 h-5" />
                    </Link>

                    <div className="flex gap-5">
                        <div className="flex gap-2 mb-5">
                            <Image src="/assets/core/tree-left.webp" alt="" width={28} height={28} className="w-auto h-7" />
                            <p className="text-xs text-gray-300">
                                <span className="font-bold">4.9—STAR</span> RATED BY <br />
                                800+ CUSTOMERS
                            </p>
                            <Image src="/assets/core/tree-right.webp" alt="" width={28} height={28} className="w-auto h-7" />
                        </div>

                        <div className="flex gap-2">
                            <Image src="/assets/core/protection.svg" alt="" width={20} height={20} className="w-auto h-5" />
                            <p className="text-xs text-gray-300">
                                <span className="font-bold">50-YEAR</span> PRODUCT <br />
                                WARRANTIES
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features + image */}
                <div className="max-w-2xl mx-auto mt-8 lg:mt-20 lg:max-w-6xl">
                    <div className="grid max-w-xl grid-cols-1 mx-auto gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <ul className="space-y-10">
                            {FEATURES.map(({ icon: Icon, title, description }) => (
                                <li key={title} className="flex items-center gap-4 p-5 bg-gray-900 rounded-xl">
                                    <div className="p-5 text-white border-2 rounded-full border-custom">
                                        <Icon className="w-20 h-20" />
                                    </div>
                                    <div>
                                        <h3 className="mb-4 text-xl font-semibold text-white">{title}</h3>
                                        <p className="text-gray-400">{description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="p-5 border border-gray-600 rounded-xl">
                            <Image
                                src="/assets/core/truck.webp"
                                alt="Neal Roofing & Waterproofing truck in a Palm Beach, Florida neighborhood"
                                width={800}
                                height={550}
                                sizes="(min-width: 1024px) 50vw, 100vw"
                                className="w-full h-auto object-cover object-top max-h-[550px] rounded-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}