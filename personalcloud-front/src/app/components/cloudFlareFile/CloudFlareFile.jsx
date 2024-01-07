"use client";
import { useFormState } from "react-dom";
import { uploadFile } from "../../utils/actionsUpload";
import { SubmitButton } from "../submitButton/SubmitButton";
import { Toaster, toast } from "sonner";
import "./CloudFlareFiel.css"
const initialState = { message: null };

function CloudFlareFile() {
  const [state, formAction] = useFormState(uploadFile, initialState);

  return (
    <div>
      <form
        action={formAction}
        style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}
      >
        <input type="file" id="file" name="file" accept="images/*" className="picture-file" />
        <SubmitButton funct={() => toast.success(state?.message)} />
      </form>
      {state?.status && (
        <Toaster position="top-right" expand={false} richColors />
      )}
    </div>
  );
}

export default CloudFlareFile;
