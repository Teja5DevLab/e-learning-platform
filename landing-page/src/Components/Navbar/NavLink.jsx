import { Link } from "react-scroll";

const NavLink = ({ href, link }) => {
  return (
    <li
      className="slidedown list-none font-bold cursor-pointer mr-8 hover:text-Teal transition-all duration-300 ease-in-out"
      style={{ animationDuration: "1.4s" }}
    >
      <Link to={href} smooth={true} spy={true} duration={500} offset={-50}>
        {link}
      </Link>
    </li>
  );
};

export default NavLink;
