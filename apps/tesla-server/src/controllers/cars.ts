import { carVariants } from "../data/car-variants.data";
import { carModels } from "../data/cars.data"

export const getAllCarModels = async (req, res) => {
    try {
        res.status(200).json({ data: carModels });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getAllCarVariants = async (req, res) => {
    try {
        const { search, model, items_per_page, requesed_page } = req.body;
        let variants = carVariants.map(variant => ({
            ...variant,
            model: carModels.find(model => model.id === variant.model_id)
        }));

        if (search) {
            variants = variants.filter(variant =>
                variant.model.name.toLowerCase().includes(search.toLowerCase()) || variant.name.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (model) {
            variants = variants.filter(variant => variant.model_id === model)
        }

        const total = variants.length;

        const pageStart = items_per_page * (requesed_page - 1);
        const pageEnd = items_per_page * (requesed_page);

        variants = variants.slice(pageStart, pageEnd);

        res.status(200).json({ data: variants, total });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getCarModel = async (req, res) => {
    try {
        const { modelId } = req.body;

        const carModel = { ...carModels.find(model => model.id === modelId), variantData: []};
        carModel.variants.forEach(variantId => {
            const variant = carVariants.find(variant => variant.model_id === modelId && variant.id === variantId);
            carModel.variantData.push(variant);
        });

        res.status(200).json({ data: carModel })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}