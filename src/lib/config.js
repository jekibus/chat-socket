let SOCKET_ENDPOINT = "";
let DEFAULT_EVENT = "msg";
let DEFAULT_WA = "";
let MEDIA_ENDPOINT = "";
let API_KEY = "";
let AUTHORIZATION = "";

export const getConfig = () => {
    return {
        SOCKET_ENDPOINT,
        DEFAULT_EVENT,
        DEFAULT_WA,
        MEDIA_ENDPOINT,
        API_KEY,
        AUTHORIZATION
    }
}

export const setConfig = (config) => {
    SOCKET_ENDPOINT = config.SOCKET_ENDPOINT;
    DEFAULT_EVENT = config.DEFAULT_EVENT;
    DEFAULT_WA = config.DEFAULT_WA;
    MEDIA_ENDPOINT = config.MEDIA_ENDPOINT;
    API_KEY = config.API_KEY;
    AUTHORIZATION = config.AUTHORIZATION;
}