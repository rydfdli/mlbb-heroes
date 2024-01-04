import React from 'react'
import { useParams } from 'react-router-dom'
import getHeroDetails from '../api/details'
import Skills from '../components/Skills'
import Indicators from '../components/Indicators'

export default function Details() {

    const { id } = useParams()
    const data = getHeroDetails(id)
    const skills = data.skills

    if (data.length === 0) {
        return (
            <h1>Loading...</h1>
        )
    } else {
        return (
            <div className='lg:flex block items-center h-screen px-9'>
                <div className='w-full lg:w-1/3 mb-3 px-2'>
                    <div className='flex flex-col lg:block items-center'>
                        <h1 className='text-3xl font-jakarta font-bold'>{data.hero_name}</h1>
                        <p className='font-extralight text-sm text-slate-500'>{data.class}</p>
                        <img src={data.portrait} alt={data.hero_name} className='my-2' />
                        {data.laning.map((i, id) => (
                            (i.length > 0) ?
                                <div className="badge badge-outline font-Raleway px-4 py-3 mr-2 mb-2" key={id}>{i}</div> : <div className="badge badge-outline font-Raleway" key={id}>unknow</div>
                        ))}
                        <Indicators />
                    </div>
                </div>
                <div className='w-full lg:w-2/3 py-3'>
                    {
                        skills.map((i, id) => (
                            <Skills key={id} data={i} />
                        ))
                    }
                </div>
            </div>
        )
    }
}
