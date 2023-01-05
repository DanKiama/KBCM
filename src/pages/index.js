import React from "react";
import get from 'lodash/get'
import Img from 'gatsby-image'
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

// import { GoogleAuth, GoogleAuthProvider, GoogleApi, SheetsApi } from 'google-auth-library';
import axios from 'axios';
// import { GoogleApis } from 'googleapis';
// import fs from 'fs';


class homePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      number: '',
      deliveryPoint: '',
      isLoading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.formRef = React.createRef();
  }

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
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    if (!this.validate()) {
      return;
    }
    e.preventDefault();
    this.setState({ isLoading: true })
    axios.post('https://sheet.best/api/sheets/d84aef1f-46c9-44ff-be30-fd871185bfac', this.state)
      .then(response => {
        console.log("Successful!")
      })
    setTimeout(() => {
      this.setState({ isLoading: false, });
      this.formRef.current.reset();
    }, 1000);
    this.setState({
      name: '',
      email: '',
      number: '',
      deliveryPoint: '',
    })
  };

  resetForm = () => {
    this.setState({
      name: '',
      email: '',
      number: '',
      deliveryPoint: '',
    })
  }


  render() {
    const { name, email, number, deliveryPoint } = this.state;

    const banner = get(this, 'props.data.allContentfulBannerSection.nodes')[0]
    const aboutUsSection = get(this, 'props.data.allContentfulHomeAboutUsSection.nodes')[0]
    const hostYourOwn = get(this, 'props.data.allContentfulHostCoffeeMorning.nodes')[0]
    const upcomingCoffeeMornings = get(this, 'props.data.allContentfulUpcomingCoffeeMornings.edges')
    console.log(`This is hostyourOwn ${banner.description.content[0].content[0].value}`);


    return (
      <Layout>
        <SEO title="Home" />


        <section id="home" className="Banner">
          <div className="overlay"></div>


          <div className="banner_message">

            <h1>
              <img src="../header.png" />


            </h1>

            <p>
              {banner.description.content && banner.description.content.length && banner.description.content[0].content.length &&

                banner.description.content[0].content[0].value}

            </p>
            <Link to="#about">
              <div className="scroll">


                <div className="chevron"></div>
                <div className="chevron"></div>
                <div className="chevron"></div>

              </div>
            </Link>

          </div>



        </section>

        <section id="about" className="aboutUs">
          <div className="inner">

            <div className="row">

              <div className="col-md-12 col-sm-12 col-12">

                <img src="../coffee.gif" />




                <h4>{aboutUsSection.heading}</h4>
                <p>
                  {aboutUsSection.description.content && aboutUsSection.description.content.length && aboutUsSection.description.content[0].content.length &&

                    aboutUsSection.description.content[0].content[0].value}
                </p>
                <a className="button" href="https://farajacancersupport.org/about/" target="blank">Read more about Faraja</a>
              </div>
            </div>
          </div>
        </section>

        <section id="host" className="host_your_own">


          <div className="inner">

            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 align-center">
                <h2>Hosting</h2>
              </div>
            </div>
            <div className="row">

              <div className="col-md-4 col-sm-12 col-12">
                <Link to="/overview/#overviewPage">
                  <span>Host your own</span>
                </Link>

              </div>
              <div className="col-md-4 col-sm-12 col-12">
                <Link to="/overview/#overviewPage">
                  <span>How it helps</span>
                </Link>
              </div>
              <div className="col-md-4 col-sm-12 col-12">
                <Link to="/overview/#overviewPage">
                  <span>KBCM agenda</span></Link>
              </div>
            </div>


          </div>
        </section>
        <section className="ideas">
          <div className="inner">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-12">
                <h2>{hostYourOwn.mainTitle}</h2><br />
              </div>
            </div>
            <div className="row">
              <div className="col-md-5 col-sm-12 col-12 align-center">

                <Img alt="coffee maker" sizes={hostYourOwn.ideaOne.sizes} />

              </div>
              <div className="col-md-7 col-sm-12 col-12">
                <h4>{hostYourOwn.ideOneTitle}</h4>
                <p>
                  {hostYourOwn.ideaOneDescription.content &&
                    hostYourOwn.ideaOneDescription.content.length &&
                    hostYourOwn.ideaOneDescription.content[0].content.length &&
                    hostYourOwn.ideaOneDescription.content[0].content[0].value}
                </p>

              </div>
            </div><br /><br />
            <div className="row">
              <div className="col-md-7 col-sm-12 col-12">
                <h4>{hostYourOwn.ideaTwoTitle}</h4>
                <p>
                  {hostYourOwn.ideaTwoDescription.content &&
                    hostYourOwn.ideaTwoDescription.content.length &&
                    hostYourOwn.ideaTwoDescription.content[0].content.length &&
                    hostYourOwn.ideaTwoDescription.content[0].content[0].value}
                </p>

              </div>
              <div className="col-md-5 col-sm-12 col-12 align-center">

                <Img alt="coffee maker" sizes={hostYourOwn.ideaTwoImage.sizes} />

              </div>

            </div>
            <div className="row">
              <div className="col-md-12 align-center">
                <Link className="button" to="/ideas/#ideasofhosting">Read more</Link>
              </div>

            </div>

          </div>
        </section>


        <section id="register" className="sing_up">
          <div className="inner">
            <div className="row">
              <div className="col-md-12 ">
                <h2>Register as a host</h2><br />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12 ">
                <form ref={this.formRef} onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label>Full names</label>
                      <input type="text" className="form-control fullNames" value={name} name="name" id="names" placeholder="Enter your full names" onChange={this.handleChange} />
                    </div>
                    <div className="form-group col-md-6">
                      <label >Email</label>
                      <input type="email" className="form-control email" value={email} name="email" id="email" placeholder="Email" onChange={this.handleChange} />
                    </div>

                  </div>
                  <div className="form-group">
                    <label >Phone number</label>
                    <input type="number" className="form-control number" value={number} name="number" id="number" placeholder="Enter phone number" onChange={this.handleChange} />
                  </div>
                  <div className="form-group">
                    <label >Where would you like your coffee morning kit to be sent to?</label>
                    <input type="text" className="form-control deliveryPoint" value={deliveryPoint} name="deliveryPoint" id="location" placeholder="Enter location" onChange={this.handleChange} />
                  </div>

                  {this.state.isLoading ? <button type="submit" className="button">Submitting...</button> : <button type="submit" className="button">Submit</button>}

                </form>
              </div>
            </div>



          </div>
        </section>



        <section className="host_your_own upcoming">


          <div className="inner">

            <div className="row">
              <div className="col-md-12 col-sm-12 col-12 align-center">
                <h2>Upcoming coffee mornings</h2>
              </div>
            </div><br />
            <div className="row">

              <div className="col-md-12">
                {upcomingCoffeeMornings.map(({ node }) => {

                  return (

                    <div className="event_item">
                      <div className="logo"> <Img alt="coffee maker" sizes={node.logo.sizes} /></div>
                      <div className="event_name">{node.name}</div>
                      <div className="event_dates">{node.confirmation}</div>
                    </div>

                  )
                })}

              </div>

            </div>


          </div>
        </section>

        <section className="bottom_section">


          <div className="inner">

            <div className="row">
              <div className="col-md-5 col-sm-12 col-12 align-center">

              </div>
              <div className="col-md-7 col-sm-12 col-12 bottom_heading ">

                <h2>Long heading will go in here</h2>
                <h4>Speak to one of us now</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <Link className="button" to="" target="blank">Contact us</Link>

              </div>
            </div>



          </div>
        </section>

      </Layout>

    )

  }
}


export default homePage;

export const query = graphql`
  query BannerQuery {
    allContentfulBannerSection {
    
        nodes {
          title
          bannerText
          description {
            
            content {
              content {
                value
              }
            }
          }
          slug
         
          bannerImage {
            sizes(resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
        
        
      }
    }

    allContentfulHomeAboutUsSection {
      nodes {
        description {
          content {
            content {
              value
            }
          }
        }
        heading
      }
    }


    allContentfulHostCoffeeMorning  {
      nodes {
        mainTitle
        ideOneTitle
        ideaTwoTitle
        ideaOne {
          sizes(resizingBehavior: SCALE) {
           ...GatsbyContentfulSizes_withWebp
          }
        }

        ideaOneDescription {
          content {
            content {
              value
            }
          }
        }

        
        ideaTwoImage {
          sizes(resizingBehavior: SCALE) {
           ...GatsbyContentfulSizes_withWebp
          }
        }

        ideaTwoDescription {
          content {
            content {
              value
            }
          }
        }
        
      }
    }


    allContentfulUpcomingCoffeeMornings {
   edges{
    node {
      
      name
      logo {
        sizes(resizingBehavior: SCALE) {
         ...GatsbyContentfulSizes_withWebp
        }
      }
      confirmation
    }
  }
   }


  }
`; 