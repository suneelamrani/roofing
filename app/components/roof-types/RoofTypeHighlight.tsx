import Image from "next/image";
import Link from "next/link";
import type { RoofTypePage } from "@/app/lib/roof-types/types";

type Props = RoofTypePage["highlight"];

export default function RoofTypeHighlight({ eyebrow, heading, description, items, image }: Props) {
    return (
        <section className="py-24 overflow-hidden bg-white" aria-labelledby="highlight-heading">
            <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                    <div className="px-6 lg:px-0 lg:pr-4 lg:pt-4">
                        <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-custom">{eyebrow}</p>
                            <h2
                                id="highlight-heading"
                                className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                            >
                                {heading}
                            </h2>
                            <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>

                            <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                                {items.map(({ title, text }) => (
                                    <div key={title} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <Image
                                                src="/assets/icons/check-icon-accent.svg"
                                                alt=""
                                                width={20}
                                                height={20}
                                                className="absolute w-5 h-5 left-1 top-1"
                                            />
                                            {title}
                                        </dt>{" "}
                                        <dd className="inline">{text}</dd>
                                    </div>
                                ))}
                            </dl>

                            <div className="mt-6">
                                <Link
                                    href="#contact"
                                    className="inline-flex rounded bg-custom px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:opacity-80"
                                >
                                    Free Estimate
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 lg:px-0">
                        <div className="relative px-6 pt-8 overflow-hidden rounded-md isolate bg-custom sm:mx-auto sm:max-w-2xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
                            <div
                                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
                                aria-hidden="true"
                            />

                            <div className="max-w-2xl mx-auto sm:mx-0 sm:max-w-none">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    width={640}
                                    height={500}
                                    sizes="640px"
                                    className="-mb-12 h-[500px] w-[40rem] max-w-none rounded-tl-md bg-gray-800 object-cover object-right-bottom ring-1 ring-white/10"
                                />
                            </div>

                            <div
                                className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/10 sm:rounded-md"
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}