export const getSearchHistory = () => {
  if(!window) return []
  const searchHistory = localStorage?.getItem('searchHistory');
  if (searchHistory) {
    return JSON.parse(searchHistory);
  }
  return [];
};