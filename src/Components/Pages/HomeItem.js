import React, { Component } from 'react';

class HomeItem extends Component {
    render() {
        return (
            <div className="col-md-4">
                <span className="fa-stack fa-4x">
                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                    <i className={this.props.icon }></i>
                </span>
                <h4 className="service-heading">{this.props.title}</h4>
                <p className="text-muted">{this.props.description}</p>
            </div>
        )
    }
}

export default HomeItem;