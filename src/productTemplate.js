import React from 'react';
import './products.css';
import { NavLink } from 'react-router-dom';



class ProductTemplate extends React.Component{
    render () {





        let product = this.props.products;
        const imgUrl = "http://192.168.99.100:8888"+product.image.path;

        return (
            <div className='row'>
                <div className="col-sm-2"></div>
                <div className="col-sm-8 productItem">

                    <div className="row productTitel"><NavLink to={"/productpage/" + product._id}><h2>{product.titel}</h2></NavLink></div>
                    <div className="row">
                        <div className="col-sm-8"><img className="img-responsive img-rounded" alt={product.titel} src={imgUrl} /></div>
                        <div className="col-sm-4">
                            <p>Kategori: <strong>{product.category}</strong></p>
                            <p>Lagerstatus: <strong>{product.stock}</strong></p>
                            <p>{product.productText}</p>
                            <h3>{product.price}:-</h3>
                            <button className="btn btn-primary btn-lg"><NavLink to={"/productpage/" + product._id}>Läs mer</NavLink></button>
                        </div>
                    </div>
                </div>
                <div className="col-sm-2"></div>
            </div>
        );
    }

}
export default ProductTemplate;