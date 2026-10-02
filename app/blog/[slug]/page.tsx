import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/app/components/sections/Contact";
import { getAllBlogs, getBlogBySlug } from "@/app/lib/blogs";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
    return getAllBlogs().map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogBySlug(slug);
    if (!post) return {};

    return {
        title: `${post.title} | Neal Roofing & Waterproofing Blog`,
        description: post.excerpt,
        alternates: { canonical: `/blog/${slug}` },
    };
}

export default async function BlogSlugPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogBySlug(slug);

    if (!post) notFound();

    return (
        <main className="bg-white pb-24">
            {/* Article Container */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Title */}
                <h1 className="text-4xl font-bold mb-6 text-center">
                    {post.title}
                </h1>

                {/* Featured Image */}
                <img
                    src={post.image}
                    alt={post.imageAlt}
                    // fill
                    // priority
                    className="w-full h-64 sm:h-96 object-cover rounded-lg shadow-md mb-8"
                    sizes="(min-width: 1024px) 1000px, 100vw"
                />

                {/* Article Intro */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed mb-8">
                    <p className="mb-6">
                        {post.content.intro}
                    </p>
                </div>

                {/* Article Sections */}
                <div className="space-y-8 text-gray-700">
                    {post.content.sections.map((section, idx) => (
                        <div key={idx} className="space-y-4">
                            {section.heading && (
                                <h2 className="text-2xl font-semibold mt-8 mb-4">
                                    {section.heading}
                                </h2>
                            )}

                            {section.body && (
                                <div className="space-y-4">
                                    {section.body}
                                </div>
                            )}

                            {section.bullets && section.bullets.length > 0 && (
                                <ul className="space-y-2.5 my-4 pl-5 list-disc">
                                    {section.bullets.map((item, bIdx) => (
                                        <li key={bIdx}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            {section.boxes && section.boxes.length > 0 && (
                                <div className="space-y-4 mt-6">
                                    {section.boxes.map((box, boxIdx) => (
                                        <div
                                            key={boxIdx}
                                            className="border border-neutral-100 p-5 rounded-lg"
                                        >
                                            <h3 className="text-2xl text-custom font-semibold mb-2">
                                                {box.title}
                                            </h3>
                                            <p>
                                                {box.description}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </article>

            {/* Contact Form Section */}
            <div id="contact">
                <Contact />
            </div>
        </main>
    );
}
