import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './HeaderComponent';
import ProductList from './ProductListComponent';
import ProductDetail from './ProductDetailComponent';
import Cart from './CartComponent';
import Checkout from './CheckoutComponent';
import { addToCart, incrItem, decrItem, checkoutProcess, emptyCart, getTotal } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import CheckoutSummary from './CheckoutSummaryComponent';


const mapStateToProps = (state) => {
    return {
        products: state.products,
        checkout: state.checkout
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (productId) => dispatch(addToCart(productId)),
    incrItem: (productId, count, total) => dispatch(incrItem(productId, count, total)),
    decrItem: (productId, count, total) => dispatch(decrItem(productId, count, total)),
    emptyCart: (productsInCart) => dispatch(emptyCart(productsInCart)),
    getTotal: (total) => dispatch(getTotal(total)),
    checkoutProcess: () => { dispatch(checkoutProcess()) },
    resetCheckoutDetails: () => { dispatch(actions.reset("details")) }
})

class Main extends Component {

    render() {

        const ProductWithId = ({ match }) => {
            return (
                <ProductDetail
                    product={this.props.products.products.filter((product) => product.id === parseInt(match.params.productId, 10))[0]}
                    addToCart={this.props.addToCart}
                />
            );
        };

        const numberOfItemsInCart = this.props.products.products.filter((product) => product.inCart === true).length;

        const ItemsInCart = () => {
            return (
                <Cart
                    items={this.props.products.products.filter((product) => product.inCart === true)}
                    incrItem={this.props.incrItem}
                    decrItem={this.props.decrItem}
                    addToCart={this.props.addToCart}
                    getTotal={this.props.getTotal}
                />
            )
        }

        const CheckoutDone = () => {
            return (
                <Checkout
                    isProcessing={this.props.checkout.isProcessing}
                    isProcessed={this.props.checkout.isProcessed}
                />
            )
        }

        const CheckSum = () => {
            return (
                <CheckoutSummary
                    items={this.props.products.products.filter((product) => product.inCart === true)}
                    resetCheckoutDetails={this.props.resetCheckoutDetails}
                    total={this.props.products.total}
                    checkoutProcess={this.props.checkoutProcess}
                    emptyCart={this.props.emptyCart}
                />
            )
        }

        return (
            <div>
                <Header numberOfItemsInCart={numberOfItemsInCart} />
                <Switch>
                    <Route exact path="/products" component={() => <ProductList products={this.props.products.products} />} />
                    <Route exact path="/product/:productId" component={ProductWithId} />
                    <Route exact path="/cart" component={ItemsInCart} />
                    <Route exact path="/checkout" component={CheckoutDone} />
                    <Route exact path="/checkout-summary" component={CheckSum} />
                    <Redirect to="/products" />
                </Switch>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));