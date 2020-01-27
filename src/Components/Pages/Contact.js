import React, { Component } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup'

import Field from './Field';
import Header from '../Common/Header';

const fields = {
    sections: [
        [
            { name: 'name', elementname: 'input', type: 'text', placeholder: 'your name*' },
            { name: 'email', elementname: 'input', type: 'email', placeholder: 'your email*' },
            { name: 'phone', elementname: 'input', type: 'text', placeholder: 'your phone*' },
        ],
        [
            { name: 'message', elementname: 'textarea', type: 'text', placeholder: 'Type your message*' }
        ]
    ]
};


class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            subtitle: "Get in touch with us for more information",
            buttonText: "JIng Love me",
            link: "/about",
            showButton: false,
            image: "url('img/about1.jpg')"
        }
    }
    render() {


        return (
            <div>
                <Header
                    title={this.state.title}
                    subtitle={this.state.subtitle}
                    buttonText={this.state.buttonText}
                    link={this.state.link}
                    showButton={this.state.showButton}
                    image={this.state.image}
                />
                <section className="page-section" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center">
                                <h2 className="section-heading text-uppercase">Contact Us</h2>

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <form onSubmit={this.props.handleSubmit} name="sentMessage" >
                                    <div className="row">

                                        {fields.sections.map((section, sectionIndex) => {
                                            console.log("Rendering section", sectionIndex, "with", section)
                                            return (
                                                <div className='col-md-6' key={sectionIndex}>
                                                    {section.map((field, i) => {
                                                        return <Field
                                                            {...field}
                                                            key={i}
                                                            value={this.props.values[field.name]}
                                                            name={field.name}
                                                            onChange={this.props.handleChange}
                                                            onBlur={this.props.handleBlur}
                                                            touched={(this.props.touched[field.name])}
                                                            errors={this.props.errors[field.name]}
                                                        />

                                                    })}
                                                </div>
                                            )
                                        })}


                                        <div className="clearfix"></div>
                                        <div className="col-lg-12 text-center">
                                            <div id="success"></div>
                                            <button
                                                className="btn btn-primary btn-xl text-uppercase"
                                                type="submit"

                                            >Send Message</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}



export default withFormik({
    mapPropsToValues: () => ({
        name: '',
        email: '',
        phone: '',
        message: ''
    }),

    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, 'please, your name longer than that').required('You must give us your name.'),
        email: Yup.string().email('Your need to give us a valid email').required('You must give us your Email.'),
        phone: Yup.string()
            .min(8, 'please, your phone longer than that')
            .max(15, 'your phone number is too long')
            .required('You must give us your Phone.'),
        message: Yup.string().min(500, 'please, provide more information').required('You must give us your message.'),


    }),



    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        alert("You've submitted the form", JSON.stringify(values));
    }
})(Contact);
