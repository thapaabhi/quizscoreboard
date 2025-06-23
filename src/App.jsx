import Team from "./assets/Components/Teams";

// App.jsx (only relevant parts changed)

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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 px-4 py-3">
      {/* <h1 className="text-3xl font-bold text-center text-blue-800 mb-6 tracking-wide leading-tight">
        🏆 Inter-College Quiz Scoreboard
      </h1> */}

      <div className="max-w-5xl mx-auto space-y-1">
        {/* Header Row */}
        <div className="grid grid-cols-[40%_repeat(4,1fr)] bg-blue-100 text-blue-800 font-semibold text-base rounded-xl h-12 items-center text-center shadow-sm divide-x divide-blue-200">
          <div className="text-left pl-3 flex items-center h-full">College</div>
          <div className="flex justify-center items-center h-full">Round 1</div>
          <div className="flex justify-center items-center h-full">Round 2</div>
          <div className="flex justify-center items-center h-full">Round 3</div>
          <div className="flex justify-center items-center h-full">Total</div>
        </div>

        {/* Teams Rows */}
        {colleges.map((coll, key) => (
          <Team key={key} value={coll} />
        ))}
      </div>
    </div>
  );
}
