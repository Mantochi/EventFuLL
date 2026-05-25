import Sidebar from "@/components/layout/Sidebar";
import DashboardLayout from "@/components/layout/DashboardLayout";
import DashboardHeader from "@/components/layout/DashboardHeader";

export default function  Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <DashboardHeader />
       <div className="flex flex-1 pt-[80px]"> 
      <Sidebar />
      <DashboardLayout />
    </div>
    </div>
  );
}
