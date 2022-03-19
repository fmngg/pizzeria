import axios from "axios"

export const fetchPizzas = () => (dispatch) => {
    axios.get('http://localhost:3001/pizzas').then(({data}) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (name) => ({
    type: 'SET_PIZZAS',
    payload: name
})
