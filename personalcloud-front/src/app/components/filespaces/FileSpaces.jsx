import "./FileSpaces.css";
import { CardFile } from "@/app/ui";
import CloudFlareFile from "../cloudFlareFile/CloudFlareFile";

export const FileSpaces = ({ viewMode, dataFile }) => {
  console.log(dataFile)
  return (
    <div className="FileSpaces">
      <div className="FileSpaces__Header">
        <h1 className="FileSpaces__Title">File Spaces</h1>
        <CloudFlareFile />
      </div>
      <div className={viewMode ? "FileSpaces__Grid" : "FileSpaces__List"}>
        {!dataFile ? (
          <h4>Cargado datos</h4>
        ) : (
          dataFile.map((data, index) => (
            <CardFile viewMode={viewMode} key={index} data={data} />
          ))
        )}
      </div>
    </div>
  );
};
