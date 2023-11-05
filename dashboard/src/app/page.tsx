import Link from "next/link";
import { SVGProps } from "react";




function IcOutlineOpenInNew(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3h-7z"></path></svg>
  )
}


export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen bg-sky-200">
      <div className="bg-blue-400 w-72 rounded-3xl  p-5 flex flex-col items-center -mt-16">
        <h1 className="text-3xl font-black p-4">Login</h1>
        <div className="mt-3 w-64 flex flex-col items-center gap-1.5">
          <input
            className="w-full h-8  indent-3 rounded-xl "
            placeholder="ID"
            type="text"
          />
          <input
            className="w-full h-8  indent-3 rounded-xl "
            placeholder="Password"
            type="password"
          />
        </div>
        <div className="mt-4">
          {/* <button className="p-2 bg-blue-600 w-64">
            Login
          </button> */}
          <Link href={'/Doctor'} className="p-2 block bg-blue-600 hover:bg-blue-700 w-64 rounded-xl font-bold text-white">
            Login
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 bg-zinc-300 p-4  w-80 rounded-t-2xl">
        Temporary Navigation <span className="italic text-gray-800/70 text-sm">(Will Be Changed once Backend Integrated)</span>
        <div className="flex flex-col mt-4">
        <Link href={'/Dashboards/Doctor'} className="underline text-blue-500 flex gap-1 items-center hover:text-blue-700">
            Doctor Page <IcOutlineOpenInNew/>
          </Link>
        <Link href={'/Dashboards/Staff'} className="underline text-blue-500 flex gap-1 items-center hover:text-blue-700">
            Staff Page <IcOutlineOpenInNew/>
          </Link>
        <Link href={'/Dashboards/Patient'} className="underline text-blue-500 flex gap-1 items-center hover:text-blue-700">
            Patient Page <IcOutlineOpenInNew/>
          </Link>
        </div>
      </div>
    </main>
  );
}
