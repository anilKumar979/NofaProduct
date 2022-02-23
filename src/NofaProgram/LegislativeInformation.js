import React, { Component, useState } from 'react';
import { Field } from '@progress/kendo-react-form';
import { FormUpload } from './form-components';
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { FormTextArea, FormInput, FormAutoComplete, FormMultiSelect } from './form-components';
import { counties, USCongressional, SenetDist, AdditionalDist ,CongressionalDist} from './data';
import { Col, FormGroup } from 'reactstrap';
import nofaServices from '../services/nofaServices';
import { required } from './validators';

const API_URL = `${process.env.REACT_APP_URL}` + 'api/test/';



class LegislativeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: [],
            value1: [],
            value2: [],
           
        };
    }
    isCustom(item) {
        return item.id === undefined;
    }

    addKey(item) {
        item.id = new Date().getTime();
    }

    handleChangeSenet = (event) => {
        const values = event.target.value;
        const lastItem = values[values.length - 1];

        if (lastItem && this.isCustom(lastItem)) {
            values.pop();
            const sameItem = values.find((v) => v.text === lastItem.text);

            if (sameItem === undefined) {
                this.addKey(lastItem);
                values.push(lastItem);
            }
        }

        this.setState({
            value: values,
        });

        console.log("sport value senet", JSON.stringify(this.state.value))
    };
    handleChangeAsm = (event) => {
        const values1 = event.target.value;
        const lastItem = values1[values1.length - 1];

        if (lastItem && this.isCustom(lastItem)) {
            values1.pop();
            const sameItem = values1.find((v) => v.text === lastItem.text);

            if (sameItem === undefined) {
                this.addKey(lastItem);
                values1.push(lastItem);
            }
        }

        this.setState({
            value1: values1,
        });

        console.log("sport value Asm", JSON.stringify(this.state.value1))
    };
    
    handleChangeUs = (event) => {
        const values2 = event.target.value;
        // console.log("get Val",event.target.value)
        const lastItem = values2[values2.length - 1];

        if (lastItem && this.isCustom(lastItem)) {
            values2.pop();
            const sameItem = values2.find((v) => v.text === lastItem.text);

            if (sameItem === undefined) {
                this.addKey(lastItem);
                values2.push(lastItem);
            }
        }

        this.setState({
            value2: values2,
        });

        console.log("sport value Us", JSON.stringify(this.state.value2))
    };
    componentDidMount() {

    }

    render() {

        // console.log("My id", this.state.sid)
        return (

            <div>
                {/* <div className="example-config">
          Selected Values: {JSON.stringify(this.state.value)}
        </div> */}
                <center><h3>Legislative Information</h3></center>

                <PanelBar>
                    <PanelBarItem expanded={true} title={"Legislative Information"}>

                        <p>The Legislative Information tab displays Senate, Assembly, and US Congressional District based on the latitude and longitude entered on the General Information tab. Additional districts (for larger or multi-site project) can be added using the CTRL+CLICK buttons.</p>

                        <div className="wrapper tableFixHead devbudget">
                            <table className="table overviewtable table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Legislative Information</th>
                                        <th>primary</th>
                                        <th>primary official</th>
                                        <th>Additional District(s)</th>
                                        <th>Additional Official</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Senate District</td>
                                        <td>
                                            <Field component={FormAutoComplete}
                                                type="text"
                                                name="senet_dist"
                                                // label="SenetDist"
                                                data={SenetDist}
                                                placeholder="Select a Value..."
                                            />
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <Field
                                                data={AdditionalDist}
                                                onChange={this.handleChangeSenet}
                                                value={this.state.value}
                                                textField="text"
                                                dataItemKey="id"
                                                allowCustom={true}
                                                component={FormMultiSelect}
                                            //  validator={termsValidator} 
                                            />
                                        </td>
                                        <td>
                                            <p>Find Senate District</p>
                                        </td>

                                    </tr>
                                    <tr>
                                        <td>Assembly District</td>
                                        <td>
                                            <Field component={FormAutoComplete}
                                                type="text"
                                                name="assembly_dist"
                                                // label="SenetDist"
                                                data={SenetDist}
                                                placeholder="Select a Value..."
                                            />
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <Field
                                                data={AdditionalDist}
                                                onChange={this.handleChangeAsm}
                                                value={this.state.value}
                                                textField="text"
                                                dataItemKey="id"
                                                allowCustom={true}
                                                component={FormMultiSelect}
                                            //  validator={termsValidator} 
                                            />
                                        </td>
                                        <td>
                                            <p>	Find Assembly District</p>
                                        </td>

                                    </tr>

                                    <tr>
                                        <td>US Congressional District</td>
                                        <td>
                                            <Field component={FormAutoComplete}
                                                type="text"
                                                name="us_cong_dist"
                                                // label="SenetDist"
                                                data={USCongressional}                                              
                                                placeholder="Select a Value..."
                                            />
                                        </td>
                                        <td>

                                        </td>
                                        <td>
                                            <Field
                                                data={CongressionalDist}
                                                onChange={this.handleChangeUs}
                                                value={this.state.value}
                                                textField="text"
                                                dataItemKey="id"
                                                allowCustom={true}
                                                component={FormMultiSelect}
                                            //  validator={termsValidator} 
                                            />
                                        </td>
                                        <td>
                                            <p>	Find Assembly District</p>
                                        </td>

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
export default LegislativeInfo