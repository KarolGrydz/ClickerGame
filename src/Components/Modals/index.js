import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Modals extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    const { modal } = this.state;

    this.setState({
      modal: !modal
    });
  };

  render() {
    let { players } = this.props.players;
    return (
      <div>
        <Button color="info" size="lg" onClick={this.toggle}>
          Tablica
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Najlepsi klikacze</ModalHeader>
          <ModalBody>
            <table>
              <tbody>
                <tr>
                  <th>Lp</th>
                  <th>Imię</th>
                  <th>Punkty</th>
                </tr>
                {players
                  ? players.map((player, index) => (
                      <tr key={player.id}>
                        <th>{index + 1}</th>
                        <th>{player.name}</th>
                        <th>{player.points}</th>
                      </tr>
                    ))
                  : ``}
              </tbody>
            </table>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Zamknij
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
