import React from 'react'

function Card({ politico }) {
    return (
        <div className='bg-stone-200 mb-3 text-stone-700 rounded-xl max-w-64 p-2 m-auto h-56'>
            <h3><span className='text-xl text-black'>Nome :</span>{politico.name}</h3>
            {/* <div> <span className='text-xl text-black'>Immagine :</span>
                <img src="http://someImage.png" alt="" />
            </div> */}

            <p> <span className='text-xl text-black'>Posizione :</span>{politico.occupation}</p>
            <p > <span className='text-xl text-black'>Breve biografia  :</span>my name is {politico.name} and my hobbies are {politico.hobbies[0]} and {politico.hobbies[1]} </p>
        </div>
    )
}

export default Card
