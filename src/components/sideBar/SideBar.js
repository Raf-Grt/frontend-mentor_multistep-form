import "./SideBar.scss";

function SideBar({ currentStepIndex, getStep }) {
  return (
    <div className="sidebar">
      <ul className="sidebar__list">
        <li
          className={`sidebar__item ${currentStepIndex === 0 ? "active" : ""}`}
        >
          <span className="sidebar__step--number">1</span>
          <div className="sidebar__wrapper">
            <span className="sidebar__step--name">STEP 1</span>
            <span className="sidebar__step--heading">YOUR INFO</span>
          </div>
        </li>
        <li
          className={`sidebar__item ${currentStepIndex === 1 ? "active" : ""}`}
        >
          <span className="sidebar__step--number">2</span>
          <div className="sidebar__wrapper">
            <span className="sidebar__step--name">STEP 2</span>
            <span className="sidebar__step--heading">SELECT PLAN</span>
          </div>
        </li>
        <li
          className={`sidebar__item ${currentStepIndex === 2 ? "active" : ""}`}
        >
          <span className="sidebar__step--number">3</span>
          <div className="sidebar__wrapper">
            <span className="sidebar__step--name">STEP 3</span>
            <span className="sidebar__step--heading">ADD-ONS</span>
          </div>
        </li>
        <li
          className={`sidebar__item ${currentStepIndex === 3 ? "active" : ""}`}
        >
          <span className="sidebar__step--number">4</span>
          <div className="sidebar__wrapper">
            <span className="sidebar__step--name">STEP 4</span>
            <span className="sidebar__step--heading">SUMMARY</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
