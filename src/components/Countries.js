import React from 'react'
import './countries.css'

const Countries = ({name, svg}) => {
  return (
    <div className='countries'>
        <h3>{name}</h3>
     
        <img src={svg} alt="" />
     
        
    </div>
  )
}

export default Countries
