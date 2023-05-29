
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function ViewAllSongs() {
//     const [songs, setSongs] = useState([]);

//   useEffect(() => {
//     axios.get('http://localhost:8080/api/v1/songs/title/Erotomania')
//       .then(response => setSongs(response.data))
//       .catch(error => console.log(error));
//   }, []);

//   return (
//         <div className="container mt-2">
//             <span>anything at all?</span>
//           <div class="d-grid gap-3">
//             {songs.map(song => (
//             <div class="row">
//                 <div class="col-sm-6 mb-3 mb-sm-0">
//                     <div class="card">
//                         <div class="card-body">
//                             <h5 class="card-title">{song.title}</h5>
//                             <p class="card-text">{song.artist}</p>
//                             <p class="card-text">{song.usageCount}</p>
//                             <p class="card-text">{song.genres}</p>
//                             <p class="card-text">Date Last Used</p>
//                             <a href="#" class="btn btn-primary mx-1">Add to Setlist</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             ))}
//           </div>
//         </div>
//       );
    
// }

import React from 'react'

export default function EditSong() {
  return (
    <div>EditSong</div>
  )
}

