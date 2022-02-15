import React, { useState } from 'react';
//import signinimage from '../images/minimal_standing_desk.svg';
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink , useNavigate } from "react-router-dom";

const Signup =() => {

    const [user , setUser ] = useState({
        name: " ",
        email: " ",
        password: " ",
        cpassword: " ",
        number: " "
    })

    const [ records, setRecords] = useState([]);

    //const history = useHistory();
    const navigate = useNavigate();

    let name, value;

    const handleInputs = (e) => {

        name = e.target.name;
        value = e.target.value;
        console.log(name, value);

        setUser({...user, [name]: value});
    }


    const PostData = async (e) => {
        e.preventDefault();

        const { name, email, password, cpassword, number } = user;

        const res = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password, cpassword, number
            })
        });

        const data = await res.json();
        if(data.status === 422 || !data ){
            window.alert("Registration failed");
        } else {
            window.alert("Registration successful");
            navigate('/login');
        }
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //
    //     const newUser = {...user }
    //
    //     console.log(records);
    //     setRecords([...records, newUser]);
    //
    //     setUser({ name: " ", email: " ", password: " ", cpassword: " ", number: " "});
    //
    // }


    return(
        <div>

            <section className={'signup'}>
                <div className={'container '}  style={{ marginBottom: '5%'}}>
                    <div className={'signup-content'}>
                        <div className="row" >
                            <div className="col-sm-6">
                                <div className="card" style={{ height: '87%', width: '210%' , marginTop: '15%' , marginBottom: '10%', boxShadow: ' 5px 3px 5px 3px  #9E9E9E'}}>
                                    <div className="card-body" style={{ marginTop: '1%'}} >
                                        <img className="card-img-right" src={require('../images/signup1.jpg')} alt="Card image cap"/>
                                        <p className="card-text"  > With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <div className={'signup-image'}>
                                            {/*<img src={require('../images/minimal_standing_desk.svg')} alt={''} />*/}
                                        </div>

                                        <form  method={"POST"}
                                            //onSubmit={handleSubmit}
                                           // onSubmit={handleAddUserOnSubmit}
                                        >

                                            <div className="form-group row" style={{ marginTop: '12%'}}>
                                                <div className={'name-icon'}> <i className="zmdi zmdi-account"> </i> </div>
                                                <div className="col-sm-20 ">
                                                    <input type="name" className="form-control" name={"name"} autoComplete={"off"}

                                                           // onChange={(e) => setName(e.target.value)} value={name}
                                                        value={user.name} onChange={handleInputs}

                                                           placeholder="Name" style={{  borderColor: "white", backgroundColor: "white" }}/>
                                                </div>
                                            </div>

                                            <br/>


                                            <div className="form-group row" >
                                                <div className={'name-icon'}> <i className="zmdi zmdi-email"> </i> </div>
                                                <div className="col-sm-20 ">
                                                    <input type="email" className="form-control" name={"email"} autoComplete={"off"}

                                                           //onChange={(e) => setEmail(e.target.value)} value={email}
                                                           value={user.email} onChange={handleInputs}

                                                           placeholder="Email" style={{  borderColor: "white", backgroundColor: "white" }}/>
                                                </div>
                                            </div>

                                            <br/>

                                            <div className="form-group row">
                                                <div className={'name-icon'}> <i className="zmdi zmdi-key"> </i> </div>
                                                <div className="col-sm-20 ">
                                                    <input type="password" className="form-control" name={"password"} autoComplete={"off"}

                                                           //onChange={(e) => setPassword(e.target.value)} value={password}
                                                           value={user.password} onChange={handleInputs}

                                                           placeholder="Password" style={{ backgroundColor: "white", borderColor: "white"}}/>
                                                </div>
                                            </div>

                                            <br/>

                                            <div className="form-group row">
                                                <div className={'name-icon'}> <i className="zmdi zmdi-lock"> </i> </div>
                                                <div className="col-sm-20 ">
                                                    <input type="password" className="form-control" name={"cpassword"} autoComplete={"off"}

                                                           //onChange={(e) => setCpassword(e.target.value)} value={cpassword}
                                                           value={user.cpassword} onChange={handleInputs}

                                                           placeholder="Confirm Password" style={{ backgroundColor: "white", borderColor: "white"}}/>
                                                </div>
                                            </div>

                                            <br/>

                                            <div className="form-group row" >
                                                <div className={'name-icon'}><i className="zmdi zmdi-phone"> </i>  </div>
                                                <div className="col-sm-20 ">
                                                    <input type="number" className="form-control" name={"number"} autoComplete={"off"}

                                                           //onChange={(e) => setNumber(e.target.value)} value={number}
                                                           value={user.number} onChange={handleInputs}

                                                           placeholder="Phone Number" style={{  borderColor: "white", backgroundColor: "white" }}/>
                                                </div>
                                            </div>

                                            <br/>
                                            <br/>
                                            <br/>


                                            <div className="form-group row">
                                                <div className="col-sm-10">
                                                    <button type="submit" className="btn btn-secondary" onClick={PostData} style={{ marginLeft:'14%', width: '15%', padding:'1%', marginTop:'5%', marginBottom:'4%' }}  >Sign up</button>
                                                    {/*<div className={"form-group form-button"}>*/}
                                                    {/*    <input type={'submit'} name={"Signup"} id={'signup'}  className={'form-submit'} value={'Sign up'} style={{ marginLeft:'9%', padding:'1%', width:'13%', marginTop:'-10%' }}/>*/}
                                                    {/*</div>*/}
                                                </div>



                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <img className="card-img-right" src={require('../images/signin.jpg')} alt="Card image cap"  style={{ marginTop:'90%', height:'40%', width:'70%' }}/>
                                <div style={{ marginTop:'-5%' }} >
                                    <NavLink to={'/login'} > I'm already registered </NavLink>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Signup;