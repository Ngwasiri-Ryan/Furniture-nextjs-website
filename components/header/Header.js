"use client";

import React,{useState, useEffect} from 'react';
import Image from 'next/image';
import styles from '@/styles/header.css'
import MenuItems from './MenuItems'
import HeaderIcons from './HeaderIcons'


const Header = () => {
 const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
   <header className={isScrolled ? 'scrolled' : ''}>
   <MenuItems/>
   <HeaderIcons/>
      
   </header>
  );
};

export default Header;
