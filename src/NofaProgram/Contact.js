import React, { Component, useState } from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormInput } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Col, FormGroup } from 'reactstrap';
import { required } from './validators';
import nofaServices from '../services/nofaServices'

const API_URL = `${process.env.REACT_APP_URL}` + 'api/test/';

class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: "",


        };
    }

    componentDidMount() {

    }

    render() {

        // console.log("My id", this.state.sid)
        return (

            <div>
                <center><h3>Contact</h3></center>
                <p>The Contacts tab allows the user to add or view/edit information previously entered. This tab is used to record the person/organization who was or will be contacted regarding this Project. To edit an existing contact, please select the name of the organization link. Changes made must be saved by clicking on the “Save Contact” button.</p>

                <PanelBar>
                    <PanelBarItem expanded={true} title={"Contact"}>

                        <FormGroup row>
                            <Col xs="12" lg="6">
                                <Field component={FormInput}
                                    type="text"
                                    name="org_name"
                                    label="Organization Name"
                                />
                            </Col>
                            <Col xs="12" lg="6">
                                <Field component={FormInput}
                                    type="text"
                                    name="cont_first_name"
                                    label="Contact First Name"
                                />
                            </Col>
                            <Col xs="12" lg="6">
                                <Field component={FormInput}
                                    type="text"
                                    name="cont_last_name"
                                    label="Contact Last Name"
                                />
                            </Col>
                            <Col xs="12" lg="6">
                                <Field component={FormInput}
                                    type="text"
                                    name="cont_phone"
                                    label="Contact Phone"
                                />
                            </Col>
                            <Col xs="12" lg="6">
                                <Field component={FormInput}
                                    type="text"
                                    name="cont_email"
                                    label="Contact Email"
                                />
                            </Col>
                        </FormGroup>
                    </PanelBarItem>
                </PanelBar>

                <PanelBar>
                    <PanelBarItem expanded={true} title={"Organization Name"}>

                        <p>The Legislative Information tab displays Senate, Assembly, and US Congressional District based on the latitude and longitude entered on the General Information tab. Additional districts (for larger or multi-site project) can be added using the CTRL+CLICK buttons.</p>

                        <div className="wrapper tableFixHead devbudget">
                            <table className="table overviewtable table-striped table-bordered">
                                <thead>
                                    <tr>
                                      <th>Oraganization name</th>
                                      <th>Name</th>
                                      <th>Phone</th>
                                      <th>Email</th>
                                      <th>Delete?</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                      <td></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </PanelBarItem>
                </PanelBar>
            </div>
        )
    }
}
export default Contact