
import React, { memo } from 'react'

const Card = memo(({ politico }) => {
    // console.log("Card")
    return (
        <div className='bg-stone-200 mb-3 text-stone-700 rounded-xl max-w-64 p-2 m-auto h-full border-1 hover:border-amber-500'>
            <h3 ><span className='text-xl text-black' >Nome :</span>{politico.name}</h3>
            <div className='flex gap-16'> <span className='text-xl text-black'>Immagine :</span>
                <img src={politico.image} className='h-20' alt="" />
            </div>

            <p> <span className='text-xl text-black'>Posizione :</span>{politico.position}</p>
            <p > <span className='text-xl text-black'> Breve biografia  : </span> {politico.biography} </p>
        </div>
    )

})


export default Card
