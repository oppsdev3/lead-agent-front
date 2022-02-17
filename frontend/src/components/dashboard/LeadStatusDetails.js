import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { DatePickerComponent, TimePickerComponent } from "@syncfusion/ej2-react-calendars";
import './LeadStatus.css';
import PostLeadStatusDetails from './PostLeadStatusDetails';

function LeadStatusDetails() {

   // const [user, setUser] = useState();

    const [agentData, setAgentData] = useState();
    const [didWeGetInfo, setDidWeGetInfo] = useState('loading');

    const params = useParams();

     const handleInputs = (e) => {

        console.log(e);
       
    }


        const callLeads = async() => {
        try{
            const res = await fetch(`/leads/leadstatus/${params.id}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials: "include"
            });

            const data = await res.json();
            console.log("data", data);
            setAgentData(data);
            setDidWeGetInfo('true');
           
            if (!res.status === 200 ){
                const error = new Error(res.error);
                setDidWeGetInfo('false');
                return error;
            }

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callLeads();
    }, []);


        const conditionalRendering = () => {
        if (didWeGetInfo === 'loading') {
            return (
                <div direction="column" alignItems="center">
                    <h5 my="4">Loading...</h5>
                </div>
            );
        } else if (didWeGetInfo === 'true') {
            return (
                <div>
                    
                    <PostLeadStatusDetails agent={ agentData} key={agentData.id} />

                </div>
            )
        } else {
            return (
                <div textAlign="center">
                    <p>Oops! No such page exists!</p>
                </div>
            );
        }
    };


  


  return (

    <div>

   {conditionalRendering()}

 </div>
  )
}

export default LeadStatusDetails