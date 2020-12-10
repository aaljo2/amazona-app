import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import data from '../../frontend/src/data.js';
import Product from '../../frontend/src/components/Product.js';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div>
            <a className="brand" href="index.html">amazona</a>
        </div>
        <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
        </div>
    </header>
    <main>
      <Route path="/product:id" component={ProductScreen} exact></Route>
      <Route path="/" component={HomeScreen} exact></Route>
        <div>
            <div className="row center">
              {
                data.products.map(product =>(
              <Product key= {product._id} product={product}></Product>
        )) };
    </div>
</div>
</main>
<footer className="row center">All right reserved</footer>
</div>
</BrowserRouter>
);
}

export default App;
