

function InfoCard(props: any) {
    return (
      <div className="bg-pink-200 w-52 h-52 rounded p-4 grid">
        <h1 className="text-2xl font-bold">{props.name}</h1>
        <p className="text-6xl self-end text-end font-black">{props.value}</p>
      </div>
    );
  }

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