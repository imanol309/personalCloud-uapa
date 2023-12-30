"use client";
import { usePathname } from "next/navigation";
import { Button, Logo } from "@/app/ui";
import "../navbar/NavBar.css";

function NavBarSign() {
  const pathname = usePathname();
  return (
    <nav className="Navbar">
      <div className="Navbar__Brand">
        <Logo />
      </div>
      <div className="Navbar__Auth">
        {pathname === "/sign-in" ? (
          <Button text="Registrarse" type="outline" urlSign="/sign-up" />
        ) : (
          <Button text="Iniciar sesion" type="clean" urlSign="/sign-in" />
        )}
      </div>
    </nav>
  );
}

export default NavBarSign;
