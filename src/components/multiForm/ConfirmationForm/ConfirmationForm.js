import "./ConfirmationForm.scss";
import checkmark from "../../../assets/images/icon-thank-you.svg";

function ConfirmationForm() {
  return (
    <div className="confirmation-form">
      <div className="confirmation-form__container">
        <img src={checkmark} alt="Checkmark" />
        <h3>Thank you!</h3>
        <p>
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </p>
      </div>
    </div>
  );
}

export default ConfirmationForm;
