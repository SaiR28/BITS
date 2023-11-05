

export function DashboardTable(props:any){

console.log(props.Data)
    return <table className="mt-3">
    <tbody>
      <tr>
        {
        props.Headers.map((d:string[])=>{
          return <th key={props.Headers.indexOf(d)}>{d}</th>
        })
        }
      </tr>
     {
      props.Data.map((d:any)=>{
        return <tr key={d}>
          {d.map((content:string)=>{
            return<td key={d.indexOf(content)}>{content}</td>
          })}
        </tr>
      })
     }
     
    </tbody>
  </table>
}