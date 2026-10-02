export type NavLink = {
    label: string;
    href: string;
};

export type NavItem = {
    label: string;
    /** Plain link. If `children` is also set, desktop shows the link and mobile shows an accordion. */
    href?: string;
    children?: NavLink[];
};

export const PHONE = { label: "(561) 473-0192", href: "tel:561-473-0192" };

export const NAV_ITEMS: NavItem[] = [
    {
        label: "Services",
        children: [
            { label: "Residential Roofing", href: "/services/residential-roofing-palm-beach-county-fl" },
            { label: "Commercial Roofing", href: "/services/commercial-roofing-palm-beach-county-fl" },
            { label: "Roof Replacement", href: "/services/roof-replacement-palm-beach-county-fl" },
            { label: "Roof Repair", href: "/services/roof-repair-palm-beach-county-fl" },
            { label: "Waterproofing", href: "/services/waterproofing-palm-beach-county-fl" },
            { label: "View all services", href: "/services" },
        ],
    },
    {
        label: "Roof Types",
        children: [
            { label: "Shingle", href: "/roof-types/shingle" },
            { label: "Metal", href: "/roof-types/metal" },
            { label: "Clay Tile", href: "/roof-types/clay-tile" },
            { label: "Concrete Tile", href: "/roof-types/concrete-tile" },
            { label: "Flat", href: "/roof-types/flat" },
            { label: "Cedar Shake", href: "/roof-types/cedar-shake" },
        ],
    },
    {
        label: "Locations",
        href: "/locations",
        children: [
            { label: "Boca Raton, FL", href: "/locations/boca-raton-fl" },
            { label: "Delray Beach, FL", href: "/locations/delray-beach-fl" },
            { label: "Jupiter, FL", href: "/locations/jupiter-fl" },
            { label: "Palm Beach Gardens, FL", href: "/locations/palm-beach-gardens-fl" },
            { label: "Wellington, FL", href: "/locations/wellington-fl" },
            { label: "View All Locations", href: "/locations" },
        ],
    },
    { label: "Financing", href: "/financing" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
    { label: "FAQs", href: "/faqs" },
    { label: "Refer a Friend", href: "/refer" },
];