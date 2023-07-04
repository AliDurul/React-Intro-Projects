import logo from "../../helper/logo/logo.png"
import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={logo} alt="" />
      <ul>
        <li>
          <a href="#">HOROSCOPE</a>
        </li>
        <li>
          <a href="#">DAILY</a>
        </li>
        <li>
          <a href="#">TAROT</a>
        </li>
        <li>
          <a href="#">ARTICLE</a>
        </li>
        <li>
          <a href="#">CONTACT</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
