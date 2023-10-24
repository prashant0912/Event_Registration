import './style.css';
import { useState } from 'react';
import { UserList } from '../UserList';

export const RegistrationForm = () => {

    const date = new Date(Date.now());
    const [error, setError] = useState();
    
    const monthNames = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    const validate = (values) => {
       
        console.log(values)
        var errors = {};
        if (!values.fullName) {
            errors.fullName = "Please Enter name"
        }
        if (!values.phone) {
            errors.phone = "Please Enter Phone no."
        }
        if (!values.email) {
            errors.email = "Please Enter Email."
        }
        if (values.email) {
            if (!values.email?.includes("@")) {
                errors.email = "Please Enter Valid Email"
            }
        }

        if (!values.description) {
            errors.description = "Please Enter Description"
        }

        if (values.phone?.length < 10 || values.phone?.length > 13) {
            errors.check = " Enter Valid Phone Number"
        }


        console.log(errors)
        setError(errors)


    }
    const [formdata, setFormdata] = useState({})
    const [data, setData] = useState(() => {
        let retString = localStorage.getItem("key");
        let retArray = JSON.parse(retString)
        return retArray || []
    });

    console.log(data)
    const handleChange = (e) => {

        const { name, value } = e.target;

        setFormdata({
            ...formdata,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        validate(formdata);
        console.log(formdata)
        if (formdata.fullName && formdata.email && formdata.phone && formdata.description) {
            var newdata = [...data, { ...formdata, timeStamp: `${day} ${month} ${year} ${hours}:${minutes}:${seconds}`, id: (data.length) + 1 }]
            let string = JSON.stringify(newdata);
            localStorage.setItem("key", string);
            alert("User Registered Successfully")
            let retString = localStorage.getItem("key");
            let retArray = JSON.parse(retString)
            setData(retArray);

        }


    }

    return (
        <div className="check" >
            <div className="box">
                <h1 className="head">Event Registration</h1>
                <form onSubmit={(e)=>{
                    handleSubmit(e)
                }}>
                    <div className="form">
                        <div>
                            <label>Full Name </label>:
                            <input
                                name="fullName"
                                type="text"
                                onChange={handleChange} />
                            <p style={{ color: "red", fontSize: "15px", paddingLeft: "10px" }}>{error?.fullName}</p>
                        </div>
                        <div >
                            <label>Email </label>:
                            <input
                                name="email"
                                type="email"
                                onChange={handleChange} />
                            <p style={{ color: "red", fontSize: "15px", paddingLeft: "10px" }}>{error?.email}</p>
                            <p style={{ color: "red", fontSize: "15px", paddingLeft: "10px" }}>{error?.valid}</p>
                        </div>

                        <div style={{ marginTop: "5%" }}>
                            <label>Contact </label>:
                            <input
                                name="phone"
                                type="number"
                                onChange={handleChange} />
                            <p style={{ color: "red", fontSize: "15px", paddingLeft: "10px" }}>{error?.phone}</p>
                            <span style={{ color: "red", fontSize: "15px" }}>{error?.check}</span>
                        </div>

                        <div style={{ marginTop: "5%" }}>
                            <label>Description </label>:
                            <input
                                name="description"
                                type="text"
                                onChange={handleChange} />
                            <p style={{ color: "red", fontSize: "15px", paddingLeft: "10px" }}>{error?.description}</p>

                        </div>

                    </div>
                    <div className="submit"><button type="submit" className="submit_button">Submit</button></div>
                </form>
            </div>
            <UserList data={data} />
        </div>
    )
}