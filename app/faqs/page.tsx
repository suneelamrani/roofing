import Faq from "@/app/components/sections/Faq";
import { All_FAQS } from "@/app/lib/faqs";
import Link from "next/link";
import Contact from "../components/sections/Contact";

export default function FaqsPage() {
    return (
        <main className="pb-20 lg:pb-32 bg-gradient-custom">

            <div className="px-6 pt-8 mx-auto max-w-7xl lg:px-8">
                <Link href="/" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors">
                    <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                    Back to Homepage
                </Link>
            </div>

            <div className="px-6 pb-16 mx-auto mt-12 bg-white shadow-xl rounded-2xl max-w-7xl lg:px-8">
                <div className="max-w-4xl mx-auto">

                    <Faq
                        items={All_FAQS}
                        description="Answering your questions about roofing."
                    />

                </div>
            </div>


            <div className="px-6 mx-auto mt-16 bg-white max-w-7xl sm:mt-24 lg:px-8 lg:rounded-xl" id="contact">

                <Contact />
            </div>

        </main>
    );
}