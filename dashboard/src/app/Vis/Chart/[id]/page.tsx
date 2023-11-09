"use client";
import { NavBar } from "@/app/Components/NavBar";
import { Chart } from "@/app/Components/chart";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <Chart title={params.id} />
    </div>
  );
}
