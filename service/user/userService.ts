import apiPostHelper from "../../utils/api-helpers/apiPostHelper";

import { REGISTER_USER } from "./userEndpointUrls";

const registerUser = (data: object): any => {
    return apiPostHelper(REGISTER_USER, data)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
}

export default registerUser;