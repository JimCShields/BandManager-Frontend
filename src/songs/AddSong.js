import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddSong() {
  let navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genres, setGenres] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/v1/songs/add", {
      title: title,
      artist: artist,
      album: album,
      genres: genres,
    });
    console.log(title, artist, album, genres);
    navigate("/");
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Song</h2>

          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Song Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the song title"
                name="title"
                defaultValue={title}
                onChange={(e) => {setTitle(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="artist" className="form-label">
                Artist Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the artist's name"
                name="artist"
                defaultValue={artist}
                onChange={(e) => {setArtist(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="album" className="form-label">
                Album Title
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the album title"
                name="album"
                defaultValue={album}
                onChange={(e) => {setAlbum(e.target.value)}}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="genre" className="form-label">
                Song Genres
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the genre, separated by commas if more than one applies"
                name="genre"
                defaultValue={genres}
                onChange={(e) => {setGenres(e.target.value.split(","))}}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}