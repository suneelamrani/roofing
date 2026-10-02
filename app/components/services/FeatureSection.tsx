import Image from "next/image";
import Link from "next/link";
import { useId } from "react";
import type { FeatureBlock } from "@/app/lib/services/types";

const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/g;

function RichText({ text }: { text: string }) {
    const parts: React.ReactNode[] = [];
    let last = 0;

    for (const match of text.matchAll(LINK_PATTERN)) {
        const start = match.index!;
        const [full, label, href] = match;
        if (start > last) parts.push(text.slice(last, start));

        parts.push(
            /^https?:\/\//.test(href) ? (
                <a key={start} href={href} target="_blank" rel="noopener noreferrer" className="text-custom">
                    {label}
                </a>
            ) : (
                <Link key={start} href={href} className="text-custom">
                    {label}
                </Link>
            )
        );
        last = start + full.length;
    }
    if (last < text.length) parts.push(text.slice(last));

    return <>{parts}</>;
}

type Props = {
    block: FeatureBlock;
    imageSide: "left" | "right";
};

export default function FeatureSection({ block, imageSide }: Props) {
    const headingId = useId();
    const { eyebrow, heading, items, image, cta } = block;

    return (
        <section
            className="relative pt-24 overflow-hidden bg-white"
            aria-labelledby={headingId}
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="relative">
                <div className="max-w-2xl px-8 mx-auto lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24">
                    {/* Text */}
                    <div
                        className={`max-w-2xl lg:mx-0 lg:max-w-none lg:px-0 lg:py-16 ${imageSide === "left" ? "lg:order-2" : ""
                            }`}
                    >
                        {eyebrow ? (
                            <p className="mb-2 text-sm font-medium text-custom">{eyebrow}</p>
                        ) : (
                            <span className="flex items-center justify-center w-12 h-12 mb-4 text-white border rounded-full bg-custom">
                                <Image
                                    src="/assets/icons/check-icon-white.svg"
                                    alt="check icon"
                                    width={24}
                                    height={24}
                                    className="w-6"
                                />
                            </span>
                        )}

                        <h2 id={headingId} className="text-4xl font-bold tracking-tight text-gray-900">
                            {heading}
                        </h2>

                        <dl className="max-w-xl mt-6 space-y-3 text-base leading-7 text-gray-600 lg:max-w-none">
                            {items.map(({ title, text }) => (
                                <div key={title} className="relative pl-9">
                                    <dt className="inline font-semibold text-gray-900">
                                        <Image
                                            src="/assets/icons/check-icon-accent.svg"
                                            alt="check icon"
                                            width={20}
                                            height={20}
                                            className="absolute w-5 left-1 top-1"
                                        />
                                        {title}
                                    </dt>{" "}
                                    <dd className="inline">
                                        <RichText text={text} />
                                    </dd>
                                </div>
                            ))}
                        </dl>

                        {cta && (
                            <div className="mt-6">
                                <Link
                                    href="#contact"
                                    className="inline-flex rounded bg-custom px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:opacity-80"
                                >
                                    {cta}
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Image */}
                    <div className="flex items-center justify-center mt-12 lg:mt-0">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            width={800}
                            height={448}
                            sizes="(min-width: 1024px) 50vw, 100vw"
                            className="object-cover w-full shadow-xl h-112 rounded-xl ring-1 ring-gray-400/10 md:-ml-4 lg:-ml-0"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}