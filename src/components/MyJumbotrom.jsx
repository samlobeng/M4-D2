import React from 'react';
import {Jumbotron, Container} from 'react-bootstrap'

export default function MyJumbotrom(){
    return (
        <Jumbotron fluid>
  <Container>
    <h1>Strive Bookstore</h1>
    <p className = "text-success">
      Welcome to the strive books store. You can find anything you want.
    </p>
  </Container>
</Jumbotron>
    )
}