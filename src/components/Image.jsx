import React from 'react'

const Image = ({
    src,
}) => {
  return (
    <img src={src} alt="image" style={{width:20,height:1}}/>
  )
}

export default Image