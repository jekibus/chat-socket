import { writable } from "svelte/store";
import { demoChats } from "./demo"; 

export const chats = writable(demoChats);

export const messages = writable([]);