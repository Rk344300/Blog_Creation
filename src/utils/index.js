
//this function is used to store the data in localstorage
export const StoreLocalStorageData = (key, value) => {
    let data = JSON.parse(localStorage.getItem(key));

    if (!data) {
        data = [value];
    } else {
        data.push(value);
    }
    localStorage.setItem(key, JSON.stringify(data));
}
//to get the data from localstorage
export const getLocalStorageData = (key) => {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}