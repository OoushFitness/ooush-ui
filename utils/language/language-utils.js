export const capitalize = (string) => {
    return string.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

export const isNullorEmptyString = (string) => {
    return string === "" || string === null;
}

export const camelCaseify = (string) => {
    return string.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
}