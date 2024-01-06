"use client";
import { useState } from "react";
import { SearchBox } from "../../ui/searchbox/SearchBox"
import { FileSpaces } from "../filespaces/FileSpaces";
import { UserButton } from "@clerk/nextjs";
import './AllFileSpace.css'

function AllFileSpace() {
  const [viewMode, setViewMode] = useState(true);

  const convertToGrid = () => {
    setViewMode(true);
  };

  const convertToList = () => {
    setViewMode(false);
    console.log("ldld");
  };
  return (
    <div className="container__cloud">
      <div className="container__header">
        <SearchBox
          convertToGrid={convertToGrid}
          convertToList={convertToList}
        />
        <UserButton afterSignOutUrl="/" />
      </div>
      <FileSpaces viewMode={viewMode} />
    </div>
  );
}

export default AllFileSpace;
