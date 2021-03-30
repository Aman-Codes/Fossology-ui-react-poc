import axios from "axios";
import { environment } from "../environments/environment";

export default class TestAPIService {
    
    getUserHeader() {
        const headers = {
            'Authorization': environment.apiToken,
        };
        return headers;
    }

    getLicenseHeader(shortName) {
        const headers = {
            'Authorization': environment.apiToken,
            'Content-Type': 'application/json',
            'shortName': shortName
        };
        return headers;
    }
    
    sendHttpCall(url, headers) {
        return axios.get(url, {
            headers: headers,
        });
    }
}