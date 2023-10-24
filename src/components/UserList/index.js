import { useNavigate } from "react-router"
import "./index.css"
export const UserList = ({data})=>{
    const navigate = useNavigate();
    return (
        <div style={{width:"100%"}}>
                <h1 style={{textAlign:"center",color:"white"}}>Registered Users For the Event</h1>
                <table style={{width:"50%",textAlign:"center",margin:"auto"}}>
                    <thead>
                        <tr>
                            <th>Full Name</th>
                            <th>Registration Time</th>
                            <th>Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.fullName}</td>
                                <td>{item.timeStamp}</td>
                                <td><button className="show_details"  onClick={()=>{
                                    navigate(`/${item.id}`)
                                }}>Show Details</button></td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        
    )
}