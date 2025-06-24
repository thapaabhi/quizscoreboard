import { createContext } from "react";
import { useState } from "react";

export const Datahere = createContext();

export function DataProvider({ children }) {
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

  const [teams, setTeams] = useState(
    colleges.map((name) => ({ name, scores: [0, 0, 0], total: 0 }))
  );

  function changeScore(teamIdx, roundIdx, delta) {
    setTeams((prev) => {
      const next = [...prev];
      const team = { ...next[teamIdx] };
      const scoresCopy = [...team.scores];

      scoresCopy[roundIdx] = Math.max(0, scoresCopy[roundIdx] + delta);
      team.scores = scoresCopy;
      team.total = scoresCopy.reduce((a, b) => a + b, 0);

      next[teamIdx] = team;
      return next;
    });
  }

  const values = { teams, changeScore };
  return <Datahere.Provider value={values}>{children}</Datahere.Provider>;
}
