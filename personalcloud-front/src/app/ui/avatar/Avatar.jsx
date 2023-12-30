import './Avatar.css';
import Image from 'next/image';
import facebook from '../../../../public/icons/facebook.png';

export const Avatar = () => {
  return (
    <div className='Avatar'>
      <Image src={facebook} alt="facebook"  className='Avatar__Image' />
    </div>
  );
};
