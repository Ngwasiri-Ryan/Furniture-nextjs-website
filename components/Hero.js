import React from 'react'
import Button from './Button'
import styles from '@/styles/hero.css'
import Image from 'next/image'
import IMG1 from '../public/pic1.png'
import { BsCaretDown } from 'react-icons/bs'

const Hero = () => {
  return (
   <section className='hero_section'>
      <h1 className='title'>Golden Builders</h1>
       <p className='hero_text'>Get all home made furniture of all varous categories for your homes, businesses  and offices.
       We offer high quality and durable furniture </p>
       <a href="" className='hero_button'>Explore</a>
       <div className='down_arrow'>
        <BsCaretDown className='down_icon'/>
       </div>
     
   </section>
  )
}

export default Hero