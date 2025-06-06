import type { Image, NOAAApiData, Region } from "../types";
import { slugify } from "./slugify";
import { regionImages } from "./regionImages";
import { average } from "./average";

export const transformRegions = (noaaApiData: NOAAApiData[]) => {
    const regions: Record<string, Region> = {};

    noaaApiData.forEach((item: NOAAApiData) => {
        if (!item.NOAAFisheriesRegion) return;

        const slug = slugify(item.NOAAFisheriesRegion);
        if (!regions[slug]) {
            regions[slug] = {
                slug: slugify(item.NOAAFisheriesRegion),
                region: item.NOAAFisheriesRegion,
                regionImage: regionImages[slug],
                calories: [],
                fat: [],
                caloriesAvg: 0,
                fatAvg: 0,
                data: []
            };
        }
        const calories = item.Servings ? Number(item.Calories) / Number(item.Servings) : null;
        const fat = item.Servings ? Number(item.FatTotal?.replace("g", "")) / Number(item.Servings) : null;
        const images: Image[] = [];

        if (item.ImageGallery && item.ImageGallery.length > 0) {
            images.push(...item.ImageGallery);
        }
        if (item.SpeciesIllustrationPhoto) {
            images.push(item.SpeciesIllustrationPhoto);
        }
        if (calories) {
            regions[slug].calories?.push(calories);
        }
        if (fat) {
            regions[slug].fat?.push(fat);
        }

        if (item.SpeciesName) {
            regions[slug].data?.push({
                name: item.SpeciesName,
                images: images,
                calories: calories,
                fat: fat,
                description: item.Taste //item.PhysicalDescription
            });
        }
    });

    Object.values(regions).map(region => {
        region.caloriesAvg = +average(region.calories).toFixed(2);
        region.fatAvg = +average(region.fat).toFixed(2);
    });

    return regions;
};

