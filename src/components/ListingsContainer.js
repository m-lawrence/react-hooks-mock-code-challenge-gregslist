import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleDelete }) {
  const listingsArr = listings.map(listing => {
    return <ListingCard key={listing.id} id={listing.id} description={listing.description} image={listing.image} location={listing.location} handleDelete={handleDelete}/>
  })
  return (
    <main>
      <ul className="cards">
        {listingsArr}
      </ul>
    </main>
  );
}

export default ListingsContainer;
