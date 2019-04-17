import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  Col,
  Row
} from 'reactstrap';

class AddScore extends Component {
  state = {
    counts: this.props.numberOfClickToAdd,
    playerName: ''
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleEnter = e => {
    if (e.key === 'Enter') {
      return this.addToAppjs(e);
    }
  };

  addToAppjs = e => {
    e.preventDefault();
    const { playerName, counts } = this.state;
    const { addScoreToFireBase, changeSite } = this.props;
    addScoreToFireBase(playerName, counts);
    return changeSite();
  };

  render() {
    const { counts } = this.state;
    return (
      <Container>
        <Row>
          <Form>
            <FormGroup>
              <Col md={{ size: 8, offset: 2 }}>
                <Input
                  type="text"
                  name="name"
                  placeholder="Wpisz swoje imię"
                  onChange={this.handleChange('playerName')}
                  onKeyPress={this.handleEnter}
                />
              </Col>
            </FormGroup>
            <Col md="12">
              <h3>Twoje punkty {counts}</h3>
            </Col>
            <Col md="12">
              <Button onClick={this.addToAppjs}>Zatwierdź</Button>
            </Col>
          </Form>
        </Row>
      </Container>
    );
  }
}

export default AddScore;
