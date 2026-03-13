import React from 'react'
import { LuSearch } from "react-icons/lu";

const SearchItem = ({ search, setSearch}) => {
  return (
    <div className="w-full p-5 flex justify-center">
      <div className="w-9/12 sm:w-1/2">
        <label className="text-green-700 text-xl font-bold">Search Item</label>

        <form className="w-full relative mt-2" onSubmit={(e) => e.preventDefault()}>
          <LuSearch className="absolute left-3 top-3 text-gray-500 text-xl" />

          <input
            className="border border-slate-500 p-2 pl-10 rounded w-full"
            type="text"
            placeholder="Search item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default SearchItem
