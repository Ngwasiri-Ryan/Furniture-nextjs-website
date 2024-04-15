"use client";

import React,{useState, useEffect} from 'react';
import Button from './Button';
import Links from './Links';
import Logo from './Logo';
import Image from 'next/image';
import styles from '@/styles/header.css'
import Menu from './Menu'

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
       {/***logo */}
        <div>
        <span className='logo-first'>G-</span><span  className='logo-second'>Builders</span>
        </div>
       {/***links */}
        <Links/>
   </header>
  );
};

export default Header;
