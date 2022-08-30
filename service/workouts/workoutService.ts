import apiGetHelper from "../../utils/api-helpers/apiGetHelper";
import apiPostHelper from "../../utils/api-helpers/apiPostHelper";

import { GET_DASHBOARD_WORKOUTS } from "./workoutEnpointUrls";
import { SET_DASHBOARD_WORKOUT_DAY_TITLE } from "./workoutEnpointUrls";

export const getDashboardWorkouts = () => {
    return apiGetHelper(GET_DASHBOARD_WORKOUTS)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export const setDashboardWorkoutDayTitle = (params: {}) => {
    return apiPostHelper(SET_DASHBOARD_WORKOUT_DAY_TITLE, params)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}