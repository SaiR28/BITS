'use client'
import { InfoCard } from "@/app/Components/InfoCard";
import { NavBar } from "@/app/Components/NavBar";
import { useEffect, useState } from "react";




export default function Page(){
    const [user,setUser]=useState('')
    useEffect(()=>{
        setUser(String(localStorage.getItem('user')))
    },[user])
    return <div>
                <div className="h-16">
                      <NavBar user={user}/>
                
            </div>

    <div className="flex gap-2 p-3">
       <InfoCard name='Heart Rate' value={65} />
        <InfoCard name='SpO₂' value={95} />
        <InfoCard name='Respiration' value={20} /> 
    </div>
 <div>
  
 </div>
 
</div>
}