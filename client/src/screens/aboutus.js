import React from "react";
import waqas from "../Images/waqas.png"
import adnan from "../Images/adnan.png"
import muzammil from "../Images/muzammil.png"
export default function aboutus() {


    return (

        <React.Fragment>
            <h2>About Us</h2>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div class="card">
                            <img class="card-img-top" src={adnan} height="200px" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Adnan Murtaza</h5>
                                    <p class="card-text">3850-FBAS/BSSE/F18-A</p>
                                    
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card"  >
                            <img class="card-img-top" src={waqas}  height="200px" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Waqas Mehmood</h5>
                                    <p class="card-text">3854-FBAS/BSSE/F18-A</p>
                                   
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card" >
                            <img class="card-img-top" src={muzammil}  height="200px" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Muhammad Muzammil Hassan</h5>
                                    <p class="card-text">3762-FBAS/BSSE/F18-A</p>
                                     
                                </div>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}

{/* // <div className="container  emp-profile">
        //     <form method="">

        //         <div className="row">
        //         <div className="col-md-4">
        //         <img src={adnan} className="img-fluid" style={{ height: '200px', width: '200px' }} />
                 
        //         </div>
        //             <div className="col-md-6">
        //                 <div className="profile-head">
        //                     <h2>Adnan Murtaza</h2>
        //                     <h3>3850-FBAS-BSSE-F-18-A</h3>

        //                 </div>

        //             </div>
        //         </div>
        //         <div className="row  ">
        //         <div className="col-md-4 mt-50">
        //         <img src={waqas} className="img-fluid" style={{ height: '200px', width: '200px' }} />
                 
        //         </div>
        //             <div className="col-md-6">
        //                 <div className="profile-head">
        //                     <h2>Waqas Mehmood</h2>
        //                     <h3>3854-FBAS-BSSE-F-18-A</h3>

        //                 </div>

        //             </div>
        //         </div>
        //         <div className="row ">
        //         <div className="col-md-4 mt-50">
        //         <img src={muzammil} className="img-fluid" style={{ height: '200px', width: '200px' }} />
                 
        //         </div>
        //             <div className="col-md-6">
        //                 <div className="profile-head">
        //                     <h2>Muhammad Muzammil Hassan</h2>
        //                     <h3>3762-FBAS-BSSE-F-18-A</h3>

        //                 </div>

        //             </div>
        //         </div>
        //     </form>


        // </div> */}