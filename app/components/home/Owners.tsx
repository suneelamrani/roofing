type Video = {
    id: string;
    title: string;
};

const VIDEOS: Video[] = [
    {
        id: "XRSKk517kpI",
        title: "Roofing company near me: best roofing services in Palm Beach County, FL",
    },
    {
        id: "wDWK20PASf0",
        title: "Roofing services near me: roofing company in Florida",
    },
];

export default function Owners() {
    return (
        <section className="py-24 bg-dark" aria-labelledby="testimonials-heading">
            <div className="px-6 mx-auto max-w-7xl lg:px-8">
                <div className="max-w-2xl mx-auto sm:text-center lg:max-w-3xl">
                    <h2 id="testimonials-heading" className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                        Hire The <span className="text-lightPurple">Most Trusted Roofers</span> in Florida
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        With a 99.9% satisfaction rate, learn why we&apos;re Florida&apos;s favorite for
                        roofing. Hear from homeowners just like you below.
                    </p>
                </div>

                <ul className="grid max-w-xl grid-cols-1 mx-auto mt-8 gap-x-6 gap-y-10 lg:mt-20 lg:max-w-6xl lg:grid-cols-2 lg:gap-y-16">
                    {VIDEOS.map((video) => (
                        <li key={video.id} className="p-2 border rounded-lg">
                            <div className="overflow-hidden rounded aspect-video">
                                <iframe
                                    src={`https://www.youtube-nocookie.com/embed/${video.id}`}
                                    title={video.title}
                                    loading="lazy"
                                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="w-full h-full"
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}