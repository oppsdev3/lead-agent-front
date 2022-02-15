import React, {useEffect, useState} from 'react';
import './Lead.css';
import {  useNavigate } from "react-router-dom";



const Lead =() => {

    const navigate = useNavigate();

    const [agentData, setAgentData] = useState();

    const callLeads = async() => {
        try{
            const res = await fetch('/leads', {
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
            // console.log("Agent data",agentData);

            // if(!res.status(200)){
            //    return new Error(res.error);
            // }
            if (!res.status === 200 ){
                const error = new Error(res.error);
                return error;
            }

        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        callLeads();
    }, []);

    return(
        <div >
            <h2> This is leads </h2>
            <p>Total Leads</p>
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
                                <div className={'col'}>
                                    <button> view </button>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>










        </div>
    )
}

export default Lead;