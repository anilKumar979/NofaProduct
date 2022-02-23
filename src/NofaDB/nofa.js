import React, { Component, useState } from 'react';
import { Form, Field } from '@progress/kendo-react-form';
import { FormTextArea, FormDropDownList, FormInput } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";

import { Col, FormGroup } from 'reactstrap';
import nofaServices from '../services/nofaServices';

class NofaTabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nofatab: "",
      nofa: "",
      nofalineitemtype: ""
    };

  };
createApp = () => {
  
    window.location.href = "/nofa-line-items";
  }

  // Handle the input change

  render() {
    return (

      <div>
        <PanelBar>
          <PanelBarItem expanded={true} title={"Create Nofa"}>
            <div className="row">

              <div className="col-md-12 col-lg-12 col-xl-12">
                <div className='startbtn'>
                  <button onClick={this.createApp} className="btn btn-primary">Start  Nofa Form <i className="fa fa-angle-double-right" aria-hidden="true"></i></button>
                </div>

              </div>
            </div>
          </PanelBarItem>
        </PanelBar>



      </div>
    )
  }


}

export default NofaTabs