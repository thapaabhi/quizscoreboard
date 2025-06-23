import Team from "./assets/Components/Teams";

export default function App() {
  const colleges = [
    "Harvard University",
    "Stanford University",
    "Massachusetts Institute of Technology",
    "University of Oxford",
    "University of Cambridge",
    "California Institute of Technology",
    "Princeton University",
    "Yale University",
    "University of California, Berkeley",
    "Columbia University",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-blue-800 mb-10 tracking-wide">
        🏆 Inter-College Quiz Scoreboard
      </h1>

      {/* 🟩 This wrapper now includes header + teams */}
      <div className="max-w-5xl mx-auto space-y-3">
        {/* Header Row */}
        <div className="grid grid-cols-[30%_repeat(4,1fr)] bg-blue-100 text-blue-800 font-bold text-lg rounded-xl h-16 items-center text-center shadow-sm divide-x divide-blue-200">
          <div className="text-left pl-4 flex items-center h-full">College</div>
          <div className="flex justify-center items-center h-full">Round 1</div>
          <div className="flex justify-center items-center h-full">Round 2</div>
          <div className="flex justify-center items-center h-full">Round 3</div>
          <div className="flex justify-center items-center h-full">Total</div>
        </div>

        {/* Team Rows */}
        {colleges.map((coll, key) => (
          <Team key={key} value={coll} />
        ))}
      </div>
    </div>
  );
}
