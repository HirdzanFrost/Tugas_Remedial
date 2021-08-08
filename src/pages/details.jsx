import React from 'react'
import Axios from 'axios'
import NavigationBar from '../component/navigationBar'
import {
    Carousel,
    Button,
    FormControl,
    Card
} from 'react-bootstrap'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { checkout } from '../redux/actions'


class DetailPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            product : {},
            stock: 1,
            toLogin: false
        }
    }
    componentDidMount(){
        Axios.get(`http://localhost:2000/products/${this.props.location.search.substring(1)}`)
            .then(res => {
                this.setState({ product: res.data })
            })
    }
    onGantistock = (e) => {
        let value = +e.target.value
        let maxstock = this.state.product.stock

        if (value < 1) {
            this.setState({ stock: 1 })
        } else if (value > maxstock) {
            this.setState({ stock: maxstock })
        } else {
            this.setState({ stock: value })
        }
    }
    onKurang = () => {
        this.setState({ stock: this.state.stock - 1 })
    }

    onTambah = () => {
        this.setState({ stock: this.state.stock + 1 })
    }

    onCheckout = () => {
        const { product, stock } = this.state
        if (!this.props.email) {
            return this.setState({ toLogin: true })
        }

        let obj = {
            id: product.id,
            name: product.name,
            image: product.images,
            price: product.price,
            stock
        }

        this.props.checkout(this.props.id, obj)
    }


    render(){

        const { product, stock, toLogin} = this.state

        if (toLogin) {
            return <Redirect to="/login" />
        }

        return(

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Card.Img  style={styles.img}src={product.img}/>
                        <div style={styles.contDesc}>
                        <h1>Detail Page</h1>
                        <h1 style={{ border: '5px solid white', borderRadius: '10px', padding: '1%' }}>{product.name ? product.name : ""}</h1>
                            
                            <p><strong>Description:</strong> {product.description ? product.description : ""}</p>
                            <p><strong>Price:</strong> Rp. {product.price ? product.price.toLocaleString() + ",00" : ""}</p>
                            <p><strong>Stock:</strong> {product.stock ? product.stock : ""}</p>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p style={{ marginBottom: '0' }}><strong>Quantity:</strong></p>
                            <div style={{ display: 'flex', width: '30%', justifyContent: 'space-around' }}>
                                <Button disabled={stock <= 1 ? true : false} variant="outline-danger" onClick={this.onKurang}>
                                    <i className="fas fa-minus"></i>
                                </Button>

                                <FormControl
                                    style={{ width: '50%' }}
                                    value={stock}
                                    onChange={(e) => this.onGantistock(e)}
                                />

                                <Button style={{ width: '50%' }}disabled={stock === product.stock ? true : false} variant="outline-success" onClick={this.onTambah}>
                                    <i className="fas fa-plus"></i>
                                </Button>

                                <Button variant="outline-dark" onClick={this.onCheckout}>Add to Cart</Button>

                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const styles = {
    contImg: {
        backgroundColor: '#03506F',
        flexBasis: '40%',
        borderRadius: '10px'
    },
    contDesc: {
        flexBasis: '60%',
        padding: '0 1% 0 1%',
    },
    img: {
        height: '40%',
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '5%'
    },
}
const mapStateToProps = (state) => {
    return {
        email: state.userReducer.email,
        id : state.userReducer.id,
    }
}
export default connect(mapStateToProps, {checkout})(DetailPage)