import { BrowserRouter,HashRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
/**  ROUTES -- AUTHFLOW **/

import NoPage from './pages/NoPage/NoPage.jsx';
import BasicTablePage from "./pages/1_BasicTablePage/BasicTablePage.jsx";
import SortingTablePage from "./pages/2_SortingTablePage/SortingTablePage.jsx"
import GlobalFilterTablePage from "./pages/3_GlobalFilterTablePage/GlobalFilterTablePage.jsx";
import ColumnFilterTablePage from "./pages/4_ColumnFilterTablePage/ColumnFilterTablePage.jsx";
import ColumnResizableTablePage from "./pages/6_ColumnResizableTablePage/ColumnResizableTablePage.jsx";

import PaginationTablePage from "./pages/5_PaginationTablePage/PaginationTablePage.jsx";
import Index from "./pages/Hone/Home.jsx";

//change browserrouter to HashRouter before 
// deploying to github pages i.e change before npm run  deploy

const ProjectRoutes = ({
}) => {

  return (

	<>
	
	<BrowserRouter basename={"/Tanstack_React_Table_JS"}>
	{/* <NavBar />	 */}

	{/* <AppBar/>	 */}
		<Routes >				
			<Route path="/" element={<Index />} index /> 
			<Route path="/basictable" element={<BasicTablePage />} /> 
			<Route path="/sortingtable" element={<SortingTablePage />} /> 
			<Route path="/globalfiltertable" element={<GlobalFilterTablePage />} /> 
			<Route path="/columnfiltertable" element={<ColumnFilterTablePage />} /> 
			<Route path="/paginationtable" element={<PaginationTablePage />} /> 
			<Route path="/columnresizabletable" element={<ColumnResizableTablePage />} /> 


			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>

	</>

  )
}



export default ProjectRoutes




