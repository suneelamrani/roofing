import Link from "next/link";


export default function Topbar() {
    return (
        <section className="sticky top-0 z-20 bg-banner">
            <div className="flex flex-col items-center justify-center gap-x-6 gap-y-1 sm:flex-row px-6 py-2.5 sm:px-3.5 max-w-7xl mx-auto">
                <p className="text-base leading-6 text-center text-white">
                    Roofing License: <strong>#CCC1332869</strong>
                </p>

                <Link href="tel:561-473-0192" className="text-base leading-6 text-center text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgb(255, 255, 255)" height="15px"
                        style={{
                            userSelect: "none",
                            width: "15px",
                            height: "100%",
                            display: "inline-block",
                            fill: "rgb(255, 255, 255)",
                            color: "rgb(255, 255, 255)",
                            flexShrink: 0,
                        }}
                    >
                        <g color="rgb(255, 255, 255)" fontWeight="fill">
                            <path d="M152.27,37.93a8,8,0,0,1,9.8-5.66,86.22,86.22,0,0,1,61.66,61.66,8,8,0,0,1-5.66,9.8A8.23,8.23,0,0,1,216,104a8,8,0,0,1-7.73-5.93,70.35,70.35,0,0,0-50.33-50.34A8,8,0,0,1,152.27,37.93Zm-2.33,41.8c13.79,3.68,22.65,12.55,26.33,26.34A8,8,0,0,0,184,112a8.23,8.23,0,0,0,2.07-.27,8,8,0,0,0,5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8,8,0,1,0-4.13,15.46Zm72.43,78.73-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"></path>
                        </g>
                    </svg>

                    (561) 473-0192
                </Link>
            </div>
        </section>
    )
}

