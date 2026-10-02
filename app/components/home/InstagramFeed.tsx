const INSTAGRAM_HANDLE = "neal_roofing";

export default function InstagramFeed() {
    return (
        <section className="py-24 bg-white" aria-labelledby="instagram-heading">
            <div className="max-w-md px-6 mx-auto text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">
                {/* Heading */}
                <div data-aos="fade-up">
                    <p className="block p-2 mx-auto mb-5 text-xs text-gray-900 border border-gray-500 w-fit rounded-xl">
                        <span className="text-gray-800">FIND US</span> ・ OUR INSTAGRAM
                    </p>
                    <h2
                        id="instagram-heading"
                        className="mt-2 text-3xl font-bold tracking-tight text-black md:text-4xl"
                    >
                        Discover Our Roofing Work in Florida
                    </h2>
                    <p className="pb-10 mx-auto mt-5 text-xl text-gray-900 max-w-prose">
                        Step into our vibrant Instagram gallery to explore the latest trends, behind-the-scenes
                        moments, and exclusive content curated just for you.
                    </p>
                </div>

                {/* Embed */}
                <div className="flex justify-center mx-auto">
                    <iframe
                        src={`https://www.instagram.com/${INSTAGRAM_HANDLE}/embed`}
                        title={`Instagram feed for @${INSTAGRAM_HANDLE}`}
                        loading="lazy"
                        scrolling="no"
                        allowFullScreen
                        className="mb-3 block h-[581px] w-[calc(100%-2px)] min-w-[326px] max-w-[540px] rounded-[3px] border border-[#dbdbdb] bg-white"
                    />
                </div>
            </div>
        </section>
    );
}