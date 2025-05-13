import React from 'react'
import pokemons from "../../pokemon.json"
import ColumnResizableTable from '../../components/ColumnResizableTable'
const ColumnResizableTablePage = () => {
  return (
    <>
    <div>ColumnResizableTable</div>
    <ColumnResizableTable data={pokemons}/>    
    </>
  )
}

export default ColumnResizableTablePage