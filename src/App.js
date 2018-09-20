import React, { Component } from 'react';
import Products from './products';
import Productpage from './productpage';
import Navbar from './navbar.js';
import Cart from './cart.js';
import Vapen from './vapen.js';
import Bild from './bild.js';
import Weapons from './weapons.js';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        let myRequest = new Request('http://192.168.99.100:8888/collections/entries/products?q=account-e40f461fd0a7a62080326a8398b858');
        let initialProducts = [];
        fetch(myRequest)
            .then(response => {
                return response.json();
            }).then(data => {
            initialProducts = data.entries.map((products) => {
                return products
            });
            console.log(initialProducts);
            this.setState({
                products: initialProducts,
            });
        });
    }



    render() {
        return (
            <BrowserRouter>
            <div>
            <Navbar />
            <Switch>
            <Route path="/" render={(props) => <Products {...props} products={this.state.products}/>} exact />
        <Route path="/productpage/:id" render={(props) => <Productpage {...props} products={this.state.products}/>}  />
        <Route path="/kundvagn" render={(props) => <Cart {...props} products={this.state.products}/>}  />
        <Route path="/vapen" render={(props) => <Vapen {...props} products={this.state.products}/>}  />
        <Route path="/bild" render={(props) => <Bild {...props} products={this.state.products}/>}  />
        <Route path="/weapons" render={(props) => <Weapons {...props} products={this.state.products}/>}  />
        </Switch>
        </div>
        </BrowserRouter>
    );
    }
}

export default App;


