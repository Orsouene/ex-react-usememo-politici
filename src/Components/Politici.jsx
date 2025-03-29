import React, { useEffect, useState } from 'react'
import Card from './Card';
function Politici() {
    const [PoliticiState, setPoliticiState] = useState([])

    const dataFetch = () => {

        fetch("https://boolean-spec-frontend.vercel.app/freetestapi/users").then(res => res.json()).then(data => {
            setPoliticiState(data)
            console.log(data)
        }
        ).catch(err => console.log(err));

    }
    useEffect(() => {
        dataFetch();
    }, []);




    return (
        <div className='grid sm:grid-cols-3 m-2  md:grid-cols-2 lg:grid-cols-4 gap-2 '>
            {
                PoliticiState.map(politico => {
                    return (
                        <div key={politico.id}>
                            <Card politico={politico} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Politici
