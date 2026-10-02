"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { formatUSPhone, isValidUSPhone, toDigits } from "@/app/lib/phone";
import { getTrackingParams } from "@/app/lib/tracking";

const SERVICE_OPTIONS = ["Roof Replacement", "Roof Repair", "Commercial Project"];

const inputClass =
    "block w-full rounded-md border border-gray-300 bg-lightishPink p-3 shadow-sm focus:border-custom focus:outline-none focus:ring-2 focus:ring-custom sm:text-sm aria-[invalid=true]:border-red-500";

export default function HeroForm() {
    const router = useRouter();
    const [phone, setPhone] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        setPhone(formatUSPhone(e.target.value));
        if (phoneError) setPhoneError("");
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (submitting) return;

        if (!isValidUSPhone(phone)) {
            setPhoneError("Please enter a valid US phone number.");
            return;
        }

        setSubmitting(true);

        try {
            const check = await fetch("/api/validate-phone", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone: toDigits(phone) }),
            });
            const { valid } = await check.json();

            if (!valid) {
                setPhoneError("Please enter a valid US mobile number.");
                return;
            }

            const formData = Object.fromEntries(new FormData(e.currentTarget));
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, ...getTrackingParams() }),
            });

            if (!res.ok) throw new Error("Lead submission failed");
            router.push("/success");
        } catch (error) {
            console.error(error);
            setPhoneError("Something went wrong. Please try again or call us.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3" name="hero-form">
            <div>
                <label htmlFor="service" className="sr-only">
                    Choose Service
                </label>
                <select id="service" name="service" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                        Choose Service*
                    </option>
                    {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <input
                type="text"
                name="address"
                autoComplete="street-address"
                placeholder="Enter Full Address*"
                aria-label="Full address"
                required
                className={inputClass}
            />

            <input
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Name*"
                aria-label="Name"
                required
                className={inputClass}
            />

            <input
                type="email"
                name="email"
                autoComplete="email"
                placeholder="Email"
                aria-label="Email"
                required
                className={inputClass}
            />

            <div>
                <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    placeholder="Phone Number*"
                    aria-label="Phone number"
                    aria-invalid={Boolean(phoneError)}
                    aria-describedby={phoneError ? "phone-error" : undefined}
                    required
                    value={phone}
                    onChange={handlePhoneChange}
                    className={inputClass}
                />
                {phoneError && (
                    <p id="phone-error" role="alert" className="mt-1 text-xs text-left text-red-400">
                        {phoneError}
                    </p>
                )}
            </div>

            <label className="flex gap-2 mt-6 text-[10px] text-left text-gray-500">
                <input type="checkbox" name="consent" required className="mt-1 rounded-md" />
                <span>
                    By checking, you authorize Neal Roofing &amp; Waterproofing to reach out to you via text
                    for information about appointment setting and any other project needs. We will never share
                    your personal information with third parties for marketing purposes. Messaging rates vary
                    based on your project needs. You can opt out at any time. Message/data rates apply.
                    Consent is not a condition of purchase. All advertised offers are subject to financing
                    approval.
                    <br />
                    <Link href="/terms-conditions" className="text-[#ccc] hover:underline">
                        Terms &amp; Conditions
                    </Link>{" "}
                    |{" "}
                    <Link href="/privacy-policy" className="text-[#ccc] hover:underline">
                        Privacy Policy
                    </Link>
                    .
                </span>
            </label>

            <button
                type="submit"
                disabled={submitting}
                className="flex justify-center w-full px-4 py-3 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-custom hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-custom focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
            >
                {submitting ? "Sending..." : "Schedule FREE Estimate"}
            </button>
        </form>
    );
}