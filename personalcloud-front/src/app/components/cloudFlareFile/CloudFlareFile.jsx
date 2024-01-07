"use client";
import { useFormState } from "react-dom";
import { uploadFile } from "../../utils/actionsUpload";
import { SubmitButton } from "../submitButton/SubmitButton";
import { Toaster, toast } from "sonner";

const initialState = { message: null };

function CloudFlareFile() {
  const [state, formAction] = useFormState(uploadFile, initialState);

  return (
    <div>
      <form
        action={formAction}
        style={{ display: "flex", gap: "10px" }}
      >
        <input type="file" id="file" name="file" accept="images/*" />
        <SubmitButton funct={() => toast.success(state?.message)} />
      </form>
      {state?.status && (
        // <div className={`state-message ${state?.status}`}>{state?.message}</div>
        <Toaster position="top-right" expand={false} richColors />
      )}
    </div>
  );
}

export default CloudFlareFile;
