import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavLink, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Navbar dark expand="md">
                    <div className="header-nav">
                        <NavbarBrand>
                            <Link to="/products">
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src="logo.jpg" alt="logo" height="50" width="50"></img>
                                    <h2 style={{ color: 'white' }}>Sports Outlet</h2>
                                </div>
                            </Link>
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link">
                                    <Link to="/cart">
                                        <div className="cart-div">
                                            <i class="fa fa-cart-plus" aria-hidden="true" style={{ fontSize: '30px' }}></i>
                                            <div className="cart-quantity">
                                                <span>
                                                    {this.props.numberOfItemsInCart}
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        )
    }
}

export default Header;