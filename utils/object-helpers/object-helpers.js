const deepCloneObject = (object) => {
    let deepClone = {};
    for (let key of Object.keys(object)) {
        deepClone[key] = object[key];
    }
    return deepClone;
}

export default deepCloneObject;