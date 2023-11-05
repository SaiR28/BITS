

export function DashboardTable(props:any){

console.log(props.Data)
    return <table className="mt-3">
    <tbody>
      <tr>
        {
        props.Headers.map((d:string[])=>{
          return <th key={d[0]}>{d}</th>
        })
        }
      </tr>
     {
      props.Data.map((d:any)=>{
        return <tr key={d}>
          {d.map((content:string)=>{
            return<td key={content}>{content}</td>
          })}
        </tr>
      })
     }
     
    </tbody>
  </table>
}