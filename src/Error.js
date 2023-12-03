import React from "react";
import './Home.css'
import {Link } from "react-router-dom";
function Error(){
    return(
        <div>
             <header className="head">
                <div className="container">
                    <div className="row align-items">
                        <div className="col_3">
                            <div className="content">
                                <h1>Multi Page</h1>
                            </div>
                        </div>
                        <div className="col_9">         
                            <div className="head-row">
                                <ul>
                                    <a href="Home">Home</a>
                                    <a href="About">About</a>
                                    <a href="Mobiles">Mobiles</a>
                                    <a href="Eelctronics">Eelctronics</a>
                                    <a href="Contact">Contact</a>
                                </ul>
                            </div>
                        </div>
                    </div>     
	            </div>
            </header>
   
             <p>HI   404 ERROR   GO TO HOME PAGE...</p> 
            <Link to='/'>Home</Link>
        </div>
    );
}
export default Error;
