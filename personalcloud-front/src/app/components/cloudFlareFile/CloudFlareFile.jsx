"use client";
import { useFormState } from "react-dom";
import { useState } from "react";
import { uploadFile } from "../../utils/actionsUpload";
import { SubmitButton } from "../submitButton/SubmitButton";
// import { Toaster, toast } from "sonner";
import "./CloudFlareFiel.css";
const initialState = { message: null };

function CloudFlareFile() {
  const [state, formAction] = useFormState(uploadFile, initialState);
  return (
    <div className="container__input">
      <form
        action={formAction}
        style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
      >
        <input
          type="file"
          id="file"
          name="file"
          accept="*"
          className="picture-file"
        />
        <SubmitButton />
      </form>
      {state?.status && (
        // <Toaster position="top-right" expand={false} richColors />
        <div className={`state-message ${state?.status}`}>{state?.message}</div>
      )}
    </div>
  );
}

export default CloudFlareFile;
