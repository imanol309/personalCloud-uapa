"use client"
import { useUser } from "@clerk/nextjs";
import { Button } from "@/app/ui";
import "../NavBar.css";

function user() {
  const { user } = useUser();
  
  return user ? (
    <Button text="My Cloud" type="outline" urlSign="/dashboard" />
  ) : (
    <>
      <Button text="Iniciar sesion" type="clean" urlSign="/sign-in" />
      <Button text="Registrarse" type="outline" urlSign="/sign-up" />
    </>
  );
}

export default user;
