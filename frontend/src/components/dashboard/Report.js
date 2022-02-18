import React, {useEffect, useState} from 'react';
import './Lead.css';
import 'bootstrap/dist/css/bootstrap.css';
import { CSVLink } from 'react-csv';
//import { DatePicker } from 'react-datepicker';
//import 'react-datepicker/dist/react-datepicker.css';
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import { DateRangePicker } from 'rsuite';


const Report =() => {

    const [agentData, setAgentData] = useState();
 
    const today = new Date().toISOString().slice(0, 10)


    const [selectedDate, setSelectedDate] = useState(today);


    const callReports = async() => {
        try{
            const res = await fetch('/reports', {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setAgentData(data);
            console.log("data", data);


        } catch(err) {
            console.log(err);
        }
    }

// http://localhost:4000/reports/{"para1":[2022-02-18],"para2":[2022-03-09]}

    const callReportsbyDate = async() => {
        try{
            // const res = await fetch(`/reports/{"para1":[${selectedDate[0]}], "para2":[${selectedDate[1]}]}`, {
                 const res = await fetch(`/reports/${selectedDate[0]}/${selectedDate[1]}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            setAgentData(data);
            console.log("sending this date to backend:", selectedDate)
            console.log("date data", data);


        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        callReports();
    }, []);



    const data1 = [agentData];
    const  data = JSON.stringify(data1);
    const headers = [
        {label: 'Name', key:'firstname' },
        {label: 'Phone Number', key:'phonenumber' },
        {label: 'Course name', key:'interestedcourse' },
        {label: 'Status', key:'status' },
        {label: 'Comments', key:'notes' }
    ]

    const csvReport = {
        filename: 'Report.csv',
        headers: headers,
        data: data
    };

    const handleOnSet = (e) => {
        setSelectedDate(e.target.value);
        console.log("Selected Date: ",selectedDate)
          console.log("Selected Start Date: ",selectedDate[0])
            console.log("Selected End Date: ",selectedDate[1])
        callReportsbyDate();
    }

    const date = new Date(new Date().getFullYear, new Date().getMonth(), 14);
    const startValue = date;

    const endDate = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 15);
    const endValue = endDate;

    return(
         <div id='content'>

            <div className={'rls-top-section'}>
                <div className={"row"}>
                    <div className={'topbar'}>
                        <div className={"col"}>
                            <i className="zmdi zmdi-account-circle" style={{color: "bisque", fontSize: "1.8rem", marginRight: '40%'}}>  </i>
                            <p style={{  fontSize: "1rem", marginLeft: "20%" , width: "10vw", marginTop: "-2.9vh" }}> &nbsp;&nbsp; &nbsp; Total Leads &nbsp; -  </p>
                        </div>
                    <div className={"col"}>
                        <p style={{ display:"flex", color: "darkblue" , width: "10vw",  fontSize: "0.8rem", marginLeft: "8%", marginTop: "0.4vh" }}> (150) </p>  {/*add no of leads dynamically {status} from backend*/}
                    </div>


                     <div className={"col"} >
                       <div style={{ marginRight:"40%" ,marginLeft: "40%",  width:"780%"}}>

                            <DateRangePickerComponent placeholder='Select Range' startDate={startValue} endDate={endValue}  value={selectedDate} name={"date"} onChange={handleOnSet} />
                    
                       </div>
                         
                    </div>

                    <div className={"col"}>
                        <button className={'btn-secondary'} style={{ backgroundColor: "green", borderRadius: "10%", padding: "6%", width:"280%", marginLeft: "720%", marginTop: "-0.2vh"}}
                         > 
                          <CSVLink {...csvReport} style={{color:"whitesmoke"}}> 
                              Export &nbsp; <i class="zmdi zmdi-share"> </i>
                          </CSVLink>
                         </button>
                    </div>
                    </div>
                </div>
                <br/>
            </div>


          <div className={"rls-body"}> 
            <div className={'top-row'}>
                <div className={'row'}>
                    <div className={'col'}>
                        <h6>Name</h6>
                    </div>
                    <div className={'col'}>
                        <h6>Phone Number</h6>
                    </div>
                    <div className={'col'}>
                        <h6>Course Name</h6>
                    </div>
                    <div className={'col'}>
                        <h6>Status</h6>
                    </div>
                    <div className={'col'}>
                        <h6>Comments</h6>
                    </div>
                    <div className={'col'}>
                        <h6> &nbsp; </h6>
                    </div>
                </div>
            </div>

            <div>
                {
                    !!agentData &&
                    agentData.map((agent) =>

                        <div className={'body-row'}>
                            <div className={'row'}>
                                <div className={'col'}>
                                    <h6>{agent.firstname}</h6>
                                </div>
                                <div className={'col'}>
                                    <h6>{agent.phonenumber}</h6>
                                </div>
                                <div className={'col'}>
                                    <h6>{agent.interestedcourse}</h6>
                                </div>
                                <div className={'col'}>
                                    <h6>{agent.status}</h6>
                                </div>
                                <div className={'col'}>
                                    <h6>{agent.notes}</h6>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
            </div>
       </div>
    )
}

export default Report;