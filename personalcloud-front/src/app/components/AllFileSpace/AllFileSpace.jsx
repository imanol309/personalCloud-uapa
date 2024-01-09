"use client";
import "./AllFileSpace.css";
import { useState, useEffect, createContext } from "react";
import { SearchBox } from "../../ui/searchbox/SearchBox";
import { FileSpaces } from "../filespaces/FileSpaces";
import { UserButton, useUser } from "@clerk/nextjs";
import { GetUserId, getDataFileForUser } from "../../services/GetServices";
import { PostUser } from "../../services/PostServices";

export const UserContext = createContext();

function AllFileSpace() {
  const users = useUser();
  const [viewMode, setViewMode] = useState(true);
  const [dataFile, setDataFile] = useState(null);
  const [updateDate, setUpdateDate] = useState(true);
  const [hoverActivate, sethoverActivated] = useState(true);

  const toggleTheme = () => {
    setUpdateDate(!updateDate);
  }
  useEffect(() => {
    signPhp();
    console.log(updateDate);
  }, [users.user?.id, updateDate]);

  const convertToGrid = () => {
    setViewMode(true);
    sethoverActivated(true)
  };

  const convertToList = () => {
    setViewMode(false);
    sethoverActivated(false)
  };

  const signPhp = async () => {
    const bodyUser = {
      id: users?.user?.id,
      name: users?.user?.fullName,
      profile_img: users?.user?.imageUrl,
      profile_tips: "free",
      status: true,
    };
    const dataFiles = await getDataFileForUser(users?.user?.id);
    setDataFile(dataFiles.fileId.reverse());
    if (dataFiles.fileId?.lenght === undefined) {
      const usersId = await GetUserId(users.user?.id);
      if (usersId.users[0]?.lenght === undefined) {
        const userLogin = await PostUser(bodyUser);
        console.log("entroo", userLogin);
      } else {
        console.log("El usuario ya esta Logeado");
      }
    }
  };

  return (
    <UserContext.Provider value={{updateDate, toggleTheme}}>
      {" "}
      <div className="container__cloud">
        <div className="container__header">
          <SearchBox
            convertToGrid={convertToGrid}
            convertToList={convertToList}
            hoverActivate={hoverActivate}
          />
          <UserButton afterSignOutUrl="/" />
        </div>
        <FileSpaces viewMode={viewMode} dataFile={dataFile} />
      </div>
    </UserContext.Provider>
  );
}

export default AllFileSpace;
