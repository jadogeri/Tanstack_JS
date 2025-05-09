import React from 'react'
import pokemons from "../../pokemon.json"
import GlobalFilterTable from '../../components/GlobalFilterTable'


const GlobalFilterTablePage = () => {
  return (
    <>
        <div>GlobalFilterTablePage</div>
        <GlobalFilterTable data={pokemons}/>
    </>
  )
}

export default GlobalFilterTablePage

