import "./WhyChooseUs.css";
import Image from "next/image";
import CloudSync from "../../../../public/images/undraw_cloud_sync_re_02p1.svg";

const list = [
  "Privacidad Inigualable.",
  "Cifrado de Extremo a Extremo.",
  "Almacenamiento sin Límites.",
  "Acceso Seguro Desde Cualquier Lugar.",
  "Control Total sobre tus Archivos.",
  "No Comercializamos con tus Datos.",
  "Experiencia sin Preocupaciones.",
];

export const WhyChooseUs = () => {
  return (
    <>
      {" "}
      <div className="WhyChooseUs" id="whychooseus">
        <div>
          <Image src={CloudSync} alt="Picture of the CloudSync" className="" height={"auto"} width={"auto"} />
        </div>
        <div className="WhyChooseUs__Box">
          <h2 className="WhyChooseUs__Title">Por qué Elegir Personal Cloud?</h2>
          <p className="WhyChooseUs__Description">
            En el vasto mundo del almacenamiento en la nube, Personal Cloud se
            destaca como tu opción más segura y privada. Aquí te presentamos las
            razones por las cuales deberías elegirnos:
          </p>
          <ul className="WhyChooseUs__List">
            {list.map((value) => (
              <li key={value} className="WhyChooseUs__List--Item">
                ☑️ {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
