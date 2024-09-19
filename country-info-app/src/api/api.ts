import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export const getCountries = async () => {

    try {
        const response = await api.get("/api");
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}

export const getCountryByCode = async (countryCode: string) => {

    try {
        const response = await api.get(`/api/${countryCode}`);
        return response.data;
    }
    catch (error) {
        console.error(error);
    }
}
