<script>
  import SearchInput from '@components/SearchInput.svelte';
  import SearchResults from '@components/SearchResults.svelte';
  import Fuse from 'fuse.js';
	import { getSearchHistory } from '@useCases/getSearchHistory';
	import { onMount } from 'svelte';

	const DEFAULT_MOVEMENTS = [

			{item: {
				title: 'Air Squat',
				href: '/movimientos/air-squat',
			}},
			{item: {
				title: 'Power Clean',
				href: '/movimientos/power-clean',
			}}
	]

//TODOS
// Add missing props types
// Add recent searches as placeholder -> allow remove recent search
// Add recommendations if no recent searches

let {searchOptions} = $props()
let searchInput = $state('')
let searchHistory = $state([])

onMount(() => {
	searchHistory = getSearchHistory()
})

const options = {
  keys: ['title', 'category', 'material'],
  includeMatches: true,
  minMatchCharLength: 3,
  threshold: 0,
  ignoreLocation: true,
};
const fuse = new Fuse(searchOptions, options);

let results = $state([])

function handleSearch(e) {
  e.preventDefault();
  searchInput = e.target.value
  const _results = fuse.search(searchInput)
  results = _results;
}

function closeDialog(){
  const searchModal = document.querySelector('dialog');
	searchModal?.close();
}

</script>

<dialog
	class="w-full min-w-[320px] max-w-[90vw] sm:max-w-xl bg-neutral-800 p-4 pb-8 rounded-lg backdrop:fixed backdrop:bg-black/50 backdrop:backdrop-blur-sm max-h-[dvh] border border-neutral-700 fixed inset-0 mx-auto mt-6 md:mt-auto mb-auto overscroll-none"
>
	<header class="w-full flex justify-between text-white mb-4 border-b border-neutral-700 sticky top-0">
    <SearchInput searchInput={searchInput} handleSearch={(e) =>handleSearch(e)} />
		<button id="close-button p-2 " aria-label="Close Search Dialog" onclick={closeDialog}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-x"
				><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
					d="M18 6l-12 12"></path><path d="M6 6l12 12"></path></svg
			>
		</button>
	</header>
	<main>
    {#if results.length > 0}
		<SearchResults results={results} />
    {:else if searchInput.length < 2}
		{#if searchHistory.length > 0}
		<p class=" text-neutral-400 mt-8">Últimas búsquedas:</p>
				<SearchResults results={searchHistory} />
			{/if}
		<p class=" text-neutral-400 mt-8">Quizás te puedan interesar estos movimientos:</p>
		<SearchResults results={DEFAULT_MOVEMENTS} />
		{:else}
		<p class="text-center text-neutral-400">No hay resultados</p>
	{/if}
	</main>
</dialog>