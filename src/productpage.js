import React from 'react';
import './productpage.css';
import Rating from './rating.js';

class Productpage extends React.Component{

    constructor (props) {
        super(props);
        this.state = {
            product: [],

        };

        console.log(this.state.product);

    }
    addItemToCart() {
        let cart = JSON.parse(localStorage.getItem('order')) || [];
        const item = this.state.product;
        cart.push(item);
        console.log("cart", item, cart)
        localStorage.setItem('order', JSON.stringify(cart));

    }
    componentDidMount() {
        const id = this.props.match.params.id;
        let myRequest = new Request('hhttp://192.168.99.100:8888/collections/entries/products?q=e40f461fd0a7a62080326a8398b858');
        let initialProducts = [];
        fetch(myRequest, {
            method: "post",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                filter: {_id: id},
            })
        })
            .then(response => {
                return response.json();
            }).then(data => {
            initialProducts = data.entries.map((products) => {
                return products
            });
            this.setState({
                product: initialProducts,

            });
            console.log(initialProducts, "initialproducts");
            console.log(id, "id");
            console.log(this.state.product,"state");

        });
    }
    render () {

        let product = this.state.product;
        const id = this.props.match.params.id;

        let singelProduct = product.map((product) =>
            <div className="row productpage-topcontainer" key={product._id}>
                <div className="col-sm-4 productleft">
                    <div className="row">
                        <div className="col-sm-12"><h2>{product.titel}</h2></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12"><p>Lagersaldo: {product.stock}</p></div>
                    </div>

                    <br />
                    <div className="row">
                        <div className="col-sm-12"><p>{product.productText}</p></div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12"><h3>{product.price}:-</h3></div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-12"><button className="btn btn-primary btn-lg" onClick={this.addItemToCart.bind(this)}>Lägg i kundvagn</button></div>
                    </div>

                </div>
                <div className="col-sm-7">
                    <img className="img-responsive img-rounded" alt={product.titel} src={"http://192.168.99.100:8888/"+product.image.path} />
                </div>
                <div className="col-sm-1"></div>
            </div>

        );

        return (
            <div >
                {singelProduct}
                <Rating id={id}/>



            </div>
        );
    }

}
export default Productpage;