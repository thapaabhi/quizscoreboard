import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

export default function Calculator({ value, onClickx, onClicky }) {
  return (
    <div className="flex items-center justify-center space-x-2 h-full">
      <button onClick={onClickx}>
        <IoIosAddCircle size={22} />
      </button>
      <span className="w-10 text-center text-2xl">{value}</span>
      <button onClick={onClicky}>
        <GrSubtractCircle size={22} />
      </button>
    </div>
  );
}
