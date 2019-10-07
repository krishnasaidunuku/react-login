
import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

// import Home from './home';
export class Login extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
          message:""
          }
        }
      
    
      handleSubmit(e){
        
        var email= this.refs.Email.value;
        var password= this.refs.Password.value;
        if(email!==''&&password!==""){
            var obj=JSON.parse(localStorage.getItem(email));
            if (obj.email===email && obj.password===password){
                this.setState({ message: '' })
                alert('authentication successful');
                
            
            }
            else{
                e.preventDefault();
                this.setState({ message: 'wrong credentials' });
            }
        }
        else{
            
            this.setState({ message: 'Enter userid and password' });
        }
      }
    
    render() {
      return (
        <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Login</div>
          <Form onSubmit={this.handleSubmit}>
                 <Form.Group><Form.Label >email</Form.Label><Form.Control  type="email" ref="Email" required /></Form.Group>
                 <Form.Group>  <Form.Label >password</Form.Label><Form.Control type="password" ref="Password" required /></Form.Group>
                <Button type="submit">Login</Button>{this.state.message}
         </Form>
        </div>
      );
    }
  }


 