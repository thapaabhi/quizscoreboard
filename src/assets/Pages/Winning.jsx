import { useNavigate, useLocation } from "react-router-dom";
import { Datahere } from "../Context/FileContext";
import { useContext } from "react";

export default function Winning() {
  const { teams } = useContext(Datahere);
  const navigate = useNavigate();

  const winners = [...teams].sort((a, b) => b.total - a.total);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-blue-200 px-3 py-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-4">
          🏆 Final Standings
        </h1>

        {/* Winner List with Max Height */}
        <ol
          className="bg-white shadow rounded-lg border-2 border-black
        bg-gradient-to-b from-blue-160 to-blue-100
        overflow-y-auto max-h-[80vh] divide-y divide-gray-200 p-10"
        >
          {winners.map((t, i) => (
            <li
              key={t.name}
              className={`flex justify-between items-center px-4 ${
                i === 0 ? "py-4 bg-yellow-100" : "py-2"
              }`}
            >
              <span
                className={
                  i === 0
                    ? "text-lg font-extrabold text-red-700"
                    : i === 1
                    ? "text-sm font-bold text-blue-700"
                    : i === 2
                    ? "text-sm font-semibold text-blue-600"
                    : "text-sm font-normal text-gray-800"
                }
              >
                {i + 1}. {t.name}
              </span>
              <span
                className={
                  i === 0
                    ? "text-xl font-extrabold text-red-700"
                    : "text-sm font-semibold text-blue-700"
                }
              >
                {t.total}
              </span>
            </li>
          ))}
        </ol>

        <div className="text-center mt-4 ">
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded shadow transition"
          >
            🔙 Back
          </button>
       
        </div>
      </div>
    </div>
  );
}
