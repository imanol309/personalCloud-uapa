import './CardFile.css';
import iconPdf from '../../../../public/icons/type/iconPdf.png';
import Image from 'next/image';
import moreIcon from '../../../../public/icons/icons8-más-30.png';

export const CardFile = ({ viewMode }) => {
  return (
    <div className={viewMode ? 'CardFile--Grid' : 'CardFile--List'}>
      <div className={viewMode ? 'CardFile__Box--Grid' : 'CardFile__Box--List'}>
        <Image
          src={iconPdf}
          className={viewMode ? 'CardFile__Icon--Grid' : 'CardFile__Icon--List'}
          alt="Icon Image"
        />
        <p className="CardFile__Title">Titulo de archivo</p>
      </div>
      <p className="CardFile__Date">Enero 15, 2024</p>
      <Image src={moreIcon} alt="Icon More" />
    </div>
  );
};
