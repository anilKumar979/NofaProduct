import React, { Component } from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormTextArea, FormInput, FormCheckbox, FormNumericTextBox, FormInputQues } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Attachments } from './data';
import { Col, FormGroup } from 'reactstrap';
import { quesnumber,abb } from './validators';
import { Link } from "react-router-dom";
import Login from '../Login/Index';
//import Popup from './Popup'

import {
    BrowserRouter as Router, Route
} from "react-router-dom";

const API_URL = `${process.env.REACT_APP_URL}` + 'api/test/';
import nofaServices from '../services/nofaServices'

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            countdown: 10
        };
        this.timer = setInterval(() => this.tick(), props.timeout || 1000);

    };

    tick() {
        const current = this.state.countdown;
        if (current === 0) {
            this.transition();
        } else {
            this.setState({ countdown: current - 1 });
        }
    }

    transition() {
        clearInterval(this.timer);
        // do something else here, presumably.
    }



    componentDidMount() {

        // if(this.state.seconds > 0)
        //  {
        //     setTimeout(() => this.setState(this.state.seconds - 1), 1000);

        //  } else {
        //     this.setState('BOOOOM!');
        //   }


    }

    render() {

        // console.log("My id", this.state.sid)
        return (
            <div>
                {/* {this.state.countdown != 0 ?
                    <div>
                        <p>{this.state.countdown}</p>
                        <Popup trigger={false} /> */}

                        <center><h3>Questionnaire - Current Phase</h3></center>

                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Questionnaire - Current Phase"}>
                                <p>Cleanup and Abatement Request for Funding Form (PLEASE READ BEFORE APPLYING!)</p>
                                <p>This application is only for the Cleanup and Abatement Account (CAA) Program! In order to
                                    receive CAA funding, all applicants must first discuss their project with the Division's Technical Staff PRIOR to submitting an application.</p>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <Field component={FormTextArea}
                                            // value={this.state.value} 
                                            // onChange={this.onChangeTextarea}
                                            name="purpose_of_request"
                                            type="textarea"
                                            label="Purpose of request"
                                        />
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <Field component={FormTextArea}
                                            // value={this.state.value} 
                                            // onChange={this.onChangeTextarea}
                                            name="background"
                                            type="textarea"
                                            label="Background"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="has_any_portion"
                                            // onChange={this.onChangeProgram}
                                            label="Has any portion of this project previously received funding through the Cleanup and Abatement account? If so, please provide the funding amount approved, Cleanup and Abatement #, and a brief description of the project."
                                        />

                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col xs="12" lg="6">
                                        <Field component={FormInputQues}
                                            name="has_any_portion_ans"
                                            hint={'Hint: Please do not use comma ( , ) and enter a number between 0 and 10000000'}
                                            validator={abb}
                                            label="Answer"
                                        />
                                    </Col>
                                    <Col xs="12" lg="6">
                                        <Field component={FormTextArea}
                                            name="has_any_portion_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>

                                </FormGroup>

                                <FormGroup row>

                                    <Col xs="12" lg="12">
                                        <p><strong>Impact to community or surrounding areas with regards to water quality</strong></p>
                                        <Field component={FormTextArea}
                                            name="community_impact_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col xs="12" lg="12">
                                        <p><strong>What waste is being addressed by this project?</strong></p>
                                        <Field component={FormTextArea}
                                            name="project_waste_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>

                                    <Col xs="12" lg="12">
                                        <p><strong>How do you plan to measure the water quality effectiveness of this project?</strong></p>
                                        <Field component={FormTextArea}
                                            name="water_quality_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="project_fund"
                                            label="Are other funds available for this project? If yes, please describe."
                                        />
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <Field component={FormTextArea}
                                            name="project_fund_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="regional_bord_fund"
                                            label="Will any of these funds be used for Regional Board oversight? If yes, how much? Typically, CAA funds do not cover Regional Board oversight costs."
                                        />
                                    </Col>
                                    <Col xs="12" lg="12">

                                        <Field component={FormInputQues}
                                            type="text"
                                            name="regional_bord_fund_ans"
                                            hint={'Hint: Please do not use comma ( , ) and enter a number between 0 and 10000000'}
                                           
                                            label="Answer"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col xs="12" lg="12">
                                        <p><strong>List any responsible party</strong></p>
                                        <Field component={FormTextArea}
                                            name="responsible_party_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>

                                    <Col xs="12" lg="12">
                                        <p>List any responsible party</p>
                                        <ul>
                                            <li>Preference 1: Emergency Cleanup Projects - Public Safety.</li>
                                            <li>Preference 2: Projects that address Disadvantaged Communities Environmental Justice Infastructure needs.</li>
                                            <li>Preference 3: Cleanup and/or abatement of 2006-listed water bodies that will help to implement a Total Maximum Daily Load (TMDL).</li>
                                            <li>Preference 4: Cleanup and/or abatement of non-point source legacy pollutant (i.e Stormwater)when the source(s) of the pollution have been mitigated.</li>
                                            <li>Preference 5: Cleanup and/or abatement of pollution in high-use groundwater basins.</li>
                                        </ul>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_1"
                                            label="PREFERENCE 1	"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_2"
                                            label="PREFERENCE 2	"
                                        />

                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_3"
                                            label="PREFERENCE 3"
                                        />

                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_4"
                                            label="PREFERENCE 4"
                                        />

                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_5"
                                            label="PREFERENCE 5"
                                        />

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>(continued)</p>
                                        <p>What Program Preference(s) does your project fulfill?</p>
                                        <ul>
                                            <li>Preference 6: Cleanup and/or abatement of contaminated site when the viable responsible party has not been identified.</li>
                                            <li>Preference 7: Projects that promote habitat restoration through non-profit organizations that collaborate with the Regional Water Boards and encourage public outreach and education.</li>
                                            <li>Preference 8: Completion of a study/plan and/or monitoring addressing significant Statewide water quality problems.</li>

                                        </ul>
                                    </Col>
                                    <Col xs="12" lg="4">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_6"
                                            label="PREFERENCE 6	"
                                        />
                                    </Col>
                                    <Col xs="12" lg="4">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_7"
                                            label="PREFERENCE 7	"
                                        />
                                    </Col>
                                    <Col xs="12" lg="4">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="preference_8"
                                            label="PREFERENCE 8"
                                        />

                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>What Strategic Plan Goal(s) does your project fulfill?</p>
                                        <ul>
                                            <li>Goal 1: Implement strategies to fully support the beneficial uses for all 2006-listed water bodies by 2030.</li>
                                            <li>Goal 2: Improve and protect groundwater quality in high-use basins by 2030.</li>
                                            <li>Goal 3: Increase sustainable local water supplies available for meeting existing and future beneficial uses by 1,725,000 acre-feet per year by 2015, and ensure adequate flows for fish and wildlife habitat.</li>
                                            <li>Goal 4: To comprehensively address water quality protection and restoration, and the relationship between water supply and water quality, and describe the connections between water quality, water quantity, and climate change, throughout California's water planning processes.</li>
                                            <li>Goal 5: Improve transparency and accountability by ensuring that Water Board goals and actions are clear and accessible, by demonstrating and explaining results achieved with respect to the goals and resources available, by enhancing and improving accessibility of data and information, and by encouraging the creating of organizations or cooperative agreements that advance this goal.</li>

                                            <li></li>

                                        </ul>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_1"
                                            label="Goal 1"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_2"
                                            label="Goal 2"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_3"
                                            label="Goal 3"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_4"
                                            label="Goal 4"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_5"
                                            label="Goal 5"
                                        />
                                    </Col>

                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>(continued)</p>
                                        <p>What Strategic Plan Goal(s) does your project fulfill?</p>
                                        <ul>
                                            <li>Goal 6: Enhance consistency across the Water Boards to ensure our processes are effective, efficient, and predictable, and to promote fair and equitable application of laws, regulations, policies, and procedures.</li>
                                            <li>Goal 7: Ensure that the Water Boards have access to information and expertise, including employees with appropriate knowledge and skills, needed to effectively and efficiently carry out the Water Boards' mission.</li>
                                        </ul>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_6"
                                            label="Goal 6"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="goal_7"
                                            label="Goal 7"
                                        />
                                    </Col>
                                </FormGroup>


                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>Your project is consistent with what Water Code Section(s)?</p>
                                        <ul>
                                            <li>Section 13442: State Water Board may order moneys to be paid from the CAA to a public agency with authority to cleanup or abate the effects of waste in order "to assist it in cleaning up the waste or abating its effects on the waters of the state"; or</li>
                                            <li>Section 13443: State Water Board may order moneys to be paid from the account to the Regional Water Board to assist it in attempting to remedy a significant unforeseen water pollution problem, posing an actual or potential public health threat, or is overseeing and tracking the implementation of a supplemental environmental project required as a condition of an order imposing administrative civil liability.</li>
                                        </ul>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="section_13442"
                                            label="Section 13442"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="section_13443"
                                            label="Section 13443"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>CEQA must be completed before the project can begin. Please choose the anticipate method of CEQA compliance below</p>

                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="categorial_exempt"
                                            label="Categorical Exemption"
                                        />
                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="negative_declar"
                                            label="Negative Declaration"
                                        />
                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="mitigated"
                                            label="Mitigated Negative Declaration"
                                        />
                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="environmental_impact"
                                            label="Environmental Impact Report"
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>Indicate the status of the environmental document in the drop box below. If the CEQA document is older than 5-years, please choose "Older than 5-yrs". Provide the estimated or known completion date in the second box, and if the CEQA document is complete, the Clearinghouse number. Example (clearinghouse number: 2009045843, document approved: 02/09/09)</p>

                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="started"
                                            label="Haven't Started"
                                        />
                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="in_progress"
                                            label="In Progress"
                                        />
                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="complete"
                                            label="Complete"
                                        />
                                    </Col>
                                    <Col xs="12" lg="3">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="older_then_5"
                                            label="Older than 5-years"
                                        />
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <Field component={FormTextArea}
                                            name="indecate_status_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>If exempt, which exemption does your project meet?</p>
                                        <ul>
                                            <li>15301 Existing Facilities: Consists of the operation, repair, maintenance, permitting, leasing, licensing, or minor alteration of existing public or private structures, facilities, mechanical equipment, or topographical features, inviliving negligible or no expansion of use beyond that existing at the time of the lead agency's determination.</li>
                                            <li>15302 Replacement of Reconstruction: Consists of replacement or reconstruction of existing structures and facilities where the new structure will be located on the same site as the structure replaced and will have substantially the same purpose and capacity as the structure replaced..</li>
                                            <li>15302 New Construction or Conversion of Small Structure: Consists of construction and location of limited numbers of new, small facilities or structures; installation of small new equipment and facilities in small structures; and the conversion of existing small structures from one use to another where only minor modifications are made in the exterior of the stuctures.</li>
                                            <li>15304 Minor Alteration to Land: Consists of minor public or private alteration in the condition of land, water and/or vegitation which do not involove removal of healthy, mature, scenic trees except for forestry or agricultural purposes.</li>
                                            <li>Other</li>
                                        </ul>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="consists_15301"
                                            label="15301"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="consists_15302"
                                            label="15302"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="consists_15303"
                                            label="15303"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="consists_15304"
                                            label="15304"
                                        />
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="other_list"
                                            label="Other (Please List Below)"
                                        />
                                    </Col>
                                    <Col xs="12" lg="12">
                                        <Field component={FormTextArea}
                                            name="consists_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <p>Please provide an estimated project budget broken down by State Fiscal Year (SFY). (Note: The SFY begins in July 1st and ends June 30th). This should be done for each SFY projected out to the end of the project term.</p>
                                        <p>Example: Project XYZ is a three year project costing $300,000. So SFY 10/11 would be for $100,000; SFY 11/12 would be for $100,000 and SFY 12/13 would be for $100,000.</p>

                                    </Col>
                                    <Col xs="12" lg="12">
                                        <Field component={FormTextArea}
                                            name="estimated_area"
                                            type="textarea"
                                            label="Answer"
                                            hint={'Hint: (1000 character maximum'}
                                        />
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="has_any_portion"
                                            // onChange={this.onChangeProgram}
                                            label="Does your project have Regional Board support (i.e. Resolution or Letter from Executive Officer)? If not, please provide an explanation."
                                        />

                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col xs="12" lg="12">
                                        <Field component={FormCheckbox}
                                            type="checkbox"
                                            name="attached_detailed"
                                            label="Have you attached a detailed Scope of Work, Project Budget, and Schedule with your application? If not, please provide an explanation."
                                        />

                                    </Col>
                                </FormGroup>
                            </PanelBarItem>
                        </PanelBar>
                    {/* </div>
                    :
                    <div>
                        <Popup trigger={true}>
                            <h3>Hello Popup</h3>
                            <p>Go to log in </p>
                        </Popup>

                    </div>

                } */}

            </div>
        )
    }
}
export default Questionnaire