import { CardPlans } from '@/app/ui';
import './Plans.css';

const premium = [
  'este plan es mejor1',
  'este plan es mejor23',
  'este plan es mejor32423',
  'este plan es mejor545',
  'este plan es mejor656',
];

const standar = [
  'este plan es mejor2',
  'esdgsdgsdste plan es mejor',
  'este plansdfsdfsd es mejor',
  'este plan es mejvcxvzxcvxor',
  'este plan es mejobtyyyr',
];
const free = [
  'este plan es mejor3',
  'e5t334ste plan es mejor',
  'este p4534534lan es mejor',
  'este plan es 453453mejor',
  'este plan es mejo34534534r',
];
export const Plans = () => {
  return (
    <>
      <div className="Plans" id="plans">
        <div>
          <h2 className="Plans__Title">Elige tu plan</h2>
          <p className="Plans__Description">
            Elija el paquete que sea mejor para ti y explóralo con alegría y
            entusiasmo.
          </p>
        </div>

        <div className="Plans__List">
          <CardPlans title="Plan Free" price="12" lists={free} />
          <CardPlans title="Plan Estándar" price="12" lists={standar} />
          <CardPlans title="Plan Premium" price="12" lists={premium} />
        </div>
      </div>
    </>
  );
};
