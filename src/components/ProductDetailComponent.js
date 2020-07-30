import React, { Component } from 'react';
import { Media, Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class ProductDetail extends Component {

    constructor(props) {
        super(props);

        this.addItemToCart = this.addItemToCart.bind(this)
    }

    addItemToCart() {
        this.props.addToCart(this.props.product.id - 1);
    }

    render() {

        const itemStatus = this.props.product.inCart;

        return (
            <div className="container">
                <Media style={{ marginTop: "80px" }}>
                    <Media left href="#">
                        <img src={`${this.props.product.img}`} alt="product" height="250px"
                            style={{ marginRight: "50px" }}
                        />
                    </Media>
                    <Media body>
                        <Media heading>
                            {this.props.product.title}
                        </Media>
                        <Media middle>
                            Price: <strong>{this.props.product.price}$</strong>
                        </Media>
                        <div style={{ marginTop: '10px' }}>
                            {this.props.product.info}
                        </div>
                        <div style={{ marginTop: "50px" }}>
                            <Link to="/products">
                                <Button style={{ marginRight: "20px" }}>
                                    <span className="fa fa-arrow-left" />Back To Store
                                </Button>
                            </Link>
                            <Button onClick={() => this.addItemToCart()}>
                                {itemStatus ? 'Remove From Cart' : 'Add To Cart'}<span className="fa fa-cart-plus" />
                            </Button>
                        </div>
                    </Media>
                </Media>
            </div>
        );
    }
}

export default ProductDetail;