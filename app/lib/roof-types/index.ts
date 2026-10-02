import { cedarShakeRoof } from "./cedar-shake";
import { clayTileRoof } from "./clay-tile";
import { concreteTileRoof } from "./concrete-tile";
import { flatRoof } from "./flat";
import { metalRoof } from "./metal";
import { shingleRoof } from "./shingle";
import type { RoofTypePage } from "./types";

const ROOF_TYPES: RoofTypePage[] = [
    shingleRoof,
    metalRoof,
    clayTileRoof,
    concreteTileRoof,
    flatRoof,
    cedarShakeRoof,
];

export const getAllRoofTypes = () => ROOF_TYPES;

export const getRoofTypeBySlug = (slug: string) => ROOF_TYPES.find((roof) => roof.slug === slug);

export type { RoofTypePage } from "./types";