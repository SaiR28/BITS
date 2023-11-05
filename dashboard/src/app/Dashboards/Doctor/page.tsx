import { DashboardTable } from "@/app/Components/Table";

function InfoCard(props: any) {
    return (
      <div className="bg-zinc-200 w-52 h-52 rounded p-4 grid">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p className="text-6xl self-end text-end font-black">{props.value}</p>
      </div>
    );
  }
  

  
  export default function Page(){
  const Data:any=[
    [1,2,4],
    [1,2,4]
  ]
  const Headers:any=[
    'Patient Name',
    'Data',
    'Request Emergency',
  ]
    return <div>
    <div className="flex gap-2">
       <InfoCard name='Total' value={10} />
        <InfoCard name='Mild' value={10} />
        <InfoCard name='OK' value={10} /> 
    </div>
 <div>
  <DashboardTable Headers={Headers} Data={Data}/>
 </div>
 
</div>
}