import React from "react";
import {Navbar,Container,NavbarBrand} from 'react-bootstrap';
 
export default class Footer extends React.Component{
  render(){
    return(
      <div className="fixed-bottom">  
            <Navbar bg="dark" variant="dark">
                <Container>
                    <NavbarBrand>Footer</NavbarBrand>
                </Container>
            </Navbar>
        </div>
   
    )
  }
}