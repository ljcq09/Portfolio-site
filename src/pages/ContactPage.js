import React from 'react';

import Form from 'react-bootstrap/Form';
import {Button} from 'react-bootstrap';

import Hero from '../components/Hero';
import Content  from '../components/Content';
import LeftButton from '../components/LeftButton';
import Axios from 'axios';


const GoLeft="about";

class ContactPage extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,

        }
    }

    handleChange=(event)=>{

        const target = event.target;
        const value =target.type ==='checkbox'? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })

    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(event.target)

        this.setState({
            disabled: true,
            // emailSent: true

        });

        Axios.post('https://hidden-scrubland-96563.herokuapp.com/api/email', this.state)
        
        .then(res =>{
            if(res.data.success){
                this.setState({
                    disabled: false,
                    emailSent: true
                })
            }
            else{
                this.setState({
                    disabled: false,
                    emailSent: false
                })
            }
            
        })
        .catch(err =>{
            console.log(err)
            this.setState({
                disabled: false,
                emailSent: false
            })
        })

    }

    render(){
        return(
            <div className="g-background-pages g-hero-color">
                <Hero title={this.props.title}/>
                <br/>              
                
                <Content>
                    <Form onSubmit={this.handleSubmit}>
                    
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange ={this.handleChange}/>
                        </Form.Group>
                        
                        <div className="g-left-button"><LeftButton GoLeft={GoLeft}/></div>
                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange ={this.handleChange}/>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange ={this.handleChange}/>
                        </Form.Group>

                        <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className ="d-inline success-msg">Email Sent</p>}
                        {this.state.emailSent === false && <p className ="d-inline err-msg">Email Not Sent</p>}

                    </Form>
                </Content>
                
                
                <br/><br/><br/>
            </div>
        );
    }

}

export default ContactPage;