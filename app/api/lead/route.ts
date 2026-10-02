import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const lead = await request.json();

    // TODO: forward `lead` to your CRM, email service, or webhook.
    console.log("New lead:", lead);

    return NextResponse.json({ ok: true });
}