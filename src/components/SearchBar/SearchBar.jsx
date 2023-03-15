import React from 'react';
import searchIcon from '../../assets'
function SearchBar(props) {
  return (
    <div className="bg-grey flex flex-row items-center justify-start
     px-2 py-1 rounded-md gap-4 w-[46%]">
      <img src={searchIcon} alt="search-icon"  />
      <input type="text" placeholder="Quick search ..." className="bg-transparent" />
    </div>
  );
}

export default SearchBar;