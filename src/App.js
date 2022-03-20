import React from "react";
import { Route, Routes } from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

import "./App.scss"


function App() {
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
