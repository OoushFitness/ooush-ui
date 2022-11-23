import apiPostHelper from "../../utils/api-helpers/apiPostHelper";
import apiGetHelper from "../../utils/api-helpers/apiGetHelper";

import {
    REGISTER_USER,
    UPDATE_USER_SETTINGS,
    GET_USER_SETTINGS
} from "./userEndpointUrls";

export const registerUser = (data: object): any => {
    return apiPostHelper(REGISTER_USER, data)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export const updateUserSettings = (data: object) => {
    return apiPostHelper(UPDATE_USER_SETTINGS, data)
        .then(response => response.json())
        .then(data => {
            return data.data
        });
}

export const getUserSettings = () => {
    return apiGetHelper(GET_USER_SETTINGS)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}