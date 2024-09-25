import React, { useEffect, useState } from "react";

const ArcReactorLoader = () => {
  const loadingText = [
    "Calibrating Jarvis...",
    "Welcome Sergeant...",
    "On your Left...",
    "Getting the Armour Ready...",
    "Calling OKOYE...",
  ];

  const randomIndex = Math.floor(Math.random() * loadingText.length);
  const randomLoadingText = loadingText[randomIndex];

  const [characters, setCharacters] = useState([]);
  const statement = "Fetching data...";

  useEffect(() => {
    // Split the statement into characters
    const charactersArray = randomLoadingText.split("");

    // Set up a timer to add each character to the array with a delay
    const timer = setInterval(() => {
      setCharacters((prevCharacters) => [
        ...prevCharacters,
        charactersArray[prevCharacters.length],
      ]);
      if (charactersArray.length === characters.length) {
        clearInterval(timer);
      }
    }, 50); // Adjust the delay as needed

    return () => clearInterval(timer); // Clean up the timer
  }, []);

  // useEffect(() => {
  //     const randomIndex1 = Math.floor(Math.random() * loadingText.length);
  //     const randomLoadingText1 = loadingText[randomIndex1];
  //     const randomIndex2 = Math.floor(Math.random() * loadingText.length);
  //     const randomLoadingText2 = loadingText[randomIndex2];
  //     const randomIndex3 = Math.floor(Math.random() * loadingText.length);
  //     const randomLoadingText3 = loadingText[randomIndex3];
  //     setTextLoad([randomLoadingText1]);
  // }, []);
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-black justify-center items-center">
      <div className="w-80 h-80 relative scale-[1.5]">
        {/* COIL RING*/}
        <div className="absolute h-44 w-44 rounded-full bg-black m-auto inset-0 shadow-[0_0_5px_1px_#52fefe]">
          <div className="h-full w-full rounded-full shadow-[0_0_5px_4px_#52fefe_inset]"></div>
        </div>
        {/*CORE WRAPPER */}
        <div className="absolute h-36 w-36 rounded-full bg-[#073c4b] border-1 border-[#1b4e5f] m-auto inset-0 shadow-[0_0_1px_2px_#52fefe]">
          <div className="h-full w-full rounded-full shadow-[0_0_3px_4px_#52fefe_inset]"></div>
        </div>
        {/*OUTER CORE */}
        <div className="absolute h-28 w-28 rounded-full bg-white m-auto inset-0 shadow-[0_0_7px_6px_#52fefe_inset]">
          <div className="h-full w-full rounded-full shadow-[0_0_1px_1px_#52fefe]"></div>
        </div>
        {/*INNER CORE */}
        <div className="absolute h-16 w-16 rounded-full bg-white border-[6px] border-[#1b4e5f] m-auto inset-0 shadow-[0_0_8px_8px_#52fefe]">
          <div className="h-full w-full rounded-full shadow-[0_0_4px_5px_#52fefe_inset]"></div>
        </div>

        {/* COIL CONTAINER*/}
        <div
          className="absolute animate-spinner h-44 w-44 rounded-full duration-2000 m-auto inset-0"
          ani
        >
          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset]"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-45"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-90"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-135"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-180"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-225"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-270"></div>

          <div className="absolute w-7 h-4 bg-[#073c4b] top-[calc(50%-88px)] left-[calc(50%-15px)] origin-[15px_88px] shadow-[0_0_5px_#52fefe_inset] rotate-315"></div>
        </div>
      </div>
      <div className="random-text flex justify-center items-center text-3xl text-white w-1/2">
        <p className="typewriter" style={{ maxWidth: "fit-content" }}>
          {characters.map((char, index) => (
            <span className="text-3xl font-MarvelFont" key={index}>
              {char}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default ArcReactorLoader;
