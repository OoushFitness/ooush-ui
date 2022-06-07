import apiPostHelper from "../../utils/api-helpers/apiPostHelper";

import { FETCH_EXERCISES } from "./exerciseEndpointUrls";

export const fetchExercises = (data: object): any => {
    return apiPostHelper(FETCH_EXERCISES, data)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}