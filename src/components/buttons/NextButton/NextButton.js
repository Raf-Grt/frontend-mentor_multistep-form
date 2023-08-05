function NextButton({ isLastStep }) {
  return (
    <button className="btn btn--primary" type="submit">
      {!isLastStep ? "Next Step" : "Confirm"}
    </button>
  );
}

export default NextButton;
