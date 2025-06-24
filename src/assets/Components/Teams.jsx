import Calculator from "./Buttons";

export default function Team({ value, scores, total, teamIdx, changeScore }) {
  return (
    <div className="grid grid-cols-[40%_repeat(4,1fr)] bg-white text-gray-800 text-base rounded-xl h-12 items-center text-center shadow-sm divide-x divide-gray-200">
      <div className="text-left pl-3 font-semibold text-blue-700 flex items-center h-full">
        {value}
      </div>

      {[0, 1, 2].map((roundIdx) => (
        <div key={roundIdx} className="flex justify-center items-center h-full">
          <Calculator
            value={scores[roundIdx]}
            onClickx={() => changeScore(teamIdx, roundIdx, +1)}
            onClicky={() => changeScore(teamIdx, roundIdx, -1)}
          />
        </div>
      ))}

      <div className="flex justify-center items-center h-full font-bold text-blue-800 text-xl">
        {total}
      </div>
    </div>
  );
}
