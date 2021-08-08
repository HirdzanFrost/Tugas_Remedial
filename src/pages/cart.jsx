import React from 'react'
import NavigationBar from '../component/navigationBar'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import {
    Table,
    Image,
    Button,
    FormControl,
    Modal
} from 'react-bootstrap'
import { delCart, saveCart, checkout } from '../redux/actions'


class CartPage extends React.Component{
    render(){
        return(
            <div>Cart</div>
        )
    }
}


export default CartPage