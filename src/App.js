import React from "react";
import axios from 'axios';
import {useDispatch} from 'react-redux'

import "./App.scss"

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";
import { fetchPizzas, setPizzas } from './redux/actions/pizzas'

function App() {

  //const [pizzas, setPizzas] = React.useState([])
  const dispatch = useDispatch()


  React.useEffect(() => {
    dispatch(fetchPizzas())
  }, [])

  return (
    <div>
      <Header />
      <div className="wrapper"> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
        <Footer />
      </div>
    </div>
  );
}


// const mapStateToProps = state => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (name) => dispatch(setPizzas(name))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
