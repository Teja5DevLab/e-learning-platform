import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";

const Course = ({ image, title, category, rating, participants, price }) => {
  return (
    <div className="p-2 min-w-[15rem] bg-white rounded-md">
      <img src={image} alt="Courses" />
      <div className="mt-2 text-Teal text-sm">{category}</div>
      <div className="text-sm font-bold mt-2">{title}</div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineUser />
          </div>
          <div>{participants}</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-Solitude p-1 rounded-full">
            <AiOutlineStar className="text-Yellow" />
          </div>
          <div className="text-sm font-bold">{rating}</div>
        </div>
        <div className="text-sm font-bold">{price}</div>
      </div>
    </div>
  );
};

export default Course;
