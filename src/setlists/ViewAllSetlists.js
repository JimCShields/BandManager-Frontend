import React from 'react'
import { useState } from 'react';

export default function ViewAllSetlists() {
    const [setlists, setSetlists] = useState([]);
  
  
    return (
        <div className="container mt-2">
        <div className="py-4">
          <h1>A List of Setlists</h1>
          </div>
        </div>
  )
}
