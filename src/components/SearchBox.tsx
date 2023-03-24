import React from 'react';

const SearchBox = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" placeholder="Search products..." value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBox;