const Packages = () => {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-base font-semibold leading-7 text-custom">
                        Packages
                    </p>

                    <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">
                        Flexible Options For Your Needs
                    </h2>
                </div>

                <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
                    Our financing options are designed to ensure you can put a roof on
                    your home when you need to without tapping into your on hand
                    reserves.
                </p>

                <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {/* Package 1 */}
                    <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8 lg:rounded-r-none">
                        <div>
                            <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    0% Interest
                                </span>
                            </p>

                            <p className="font-medium text-center mt-4">12 Months</p>

                            <ul
                                role="list"
                                className="mt-8 w-fit mx-auto space-y-3 text-sm leading-6 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-custom"
                                        viewBox="0 0 20 20"
                                        fill="#297BFE"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                            fill="#297BFE"
                                        />
                                    </svg>

                                    Interest-free for 12 months
                                </li>

                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-custom"
                                        viewBox="0 0 20 20"
                                        fill="#297BFE"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                            fill="#297BFE"
                                        />
                                    </svg>

                                    Best for No Interest
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#contact"
                            aria-describedby="tier-freelancer"
                            className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom text-custom ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                        >
                            Apply now
                        </a>
                    </div>

                    {/* Package 2 */}
                    <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:z-10 lg:rounded-b-none">
                        <div>
                            <div className="flex items-center justify-between gap-x-4">
                                <p className="rounded-full bg-custom/10 px-3 py-1.5 text-sm font-semibold leading-5 text-custom w-full text-center">
                                    Most popular
                                </p>
                            </div>

                            <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    0% Interest
                                </span>
                            </p>

                            <p className="font-medium text-center mt-4">18 Months</p>

                            <ul
                                role="list"
                                className="mt-8 w-fit mx-auto space-y-3 text-sm leading-6 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-custom"
                                        viewBox="0 0 20 20"
                                        fill="#297BFE"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                            fill="#297BFE"
                                        />
                                    </svg>

                                    Interest-free for 18 months
                                </li>

                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-custom"
                                        viewBox="0 0 20 20"
                                        fill="#297BFE"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                            fill="#297BFE"
                                        />
                                    </svg>

                                    Most Flexible Plan
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#contact"
                            aria-describedby="tier-startup"
                            className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom bg-custom text-white shadow-sm hover:opacity-60"
                        >
                            Apply now
                        </a>
                    </div>

                    {/* Package 3 */}
                    <div className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 lg:mt-8 lg:rounded-l-none">
                        <div>
                            <p className="mt-6 flex items-baseline gap-x-1 justify-center">
                                <span className="text-4xl font-bold tracking-tight text-gray-900">
                                    9.99% Interest
                                </span>
                            </p>

                            <p className="font-medium text-center mt-4">120 Months</p>

                            <ul
                                role="list"
                                className="mt-8 space-y-3 w-fit mx-auto text-sm leading-6 text-gray-600"
                            >
                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-custom"
                                        viewBox="0 0 20 20"
                                        fill="#297BFE"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                            fill="#297BFE"
                                        />
                                    </svg>

                                    Reduced Interest for 120 Months
                                </li>

                                <li className="flex gap-x-3">
                                    <svg
                                        className="h-6 w-5 flex-none text-custom"
                                        viewBox="0 0 20 20"
                                        fill="#297BFE"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                            clipRule="evenodd"
                                            fill="#297BFE"
                                        />
                                    </svg>

                                    Best for Low Monthly Payments
                                </li>
                            </ul>
                        </div>

                        <a
                            href="#contact"
                            aria-describedby="tier-enterprise"
                            className="mt-8 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-custom text-custom ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                        >
                            Apply now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Packages;