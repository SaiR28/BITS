import { InfoCard } from "@/app/Components/InfoCard";
import { DashboardTable } from "@/app/Components/Table";

export default function Page() {
  const Data: any = [
    [
      "Aaron",
      2,
      <span key={0} className="flex gap-1 p-1">
        <span>
          <button className="bg-blue-400 hover:bg-blue-500 w-12 ">Yes</button>
        </span>
        <span>
          <button className="bg-blue-400 hover:bg-blue-500 w-12 ">No</button>
        </span>
      </span>,
    ],
    [
      "Adam",
      2,
      <span key={0} className="flex gap-1 p-1">
        <span>
          <button className="bg-blue-400 hover:bg-blue-500 w-12 ">Yes</button>
        </span>
        <span>
          <button className="bg-blue-400 hover:bg-blue-500 w-12 ">No</button>
        </span>
      </span>,
    ],
  ];
  const Headers: any = ["Patient Name", "Data", "Request Emergency"];

  return (
    <div>
      <div className="flex gap-2">
        <InfoCard name="Total" value={100} />
        <InfoCard name="Mild" value={30} />
        <InfoCard name="OK" value={10} />
      </div>
      <div>
        <DashboardTable Headers={Headers} Data={Data} />
      </div>
    </div>
  );
}
