// import React from 'react'
import { useState } from "react";
import { AddCategory,GifGrid } from "./components";


const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Boruto", "Bleach"]);
  //   console.log(categories);
  const addCategory = (newCategory) => {
    const repetido = categories.find((category) => category === newCategory);
    // console.log(repetido);
    if (!repetido) setCategories([...categories, newCategory]);
    //setCategories(cat => [...cat,categoria]); //misma forma de agrefar pero con un ciclo(callback)
  };

  return (
    <>
      <h1>Gift Expert App</h1>
      {/* Input */}
      {/* AddCategory */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={addCategory}
      />
      {/* se pasa funcion a componente */}

      {/* <button onClick={addCategory}>Submit</button> comentada */}

      {/* ListGif */}
      
      {
       categories.map((category) => (
        <GifGrid key={category} category={category}/>
        // console.log(<GifGrid key={category} category={category} ></GifGrid>);
        ))
      }
    </>
  );
};

export default GiftExpertApp;
