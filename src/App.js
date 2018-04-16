import React, { Component } from "react";
import PlayCard from "./components/PlayCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import snoos from "./choices.json";
import "./App.css";


class App extends Component {
  state = {
    message: "Click a Snoo to start!",
    bestScore: 0,
    score: 0,
    snoos: snoos,
    unselectedSnoos: snoos
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  clickSnoo = name => {
    const findSnoo = this.state.unselectedSnoos.find(item => item.name === name);
    if (findSnoo === undefined) {
      this.setState({
        message: "You already picked this Snoo! Click another Snoo to try again!",
        bestScore: (this.state.score > this.state.bestScore) ? this.state.score : this.state.bestScore,
        score: 0,
        snoos: snoos,
        unselectedSnoos: snoos
      });
    }
    else {
      const newSnoos = this.state.unselectedSnoos.filter(item => item.name !== name);
      this.setState({
        message: "Good guess! Pick Another!",
        score: this.state.score + 1,
        snoos: snoos,
        unselectedSnoos: newSnoos
      });
    }
    this.shuffleArray(snoos);
  };

  render() {
    return (
      <Wrapper>
        <Header
          message={this.state.message}
          score={this.state.score}
          bestScore={this.state.bestScore}
        />
        {
          this.state.snoos.map(choice => (
            <PlayCard
              name={choice.name}
              image={choice.image}
              clickSnoo={this.clickSnoo}
              score={this.state.score}
            />
          ))
        }
      </Wrapper>
    );
  }
}

export default App;