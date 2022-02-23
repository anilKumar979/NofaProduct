import React, { useEffect, useState } from 'react';
import './ab434.css';
//import axios from "axios";
import { Form, FormElement } from "@progress/kendo-react-form";
import { Button } from "@progress/kendo-react-buttons";
import { Stepper } from "@progress/kendo-react-layout";
import GenralInfo from "./genralInformation";
import ProjectBudget from "./projectBudget";
import Funding from "./funding"
import ProjectManagement from "./projectManagement";
import LegislativeInformation from "./LegislativeInformation";
import Contact from "./Contact";
import CooperatingEntities from "./CooperatingEntities";
import PerformanceMeasure from "./PerformanceMeasure";
import Attachment from "./Attachment";
import Questionnaire from "./Questionnaire";
import Preview from './preview';

import { useHistory } from "react-router-dom";
import nofaServices from '../services/nofaServices';
import Swal from 'sweetalert2';

function App() {

  const [loader, setLoader] = React.useState(false)
  const [step, setStep] = React.useState(0);
  const history = useHistory();
  const [orientation, setOrientation] = React.useState("vertical");
  const [steps, setSteps] = React.useState([
    {
      label: "General Information",
      isValid: undefined,
    },
    {
      label: "Project Budget",
      isValid: undefined,
    },
    {
      label: "Funding",
      isValid: undefined,
    },
    {
      label: "Project Management",
      isValid: undefined,
    },
    {
      label: "Legislative Information",
      isValid: undefined,
    },
    {
      label: "Contacts",
      isValid: undefined,
    },
    {
      label: "Cooperating Entities",
      isValid: undefined,
    },
    {
      label: "Questionnaire",
      isValid: undefined,
    },
    {
      label: "Attachments",
      isValid: undefined,
    },
    {
      label: "Performance Measurement",
      isValid: undefined,
    },
    {
      label: "Preview",
      isValid: undefined,
    },


  ]);
  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;
  const [user, setUser] = React.useState();
  const [sid, setSid] = React.useState();
  useEffect(() => {
    setLoader(true)
    const sidValue = sessionStorage.getItem('submissionId');
    const email = sessionStorage.getItem('email');
    if (sidValue === null) {
      setLoader(true)
    } else {
      const ssid = sidValue;
      setSid(ssid);
      setLoader(false)
    }
    nofaServices.getFiles(sidValue).then(
      response => {
        setLoader(false)
        var ad = response.data;
        //console.log(ad);

        // ad["pre_app_bool2"] = (ad["pre_app_bool2"] === "true" ? true : false);
        // ad["pre_app_bool3"] = (ad["pre_app_bool3"] === "true" ? true : false);
        // ad["pre_app_bool4"] = (ad["pre_app_bool4"] === "true" ? true : false);
        ad["mhp_bool"] = (ad["mhp_bool"] === "true" ? true : false);
        ad["iig_bool"] = (ad["iig_bool"] === "true" ? true : false);
        ad["vhhp_bool"] = (ad["vhhp_bool"] === "true" ? true : false);
        ad["fwhg_bool"] = (ad["fwhg_bool"] === "true" ? true : false);
        ad["email"] = email;
        ad["users"] = [];
        setUser(ad);

      },
      error => {

      }
    );
  }, []);

  const [formState, setFormState] = React.useState({});
  //  console.log(form);
  //  console.log(customer);
  /*****************************/
  // const handleChange = React.useCallback(
  //   (event) => {
  //     setStep(() => event.value);
  //   },
  //   [step, setStep],
  //   window.scrollTo({ top: 0, behavior: 'smooth' })
  // );

  const isPreviousStepsValid = steps.slice(0, step).findIndex((currentStep) => currentStep.isValid === false) === -1;

  const handleChange = (e) => {
    // e.preventDefault();
    setStep(e.value);
  };


  const onStepSubmit = React.useCallback(
    (event) => {

      const { isValid, values } = event;
      const currentSteps = steps.map((currentStep, index) => ({
        ...currentStep,
        isValid: index === step ? isValid : currentStep.isValid,
      }));
      setSteps(currentSteps);
      if (!isValid) {
        return;
      }
      setStep(() => Math.min(step + 1, lastStepIndex));
      setFormState(values);

      if (isPreviousStepsValid && isValid) {
        if (step === 13) {
          const sidValue = sessionStorage.getItem('submissionId');
          if (sidValue === null) { } else {
            nofaServices.drafttoComplete(sidValue).then(
              response => {
                Swal.fire({
                  title: 'Success',
                  text: 'Your Form Submitted Succesfully',
                  icon: 'success',
                  confirmButtonText: 'Ok'
                }).then(function () {
                  history.push({
                    pathname: '/'
                  });
                });

              },
              error => {

              }
            );

          }
        }


      }
    },
    [steps, isLastStep, isPreviousStepsValid, step, lastStepIndex]
  );
  const onPrevClick = React.useCallback(
    (event) => {
      event.preventDefault();
      setStep(() => Math.max(step - 1, 0));
    },
    [step, setStep],
    window.scrollTo({ top: 0, behavior: 'smooth' })
  );

  return (
    <div>

      {sid ? <div className="container">
        <div className="row">

          <div className="col-md-12">
            <div className='subidsection'>
              <p>Submission ID: {sid} </p>
            </div>
          </div>
        </div>
      </div> : <></>
      }


      <div className="AB434-CSS12">


        <div className="row">

          <div className="col-md-12">
            <div className='header-align'>
              <h1 className="headsec">Faast Nofa Application</h1>

            </div>
          </div>
        </div>
        <div className="AB434-CSS">
          <div className="row">

            <div className="col-md-2"
            >
              <Stepper
                onChange={handleChange} value={step} items={steps} orientation={orientation} />
            </div>
            <div className="col-md-10">


              <Form
                initialValues={user}
                key={JSON.stringify(user)}
                // validator={arrayLengthValidator}
                onSubmitClick={onStepSubmit}
                render={(formRenderProps) => (
                  <div className="button-bootm"
                    style={{
                      alignSelf: "center",
                    }}
                  >
                    <FormElement>
                      {step === 0 && <GenralInfo/>}
                      {step === 1 && <ProjectBudget />}
                      {step === 2 && <Funding />}
                      {step === 3 && <ProjectManagement />}
                      {step === 4 && <LegislativeInformation />}
                      {step === 5 && <Contact />}
                      {step === 6 && <CooperatingEntities />}
                      {step === 7 && <Questionnaire/>}
                      {step === 8 && <Attachment/>}
                      {step === 9 && <PerformanceMeasure/>}
                      {step === 10 && <Preview/>}
                    

                      <span
                        style={{
                          marginTop: "40px",
                        }}
                        className={"k-form-separator"}
                      />
                      <div
                        style={{
                          justifyContent: "space-between",
                          alignContent: "center",
                        }}
                        className={"k-form-buttons k-buttons-end"}
                      >
                        <span
                          style={{
                            alignSelf: "center",
                          }}
                        >
                          Step {step + 1} of 13
                        </span>
                        <div className="btn123">

                          {step !== 0 ? (
                            <Button
                              style={{
                                marginRight: "16px",
                              }}
                              onClick={onPrevClick}
                            >
                              Previous
                            </Button>
                          ) : undefined}
                          <Button
                            primary={true}
                            //  disabled={
                            //    (step === 1 && !formRenderProps.valueGetter('mhp_bool') && !formRenderProps.valueGetter('iig_bool') && !formRenderProps.valueGetter('vhhp_bool') && !formRenderProps.valueGetter('fwhg_bool'))
                            //   }
                            disabled={isLastStep ? !isPreviousStepsValid : false}
                            onClick={formRenderProps.onSubmit}
                          >
                            {isLastStep ? "Submit" : "Next"}
                          </Button>
                        </div>
                      </div>
                    </FormElement>
                  </div>
                )}
              />
            </div>

          </div>

        </div>


      </div>


    </div>
  );
};
export default App;