import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div>
      <Link to="/models">
        <button>Models Sahifasiga O‘tish</button>
      </Link>
    </div>
  )
}

export default Homepage
