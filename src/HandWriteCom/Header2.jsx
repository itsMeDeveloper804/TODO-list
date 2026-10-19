import React from 'react'

const Header2 = () => {
  return (
    <>
    <div>
        <header className='h-20 w-full bg-purple-900 flex items-center justify-between p-8'> 
            <h1 className='text-2xl font-bold'>TODO App</h1>
            <div className="sections flex gap-2 font-bold">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Contact</h3>
            </div>
        </header>
    </div>
    </>
  )
}

export default Header2