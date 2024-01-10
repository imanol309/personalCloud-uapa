"use client";
import Image from "next/image";
import "./CardFile.css";
import viewIcon from "../../../../public/icons/icons8-panel-de-vista-previa-50.png";
import downloadIcon from "../../../../public/icons/icons8-descargar-26.png";
import doc from "../../../../public/icons/type/doc.svg";
import pngImg from "../../../../public/icons/type/pngImg.svg";
import pdf from "../../../../public/icons/type/pdf.svg";
import txt from "../../../../public/icons/type/txt.svg";
import xlsx from "../../../../public/icons/type/xlsx.svg";
import { useState, useContext } from "react";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";
import { convetir } from "../../utils/updateToPdf";
import deleteIcon from "../../../../public/icons/type/deleteIcon.svg";
import { DeleteFile } from "../../services/DeleteServices";
import { UserContext } from "../../components/AllFileSpace/AllFileSpace";
import { Toaster, toast } from "sonner";

export const CardFile = ({ viewMode, data }) => {
  console.log(data);
  const { updateDate, toggleTheme } = useContext(UserContext);
  const [imageBlob, setImageBlob] = useState(null);
  const [modal, setModal] = useState(false);
  const [link, setLink] = useState(null);
  const [linkPDF, setLinkPDF] = useState(null);
  const officers = {
    // text
    txt: txt,
    doc: doc,
    ocx: doc,
    pdf: pdf,
    lsx: xlsx,
    // imagen
    peg: pngImg,
    png: pngImg,
    jpg: pngImg,
  };
  const imagen = ["peg", "png", "jpg"];

  const ifEspera = async () => {
    if ("ocx".includes(data.type)) {
      const linkP = await convetir({ url: data.link });
      setLinkPDF(linkP.result?.dto?.Files[0]?.Url);
      console.log(linkP.result?.dto?.Files[0]?.Url);
    }
  };

  console.log(updateDate);
  const handleButtonClick = () => {
    toggleTheme();
  };

  const downloadFile = async () => {
    try {
      const response = await fetch(data.link);
      const blob = await response.blob();
      setImageBlob(blob);

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = data.name_file;
      link.click();
    } catch (error) {
      console.error("Error al descargar la imagen:", error);
    }
  };

  const deleteFilesForId = async () => {
    const dataDelete = await DeleteFile(data?.id);
    console.log(
      dataDelete?.result?.mensaje === "Archivo eliminando correctamente"
    );
    if (dataDelete?.result?.mensaje === "Archivo eliminando correctamente") {
      toast.error(`${dataDelete?.result?.mensaje}`);
      setTimeout(() => {
        handleButtonClick();
      }, 2000);
    }
    console.log(dataDelete);
  };

  return (
    <>
      <PureModal
        className="container__pureModal"
        style={{ height: "auto" }}
        width="auto"
        isOpen={modal}
        closeButtonPosition="bottom"
        onClose={() => {
          setModal(false);
          return true;
        }}
      >
        {imagen.includes(data.type) ? (
          <div className="">
            <img className="img__modal" src={data.link} alt={data.name_file} />
          </div>
        ) : (
          <div className="container">
            {" "}
            <iframe
              src={`${data.link}`}
              allow="autoplay"
              className="container__iframe"
            />
          </div>
        )}
      </PureModal>
      <div className={viewMode ? "CardFile--Grid" : "CardFile--List"}>
        <div
          className={viewMode ? "CardFile__Box--Grid" : "CardFile__Box--List"}
        >
          <Image
            src={officers[data.type]}
            className={
              viewMode ? "CardFile__Icon--Grid" : "CardFile__Icon--List"
            }
            alt="Icon Image"
            height={35}
            width={35}
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
          {"pdf".includes(data.type) || imagen.includes(data.type) ? (
            <Image
              src={viewIcon}
              alt="Icon More"
              className="IconDown"
              onClick={() => setModal(true)}
            />
          ) : null}
          <Image
            src={deleteIcon}
            alt="Icon More"
            onClick={deleteFilesForId}
            className="IconDown"
          />
        </div>
      </div>
      <Toaster position="top-right" richColors />
    </>
  );
};
