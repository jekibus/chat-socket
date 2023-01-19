import { writable } from "svelte/store";
import { demoChats } from "./demo"; 

export const chats = writable(demoChats);

export const messages = writable([]);

export const showChatList = writable(false);

export const hasConfig = writable(false);