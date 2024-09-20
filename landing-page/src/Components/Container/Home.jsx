import hero from "../../assets/hero.webp";
import { useEffect } from "react";
import Typed from "typed.js";
import { Button } from "@nextui-org/button";
import { logos } from "../../Data";
import Marquee from "react-fast-marquee";

const Home = () => {
  useEffect(() => {
    const options1 = {
      strings: ["learn online", "Discover new skills", "Achieve your goal"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1500,
      loop: true,
    };

    const typed1 = new Typed("#typed-text", options1);

    const options2 = {
      strings: ["100+ leading universities and companies"],
      typeSpeed: 25,
    };
    const typed2 = new Typed("#typed-text-2", options2);

    return () => {
      typed1.destroy();
      typed2.destroy();
    };
  }, []);
  return (
    <div id="home" className="section">
      <div className="md:flex items-center justify-center">
        <div className="slideright">
          <div className="text-Teal text-sm font-bold mb-3">
            {" "}
            Your e-learning Partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> new way to <br />{" "}
            <span className="text-Teal" id="typed-text"></span>
          </div>
          <p className="max-w-sm text-Gray text-base leading-relaxed mt-3">
            At Estelle Academy, our mission is to connect learners with
            knowledge and empower individuals to succeed.
          </p>
          <div className="mt-5">
            <Button className="bg-Teal border-Teal border-[1.5px] text-white font-bold px-7 py-5 rounded-lg mr-4 text-sm">
              Get Started
            </Button>
            <Button className="border-Gray border-[1.5px] font-bold px-7 py-5 rounded-lg text-sm bg-transparent">
              Discover
            </Button>
          </div>
        </div>
        <div className="md:w-[60%] md:mt-0 mt-2 popup">
          <img src={hero} alt="Image" />
        </div>
      </div>
      <div>
        <p className="fadein text-center md:mt-0 mt-4 text-xl">
          We collaborated with{" "}
          <span className="text-Teal" id="typed-text-2"></span>
        </p>
        <div className="translate-y-8">
          <Marquee speed={70}>
            <div className="flex justify-center items-center gap-8 p-2 flex-wrap mt-6">
              {logos.map((logo, index) => (
                <div className="w-36 md:w-32" key={index}>
                  <img src={logo} alt="logo" className="w-full object-cover" />
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default Home;
