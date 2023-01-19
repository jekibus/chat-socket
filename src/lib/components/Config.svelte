<script>
import { onMount } from "svelte";
import { setConfig } from "../config";
import { hasConfig } from "../stores";

let SOCKET_ENDPOINT = "";
let DEFAULT_EVENT = "msg";
let DEFAULT_WA = "";
let MEDIA_ENDPOINT = "";
let API_KEY = "";
let AUTHORIZATION = "";

onMount(()=>{
    let config = localStorage.getItem('config');
    if(config) {
        if(typeof config == 'string') config = JSON.parse(config);
        SOCKET_ENDPOINT = config.SOCKET_ENDPOINT;
        DEFAULT_EVENT = config.DEFAULT_EVENT;
        DEFAULT_WA = config.DEFAULT_WA;
        MEDIA_ENDPOINT = config.MEDIA_ENDPOINT;
        API_KEY = config.API_KEY;
        AUTHORIZATION = config.AUTHORIZATION;
    }
})

function onClick() {
    const config = {
        SOCKET_ENDPOINT,
        DEFAULT_EVENT,
        DEFAULT_WA,
        MEDIA_ENDPOINT,
        API_KEY,
        AUTHORIZATION,
    };
    setConfig(config);
    localStorage.setItem("config", JSON.stringify(config));
    $hasConfig = true;
}
</script>

<div class="flex h-screen w-full items-center justify-center bg-indigo-900 bg-cover bg-no-repeat">
    <div class="rounded-xl bg-indigo-800 bg-opacity-50 px-16 py-10 shadow-lg backdrop-blur-md max-sm:px-8">
      <div class="text-white">
        <div class="mb-8 flex flex-col items-center">
          <h1 class="mb-2 text-2xl">Socket Chat</h1>
          <span class="text-gray-300">Fill in the blank</span>
        </div>
        <form action="#">
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" bind:value={SOCKET_ENDPOINT} type="text" placeholder="Socket Endpoint" />
          </div>
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" bind:value={DEFAULT_EVENT} type="text" placeholder="Default Event" />
          </div>
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" bind:value={DEFAULT_WA} type="text" placeholder="Default WA" />
          </div>
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" bind:value={MEDIA_ENDPOINT} type="text" placeholder="Media Endpoint" />
          </div>
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" bind:value={API_KEY} type="text" placeholder="API Key" />
          </div>
          <div class="mb-4 text-lg">
            <input class="rounded-3xl border-none bg-gray-400 bg-opacity-50 px-6 py-2 text-center text-inherit placeholder-slate-200 shadow-lg outline-none backdrop-blur-md" bind:value={AUTHORIZATION} type="text" placeholder="Authorization" />
          </div>
          <div class="mt-8 flex justify-center text-lg text-black">
            <button on:click={onClick} type="submit" class="rounded-3xl bg-gray-400 bg-opacity-50 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-gray-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>