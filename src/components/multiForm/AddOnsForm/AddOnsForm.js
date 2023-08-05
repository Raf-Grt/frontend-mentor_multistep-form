import "./AddOnsForm.scss";

function AddOnsForm({ plan, addons, priceData, saveFormData }) {
  function handleChange(e) {
    const addonName = e.target.name;
    const isChecked = e.target.checked;

    const addonExists = addons.includes(addonName);

    if (isChecked && !addonExists) {
      saveFormData({ addons: [...addons, addonName] });
    }

    if (!isChecked && addonExists) {
      saveFormData({ addons: addons.filter((addon) => addon !== addonName) });
    }
  }

  const selectedList = {
    onlineService: addons.includes("onlineService"),
    storage: addons.includes("storage"),
    customizableProfile: addons.includes("customizableProfile"),
  };

  const planPriceDetails = {
    onlineService:
      plan.billed === "monthly"
        ? `$${priceData.monthly.addons.onlineService}/mo`
        : `$${priceData.yearly.addons.onlineService}/yr`,
    storage:
      plan.billed === "monthly"
        ? `$${priceData.monthly.addons.storage}/mo`
        : `$${priceData.yearly.addons.storage}/yr`,
    customizableProfile:
      plan.billed === "monthly"
        ? `$${priceData.monthly.addons.customizableProfile}/mo`
        : `$${priceData.yearly.addons.customizableProfile}/yr`,
  };
  return (
    <div className="addons-form">
      <h3 className="form-title">Pick add-ons</h3>
      <p className="form-subtitle">
        Add-ons help enhance your gaming experience.
      </p>
      <div className="addons-form__cards-container">
        <div
          className={`addons-form__card ${
            selectedList.onlineService ? "selected" : ""
          }`}
        >
          <label htmlFor="onlineService" className="addons-form__label"></label>
          <input
            type="checkbox"
            name="onlineService"
            id="onlineService"
            className="addons-form__input"
            checked={selectedList.onlineService}
            onChange={handleChange}
          />
          <div className="addons-form__details">
            <h3 className="addons-form__heading">Online Service</h3>
            <p className="addons-form__subheading">
              Access to multiplayer games
            </p>
          </div>
          <p className="addons-form__price">{planPriceDetails.onlineService}</p>
        </div>

        <div
          className={`addons-form__card ${
            selectedList.storage ? "selected" : ""
          }`}
        >
          <label htmlFor="storage" className="addons-form__label"></label>
          <input
            type="checkbox"
            name="storage"
            id="storage"
            className="addons-form__input"
            checked={selectedList.storage}
            onChange={handleChange}
          />
          <div className="addons-form__details">
            <h3 className="addons-form__heading">Larger storage</h3>
            <p className="addons-form__subheading">Extra 1TB of cloud save</p>
          </div>
          <p className="addons-form__price">{planPriceDetails.storage}</p>
        </div>

        <div
          className={`addons-form__card ${
            selectedList.customizableProfile ? "selected" : ""
          }`}
        >
          <label
            htmlFor="customizableProfile"
            className="addons-form__label"
          ></label>
          <input
            type="checkbox"
            name="customizableProfile"
            id="customizableProfile"
            className="addons-form__input"
            checked={selectedList.customizableProfile}
            onChange={handleChange}
          />
          <div className="addons-form__details">
            <h3 className="addons-form__heading">Customizable Profile</h3>
            <p className="addons-form__subheading">
              Custom theme on your profile
            </p>
          </div>
          <p className="addons-form__price">
            {planPriceDetails.customizableProfile}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AddOnsForm;
