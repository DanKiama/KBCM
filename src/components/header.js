import React from 'react'
import Link from 'gatsby-link'
import Navigation from '../components/navigation'
import styles from '../components/navigation.module.css'


export default class Header extends React.Component {

    constructor(data) {
        super(data);
        this.showOrHideMobileMenu = this.showOrHideMobileMenu.bind(this);

        this.state = {
            products: [],
            showMobileMenu: false
        }
    }
    showOrHideMobileMenu() {
        console.log("Btn clicked..")
        const { showMobileMenu } = this.state;
        this.setState({ showMobileMenu: !showMobileMenu });
    }
    render() {
        const { showMobileMenu } = this.state;
        return (
            <div>
                <div id="header" className="container-fluid">

                    <div className="row justify-content-between">
                        <div className="col-lg-6 col-md-6 col-sm-8 col-8 padding-0">
                            <div id="logo">   <Link to="/"><img src="../faraja.png" alt="faraja kbcm" /></Link></div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-sm-12 padding-0 main_navigation_wrapper">

                            <Navigation />

                        </div>

                        <div className="col-lg-5 col-md-5 col-sm-3 col-3 padding-0 align-right mobileMenu">

                            {/* <!--start navigation icon--> */}
                            <div className="mobileMenu" onClick={this.showOrHideMobileMenu.bind(this)}>
                                <div className="bar1"></div>
                                <div className="bar2"></div>
                                <div className="bar3"></div>
                            </div>


                            {/* <!--end navigation icon--> */}
                        </div>

                    </div>


                    <div className={showMobileMenu == true ? "show" : "hide"}>
                        <ul className={styles.mobilenavigation}>
                            <li className={styles.mobilenavigationItem}>
                                <Link to="../#home">Hello</Link>
                            </li>
                            <li className={styles.mobilenavigationItem}>
                                <Link className="drop" to="#about">About</Link>
                                <ul className={styles.mobiledropdown}>
                                    <li> <Link to="#about">kbcm </Link></li>
                                    <li><a href="https://farajacancersupport.org/about/" target="blank">Faraja</a></li>
                                    <li> <Link to="/testimonials/">Testimonials </Link></li>
                                </ul>
                            </li>

                            <li className={styles.mobilenavigationItem}>
                                <Link to="#host">Host</Link>
                            </li>
                            <li className={styles.mobilenavigationItem}>
                                <Link to="/gallery/">Gallery</Link>
                            </li>
                            <li className={styles.mobilenavigationItem}>
                                <Link to="/contactus/">Contact</Link>
                            </li>

                        </ul>
                        <div className="navbg1"></div>
                        <div className="navbg2"></div>

                    </div>


                </div>




            </div>


        )
    }
}
