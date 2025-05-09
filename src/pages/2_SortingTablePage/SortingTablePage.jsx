import React from 'react'
import pokemons from "../../pokemon.json"
import SortingTable from '../../components/SortingTable'
const SortingTablePage = () => {
  return (
    <>
    <div>Sorting Table Page With Column Grouping</div>
    <SortingTable data={pokemons}/>    
    </>
  )
}

export default SortingTablePage