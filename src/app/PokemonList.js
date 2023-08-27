import React from 'react'
export default function PokemonList({pokemon}) {

  return (
   <>
    <h3>Pokemon List</h3>
     <div>
        {
            pokemon.map(p=> (
                <div key={p}>{p}</div>
            ))
        }
    </div>
   </>
  )
}
