import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Scores from "./pages/Scores";
import axios from "axios";
import AllScoresContext from "./context/AllScoresContext";
import Sidebar from "./components/Sidebar.jsx";
import { Sidebar2 } from "./test/Home2";
import Sidebar3 from "./test/Sidebar3";
import Navbar from "./components/Navbar";
function App() {
  const [allScores, setAllScores] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const fetchScores = async () => {
    const response = await axios.get(
      "https://script.googleusercontent.com/macros/echo?user_content_key=1v4Si4a0B3f91LwOFEpqNhP-AboNkzY9EYNgS4etHup3DD8JHIe74tltNolwW71OTF7jNOik9mFWaHOT2xkuG-anudVpyUM2m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnIDBRny3--5zsF62jgoRYXvRl42HButPI72IVVHB9AE_8Qhhmu1lJ1NOG24HYWbQmnZGsupB20nAwd-JFlH8w5x9-oI_ouTmGg&lib=MWBYe4i-sINVKasSrdIcjMQ16_JWBohlm"
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
