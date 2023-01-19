import {io} from 'socket.io-client';
import { getConfig } from '../config';

const {SOCKET_ENDPOINT} = getConfig();

export const socketIO = io(SOCKET_ENDPOINT, {
    extraHeaders: {
        Authorization: "Basic aXNtYXJ0OmlTbWFydDZsb2JhbA=="
    },
    auth: {
        Authorization: "Basic aXNtYXJ0OmlTbWFydDZsb2JhbA=="
    },
    path: "/socket.io/",
    transports: ["websocket"]
});
