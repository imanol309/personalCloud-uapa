"use client";
import "./AllFileSpace.css";
import { useState, useEffect } from "react";
import { SearchBox } from "../../ui/searchbox/SearchBox";
import { FileSpaces } from "../filespaces/FileSpaces";
import { UserButton, useUser } from "@clerk/nextjs";
import { GetUserId, getDataFileForUser } from "../../services/GetServices";
import { PostUser } from "../../services/PostServices";

function AllFileSpace() {
  const users = useUser();
  const [viewMode, setViewMode] = useState(true);
  const [dataFile, setDataFile] = useState(null);
  const [hoverActivatedGrid, sethoverActivatedGrid] = useState(true);
  const [hoverActivatedlist, sethoverActivatedlist] = useState(false);

  useEffect(() => {
    signPhp();
  }, [users?.user?.id]);

  const convertToGrid = () => {
    setViewMode(true);
    sethoverActivatedGrid(true);
    sethoverActivatedlist(false);
  };

  const convertToList = () => {
    setViewMode(false);
    sethoverActivatedGrid(false);
    sethoverActivatedlist(true);
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
    if (dataFiles.fileId.lenght > 0) {
      setDataFile(dataFiles.fileId);
    } else {
      const usersId = await GetUserId(users.user?.id);
      if (usersId.users[0] === undefined) {
        console.log(usersId.users[0])
        const userLogin = await PostUser(bodyUser)
        console.log(userLogin)
      } else {
        console.log("El usuario esta Logeado");
      }
    }
  };

  return (
    <div className="container__cloud">
      <div className="container__header">
        <SearchBox
          convertToGrid={convertToGrid}
          convertToList={convertToList}
          hoverActivatedGrid={hoverActivatedGrid}
          hoverActivatedlist={hoverActivatedlist}
        />
        <UserButton afterSignOutUrl="/" />
      </div>
      <FileSpaces viewMode={viewMode} dataFile={dataFile} />
    </div>
  );
}

export default AllFileSpace;
