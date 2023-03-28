import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getPokemon } from './helper/getPokemon';
import { PokemonElement } from './PokemonElement';

export const FetchApp = () => {

  const [pokemon, setPokemon] = useState("pikachu");
  const [pokObj, setPokemonObj] = useState({});


  const getPokemonFromAPI =  async()=>{
    console.log("call to API");
    const obj = await getPokemon(pokemon);
    setPokemonObj(obj);
  }

  // useEffect(()=>{}) se ejecuta cada vez que se renderee el componente
  // useEffect(()=>{}, []) se ejecuta solo la primera vez que se renderea
  // useEffect(()=>{}, [pokemon]) se ejecuta cada vez que pokemon cambie

  useEffect( ()=>{
    getPokemonFromAPI();
  }, []);

  const onSubmitPokemon = (event) => {
    event.preventDefault(); 
    getPokemonFromAPI();
  }

  const HandleInputValue = ({target}) => 
  {
    setPokemon(target.value);
  }

  return (
    <>
      <h3>GetPokemonsApp</h3>
      <form onSubmit={onSubmitPokemon}>      
      <fieldset>
        <legend>New Pokemon</legend>
        Nombre: <input type="text" value={pokemon} 
        onChange={ HandleInputValue }/>      
        <br/>
        <button type="submit"> Buscar </button>
        </fieldset>
      </form>
      {
        <PokemonElement 
        pkName={pokObj.pkname}
        pkAbilities={pokObj.pkAbilities}
        pkImage={pokObj.pkSprite}
        pkTypes={pokObj.pktypes}/>
      }
    </>
  )
}
