"use client";
import { useFormState } from "react-dom";
import { uploadFile } from "../../utils/actionsUpload";
import { SubmitButton } from "../submitButton/SubmitButton";
// import { Toaster, toast } from "sonner";
import "./CloudFlareFiel.css";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { PostFile } from "../../services/PostServices";

const initialState = { message: null };

function CloudFlareFile() {
  const users = useUser();
  const [state, formAction] = useFormState(uploadFile, initialState);

  const updateFile = async () => {
    const body = {
      name_file: state?.data?.name,
      type: state?.data?.type,
      link: state?.data?.url,
      user_id: users?.user?.id,
    };
    const data = await PostFile(body);
    console.log(data);
  };

  useEffect(() => {
    if (state.status === "success") {
      updateFile();
    }
  }, [state?.status]);
  
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
