import React, { useState } from "react";


function NewListingForm({ addNewListing }) {
    const [location, setLocation] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    function handleLocationChange(e) {
        setLocation(e.target.value)
    }

    function handleImageChange(e) {
        setImage(e.target.value)
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value)
    }

    function handleFormSubmit(e) {
        e.preventDefault()
        const newListing = {
            description,
            image,
            location
        }
        fetch('http://localhost:6001/listings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newListing)
        })
            .then(response => response.json())
            .then(data => addNewListing(data))
        
    }

  return (
   <form onSubmit={handleFormSubmit} className="newForm" >
       <h3>Make a new listing!</h3><br></br>
       <label>Description: </label>
       <input type="text" name="description" value={description} onChange={handleDescriptionChange}></input><br></br><br></br>
       <label>Image URL: </label>
       <input type="text" name="image" value={image} onChange={handleImageChange}></input><br></br><br></br>
       <label>Location: </label>
       <input type="text" name="location" value={location} onChange={handleLocationChange}></input><br></br><br></br>
       <input type="submit"></input>
   </form>
  );
}

export default NewListingForm;