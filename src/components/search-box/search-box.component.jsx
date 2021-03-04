import React from 'react';
import './search-box.style.css';

const SearchBox = ({ search, SearchMonster, placeholder }) => (
  <input
    name='search'
    type='search'
    placeholder={placeholder}
    value={search}
    onChange={SearchMonster}
  />
);

export default SearchBox;
