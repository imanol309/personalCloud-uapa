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
          <a className="Navbar__Item" href="#whychooseus">
            ¿Por qué elegirnos?
          </a>
        </li>
        <li>
          <a className="Navbar__Item" href="#plans">
            Planes
          </a>
        </li>
        <li>
          <a className="Navbar__Item" href="#testimonials">
            Testimonios
          </a>
        </li>
        <li>
          <a className="Navbar__Item" href="#help">
            Ayuda
          </a>
        </li>
      </ul>
      <div className="Navbar__Auth">
        <Button text="Iniciar sesion" type="clean" />
        <Button text="Registrarse" type="outline" />
      </div>
    </nav>
  );
};
