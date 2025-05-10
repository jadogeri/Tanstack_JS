import React from 'react'
import pokemons from "../../pokemon.json"
import PaginationTable from '../../components/PaginationTable'
const PaginationTablePage = () => {
  return (
    <>
    <div>Pagination Table</div>
    <PaginationTable data={pokemons}/>    
    </>
  )
}

export default PaginationTablePage