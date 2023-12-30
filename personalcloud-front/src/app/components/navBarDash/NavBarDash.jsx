"use client";
import "../../ui/logo/Logo.css";
import Link from "next/link";
import Image from "next/image";
import outline from "../../../../public/icons/outline.png";
import home from "../../../../public/icons/navBarDash/home.svg";
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
      icon: home,
      status: true,
    },
    {
      title: "Trash",
      url: "/trash",
      icon: home,
      status: true,
    },
  ];

  return (
    <div className="container__dash">
      <div className="Logo">
        <Image
          src={outline}
          width={45}
          height={45}
          alt="Picture of the author"
        />
        <Link className="Logo__Title" href={"/"}>
          Personal
          <span className="Logo__Title--Bold">Cloud</span>
        </Link>
      </div>
      <div>
        {dataOptionNavBar.map(({ title, url, icon, status }, index) => (
          <Link className="Logo__Title" href={`${url}`} key={index}>
            <Image src={icon} width={35} height={35} alt={title} />
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default NavBarDash;
