import './FileSpaces.css';
import { Button, CardFile } from '@/app/ui';

export const FileSpaces = ({ viewMode }) => {
  return (
    <div className="FileSpaces">
      <div className="FileSpaces__Header">
        <h1 className="FileSpaces__Title">File Spaces</h1>
        <Button text=" Añadir Archivos" type="filled" urlSign="#" />
      </div>
      <div className={viewMode ? 'FileSpaces__Grid' : 'FileSpaces__List'}>
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
        <CardFile viewMode={viewMode} />
      </div>
    </div>
  );
};

//
