import { useState } from 'react';

export const AddCategory = ({/*setCategories*/onNewCategory}) => { //se recibe funcion por props  
  const [inputValue, setinputValue] = useState('Dragon Ball');

  const inputChange = (event)=>{ //en un imput tenemos que renderizar los cambios en el componente
    setinputValue(event.target.value);
    // console.log(event.target.value);
  }

  const subimForm = (e)=>{
     e.preventDefault();
     if (inputValue.trim().length > 0) {
        //  setCategories( categories => [ ...categories,inputValue ]);
         onNewCategory(inputValue.trim());
         setinputValue('');//Limpiar imput despues de ejecutar la funcion correspondiente  
     }
     //callback para categorias, desestructura c/u categoria y se agrega nuevo valor
  }
  
  return (
    <>
      <form onSubmit={subimForm}>
        <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={ inputChange } />
      </form>
    </>
  );

};
