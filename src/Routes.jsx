import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React from 'react'
/**  ROUTES -- AUTHFLOW **/

import NoPage from './pages/NoPage/NoPage.jsx';
import BasicTablePage from "./pages/1_BasicTablePage/BasicTablePage.jsx";


const ProjectRoutes = ({
}) => {

  return (

	<>
	
	<BrowserRouter >
	{/* <NavBar />	 */}

	{/* <AppBar/>	 */}
		<Routes >				
			{/* <Route path="/" element={auth ? <Navigate to="/dashboard" /> : <Home />} index />  */}
			<Route path="/basictable" element={<BasicTablePage />} /> 
			{/* <Route path="/forgotpassword" element={auth ? <Navigate to="/dashboard" /> :<ForgotPassword />} /> 
			<Route path="/login" element={auth ? <Navigate to="/dashboard" /> :<Login />} /> 
			<Route path="/register" element={auth ? <Navigate to="/dashboard" /> :<Register />} /> 
			<Route path="/test" element={<TestPage />} /> 		
			<Route path="/credits" element={<Credits />  } />
			<Route path="/about" element={<About />  } />
			<Route path="/contact" element={<Contact />  } />
			<Route path="/product" element={<ProductDetail />  } />
			<Route path="/test" element={<TestPage />} />  */}
				 

			<Route path="*" element={<NoPage />} />
		</Routes>
	</BrowserRouter>

	</>

  )
}



export default ProjectRoutes




