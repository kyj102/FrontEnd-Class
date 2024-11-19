"use client";

import React, {useState} from 'react';

const Searchbar = () => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <input 
      value={search} 
      type="text" 
      onChange={onChangeSearch} 
      />
    </div>
  )
}

export default Searchbar