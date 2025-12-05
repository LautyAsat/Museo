const BASE_URL: string = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001';

export const BASE_API_URL = BASE_URL;

export const API_ENDPOINTS = {
    NEWS: `${BASE_URL}/news`,
    TOP_NEWS: `${BASE_URL}/news`,
    FOSSILS: `${BASE_URL}/fossils`,
    COLLECTIONS: `${BASE_URL}/collections`,
};