<script>
    import MsgForm from "./msg/MsgForm.svelte";
import MsgHead from "./msg/MsgHead.svelte";
    import MsgList from "./msg/MsgList.svelte";

</script>
<div class="flex flex-col h-full w-full bg-white px-4 py-6">
    <MsgHead />
    <MsgList />
    <MsgForm />
</div>