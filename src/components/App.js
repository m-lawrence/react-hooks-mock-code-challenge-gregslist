import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";
import NewListingForm from "./NewListingForm";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [isSorted, setIsSorted] = useState(false)

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

  const sortedListings = isSorted ? (filteredListings.sort((a,b) => a.location.localeCompare(b.location))) : filteredListings

  function addNewListing(newListing) {
    setListings([...listings, newListing])
  }

  return (
    <div className="app">
      <Header search={search} setSearch={setSearch} isSorted={isSorted} setIsSorted={setIsSorted} />
      <ListingsContainer listings={sortedListings} handleDelete={handleDelete}/><br></br>
      <NewListingForm addNewListing={addNewListing}/>
    </div>
  );
}

export default App;
