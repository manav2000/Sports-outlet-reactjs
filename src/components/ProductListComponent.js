import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import { Link } from 'react-router-dom';

class ProductList extends Component {

    render() {

        const products = this.props.products.map((product) => {
            return (
                <div key={product.id} className="col-12 col-md-3 mb-1 mt-2">
                    <Card key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <CardImg top width="100%" src={product.img} alt="Card image cap" />
                            <CardBody>
                                <CardTitle><strong>{product.title}</strong></CardTitle>
                                <CardSubtitle>Company: {product.company} </CardSubtitle>
                                <CardText>Price: {product.price}$ </CardText>
                            </CardBody>
                        </Link>
                    </Card>
                </div>
            );
        })

        return (
            <div className="container">
                <div className="row">
                    {products}
                </div>
            </div>
        );
    }
}

export default ProductList;