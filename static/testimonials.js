import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styles from '../components/ideas.css'

const Ideas = () => (
  <Layout>
    <SEO title="Testimonials" />
    <section id="ideasofhosting" className="Banner inner_page">
          <div className="overlay"></div>

      
            <div className="banner_message">
             
               <h1>
             What people say about us
              
          
              </h1>
             
           

            </div>
  
         
        
        </section>
       <div className="inner">
        <div className="row">
          <div className="col-md-12 align-center py-4">
              <h2>Testimonial section</h2>
              <h4>( Stories of heroes and heroines )</h4>
          </div>
          <div className="col-md-4 col-sm-12 col-12 testimonial-area">
            <div className="card-item">
              <div className="card d-flex flex-column">
                <div className="main font-weight-bold pb-2 pt-1">
                  <a href="https://farajacancersupport.wordpress.com/" target="_blank">When a refugee seeks refuge and finds Faraja (comfort)</a>
                </div>
                <div className="testimonial"> 
                  18-year-old Gacore, a teenager from DRC Congo was full of hope for 
                  a new life as a refugee in Uganda. But even the experience of 
                  being a refugee would not have prepared him and his family for 
                  the long trip that fate seemed to have planned.
                </div>
                <div className="d-flex flex-row profile pt-4 mt-auto"> 
                <img src="../img_4640.jpg" alt="" className="rounded-circle" />
                    <div className="d-flex flex-column pl-2">
                      <div className="name">Gacore</div>
                      <p className="text-muted designation">Teenager from DRC Congo</p>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 col-12 testimonial-area">
            <div className="card-item">
              <div className="card d-flex flex-column">
                <div className="main font-weight-bold pb-2 pt-1">
                  <a href="https://farajacancersupport.wordpress.com/" target="_blank">An overzealous doctor led to an early diagnosis</a>
                </div>
                <div className="testimonial"> 
                Swelling in the leg between the groin and inner thigh, did not at first concern 
                Mohammed much, because it is a common occurrence indicating an infection in 
                most people after an injury. However, this specific swelling was not painful, 
                and Mohammed had not suffered any sort of injury. He first noticed the 
                swelling at the beginning of 2020...
                </div>
                <div className="d-flex flex-row profile pt-4 mt-auto"> 
                <img src="../img_4632.jpg" alt="" className="rounded-circle" />
                    <div className="d-flex flex-column pl-2">
                        <div className="name">Mohammed</div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-12 col-12 testimonial-area">
            <div className="card-item">
              <div className="card d-flex flex-column">
                <div className="main font-weight-bold pb-2 pt-1">
                  <a href="https://farajacancersupport.wordpress.com/" target="_blank">Confronting doctors led to a right diagnosis</a>
                </div>
                <div className="testimonial"> 
                  Who would have thought that a backache would be a precursor to cervical cancer? 
                  Not Rosemary, who thought that her back pain was because of overworking. 
                  The back pain started towards the end of the year 2020. It persisted, 
                  leading Rosemary to seek medical advice. 
                </div>
                <div className="d-flex flex-row profile pt-4 mt-auto"> 
                <img src="../faraja-3-1.jpg" alt="" className="rounded-circle" />
                    <div className="d-flex flex-column pl-2">
                        <div className="name">Rosemary</div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>


   
  </Layout>
)

export default Ideas