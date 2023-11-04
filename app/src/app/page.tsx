"use client"

import Link from "next/link"

function checkValidity(){
  fetch(`${process.env.SERVER_URL}`)
  // .then(response=>response.json())
  
}

export default function Home() {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <div className="bg-blue-200 p-2 h-72 w-64 rounded-lg flex flex-col justify-center gap-2">
      <div>
        <h1 className="text-2xl font-bold">Doctor Portal</h1>
        <p className="-mt-2">Login</p>
      </div>
      <div className="flex justify-between">Doctor ID : <input className="w-32 rounded"></input></div>
      {/* <button onClick={()=>checkValidity()} className="bg-blue-600 hover:bg-blue-700 p-1  rounded-lg w-24">Start</button> */}
      <Link href={'/DoctorPortal'} className="bg-blue-600 hover:bg-blue-700 p-1  rounded-lg w-24">Start</Link>
      </div>
      
    </main>
  )
}
