<script>
import { messages } from "../../stores";
import { socketIO } from "../../services/socket";
import { onMount } from "svelte";
import { DEFAULT_EVENT } from "../../config";

let container;

const scrollToBottom = async () => {
  if(!container) return;
  container.scroll({ top: (container.scrollHeight), behavior: 'smooth' });
}; 

onMount(()=>{
  if(!socketIO.connected) {
    socketIO.on('connect', () => {
      console.log("Socket is connected")
    });
    socketIO.on(DEFAULT_EVENT, (msg)=>{
      const m = $messages;
      m.push(msg);
      $messages = m;
      setTimeout(scrollToBottom, 300);
    });
  }
});

</script>
<div class="h-full overflow-hidden py-4">
    <div bind:this={container} class="h-full overflow-y-auto">
      <div class="grid grid-cols-12 gap-y-2 align-bottom">
        {#each $messages as message}
          {#if message.isMe}
          <div class="col-start-6 col-end-13 p-3 rounded-lg">
            <div class="flex items-center justify-start flex-row-reverse">
              <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-indigo-100 flex-shrink-0"
              >
                S
              </div>
              <div
                  class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
              >
                <div>{message.text?.body}</div>
              </div>
            </div>
          </div>
          {:else}
          <div class="col-start-1 col-end-8 p-3 rounded-lg">
            <div class="flex flex-row items-center">
              <div
                  class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100 flex-shrink-0"
              >
                C
              </div>
              <div
                  class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
              >
                <div>{message.text?.body}</div>
              </div>
            </div>
          </div>
          {/if}
        {/each}
      </div>
    </div>
  </div>