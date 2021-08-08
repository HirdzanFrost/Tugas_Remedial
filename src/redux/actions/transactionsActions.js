import Axios from 'axios'


export const checkout = (id, data) => {
    return (dispatch) => {
        Axios.get(`http://localhost:2000/users/${id}`)
        .then(res => {
            console.log(res.data )
            let tempCart =res.data.cart
            tempCart.push(data)
            Axios.patch(`http://localhost:2000/users/${id}`, {cart: tempCart})

        })
    }
}