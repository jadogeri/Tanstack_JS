import React from 'react'
import pokemons from "../../pokemon.json"
import ColumnFilterTable from '../../components/ColumnFilterTable'

const ColumnFilterTablePage = () => {
  return (
    <>
    <div>ColumnFilterTablePage</div>
    <ColumnFilterTable  data={pokemons}/>
    </>
  )
}

export default ColumnFilterTablePage
