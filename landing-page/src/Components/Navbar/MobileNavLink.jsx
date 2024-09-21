import { Link } from "react-scroll";

const MobileNavLink = ({ setToggle, href, link, icon }) => {
  return (
    <li className="list-none mb-6">
      <Link
        to={href}
        smooth={true}
        spy={true}
        duration={500}
        offset={-50}
        onClick={() => setToggle(false)}
        className="flex items-center gap-4 text-xl mb-10 text-white cursor-pointer hover:scale-105"
      >
        {icon}
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLink;
