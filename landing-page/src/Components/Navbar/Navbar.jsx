import { navLinks } from "../../Data";
import { HiX, HiMenuAlt1 } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { FiUserPlus } from "react-icons/fi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, [active]);

  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div className="container mx-auto px-2">
        <div
          className={`${
            active ? "py-2" : "py-4"
          } flex items-center justify-between transition-[padding] duration-300`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl sm:hidden cursor-pointer text-Teal"
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              <a href="#home">Estelle Academy</a>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-8">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
          </div>
          <Button className="hidden sm:flex py-3 px-6 font-bold bg-Teal text-white border-Teal rounded-lg text-sm hover:bg-TealDark transition duration-300">
            <FiUserPlus className="mr-2" />
            Sign Up
          </Button>
          <div
            className={`fixed h-[100%] w-64 top-0 left-0 z-30 bg-Teal text-white px-10 shadow-lg transition-transform duration-500 ease-in-out transform ${
              toggle
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            <HiX
              className="absolute right-6 top-6 cursor-pointer text-3xl hover:text-Red transition duration-300"
              onClick={() => setToggle(false)}
            />
            <ul className="mt-28">
              {navLinks.map((navLink) => (
                <MobileNavLink
                  key={navLink.id}
                  {...navLink}
                  setToggle={setToggle}
                />
              ))}
            </ul>
            <div className="mt-8 border-t border-white/30 pt-4">
              <p className="text-center text-sm text-white/80">
                © Estelle Academy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
