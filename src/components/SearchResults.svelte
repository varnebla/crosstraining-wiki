<script>
	import {saveSearchHistoryItem} from '@useCases/saveSearchHistoryItem';
let {results} = $props()

</script>

<section class="text-white flex flex-col gap-y-3 pt-6 overflow-auto">
		{#each results as { item }}
			<a href={item.href} onclick={saveSearchHistoryItem(item)} class="w-full bg-neutral-700/50 hover:bg-neutral-600 px-5 py-4 text-sm rounded-md flex justify-between items-center">
				<span>
					{item.title}
				</span>
				<svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
			</a>
		{/each}
</section>
	