import Image from 'next/image';
import outline from '../../../../public/icons/outline.png';
import './Logo.css';
export const Logo = () => {
  return (
    <div className="Logo">
      <Image src={outline} width={45} height={45} alt="Picture of the author" />
      <p className="Logo__Title">
        Personal
        <span className="Logo__Title--Bold">Cloud</span>
      </p>
    </div>
  );
};
