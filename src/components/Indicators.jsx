import React from 'react'

export default function Indicators(data) {
    return (
        <div className='flex flex-col items-center gap-3 my-4 lg:block'>
            <progress className="progress progress-info w-56" value={0} max="100"></progress>
            <progress className="progress progress-info w-56" value="10" max="100"></progress>
            <progress className="progress progress-info w-56" value="40" max="100"></progress>
            <progress className="progress progress-info w-56" value="70" max="100"></progress>
            <progress className="progress progress-info w-56" value="100" max="100"></progress>
        </div>
    )
}
