"use client";

import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '@/styles/header.css'
import MenuItems from './MenuItems'
import HeaderIcons from './HeaderIcons'


const Header = () => {
  return (
   <header>
   <MenuItems/>
   <HeaderIcons/>
      
   </header>
  );
};

export default Header;
