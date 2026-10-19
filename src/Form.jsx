import axios from 'axios'
import React, { useState } from 'react'

const Form = () => {
  const [data, setData] = useState([])
  let getData = async () => {
    let responce = await axios.get('https://picsum.photos/v2/list?page=2&limit=30')
    console.log(responce.data)
    setData(responce.data)
  }
  return (
    <>
      <div className='py-4 px-8'>
        <button onClick={getData} className='bg-blue-600 text-white px-6 py-3 rounded-xl active:scale-95 active:brightness-90 transition-all duration-150 ease-in-out mb-3' > Get data...</button>
        {data.map(function() {
          return <h1 className='bg-emerald-900 text-white font-bold px-5 py-2 rounded mb-4'></h1>
        })}

      </div>
    </>
  )
}

export default Form
