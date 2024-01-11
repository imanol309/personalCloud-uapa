import "./Hero.css";
import Image from "next/image";
import { Button } from "@/app/ui";
import dashboard_shots_so from "../../../../public/images/dashboard_shots_so.png";

export const Hero = () => {
  return (
    <div className="Hero">
      <div style={{width: "40%"}} className="container_text">
        <h1 className="Hero__Title">
          <span className="Hero__Title--Bold">Tu Refugio Digital Privado</span>
        </h1>
        <p className="Hero__Descripcion">
          Recupera el control de tus datos personales con Personal Cloud. Únete
          a la revolución por la privacidad digital y disfruta de un espacio en
          línea seguro donde puedes almacenar, organizar y acceder a toda tu
          información importante.
        </p>
        <Button text="Empezar" type="rectangle" urlSign={"dashboard/my-cloud"} />
      </div>

      <div style={{widh: "60%"}}>
        <Image
          src={dashboard_shots_so}
          alt="Dashboard"
          className="Hero__Image"
          height={"auto"}
          width={"auto"}
        />
      </div>
    </div>
  );
};
