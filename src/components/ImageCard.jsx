import React from 'react'

const ImageCard = ({
    src,
    title,
    description,
    route
}) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
    <img src={src} alt="John" style={{ width: "100%" }} />
    <h3>{title}</h3>
    {/* <p className="w3-opacity">CEO &amp; Founder</p> */}
    <p>
      {description}
    </p>
    <p>
      <button className="w3-button w3-light-grey w3-block" onClick={()=>{ window.open(route, "_blank")}}>View</button>
    </p>
  </div>
  )
}

export default ImageCard