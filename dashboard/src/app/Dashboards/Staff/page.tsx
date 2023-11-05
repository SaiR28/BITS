import { DashboardTable } from "@/app/Components/Table";
import Link from "next/link";


function InfoCard(props: any) {
  return (
    <div className="bg-pink-200 w-52 h-52 rounded p-4 grid">
      <h1 className="text-2xl font-bold">{props.name}</h1>
      <p className="text-6xl self-end text-end font-black">{props.value}</p>
    </div>
  );
}

export default function Page() {
  const Data:any=[
    ['ABC','XYZ','PQR',<Link key={1} href={'/'} className="text-blue-600">View</Link>],
    ['ABC','XYZ','PQR',<Link key={1} href={'/'} className="text-blue-600">View</Link>],
  
  ]
  const Headers:any=[
    'Doctors',
    'Department',
    'Patient Assigned',
    'Report',
  ]
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
