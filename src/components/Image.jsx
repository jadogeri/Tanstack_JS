import React from 'react'

const Image = ({
    src,
}) => {
  return (
    <img src={src} alt="image" width={200} height={200}/>
  )
}

export default Image