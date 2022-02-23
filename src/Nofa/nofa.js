import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { FormTextArea, FormDropDownList, FormInput } from './form-components';
import { Col, FormGroup } from 'reactstrap';

const Nofa = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div className="container">
            <div className="AB434-CSS12 ">
                <div className="row">

                    <div className="col-md-12">
                        <div>
                            <h1 className="headsec">Create Nofa</h1>

                        </div>
                    </div>
                </div>
                <div className="AB434-CSS">

                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <Form
                                onSubmit={handleSubmit}
                                render={(formRenderProps) => (
                                    <FormElement
                                        style={{
                                            maxWidth: 650,
                                        }}
                                    >
                                        <fieldset className={"k-form-fieldset"}>
                                            
                                            <FormGroup row>
                                            <Col lg="12">
                                                <Field
                                                    name={"title"}
                                                    component={FormInput}
                                                    label={"Title"}
                                                />
                                             </Col>
                                             </FormGroup>
                                          
                                            <FormGroup row>

                                            <Col lg="12">
                                                <Field
                                                    name={"Description"}
                                                    type={"textarea"}
                                                    component={FormTextArea}
                                                    label={"Description"}

                                                />
                                            </Col>
                                            </FormGroup>
                                        </fieldset>
                                        <div className=" btn123">
                                            <button  className=" fourth btn btn-primary"
                                                type={"submit"}
                                                className="k-button k-button-md k-rounded-md k-button-solid k-button-solid-base"
                                                disabled={!formRenderProps.allowSubmit}
                                            >
                                                Submit
                                            </button>
                                        </div>
                                    </FormElement>
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Nofa