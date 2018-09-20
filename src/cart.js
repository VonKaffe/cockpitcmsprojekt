import React from 'react';
import './cart.css';
import Footer from './footer.js';


class Cart extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            cartProducts: [],

        };
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {


        if(localStorage.getItem('order')) {

            let cart = JSON.parse(localStorage.getItem('order'));
            this.setState({
                cartProducts: cart,
            });

        }


    }

    showUnqiue(li) {
        let hash = {}
        li.forEach((item) => {
            const id = item[0]._id;
            if (hash[id]) {
                hash[id].amount = hash[id].amount + 1
            } else {
                hash[id] = item[0];
                hash[id].amount = 1
            }
        })
        return Object.values(hash)
    }

    render () {

        let cartArray = this.state.cartProducts;
        let cart = this.showUnqiue(cartArray).map((cartItems) => {
            const cartItem = cartItems;
            return (
                <div className="row" key={cartItem._id}>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 cart-productscontainer">
                        <div className="col-sm-6">{cartItem.titel}</div>
                        <div className="col-sm-2">{cartItem.stock}</div>
                        <div className="col-sm-2">{cartItem.amount}</div>
                        <div className="col-sm-2">{cartItem.price}</div>

                    </div>
                    <div className="col-sm-2"></div>
                </div>)
        } );
        console.log("gjsgsj", cart)


        return (
            <div className="cart-container">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8 cart-categorycontainer">
                        <div className="col-sm-6">Produkt</div>
                        <div className="col-sm-2">Lagerstatus</div>
                        <div className="col-sm-2">Antal</div>
                        <div className="col-sm-2">á pris</div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>

                {cart}


                <div className="row">
                    <div className="col-sm-9"></div>
                    <div className="col-sm-3"><button className="btn btn-lg btn-success">Till Kassan</button></div>
                </div>
                <Footer/>

            </div>
        );
    }

}
export default Cart;