import { Link } from "react-scroll";

const MobileNavLink = ({ setToggle, href, link }) => {
  return (
    <li className="list-none cursor-pointer">
      <Link
        to={href}
        smooth={true}
        spy={true}
        duration={500}
        offset={-50}
        onClick={(prev) => setToggle(!prev)}
      >
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLink;
