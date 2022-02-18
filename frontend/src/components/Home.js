import React,{useState, useEffect} from 'react';
//import './Home.css';


const Home =() => {

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
        <div>
           {/* <p className={'pt-5'}>WELCOME</p>
            <h3>This is the agent panel.</h3> */}
            {/* <h6>Hello, testing commit</h6> */}

            {/* <div className='lead-manager-container'>
                    
               
            <div className='row'>
                <div className='col'>
                    <div className='lmc-card1'>
                        <i class="zmdi zmdi-account" > </i> 
                        <div style={{marginTop: "4%"}}> </div>
                        <p>Total Leads</p>
                        <p>150</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='lmc-card2' style={{ boxShadow: "20px 20px 50px 15px grey", width: "25%", marginLeft:"50%", marginTop:"30%", padding:"1%"}}>
                        <i class="zmdi zmdi-phone-in-talk"> </i>
                        <div style={{marginTop: "4%"}}> </div>
                        <p>For Call</p>
                        <p>34</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='lmc-card1' style={{ boxShadow: "20px 20px 50px 15px grey", width: "25%", marginLeft:"10%", color:"green", marginTop:"30%", padding:"1%"}}>
                        <i class="zmdi zmdi-check-circle-u"> </i>
                        <div style={{marginTop: "4%"}}> </div>
                        <p>Completed</p>
                        <p>54</p>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <div className='lmc-card1' style={{ boxShadow: "20px 20px 50px 15px grey", width: "17%", marginLeft:"60%", color:"red", marginTop:"20%", padding:"1%"}}>
                        <i class="zmdi zmdi-close-circle"> </i>
                        <div style={{marginTop: "4%"}}> </div>
                        <p>Canceled</p>
                        <p>30</p>
                    </div>
                </div>
                <div className='col'>
                    <div className='lmc-card1' style={{ boxShadow: "20px 20px 50px 15px grey", width: "17%", marginLeft:"10%", color:"#EEBC1D", marginTop:"20%", padding:"1%"}}>
                        <i class="zmdi zmdi-time"></i>
                        <div style={{marginTop: "4%"}}> </div>
                        <p>Pending</p>
                        <p>40</p>
                    </div>
                </div>
            </div>

            </div> */}

        </div>
    )
}

export default Home;