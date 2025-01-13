const MAX_SEARCH_HISTORY_ITEMS = 4;

export const saveSearchHistoryItem = (item: {
  title: string;
  href: string;
}) => {
  const searchHistory = localStorage?.getItem('searchHistory');
  let searchHistoryItems = searchHistory ? JSON.parse(searchHistory) : []; 
  
  const itemExists = searchHistoryItems.find((el) => el.item.title == item.title);
  if(!itemExists) searchHistoryItems.push({item});

  if(searchHistoryItems.length > MAX_SEARCH_HISTORY_ITEMS) searchHistoryItems.shift();

  localStorage.setItem('searchHistory', JSON.stringify([...new Set(searchHistoryItems)]));
  };