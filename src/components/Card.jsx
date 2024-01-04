import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({data}) {

    let lanings = data.laning

    return (
        <div className="card mb-2 w-full shadow-lg rounded-md">
            <div className="card-body flex items-center">
                <h1 className="card-title text-3xl font-jakarta">
                    <Link to={`/hero/${data.mlid}`} className='my-2'>{data.hero_name}</Link>
                </h1>
                <img src={data.portrait} alt={data.portrait} className='mask mask-squircle w-[100px]'/>
                <p className='font-Raleway'>{data.class}</p>
                <span className='text-sm font-extralight text-gray-500'>Release Date: {data.release_year}</span>
                <div className="card-actions justify-end">
                {lanings.map((i, id)=> (
                    (i.length > 0) ?
                        <div className="badge badge-outline font-Raleway px-4 py-3" key={id}>{i}</div> : <div className="badge badge-outline font-Raleway" key={id}>unknow</div>
                ))}
                </div>
            </div>
        </div>
    )
}