import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import Home from '../Home';
import Firebase from '../Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  state = {
    players: [],
    addScore: false,
    numberOfClickToAdd: 0,
    playerExist: true,
    firebase: new Firebase()
  };

  addNewScore = numberOfClickToAdd => this.setState({ numberOfClickToAdd });

  changeSite = () => {
    let { addScore } = this.state;
    addScore = !addScore;
    this.setState({ addScore });
  };

  gotData = data => {
    let newPlayers = [];
    let scores = data.val();
    let keys = Object.keys(scores);
    for (let i = 0; i < keys.length; i++) {
      let k = keys[i];
      let name = scores[k].name;
      let points = scores[k].points;
      let newPlayer = {
        id: k,
        name,
        points
      };

      newPlayers.push(newPlayer);
    }

    newPlayers.sort((a, b) => b.points - a.points);
    newPlayers = newPlayers.splice(0, 10);

    this.setState({
      players: newPlayers
    });
  };

  gotError = err => console.log('Error ', err);

  componentDidMount() {
    const { firebase } = this.state;
    firebase.getDataFromFireBase(this.gotData, this.gotError);
  }

  render() {
    const { firebase } = this.state;
    let { players, addScore, numberOfClickToAdd } = this.state;
    return (
      <Container fluid={true} className="text-center">
        <Col md="12" sm="12" xs="12">
          <MainPage>
            <Header addScore={addScore} />
            <Home
              addScore={addScore}
              players={players}
              addNewScore={this.addNewScore}
              changeSite={this.changeSite}
              numberOfClickToAdd={numberOfClickToAdd}
              addScoreToFireBase={firebase.addScoreToFireBase}
              changeAddScore={this.changeAddScore}
            />
          </MainPage>
          <Footer players={players} />
        </Col>
      </Container>
    );
  }
}

export default App;

const MainPage = styled.div`
  background-color: #eee;
  padding-top: 48px;
  padding-bottom: 48px;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 300;
`;

export const Paragraf = styled.p`
  font-size: 1.4rem;
  font-weight: 200;
  margin-bottom: 15px;
`;
