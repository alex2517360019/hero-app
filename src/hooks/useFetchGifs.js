import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
  
  const [images, setImages] = useState([]); //mantener estado de imagenes para no reedibujarlas
  const [loading, setLoading] = useState();
  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setLoading(false);// cargando = false
  };
  useEffect(() => {
    //   getGifs(category).then(newImages =>  setImages(newImages) );
    getImages();
  }, []); //espera a que suceda un cambio en el componente
  //evitar redibujar el componente por cada cambio inecesario
  return { images, loading };
};
