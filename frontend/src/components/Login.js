import React, { useState } from 'react';
import './signup/Signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";

const Login =() => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const LogUserIn = async (e) => {

        e.preventDefault();

        const res = await fetch("/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();
        if(data.status === 400 || !data ){
            window.alert("Login failed");
        } else {
            window.alert("Login successful");
            navigate('/home');
        }
    }

    return(
        <div>
            <section className={'signup'}>
                <div className={'container '}  style={{ marginBottom: '5%'}}>
                    <div className={'signup-content'}>
                        <div className="row" >
                            <div className="col-sm-6">
                                <div className="card" style={{ height: '87%', width: '210%' , marginTop: '15%' , marginBottom: '10%', boxShadow: ' 5px 3px 5px 3px  #9E9E9E'}}>
                                    <div className="card-body" style={{ marginTop: '1%'}} >
                                        <img className="card-img-right" src={require('./images/login_l.png')} alt="Card image cap" style={{ width:'50%'}}/>
                                        <p className="card-text"  > With supporting text below as a natural lead-in to
                                            additional content.</p>
                                        <div className={'signup-image'}>
                                            {/*<img src={require('../images/minimal_standing_desk.svg')} alt={''} />*/}
                                        </div>

                                        <form method={"POST"}>



                                            <div className="form-group row" style={{ marginTop: '12%', marginLeft: '5%'}} >
                                                <div className={'name-icon'}> <i className="zmdi zmdi-email"> </i> </div>
                                                <div className="col-sm-20 ">
                                                    <input type="email" className="form-control" name={'email'} value={email} onChange={(e) => setEmail(e.target.value)}
                                                           placeholder="Email" style={{  borderColor: "white", backgroundColor: "white" }}/>
                                                </div>
                                            </div>

                                            <br/>

                                            <div className="form-group row" style={{ marginLeft: '5%' }}>
                                                <div className={'name-icon'}> <i className="zmdi zmdi-key"> </i> </div>
                                                <div className="col-sm-20 ">
                                                    <input type="password" className="form-control" name={'password'} value={password} onChange={(e) => setPassword(e.target.value)}
                                                           placeholder="Password" style={{ backgroundColor: "white", borderColor: "white"}}/>
                                                </div>
                                            </div>

                                            <br/>
                                            <br/>
                                            <br/>


                                            <div className="form-group row">
                                                <div className="col-sm-10">
                                                    <button type="submit"  onClick={LogUserIn} className="btn btn-outline-secondary" style={{ marginLeft:'14%', width: '15%', padding:'1%', marginTop:'5%', marginBottom:'4%' }}>Log in</button>
                                                    {/*<div className={"form-group form-button"} style={{ marginTop: '10%'}}>*/}
                                                    {/*    <input type={'submit'} name={"Login"} id={'login'} className={'form-submit'} value={'Login'} style={{ marginLeft:'9%', padding:'1%', width:'13%', marginTop:'-10%' }} />*/}
                                                    {/*</div>*/}
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <img className="card-img-right" src={require('./images/login-icon.gif')} alt="Card image cap"  style={{ marginTop:'90%', height:'20%', width:'30%' , marginRight:'3%' }}/>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;