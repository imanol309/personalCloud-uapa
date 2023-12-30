import { Button, Logo } from "@/app/ui";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <nav className="Navbar">
      <div className="Navbar__Brand">
        <Logo />
      </div>
      <ul className="Navbar__Links">
        <li>
          <a className="Navbar__Item link" href="#whychooseus">
            ¿Por qué elegirnos?
          </a>
        </li>
        <li>
          <a className="Navbar__Item link" href="#plans">
            Planes
          </a>
        </li>
        <li>
          <a className="Navbar__Item link" href="#testimonials">
            Testimonios
          </a>
        </li>
        <li>
          <a className="Navbar__Item link" href="#help">
            Ayuda
          </a>
        </li>
      </ul>
      <div className="Navbar__Auth">
        <Button text="Iniciar sesion" type="clean" urlSign="/sign-in"/>
        <Button text="Registrarse" type="outline" urlSign="/sign-up" />
      </div>
    </nav>
  );
};
