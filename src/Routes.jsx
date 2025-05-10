import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
/**  ROUTES -- AUTHFLOW **/

import NoPage from './pages/NoPage/NoPage.jsx';
import BasicTablePage from "./pages/1_BasicTablePage/BasicTablePage.jsx";
import SortingTablePage from "./pages/2_SortingTablePage/SortingTablePage.jsx"
import GlobalFilterTablePage from "./pages/3_GlobalFilterTablePage/GlobalFilterTablePage.jsx";
import ColumnFilterTablePage from "./pages/4_ColumnFilterTablePage/ColumnFilterTablePage.jsx";
import PaginationTablePage from "./pages/5_PaginationTablePage/PaginationTablePage.jsx";
import Home from "./pages/Hone/Home.jsx";


const ProjectRoutes = ({
}) => {

  return (

	<>
	
	<BrowserRouter >
	{/* <NavBar />	 */}

	{/* <AppBar/>	 */}
		<Routes >				
			<Route path="/" element={<Home />} index /> 
			<Route path="/basictable" element={<BasicTablePage />} /> 
			<Route path="/sortingtable" element={<SortingTablePage />} /> 
			<Route path="/globalfiltertable" element={<GlobalFilterTablePage />} /> 
			<Route path="/columnfiltertable" element={<ColumnFilterTablePage />} /> 
			<Route path="/paginationtable" element={<PaginationTablePage />} /> 

			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>

	</>

  )
}



export default ProjectRoutes




