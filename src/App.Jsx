import {UseState} from 'react';
import "../components/PomodoroTimer.css";

function App() {

return(
    <div className = "flex justify-center p-5">
        <h1> Pomodoro Timer </h1>
        <div className = "Timer"></div>
            <h2>25:00</h2>
            <div className = "buttons">
                <button>START</button>
                <button>RESET</button>
                <button>BREAK</button>
                </div>
    </div>
)
}