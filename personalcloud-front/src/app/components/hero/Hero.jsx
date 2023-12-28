'use client';
import './Hero.css';
import Image from 'next/image';
import fill from '../../../../public/icons/fill.png';
import { Button } from '@/app/ui';
export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__Section">
        <h1 className="Hero__Title">
          Bienvenido a Personal Cloud: <br />
          <span className="Hero__Title--Bold">Tu Refugio Digital Privado</span>
        </h1>
        <p className="Hero__Descripcion">
          Descubre la versatilidad digital con Personal Cloud. Únete a nosotros
          y experimenta la simplicidad y el placer de tener tu espacio digital
          todo en uno.
        </p>
        <Button text="Empezar" type="rectangle" />
      </div>
      <div className="Hero__Section">
        <Image src={fill} alt="Picture of the author" className="Hero__Image" />
      </div>
    </div>
  );
};
