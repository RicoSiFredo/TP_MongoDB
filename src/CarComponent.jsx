import { useEffect, useState } from "react"
import { get } from "./HTTP"
import { PieChart } from 'react-minimal-pie-chart';

export const CarComp = ()=>{
    const [data, setData] = useState(null)
    useEffect(()=>{
        get("/car_covoiture").then((response)=>{
            setData(response);
        }).catch((error)=>{
            console.log(error)
        });
    },[]);
    let content;
    if(data){
        console.log(data)
        


        content = <div>

            <h2>
                Proportion des personnes qui viennent en voiture et font du covoiturage.
            </h2>

                <div                    
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "25%",
                    padding: "1rem",
                }}
                >
                <PieChart
                    
                    data={
                        [
                            {title : data[1]["_id"], value : data[1]["value"], color: '#E38627'},
                            {title : data[0]["_id"], value : data[0]["value"], color: '#C13C37'}
                        ]
                    }
                />
                </div>

                <div>
                    <div style={{
                        display: "flex",
                        justifyItems: "center",
                        gap: "0.25rem",
                        alignItems: "center",
                    }}>
                        <div style={{backgroundColor:"#C13C37", width:"20px", height: "20px"}}></div>
                        <h5>{data[0]["_id"]} : {data[0]["value"]}</h5>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyItems: "center",
                        gap: "0.25rem",
                        alignItems: "center",
                    }}>
                        <div style={{backgroundColor:"#E38627", width:"20px", height: "20px"}}></div>
                        <h5>{data[1]["_id"]} : {data[1]["value"]}</h5>
                    </div>
                    <h6>Base : {data[0]["value"] + data[1]["value"]} éléments</h6>
                </div>
            </div>
    }
    else{
        content = <div>Chargement...</div>
    }
    return content
}