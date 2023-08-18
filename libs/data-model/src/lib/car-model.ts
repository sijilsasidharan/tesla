import { CarVariant, CatVariantTypes } from "./car-variants";

interface CarModel {
    id: string;
    name: string;
    variants: CatVariantTypes[];
    variantData?: CarVariant[];
}

interface CarModelData {
    data: CarModel[]
}

export { CarModel, CarModelData };