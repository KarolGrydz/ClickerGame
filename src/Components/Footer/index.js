import React from 'react';
import { Col } from 'reactstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Modals from '../Modals';

const Footer = players => (
  <FooterDiv>
    <Col md="12" sm="12" xs="12" className="text-center">
      <Modals players={players} />
    </Col>
    <a href="https://kg.glogow.pl">English version</a>
    <p>
      Stworzone przez <a href="https://kg.glogow.pl">Ranald</a> 2016, Wszelkie
      prawa zastrzeżone
    </p>
  </FooterDiv>
);

Footer.propTypes = {
  players: PropTypes.array.isRequired
};

export default Footer;

const FooterDiv = styled.div`
  padding-top: 50px;
  font-size: 0.75rem;
  background-color: #fff;
`;
