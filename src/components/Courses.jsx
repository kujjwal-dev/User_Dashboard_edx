import React from 'react'
import { FaStar } from "react-icons/fa";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data=[
  {
    img: 'bootcamp.jpg',
    text: " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et",
    review: 4 

  },
  {
    img: 'basics.jpg',
    text: " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab",
    review: 3

  },
  {
    img: 'buisness.jpg',
    text: " Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot",
    review: 5

  }
]

const Courses = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed:500,
    slidesToShow: 3,
    slidesToScroll:3,
  }
  return (

    <div className='w-3/4 mx-auto'>
      <div className='mt-20'>

        <Slider  {...settings}>

        { data.map( (d) => (

          <div className='h-[450px] text-black rounded-xl border border-gray-600'>
            <div className='h-56 rounded-t-xl flex justify-center items-center '>
              <img src={d.img} alt='' className='h-44 w-44 rounded-full bg-indigo-500 ' />
            </div>
            <div className='flex flex-col justify-center items-center gap-4 p-4'>
              <p className='text-xl font-semibold'>
                {d.text}
              </p>
              <p className='flex flex-row '><span>{d.review}</span><FaStar color='#FFFF00' size={20} /></p>
              <button className='bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl '>Enroll now</button>
            </div>
          </div>

        ))}
           </Slider>
       

      </div>
    </div>
  )
}

export default Courses