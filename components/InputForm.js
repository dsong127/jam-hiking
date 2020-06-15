import React, { useState } from 'react';

export function NameForm() {
    const [name, setPlace] = useState({
        name: ' '
    });
    
    const handleSubmit = async event => {
        event.preventDefault();
        const place = form.elements['place'].value;
        const geocode = await fetch(
          'https://maps.googleapis.com/maps/api/geocode/json?address=${$place}$key=AIzaSyB_2RCsRYjKq-DEzggMGymUl9iHZXLpRVA'
        )
          .then(res => res.json())
          .catch(err => console.log(err))
        console.log(geocode)
      }
    
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Find Hiking trails near::
          <input
            type="text"
            value={place}
            onChange={e => setName(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }


  