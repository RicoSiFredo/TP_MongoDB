import { useEffect, useState } from "react"
import { get } from "./HTTP"
import { PieChart } from 'react-minimal-pie-chart';

export const TestComponent = ()=>{
    const [data, setData] = useState(null)
    useEffect(()=>{
        get("/coche").then((response)=>{
            setData(response);
        }).catch((error)=>{
            console.log(error)
        });
    },[]);
    let content;
    if(data){
        console.log(data)
        
        content = <div>
                <h2>Proportion de personne ayant coché la case 'ceci n'est pas un test'</h2>
                <div  
                    style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "25%",
                    padding: "1rem",
                }}>
                    
                    <PieChart
                    
                    data={
                        [
                            {title : "Coche", value : data[1]["value"], color: '#E38627'},
                            {title : "Non Coche", value : data[0]["value"], color: '#C13C37'}
                        ]
                    
                    }
                />
                </div>
            </div>
    }
    else{
        content = <div>Chargement...</div>
    }
    return content
}