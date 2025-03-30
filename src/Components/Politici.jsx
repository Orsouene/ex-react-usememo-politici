import React, { useEffect, useMemo, useState } from 'react'
import Card from './Card';
function Politici() {
    const [PoliticiState, setPoliticiState] = useState([])
    const [filtro, setFiltro] = useState("")
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

    function handleInput(e) {
        const value = e.target.value
        setFiltro(value)
    }

    const filtredArray = useMemo(() => {
        if (!filtro) {
            return PoliticiState
        }
        else {
            return PoliticiState.filter(politico => { return politico.name.toLowerCase().includes(filtro.toLowerCase()) || politico.hobbies.find((el) => el.toLowerCase().includes(filtro.toLowerCase())) }

            )
        }

    }, [PoliticiState, filtro])




    return (
        <>
            <input type="text" id="politico" value={filtro} onChange={(e) => handleInput(e)} className='bg-red-500' />
            <div className='grid sm:grid-cols-3 m-2  md:grid-cols-2 lg:grid-cols-4 gap-2 '>
                {
                    filtredArray.map(politico => {
                        return (
                            <div key={politico.id}>
                                <Card politico={politico} />
                            </div>
                        )
                    })
                }
            </div>
        </>

    )
}

export default Politici
