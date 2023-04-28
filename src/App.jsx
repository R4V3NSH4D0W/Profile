import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import { useState } from 'react'
const App = () => {
  const [darkMode,setDarkMode]=useState(false);

  return (
    <div className={darkMode?"dark":""}>
    <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
       <section className=' min-h-screen'>
    <nav className=' py-10 mb-10 flex justify-between'>
      <h1 className='text-xl font-burtons'>Developedbyed</h1>
      <ul className=' flex items-center'>
        <li><BsFillMoonStarsFill onClick={()=>setDarkMode(!darkMode)} className='cursor-pointer text-2xl'/></li>
        <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href='#'>Resume</a></li>
      </ul>
    </nav>
   <div className='text-center p-10'>
    <h2 className=" text-5xl text-teal-600 font-medium md:text-3xl">Lenish Yesmali Magar</h2>
    <h3 className='text-2xl py-2'>Devloper and designer.</h3>
    <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto'>Freelancer providing services for programming and design content
    needs. Join me down below and let's get cracking!
    </p>
   </div>
   <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
    <AiFillTwitterCircle/>
    <AiFillLinkedin/>
    <AiFillYoutube/>
   </div>
   <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden'>
    <img src={deved} style={{ width:'100%',height:"100%",objectFit:"cover"}}/>
   </div>
  </section>
  <section>
    <div>
      <h3 className='text-3xl py-1 mt-10'>Services I offer</h3>
      <p className='text-md py-2 leading-8 text-gray-600'>
      Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
      <span className="text-teal-500"> agencies </span>
           consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
              </p>
    </div>
    <div className='lg:flex gap-10'>
      <div className='text-center shadow-lg p-10 round-xl my-10'>
        <img  src={design} style={{width:"20%", height:"20%", display:"block",marginLeft:"auto",marginRight:"auto" }}/>
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
        Creating elegant designs suited for your needs following core
                design theory.
        </p>
        <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
        <p className='text-gray-800 py-1 '>Photoshop</p>
        <p className='text-gray-800 py-1 '>Illustration</p>
        <p className='text-gray-800 py-1 '>Figma</p>
      </div>
      <div className='text-center shadow-lg p-10 round-xl my-10'>
        <img  src={code} style={{width:"20%", height:"20%", display:"block",marginLeft:"auto",marginRight:"auto" }}/>
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
        Creating elegant designs suited for your needs following core
                design theory.
        </p>
        <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
        <p className='text-gray-800 py-1 '>Photoshop</p>
        <p className='text-gray-800 py-1 '>Illustration</p>
        <p className='text-gray-800 py-1 '>Figma</p>
      </div>
      <div className='text-center shadow-lg p-10 round-xl my-10'>
        <img  src={consulting} style={{width:"20%", height:"20%", display:"block",marginLeft:"auto",marginRight:"auto" }}/>
        <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
        <p className='py-2'>
        Creating elegant designs suited for your needs following core
                design theory.
        </p>
        <h4 className='py-4 text-teal-600'>Design Tools I use</h4>
        <p className='text-gray-800 py-1 '>Photoshop</p>
        <p className='text-gray-800 py-1 '>Illustration</p>
        <p className='text-gray-800 py-1 '>Figma</p>
      </div>
    </div>
  </section>
  <section>
    <div>
      <h3 className=' text-3xl py-1'>Portfolio</h3>
      <p className='text-md py-2 leading-8 text-gray-600'>
      Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
      <span className="text-teal-500"> agencies </span>
           consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
      </p>
      <p className="text-md py-2 leading-8 text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
              </p>
    </div>
    <div className=' flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
      <div className=' basis-1/3 flex-1'>
        <img src="../public/web1.png" className='rounded-lg object-cover' style={{width:"100%",height:"100%"}}/>
      </div>
      <div className=' basis-1/3 flex-1'>
        <img src="../public/web2.png" className='rounded-lg object-cover' style={{width:"100%",height:"100%"}}/>
      </div>
      <div className=' basis-1/3 flex-1'>
        <img src="../public/web3.png" className='rounded-lg object-cover' style={{width:"100%",height:"100%"}}/>
      </div>
      <div className=' basis-1/3 flex-1' >
        <img src="../public/web4.png" className='rounded-lg object-cover' style={{width:"100%",height:"100%"}}/>
      </div>
      <div className=' basis-1/3 flex-1'>
        <img src="../public/web5.png" className='rounded-lg object-cover' style={{width:"100%",height:"100%"}}/>
      </div>
      <div className=' basis-1/3 flex-1'>
        <img src="../public/web6.png" className='rounded-lg object-cover' style={{width:"100%",height:"100%"}}/>
      </div>
      
    </div>
  </section>

    </main>
  </div>
 
  )
}

export default App