import { useFetchGifs } from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

export const GifGrid = ({category}) => {
const {images, loading = true} = useFetchGifs(category);
  return (
    <>  
        <h2>{category}</h2>
        {
            loading ? <h1>Cargando...</h1> 
            : 
            <div className="card-grid">
            {
              images.map((image)=>(
                  <GifGridItem key={image.id} {...image}/>
              ))
            }  
          </div>
        }
    </>
  )
}
