//composable to make API requests using axios
import axios from "axios";

const client = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}`,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
});

export function useApiService() {
    function get(path, config = null) {
        return client.get(path, config);
    }

    function post(path, data, config = null) {
        return client.post(path, data, config);
    }

    function put(path, data, config = null) {
        return client.put(path, data, config);
    }

    function patch(path, data, config = null) {
        return client.patch(path, data, config);
    }


    return {
        get,
        post,
        put,
        patch,
    }
}
