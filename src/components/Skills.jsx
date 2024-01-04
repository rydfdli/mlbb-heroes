import React from 'react'

export default function ({ data }) {
    return (
        <div className="collapse collapse-arrow bg-base-200 mb-2">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
                {data.skill_name}
            </div>
            <div className="collapse-content">
                <span>
                    Cooldown :{data.cooldown !== "null" ? ` ${data.cooldown} s` : ""}
                </span>
                <p className='my-2 text-sm font-light'>
                    Type : {data.type}
                </p>
                <p>
                    {data.description}
                </p>
            </div>
        </div>
    )
}
