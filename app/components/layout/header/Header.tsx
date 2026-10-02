"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DesktopDropdown from "./DesktopDropdown";
import MobileMenu from "./MobileMenu";
import { NAV_ITEMS, PHONE } from "./nav-data";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header className="relative border-b bg-dark" style={{ borderColor: "gray" }}>
            <nav
                aria-label="Global"
                className="flex items-center justify-between px-6 py-4 mx-auto max-w-7xl gap-x-6 lg:px-8"
            >
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5">
                        <Image
                            src="/assets/core/logo.webp"
                            alt="Neal Roofing & Waterproofing"
                            width={160}
                            height={40}
                            priority
                            className="w-auto h-10"
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex lg:gap-x-7">
                    {NAV_ITEMS.map((item) =>
                        item.href ? (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="text-base font-semibold leading-6 text-grayish"
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <DesktopDropdown key={item.label} label={item.label} links={item.children!} />
                        )
                    )}
                </div>

                <div className="items-center justify-end flex-1 hidden gap-x-6 sm:flex">
                    <Link
                        href={PHONE.href}
                        className="flex items-center gap-x-2 px-5 py-3 text-base font-semibold text-white rounded-md shadow-sm bg-custom hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                        {PHONE.label}
                        <svg viewBox="0 0 256 256" aria-hidden="true" className="w-5 h-5" fill="currentColor">
                            <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z" />
                        </svg>
                    </Link>
                </div>

                <div className="flex lg:hidden">
                    <button
                        type="button"
                        aria-expanded={mobileOpen}
                        onClick={() => setMobileOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-grayish"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </nav>

            <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
        </header>
    );
}