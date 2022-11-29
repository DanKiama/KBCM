import React from 'react'
import Link from 'gatsby-link'
import styles from './navigation.module.css'




export default () => (
  <nav role="navigation">
    <ul className={styles.navigation}>

      <li className={styles.navigationItem}>
        <Link to="../#home"><span data-hover="Hello">Hello</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="#about"><span data-hover="About">About </span></Link>
        <ul className={styles.dropdown}>
          <li> <Link to="#about">kbcm </Link></li>
          <a href="https://farajacancersupport.org/about/" target="blank">Faraja</a>
          <li> <Link to="/testimonials/">Testimonials </Link></li>
        </ul>
      </li>

      <li className={styles.navigationItem}>
        <Link to="#host"><span data-hover="Host">Host</span></Link>
        <ul className={styles.dropdown}>
          <li> <Link to="/ideas/">Ideas </Link></li>
          <li> <Link to="/#register">Register </Link></li>
        </ul>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/gallery/"><span data-hover="Gallery">Gallery</span></Link>
      </li>
      <li className={styles.navigationItem}>
        <Link to="/contactus/"><span data-hover="Contact">Contact</span></Link>
      </li>


    </ul>




  </nav>
)

