import React from "react";
import Search from "./Search";
import SortButton from "./SortButton";

function Header({ search, setSearch, isSorted, setIsSorted }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search search={search} setSearch={setSearch} />
      <SortButton isSorted={isSorted} setIsSorted={setIsSorted} />
    </header>
  );
}

export default Header;
