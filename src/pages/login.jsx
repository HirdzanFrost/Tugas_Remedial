import React from 'react'

import { 
    InputGroup,
    FormControl,
    Button,
    Modal
} from "react-bootstrap";

import { Link , Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import {  login  }from '../redux/actions'

class LoginPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visibility: false,
        }
    }

    

    onLogin = () => {
        let email = this.refs.email.value
        let password = this.refs.password.value
        // console.log(username, password)

        if (!email || !password) {

        }
        this.props.login(email,password)
       
    }

    render(){
        if(this.props.email){
            return <Redirect to="/" />
        }
        console.log(this.props.dataUser)
        const { visibility } = this.state
        return(
            <div style={styles.cont}>
                <div style={styles.contForm}>
                <h1>Login</h1>
                <label>email</label>
                    <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">
                             <i className="fas fa-user-circle"></i> 
                        </InputGroup.Text>
                        <FormControl
                        placeholder="Input Here"
                        ref="email"
                                                />
                    </InputGroup>
                    <label>Password</label>
                    <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1"> <i className="fas fa-eye"></i>
                            </InputGroup.Text>
                        <FormControl
                            placeholder="Input Here"
                            type={visibility ? "text" : "password"}
                            ref="password"
                                                            onChange={(e) => this.userValid(e)}

                        />
                    </InputGroup>
                    <div style={styles.contButton}>
                        <Button variant="primary" style={styles.button} onClick={this.onLogin}>
                            <i className="fas fa-sign-in-alt" style={{marginRight: '10px'}}></i>
                            Login
                        </Button>
                    </div>
                
                </div>
                <Modal show={this.state.error}>
                    <Modal.Header>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Please input all of data!</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={() => this.setState({ error: false })} variant="primary">OK</Button>
                    </Modal.Footer>
                </Modal>

                <Modal show={this.props.errorLogin}>
                    <Modal.Header>
                        <Modal.Title>Error</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Data User Not Found</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button onClick={this.props.errLoginFalse } variant="primary">OK</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

const styles = {
    cont: {
        background: "url(https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1052&q=80) no-repeat center",
        backgroundSize: 'cover',
        height: '100vh',
        paddingTop: '12vh'
    },
    contForm: {
        width: '30vw',
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: '10px',
        backgroundColor: 'rgba(255, 255, 255, .7)',
        padding: '1% 2%'
    },
    contButton: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '10px'
    },
    button: {
        backgroundColor: '#4c876c',
        border: 'none'
    },
    goToRegis: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: '0'
    }
}

const mapStateToProps = (state) => {
    return{
        email : state.userReducer.email
    };
}
export default connect(mapStateToProps, {login})(LoginPage) 
