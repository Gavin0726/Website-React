import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

class CourseItem extends Component {
    render() {
        return (
            <div className="col-md-4 col-sm-6 Course-item">
                <a className="Course-link" data-toggle="modal" href={this.props.herf}>
                    <div className="Course-hover">
                        <div className="Course-hover-content">
                            <i className="fas fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img className="img-fluid" src={this.props.image} alt="" />
                </a>
                <div className="Course-caption">
                <h4>{this.props.title}</h4>
                    <p className="text-muted">{this.props.description}</p>
                    
                </div>
            </div>
        )
    }
}


export default CourseItem;
