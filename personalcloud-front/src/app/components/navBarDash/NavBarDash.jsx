import Link from "next/link";
import Image from "next/image";
import icon from "../../favicons/apple-touch-icon.png";

// SVG on component of react
import homeSVg from "../../../../public/icons/navBarDash/svg/Home";
import starSVg from "../../../../public/icons/navBarDash/svg/Star";
import trashSVg from "../../../../public/icons/navBarDash/svg/Trash";
import settingSVg from "../../../../public/icons/navBarDash/svg/Setting";
import helpSVg from "../../../../public/icons/navBarDash/svg/Help";

// SVG for update the plan
import unlock from "../../../../public/icons/navBarDash/unlock.svg";

import "./NavBarDash.css";
import ButtonUpdate from "../../ui/buttonUpdate/ButtonUpdate";

function NavBarDash() {
  const dataOptionNavBarOne = [
    {
      title: "My Cloud",
      url: "/mycloud",
      Icon: homeSVg,
      status: true,
    },
    {
      title: "Starred",
      url: "/starred",
      Icon: starSVg,
      status: true,
    },
    {
      title: "Trash",
      url: "/trash",
      Icon: trashSVg,
      status: true,
    },
  ];

  const dataOptionNavBartwo = [
    {
      title: "Help",
      url: "/help",
      Icon: helpSVg,
      status: true,
    },
    {
      title: "Setting",
      url: "/setting",
      Icon: settingSVg,
      status: true,
    },
  ];

  return (
    <div className="container__dash">
      <div className="container__logo">
        <Link className="Logo__Title__dash" href={"/"}>
          <Image
            src={icon}
            width={35}
            height={35}
            className="icon__img"
            alt="Picture of the author"
          />
          <p>
            Personal
            <span className="Logo__Title__dash--bold">Cloud</span>
          </p>
        </Link>
      </div>
      <div className="container__option">
        <div>
          {dataOptionNavBarOne.map(({ title, url, Icon, status }, index) =>
            status ? (
              <Link className="Title__option" href={`${url}`} key={index}>
                <Icon
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
        <div>
          {dataOptionNavBartwo.map(({ title, url, Icon, status }, index) =>
            status ? (
              <Link className="Title__option" href={`${url}`} key={index}>
                <Icon
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
      </div>
      <div className="container__unlock">
        <Image
          src={unlock}
          width={135}
          height={155}
          alt={"Unlock your plan"}
          className="icon__update"
        />
        <div style={{display: "flex", flexDirection: "column", gap: "5px"}}>
          <h2 style={{ fontSize: "16px" }}>Desbloquea tu plan</h2>
          <p style={{ fontSize: "13px", color: "#4f5665" }}>
            Almacenamiento ampliado, acceso a más funciones en tu nube
          </p>
        </div>
        <ButtonUpdate text={"Update"} />
      </div>
    </div>
  );
}

export default NavBarDash;
