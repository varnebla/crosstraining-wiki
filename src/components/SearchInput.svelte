<script>
let {searchInput, handleSearch} = $props()

function handleInput(e){
  handleSearch(e)
}

</script>

<search class="text-white w-full" >
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
      class="w-full p-4 ps-12 bg-transparent focus:outline-none"
      autofocus
    />
  </div>
</search>

<style>
  /* clears the 'X' in searchbar from Chrome */
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>