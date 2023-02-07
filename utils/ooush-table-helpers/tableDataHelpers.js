import { deepCloneObject } from "../object-helpers/object-helpers";

export const injectAdditionalTableColumn = (tableData, additionalColumnName, additionalColumnData) => {
    const updatedData = [];
    for (let tableRow of tableData) {
        let tableRowClone = deepCloneObject(tableRow);
        tableRowClone[additionalColumnName] = additionalColumnData;
        updatedData.push(tableRowClone);
    }
    return updatedData;
}