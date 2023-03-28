import React from 'react'

export const PokemonElement = ({pkName,pkAbilities,pkImage,pkTypes}) => {

  if(pkName==null) return (<h1>No hay pokemon</h1>);

  return (
    <div className='PokemonDiv'>
        <h1>{pkName}</h1>
        <img src={pkImage} alt="noImage"/>
        <ul>
        {  pkAbilities?.map( 
            (ability) =>{ return( <li key={ability}> {ability} </li> ); } 
          ) 
        }
        </ul>
        {
          pkTypes?.map( (type)=>{ return( <h3 key={type}> {type} </h3> ); } )
        }
    </div>
  )

}
