import React from "react";
import waqas from "../Images/waqas.png"
import adnan from "../Images/adnan.png"
import muzammil from "../Images/muzammil.png"
export default function aboutus() {


    return (

        <React.Fragment>
            <h1>About Us</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <div class="card">
                            <img class="card-img-top" src={adnan} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card"  >
                            <img class="card-img-top" src={waqas} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div class="card" >
                            <img class="card-img-top" src={muzammil} alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
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