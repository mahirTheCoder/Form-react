import React from 'react'
import { RiUserLine } from "react-icons/ri";

const Register = () => {
  return (
    <>
<section id='form' className=' h-screen flex justify-center items-center bg-[#E8EDF2]  '>
<form className="form lg:w-[440px] w-full bg-[#FFF] p-10 rounded-[16px]">
<h2 className='lg:text-24 text-lg font-bold font-popins pb-1 text-primery text-center '>Create an account</h2>
<p className='text-sm font-normal font-popins text-[#7E7E8F] text-center pb-7.5 '>You are welcome!</p>
<div className="name">
  <h2 className='text-sm font-normal font-popins text-primery pb-2'>Your Name</h2>
  <div className="both flex justify-between">
    <div className="name1 px-2 h-12 border border-[#E8EDF2] rounded-[8px] flex justify-center items-center">
      <input type="text" placeholder='First Name' className='text-sm w-full font-popins text-[#C6CBD9]'/>
     <RiUserLine className='text-base text[#9A9AAF]'/>
    </div>
    <div className="name1 px-2 h-12 border border-[#E8EDF2] rounded-[8px] flex justify-center items-center">
      <input type="text" placeholder='First Name' className='text-sm w-full font-popins text-[#C6CBD9]'/>
     <RiUserLine className='text-base text[#9A9AAF]'/>
    </div>
  </div>
</div>
</form>
</section>
    </>
  )
}

export default Register