import React from "react";
import "./Header.css";

const Header = props => (
    <div className="header">
        <header className="App-header">
            <h1 className="App-title">Snoo Clicky Game</h1>
            <p></p>
                <div className={props.message.indexOf("incorrectly") !== -1 ?
                    "message_badGuess" :
                    props.message.indexOf("correctly") !== -1 ?
                        "message_goodGuess" :
                        "message_start"}>
                    {props.message}
                </div>
                <div className = "scoreboard">Score: {props.score} | Top Score: {props.bestScore}</div>
        </header>
    </div>
)

export default Header;
