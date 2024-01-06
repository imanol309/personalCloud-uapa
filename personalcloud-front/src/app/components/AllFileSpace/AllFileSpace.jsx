"use client";
import { useState } from "react";
import { SearchBox } from "../../ui/searchbox/SearchBox"
import { FileSpaces } from "../filespaces/FileSpaces";
import { UserButton } from "@clerk/nextjs";
import './AllFileSpace.css'

function AllFileSpace() {
  const [viewMode, setViewMode] = useState(true);
  const [hoverActivatedGrid, sethoverActivatedGrid] = useState(true);
  const [hoverActivatedlist, sethoverActivatedlist] = useState(false);


  const convertToGrid = () => {
    setViewMode(true);
    sethoverActivatedGrid(true)
    sethoverActivatedlist(false)
  };

  const convertToList = () => {
    setViewMode(false);
    sethoverActivatedGrid(false)
    sethoverActivatedlist(true)
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
      <FileSpaces viewMode={viewMode} />
    </div>
  );
}

export default AllFileSpace;
