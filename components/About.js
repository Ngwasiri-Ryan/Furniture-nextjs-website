import React from 'react'
import Image from 'next/image'
import PIC from '../public/about_pic.png'
import styles from '@/styles/about.css'
const About = () => {
  return (
 <section className='about_section'>
    <div className='about_container'>
       
         <div className='grid_1'>
        
          <Image
              src={PIC}
              height="500"
              alt="Picture of the author"
              className='about_img'
            />

          </div>

          <div className='grid_2'> 
          HEY
          </div>
        



       <div></div>
    </div>















 </section>
  )
}

export default About