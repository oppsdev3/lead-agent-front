import React, {useEffect, useState} from 'react';
import './Lead.css';
import 'bootstrap/dist/css/bootstrap.css';

const Report =() => {

    const [agentData, setAgentData] = useState();

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

    useEffect(() => {
        callReports();
    }, []);



    return(
        <div>
            <h2> This is reports </h2>
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
    )
}

export default Report;