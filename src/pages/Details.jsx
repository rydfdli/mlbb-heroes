import React from 'react'
import { useParams } from 'react-router-dom'
import getHeroDetails from '../api/details'
import Skills from '../components/Skills'
import Indicators from '../components/Indicators'
import { useState } from 'react'

export default function Details() {

    const { id } = useParams()
    const data = getHeroDetails(id)
    const skills = data.skills

    const [dataAttr, setDataAttr] = useState([])
    const attr = data.base_attributes

    if (data.length === 0) {
        return (
            <div className='flex justify-center mt-3.5'>
                <span className="loading loading-ring loading-lg"></span>
            </div>
        )
    } else {
        if (!attr) {
            return (
                <div className='lg:flex block items-center h-screen px-9'>
                    <div className='w-full lg:w-1/3 mb-3 px-2'>
                        <div className='flex flex-col lg:block items-center'>
                            <h1 className='text-3xl font-jakarta font-bold'>{data.hero_name}</h1>
                            <p className='font-extralight text-sm text-slate-500'>{data.class}</p>
                            <img src={data.portrait} alt={data.hero_name} className='my-2 mask mask-squircle max-w-[120px]' />
                            {data.laning.map((i, id) => (
                                (i.length > 0) ?
                                    <div className="badge badge-outline font-Raleway px-4 py-3 mr-2 my-3 mb-2 hidden lg:inline-flex" key={id}>{i}</div> : <div className="badge badge-outline font-Raleway" key={id}>unknow</div>
                            ))}

                            <div role="alert" className="alert alert-error my-5 bg-transparent border-gray-300 text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <span>No Data Found.😔</span>
                            </div>
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
        return (
            <div className='lg:flex block items-center h-screen px-9'>
                <div className='w-full lg:w-1/3 mb-3 px-2'>
                    <div className='flex flex-col lg:block items-center'>
                        <h1 className='text-3xl font-jakarta font-bold'>{data.hero_name}</h1>
                        <p className='font-extralight text-sm text-slate-500'>{data.class}</p>
                        <img src={data.portrait} alt={data.hero_name} className='my-2 mask mask-squircle' />
                        {data.laning.map((i, id) => (
                            (i.length > 0) ?
                                <div className="badge badge-outline font-Raleway px-4 py-3 mr-2 my-3 mb-2 hidden lg:inline-flex" key={id}>{i}</div> : <div className="badge badge-outline font-Raleway" key={id}>unknow</div>
                        ))}
                        {
                            attr.map((i, id) => (
                                <Indicators key={id} data={i} />
                            ))
                        }
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
