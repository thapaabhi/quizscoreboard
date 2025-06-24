import { IoIosAddCircle } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

export default function Calculator({ value, onClickx, onClicky }) {
  return (
    <div className="flex items-center justify-center space-x-1 h-full">
      <button onClick={onClickx} className="p-0" aria-label="Increase score">
        <IoIosAddCircle size={18} />
      </button>
      <span className="w-8 text-center text-xl">{value}</span>
      <button onClick={onClicky} className="p-0" aria-label="Decrease score">
        <GrSubtractCircle size={18} />
      </button>
    </div>
  );
}
