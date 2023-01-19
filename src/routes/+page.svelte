<script>
import Content from "$lib/components/Content.svelte";
import Sidebar from "$lib/components/Sidebar.svelte";
import Config from "../lib/components/Config.svelte";
import { hasConfig } from "../lib/stores";

</script>

<svelte:head>
    <title>Chat Socket | Jekibus</title>
    <meta name="description" content="Chat code sample using Socket.io, Svelte, and support Whatsapp API" />
</svelte:head>

<div class="flex flex-row h-screen antialiased text-gray-800">
    {#if !$hasConfig}
    <Config/>
    {:else}
    <Sidebar/>
    <Content/>
    {/if}
</div>