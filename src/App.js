import './App.css';
import React, { useState, useEffect } from 'react';
import FlagImage from './components/FlagImage/FlagImage';
import Scoreboard from './components/Scoreboard/Scoreboard';
import Timer from './components/Timer/Timer';
import GuessForm from './components/GuessForm/GuessForm';
import HelpButton from './components/HelpButton/HelpButton';
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";



function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(15);
  // const [playerName, setPlayerName] = useState("");
  const [helpLettersCounter, setHelpLettersCounter] = useState(0);
  const [helpLetter, setHelpLetter] = useState("");

  // Obtener la lista de países al cargar el componente
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/flag/images")
      .then((response) => response.json())
      .then((data) => setCountries(data.data))
      .catch((error) => console.log(error));
  }, []);

  // Seleccionar un país aleatorio al obtener la lista de países
  useEffect(() => {
    selectNewCountry(countries);
  }, [countries]);

  // Actualizar el temporizador
  useEffect(() => {
    let intervalId;

    if (selectedCountry && timer > 0) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    }

    const handleDefeat = () => {
      if (timer <= 0) {
        console.log("perdiste");
      }
    };

    handleDefeat();
    
    return () => {
      clearInterval(intervalId);
    };

  }, [selectedCountry, timer]);

  const selectNewCountry = (countries) => {
    if (countries.length > 0) {
      const randomIndex = Math.floor(Math.random() * countries.length);
      setSelectedCountry(countries[randomIndex]);
      setTimer(15);
      setHelpLettersCounter(0);
    }
  }

  const handleGuess = (event) => {
    event.preventDefault();
    const guess = event.target.elements.guess.value.toLowerCase();
    
    if (guess === selectedCountry?.name.toLowerCase()) {
      setPoints((prevPoints) => prevPoints + 10 + timer);
      selectNewCountry(countries);
    } else {
      setPoints((prevPoints) => prevPoints - 1);
    }
    event.target.reset();
  };

  const handleHelp = () => {
    if (helpLettersCounter < 2 && timer > 2) {
      setHelpLettersCounter((prevHelpLetters) => prevHelpLetters + 1);
      const countryName = selectedCountry?.name.toLowerCase();
      const randomIndex = Math.floor(Math.random() * countryName.length);
      const randomLetter = countryName[randomIndex];
      setHelpLetter(randomLetter);
      console.log(randomLetter);
      console.log(selectedCountry.name);
      setTimer((prevTimer) => prevTimer - 2);
    }
  };

  return (
    <div>
      <h1>Adivina la bandera</h1>
      {selectedCountry && (
        <div>
          <FlagImage flagUrl={selectedCountry.flag} />
          <Timer seconds={timer} />
          <div className="center-notflex">
            <ProgressBar
              percent={timer * 6.7}
              filledBackground="linear-gradient(to right, #d12d28, #09e1cd)"
            />
          </div>
          <Scoreboard points={points} />
          <HelpButton handleHelp={handleHelp} />
          <GuessForm handleGuess={handleGuess} helpLetter={helpLetter} />
        </div>
      )}
    </div>
  );
}

// Usar propTypes

export default App;
