import React from 'react'
import Image from 'next/image'
import PIC from '../public/about_pic.png'
import styles from '@/styles/about.css'
const About = () => {
  return (
 <section className='about_section'>
    <div className='about_container'>
       
         <div className='grid_1'>
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className='blob'>
           <path fill="#F1C21B" d="M47.1,-64.8C61.8,-54.1,75.1,-41.4,81.2,-25.6C87.3,-9.9,86.3,8.9,75.9,19.7C65.6,30.4,45.8,33.1,31.6,39C17.4,44.9,8.7,53.9,-0.8,55C-10.3,56.2,-20.7,49.4,-30.7,42.2C-40.7,35,-50.4,27.3,-51.4,18.2C-52.4,9,-44.7,-1.5,-40.4,-12.7C-36.2,-23.9,-35.4,-35.9,-29.3,-49.4C-23.1,-62.9,-11.6,-78,2.3,-81.2C16.2,-84.3,32.4,-75.6,47.1,-64.8Z" transform="translate(100 100)" />
           </svg>
         
           <Image
              src={PIC}
              height="380"
              alt="Picture of the author"
              className='about_img'
            />

            <div className='cards'> hey there  njklk  lk   kknnj,jn   j jkjkjj  j ljkj    mmkj   kjjk </div>
          </div>
        



       <div></div>
    </div>















 </section>
  )
}

export default About