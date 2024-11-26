import React from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
  return (
    <div id="brand">
      <h1>Brand Collection</h1>
      <div>
        <Link to="/brand/nike">
          <button>Nike Collection</button>
        </Link>
        <Link to="/brand/adidas">
          <button>Adidas Collection</button>
        </Link>
      </div>
    </div>
  );
};

export default Brand;
