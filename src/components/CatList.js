import React from 'react';
import CatImage from './CatImage';

const CatList = ({ cats }) => {
  return (
    <div>
      {cats.map((cat) => (
        <CatImage key={cat.id} cat={cat} />
      ))}
    </div>
  );
};

export default CatList;
