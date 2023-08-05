import { useState } from "react";

function useMultiStepsForm(steps) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  function getNextStep() {
    setCurrentStepIndex((index) => {
      if (index >= steps.length - 1) return index;
      return index + 1;
    });
  }

  function getPrevStep() {
    setCurrentStepIndex((index) => {
      if (index <= 0) return index;
      return index - 1;
    });
  }

  function getStep(index) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    currentStep: steps[currentStepIndex],
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 2,
    confirmationStep: currentStepIndex === steps.length - 1,
    getNextStep,
    getPrevStep,
    getStep,
  };
}

export default useMultiStepsForm;
