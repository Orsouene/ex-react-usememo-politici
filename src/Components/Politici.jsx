import React, { useEffect, useMemo, useState } from 'react'
import Card from './Card';
function Politici() {
    const [PoliticiState, setPoliticiState] = useState([])
    const [filtro, setFiltro] = useState("")

    useEffect(() => {
        fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians").then(res => res.json()).then(data => {
            setPoliticiState(data)

        }
        ).catch(err => console.log(err));
    }, []);

    function handleInput(e) {
        const value = e.target.value
        setFiltro(value)
    }
    // console.log(PoliticiState)
    const filtredArray = useMemo(() => {
        if (!filtro) {
            return PoliticiState;
        }

        return PoliticiState.filter(politico =>
            politico.name.toLowerCase().includes(filtro.toLowerCase()) ||
            politico.biography.toLowerCase().includes(filtro.toLowerCase())
        );
    }, [PoliticiState, filtro]); // solo filtro è una dipendenza





    return (
        <>  <div className='flex justify-center p-2' >
            <input type="text" id="politico" placeholder="Cerca" value={filtro} onChange={(e) => handleInput(e)} className='bg-stone-500  text-white border  hover:border-amber-500 p-2' />
        </div>

            <div className='grid sm:grid-cols-3 m-2  md:grid-cols-2 lg:grid-cols-4 gap-2 '>
                {
                    filtredArray.map(politico => {
                        return (
                            <div key={politico.id} >
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
