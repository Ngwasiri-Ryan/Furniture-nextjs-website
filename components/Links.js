"use client";

import React,{useState, useEffect} from 'react';
import {BiMenu} from 'react-icons/bi'
import styles from '@/styles/header.css'

const Links = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

    const [isMobile, setIsMobile] = useState(window.innerWidth < 770);
    useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth < 770);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <div>
    {isMobile ? (
      <BiMenu className='menu'/>
    ) : (
      <ul className='links'>
    <li><a  className={isScrolled ? 'black' : ''} href=''>Home</a></li>
    <li><a  className={isScrolled ? 'black' : ''} href=''>About us</a></li>
    <li><a  className={isScrolled ? 'black' : ''} href=''>Products</a></li>
    <li><a  className={isScrolled ? 'black' : ''} href=''>Services</a></li>
    <li><a  className={isScrolled ? 'black' : ''}href=''>Experts</a></li>
    <li><a  className={isScrolled ? 'black' : ''}href=''>Contact-Us</a></li>
</ul>
    )}
    </div>
  )
}

export default Links