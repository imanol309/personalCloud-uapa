'use client';
import { Logo } from '@/app/ui';
import './NavBar.css';
import User from './user/User';
import { useState } from 'react';
import Image from 'next/image';
import menuIcon from '../../../../public/icons/icons8-menú-50.png';
export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };
  return (
    <nav className="Navbar">
      <div className="Navbar__Brand">
        <Logo />
        <div className="Btn-Trigger" onClick={toggleMenu}>
          <Image src={menuIcon} width={25} height={25} />
        </div>
      </div>
      <ul className={`Navbar__Links ${isOpen ? 'is-open' : ''}`}>
        <li>
          <a className="Navbar__Item link" href="#whychooseus">
            ¿Por qué elegirnos?
          </a>
        </li>
        <li>
          <a className="Navbar__Item link" href="#plans">
            Planes
          </a>
        </li>
        <li>
          <a className="Navbar__Item link" href="#testimonials">
            Testimonios
          </a>
        </li>
        <li>
          <a className="Navbar__Item link" href="#help">
            Ayuda
          </a>
        </li>
        <div className="Navbar__Auth">
          <User />
        </div>
      </ul>
    </nav>
  );
};
