// import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// // import useLocalStorage from 'react-use-localstorage';
// import {
//   Route,Link ,BrowserRouter as Router
// } from "react-router-dom";



// export default class Register extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleSubmit = this.handleSubmit.bind(this);
    
//     this.state = {
//       message: "",
//       formDataa: {
//         name: "",
//         email: "",
//         password :"",
//         phone: ""
//       }
//     };
//   }

//   handleSubmit(e) {
//     e.preventDefault();
//     this.setState({ message: 'Sending...' }, this.sendFormData);
//   }

// sendFormData() {
//   var formData = {
//       name: this.refs.Name.value,
//       email: this.refs.Email.value,
//       password: this.refs.Password.value,
//       phone: this.refs.Phone.value};

//   setTimeout(() => { 
//     localStorage.setItem(formData.email,JSON.stringify(formData))
//     this.setState({ message: 'datasent' });
//   }, 2000);
// }

//     render(){
//     return(
//     <div className="m-auto w-25">
//       {this.state.message}
//       <Form onSubmit={this.handleSubmit}>
//               <Form.Group><Form.Label>name</Form.Label><Form.Control id="name" type="text" ref="Name" /></Form.Group>
//               <Form.Group><Form.Label >email</Form.Label><Form.Control id="email" type="email" ref="Email" /></Form.Group>
//               <Form.Group>  <Form.Label >password</Form.Label><Form.Control id="password" type="password" ref="Password" /></Form.Group>
//               <Form.Group>  <Form.Label >phone</Form.Label><Form.Control id="phone" type="number" ref="Phone"  /></Form.Group>
//             <Button type="submit">submit</Button>
//         </Form>
//     </div>
//     );
//   }
// }

import React from "react";


export class Register extends React.Component {
    constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    
    this.state = {
      message: "",
     
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ message: 'Sending...' }, this.sendFormData);
  }

sendFormData() {
  var formData = {
      name: this.refs.Name.value,
      email: this.refs.Email.value,
      password: this.refs.Password.value,
      phone: this.refs.Phone.value
    };

  setTimeout(() => { 
    if (formData.name==='' && formData.email ==='' && formData.password==='' && formData.phone===''){
      this.setState({message:"enter all the details"})
     
    }
    else{
      localStorage.setItem(formData.email,JSON.stringify(formData))
      this.setState({ message: 'Your account is created! ' });
     
    }
  }, 1000);

}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <Form onSubmit={this.handleSubmit}>
               <Form.Group><Form.Label>name</Form.Label><Form.Control type="text" ref="Name" required /></Form.Group>
              <Form.Group><Form.Label >email</Form.Label><Form.Control  type="email" ref="Email" required/></Form.Group>
               <Form.Group>  <Form.Label >password</Form.Label><Form.Control type="password" ref="Password" required/></Form.Group>
              <Form.Group>  <Form.Label >phone</Form.Label><Form.Control  type="number" ref="Phone"  required/></Form.Group>
             <Button type="submit">submit</Button>{this.state.message}
         </Form>
       
      </div>
    );
  }
}