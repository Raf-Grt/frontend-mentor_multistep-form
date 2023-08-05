// STYLES
import "./App.scss";
// HOOKS
import { useState } from "react";
import useMultiStepsForm from "./hooks/useMultiStepsForm";
// COMPONENTS
import SideBar from "./components/sideBar/SideBar";
import UserForm from "./components/multiForm/UserForm/UserForm";
import PlanForm from "./components/multiForm/PlanForm/PlanForm";
import AddOnsForm from "./components/multiForm/AddOnsForm/AddOnsForm";
import Summary from "./components/multiForm/Summary/Summary";
import NextButton from "./components/buttons/NextButton/NextButton";
import BackButton from "./components/buttons/BackButton/BackButton";
// DATA
import { formData, priceData } from "./data/data";
import ConfirmationForm from "./components/multiForm/ConfirmationForm/ConfirmationForm";

function App() {
  const [data, setData] = useState(formData);

  const {
    currentStep,
    currentStepIndex,
    isFirstStep,
    isLastStep,
    confirmationStep,
    getNextStep,
    getPrevStep,
    getStep,
  } = useMultiStepsForm([
    <UserForm {...data} saveFormData={saveFormData} />,
    <PlanForm {...data} priceData={priceData} saveFormData={saveFormData} />,
    <AddOnsForm {...data} priceData={priceData} saveFormData={saveFormData} />,
    <Summary
      {...data}
      priceData={priceData}
      saveFormData={saveFormData}
      getStep={() => getStep(1)}
    />,
    <ConfirmationForm />,
  ]);

  function saveFormData(fields) {
    setData((prevData) => ({
      ...prevData,
      ...fields,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    getNextStep();
  }

  return (
    <div className="app-container">
      <div className="form-container">
        <SideBar currentStepIndex={currentStepIndex} />
        <form onSubmit={handleSubmit} className="section">
          {currentStep}
          {!confirmationStep && (
            <div className="btn-group">
              {!isFirstStep ? (
                <BackButton getPrevStep={getPrevStep} />
              ) : (
                <div></div>
              )}
              <NextButton isLastStep={isLastStep} />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;
