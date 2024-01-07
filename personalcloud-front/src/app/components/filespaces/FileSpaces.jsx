import "./FileSpaces.css";
import { Button, CardFile } from "@/app/ui";
import CloudFlareFile from '../cloudFlareFile/CloudFlareFile';

export const FileSpaces = ({ viewMode }) => {
  const cant = 25;
  const arr = Array.from({ length: cant }, (_, i) => i);
  
  return (
    <div className="FileSpaces">
      <div className="FileSpaces__Header">
        <h1 className="FileSpaces__Title">File Spaces</h1>
        <CloudFlareFile/>
      </div>
      <div className={viewMode ? "FileSpaces__Grid" : "FileSpaces__List"}>
        {arr.map((index) => (
          <CardFile viewMode={viewMode} key={index} />
        ))}
      </div>
    </div>
  );
};
