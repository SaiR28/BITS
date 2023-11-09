
import { InfoCard } from "@/app/Components/InfoCard";
import { DashboardTable } from "@/app/Components/Table";
import Link from "next/link";


export default function Page() {
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
      <Link key={2} href={"/Public/MedicalReport.pdf"} className="text-blue-600">
        View
      </Link>,
    ],
  ];
  const Headers: any = ["Doctors", "Department", "Patient Assigned", "Report"];

  return (
    <>
      <div className="flex gap-2">
        <InfoCard name="Total Doctors" value={105} />
        <InfoCard name="Total Patients" value={876} />
        <InfoCard name="Total Staff" value={246} />
      </div>
      <DashboardTable Headers={Headers} Data={Data} />
    </>
  );
}
