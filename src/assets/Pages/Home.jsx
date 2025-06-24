// import { useState } from "react";
// import Team from "../Components/Teams";
// import { useNavigate } from "react-router-dom";

// const colleges = [
//   "Harvard University",
//   "Stanford University",
//   "Massachusetts Institute of Technology",
//   "University of Oxford",
//   "University of Cambridge",
//   "California Institute of Technology",
//   "Princeton University",
//   "Yale University",
//   "University of California, Berkeley",
//   "Columbia University",
// ];

// export default function Home() {
//   const navigate = useNavigate();
//   const [teams, setTeams] = useState(
//     colleges.map((name) => ({ name, scores: [0, 0, 0], total: 0 }))
//   );

//   function changeScore(teamIdx, roundIdx, delta) {
//     setTeams((prev) => {
//       const next = [...prev];
//       const team = { ...next[teamIdx] };
//       const scoresCopy = [...team.scores];

//       scoresCopy[roundIdx] = Math.max(0, scoresCopy[roundIdx] + delta);
//       team.scores = scoresCopy;
//       team.total = scoresCopy.reduce((a, b) => a + b, 0);

//       next[teamIdx] = team;
//       return next;
//     });
//   }

import Team from "../Components/Teams";
import { useContext } from "react";
import { Datahere } from "../Context/FileContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { teams, changeScore } = useContext(Datahere);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 px-4 py-4 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-blue-900 mb-6 text-center">
        Bizzbugg Quiz Competition
      </h1>

      {/* Main content container */}
      <div className="max-w-5xl w-full space-y-1">
        {/* Header Row */}
        <div className="grid grid-cols-[40%_repeat(4,1fr)] bg-blue-100 text-blue-800 font-semibold text-base rounded-xl h-12 items-center text-center shadow-sm divide-x divide-blue-200">
          <div className="text-left pl-3 flex items-center h-full">College</div>
          <div className="flex justify-center items-center h-full">Round 1</div>
          <div className="flex justify-center items-center h-full">Round 2</div>
          <div className="flex justify-center items-center h-full">Round 3</div>
          <div className="flex justify-center items-center h-full">Total</div>
        </div>

        {/* Teams */}
        {teams.map((team, teamIdx) => (
          <Team
            key={teamIdx}
            value={team.name}
            scores={team.scores}
            total={team.total}
            teamIdx={teamIdx}
            changeScore={changeScore}
          />
        ))}
      </div>

      {/* Winner List Button */}
      <div className="flex space-x-20">
        <button
          onClick={() => navigate("/winner", { state: teams })}
          className="mt-3 bg-blue-600 hover:bg-blue-700  text-white font-semibold
         py-2 px-5 rounded-xl shadow-lg transition "
        >
          View Winner List
        </button>
        <button
          onClick={() => window.location.reload()}
          className="mt-3 bg-blue-600 hover:bg-blue-700  text-white font-semibold
         py-2 px-5 rounded-xl shadow-lg transition "
        >
          🔄 Clear Data
        </button>
      </div>
    </div>
  );
}
