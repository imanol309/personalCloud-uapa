import "./dashboard.css"
import { UserButton } from "@clerk/nextjs";

function Dashboard() {
  return (
    <div className="container">
      <h1>Dashboard</h1>
      <div>
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}

export default Dashboard;
