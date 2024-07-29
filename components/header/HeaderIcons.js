import React from 'react'
import { FaSearch, FaHeart, FaShoppingCart, FaUser } from 'react-icons/fa';
import Notification from './Notification'

function HeaderIcons() {
  return (
    <div className='header_icons'>
      <FaSearch color='#ffff' size={15} />
      <FaHeart color='#ffff'size={15} />
      <div>
        <FaShoppingCart  color='#ffff' size={15} />
        <Notification/>
      </div>
      <FaUser  color='#ffff' size={15} />
    </div>
  )
}

export default HeaderIcons