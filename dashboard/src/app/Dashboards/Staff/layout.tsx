import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "../../Components/SideBar";
import { NavBar } from "../../Components/NavBar";
import { useEffect } from "react";

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
  const links: any = [
    { name: "Dashboard", src: "/Dashboards/Staff" },
    { name: "Add Patient", src: "/Dashboards/Staff/AddPatient" },
  ];

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar links={links} />
          <div className="w-[calc(100vw-13rem)]">{children}</div>
        </div>
      </body>
    </html>
  );
}
