"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NAV_ITEMS, PHONE } from "./nav-data";

type Props = {
    open: boolean;
    onClose: () => void;
};

export default function MobileMenu({ open, onClose }: Props) {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    if (!open) return null;

    const toggleSection = (label: string) =>
        setActiveSection((current) => (current === label ? null : label));

    return (
        <div className="absolute inset-x-0 z-50 p-2 -top-8 lg:hidden">
            <div className="overflow-hidden border rounded-lg shadow-md bg-dark border-custom ring-1 ring-custom ring-opacity-5">
                <div className="flex items-center justify-between px-2 pt-4">
                    <Link href="/" onClick={onClose}>
                        <Image
                            src="/assets/core/logo.webp"
                            alt="Neal Roofing & Waterproofing"
                            width={160}
                            height={40}
                            className="w-auto h-10"
                        />
                    </Link>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-custom"
                    >
                        <span className="sr-only">Close main menu</span>
                        <Image src="/assets/icons/close-icon.svg" alt="close icon" width={20} height={20} />
                    </button>
                </div>

                <nav className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-800" aria-label="Mobile">
                    {NAV_ITEMS.map((item) => {
                        if (!item.children) {
                            return (
                                <Link
                                    key={item.label}
                                    href={item.href!}
                                    onClick={onClose}
                                    className="block w-full px-3 py-2 text-base font-medium text-grayish"
                                >
                                    {item.label}
                                </Link>
                            );
                        }

                        const isOpen = activeSection === item.label;

                        return (
                            <div key={item.label}>
                                <button
                                    type="button"
                                    aria-expanded={isOpen}
                                    onClick={() => toggleSection(item.label)}
                                    className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-grayish"
                                >
                                    {item.label}
                                    <Image
                                        src="/assets/icons/dropdown-icon.svg"
                                        alt="Dropdown icon"
                                        width={24}
                                        height={24}
                                        className={`w-6 transition-transform ${isOpen ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isOpen &&
                                    item.children.map((child) => (
                                        <Link
                                            key={child.href}
                                            href={child.href}
                                            onClick={onClose}
                                            className="block py-2 pl-8 pr-3 text-base font-medium text-grayish"
                                        >
                                            {child.label}
                                        </Link>
                                    ))}
                            </div>
                        );
                    })}

                    <a
                        href={PHONE.href}
                        className="flex justify-center px-3 py-2 text-base font-medium text-white rounded-md bg-custom hover:opacity-80"
                    >
                        {PHONE.label}
                    </a>
                </nav>
            </div>
        </div>
    );
}