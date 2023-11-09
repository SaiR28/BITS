import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SideBar } from "../../Components/SideBar";
import { NavBar } from "../../Components/NavBar";

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
  const links: any = [
    { name: "Dashboard", src: "/Dashboards/Staff" },
    { name: "Add Patient", src: "/Dashboards/Staff/AddPatient" },
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex">
          <SideBar links={links} />
          <div className="w-[calc(100vw-13rem)]">
            <div className="h-16">
              <NavBar />
            </div>
            <div className="p-3">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
