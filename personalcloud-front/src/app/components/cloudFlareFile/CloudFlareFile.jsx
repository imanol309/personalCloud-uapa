"use client";
import { useFormState } from "react-dom";
import { uploadFile } from "../../utils/actionsUpload";
import { SubmitButton } from "../submitButton/SubmitButton";
import "./CloudFlareFiel.css";
import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { PostFile } from "../../services/PostServices";
import { useContext } from "react";
const initialState = { message: null };
import {UserContext} from '../AllFileSpace/AllFileSpace';

function CloudFlareFile() {
  const {updateDate, toggleTheme} = useContext(UserContext);
  const users = useUser();
  const [state, formAction] = useFormState(uploadFile, initialState);


  const handleButtonClick = () => {
    toggleTheme();
  };
  const updateFile = async () => {
    const body = {
      name_file: state?.data?.name,
      type: state?.data?.type,
      link: state?.data?.url,
      user_id: users?.user?.id,
    };
    const data = await PostFile(body);
    if(data) {
      handleButtonClick()
    }
  };

  useEffect(() => {
    if (state.status === "success") {
      updateFile();
    }
  }, [state?.change]);
  
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
        <div className={`state-message ${state?.status}`}>{state?.message}</div>
      )}
    </div>
  );
}

export default CloudFlareFile;
