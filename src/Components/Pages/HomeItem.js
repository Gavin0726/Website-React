import React, { Component } from 'react';

class HomeItem extends Component {
    render() {
        return (
            <div className="col-md-4">

                <img className="img-fluid" src={this.props.image} alt="" />
                <h4 className="service-heading ">{this.props.title}</h4>
                <p className="text-muted">{this.props.description}</p>

                <i class="fas fa-arrow-circle-right"></i>
                <a className="home-link" href="/">{this.props.link}</a>
            </div>
        )
    }
}

export default HomeItem;
