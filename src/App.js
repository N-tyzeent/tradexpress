import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Pages/LandingPage";
import GetStarted from "./Pages/GetStarted";
import "bootstrap/dist/css/bootstrap.min.css";
import InstantBuySell from "./Pages/InstantBuySell";
import Login from "./Pages/Login";
import GetStarted1 from "./Pages/GetStarted1";
import InstantBuySell1 from "./Pages/InstantBuySell1";
import Welcome from "./Pages/Welcome";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({ exchangerates: [] });
  useEffect(() => {
    let fetchData = async (url) => {
      let reaction = await fetch(url);
      let dataObtained = await reaction.json();
      console.log(dataObtained);
      setData({ ...data, exchangerates: dataObtained.data });
    };
    fetchData("https://api.coinlore.net/api/tickers/?start=0&limit=5 ");
  }, []);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage exchangerates = {data.exchangerates} />} />
          <Route path="/getstarted" element={<GetStarted />} />
          <Route path="/instantbuysell" element={<InstantBuySell />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getstarted1" element={<GetStarted1 />} />
          <Route path="/instantbuysell1" element={<InstantBuySell1 />} />
          <Route path="/welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
