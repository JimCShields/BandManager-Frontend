
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

export default function ViewOneSong() {
    const [song, setSong] = useState({
        songId: "",
        title: "",
        artist: "",
        album: "",
        genre: "",
        usageCount: "",
        dateLastUsed: ""
    });

    const {songId} = useParams();

    console.log(songId)

  useEffect(() => {
    axios.get(`http://localhost:8080/api/v1/songs/${songId}`)
      .then(response => setSong(response.data))
      .catch(error => console.log(error));
  }, []);

  return (
        <div className="container mt-2">
            <h3 class="mb3">This is the View One Song Page</h3>
          <div class="d-grid gap-1">
          <table className="table border shadow">
            <thead>
              <tr>
                <th scope="col">Song Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Album</th>
                <th scope="col">Genres</th>
                <th scope="col">Usage Count</th>
                <th scope="col">Date Last Used</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                <tr key={song.songId}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                  <td>{song.usageCount}</td>
                  <td>{song.dateLastUsed}</td>
                  <td>
                    <Link
                      className="btn btn-danger mx-2"
                      to={`/songs/ViewOneSong/${song.songId}`}
                    >
                      View Details
                    </Link>
                    <Link
                      className="btn btn-outline-primary mx-2"
                      to={`/songs/editsong/${song.songId}`}
                    >
                      Edit Song
                    </Link>
                  </td>

                </tr>
              
              
              </tbody>
            </table>
          </div>
        </div>
      );
    
}
