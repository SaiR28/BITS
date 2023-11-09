'use client'
import Link from "next/link";
import { usePathname  } from "next/navigation";
export function SideBar(props: any) {
  const path = usePathname()
  return (
    <div className="h-screen bg-blue-100 w-52 p-2">
      <h1 className="font-black text-2xl">λ Connect</h1>
      <div className="flex flex-col mt-2">
        {props.links.map((d: any) => {
          return (
            <Link key={d.name} className={`${(path==d.src)?'text-blue-500':''}`} href={d.src}>
              {d.name}
              
          
              
            </Link>
          );
        })}
      </div>
    </div>
  );
}
