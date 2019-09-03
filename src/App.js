import React, { Component } from 'react';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Scoreboard from "./components/Scoreboard";
import faces from "./friends.json";

class App extends Component {
  // Setting this.state.cards to the faces array
  state = {
    cards: faces,
    score: 0,
    highscore: 0
  };

  // handles clicks poorly
  clickHandler = id => {
    this.state.cards.find((clicked, index) => {
      if (clicked.id === id) {
        if (faces[index].count === 0) {
          faces[index].count++;
          this.setState( {score: this.state.score + 1}, () => {
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
          return false;
        }
      } else {
        console.log("Error!")
        return null;
      }
    });
  }

  // handles game over business
  gameOver = () => {
    // record new high score if applicable
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, () => {
        console.log(this.state.highscore);
      });
    }
    // reset each click count to zero
    this.state.cards.forEach(element => {
      element.count = 0;
    });
    // tell the user
    // TODO: find less obnoxious way to inform user
    alert(`Game Over! You made it ${this.state.score} clicks!`);
    this.setState( {score: 0} );
    return true;
  }
  
  // render is a built in react deal, gets called whenever setState is called
  render() {
    return (
      <Wrapper>
        <Scoreboard score={this.state.score} highscore={this.state.highscore}>Clicky Game</Scoreboard>
        {this.state.cards.map(card => (
          <Card
            clickHandler={this.clickHandler}
            id={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
