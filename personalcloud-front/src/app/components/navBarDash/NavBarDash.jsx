"use client";
// import "../../ui/logo/Logo.css";
import Link from "next/link";
import Image from "next/image";
import outline from "../../../../public/icons/outline.png";
import icon from '../../favicons/apple-touch-icon.png';
import home from "../../../../public/icons/navBarDash/home.svg";
import start from "../../../../public/icons/navBarDash/start.svg";
import trash from "../../../../public/icons/navBarDash/trash.svg";
import unlock from "../../../../public/icons/navBarDash/unlock.svg";

import "./NavBarDash.css";

function NavBarDash() {
  const dataOptionNavBar = [
    {
      title: "My Cloud",
      url: "/mycloud",
      icon: home,
      status: true,
    },
    {
      title: "Starred",
      url: "/starred",
      icon: start,
      status: true,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: trash,
      status: true,
    },
  ];

  return (
    <div className="container__dash">
      <div className="container__logo">
        <Image
          src={icon}
          width={35}
          height={35}
          className="icon__img"
          alt="Picture of the author"
        />
        <Link className="Logo__Title font" href={"/"}>
          Personal
          <span className="Logo__Title--Bold">Cloud</span>
        </Link>
      </div>
      <div className="container__option">
        {dataOptionNavBar.map(({ title, url, icon, status }, index) =>
          status ? (
            <Link className="Title__option" href={`${url}`} key={index}>
              <Image
                src={icon}
                width={25}
                height={25}
                alt={title}
                className="icon__option"
              />
              {title}
            </Link>
          ) : null
        )}
      </div>
      <div className="container__unlock">
        <Image
          src={unlock}
          width={135}
          height={155}
          alt={"Unlock your plan"}
          className="icon__option"
        />
        <h2>Desbloquea tu plan</h2>
        <p>Almacenamiento ampliado, acceso a más funciones en tu nube</p>
        <button>Update</button>
      </div>
    </div>
  );
}

export default NavBarDash;
