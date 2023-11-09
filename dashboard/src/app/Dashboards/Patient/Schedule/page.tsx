import { DashboardTable } from "@/app/Components/Table";
import { Grid } from "@mui/material";
import Link from "next/link";

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

export default function Page() {
  const Data: any = [
    [
      "10 Jan 23",
      "10:00 AM",
      "Paracetamol",
      "take the medication only if you have fever",

    ],
    [
      "12 Jan 23",
      "All Day",
      "Therapy",
      "Don't Forget to bring a book and a pen",
   
    ],
  ];
  const Headers: any = ["Date","Time", "Event", "Notes"];

return<div>
          <DashboardTable Headers={Headers} Data={Data} />

</div>
}
