import { useState,useEffect } from "react";
import {getGifs, getUser}  from '../helpers/';


export const useFetchGifs = (category) => {
  const [images, setimages] = useState([]);
  const [users, setusers] = useState([]);

  const [isLoading, setisLoading] = useState(true);


  const getusers = async () => {
    const newnewUser = await getUser(category);
    setusers(newnewUser);
  };
  

  const getImages = async () => {
    const newImagen = await getGifs(category);
    setimages(newImagen);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
    getusers();
  }, []);

  console.log(users);
  return {
    images,
    isLoading,
    
  };
};
