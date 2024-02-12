import React, { useState } from 'react';
import Head from 'next/head';
import CatList from '../components/CatList';
import '../styles/styles.css'

const Home = ({ initialCat }) => {
  const [cats, setCats] = useState([initialCat]);
  const [currentCatIndex, setCurrentCatIndex] = useState(0);

  const showPrevCat = () => {
    setCurrentCatIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const showNextCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1');
    const [newCat] = await response.json();
    setCats([...cats, newCat]);
    setCurrentCatIndex(cats.length); 
  };

  return (
    <div className='container'>
      <Head>
        <title>Random Cat App</title>
      </Head>
      <h1>Random Cat App</h1>
      <div>
        <CatList cats={[cats[currentCatIndex]]} />
        <button onClick={showPrevCat} disabled={currentCatIndex === 0}>
          Prev
        </button>
        <button onClick={showNextCat}>Next</button>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search?has_breeds=1');
  const [initialCat] = await response.json();

  return {
    props: {
      initialCat,
    },
  };
}

export default Home;
