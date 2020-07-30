import React, { Component } from 'react';
import { Table, Button } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';


class Cart extends Component {

    constructor(props) {
        super(props);

        this.IncrItem = this.IncrItem.bind(this);
        this.DecrItem = this.DecrItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    IncrItem(product) {
        this.props.incrItem(product.id - 1, product.count, product.total);
    }

    DecrItem(product) {
        this.props.decrItem(product.id - 1, product.count, product.total);
    }

    deleteItem(product) {
        this.props.addToCart(product.id - 1)
    }

    handleCheckout(total) {
        if (this.props.items.length) {
            this.props.getTotal(total);
            this.props.history.push('/checkout-summary');
        } else {
            alert("Your cart is empty, You cannot proceed to checkout process.")
        }
    }

    render() {

        const cartItems = this.props.items.map((item) => {
            return (
                <tr>
                    <td>
                        <img src={`${item.img}`} alt="item" height="50" width="50" />
                    </td>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        <div className="quantity-div">
                            <Button onClick={() => this.IncrItem(item)}>
                                <span className="fa fa-plus"></span>
                            </Button>
                            <span>{item.count}</span>
                            <Button onClick={() => this.DecrItem(item)}>
                                <span className="fa fa-minus"></span>
                            </Button>
                        </div>
                    </td>
                    <td>
                        <Button onClick={() => this.deleteItem(item)}>
                            <span className="fa fa-trash-o"></span>
                        </Button>
                    </td>
                    <td>
                        {item.total}$
                    </td>
                </tr>
            )
        })

        var checkoutPrice = 0;

        for (let i = 0; i < this.props.items.length; i++) {
            checkoutPrice = checkoutPrice + this.props.items[i].total;
        }

        return (
            <div className="container">
                <Table dark>
                    <thead>
                        <tr>
                            <td>ITEM</td>
                            <td>NAME</td>
                            <td>QUANTITY</td>
                            <td>DELETE</td>
                            <td>PRICE</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems}
                        <tr>
                            <td>Total Checkout Price:</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td><strong>{checkoutPrice}$</strong></td>
                        </tr>
                    </tbody>
                </Table>

                <div>
                    <Link to="/products">
                        <Button>
                            <span className="fa fa-arrow-left" /> Continue Shopping
                        </Button>
                    </Link>
                    <Button onClick={() => this.handleCheckout(checkoutPrice)} style={{ float: "right" }}>
                        Checkout <span className="fa fa-arrow-right" />
                    </Button>
                </div>
            </div>
        );
    }
}


export default withRouter(Cart);