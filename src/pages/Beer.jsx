import React from 'react'
import { useParams } from 'react-router-dom'


const Beer = ({beers}) => {

     const {id} = useParams()
console.log(id)
    const foundBeer = beers.find((one) => {
        return one._id === id
    })

  return (
    <div className="center">
       
    {foundBeer.name}
    <img src={foundBeer.image_url} style={{"with" : "auto", "height" : "200px"}}  alt="Random beer" />
    {foundBeer.attenuation_level}
    {foundBeer.description}

    

    </div>
  )
}

export default Beer