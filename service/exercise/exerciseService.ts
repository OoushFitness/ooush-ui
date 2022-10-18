import apiPostHelper from "../../utils/api-helpers/apiPostHelper";
import apiDeleteHelper from "../../utils/api-helpers/apiDeleteHelper";

import { FETCH_EXERCISES } from "./exerciseEndpointUrls";
import { UPDATE_USER_EXERCISE } from "./exerciseEndpointUrls";
import { REMOVE_USER_EXERCISE } from "./exerciseEndpointUrls";

export const fetchExercises = (data: object): any => {
    return apiPostHelper(FETCH_EXERCISES, data)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export const updateUserExercise = (data: object): any => {
    return apiPostHelper(UPDATE_USER_EXERCISE, data)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export const removeUserExercise = (exerciseId: number, exerciseDayId: number) => {
    return apiDeleteHelper(REMOVE_USER_EXERCISE + "/" + exerciseId + "/" + exerciseDayId)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}