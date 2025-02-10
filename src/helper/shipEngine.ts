import ShipEngine from 'shipengine';

export const shipEngine: ShipEngine = new ShipEngine({
    apiKey: process.env.SHIPENGINE_API_KEY as string
});