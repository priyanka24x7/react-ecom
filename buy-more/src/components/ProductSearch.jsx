import React from 'react';

function ProductSearch() {
  return (
    <div className="search-wrapper">
        <input className="search-box" type="text" placeholder="Search..."/>
        <input type="submit" value=" " className="submit-btn"/>
    </div>
  );
}

export default ProductSearch;
