import axios, {AxiosInstance} from "axios";

const API: AxiosInstance = axios.create({
    baseURL: "https://localhost:7167/api/",
    headers: {
        "Content-type": "application/json",
    },
});

export default API;
