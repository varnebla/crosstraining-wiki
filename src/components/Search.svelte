<script>
	import Fuse from 'fuse.js';

	//TODOS
	// Add missing props types
	// Add recent searches as placeholder -> allow remove recent search
	
	let {movements} = $props()

	let searchInput = $state('')

	const options = {
		keys: ['title', 'category', 'material'],
		includeMatches: true,
		minMatchCharLength: 3,
		threshold: 0,
		ignoreLocation: true,
	};
	const fuse = new Fuse(movements, options);

	let results = $state([])

	function handleSearch(e) {
		e.preventDefault();
		searchInput = e.target.value
		const _results = fuse.search(searchInput)

		results = _results;
	}
</script>

<div class="flex flex-col gap-y-3">
	<search class="text-white" >
		<div class="relative">
			<div class="absolute inset-y-0 left-0 flex items-center pl-4">
				<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
		class="icon icon-tabler icons-tabler-outline icon-tabler-search size-4"
		><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path
			d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path><path d="M21 21l-6 -6"
		></path></svg
	>
	
			</div>
			<input
				type="search"
				value={searchInput}
				oninput={(e) => handleSearch(e)}
				placeholder="Busca por ejercicio, categoría o material..."
				class="w-full p-4 ps-12 border rounded-md focus:border-slate-600 focus:ring-2 focus:ring-slate-600 border-slate-600 bg-slate-700/20 block focus:outline-slate-600"
				autofocus
			/>
		</div>
	</search>
	{#if results.length > 0}
	<section class="text-white flex flex-col gap-y-3 pt-6 overflow-auto">
		{#each results as { item }}
			<a class="w-full bg-slate-700/50 hover:bg-slate-600 px-5 py-4 text-sm rounded-md flex justify-between items-center" href={item.href}>
				<span>
					{item.title}
				</span>
				<svg  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right size-4"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg>
			</a>
		{/each}
	</section>
	{:else if searchInput.length > 2} 
		<p class="text-center text-slate-400">No hay resultados</p>
	{/if}
</div>