import React from "react";
import waqas from "../Images/waqas.png"
import adnan from "../Images/adnan.png"
import muzammil from "../Images/muzammil.png"
export default function  aboutus() {


    return(

        <div className="container  emp-profile">
            <form method="">

                <div className="row">
                <div className="col-md-4">
                <img src={adnan} className="img-fluid" style={{ height: '200px', width: '200px' }} />
                 
                </div>
                    <div className="col-md-6">
                        <div className="profile-head">
                            <h2>Adnan Murtaza</h2>
                            <h3>3854-FBAS-BSSE-F-18-A</h3>

                        </div>

                    </div>
                </div>

            </form>


        </div>
    )
}