import "./Summary.scss";

function Summary({ plan, addons, priceData, getStep }) {
  const addonsList = addons.map((el, index) => (
    <div className="summary__addons" key={index}>
      <p className="summary__addons--name">{el}</p>
      <p className="summary__addons--price">
        +${priceData[plan.billed].addons[el]}/
        {plan.billed === "monthly" ? "mo" : "yr"}
      </p>
    </div>
  ));
  const planPrice = priceData[plan.billed].plan[plan.type];
  const addonsPrice = addons.reduce((acc, curr) => {
    const currentAddonPrice = priceData[plan.billed].addons[curr];
    return (acc += currentAddonPrice);
  }, 0);
  const totalPrice = planPrice + addonsPrice;
  return (
    <div className="summary">
      <h3 className="form-title">Finishing up</h3>
      <p className="form-subtitle">
        Double-check everything looks OK before confirming.
      </p>
      <div className="summary__container">
        <div className="summary__plan">
          <div className="summary__resume">
            <h3 className="summary__heading">
              {plan.type} ({plan.billed === "monthly" ? "Monthly" : "Yearly"})
            </h3>
            <button className="summary__btn" type="button" onClick={getStep}>
              Change
            </button>
          </div>
          <div className="summary__price">
            ${planPrice}/{plan.billed === "monthly" ? "mo" : "yr"}
          </div>
        </div>
        <hr />
        {addonsList}
      </div>
      <p className="summary__total">
        Total (per {plan.billed === "monthly" ? "month" : "year"}){" "}
        <span>
          ${totalPrice}/{plan.billed === "monthly" ? "mo" : "yr"}
        </span>
      </p>
    </div>
  );
}

export default Summary;
