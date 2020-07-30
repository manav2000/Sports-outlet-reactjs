import React, { Component } from 'react';

class Loading extends Component {

    render() {
        return (
            <div className="loading">
                <span className="loading-status shadow">
                    <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
                    <span>Checking out ...</span>
                </span>
            </div>
        );
    }
}

export default Loading;