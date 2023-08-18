import { CarColorId } from "./car-colors";
import { CarModel } from "./car-model";

type CatVariantTypes = 'base' | 'plaid' | 'standard-range' | 'performance' | 'long-range' | 'rear-wheel-drive';

type CarImage = string[];

type CarColorAndImage = [CarColorId, string[]];

interface CarVariant {
    id: CatVariantTypes;
    name: string;
    model_id: string;
    model?: CarModel;
    price: number;
    range: number;
    seating: number;
    motor: string;
    cargo_capacity: number;
    acceleration: number;
    top_speed: number;
    color_and_images: CarColorAndImage[];
}

interface CarVariantData {
    data: CarVariant[];
    total: number;
}

export { CatVariantTypes, CarVariant, CarVariantData, CarColorAndImage };
