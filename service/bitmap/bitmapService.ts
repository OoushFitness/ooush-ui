import apiPostHelper from "../../utils/api-helpers/apiPostHelper";
import apiGetHelper from "../../utils/api-helpers/apiGetHelper";
import {FETCH_SEARCH_OPTIONS} from "./bitmapEndpointUrls";

export const fetchSearchOptions = () => {
    return apiGetHelper(FETCH_SEARCH_OPTIONS)
        .then(response => response.json())
        .then(data => {
            return data.data;
        });
};