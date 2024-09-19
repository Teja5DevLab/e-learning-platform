import { categories, courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRef } from "react";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Courses = () => {
  const carouselRef = useRef(null);

  const scrollToCourses = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div id="courses" className="section">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl mb-4 font-bold">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="max-w-[700px] text-Gray text-base leading-relaxed mx-auto">
          Our platform offers a wide range of courses across various categories,
          including Technology & Software, Business & Management, Creative Arts
          & Design, Personal Development, Health & Wellness, Language Learning,
          Science & Mathematics, Marketing & Sales, and Test Prep & Certification.
        </p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((category, index) => (
          <Categories
            key={category.id}
            {...category}
            index={index}
            scrollToCourses={scrollToCourses}
          />
        ))}
      </div>
      <h2 ref={carouselRef} className="mt-24 font-bold text-center text-2xl">
          Most Popular <span className="text-Teal">Courses</span>{" "}
        </h2>
      <div className="mt-12">
        <Carousel
          className="cursor-pointer"
          responsive={responsive}
          swipeable={true}
          draggable={true}
          infinite={true}
          keyBoardControl={true}
          autoPlay={true}
          autoPlaySpeed={2500}
          containerClass="carousel-container"
          itemClass="px-3"
          renderButtonGroupOutside={true}
        >
          {courses.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Courses;
