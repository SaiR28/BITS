import { Table,DefaultButton } from "@fluentui/react-components";
// import { DefaultButton } from "@fluentui/react";

import { NavBar } from "../Components/NavBar";
import { SideBar } from "../Components/SideBar";

function InfoCard(props:any){
    return<div className="bg-purple-100 w-64 h-48 rounded">
        <h1>{props.value}</h1>
        <h1>{props.name}</h1>
    </div>
}


const tableColumns = [
    { key: 'column1', name: 'Patient Name', fieldName: 'patientName', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column2', name: 'Data', fieldName: 'data', minWidth: 100, maxWidth: 200, isResizable: true },
    { key: 'column3', name: 'Request Emergency', fieldName: 'requestEmergency', minWidth: 100, maxWidth: 200, isResizable: true },
  ];
  
  const tableItems = [
    { patientName: 'ABC', data: 'SpO2 -92', requestEmergency: <DefaultButton>Yes</DefaultButton> },
    // Add more rows as needed
  ];

  
export default function DoctorPortal(){
    return<div>
        <div className="flex gap-2">
           <InfoCard name='Critical' value={10} />
            <InfoCard name='Mild' value={10} />
            <InfoCard name='OK' value={10} /> 
        </div>
     <div>
        {/* <table className="mt-2">
            <tr>
                <th>Patient Name</th>
                <th>Data</th>
                <th>Request Emergency</th>
            </tr>
            <tr>
            <td>ABC</td>
            <td>SpO2 -92</td>
            <td>Yes | NO</td>
            </tr>
         
        </table> */}
        <Table
      items={tableItems}
      columns={tableColumns}
      responsiveMode="constrained"
      isHeaderVisible={true}
      layoutMode={Table.ConstrainMode.unconstrained}
    />
     </div>
     
    </div>
}