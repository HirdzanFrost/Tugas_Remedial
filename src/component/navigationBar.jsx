import React from 'react'
import {
    Navbar,
    Nav,
    Dropdown,
    Button,
    Badge
    
} from 'react-bootstrap'
import { Link , Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {logout} from '../redux/actions'

class NavigationBar extends React.Component{
    render(){
        return(
            <Navbar style={styles.navbar} expand="lg">
                    <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        {
                            this.props.email
                            ?
                            <>
                            <Dropdown style={{ marginLeft: '10px' }}>
                                <Button variant="outline-light" as={Link} to="/cart">
                                    <i className="fas fa-shopping-cart"></i> <Badge variant="light"></Badge>
                                </Button>
                                <Dropdown.Toggle style={styles.button} id="dropdown-basic">
                                {this.props.email }
                                </Dropdown.Toggle>
                                <Dropdown.Menu>                           
                                        <Dropdown.Item onClick={this.props.logout} >Log Out</Dropdown.Item>
                                </Dropdown.Menu>
                                </Dropdown>
                            </>
                            :
                            <>
                                <Button  as={Link} to="/login" variant="secondary" style={{marginLeft:'10px'}}>Login</Button>

                            </>
                        }

                </Navbar>
        )
    }
}

const styles = {
    navbar:{
        backgroundColor : '#4c876c',
        paddingLeft : '10px',
        paddingRight : '10px',
        display: 'flex',
        justifyContent:'space-between'

    },

    button: {
        backgroundColor: 'grey',
        border: 'none'
    },
}

const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email,
        cart: state.userReducer.cart
    }
}

export default connect(mapStateToProps, {logout})(NavigationBar)