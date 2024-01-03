import "./Hero.css";
import Image from "next/image";
import fill from "../../../../public/icons/fill.png";
import { Button } from "@/app/ui";
export const Hero = () => {
  return (
    <div className="Hero">
      <div className="Hero__Section">
        <h1 className="Hero__Title">
          {/* Bienvenido a Personal Cloud: <br /> */}
          <span className="Hero__Title--Bold">Tu Refugio Digital Privado</span>
        </h1>
        <p className="Hero__Descripcion">
          Recupera el control de tus datos personales con Personal Cloud. Únete
          a la revolución por la privacidad digital y disfruta de un espacio en
          línea seguro donde puedes almacenar, organizar y acceder a toda tu
          información importante.
        </p>
        <Button text="Empezar" type="rectangle" />
      </div>
      <div className="Hero__Section">
        <Image src={fill} alt="Picture of the author" className="Hero__Image" />
      </div>
    </div>
  );
};
