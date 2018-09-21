import React from 'react';
import './products.css';
import Footer from './footer.js';
import ProductTemplate from './productTemplate';

class Bild extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            Products: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});

        if(event.target.value === "priceHL") {
            const myData = [].concat(this.state.Products)
                .sort((a, b) => a.price < b.price);

            this.setState({Products: myData});
        }else if(event.target.value === "priceLH") {
            const myData2 = [].concat(this.state.Products)
                .sort((a, b) => a.price > b.price);

            this.setState({Products: myData2});
        }else if(event.target.value === "stockHL") {
            const myData3 = [].concat(this.state.Products)
                .sort((a, b) => a.stock < b.stock);

            this.setState({Products: myData3});
        }else if(event.target.value === "stockLH") {
            const myData4 = [].concat(this.state.Products)
                .sort((a, b) => a.stock > b.stock);

            this.setState({Products: myData4});
        }

    }


    componentDidMount() {
        let myRequest = new Request('http://192.168.99.100:8888/collections/entries/products?token=e40f461fd0a7a62080326a8398b858');
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
                Products: initialProducts,
            });
        });
    }



    render () {
        let arrayToFilter = this.state.Products;
        let filterdArray = arrayToFilter.filter(function(product){
            return product.category === "Skin3";
        });

        let products = filterdArray;

        let productlist = products.map((product) =>
            <div className="row" key={product._id}>
                <ProductTemplate  products={product}/>
            </div>
        );

        return (
            <div id="productcontainer">
                <div className="row">
                    <div className="col-sm-9"></div>
                    <div className="form-group col-sm-2">
                        <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                            <option value="" disabled selected hidden>Sortera efter</option>
                            <option value="priceHL">Pris högt-lågt</option>
                            <option value="priceLH">Pris lågt-högt</option>
                            <option value="stockHL">Lagerstatus högt-lågt</option>
                            <option value="stockLH">Lagerstatus lågt-högt</option>
                        </select>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                {productlist}
                <Footer/>
            </div>
        );
    }
}
export default Bild;