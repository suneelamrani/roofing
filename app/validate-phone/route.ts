import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { phone } = (await request.json()) as { phone?: string };

    if (!phone || !/^\d{10}$/.test(phone)) {
        return NextResponse.json({ valid: false }, { status: 400 });
    }

    try {
        const res = await fetch(`https://api.trestleiq.com/3.0/phone_intel?phone=${phone}`, {
            headers: { "x-api-key": process.env.TRESTLE_API_KEY! },
            cache: "no-store",
        });

        if (!res.ok) throw new Error(`Trestle responded ${res.status}`);

        const data = await res.json();
        const valid = Boolean(
            data?.is_valid && data?.line_type === "Mobile" && data?.country_code === "US"
        );

        return NextResponse.json({ valid });
    } catch (error) {
        console.error("Phone validation failed:", error);
        return NextResponse.json({ valid: true, verified: false });
    }
}