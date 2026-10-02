"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import type { NavLink } from "./nav-data";

type Props = {
    label: string;
    links: NavLink[];
};

export default function DesktopDropdown({ label, links }: Props) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div
            ref={ref}
            className="relative z-50"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
            onFocus={() => setOpen(true)}
            onBlur={(e) => {
                if (!ref.current?.contains(e.relatedTarget as Node)) setOpen(false);
            }}
            onKeyDown={(e) => e.key === "Escape" && setOpen(false)}
        >
            <button
                type="button"
                aria-expanded={open}
                aria-haspopup="menu"
                className="flex items-center text-sm font-semibold leading-6 cursor-pointer gap-x-1 text-grayish"
            >
                {label}
                <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className={`mt-1 h-5 w-5 flex-none text-gray-200 transition-transform ${open ? "rotate-180" : ""}`}
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    />
                </svg>
            </button>

            {open && (
                <div className="absolute -left-8 top-full z-10 w-56 pt-2">
                    <div
                        role="menu"
                        className="p-2 shadow-lg rounded-xl bg-cardDark ring-1 ring-gray-700"
                    >
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                role="menuitem"
                                onClick={() => setOpen(false)}
                                className="block px-3 py-2 text-sm font-semibold leading-6 text-gray-100 rounded-lg hover:bg-gray-800"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}