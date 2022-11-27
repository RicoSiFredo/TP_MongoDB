import { useEffect, useState } from "react"
import { get } from "./HTTP"

export const FiliereCompononent = ()=>{
    const [data, setData] = useState(null)
    useEffect(()=>{
        get("/filiere").then((response)=>{
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
                Distribution des réponses par filières
            </h2>

                {data.map((elem, index)=>{
                    return <div key={index}
                    style={{
                        display: "flex",
                        gap: "1rem",
                        paddingLeft: "1rem",
                    }}
                    >   
                        <h3>{elem._id}</h3>
                        <p>{elem.value}</p>
                        
                    </div>
                })}
            </div>
    }
    else{
        content = <div>Chargement...</div>
    }
    return content
}