import Image from "next/image";
import Link from "next/link";
import Contact from "../components/sections/Contact";

const galleryImages = [
    {
        src: "/assets/core/flat.jpg",
    },
    {
        src: "/assets/core/financing-hero.jpg",
    },
    {
        src: "/assets/core/concrete-tile.png",
    },
    {
        src: "/assets/core/commercial-roof.webp",
    },
    {
        src: "/assets/core/clay-tile.webp",
    },
    {
        src: "/assets/core/cedar.webp",
    },
    {
        src: "/assets/core/replacement.webp",
    },
    {
        src: "/assets/core/residential.jpeg",
    },
    {
        src: "/assets/core/residential-roofing.webp",
    },
    {
        src: "/assets/core/roof.webp",
    },
    {
        src: "/assets/core/shingle.jpg",
    },
    {
        src: "/assets/core/shingle-roof.webp",
    },
    {
        src: "/assets/core/waterproofing.webp",
    },

    {
        src: "/assets/gallery/roof-3.png"
    },
    {
        src: "/assets/gallery/gallery-3.jpg"
    },
    {
        src: "/assets/gallery/gallery-4.jpg"
    },
    {
        src: "/assets/gallery/roof-2.png"
    },


];


export default function GalleryPage() {
    return (
        <main>
            <section className="pb-24 sm:pb-32 pt-10 bg-lightishPink">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                        <p className="text-base font-semibold leading-7 text-custom">Gallery</p>

                        <h1 className="text-4xl md:text-5xl font-bold mb-5">
                            Explore Our Expert Roofing Projects in Palm Beach County, FL
                        </h1>

                        <p>
                            Browse our gallery of completed roofing projects across Palm Beach County, showcasing our craftsmanship,
                            quality, and attention to detail.
                        </p>
                    </div>


                    <ul role="list" className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {galleryImages.map((image) => (
                            <li className="relative" key={image.src}>
                                <img
                                    src={image.src}
                                    alt="gallery images"
                                    loading="lazy"
                                    className="aspect-[3/2] w-full h-full rounded-md object-cover"
                                />
                            </li>
                        ))}
                    </ul>


                    <div className="mx-auto max-w-2xl text-center mt-20">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                            Neal roofing serves over 2000 customers per year, if you'd like to see more photos or examples of our work,
                            give us a call!
                        </h2>
                        <div className="mt-6 flex items-center justify-center gap-x-6">
                            <Link href="tel:5614730192" className="rounded-md bg-custom px-3.5 py-2.5 text-lg font-semibold text-white shadow-sm hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom">
                                Call now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Contact />
        </main>
    );
}