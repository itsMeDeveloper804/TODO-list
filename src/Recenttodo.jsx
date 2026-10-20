import React, { useState } from 'react'
import { PlusCircle, Trash2, Pencil, Save, AlignCenter } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { Check } from "lucide-react";

const Recenttodo = () => {
    const [todo, setTodo] = useState('');
    const [list, setList] = useState([])
    const [editIndex, setEditIndex] = useState(null)
    const [completed, setCompleted] = useState(false)
    let onchange = (e) => {
        setTodo(e.target.value)
    };
    let handleAdd = () => {
        if (todo.trim() === '') return setTodo('')
        setList([...list, {text:todo, completed: false}])
        setTodo('')
    }
    let deleteFunction = (deleteidx) => {
        let newlist = [...list];
        newlist.splice(deleteidx,1)
        setList(newlist)
        if(deleteidx === editIndex){
            setTodo('')
            setEditIndex(null)
        }else if( deleteidx < editIndex){
            setEditIndex(editIndex -1)
        }
    }
    let onEdit = (editIdx) => {
        setTodo(list[editIdx].text)
        setEditIndex(editIdx)
    }
    let handleUpdate = () => {
        if(todo.trim()=== '') return;
        let newlist = [...list]
        newlist[editIndex].text = todo;
        setList(newlist)
        setTodo('')
        setEditIndex(null)
    }
    let handleCheck = (idx)=>{
        console.log(idx)
        let newlist = [...list];
        newlist[idx].completed = !newlist[idx].completed;
        setList(newlist)
    }
    let empty = () => {
        if (list.length === 0)
            return <p className='ml-10 mt-4 w-70 font-bold text-xl rounded-2xl shadow-2xl p-4'>List is empty...</p>
    }
    return (
        <div className='md:flex md:justify-center mt-6'>
            <section className=' mx-auto mt-6 w-full max-w-[520px] px-3 sm:px-4'>
                <div className="heading shadow-2xl p-3 h-55 max-w-[520px] rounded-2xl ">
                    <div className="flex gap-3">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600">
                            <Check size={24} strokeWidth={3.5} className="text-white" />
                        </div>
                        <h1 className='text-3xl font-extrabold'>TODO APP</h1>
                    </div>
                    <h3 className='text-gray-500 font-bold mt-2'>Manage Your Daily Tasks... </h3>
                    <div className="flex">
                        <input value={todo} onChange={(e) => { onchange(e) }} type="text" className="mt-3 min-w-0 flex-1 rounded-xl border border-slate-200  bg-slate-50 px-4 py-3 text-base font-medium text-slate-800 outline-none transition-all placeholder:text-slate-400 focus:border-violet-500 focus:bg-white focus:ring-4 focus:ring-violet-100"  placeholder='+ Enter your tasks' />
                        {editIndex === null ? (<button onClick={() => { handleAdd() }} className='bg-violet-600 mt-4 font-bold text-white w-20 h-10 ml-3 rounded-xl active:transition-all active:scale-90 active:bg-violet-800'>Add</button>) :
                            (<button onClick={() => { handleUpdate() }} className='bg-green-700 mt-4 font-bold text-white w-23 h-10 ml-3 rounded-xl active:transition-all active:scale-90 active:bg-violet-800'>Update</button>)
                        }
                    </div>
                </div>
                {/* for values */}
                <h2 className='mt-7 ml-4 text-2xl font-extrabold text-violet-900'>TODOS</h2>
                {empty()}
                {list.map((item, idx) => {
                    return <div className='mt-4 flex w-full items-center gap-3 rounded-2xl border mb-7 border-slate-100 bg-white p-3 shadow-md transition-all duration-200 hover:shadow-lg sm:p-4 '>
                        <input type="checkbox" checked={item.completed} onChange={()=> handleCheck(idx)} className=' mt-4 h-7 w-7  ' />
                        <div className={`w-120 rounded mt-3 text-left wrap-break-word whitespace-normal ${item.completed ? 'line-through text-slate-400' : 'text-slate-900'}`} key={idx} >{item.text} </div>
                        <button onClick={() => onEdit(idx)} className='mt-4 font-bold text-white w-18 h-10 rounded-xl active:transition-all active:scale-90 active:bg-violet-800'><FontAwesomeIcon icon={faPen} className="text-slate-500 text-xl cursor-pointer" /></button>
                        <button onClick={() => deleteFunction(idx)} className=' mt-4 font-bold text-white w-18 h-10 rounded-xl active:transition-all active:scale-90 active:bg-violet-800'> <Trash2 className="text-red-600 cursor-pointer" size={20} /></button>
                    </div>
                })}
            </section>
        </ div>

    )
}

export default Recenttodo
