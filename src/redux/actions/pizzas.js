import axios from "axios"

export const setLoaded = val => ({
    type: 'SET_LOADED',
    payload: val
})

export const fetchPizzas = (category, sortBy) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false
    })
    axios.get(`http://localhost:3001/pizzas?${category > 0 ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
    .then(({data}) => {
        dispatch(setPizzas(data))
    })
}

export const setPizzas = (name) => ({
    type: 'SET_PIZZAS',
    payload: name
})
