"use client";
import "./AllFileSpace.css";
import { useState, useEffect } from "react";
import { SearchBox } from "../../ui/searchbox/SearchBox";
import { FileSpaces } from "../filespaces/FileSpaces";
import { UserButton, useUser } from "@clerk/nextjs";
import { GetFiles, GetFilesId } from "../../services/GetServices";

function AllFileSpace() {
  const users = useUser();
  const [viewMode, setViewMode] = useState(true);
  const [dataFile, setDataFile] = useState(null);
  const [hoverActivatedGrid, sethoverActivatedGrid] = useState(true);
  const [hoverActivatedlist, sethoverActivatedlist] = useState(false);

  useEffect(() => {
    
    signPhp();

  }, [users.user?.id]);

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
    const dataFile = await GetFilesId("user_2aEE3bGZaSlzbKHcQHdGHrFRbiN");
    if(dataFile !== null) {
      setDataFile(dataFile)
      console.log("entro")
    } else {
      console.log("nadaaa")
    }
  };

  console.log(
    users.user?.id,
    users.user?.fullName,
    users.user?.imageUrl,
    users.user?.primaryEmailAddress?.emailAddress
  );

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
      <FileSpaces viewMode={viewMode} />
    </div>
  );
}

export default AllFileSpace;
