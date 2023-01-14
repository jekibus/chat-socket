<script>
    import { onMount } from "svelte";
import { chats, messages } from "../stores";

onMount(()=>{
  $messages = $chats[0].messages;
})

</script>

<div class="mt-5">
    <div class="text-xs text-gray-400 font-semibold uppercase">Personal</div>
  </div>
  <div class="mt-2">
    <div class="flex flex-col -mx-4">
      {#each $chats as chat}
      <div class="relative flex flex-row items-center p-4 border-l-2 {chat.isActive ? ' bg-gradient-to-r from-red-100 to-transparent border-red-500' : ''}">
        <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">{chat.lastSeen}</div>
        <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
          {chat.initial}
        </div>
        <div class="flex flex-col flex-grow ml-3">
          <div class="text-sm font-medium">{chat.name}</div>
          <div class="text-xs truncate w-40">Tasikmalaya</div>
        </div>
        <div class="flex-shrink-0 ml-2 self-end mb-1">
          {#if !chat.isActive}
          <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">5</span>
          {/if}
        </div>
      </div>
      {/each}
    </div>
  </div>