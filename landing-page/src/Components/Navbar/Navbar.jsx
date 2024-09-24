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
      <div className="container mx-auto px-2">
        <div
          className={`${
            active ? "py-2" : "py-4"
          } flex items-center justify-between transition-[padding] duration-300`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="slidedown hover:scale-110 text-3xl sm:hidden cursor-pointer text-Teal" style={{ animationDuration: ".8s" }}
              onClick={() => setToggle(true)}
            />
            <div className="slidedown text-xl text-Teal uppercase tracking-wide font-bold" style={{ animationDuration: "1.2s" }}>
              <a href="#home">Estelle Academy</a>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 md:gap-8">
            {navLinks.map((navLink) => (
              <NavLink key={navLink.id} {...navLink} />
            ))}
          </div>
          <Button className="slidedown border-Gray border-[1.5px] font-bold px-7 mx-3 py-5 rounded-lg text-sm bg-transparent" style={{ animationDuration: "1.6s" }}>
            Sign Up
          </Button>
          <div
            className={`fixed h-lvh w-64 top-0 left-0 z-50 bg-Teal text-white px-10 shadow-lg transform transition-all duration-500 ease-in-out ${
              toggle ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <HiX
              className="absolute right-6 top-6 cursor-pointer text-3xl hover:scale-110"
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
            <div className="mt-8 border-t-[1.5px] border-white/50 pt-4">
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
