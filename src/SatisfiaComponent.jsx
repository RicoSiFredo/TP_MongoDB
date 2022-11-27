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
    const COLOR_LIST = ["#ea580c", "#ca8a04", "#059669", "#0284c7", "#4f46e5", "#4B0082", "#9400D3"];
    if(data){
        for(let i = 0; i < data.length; i++){
            sum += data[i].value.personne;
        }
        content = <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
            }}
        >
            <h2>
                Transport par taux d'utilisation
            </h2>
            <div
                style={{
                    width: "100%",
                    display: "flex",
                    direction: "column",
                }}
            >
                {data.map((elem, index)=>{
                    return <div 
                        key={index}
                        style={{
                            padding: "1rem",
                            gap: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            color: "white",
                            backgroundColor: COLOR_LIST[index],
                            width: (elem.value.personne/sum*100) + "%",
                        }}    
                    >
                        <h3>
                            {elem._id}
                        </h3>
                        <p>
                            {(elem.value.personne/sum*100).toFixed(0) + "%"}
                        </p>
                    </div>
                })}
            </div>
            <h5>Base : {sum} éléments</h5>
            <h2>
                Transport par taux de satisfaction

            </h2>
            <div
                style={{
                    width: "100%",
                    marginTop: "1rem",
                    display: "flex",
                    direction: "column",
                    height: "20rem",
                    alignItems: "end",
                    gap: "1rem",
                }}
            >
                {data.map((elem, index)=>{
                    
                    return <div 
                        key={index}
                        style={{
                            padding: "1rem",
                            gap: "1rem",
                            display: "flex",
                            flexDirection: "column",
                            color: "white",
                            backgroundColor: COLOR_LIST[index],
                            height: (elem.value.satisfia/5*100) + "%",
                        }}    
                    >
                        <h3>
                            {elem._id}
                        </h3>
                        <p>
                            {(elem.value.satisfia).toFixed(1) + "/5"}
                        </p>
                    </div>
                })}
            </div>
            <h5>Base : {sum} éléments</h5>
        </div>
    }
    else{
        content = <div>Chargement...</div>
    }
    return content
}