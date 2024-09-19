import { navLinks } from "../../Data";
import { HiX, HiMenuAlt1 } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";

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
      <div>
        <div
          className={`${
            active ? "py-2" : "py-4"
          } container mx-auto px-2 flex items-center justify-between transition-[padding] duration-300`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="slidedown text-3xl sm:hidden cursor-pointer"
              style={{ animationDuration: ".8s" }}
              onClick={() => setToggle(true)}
            />
            <div className="text-xl text-Teal slidedown uppercase tracking-wide font-bold">
              <a href="#home">Estelle Academy</a>
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <Button
            className="py-4 px-6 font-bold border-[1.5px] bg-transparent slidedown border-Gray rounded-lg text-sm"
            style={{ animationDuration: "1.6s" }}
          >
            Sign Up
          </Button>
          <div
            className={`fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center gap-8 py-8 shadow-lg transition-all duration-300 ease-in-out transform ${
              toggle
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0"
            }`}
          >
            {navLinks.map((navLink) => {
              return (
                <MobileNavLink
                  key={navLink.id}
                  {...navLink}
                  setToggle={setToggle}
                />
              );
            })}
            <HiX
              className="absolute right-12 top-12 cursor-pointer text-xl"
              onClick={() => setToggle(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
