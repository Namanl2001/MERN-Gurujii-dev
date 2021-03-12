import React from 'react';
import imgs from '../assets/not-found.svg';


class Error404 extends React.Component{
    
    render(){
        return(
            <div>
                <center><img 
                src={imgs} 
                style={{width: "45%", paddingTop: "5%"}}
                />
                <h1 style={{color: "white", paddingTop: "2%"}}>Page Not Found!</h1>
                <p style={{color: "white"}}>The page you are looking for was moved, removed, renamed, or might never existed.</p>
                <button className="buttn">GO TO HOME</button></center>
            </div>
        )
    }
}

export default Error404;