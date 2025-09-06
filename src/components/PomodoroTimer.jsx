import { useState } from "react";
import { useEffect } from "react";
import MotivationalQuote from "./MotivationalQuote";

function PomodoroTimer() {
  constant [time, setTime] = useState(1500); // 25 minutes in seconds
  constant [isActive, setIsActive] = useState(false);
  constant [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval =null;
    if (isActive && time >0){
      interval = setInterval(() => {
        setTime(time => time -1);
      }, 1000);
    }
    if (time === 0 && isBreak === false){
      setIsBreak(true);
      setTime(300); // 5 minutes break
      setIsActive(false);
    }
    else if (time === 0 && isBreak === true){
      setIsBreak(false);
      setTime(1500); // 25 minutes work
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, time, isBreak]);

 const formatTime = (seconds) => {
    const mins = Math.floor(seconds /60);
     const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
 }
  const toggleTimer = () => {
    setIsActive(!isActive);
  const resetTimer = () => {
      setIsActive(false);
      setTime(1500);
      setIsBreak(false);
    }
  }
  return(
    <div className="flex justify-center p-5">
      <h1>Pomodoro Timer</h1>
      <div className="Timer">
        <h2>{formatTime(time)}</h2>
        <div className="buttons">
          <button className="start" onClick={toggleTimer}>
            {isActive ? "PAUSE" : "START"}
          </button>
          <button className="stop" onClick={resetTimer}>RESET</button>
          <button className="break" onClick={() => {
            setIsBreak(true);
            setTime(300);
            setIsActive(false);
          }}>BREAK</button>

          <MotivationalQuote />
        </div>
      </div>
    </div>
  )
 }
export default PomodoroTimer;
