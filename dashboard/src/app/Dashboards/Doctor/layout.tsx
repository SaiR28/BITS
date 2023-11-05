import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "../../Components/SideBar";
import { NavBar } from "../../Components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "",
  description: "",
};

// function NavBar() {
//   return (
//     <div
//       className={`bg-blue-100  flex p-2 gap-2  items-center justify-between h-full`}
//     >
//       <div>SearchBar</div>
//       <div>Profile</div>
//     </div>
//   );
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar links={[{name:'Dashboard',src:'/Dashboards/Doctor'}]}/>
          <div className="w-[calc(100vw-13rem)]">
            <div className="h-16">
            <NavBar user={'Dr. Abel'}/>
            </div>
            <div className="p-3">
            {children} 

            </div>
          </div>
        
        </div>
          
      </body>
    </html>
  );
}
