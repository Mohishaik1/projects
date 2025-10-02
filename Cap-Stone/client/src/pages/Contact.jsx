import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gray-800 h-120 flex flex-col justify-center items-center'>
        <div><h1 className='text-amber-400 font-extrabold m-4'>Contact Our Team</h1></div>
        <form className='flex flex-col justify-center items-center bg-violet-400 h-80 w-100 rounded-2xl'>
            <label className='m-3 font-bold' htmlFor='fName'>Enter Your Full Name</label>
            <input className='m-1 box-border bg-amber-50' type='text' name='fName' required/>

            <label className='m-3 font-bold' htmlFor="phone">Enter Your Contact</label>
            <input className='m-1 box-border bg-amber-50' type="tel" name='phone'required/>
            <button className='m-2 box-border border-2 rounded bg-blue-600 w-30 font-medium hover:bg-green-400 text-black'>SUBMIT</button>
        </form>

    </div>
  )
}

export default Contact