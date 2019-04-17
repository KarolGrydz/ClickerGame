import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Paragraf } from '../../App';

import { endGame } from '../../../helperFunctions/endGame';
import Counter from '../../Counter';

class Main extends Component {
  state = {
    count: 0,
    mili: 0,
    sec: 0,
    startStopper: true
  };

  toggleClick = () => {
    this.setState({
      count: this.state.count + 1
    });

    if (this.state.startStopper) {
      this.toggleTime();
      return this.setState({
        startStopper: false
      });
    }
  };

  toggleTime = () => {
    let sec = 0;
    let mili = 0;
    let total = 0;

    this.timer = setInterval(() => {
      total += 1;
      sec = Math.floor(total / 100);
      mili = total % 100;
      this.setState({ mili, sec });
      if (total > 999) {
        this.setState({
          startStopper: true
        });
        clearInterval(this.timer);
        return this.stopTime();
      }
    }, 10);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  checkToAddScoreToHighScores = () => {
    let { players } = this.props;
    const { addNewScore, changeSite } = this.props;
    const { count } = this.state;
    this.setState({ count: 0, mili: 0, sec: 0 });
    for (let player of players) {
      if (count >= player.points) {
        return [addNewScore(count), changeSite()];
      }
    }
  };

  stopTime = () => {
    const { count } = this.state;

    endGame(count);
    return this.checkToAddScoreToHighScores();
  };

  render() {
    const { count, mili, sec } = this.state;
    return (
      <React.Fragment>
        <Button color="primary" size="lg" onClick={this.toggleClick}>
          Kliknij mnie!
        </Button>
        <Paragraf>
          Kliknełeś mnie! <Counter value={count} /> razy!
        </Paragraf>
        <Paragraf>
          <Counter value={sec} />:<Counter value={mili} />
        </Paragraf>
      </React.Fragment>
    );
  }
}

export default Main;
