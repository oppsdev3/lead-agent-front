import React from 'react';

const About =() => {
    return(
        <div>
            <p className={'pt-5'}>WELCOME</p>
            <h3>About us</h3>
            <br/>
            <br/>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-sm-6'} style={{marginTop:'10%'}}>
                        <img className="card-img-right" src={require('./images/MicrosoftTeams-image (1).png')} alt="Card image cap" style={{ height: '150%', width:'100%', marginLeft: '-70%'}}/>
                    </div>
                    <div className={'col-sm-6'}>
                        <h4>   </h4>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;