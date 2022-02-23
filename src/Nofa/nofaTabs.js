import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { FormTextArea, FormDropDownList, FormInput } from './form-components';
import { Col, FormGroup } from 'reactstrap';

const NofaTabs = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));

    return (
        <div className="container">
            <div className="AB434-CSS12 ">
                <div className="row">

                    <div className="col-md-12">
                        <div>
                            <h1 className="headsec">Nofa Tab</h1>

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
                                       
                                    >
                                        <fieldset className={"k-form-fieldset"}>
                                            
                                            <FormGroup row>
                                            <Col lg="12">
                                                <Field
                                                    name={"tab_name"}
                                                    component={FormInput}
                                                    label={"Tab Name"}
                                                />
                                             </Col>
                                             </FormGroup>
                                          
                                            {/* <FormGroup row>

                                            <Col lg="12">
                                                <Field
                                                    name={"Description"}
                                                    type={"textarea"}
                                                    component={TextArea}
                                                    label={"Description"}

                                                />
                                            </Col>
                                            </FormGroup> */}
                                        </fieldset>
                                        <div className=" btn123">
                                            <button   className=" fourth btn btn-primary"
                                                type={"submit"}
                                                
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
export default NofaTabs