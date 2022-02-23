import React, { Component, useState } from 'react';
import { Field, FieldArray } from '@progress/kendo-react-form';
import { FormUpload, FormNumericTextBox, FormGrid, FormAutoComplete } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { Col, FormGroup } from 'reactstrap';
import Tabs from './TabComponent/Tabs'
import { Modal, Button } from "react-bootstrap";
const API_URL = `${process.env.REACT_APP_URL}` + 'api/test/';
import nofaServices from '../services/nofaServices'
import { AdditionalDist } from "./data"
class PerformanceMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            isActive: false
        };
    }


    handleShow = () => {
        this.setState({
            isActive: true
        })
    }

    handleHide = () => {
        this.setState({
            isActive: false
        })
    }

    onClick = () => {
        console.log("Map Operate")
    }
    render() {

        // console.log("My id", this.state.sid)
        return (

            <div>
                <center><h3>Performance Measurement</h3></center>

                <Tabs >
                    <div label="Purpose">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Purpose"}>
                                {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Purpose +
                                        </Button>
                                    </div>}

                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="Waterbody">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Waterbody"}>
                                {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Waterbody +
                                        </Button>
                                    </div>}
                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="Land Use">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Land Use"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Land Use +
                                        </Button>
                                    </div>}
                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="Site Condition">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Site Condition"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Site Condition +
                                        </Button>
                                    </div>}
                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="Implementation">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Implementation"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Implementation +
                                        </Button>
                                    </div>}

                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="TMDL">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"TMDL"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add TMDL +
                                        </Button>
                                    </div>}
                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="BMPs">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"BMPs"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add BMPs +
                                        </Button>
                                    </div>}

                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="Sampling">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Sampling"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Sampling +
                                        </Button>
                                    </div>}
                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                    <div label="Comments">
                        <PanelBar>
                            <PanelBarItem expanded={true} title={"Comments"}>
                            {this.state.isActive ?
                                    <div className='' >

                                        <>
                                            <FormGroup row>

                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}
                                                        onChange={this.onClick}
                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"

                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormAutoComplete}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed"
                                                        label="Watershed"
                                                        dataItemKey={"id"}
                                                        textField="text"
                                                        placeholder="Start typing..."
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Field component={FormNumericTextBox}
                                                        value={this.state.value}

                                                        type="text"
                                                        name="watershed3"
                                                        label="Watershed3"
                                                        dataItemKey={"id"}


                                                    />
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col xs="12" lg="12">
                                                    <Button variant="primary" onClick={this.handleHide}>
                                                        Save
                                                    </Button>
                                                </Col>
                                            </FormGroup>

                                        </>




                                    </div> : <div className="d-flex align-items-right justify-content-right">
                                        <Button variant="primary" onClick={this.handleShow}>
                                            Add Comments +
                                        </Button>
                                    </div>}
                            </PanelBarItem>
                        </PanelBar>
                        {/* <FieldArray name="users" component={FormGrid} /> */}
                    </div>
                </Tabs>


            </div>
        )
    }
}
export default PerformanceMeasure