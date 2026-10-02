import Image from "next/image";
import Link from "next/link";

import type { ServiceCardData } from "@/app/lib/services/types";

type Props = ServiceCardData & { className?: string };

export default function ServiceCard({
    title,
    href,
    image,
    imageAlt,
    description,
    className = "",
}: Props) {
    return (
        <article
            className={`max-w-sm rounded-lg h-full flex flex-col border border-custom shadow-md ${className}`}
            data-aos="fade-up"
            data-aos-duration="1500"
        >
            <Link href={href} tabIndex={-1} aria-hidden="true">
                <Image
                    src={image}
                    alt={imageAlt}
                    width={384}
                    height={288}
                    sizes="(min-width: 1280px) 384px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover w-full border-b rounded-t-lg h-72 border-custom"
                />
            </Link>

            <div className="p-5 bg-white rounded-b-md h-full flex flex-col">
                <h3 className="mb-2 text-2xl font-bold tracking-tight text-black">
                    <Link href={href}>{title}</Link>
                </h3>
                <p className="mb-5 font-normal text-black">{description}</p>
                <Link
                    href={href}
                    className="inline-flex items-center mt-auto w-fit px-4 py-2 text-sm font-medium text-center text-black border border-black rounded-lg bg-presidential hover:opacity-60 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                    Explore service →
                </Link>
            </div>
        </article>
    );
}