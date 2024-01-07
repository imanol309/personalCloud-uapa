import "./myCloud.css";
import NavBarDash from "../../components/navBarDash/NavBarDash";
import AllFileSpace from "../../components/AllFileSpace/AllFileSpace";
import CloudFlareFile from "../../components/cloudFlareFile/CloudFlareFile";

function Dashboard() {
  return (
    <div className="container__dashboard">
      <NavBarDash />
      <AllFileSpace />
      {/* <div className="container__cloud">
        <CloudFlareFile />
        <UserButton afterSignOutUrl="/" />
      </div> */}
    </div>
  );
}

export default Dashboard;
