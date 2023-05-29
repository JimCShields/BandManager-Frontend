
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ViewAllSongs() {
    const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/v1/songs')
      .then(response => setSongs(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
        <div className="container mt-2">
          <div className="py-4">
            <h1>View All Songs</h1>
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Song Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Usage Count</th>
                <th scope="col">Date Last Used</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {songs.map(song => (
        
                <tr key={song.songId}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.usageCount}</td>
                  <td>{song.dateLastUsed}</td>
                  <td>
                    <Link
                      className="btn btn-primary mx-1"
                      to={`/songs/ViewOneSong/${song.songId}`}
                    >
                      View Details
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-1"
                      to={`/songs/editsong/${song.songId}`}
                    >
                      Edit Song
                    </Link>
                  </td>

                </tr>
              ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    
}
