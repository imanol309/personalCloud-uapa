"use client";
import { useFormState } from "react-dom";
import { uploadFile } from "../../utils/actionsUpload";
import { SubmitButton } from "../submitButton/SubmitButton";

const initialState = { message: null };

function CloudFlareFile() {
  const [state, formAction] = useFormState(uploadFile, initialState);

  return (
    <div>
      <form action={formAction} style={{display: "flex", flexDirection: "column", gap:"10px"}}>
        <input type="file" id="file" name="file" accept="images/*" />
        <SubmitButton />
      </form>
      {state?.status && (
        <div className={`state-message ${state?.status}`}>{state?.message}</div>
      )}
    </div>
  );
}

export default CloudFlareFile;
