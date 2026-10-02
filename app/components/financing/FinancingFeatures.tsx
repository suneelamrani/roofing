import Image from "next/image";

type Feature = {
    title: string;
    description: string;
    icon: string;
};

const features: Feature[] = [
    {
        title: "Flexible Payment Plans",
        description:
            "Tailor your roofing project payments to match your budget. Our plans offer low monthly payments that make it simple to manage your finances.",
        icon: "/assets/icons/shield-icon.svg",
    },
    {
        title: "Quick Approval Process",
        description:
            "Don't let paperwork slow you down. We ensure a speedy approval process so you can get your roofing project underway in no time.",
        icon: "/assets/icons/lock-icon.svg",
    },
    {
        title: "Invest in Quality",
        description:
            "Financing with us means you don't have to compromise on quality. Get top-tier roofing services in Palm Beach County, and pay over time.",
        icon: "/assets/icons/refresh-icon.svg",
    },
];

const FinancingFeatures = () => {
    return (
        <section className="relative bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-md px-6 text-center sm:max-w-3xl lg:max-w-7xl lg:px-8">

                {/* Section Header */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-lg font-semibold text-custom">
                        Build Faster
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Everything You Need To Transform Your Roof
                    </h2>

                    <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
                        Discover how Neal Roofing &amp; Waterproofing makes it easier to
                        afford the roof you need with financing options designed for you.
                    </p>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 mt-20">
                    {features.map((feature) => (
                        <div key={feature.title} className="pt-6">
                            <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">

                                {/* Icon */}
                                <div className="-mt-6">
                                    <div className="inline-flex items-center justify-center rounded-xl bg-custom p-3 shadow-lg">
                                        <Image
                                            src={feature.icon}
                                            alt="icon"
                                            width={32}
                                            height={32}
                                            className="h-8 w-8"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-8">
                                    <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-5 text-base leading-7 text-gray-600">
                                        {feature.description}
                                    </p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FinancingFeatures;