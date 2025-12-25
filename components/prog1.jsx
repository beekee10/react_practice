import React from 'react'

const prog1 = () => {
  const mous=()=>{
    console.log("Mouse Entered the Area")
  }
  const cli2=()=>{
    console.log("Mouse is Double Clicked")
  }
  return (
    <div>
      <div className='bg-slate-900 h-screen overflow-hidden'>
          <button onMouseEnter={mous} onDoubleClick={cli2} className='px-6 py-1 bg-red-500 m-5'>Click</button>
      </div>
    </div>
  )
}

export default prog1
