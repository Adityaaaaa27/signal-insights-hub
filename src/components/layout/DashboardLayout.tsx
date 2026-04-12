import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopNav from "./TopNav";

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-surface">
      <Sidebar />
      <TopNav />
      <main className="ml-72 pt-24 px-8 pb-12">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;
