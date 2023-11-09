import { DashboardTable } from "@/app/Components/Table";
import Link from "next/link";

export default function Page(){
    const Data: any = [
        [
          "ABC",
          "XYZ",
          "PQR",
          <Link key={1} href={"/"} className="text-blue-600">
            View
          </Link>,
        ],
        [
          "ddd",
          "fsf",
          "sdf",
          <Link key={2} href={"/"} className="text-blue-600">
            View
          </Link>,
        ],
      ];
      const Headers: any = ["Doctors", "Department", "Patient Assigned", "Report"];
    
    return<div>
              <DashboardTable Headers={Headers} Data={Data} />

    </div>
}