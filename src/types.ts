interface FishData {
    name: string;
    images: Image[] | null; 
    calories: number | null;
    fat: number | null;
    description: string | null;
}

export interface Image {
    src: string;
    alt: string;
    title: string;
}

export type Region = {
    slug: string;
    region: string;
    regionImage: string;
    calories: number[];
    fat: number[];
    caloriesAvg: number;
    fatAvg: number;
    data: FishData[] | undefined;
}

export type NOAAApiData = {
    SpeciesName: string | null;
    NOAAFisheriesRegion: string | null;
    Calories: string | null;
    FatTotal: string | null;
    Servings: string | null;
    ImageGallery: Image[] | null;
    SpeciesIllustrationPhoto: Image | null;
    PhysicalDescription: string | null;
    Taste: string | null;
}