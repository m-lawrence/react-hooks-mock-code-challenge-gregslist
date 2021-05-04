import React from "react";


function SortButton({ isSorted, setIsSorted }) {

    function handleSortClick() {
        setIsSorted(isSorted => !isSorted)
    } 

  return (
    <button className="sortButton" onClick={handleSortClick}>{isSorted ? "Unsort, please" : "Sort Listings by Location"}</button>
  );
}

export default SortButton;