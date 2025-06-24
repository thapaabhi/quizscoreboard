import Home from "./assets/Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Winning from "./assets/Pages/Winning";
import { DataProvider } from "./assets/Context/FileContext";

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/winner" element={<Winning />}></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  );
}
