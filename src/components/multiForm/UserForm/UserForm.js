import "./UserForm.scss";

function UserForm({ name, email, phone, saveFormData }) {
  function handleChange(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    saveFormData({
      [inputName]: inputValue,
    });
  }
  return (
    <div className="user-form">
      <h3 className="form-title">Personal info</h3>
      <p className="form-subtitle">
        Please provide your name, email address, and phone number.
      </p>
      <div className="user-form__form">
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="e.g. Stephen King"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="e.g. stephenking@lorem.com"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="e.g. +1 234 567 890"
            required
            value={phone}
            onChange={handleChange}
          />
        </div>
      </div>
    </div>
  );
}

export default UserForm;
