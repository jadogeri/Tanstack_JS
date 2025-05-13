import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
    <div>Home</div>
    <button onClick={()=>{navigate("/basictable")}}> basic table</button>
    <button onClick={()=>{navigate("/sortingtable")}}> sorting table</button>
    <button onClick={()=>{navigate("/globalfiltertable")}}> global filter table</button>
    <button onClick={()=>{navigate("/columnfiltertable")}}> column filter table</button>
    <button onClick={()=>{navigate("/columnresizabletable")}}> column resizable table</button>
    <button onClick={()=>{navigate("/paginationtable")}}> pagination table</button>

    </>
  )
}

export default Home

