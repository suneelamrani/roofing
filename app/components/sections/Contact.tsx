"use client";

import Image from "next/image";
import Link from "next/link";
import { useId, useState, type ChangeEvent, type FormEvent } from "react";
import { formatUSPhone } from "@/app/lib/phone";

/* --------------------------------- Data --------------------------------- */

const CONTACT_INFO = [
    {
        icon: "/assets/icons/phone-icon.svg",
        label: "Phone",
        text: "+1 561-473-0192",
        href: "tel:561-473-0192",
        external: false,
    },
    {
        icon: "/assets/icons/mail-icon.svg",
        label: "Email",
        text: "info@nealrfg.com",
        href: "mailto:info@nealrfg.com",
        external: false,
    },
    {
        icon: "/assets/icons/location-icon.svg",
        label: "Address",
        text: "2101 Centrepark W Dr STE 100, West Palm Beach, FL 33409",
        href: "https://maps.app.goo.gl/Bx8Hi3t8jzzWWC6b7",
        external: true,
    },
];

/** Decorative background shapes, one per breakpoint range */
const SHAPES = [
    {
        wrapper: "absolute inset-0 sm:hidden",
        viewBox: "0 0 343 388",
        path: "M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z",
        gradient: { x1: 254.553, y1: 107.554, x2: 961.66, y2: 814.66 },
    },
    {
        wrapper: "absolute bottom-0 right-0 top-0 hidden w-1/2 sm:block lg:hidden",
        viewBox: "0 0 359 339",
        path: "M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z",
        gradient: { x1: 192.553, y1: 28.553, x2: 899.66, y2: 735.66 },
    },
    {
        wrapper: "absolute bottom-0 right-0 top-0 hidden w-1/2 lg:block",
        viewBox: "0 0 160 678",
        path: "M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z",
        gradient: { x1: 192.553, y1: 325.553, x2: 899.66, y2: 1032.66 },
    },
];

const inputClass =
    "block w-full rounded-md border border-gray-300 px-4 py-3 text-gray-900 shadow-sm focus:border-black focus:ring-black";

/* ------------------------------ Sub-components ------------------------------ */

function BackgroundShape({ wrapper, viewBox, path, gradient }: (typeof SHAPES)[number]) {
    const id = useId();

    return (
        <div className={`${wrapper} pointer-events-none`} aria-hidden="true">
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox={viewBox}
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <defs>
                    <linearGradient id={id} gradientUnits="userSpaceOnUse" {...gradient}>
                        <stop stopColor="#fff" />
                        <stop offset="1" stopColor="#fff" stopOpacity="0" />
                    </linearGradient>
                </defs>
                <path d={path} fill={`url(#${id})`} fillOpacity="0.1" />
            </svg>
        </div>
    );
}

function Field({
    label,
    id,
    className = "",
    children,
}: {
    label: string;
    id: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <div className={className}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-900">
                {label}
            </label>
            <div className="mt-1">{children}</div>
        </div>
    );
}

/* ------------------------------- Component ------------------------------- */

export default function Contact() {
    const [phone, setPhone] = useState("");

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) =>
        setPhone(formatUSPhone(e.target.value));

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        // TODO: connect API (validate phone, post to /api/lead, redirect to /success)
    }

    return (
        <section className="border-t border-[#e5e7eb] rounded-md" aria-labelledby="contact-heading">
            <div
                id="contact"
                className="px-6 py-16 mx-auto max-w-7xl sm:py-24 lg:px-8"
                data-aos="fade-in"
                data-aos-duration="1000"
            >
                <div className="relative rounded-md shadow-xl">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        {/* Contact information */}
                        <div className="relative px-6 py-10 overflow-hidden rounded-md bg-custom sm:px-10 xl:p-12">
                            {SHAPES.map((shape) => (
                                <BackgroundShape key={shape.viewBox} {...shape} />
                            ))}

                            <h2 id="contact-heading" className="relative text-lg font-medium text-white">
                                Contact information
                            </h2>
                            <p className="relative max-w-3xl mt-6 text-base text-indigo-50">
                                Thank you for considering us for roofing needs. We will get back to you during
                                normal business hours.
                            </p>

                            <ul className="relative mt-8 space-y-6">
                                {CONTACT_INFO.map(({ icon, label, text, href, external }) => (
                                    <li key={label} className="flex items-start gap-3 text-base text-white">
                                        <Image src={icon} alt="icon" width={20} height={20} className="w-5 mt-0.5" />
                                        <a
                                            href={href}
                                            aria-label={`${label}: ${text}`}
                                            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                                            className="hover:underline"
                                        >
                                            {text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact form */}
                        <div className="px-6 py-10 sm:px-10 lg:col-span-2 xl:p-12">
                            <h3 className="text-lg font-medium text-gray-900">Send us a message</h3>

                            <form
                                onSubmit={handleSubmit}
                                name="contact-form"
                                className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                            >
                                <Field label="First name" id="first-name">
                                    <input
                                        type="text"
                                        id="first-name"
                                        name="firstName"
                                        autoComplete="given-name"
                                        required
                                        className={inputClass}
                                    />
                                </Field>

                                <Field label="Last name" id="last-name">
                                    <input
                                        type="text"
                                        id="last-name"
                                        name="lastName"
                                        autoComplete="family-name"
                                        required
                                        className={inputClass}
                                    />
                                </Field>

                                <Field label="Email" id="email">
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        required
                                        className={inputClass}
                                    />
                                </Field>

                                <Field label="Phone" id="phone">
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                        required
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        pattern="^\([2-9]\d{2}\)\s[2-9]\d{2}-\d{4}$"
                                        title="Please enter a valid US phone number in the format (555) 555-5555"
                                        className={inputClass}
                                    />
                                </Field>

                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-900">
                                            Message
                                        </label>
                                        <span id="message-max" className="text-sm text-gray-500">
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <div className="mt-1">
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            maxLength={500}
                                            required
                                            aria-describedby="message-max"
                                            className={inputClass}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:col-span-2 sm:items-end">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full px-6 py-3 mt-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-custom hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2 sm:w-auto"
                                    >
                                        Submit
                                    </button>

                                    <p className="mt-6 text-xs text-center text-gray-500">
                                        By pressing &apos;Submit&apos; you are explicitly agreeing to our{" "}
                                        <Link href="/terms-conditions" className="underline">
                                            terms and conditions
                                        </Link>{" "}
                                        and{" "}
                                        <Link href="/privacy-policy" className="underline">
                                            privacy policy
                                        </Link>
                                        , and consenting to receive text messages. To unsubscribe, text STOP to (561)
                                        473-0192.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}