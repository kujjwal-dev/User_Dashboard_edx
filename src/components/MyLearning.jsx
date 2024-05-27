import React from 'react'

const MyLearning = () => {
  return (
    <div className='text-center py-10 '>
      <h1 className='text-4xl w-96 mx-auto leading-normal font-bold mb-12'>
        Learning
      </h1>

      <div className='flex max-w-5xl mx-auto gap-8 group'>
        <div className='bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  cursor-pointer  p-8 rounded-xl mix-blend-luminosity border border-gray-600' >

          <img src='bootcamp.jpg' alt='' className='h-20 mx-auto'/>
          <h4 className='uppercase text-xl'>Bootcamp</h4>
          <p className='text-sm leading-7 my-3 text-black font-bold opacity-50'>
          Bootcamp is a technology used to create a dual-boot system on a computer. It allows users to install and run both Windows and Mac operating systems on the same machine.
          </p>
          <button className='bg-btn_primary py-2.5 px-8 rounded-full'> 
            Ongoing
          </button>

        </div>
        <div className='bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity border border-gray-600' >

          <img src='buisness.jpg' alt='' className='h-20 mx-auto'/>
          <h4 className='uppercase text-xl'>Buisness</h4>
          <p className='text-sm leading-7 my-3 text-black font-bold opacity-50'>
          Bootcamp is a technology used to create a dual-boot system on a computer. It allows users to install and run both Windows and Mac operating systems on the same machine.
          </p>
          <button className='bg-btn_primary py-2.5 px-8 rounded-full'> 
            Ongoing
          </button>

        </div>
        <div className='bg-white/10 duration-500 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100 cursor-pointer p-8 rounded-xl mix-blend-luminosity border border-gray-600' >

          <img src='basics.jpg' alt='' className='h-20 mx-auto'/>
          <h4 className='uppercase text-xl'>Basic coding</h4>
          <p className='text-sm leading-7 my-3 text-black font-bold opacity-50'>
           
         Bootcamp is a technology used to create a dual-boot system on a computer. It allows users to install and run both Windows and Mac operating systems on the same machine.
          </p>
          <button className='bg-btn_primary py-2.5 px-8 rounded-full'> 
            Ongoing
          </button>

        </div>
      </div>









    </div>
  )
}

export default MyLearning