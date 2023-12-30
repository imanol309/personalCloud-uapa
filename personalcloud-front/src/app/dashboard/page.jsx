import "./dashboard.css";
import { UserButton } from "@clerk/nextjs";
import NavBarDash from "../components/navBarDash/NavBarDash";

function Dashboard() {
  return (
    <div className="container__dashboard">
      <NavBarDash />
      <div className="container__cloud">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Dashboard;
