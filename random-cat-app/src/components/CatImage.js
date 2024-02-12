import React, { useEffect, useState } from "react";
import "../styles/styles.css";

const CatImage = ({ cat }) => {
  const [catData, setcatData] = useState("");

  const getCatData = async () => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/images/${cat.id}`
    );
    const data = await response.json();
    setcatData(data);
    console.log(data);
  }
useEffect(()=>{
  getCatData()
},[])
  return (
    <>
      <div>
        <img src={cat.url} alt={`Cat ${cat.id}`} className="cat-image" />
      </div>
      {catData && (
        <div>
          <h3>{catData.breeds[0].name}</h3>
          {catData.breeds[0].description}
        </div>
      ) }
    </>
  );
};

export default CatImage;
