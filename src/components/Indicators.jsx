import React from 'react'

export default function Indicators({data}) {
    return (
        <>
        <div className='flex flex-col items-center gap-3 my-4 lg:block'>
            <p>HP</p>
            <progress className="progress progress-info w-56" value={data.hp} max="10000"></progress>
            <p>Movement speed</p>  
            <progress className="progress progress-info w-56" value={data.movement_speed} max="500"></progress>
            <p>Physical attack</p>
            <progress className="progress progress-info w-56" value={data.physical_attack} max="500"></progress>
            <p>Magic power</p>
            <progress className="progress progress-info w-56" value={data.magic_power} max="500"></progress>
        </div>
        </>
    )
}
