import Sidebar from "@/components/layout/Sidebar";


export default function Ticket() {
  return (
    <div className="flex min-h-screen bg-gray-50">

      <h1 className="text-5xl">
        Ticket Page
      </h1>
      
       <div className="flex flex-1 pt-[80px]"> 
      <Sidebar />
      
    </div>
    </div>
  );
}