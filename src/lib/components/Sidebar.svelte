<script>
import { showChatList } from "../stores";
import ChatList from "./ChatList.svelte";
import Menu from "./Menu.svelte";
</script>

<div class="flex flex-row w-auto flex-shrink-0 bg-gray-100 p-4">
    <Menu/>
    {#if $showChatList}
    <ChatList/>
    {/if}
</div>