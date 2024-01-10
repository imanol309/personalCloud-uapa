import './FileSpaces.css';
import { CardFile } from '@/app/ui';
import CloudFlareFile from '../cloudFlareFile/CloudFlareFile';

export const FileSpaces = ({ viewMode, dataFile, filteredData }) => {
  return (
    <div className="FileSpaces">
      <div className="FileSpaces__Header">
        <h1 className="FileSpaces__Title">File Spaces</h1>
        <CloudFlareFile />
      </div>
      <div className={viewMode ? 'FileSpaces__Grid' : 'FileSpaces__List'}>
        {!dataFile ? (
          <h4>Cargando datos...</h4>
        ) : filteredData.length === 0 ? (
          <h4>No hay resultados de búsqueda</h4>
        ) : (
          filteredData.map((data, index) => (
            <CardFile viewMode={viewMode} key={index} data={data} />
          ))
        )}  
      </div>
    </div>
  );
};
