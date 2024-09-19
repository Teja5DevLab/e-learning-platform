import {
  Home,
  Teacher,
  About,
  Contact,
  Footer,
  Navbar,
  Courses,
} from "./Components/index";

const App = () => {
  return (
    <div className="font-Poppins bg-gray-200">
      <Navbar />
      <Home />
      <About />
      <Courses />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
