import React, { useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const ResidentsCards = ({url}) => {

    const [resident, getResident] = useFetch()

    useEffect(() => {
        getResident(url)
    }, [])
    
    console.log(resident)

  return (
    <article className='content-resident'>
      <figure>
        <img src={resident?.image} alt="" className='img-resident'/>
        <figcaption>
          <div className={`circle ${resident?.status}`} ></div>
            <li>{resident?.status}</li>
        </figcaption>
      </figure>
      <h3 className='title-name'>{resident?.name}</h3>
        <ul className='list-span'>
            <li><span className='span'>Specie: </span> <br /><span className='span-resident'>{resident?.species}</span></li>
            <li><span className='span'>Origin: </span> <br /><span className='span-resident'>{resident?.origin.name}</span></li>
            <li><span className='span'>Eppisodes where appear: </span> <br /><span className='span-resident'>{resident?.episode.length}</span></li>
        </ul> 
    </article>
  )
}

export default ResidentsCards