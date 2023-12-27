'use client';
import './IconSocial.css';
import Image from 'next/image';
import facebook from '../../../../public/icons/facebook.png';
import instagram from '../../../../public/icons/logotipo-de-instagram.png';
import gorjeo from '../../../../public/icons/gorjeo.png';
export const IconSocial = ({ type }) => {
  return (
    <>
      <div className="IconSocial">
        <Image src={facebook} alt="facebook" className="IconSocial__Logo" />
      </div>
      <div className="IconSocial">
        <Image src={instagram} alt="instagram" className="IconSocial__Logo" />
      </div>
      <div className="IconSocial">
        <Image src={gorjeo} alt="gorjeo" className="IconSocial__Logo" />
      </div>
    </>
  );
};
