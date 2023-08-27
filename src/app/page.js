"use client"; // This is a client component 👈🏽
import React ,{ useState , useEffect} from 'react'
import PokemonList from './PokemonList'
import axios from 'axios';
import Pokenmon from './pokenmon';
export default function Home() {


  const [pokemon , setPokemon] = useState(["Aman", "Atul"]);
  const [nextPage , setnextPage] = useState();
  const [prevPage , setprevPage] = useState();
  const [currentPageUrl , setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading , setloading] = useState(true)


  function gotoNextPage(){
    setCurrentPageUrl(nextPage);
  }
  function gotoPrevPage(){
    setCurrentPageUrl(prevPage);
  }

  useEffect(() => {
    setloading(true)
    axios.get(currentPageUrl).then((res)=> {
      setloading(false)
      setnextPage(res.data.next)
      setprevPage(res.data.previous)
      setPokemon(res.data.results.map(a=> a.name))
    })

    return () =>{

    }
  } , [currentPageUrl])
 

  if(loading) return "Loading ...."
  return (
    <main >
      <PokemonList pokemon={pokemon}/>
      <Pokenmon gotoNextPage={nextPage ? gotoNextPage : null} gotoPrevPage={prevPage ? gotoPrevPage : null}/>
    </main>
  )
}
