import React, { useState } from 'react'


import { DatePickerComponent, TimePickerComponent } from "@syncfusion/ej2-react-calendars";

function PostLeadStatusDetails({ agent }) {


        const [user , setUser ] = useState({

            firstname: agent.firstname,
            lastname: agent.lastname, 
            email: agent.email,
            phonenumber: agent.phonenumber, 
            interestedcourse: agent.interestedcourse, 
            collegename: agent.collegename,
            status: agent.status, 
            date: agent.date, 
            time: agent.time, 
            notes: agent.notes
    })


    let name, value;

    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;
        console.log(name, value);

        setUser({...user, [name]: value});
    }


    const PostData = async (e) => {
        e.preventDefault();

        const {  firstname, lastname, email, phonenumber, interestedcourse, collegename, status, date, time, notes } = user;

        const res = await fetch(`/leads/postleadstatus/${agent._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                 firstname, lastname, email, phonenumber, interestedcourse, collegename, status, date, time, notes 
            })
        });

        const data = await res.json();
        if(data.status === 422 || !data ){
            window.alert("Update failed");
        } else {
            window.alert("Updated successfully");
        
        }
    }


  return (

    <div>

{
    console.log("agent in new component:",agent)
    
}


{
    console.log("id: ", agent._id)
}

    <div className='pls-head'>
        <h5>
            Update lead status here.
        </h5>
    </div>

    <form method='PUT' >

         <div className={'pls-top-section'}>
                <div className={"row"}>
                    <div className={'topbar'}>
                        <div className={"col"}>
                            <i className="zmdi zmdi-account-circle" style={{color: "bisque", fontSize: "1.8rem", marginRight: '40%'}}>  </i>
                            <p style={{  fontSize: "1rem", marginLeft: "20%" , width: "10vw", marginTop: "-2.9vh" }}> &nbsp;&nbsp; &nbsp; Lead Status&nbsp; -  </p>
                        </div>
                    <div className={"col"}>
                        <p style={{ display:"flex", color: "darkblue" , width: "10vw",  fontSize: "0.8rem", marginLeft: "8%", marginTop: "0.5vh" }}> {user.status} </p>  {/*add status dynamically {status} from backend*/}
                    </div>

                    <div className={"col"}>
                        <button className={'btn-secondary'} style={{ borderRadius: "50%", padding: "0.3%", marginLeft: "850%", width: "140%", padding: "8%"}} onClick={PostData}> Update </button>
                    </div>
                    </div>
                </div>
                <br/>
            </div>


                            <div className={'pls-status-body-container'}>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "70%" }} htmlFor="exampleFormControlInput1">First Name</label>
                                        <input type="name" name={"firstname"} className="form-control" id="exampleFormControlInput1"
                                            placeholder="first name" value={user.firstname} onChange={handleInputs} />
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "70%" }} htmlFor="exampleFormControlInput1">Last Name</label>
                                        <input type="name" name={"lastname"} className="form-control" id="exampleFormControlInput2"
                                            placeholder="last name" value={user.lastname} onChange={handleInputs} />
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "70%" }} htmlFor="exampleFormControlInput1">Email</label>
                                        <input type="email" name={"email"} className="form-control" id="exampleFormControlInput3"
                                            placeholder="username@email.com" value={user.email} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "70%" }} htmlFor="exampleFormControlInput1">Phone Number</label>
                                        <input type="number" name={"phonenumber"} className="form-control" id="exampleFormControlInput4"
                                            placeholder="phone number" value={user.phonenumber} onChange={handleInputs}/>
                                    </div>
                                </div>
                            </div>

                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "70%", marginTop: "2vh" }} htmlFor="exampleFormControlInput1">Interested Course</label>
                                        <input type="name" name={"interestedcourse"} className="form-control" id="exampleFormControlInput5"
                                            placeholder="course name" value={user.interestedcourse} onChange={handleInputs}/>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "70%", marginTop: "2vh"}} htmlFor="exampleFormControlInput1"> Enter College Name </label>
                                        <input type="name" name={"collegename"} className="form-control" id="exampleFormControlInput6"
                                            placeholder="college name" value={user.collegename} onChange={handleInputs}/>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label style={{ marginRight: "90%" }} htmlFor="exampleFormControlSelect1">Status</label>
                                <select className="form-control" name={"status"} id="exampleFormControlSelect1" value={user.status} onChange={handleInputs} >
                                    <option>Need to call</option>
                                    <option>Pending</option>
                                    <option>Completed</option>
                                </select>
                            </div>


                            <div className={"row"}>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "80%" }} htmlFor="exampleFormControlInput1">Date</label>
                                        <div>
                                            <DatePickerComponent value={user.date} name={"date"} onChange={handleInputs}/>
                                        </div>
                                    </div>
                                </div>
                                <div className={"col"}>
                                    <div className={"form-group"}>
                                        <label style={{ marginRight: "80%" }} htmlFor="exampleFormControlInput1">Time</label>
                                        <div>
                                            <TimePickerComponent value={user.time} name={"time"} onChange={handleInputs}/>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="form-group">
                                <label style={{ marginRight: "90%", marginTop: "3.5vh" }} htmlFor="exampleFormControlTextarea1">Add Notes</label>
                                <textarea name={"notes"} className="form-control" id="exampleFormControlTextarea1" rows="3" value={user.notes} onChange={handleInputs}> </textarea>
                            </div>

                            </div>
                            <br/>
                            <br />

                         </form>
 </div>

  )
}

export default PostLeadStatusDetails