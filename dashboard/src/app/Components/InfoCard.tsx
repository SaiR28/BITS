"use client";

import anime from "animejs";
import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";
import { IcBaselineOpenInNew } from "./icons";

export function InfoCard(props: any) {
  const [_value, setValue] = useState(0);
  let i = {
    value: 0,
  };
  useEffect(() => {
    anime({
      targets: i,
      value: props.value,
      easing: "linear",
      round: 1,
      duration: 400,
      update: function () {
        setValue(i.value);
      },
    });
  });
  return (
  
    <Link href={`/Vis/Chart/${(props.name).replace(' ','')}`} className="border border-1 border-gray-200 transition group hover:border-blue-500 hover:bg-blue-500/10 w-52 h-52 aspect-square rounded p-4 grid">

        <div className="flex w-full justify-between items-center h-9 ">
          <h1 className="">{props.name}</h1>
          
            <IcBaselineOpenInNew className="text-xl group-hover:text-blue-600" />
        
        </div>
        <p className="text-6xl self-end text-end font-black">{_value}</p>

     </Link>
  );
}



