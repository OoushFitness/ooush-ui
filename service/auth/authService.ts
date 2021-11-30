import apiPostHelper from "../../utils/api-helpers/apiPostHelper";

import { LOGIN } from "./authEndpointUrls";

const login = (data: object): any => {
    return apiPostHelper(LOGIN, data)
            .then(response => response.json())
            .then(data => {
                return data.data;
            });
}

export default login;