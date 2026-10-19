
import React, { useState } from 'react'
import { Trash2 } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'

const TODO = () => {
    const [data, setData] = useState('')
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [completed, setCompleted] = useState(second)

    let onchange = (e) => setData(e.target.value)

    let submit = () => {
        if (data.trim() === '') return
        setList([...list, data])
        setData('')
    }

    let deleteFunction = (deleteidx) => {
        setList(list.filter((item, idx) => idx !== deleteidx))
    }

    let onEdit = (editIdx) => {
        setData(list[editIdx])
        setEditIndex(editIdx)
    }

    let handleUpdate = () => {
        if (data.trim() === '') return
        list[editIndex] = data
        setList([...list])
        setData('')
        setEditIndex(null)
    }

    let handleTick = (e) => {
        console.log(e.target)
    }

    return (
        <section className="mx-auto mt-6 w-full max-w-[520px] px-3 sm:px-4">
            <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-lg sm:p-6">
                <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">TODO APP</h1>
                <h3 className="mt-2 text-sm font-medium text-slate-500 sm:text-base">Manage your daily tasks...</h3>
                <form className="mt-5 flex w-full flex-col gap-3 sm:flex-row">
                    <input value={data} type="text" placeholder="Enter your task..." className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100" />

                    <button type="submit" className={`w-full rounded-xl px-6 py-3 font-semibold text-white shadow-sm transition-all duration-200 active:scale-95 sm:w-auto ${editIndex === null ? 'bg-violet-600 hover:bg-violet-700' : 'bg-emerald-600 hover:bg-emerald-700'}`}>
                        {editIndex === null ? 'Add' : 'Update'}
                    </button>
                </form>
            </div>

            {list.map((item, idx) => (
                <div key={idx} completed={completed} className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-md transition-all duration-200 hover:shadow-lg sm:p-4">
                    <input type="checkbox" onChange={(e)=>handleTick(e)} className="h-5 w-5 shrink-0 cursor-pointer accent-violet-600" aria-label={`Complete task: ${item}`} />

                    <div className="min-w-0 flex-1 break-words whitespace-normal text-base font-medium text-slate-800 sm:text-lg">{item}</div>

                    <button type="button" onClick={() => onEdit(idx)} aria-label={`Edit task: ${item}`} title="Edit task" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition-all duration-200 hover:bg-violet-100 hover:text-violet-700 active:scale-90">
                        <FontAwesomeIcon icon={faPen} className="text-lg" />
                    </button>

                    <button type="button" onClick={() => deleteFunction(idx)} aria-label={`Delete task: ${item}`} title="Delete task" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-red-500 transition-all duration-200 hover:bg-red-50 hover:text-red-700 active:scale-90">
                        <Trash2 size={20} strokeWidth={2.5} />
                    </button>
                </div>
            ))}
        </section>
    )
}

export default TODO
