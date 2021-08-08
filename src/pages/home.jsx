import React from 'react'
import Axios from 'axios'
import NavigationBar from '../component/navigationBar'
import { Link } from 'react-router-dom'


import {
    Card,
    Button
} from 'react-bootstrap'

class HomePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products : [],
            
        }

    }

    componentDidMount() {
                Axios.get('http://localhost:2000/products')
                    .then(res => {
                        this.setState({ products: res.data })
                    })
            
    }


    render(){
        return(
            <div style={styles.sectProducts} >
                <h1><center>Our Products</center></h1>
                <div style={styles.contProducts} >
                    {this.state.products.map(item => {
                        return(
                            <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={item.img}/>
                        <Card.Body style={styles.cardBody}>
                          <Card.Title>{item.name}</Card.Title>
                          <Card.Text>Rp. {item.price.toLocaleString()}</Card.Text>

                          <Card.Text>
                            {item.description}
                          </Card.Text>
                          <Button variant="primary" as={Link} to={`/detail?${item.id}`}><i className="fas fa-cart-plus"> Buy Now</i></Button>
                        </Card.Body>
                      </Card>
                        )
                        
                    })}
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        marginTop: '10vh',
        paddingTop: '3vh',
    },
    sectProducts: {
        marginTop: '70px',
        marginLeft: '5vw',
        marginRight: '5vw',
        border: '1px solid #bdbdbd',
        borderRadius: '10px ',
        boxShadow: '0px 5px 5px 5px #e0e0e0'


    },
    contProducts: {
        // backgroundColor: 'salmon',
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap',
        padding: '15px'

    },
    cardI:{
        width: '15%',
        margin:'10px', 
        boxShadow: '0px 1px 3px 3px #f5f5f5'


    },
    cardBody: {
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'space-between',
        // backgroundColor: 'salmon'
    },
    cardTitle: {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        fontSize:'12px'
    },
    
    contButton: {
        display:'flex',
        justifyContent: 'right',
        alignItems:'right',
        zIndex: '2',
        position:'absolute',
        color: 'pink'
    },

    sectProductsTitle:{
        fontWeight:'700',
        fontSize: '20px',
        display: 'flex',
        margin: '1% 3% 0% 3%'
        
    },

    whishlist:{
        color: 'pink',
        border: '1px solid'
    }
}
export default HomePage 