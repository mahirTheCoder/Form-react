import React, { useState } from 'react'
import { RiUserLine } from "react-icons/ri";
import { IoMailOpenOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa6";
import { IoEyeOffOutline } from "react-icons/io5";

const Register = () => {
  //----------pass show hide ------------ 
  const [showItem, setShowItem] = useState(false);

  // ----------name error ----------
  const [name , setname ] = useState ('')
  const [latname , setlastname ] = useState ('')
  const [latnameError , setlastnameError ] = useState ('border-[#E8EDF2]')
  const [nameerror , setNameError] = useState ('border-[#E8EDF2]')
  // -----------email error and regex --------
  

  const HandleSubmit = (alu) =>{
    alu.preventDefault()

    if(!name)  {setNameError('border-red-500')}
      if(!latname) { setlastnameError('border-red-500')}
      
   
  }


  console.log(nameerror)
  return (
    <section id='form' className='h-screen flex justify-center items-center bg-[#E8EDF2] dark:bg-[#313442]'>

      <form onSubmit={HandleSubmit} className="form lg:w-[440px] w-full bg-[#FFF] dark:bg-[#1F2128] p-10 rounded-[16px]">

        <h2 className='lg:text-24 text-lg font-bold font-popins pb-1 text-primery text-center dark:text-[#F1F1F1]'>Create an account</h2>
        <p className='text-sm font-normal font-popins text-[#7E7E8F] text-center dark:text-[#8B8B93] pb-7.5'>You are welcome!</p>



        {/* ------------name part---------- */}
        <div className="name">
          <h2 className='text-sm font-normal font-popins text-primery dark:text-[#F1F1F1] pb-2'>Your Name</h2>
        
          <div className="both flex justify-between">
            <div className={`name1 w-[170px] px-2 h-12 border ${nameerror} dark:border-[#313442] rounded-[8px] flex justify-center items-center `}>
              <input onChange={(e)=>{setname(e.target.value), setNameError(' border-[#E8EDF2]') }} type="text" placeholder='First Name' className='text-sm w-full font-popins text-[#C6CBD9] dark:text-[#2C2C35] border-none outline-none'/>
              <RiUserLine className='text-base text[#9A9AAF] dark:text-[#64646F]'/>
            </div>
            <div className={`name1 w-[170px] px-2 h-12 border ${latnameError}  dark:border-[#313442] rounded-[8px] flex justify-center items-center`}>
              <input onChange={(e)=>{setlastname(e.target.value), setlastnameError('border-[#E8EDF2]')}} type="text" placeholder='Last Name' className='text-sm w-full font-popins text-[#C6CBD9] dark:text-[#2C2C35] border-none outline-none'/>
              <RiUserLine className='text-base text[#9A9AAF] dark:text-[#64646F]'/>
            </div>
          </div>
        </div>

        {/* ------------mail part---------- */}
        <div className="mail">
          <h2 className='text-sm font-normal font-popins text-primery dark:text-[#F1F1F1] pb-2 mt-5'>E-mail</h2>
          <div className="both flex justify-between">
            <div className="name1 w-full px-2 h-12 border border-[#E8EDF2] dark:border-[#313442] rounded-[8px] flex justify-center items-center">
              <input type="email" placeholder='Email' className='text-sm w-full font-popins text-[#C6CBD9] dark:text-[#2C2C35] border-none outline-none'/>
              <IoMailOpenOutline className='text-base text[#9A9AAF] dark:text-[#64646F]'/>
            </div>
          </div>
        </div>

        {/* ------------Phone numbers part---------- */}
        <div className="mail">
          <h2 className='text-sm font-normal font-popins text-primery dark:text-[#F1F1F1] pb-2 mt-5'>Phone numbers</h2>
          <div className="both flex justify-between">
            <div className="name1 w-full px-2 h-12 border border-[#E8EDF2] dark:border-[#313442] rounded-[8px] flex justify-center items-center">
              <input type="number" placeholder='(+01)' className='text-sm w-full font-popins text-[#C6CBD9] dark:text-[#2C2C35] border-none outline-none appearance-none'/>
              <BiPhoneCall className='text-base text[#9A9AAF] dark:text-[#64646F]'/>
            </div>
          </div>
        </div>

        {/* ------------Password part---------- */}
        <div className="mail">
          <h2 className='text-sm font-normal font-popins text-primery dark:text-[#F1F1F1] pb-2 mt-5'>Password</h2>
          <div className="name1 w-full px-2 h-12 border border-[#E8EDF2] dark:border-[#313442] rounded-[8px] flex justify-center items-center">
            <input type={showItem ? "text" : "password"} placeholder='Password' className='text-sm w-full font-popins text-[#C6CBD9] dark:text-[#2C2C35] border-none outline-none'/>
            {showItem ? (
              <IoEyeOffOutline onClick={() => setShowItem(!showItem)} className='cursor-pointer text-base'/>
            ) : (
              <IoEyeOutline onClick={() => setShowItem(!showItem)} className='cursor-pointer text-base'/>
            )}
          </div>
        </div>

        {/* ------------Confirm Password part---------- */}
        <div className="mail">
          <h2 className='text-sm font-normal font-popins text-primery dark:text-[#F1F1F1] pb-2 mt-5'>Confirm Password</h2>
          <div className="name1 w-full px-2 h-12 border border-[#E8EDF2] dark:border-[#313442] rounded-[8px] flex justify-center items-center">
            <input type={showItem ? "text" : "password"} placeholder='Confirm Password' className='text-sm w-full font-popins text-[#C6CBD9] dark:text-[#2C2C35] border-none outline-none'/>
            {showItem ? (
              <IoEyeOffOutline onClick={() => setShowItem(!showItem)} className='cursor-pointer text-base'/>
            ) : (
              <IoEyeOutline onClick={() => setShowItem(!showItem)} className='cursor-pointer text-base'/>
            )}
          </div>
        </div>

        {/* -------------sign up button--------- */}
        <button type="submit" className='w-full h-13 bg-[#7364DB] rounded-md text-white lg:text-base text-sm font-semibold font-popins py-3.5 text-center mt-5 mb-5'>
          Sign up
        </button>

        {/* -------------checkbox part------------- */}
        <div className="cheak flex gap-2 mb-5.5">
          <input type="checkbox" className='text-xl text-[#7364DB]' />
          <p className='text-sm font-normal font-popins text-[#8083A3]'>I agree with terms & conditions</p>
        </div>

        {/* ---------social media logo--------- */}
        <div className="socialMedia flex justify-between mb-5.5">
          <button type="button" className="google w-[170px] h-[50px] border border-[#E8EDF2] dark:border-[#313442] rounded-[8px] flex justify-center items-center gap-2">
            <FcGoogle className="text-xl"/>
            <p className='text-xs font-normal font-popins text-primery dark:text-[#F1F1F1]'>Google account</p>
          </button>

          <button type="button" className="google w-[170px] h-[50px] border border-[#E8EDF2] dark:border-[#313442] rounded-[8px] flex justify-center items-center gap-2">
            <FaFacebook className="text-xl text-blue-800"/>
            <p className='text-xs font-normal font-popins text-primery dark:text-[#F1F1F1]'>Facebook account</p>
          </button>
        </div>

        {/* --------------signin part------------- */}
        <div className="signin flex justify-center gap-1">
          <p className='text-sm font-normal font-popins text-primery'>Already have an account?</p>
          <Link to="/login" className='text-sm font-normal font-popins text-[#7364DB]'>Sign in</Link>
        </div>
     
      </form>
    </section>
  )
}

export default Register