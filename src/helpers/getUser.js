export const  getUser = async (category) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${category}`
    const resp = await fetch(url);
 
    const {abilities} = await resp.json();
    
    const pokemon = abilities.map(poke =>({
        id: poke.ability.name,
        title: poke.ability.url
     }));

    return pokemon;
  };  