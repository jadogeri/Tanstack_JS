import React from 'react'
import pokemons from "../../pokemon.json"
import SortingTable from '../../components/SortingTable'
const BasicTablePage = () => {
  return (
    <>
    <div>BasicTable</div>
    <SortingTable data={pokemons}/>    
    </>
  )
}

export default BasicTablePage