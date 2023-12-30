import './CardTestimony.css';
import Image from 'next/image';
import facebook from '../../../../public/icons/estrella.png';
import { Avatar } from '@/app/ui';

export const CardTestimony = ({ name, location, point, opinion }) => {
  return (
    <div>
      <div className="CardTestimony">
        <div className="CardTestimony__Header">
          <div className="CardTestimony__Avatar">
            <Avatar />
            <div>
              <h3 className="Avatar__Name">{name}</h3>
              <h3 className="Avatar__Location">{location}</h3>
            </div>
          </div>
          <div className="CardTestimony__Point">
            <span className="Point__Number">{point}</span>
            <Image src={facebook} alt="hola" width={18} height={18} />
          </div>
        </div>
        <div className="CardTestimony__Footer">
          <p className="CardTestimony__Opinion">{opinion}</p>
        </div>
      </div>
    </div>
  );
};
