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

  console.log(total);

  return (
    <div className="grid grid-cols-[40%_repeat(4,1fr)] bg-white text-gray-800 text-base rounded-xl h-12 items-center text-center shadow-sm divide-x divide-gray-200">
      <div className="text-left pl-3 font-semibold text-blue-700 flex items-center h-full">
        {value}
      </div>

      {[0, 1, 2].map((index) => (
        <div key={index} className="flex justify-center items-center h-full">
          <Calculator
            value={numbers[index]}
            onClickx={() => incrementAtIndex(index)}
            onClicky={() => decrementAtIndex(index)}
          />
        </div>
      ))}

      <div className="flex justify-center items-center h-full font-bold text-blue-800 text-xl">
        {total}
      </div>
    </div>
  );
}
