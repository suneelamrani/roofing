import { commercialRoofing } from "./commercial-roofing";
import { residentialRoofing } from "./residential-roofing";
import { roofRepair } from "./roof-repair";
import { roofReplacement } from "./roof-replacement";
import { waterproofing } from "./waterproofing";
import type { ServicePage } from "./types";

const SERVICE_PAGES: ServicePage[] = [
    residentialRoofing,
    commercialRoofing,
    roofReplacement,
    roofRepair,
    waterproofing,
];

export const getAllServices = () => SERVICE_PAGES;

export const getServiceBySlug = (slug: string) =>
    SERVICE_PAGES.find((service) => service.slug === slug);

export type { ServicePage } from "./types";