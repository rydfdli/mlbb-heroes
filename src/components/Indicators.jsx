import React from 'react'

export default function Indicators({data}) {
    return (
        <>
        <div className='flex flex-col items-center gap-3 my-4 lg:block'>
            <p className='text-sm lg:text-base font-light opacity-25'>HP</p>
            <progress className="progress progress-success w-56" value={data.hp} max="10000"></progress>
            <p className='text-sm lg:text-base font-light opacity-25'>Movement speed</p>  
            <progress className="progress progress-info w-56" value={data.movement_speed} max="500"></progress>
            <p className='text-sm lg:text-base font-light opacity-25'>Physical attack</p>
            <progress className="progress progress-warning w-56" value={data.physical_attack} max="500"></progress>
            <p className='text-sm lg:text-base font-light opacity-25'>Magic power</p>
            <progress className="progress progress-secondary w-56" value={data.mana} max="2000"></progress>
        </div>
        </>
    )
}
