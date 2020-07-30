import React, { Component } from 'react';
import Loading from './LoadingComponent';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';


class Checkout extends Component {

    render() {
        if (this.props.isProcessing) {
            return (
                <div>
                    <Loading />
                </div>
            )
        }
        else if (this.props.isProcessed) {
            return (
                <div className="processed">
                    <div className="processed-status shadow">
                        <span>Checked out successfully.</span>
                        <Link to="products/">
                            <Button>
                                <span className="fa fa-arrow-left"></span>Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div>
                    shit nothing worked
                </div>
            )
        }
    }
}

export default Checkout;