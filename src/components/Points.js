import React from 'react'

const Points =(props) => {
    return (
        <div>
            <div className='scoreSign shadow'>{props.score}</div>
        </div>
    )
}

export default (Points);