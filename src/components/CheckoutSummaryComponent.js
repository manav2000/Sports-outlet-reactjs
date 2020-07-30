import React, { Component } from 'react';
import { Button, Label, Col, Row, Table } from 'reactstrap';
import { Control, Form, Errors } from 'react-redux-form';
import { Link, withRouter } from 'react-router-dom';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

class CheckoutSummary extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.resetCheckoutDetails();
        this.props.emptyCart(this.props.items);
        this.props.checkoutProcess();
        this.props.history.push('/checkout');
    }

    render() {

        const Items = this.props.items.map((item) => {
            return (
                <tr>
                    <td>
                        <img src={`${item.img}`} alt="item" height="50" width="50" />
                    </td>
                    <td>
                        {item.title}
                    </td>
                    <td>
                        {item.count}
                    </td>
                    <td>
                        {item.total}$
                    </td>
                </tr>
            )
        })

        return (
            <div className="summary">
                <div className="checkout-form">
                    <div className="form-div" style={{ textAlign: 'center' }}>
                        <h2>Checkout Form</h2>
                        <Form model="details" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={3}>First Name</Label>
                                <Col md={8}>
                                    <Control.text model=".firstname" id="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors className="text-danger" model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: "This field is required"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={3}>Last Name</Label>
                                <Col md={8}>
                                    <Control.text model=".lastname" id="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors className="text-danger" model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: "This field is required"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={3}>Contact Num.</Label>
                                <Col md={8}>
                                    <Control.text model=".telnum" id="telnum"
                                        placeholder="Contact Num"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(10),
                                            isNumber
                                        }}
                                    />
                                    <Errors className="text-danger" model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: "This field is required",
                                            minLength: "Contact Num. must contain exactly 10 digits",
                                            maxLength: "Contact Num. must contain exactly 10 digits",
                                            isNumber: "Contact Num. should only have numbers"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={3}>Email</Label>
                                <Col md={8}>
                                    <Control.text model=".email" id="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors className="text-danger" model=".email"
                                        show="touched"
                                        messages={{
                                            required: "This field is required",
                                            validEmail: "Please enter a valid email address"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address1" md={3}>Address Line 1</Label>
                                <Col md={8}>
                                    <Control.text model=".address1" id="address1"
                                        placeholder="Address Line 1"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors className="text-danger" model=".address1"
                                        show="touched"
                                        messages={{
                                            required: "This field is required"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="address2" md={3}>Address Line 2</Label>
                                <Col md={8}>
                                    <Control.text model=".address2" id="address2"
                                        placeholder="Address Line 2"
                                        className="form-control"
                                        validators={{
                                            required
                                        }}
                                    />
                                    <Errors className="text-danger" model=".address2"
                                        show="touched"
                                        messages={{
                                            required: "This field is required"
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{ offset: 7 }}>
                                    <Button type="submit">
                                        Proceed To Checkout <span className="fa fa-arrow-right" />
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <div className="items-summary">
                    <h2>Checkout Summary</h2>
                    <Table dark>
                        <thead>
                            <tr style={{ display: 'flex', justifyContent: 'space-around' }}>
                                <th>Item</th>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                            <tbody>
                                {Items}
                                <tr>
                                    <td>GrandTotal:</td>
                                    <td></td>
                                    <td></td>
                                    <td>{this.props.total}$</td>
                                </tr>
                            </tbody>
                        </thead>
                    </Table>
                    <Link to="/cart">
                        <Button type="submit">
                            <span className="fa fa-arrow-left" />Back To Cart
                        </Button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default withRouter(CheckoutSummary);