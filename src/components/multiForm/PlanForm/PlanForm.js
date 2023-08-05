import "./PlanForm.scss";
// IMAGES
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";

function PlanForm({ plan, saveFormData, priceData }) {
  function handleChange(e) {
    const inputName = e.target.name;
    let inputValue;
    if (e.target.name === "billed") {
      inputValue = e.target.checked ? "yearly" : "monthly";
    } else {
      inputValue = e.target.id;
    }
    saveFormData({
      plan: {
        ...plan,
        [inputName]: inputValue,
      },
    });
  }

  const planPriceDetails = {
    arcade:
      plan.billed === "monthly"
        ? `$${priceData.monthly.plan.arcade}/mo`
        : `$${priceData.yearly.plan.arcade}/yr`,
    advanced:
      plan.billed === "monthly"
        ? `$${priceData.monthly.plan.advanced}/mo`
        : `$${priceData.yearly.plan.advanced}/yr`,
    pro:
      plan.billed === "monthly"
        ? `$${priceData.monthly.plan.pro}/mo`
        : `$${priceData.yearly.plan.pro}/yr`,
  };

  return (
    <div className="plan-form">
      <h3 className="form-title">Select your plan</h3>
      <p className="form-subtitle">
        You have the option of monthly or yearly billing.
      </p>
      <div className="plan-form__cards-container">
        <div
          className={`plan-form__card ${
            plan.type === "arcade" ? "selected" : ""
          }`}
        >
          <img src={arcade} alt="game controller" className="plan-form__logo" />
          <div className="plan-form__pricing">
            <h3 className="plan-form__name">Arcade</h3>
            <label htmlFor="arcade" className="plan-form__label"></label>
            <input
              type="radio"
              name="type"
              id="arcade"
              className="plan-form__input"
              checked={plan.type === "arcade"}
              onChange={handleChange}
            />
            <p className="plan-form__price">{planPriceDetails.arcade}</p>
            {plan.billed === "yearly" && (
              <p className="plan-form__gift">2 months free</p>
            )}
          </div>
        </div>

        <div
          className={`plan-form__card ${
            plan.type === "advanced" ? "selected" : ""
          }`}
        >
          <img
            src={advanced}
            alt="game controller"
            className="plan-form__logo"
          />
          <div className="plan-form__pricing">
            <h3 className="plan-form__name">Advanced</h3>
            <label htmlFor="advanced" className="plan-form__label"></label>
            <input
              type="radio"
              name="type"
              id="advanced"
              className="plan-form__input"
              checked={plan.type === "advanced"}
              onChange={handleChange}
            />
            <p className="plan-form__price">{planPriceDetails.advanced}</p>
            {plan.billed === "yearly" && (
              <p className="plan-form__gift">2 months free</p>
            )}
          </div>
        </div>

        <div
          className={`plan-form__card ${plan.type === "pro" ? "selected" : ""}`}
        >
          <img src={pro} alt="game controller" className="plan-form__logo" />
          <div className="plan-form__pricing">
            <h3 className="plan-form__name">Pro</h3>
            <label htmlFor="pro" className="plan-form__label"></label>
            <input
              type="radio"
              name="type"
              id="pro"
              className="plan-form__input"
              checked={plan.type === "pro"}
              onChange={handleChange}
            />
            <p className="plan-form__price">{planPriceDetails.pro}</p>
            {plan.billed === "yearly" && (
              <p className="plan-form__gift">2 months free</p>
            )}
          </div>
        </div>
      </div>
      <div className="plan-form__switch">
        <span
          className={`switch__label ${
            plan.billed === "monthly" ? "selected" : ""
          }`}
        >
          Monthly
        </span>
        <label className="switch">
          <input
            className="switch__input"
            type="checkbox"
            name="billed"
            onChange={handleChange}
          />
          <span className="switch__slider"></span>
        </label>
        <span
          className={`switch__label ${
            plan.billed === "yearly" ? "selected" : ""
          }`}
        >
          Yearly
        </span>
      </div>
    </div>
  );
}

export default PlanForm;
