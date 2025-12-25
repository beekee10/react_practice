import React from 'react'

const prog2 = () => {
    function fun(val){
      console.log(val);
    }
  
  return (
    <div className='bg-black h-screen overflow-hidden'>
      <input onChange={function(elm){
        fun(elm.target.value);
      }} className='bg-red-400 m-10 text-white' type="text" placeholder='' />
    </div>
  )
}

export default prog2
