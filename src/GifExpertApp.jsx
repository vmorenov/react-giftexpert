import {useState} from 'react';
import { AddCategory,GifGrid } from './components/';


export const GifExpertApp = () => {
  /*usestate*/

  const [categories, setCategories] = useState([]);

  const  onAddCategory = (newCategory) =>{
    
    //const upperCaseWords = categories.map(word => categories.toUpperCase());


    if( categories.indexOf(newCategory) != -1) return;
    setCategories(cat => [newCategory.toLowerCase(),...cat])
    //console.log(newCategory);
  }
  return (
    <>
        {/*Titulo*/}
        <h1>GifExpertApp</h1>    

        {/*Input*/}
        <AddCategory 
            //setCategories={ setCategories }
            onNewCategory ={event => onAddCategory(event)}
        />

        {/*Listado de Gif */}
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        
        <ol>
            { categories.map(( category ) =>( //funcion map me permite recorrer el arreglo category sin necesidad de un loop
                 
                <GifGrid 
                  key = { category } //le estoy pasando al componente GifGrid la variable key y category
                  category = { category }
                />
              )) 
            }
        </ol>
        {/*Gif Item */}
    </>
  )
}
