import { InfoCard } from "@/app/Components/InfoCard";




export default function Page(){

    return <div>
             

    <div className="flex gap-2">
       <InfoCard name='Heart Rate' value={65} />
        <InfoCard name='SpO₂' value={95} />
        <InfoCard name='Respiration' value={20} /> 
    </div>
 <div>
  
 </div>
 
</div>
}