'use client';
import './CardFile.css';
import iconPdf from '../../../../public/icons/type/iconPdf.png';
import iconImage from '../../../../public/icons/type/iconImage.png';
import Image from 'next/image';
import viewIcon from '../../../../public/icons/icons8-panel-de-vista-previa-50.png';
import downloadIcon from '../../../../public/icons/icons8-descargar-26.png';
import { useState } from 'react';

export const CardFile = ({ viewMode, data }) => {
  const [imageBlob, setImageBlob] = useState(null);

  const downloadFile = async () => {
    try {
      const response = await fetch(data.link);
      const blob = await response.blob();
      setImageBlob(blob);

      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = data.name_file;
      link.click();
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
    }
  };

  return (
    <div className={viewMode ? 'CardFile--Grid' : 'CardFile--List'}>
      <div className={viewMode ? 'CardFile__Box--Grid' : 'CardFile__Box--List'}>
        <Image
          src={data.type === 'peg' || data.type === 'png' ? iconImage : iconPdf}
          className={viewMode ? 'CardFile__Icon--Grid' : 'CardFile__Icon--List'}
          alt="Icon Image"
        />
        <p className="CardFile__Title">{data.name_file}</p>
      </div>
      <p className="CardFile__Date">{data.date}</p>
      <div className="CardFile__Icons">
        <Image
          src={downloadIcon}
          alt="Icon More"
          onClick={downloadFile}
          className="IconDown"
        />
        <Image src={viewIcon} alt="Icon More" className="IconDown" />
      </div>
    </div>
  );
};
