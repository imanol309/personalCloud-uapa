import { CardPlans } from '@/app/ui';
import './Plans.css';

const premium = [
  'Subir archivos ilimitados',
  'Velocidad de subida y descarga rápida', 
  'Compartir archivos con enlace',
  'Cifrado de extremo a extremo',
  'Soporte prioritario 24/7'
];

const standard = [
  'Subir archivos hasta 10GB',
  'Velocidad de subida y descarga estándar',
  'Compartir archivos con enlace',
  'Cifrado de archivos',
  'Soporte en horario hábil'  
];

const free = [
  'Subir archivos hasta 2GB',
  'Velocidad de subida y descarga limitada',
  'Compartir archivos con enlace (max 5)',
  'Sin cifrado',
  'Soporte por email'
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
          <CardPlans title="Plan Free" price="0" lists={free} />
          <CardPlans title="Plan Estándar" price="4" lists={standard} />
          <CardPlans title="Plan Premium" price="10" lists={premium} />
        </div>
      </div>
    </>
  );
};
