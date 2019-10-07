import React from "react";
import {  Navbar } from "react-bootstrap";


export default class Header extends React.Component {
  render() {
    return (
      <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
         <h1>Header</h1>
        </Navbar.Brand>
      </Navbar>
    </div>
    )
  }
}