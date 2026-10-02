import Image from "next/image";
import type { RoofTypePage } from "@/app/lib/roof-types/types";

/* -------------------------------- Icons -------------------------------- */

function InboxIcon() {
    return (
        <svg
            className="w-6 h-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            aria-hidden="true"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"
            />
        </svg>
    );
}

function TilesIcon() {
    return (
        <Image src="/assets/icons/tiles.svg" alt="" width={24} height={24} className="w-6 h-6" />
    );
}

function HouseIcon() {
    return <Image src="/assets/icons/house.svg" alt="" width={24} height={24} className="w-6 h-6" />;
}

const ICONS = [InboxIcon, TilesIcon, HouseIcon];

/* ------------------------------- Component ------------------------------- */

type Props = RoofTypePage["overview"];

export default function RoofTypeOverview({ heading, description, cards }: Props) {
    return (
        <section className="py-24 bg-white" aria-labelledby="overview-heading">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto lg:mx-0">
                    <h2
                        id="overview-heading"
                        className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        {heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
                </div>

                <div className="max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {cards.map(({ title, text }, index) => {
                            const Icon = ICONS[index % ICONS.length];

                            return (
                                <div key={title} className="flex flex-col">
                                    <dt className="text-base font-semibold leading-7 text-gray-900">
                                        <div className="flex items-center justify-center w-10 h-10 mb-6 rounded-md bg-custom">
                                            <Icon />
                                        </div>
                                        {title}
                                    </dt>
                                    <dd className="flex flex-col flex-auto mt-1 text-base leading-7 text-gray-600">
                                        <p className="flex-auto">{text}</p>
                                    </dd>
                                </div>
                            );
                        })}
                    </dl>
                </div>
            </div>
        </section>
    );
}