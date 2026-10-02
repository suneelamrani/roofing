import Image from "next/image";
import Link from "next/link";

/* -------------------------------- Icons -------------------------------- */

function StarIcon() {
    return (
        <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="w-5 mb-1 text-yellow-400">
            <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
        </svg>
    );
}

/* --------------------------------- Data --------------------------------- */

type FooterLink = { label: string; href: string };

const SERVICE_LINKS: FooterLink[] = [
    { label: "Residential Roofing", href: "/services/residential-roofing-palm-beach-county-fl" },
    { label: "Commercial Roofing", href: "/services/commercial-roofing-palm-beach-county-fl" },
    { label: "Roof Replacement", href: "/services/roof-replacement-palm-beach-county-fl" },
    { label: "Roof Repair", href: "/services/roof-repair-palm-beach-county-fl" },
    { label: "Waterproofing", href: "/services/waterproofing-palm-beach-county-fl" },
    { label: "Shingle, Metal, & Tile", href: "/services/shingle-metal-tile-palm-beach-county-fl" },
    { label: "View All Services", href: "/services" },
];

const LOCATION_LINKS: FooterLink[] = [
    { label: "Boca Raton, FL", href: "/locations/boca-raton-fl" },
    { label: "Delray Beach, FL", href: "/locations/delray-beach-fl" },
    { label: "Jupiter, FL", href: "/locations/jupiter-fl" },
    { label: "Palm Beach Gardens, FL", href: "/locations/palm-beach-gardens-fl" },
    { label: "Wellington, FL", href: "/locations/wellington-fl" },
    { label: "View All Locations", href: "/locations" },
];

const SOCIAL_LINKS = [
    {
        label: "Google Business Profile",
        icon: "/assets/icons/google-my-business-profile.svg",
        href: "https://www.google.com/maps/place/Neal+Roofing+%26+Waterproofing/@26.7176036,-80.054108,17z/data=!3m2!4b1!5s0x88d8d65b3069f99f:0x1fba9f542738e0cd!4m6!3m5!1s0x88d8d702f460c98d:0xc46c2fadb9ed179c!8m2!3d26.7175988!4d-80.0515277!16s%2Fg%2F11rgjbktyx?entry=ttu",
    },
    {
        label: "Instagram",
        icon: "/assets/icons/instagram.svg",
        href: "https://www.instagram.com/neal_roofing/",
    },
    {
        label: "YouTube",
        icon: "/assets/icons/youtube.svg",
        href: "https://www.youtube.com/channel/UCOVhYuF_CA2jeWDCXmpPo5A",
    },
    {
        label: "Facebook",
        icon: "/assets/icons/facebook.svg",
        href: "https://www.facebook.com/NealRoofing",
    },
];

const MAP_EMBED_URL =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3563.838573879886!2d-80.0541079873575!3d26.717603568348235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d8d702f460c98d%3A0xc46c2fadb9ed179c!2sNeal%20Roofing%20%26%20Waterproofing!5e0!3m2!1sen!2sus!4v1709778464404!5m2!1sen!2sus";

/* ------------------------------ Sub-components ------------------------------ */

function LinkColumn({ title, links }: { title: string; links: FooterLink[] }) {
    return (
        <div>
            <h3 className="text-sm font-semibold leading-6 text-gray-900">{title}</h3>
            <ul className="mt-6 space-y-4">
                {links.map(({ label, href }) => (
                    <li key={href}>
                        <Link href={href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ------------------------------- Component ------------------------------- */

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer
            className="bg-white"
            aria-labelledby="footer-heading"
            data-aos="fade-in"
            data-aos-duration="1000"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>

            <div className="px-6 pb-8 mx-auto border-t border-[#e5e7eb] md:pt-16 max-w-7xl lg:px-8">
                <div className="grid grid-cols-1 gap-8 mt-10 lg:grid-cols-2">
                    {/* Brand + services */}
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div className="flex flex-col">
                            <Link href="/">
                                <Image
                                    src="/assets/core/logo.webp"
                                    alt="Neal Roofing & Waterproofing"
                                    width={180}
                                    height={112}
                                    className="w-auto h-28"
                                />
                            </Link>
                            <p className="text-base leading-6">
                                Roofing License: <br />
                                <strong>CCC1332869</strong>
                            </p>
                        </div>

                        <div className="mt-10 md:mt-0">
                            <LinkColumn title="Services" links={SERVICE_LINKS} />
                        </div>
                    </div>

                    {/* Locations + map */}
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <LinkColumn title="Locations" links={LOCATION_LINKS} />

                        <div className="mt-10 md:mt-0">
                            <iframe
                                src={MAP_EMBED_URL}
                                title="Neal Roofing & Waterproofing on Google Maps"
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full border-0 h-[300px]"
                            />
                        </div>
                    </div>
                </div>

                {/* Google rating */}
                <div className="pt-8 mt-16 border-t border-gray-900/10">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/assets/core/google.png"
                            alt="Google Reviews"
                            width={48}
                            height={48}
                            className="w-auto h-12"
                        />
                        <div role="img" aria-label="5 out of 5 stars" className="flex gap-x-2">
                            {Array.from({ length: 5 }, (_, i) => (
                                <StarIcon key={i} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social + legal */}
                <div className="pt-8 mt-8 border-t border-gray-900/10 md:flex md:items-center md:justify-between">
                    <ul className="flex space-x-6 md:order-2">
                        {SOCIAL_LINKS.map(({ label, icon, href }) => (
                            <li key={label}>
                                <a
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="block hover:opacity-70"
                                >
                                    <Image src={icon} alt="icon" width={32} height={32} className="w-8 h-8" />
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="md:order-1">
                        <p className="mt-8 text-xs leading-5 text-gray-700 md:mt-0">
                            © {year} Neal Roofing &amp; Waterproofing. All rights reserved.
                        </p>
                        <Link href="/privacy-policy" className="inline-block mt-4 text-xs underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}