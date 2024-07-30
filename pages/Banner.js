import React from 'react'
import styles from '@/styles/banner.css'
import PIC1 from '@/public/images/banner_1.png'
import PIC2 from '@/public/images/banner_2.png'
import Image from 'next/image'
function Banner() {
  return (
    <div className='banner'>
        <div className="container">
            <div className='content'>
               {/********left**********/}
               <div className='left'>
                <h1>Furn</h1>
                <p>
                When you are furnishing a new home, renovating an existing space, 
                the process of selecting the perfect furniture piece can be 
                enjoyable and challending.
                </p>
               <div className='imgBox_left'>
                <Image src={PIC1} className='banner_pic'/>
               </div>
               </div>
               {/********middle********/}
               <div className='middle'>
               <div className='top'/>
               <div  className='bottom' />
               </div>
               {/********right*********/}
               <div className='right'>
               
                <p>
                When you are furnishing a new home, renovating an existing space, 
                the process of selecting the perfect furniture piece can be 
                enjoyable and challending.
                </p>
                <h1>ture</h1>
                <div className='imgBox_right'>
                <Image src={PIC2} className='banner_pic'/>
                </div>
               </div>
               
            </div>
        </div>
    </div>
  )
}

export default Banner