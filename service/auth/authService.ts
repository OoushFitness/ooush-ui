import apiPostHelper from "../../utils/api-helpers/apiPostHelper";

import apiGetHelper from "../../utils/api-helpers/apiGetHelper";

import {LOGIN, LOGOUT, VERIFY} from "./authEndpointUrls";

export const login = (data: object): any => {
    return apiPostHelper(LOGIN, data)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export const verify = (token: string) => {
    return apiGetHelper(VERIFY)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export const logout = () => {
    return apiGetHelper(LOGOUT)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}