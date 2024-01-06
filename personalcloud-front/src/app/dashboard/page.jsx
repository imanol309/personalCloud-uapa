import "./dashboard.css";
import NavBarDash from "../components/navBarDash/NavBarDash";
import AllFileSpace from "../components/AllFileSpace/AllFileSpace";

function Dashboard() {
  return (
    <div className="container__dashboard">
      <NavBarDash />
      <AllFileSpace />
    </div>
  );
}

export default Dashboard;
