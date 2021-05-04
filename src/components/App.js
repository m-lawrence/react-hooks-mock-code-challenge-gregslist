import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:6001/listings')
      .then(response => response.json())
      .then(setListings)
  }, [])

  function handleDelete(id) {
    const afterDelete = listings.filter(listing => {
      if (listing.id !== id) {
        return listing
      }
    })
    setListings(afterDelete)
  }

  const filteredListings = listings.filter(listing => {
    if (listing.description.includes(search)) {
      return listing
    }
  })

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch}/>
      <ListingsContainer listings={filteredListings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
