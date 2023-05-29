
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ViewAllSongs() {
    const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
        <div className="container mt-2">
          <h1>This is the homepage</h1>

        </div>
      );
    
}
