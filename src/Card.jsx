import React from 'react'

const Card = (props) => {
    console.log(props)
    return (
        <>
        <div className='h-70 inline-block gap-1 w-70 font-bold bg-white text-black p-7 m-10 rounded'>
            <h2 className='p-4 rounded bg-olive-500 mb-2'>Name: {props.name}</h2>
            <h2 className='p-4 rounded bg-olive-500 mb-2'>Age: {props.age}</h2>
            <h2 className='p-4 rounded bg-emerald-700 text-white mb-2'>Profection: {props.prof    }</h2>
        </div>
        </>
    )
}

export default Card