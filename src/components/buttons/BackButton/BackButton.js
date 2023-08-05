function BackButton({ getPrevStep }) {
  return (
    <button onClick={getPrevStep} className="btn btn--secondary" type="button">
      Go Back
    </button>
  );
}

export default BackButton;
