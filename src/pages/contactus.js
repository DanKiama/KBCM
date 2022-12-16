import React from 'react'
import styles from '../components/contactForm.module.css'


import Layout from "../components/layout"
import SEO from "../components/seo"
const NETLIFY_FUNC = 'https://masterkbcm.netlify.com/.netlify/functions'
const NETLIFY_URL = 'https://masterkbcm.netlify.com'
export default class RegisterForm extends React.Component {

    constructor(data) {
        super(data);

        this.state = this.initialState();

        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    initialState() {
        return {
            step: 1,
            firstName: '',
            lastName: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    componentDidUpdate(prevProps) {}
    componentDidMount() {}
    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    validate() {
        var invalidItems = []
        var data = this.state;
        Object
            .keys(data)
            .map(key => {
                var item = document.getElementsByName(key)[0];
                if (!item) {
                    return;
                }
                if (data[key] === '') {
                    item
                        .classList
                        .add("error");
                    invalidItems.push(key);
                } else {
                    if (key === "email") {
                        if (!this.validateEmail(data[key])) {
                            item
                                .classList
                                .add("error");
                            invalidItems.push(key);
                            return;
                        }
                    }
                    document
                        .getElementsByName(key)[0]
                        .classList
                        .remove("error");
                }

            });
        return invalidItems.length === 0
    }

    handleChange = e => {
        if (e.target.name === 'email') {
            if (!this.validateEmail(e.target.value)) {
                document
                    .getElementsByName(e.target.name)[0]
                    .classList
                    .add("error");
                return;
            }
        }
        document
            .getElementsByName(e.target.name)[0]
            .classList
            .remove("error");
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        if (!this.validate()) {
            return;
        }
        const encode = (data) => {

            return Object
                .keys(data)
                .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        }
        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encode({
                "form-name": "contact",
                ...this.state
            })
        })
            .then(() => this.setState({
                step: this.state.step + 1
            }))
            .catch(error => alert(error));

        e.preventDefault();
    };
    render() {
        const {step} = this.state;
        return (
            <Layout>
                  <SEO title="Contact us" />
                 <div >
                <section className="Banner inner_page">
                    <div className="overlay"></div>

                    <div className="banner_message">

                        <h1>
                            Having any questions? get in touch with us

                        </h1>

                    </div>

                </section>

                <div className="inner contactUs">
                    <div className="row">
                        <div className="col-md-6 col-12"><br/>
                            <h4>Get In Touch</h4>
                            <br />
                            <h5 className={styles.boldTitle}>MAILING ADDRESS:</h5>
                            <p>P. O. Box 00623-00800<br />Nairobi, Kenya.</p>
                            <br />
                            <h5 className={styles.boldTitle}>PHONE NUMBERS:</h5>
                            <p>Nairobi: 0748 811 909<br />Eldoret: 0746 963 107</p>
                            <br />
                            <h5 className={styles.boldTitle}>EMAIL ADDRESSES:</h5>
                            <p><a href="mailto:info@farajacancersupport.org">info@farajacancersupport.org</a></p>
                            <br />
                            <h5 className={styles.boldTitle}>WE WANT TO HEAR FROM YOU</h5>
                            <p>Faraja would love to hear from you.</p>
                            <p>
                            Please reach out to us on <a href="mailto:info@farajacancersupport.org">info@farajacancersupport.org</a> with any questions or comments you may have and we will be happy to assist.
                            </p>

                        </div>

                        <div className="col-md-6 col-12">
                            <br/>
                            <div className={styles.registerForm}>

                                {
                                    step == 1 && <form
                                            name="contact"
                                            method="POST"
                                            data-netlify-honeypot="botfield"
                                            data-netlify="true">
                                            <div>
                                                <div className="d-none"><input type="text" name="bot-field"/></div>

                                                <div className="form-group">
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-12 col-12 input_name">
                                                            <input className="form-control firstname" placeholder="First Name*" type="text" name="firstName"   onChange={this.handleChange}></input>
                                                        </div>
                                                        <div className="col-md-6 col-sm-12 col-12 ">
                                                            <input
                                                                className="form-control"
                                                                type="text"
                                                                placeholder="Last Name*"
                                                                name="lastName"
                                                                onChange={this.handleChange}/></div>
                                                    </div>

                                                </div>

                                                <div className="form-group">
                                                <div className="row">
                                                        <div className="col-md-12">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Email*"
                                                        name="email"
                                                        onChange={this.handleChange}/>
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                                <div className="form-group">
                                                <div className="row">
                                                        <div className="col-md-12">
                                                        <input
                                                        className="form-control"
                                                        type="text"
                                                        placeholder="Subject*"
                                                        name="subject"
                                                        onChange={this.handleChange}/>
                                                        </div>
                                                    </div>
                                                   
                                                </div>

                                                <div className="form-group">
                                                <div className="row">
                                                        <div className="col-md-12">
                                                        <textarea
                                                        className="form-control"
                                                        placeholder="Message*"
                                                        name="message"
                                                        onChange={this.handleChange}></textarea>
                                                        </div>
                                                    </div>
                                                   
                                                </div>

                                                <a className="button" onClick={this.handleSubmit}>Submit</a>
                                            </div>
                                        </form>

                                }
                                {
                                    step == 2 && <div>
                                            <h1>Message sent!</h1>
                                            <p>
                                                Thank you {this.state.firstname}, we will be intouch soon.</p>
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </Layout>
           

        )
    }
}
