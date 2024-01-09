"use client";
import { useFormStatus } from "react-dom";
import "../../ui/button/Button.css";
// import { Toaster, toast } from "sonner";

export function SubmitButton({ funct }) {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="button filled"
        style={{ padding: "10px 25px", cursor: "pointer" }}
        aria-disabled={pending}
        // onClick={funct}
      >
        {pending ? "Subiendo..." : "Subir archivo"}
      </button>
      
    </>
  );
}
