import { useEffect, useState } from "react"
import { get } from "./HTTP"

export const SatisfiaComponent = ()=>{
    const [data, setData] = useState(null)
    useEffect(()=>{
        get("/satisfia").then((response)=>{
            setData(response);
        }).catch((error)=>{
            console.log(error)
        });
    },[]);
    let content;
    let sum = 0;
    if(data){
        for(let i = 0; i < data.length; i++){
            sum += data[i].value;
        }
        content = <div
            style={{
                width: "100%",
                display: "flex",
                direction: "column",
            }}
        >
            {data.map((elem, index)=>{
                return <div key={index}>{elem}</div>
            })}
        </div>
    }
    else{
        content = <div>Chargement...</div>
    }
    return content
}