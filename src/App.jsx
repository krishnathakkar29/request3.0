import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Scores from "./pages/Scores";
import axios from "axios";
import AllScoresContext from "./context/AllScoresContext";
import Sidebar from "./components/Sidebar.jsx";
// import { Sidebar2 } from "./test/Home2";
import Sidebar3 from "./test/Sidebar3";
import Navbar from "./components/Navbar";
function App() {
  const [allScores, setAllScores] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchScores = async () => {
    const response = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=qgyDHcv5S9VAsqEvNpd78Z2QovaxhOVcn8dTpumIztomDUuLKQLr5igQD073cFTm6EWJxJDcUYunjQsubRz1NgWJ-WnsXpLom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC7u_RTCo1bMHlAh0Ix4vT24hwrXRH4EyOGDJzFfeGARqRyrYk2iZxl3CUmNYasaLFHDInDaZiJ0SN-VnPAGmQtWW5DL0qXhyA&lib=MWBYe4i-sINVKasSrdIcjMQ16_JWBohlm"
    );

    const data = response.data;
    console.log("data", data);

    setAllScores(data);
  };

  useEffect(() => {
    // fetchScores();
    // Set up the interval
    const intervalId = setInterval(fetchScores, 5000); // 5000 ms = 5 seconds

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <AllScoresContext.Provider
        value={{ allScores, setAllScores, isSidebarOpen, setIsSidebarOpen }}
      >
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Layout> */}
                  {/* <Sidebar2 /> */}
                  {/* </Layout> */}
                  <Navbar />
                  <Sidebar3 />
                  <Home />
                </>
              }
            />
            <Route
              path="team/:team"
              element={
                <>
                  {/* <Layout> */}
                  <Navbar />
                  <Sidebar3 />
                  <Scores />
                  {/* </Layout> */}
                  {/* <Sidebar/>
                  <Scores /> */}
                </>
              }
            />
          </Routes>
        </BrowserRouter>
      </AllScoresContext.Provider>
    </>
  );
}

export default App;
