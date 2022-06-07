import apiGetHelper from "../../utils/api-helpers/apiGetHelper";

import { GET_DASHBOARD_WORKOUTS } from "./workoutEnpointUrls";

export const getDashboardWorkouts = () => {
    return apiGetHelper(GET_DASHBOARD_WORKOUTS)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}