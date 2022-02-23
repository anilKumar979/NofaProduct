import React, { Component, useState } from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormUpload, FormInput, FormDropDownList } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Attachments } from './data';
import { Col, FormGroup } from 'reactstrap';
import { required } from './validators';

const API_URL = `${process.env.REACT_APP_URL}` + 'api/test/';
import nofaServices from '../services/nofaServices'

class Attachment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // value: [],
            value: {
                text: "Optional Attachment - Optional Attachment",
                id: 1
            },

        };
    }

    // isCustom(item) {
    //     return item.id === undefined;
    // }

    // addKey(item) {
    //     item.id = new Date().getTime();
    // }

    onChange = (event) => {
        this.setState({
            value: event.target.value,
        });
        console.log("show value", JSON.stringify(this.state.value))      
    }

    componentDidMount() {
    }

    render() {

        // console.log("My id", this.state.sid)
        return (

            <div>
                <center><h3>Attachments</h3></center>
                {/* <div className="example-config">
                    Selected Value: {JSON.stringify(this.state.value)}
                </div> */}

                <PanelBar>
                    <PanelBarItem expanded={true} title={"Pre-Submission Attachments"}>

                        <FormGroup row>
                            <Col xs="12" lg="6">
                                <Field component={FormDropDownList}
                                    value={this.state.value}
                                    onChange={this.onChange}
                                    type="text"
                                    name="project_attach"
                                    label="Attachment"
                                    textField="text"
                                    dataItemKey = "id"
                                    data={Attachments}
                                    placeholder="Start typing..."                                  
                                  
                                />                              
                            </Col>
                            <Col xs="12" lg="6">
                                <Field component={FormInput}
                                    type="text"
                                    name="attach_title"
                                    label="Attachment Title"
                                />
                            </Col>
                            <Col xs="12" lg="6">
                                <Field
                                    type="upload"
                                    name="file_name"
                                    key={"file_name"}
                                    id={"file_name"}
                                    component={FormUpload}
                                    label="File Name"
                                // subtitle="Provide documentation of location in an Urbanized Area."
                                //   batch={true}
                                //   defaultFiles={[]}
                                //   withCredentials={false}
                                //   multiple={true}
                                //   saveUrl={API_URL + "sid/" + this.state.sid + "/urban_area"}
                                />


                            </Col>
                        </FormGroup>
                    </PanelBarItem>
                </PanelBar>
            </div>
        )
    }
}
export default Attachment