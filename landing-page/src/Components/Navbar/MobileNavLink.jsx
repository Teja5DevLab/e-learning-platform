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
        className="flex items-center gap-3 text-2xl mb-10 translate-y-7 text-white cursor-pointer"
      >
        {icon}
        {link}
      </Link>
    </li>
  );
};

export default MobileNavLink;
