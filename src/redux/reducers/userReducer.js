const INITIAL_STATE = {
    id: null,
    password: "",
    email: "",
    cart: [],
    errorLogin: false,
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                id: action.payload.id,
                password: action.payload.password,
                email: action.payload.email,
                role: action.payload.role,
                cart: action.payload.cart
            }
        case 'LOG_OUT':
            return INITIAL_STATE
        default:
            return state
    }
}

export default userReducer