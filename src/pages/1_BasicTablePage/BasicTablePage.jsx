import React from 'react'
import pokemons from "../../pokemon.json"
import BasicTable from '../../components/BasicTable'
const BasicTablePage = () => {
  return (
    <>
    <div>BasicTable</div>
    <BasicTable data={pokemons}/>    
    </>
  )
}

export default BasicTablePage