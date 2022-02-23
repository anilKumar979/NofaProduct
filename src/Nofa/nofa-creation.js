import * as React from "react";
import { Link } from "react-router-dom";

const NofaCreation = () => {


    return (
        <div className="container">
            <div className="AB434-CSS12 ">
                <div className="row">

                    <div className="col-md-12">
                        <div>
                            <h1 className="headsec">Nofa</h1>

                        </div>
                    </div>
                </div>
                <div className="AB434-CSS">

                    <div className="row">

                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <div className='startbtn text-align-center'>
                                <Link to="/create-nofa" className="btn btn-primary">Create Nofa <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>

                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <div className='startbtn text-align-center'>
                            <Link to="/nofa-tabs"  className="btn btn-primary">Create Nofa Tabs <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>

                        </div>
                        <div className="col-md-4 col-lg-4 col-xl-4">
                            <div className='startbtn text-align-center'>
                            <Link to="/nofa-line-item-type"  className="btn btn-primary">Create Nofa Line Item Type <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default NofaCreation