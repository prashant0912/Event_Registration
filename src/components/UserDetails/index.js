import { useEffect, useState } from "react";
import { useParams } from "react-router"
import "./index.css"
export const UserDetail = () => {
    const [data, setData] = useState(()=>{
        let retString = localStorage.getItem("key");
        let retArray = JSON.parse(retString);
        return retArray
    })
    const [val, setVal] = useState([]);
    console.log(val)
    const { id } = useParams();
    console.log(id);

    console.log(data)
    const filter = () => {
        const filteredItems = data.filter((item)=>{
            if(item.id == id){
                return item
            }
        })
        setVal(filteredItems);
       
    }
    console.log("Test",val)

    useEffect(() => {
        if(data){
            filter()
        }  
    }, [])
    return (
        <div  className="details">
            <h1 style={{textAlign:"center"}}>User Details</h1>
            <h1 > Name:<span style={{color:"green"}}>{val[0]?.fullName}</span></h1>
            <h1 className="">Email:<span style={{color:"green",fontSize:"4vh"}}>{val[0]?.email}</span></h1>
            <h1 className="">Phone:<span style={{color:"green"}} >{val[0]?.phone}</span></h1>
            <h1 className="">Description:<span style={{color:"green"}}>{val[0]?.description}</span></h1>
        </div>
    )
}