import React, { Component, useState } from 'react';
import { Form, Field } from '@progress/kendo-react-form';
import { FormTextArea, FormInput, FormAutoComplete } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Button } from "@progress/kendo-react-buttons";
import { counties, watershed, RegionalWater } from './data';
import { required } from './validators';
import { Col, FormGroup } from 'reactstrap';
import nofaServices from '../services/nofaServices';

const yesno = ["Yes", "No"]

class generalInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { pre_app_bool1: "" };
    this.onMapClick = this.onMapClick.bind(this);
  };

  onMapClick = () => {
    console.log("Map Operate")
  }
  componentDidMount() {
    this.onMapClick();
  }


  render() {
    //console.log(this.props.preAppBool1)
    return (

      <div>
        <center><h3>Genral Information</h3></center>
        {/* <p>The Application is organized into different tabs. Each tab should be completed according to the instructions provided. All tabs should be completed before submitting the Application.</p>
        <p>SAVE: Pressing this button will save the information entered thus far.</p>
        <p>PREVIEW/SUBMIT: Pressing this button will allow you to preview/submit the information entered thus far.</p> */}

        <PanelBar>
          <PanelBarItem expanded={true} title={"Genral Information"}>
            <FormGroup row>
              <Col xs="12" md="12">
                <p>The “General Information” tab allows the user to enter a project title, project description, and location information for the project.</p>
              </Col>
            </FormGroup>
            <FormGroup row>

              <Col xs="12" md="3">
                <p><strong>RFP Title:</strong></p>
              </Col>
              <Col xs="12" lg="6">
                <p>Cleanup and Abatement Account</p>
              </Col>

            </FormGroup>

            <FormGroup row>

              <Col xs="12" lg="3">
                <p><strong>Applicant Organization:</strong></p>
              </Col>
              <Col xs="12" lg="6">
                <p>Coachella Valley Housing Coalition</p>
              </Col>
            </FormGroup>

            <FormGroup row>

              <Col xs="12" lg="3">
                <p><strong>Applicant Division:	</strong></p>
              </Col>
              <Col xs="12" lg="6">
                <p>Outreach</p>
              </Col>
            </FormGroup>

            <FormGroup row>

              <Col xs="12" lg="3">
                <p><strong>Submitting Organization:		</strong></p>
              </Col>
              <Col xs="12" lg="6">
                <p>Transparent IT</p>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col xs="12" lg="3">
                <p><strong>Submitting Division:		</strong></p>
              </Col>
              <Col xs="12" lg="6">
                <p>Outreach</p>
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col xs="12" lg="6">
                <Field component={FormInput}
                  type="text"
                  name="project_title"
                  label="Project Title"
                  validator={required}
                  required />
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col xs="12" lg="12">
                <Field component={FormTextArea}
                  // value={this.state.value} 
                  // onChange={this.onChangeTextarea}
                  name="project_desc"
                  type="textarea"
                  label="Project Description"
                  validator={required}
                  required />
              </Col>
            </FormGroup>


            {/* <FormGroup row>
              <Col xs="12" lg="4">
                <Field component={FormInput}
                  type="text"
                  name="latitude"
                  label="Latitude"
                  validator={required}
                  required />
              </Col>
              <Col xs="12" lg="4">
                <Field component={FormInput}
                  type="text"
                  name="longitude"
                  label="Longitude"
                  validator={required}
                  required />
              </Col>
              <Col xs="12" lg="4">
                <Button   style={{ marginRight: "16px",   }}
                  onClick={this.onMapClick}
                >
                  Obtain Lat Long
                </Button>
              </Col>
            </FormGroup> */}
            <FormGroup row>
              <Col xs="12" lg="12">
                <h3><strong>PROJECT LOCATION</strong></h3>
              </Col>
            </FormGroup>
            <FormGroup row>

              <Col xs="12" lg="6">
                <Field component={FormAutoComplete}
                  value={this.state.value}
                  onChange={this.onChange}
                  type="text"
                  name="watershed"
                  label="Watershed"
                  data={watershed}
                  placeholder="Start typing..."
                />
              </Col>
              <Col xs="12" lg="6">
                <Field component={FormAutoComplete}
                  value={this.state.value}
                  onChange={this.onChange}
                  type="text"
                  name="project_county"
                  label="County"
                  data={counties}
                  placeholder="Start typing..."
                />
              </Col>
            </FormGroup>



            <FormGroup row>
              <Col xs="12" lg="6">
                <Field component={FormAutoComplete}
                  value={this.state.value}
                  onChange={this.onChange}
                  type="text"
                  name="Responsible_Reg"
                  label="Responsible Regional Water Board"
                  data={RegionalWater}
                  placeholder="Start typing..."
                  validator={required}
                  required />
              </Col>
            </FormGroup>


          </PanelBarItem>
        </PanelBar>


      </div>
    )
  }
}

export default generalInfo