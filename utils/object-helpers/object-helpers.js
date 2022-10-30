export const deepCloneObject = (object) => {
    let deepClone = {};
    for (let key of Object.keys(object)) {
        deepClone[key] = object[key];
    }
    return deepClone;
}

export const deepCloneArray = (array) => {
    let deepClone = [];
    for (let entry of array) {
        deepClone.push(entry);
    }
    return deepClone;
}