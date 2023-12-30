import Image from 'next/image';
import outline from '../../../../public/icons/outline.png';
import './Logo.css';
import Link from 'next/link';

export const Logo = () => {
  return (
    <div className="Logo">
      <Image src={outline} width={45} height={45} alt="Picture of the author" />
      <Link className="Logo__Title" href={"/"}>
        Personal
        <span className="Logo__Title--Bold">Cloud</span>
      </Link>
    </div>
  )
};
  