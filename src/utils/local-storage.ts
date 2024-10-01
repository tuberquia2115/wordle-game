export const getLocalStorage = (key: string) => {
    const value = global.window?.localStorage.getItem(key);
    return value;
};
export const setLocalStorage = (key: string, value: string) => {
    global.window?.localStorage.setItem(key, value);
};
