import React, { useCallback, useState } from "react";
import axios from 'axios';

import "./App.scss"

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

function App() {

  const [pizzas, setPizzas] = React.useState([])

  React.useEffect(() => {
    axios.get('http://localhost:3000/db.json').then(({data}) => {
      setPizzas(data.pizzas)
    })
  }, [])

  return (
    <div>
      <Header />

      <div className="wrapper"> 
        <Routes>
          <Route path="/" element={<Home items={pizzas}/>}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>

        <Footer />
      </div>
    </div>
  );
}


// const mapStateToProps = state => {

// }

// const mapDispatchToProps = dispatch => {
//   return {
//     setPizzas: (name) => dispatch(setPizzas(name))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
