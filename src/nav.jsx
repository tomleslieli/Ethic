import "./stylesheets/nav.css";
import Logo from "./assets/images/ETHIC_LOGO.png";

function Nav() {
  return (
    <div className="Nav">
      <div className="logo-container">
        <img src={Logo} alt="logo" />
      </div>
      <div className="user-buttons">
        <div className="user-buttons-left">
          <div className="nav-button">
            <i className="fa-solid fa-user fa-lg"></i>
          </div>
          <div className="nav-button">
            <i className="fa-solid fa-film fa-lg"></i>
          </div>
        </div>
        <div className="user-buttons-right">
          <div className="nav-button">
            <i className="fa-solid fa-print fa-lg"></i>
          </div>
          <div className="nav-button">
            <i className="fa-solid fa-cart-shopping fa-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
