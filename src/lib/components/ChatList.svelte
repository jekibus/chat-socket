<script>
import Demo from "./Demo.svelte";
</script>
<div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
    <div class="flex flex-row items-center">
      <div class="flex flex-row items-center">
        <div class="text-xl font-semibold">Messages</div>
        <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5</div>
      </div>
      <div class="ml-auto">
        <button class="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
          <svg class="w-4 h-4 stroke-current"
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
               xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>
    </div>
    <div class="mt-5">
      <ul class="flex flex-row items-center justify-between">
        <li>
          <a href="/"
             class="flex items-center pb-3 text-xs font-semibold relative text-indigo-800">
            <span>All Conversations</span>
            <span class="absolute left-0 bottom-0 h-1 w-6 bg-indigo-800 rounded-full"></span>
          </a>
        </li>
        <li>
          <a href="/"
             class="flex items-center pb-3 text-xs text-gray-700 font-semibold">
            <span>Archived</span>
          </a>
        </li>
        <li>
          <a href="/"
             class="flex items-center pb-3 text-xs text-gray-700 font-semibold">
            <span>Starred</span>
          </a>
        </li>
      </ul>
    </div>
    <Demo />
  </div>