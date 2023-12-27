import { Button } from '..';
import './CardPlans.css';
import Image from 'next/image';
import CloudSync from '../../../../public/images/undraw_xmas_surprise_-57-p1.svg';

export const CardPlans = ({ title, lists, price }) => {
  return (
    <div className="CardPlans">
      <Image
        src={CloudSync}
        alt="Picture of the package"
        className="CardPlans__Image"
      />
      <div className="CardPlans__Box">
        <h2 className="CardPlans__Title">{title}</h2>
        <ul className="CardPlans__List">
          {lists.map((list) => (
            <li key={list} className="CardPlans__List--Item">✔️{list}</li>
          ))}
        </ul>
      </div>
      <div className="CardPlans__Box">
        <p className="CardPlans__Price">
          <span className="CardPlans__Price--Modify">${price}</span> / mensual
        </p>
        <Button text="Seleccionar" type="filled" />
      </div>
    </div>
  );
};
