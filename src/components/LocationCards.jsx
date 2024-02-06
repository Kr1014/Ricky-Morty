import React from 'react'

const LocationCards = ({infoLocation, character}) => {

  return (
    <div className='container-all-information'>
      <div className='information'>
          <h1>{infoLocation?.name}</h1>
          <ul className='list-info'>
              <li className='info-item'><span>Type:</span>{infoLocation?.type}</li>
              <li className='info-item'><span>Dimension:</span>{infoLocation?.dimension}</li>
              <li className='info-item'><span>Population: </span>{infoLocation?.residents.length}</li>
          </ul>
      </div>
    </div>
  )
}

export default LocationCards