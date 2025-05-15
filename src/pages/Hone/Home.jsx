import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../layouts/Footer';
import ImageCard from '../../components/ImageCard';

const Home = () => {
    const navigate = useNavigate();
  return (
    <>
  <>
  <title>Tanstack Template Javascript</title>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/5/w3.css" />
  {/* Navbar (sit on top) */}
  <div className="w3-top">
    <div className="w3-bar w3-white w3-wide w3-padding w3-card">
      <a href="#home" className="w3-bar-item w3-button">
        <b>BR</b> Architects
      </a>
      {/* Float links to the right. Hide them on small screens */}
      <div className="w3-right w3-hide-small">
        <a href="#projects" className="w3-bar-item w3-button">
          Projects
        </a>
        <a href="#about" className="w3-bar-item w3-button">
          About
        </a>
        <a href="#contact" className="w3-bar-item w3-button">
          Contact
        </a>
      </div>
    </div>
  </div>
  {/* Header */}
  <header
    className="w3-display-container w3-content w3-wide"
    style={{ maxWidth: 1500 }}
    id="home"
  >


  </header>
  {/* Page content */}
  <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
    {/* Project Section */}
    <div className="w3-container w3-padding-32" id="projects">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        Tanstack React Table Templates
      </h3>
    </div>

    {/* About Section */}
    <div className="w3-container w3-padding-32" id="about">
      <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">
        About
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt
        in culpa qui officia deserunt mollit anim id est laborum consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <div className="w3-row-padding ">
      <ImageCard
        src={require("../../assets/images/basictable.png")}
        title={"Basic Table"} route="/Tanstack_React_Table_JS/basictable"
      />
      <ImageCard
        src={require("../../assets/images/sortingtable.png")}
        title={"Sorting Table"} route="/Tanstack_React_Table_JS/sortingtable"
      />
      <ImageCard
        src={require("../../assets/images/globalfiltertable.png")}
        title={"Global Filter Table"} route="/Tanstack_React_Table_JS/globalfiltertable"
      />
      <ImageCard
        src={require("../../assets/images/columnfiltertable.png")}
        title={"Column Filter Table"} route="/Tanstack_React_Table_JS/columnfiltertable"
      />

    </div>
    <div className="w3-row-padding ">
      <ImageCard
        src={require("../../assets/images/paginationtable.png")}
        title={"Pagination Table"} route="/Tanstack_React_Table_JS/paginationtable"
      />
      <ImageCard
        src={require("../../assets/images/columnresizabletable.png")}
        title={"Column Resizable Table"} route="/Tanstack_React_Table_JS/columnresizabletable"
      />


    </div>
 
  </div>
  {/* Footer */}
  <Footer/>
 
</>

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

