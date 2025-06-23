import { useState, useEffect } from "react";
import Calculator from "./Buttons";

export default function Team({ value }) {
  const [numbers, setNumbers] = useState([0, 0, 0]);
  const [total, setTotal] = useState(1);

  function incrementAtIndex(index) {
    setNumbers((prevNumbers) => {
      const newNumbers = [...prevNumbers];
      newNumbers[index] += 1; // increment the number
      return newNumbers;
    });
  }
  function decrementAtIndex(index) {
    if (numbers[index] > 0) {
      setNumbers((prevNumbers) => {
        const newNumbers = [...prevNumbers];
        newNumbers[index] -= 1; // increment the number
        return newNumbers;
      });
    }
  }
  useEffect(() => {
    const totalofthree = numbers[0] + numbers[1] + numbers[2];
    setTotal(totalofthree);
  }, [numbers]);

  return (
    <div className="grid grid-cols-[30%_repeat(4,1fr)] bg-white text-gray-800 text-lg rounded-xl h-16 items-center text-center shadow-sm divide-x divide-gray-200">
      <div className="text-left pl-4 font-semibold text-blue-700 flex items-center h-full">
        {value}
      </div>

      <div className="flex justify-center items-center h-full">
        <Calculator
          value={numbers[0]}
          onClickx={() => incrementAtIndex(0)}
          onClicky={() => decrementAtIndex(0)}
        />
      </div>

      <div className="flex justify-center items-center h-full">
        <Calculator
          value={numbers[1]}
          onClickx={() => incrementAtIndex(1)}
          onClicky={() => decrementAtIndex(1)}
        />
      </div>

      <div className="flex justify-center items-center h-full">
        <Calculator
          value={numbers[2]}
          onClickx={() => incrementAtIndex(2)}
          onClicky={() => decrementAtIndex(2)}
        />
      </div>

      <div className="flex justify-center items-center h-full font-bold text-blue-800 text-2xl">
        {total}
      </div>
    </div>
  );
}
