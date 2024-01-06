'use client';
import './dashboard.css';
import { UserButton } from '@clerk/nextjs';
import NavBarDash from '../components/navBarDash/NavBarDash';
import { SearchBox } from '../ui';
import { FileSpaces } from '../components';
import { useState } from 'react';

function Dashboard() {
  const [viewMode, setViewMode] = useState(true);

  const convertToGrid = () => {
    setViewMode(true);
  };

  const convertToList = () => {
    setViewMode(false);
  };

  return (
    <div className="container__dashboard">
      <NavBarDash />
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
    </div>
  );
}

export default Dashboard;
