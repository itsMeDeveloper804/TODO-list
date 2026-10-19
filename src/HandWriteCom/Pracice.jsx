import React, { useState } from 'react'

const Pracice = () => {
    const [list, setList] = useState([])
    const [data, setData] = useState('')
    const [edit, setEdit] = useState(null)
    function onChange(val) {
        setData(val.target.value)
        console.log(data);
    }
    function Add() {
        if (data === '') return
        setList([...list, data])
        setData('')
    }
    function deleteFunction(delidx) {
        let newlist = list.filter((item,idx)=> idx !== delidx);
        setList(newlist)
    }
    function onEdit(eidx) {
        setData(list[eidx])
        setEdit(eidx)
    }
    function onUpdate(updateidx) {
        list[edit] = data
        setList([...list])
        setData('')
        setEdit(null)
    }
    return (
        <>
            <input onChange={(e) => { onChange(e) }} value={data} className='bg-white p-2 text-black m-4' placeholder='Enter Tasks' type="text" />
            {edit === null ? (<button onClick={Add} className='bg-red-700 font-bold text-white w-28 h-10 ml-3 rounded active:scale-80'>add</button>):(
            <button onClick={onUpdate} className='bg-red-700 font-bold text-white w-28 h-10 ml-3 rounded active:scale-80'>update</button>)}
            {list.map((item, idx) => {
                return <>
                    <p kay={idx}> {item}</p>
                    <button onClick={()=> deleteFunction(idx)} className='bg-red-700 font-bold text-white w-28 h-10 ml-3 rounded active:scale-80'>delete</button>
                    <button onClick={()=> onEdit(idx)} className='bg-red-700 font-bold text-white w-28 h-10 ml-3 rounded active:scale-80'>Edit</button>
                </>
            })}
        </>
    )
}

export default Pracice