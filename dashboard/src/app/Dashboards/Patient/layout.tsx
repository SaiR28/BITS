import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "../../Components/SideBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const links:any=[
    {name:'Dashboard',src:'/Dashboards/Patient'},
    {name:'Diagnosis',src:'/Dashboards/Patient/Diagnosis'},
    {name:'Treatment',src:'/Dashboards/Patient/Treatment'},
    {name:'Healthcare Visit',src:'/Dashboards/Patient/HealthcareVisit'},
    {name:'My Schedule',src:'/Dashboards/Patient/MySchedule'},
  ]
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex ">
          <SideBar links={links}/>
          <div className="w-[calc(100vw-13rem)]">
    
            
            {children} 

         
          </div>
        
        </div>
          
      </body>
    </html>
  );
}
