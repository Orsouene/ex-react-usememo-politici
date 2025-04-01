import React, { useEffect, useMemo, useState } from 'react'
import Card from './Card';
function Politici() {
    const [PoliticiState, setPoliticiState] = useState([])
    const [filtro, setFiltro] = useState("")
    const [filtroPosition, setFiltroPosition] = useState("")
    //*fetch degli politici 
    useEffect(() => {
        console.log(PoliticiState);
        fetch("https://boolean-spec-frontend.vercel.app/freetestapi/politicians").then(res => res.json()).then(data => {
            setPoliticiState(data)
            console.log(PoliticiState)
        }
        ).catch(err => console.log(err));
    }, []);

    //*HandleInput
    function handleInput(e) {
        const value = e.target.value
        setFiltro(value)
    }
    //* filtrare larray di Politici dipende la loro positions
    const filtredPosition = useMemo(() => {
        const arrayPosizioneFiltrato = []
        // console.log(PoliticiState)
        PoliticiState.forEach(el => {
            if (!arrayPosizioneFiltrato.includes(el.position)) {
                arrayPosizioneFiltrato.push(el.position)
            }

        })

        return arrayPosizioneFiltrato
    }, [PoliticiState])
    console.log(filtroPosition)

    //*Filtrare l'array degli politici per ottnere la ricerca voluta 
    const filtredArray = useMemo(() => {

        return PoliticiState.filter(politico => {
            return (politico.name.toLowerCase().includes(filtro.toLowerCase()) ||
                politico.biography.toLowerCase().includes(filtro.toLowerCase())) &&
                filtroPosition.toLowerCase() === politico.position.toLowerCase()

        })
    }, [PoliticiState, filtro, filtroPosition]);
    return (
        <>  <div className='flex justify-center p-2 gap-5' >
            <select
                className='text-white w-48 '
                value={filtroPosition}
                onChange={e => setFiltroPosition(e.target.value)}>
                <option value="" className='text-black'>Select position</option>
                {
                    filtredPosition.map((el, index) => (
                        <option key={index} value={el} className='text-black ' >{el}</option>
                    ))
                }

            </select>
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
