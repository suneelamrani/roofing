import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Contact from "@/app/components/sections/Contact";
import { getAllBlogs } from "@/app/lib/blogs";

export const metadata: Metadata = {
    title: "Roofing Blog & Guides | Neal Roofing & Waterproofing",
    description:
        "Stay informed with expert roofing tips, cost guides, maintenance advice, and industry news from Neal Roofing & Waterproofing in West Palm Beach, FL.",
    alternates: { canonical: "/blog" },
};

export default function BlogPage() {
    const posts = getAllBlogs();

    return (
        <main className="bg-white py-12 sm:py-16">

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-balance text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                        Blog
                    </h1>
                </div>

                {/* Posts Grid */}
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {posts.map((post) => (
                        <article
                            key={post.slug}
                            className="flex flex-col items-start justify-between"
                        >
                            <Link href={`/blog/${post.slug}`} className="relative w-full">
                                <img
                                    src={post.image}
                                    alt={post.imageAlt}
                                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                                />
                            </Link>

                            <div className="flex flex-col flex-grow">
                                <h2 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    <Link href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </Link>
                                </h2>

                                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                                    {post.excerpt}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>

            </div>

            {/* Contact Section */}
            <div className="mt-24 px-6 mx-auto max-w-7xl lg:px-8">
                <Contact />
            </div>
        </main>
    );
}
