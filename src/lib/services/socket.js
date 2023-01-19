import {io} from 'socket.io-client';
import { getConfig } from '../config';

const {SOCKET_ENDPOINT, AUTHORIZATION} = getConfig();

export const socketIO = io(SOCKET_ENDPOINT, {
    extraHeaders: {
        Authorization: AUTHORIZATION
    },
    auth: {
        Authorization: AUTHORIZATION
    },
    path: "/socket.io/",
    transports: ["websocket"]
});
