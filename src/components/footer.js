import React from 'react'
import Link from 'gatsby-link'
import { FaTwitter, FaLinkedin, FaFacebook, FaGooglePlus, FaGooglePlusSquare } from 'react-icons/fa';
import styles from './footer.module.css'

export default () => {

    const getCurrentYear = () => {
        return new Date().getFullYear()
    };

    return (
        <footer className={styles.footer}>

            <div className="inner">

                <div className="row">

                    <div className="col-md-6 col-12 py-2">
                        <h3>KBCM </h3>
                        <p>
                            info@farajacancersupport.org
                        </p>
                        <p>T: 0748 811 909</p>
                        <p>
                            P. O. Box 39173-00800 Nairobi, Kenya.
                        </p>
                        <p>
                            www.farajacancersupport.org
                        </p>

                    </div>
                    <div className="col-md-6 col-12 py-2">
                        <h4>Did you know </h4>
                        <p>
                            Faraja means 'Comfort' in Swahili and was founded in 2010 by Shaira Adamali. Our
                            Main Objective is to provide a safe haven for patients and their carers by
                            providing emotional, practical and healing support.
                        </p>

                    </div>

                </div>
                <hr />
                <div className="footer-copyright text-center">© {getCurrentYear()} Faraja Cancer Support. All Rights Reserved.

                </div>

            </div>
        </footer>
    )


}