import {io} from 'socket.io-client';
import { SOCKET_ENDPOINT } from '../config';

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
