import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Main extends Component{

    render(){
    return(

        <div>
        <section className="hero hero-bg d-flex justify-content-center align-items-center">
               <div className="container">
                    <div className="row">

                        <div className="col-lg-6 col-md-10 col-12 d-flex flex-column justify-content-center align-items-center">
                              <div className="hero-text">

                                   <h1 className="text-white" data-aos="fade-up">Say hi to endangered animals in Victoria</h1>

                                   <a href="contact.html" class="custom-btn btn-bg btn mt-3" data-aos="fade-up" data-aos-delay="100">Let's make friends</a>
                              </div>
                        </div>
                        <div className="col-lg-6 col-12">
                          <div className="hero-image" data-aos="fade-up" data-aos-delay="300">

                            <img src={ require("./images/koala_cartoon.png")} class="img-fluid" alt="working girl"/>
                          
                          </div>
                        </div>

                    </div>
               </div>
     </section>


     
     <section class="about section-padding pb-0 about-background" id="about">
          <div class="container">
               <div class="row">

                    <div class="col-lg-7 mx-auto col-md-10 col-12 ">
                         <div class="about-info">
                              <h2 class="mb-4" data-aos="fade-up">the best <strong>Digital Marketing agency</strong> in Rio de Janeiro</h2>
                              <p class="mb-0" data-aos="fade-up">Total 5 HTML pages are included in this template from TemplateMo website. Please check 2 <a href="blog.html">blog</a> pages, <a href="project-detail.html">project</a> page, and <a href="contact.html">contact</a> page. 
                              <br/>You are <strong>allowed</strong> to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.</p>
                         </div>
                         <div class="about-image" data-aos="fade-up" data-aos-delay="200">

                          <img src={ require("./images/kangaroo_cartoon.png")} class="img-fluid" alt="office"/>
                         
                        </div>
                    </div>

               </div>
          </div>
     </section>


  
     <section class="project section-padding fade-up" id="project">
          <h2 class="mb-5 text-center" data-aos="fade-up">
               Please take a look through all<strong> amazing activities</strong>
          </h2>
          <div class="container-fluid col-md-9">
               <div id="carouselExampleIndicators" class="carousel slide fade-up" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                    <div class="carousel-inner">
                              <div class="carousel-item active" data-aos="fade-up" data-aos-delay="100">
                                   <img src={ require("./images/project/Project_one.jpg")} class="img-fluid d-block w-100" alt="project image"/>
                              
                                   <div class="project-info">
                                        <small>Outdoors</small>
                                        <h3>
                                        <Link to='/wildexp'>
                                             <span>Wild Explorers</span>
                                        </Link>
                                        </h3>
                                   </div>
                              </div>

                              <div class="carousel-item " data-aos="fade-up">
                                   <img src={ require("./images/project/Project_two.jpg")} class="img-fluid d-block w-100" alt="project image"/>
                                 
                                   <div class="project-info">
                                        <small>Exploring</small>

                                        <h3>
                                        <Link to='/natureCall'>
                                             <span>Nature's Calling</span>
                                        </Link>
                                        </h3>
                                   </div>
                              </div>

                              <div class="carousel-item " data-aos="fade-up">
                                   <img src={ require("./images/project/Project_three.jpg")} class="img-fluid d-block w-100" alt="project image"/>
                                   
                                   <div class="project-info">
                                        <small>Adventures</small>

                                        <h3>
                                             <Link to='/ausAdv'>
                                                  <span>Aussie Animal Adventurers</span>
                                                
                                             </Link>
                                        </h3>
                                   </div>
                              </div>

                                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>

                                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                         </div>
                    </div>
          
     </section>


    
     <section class="testimonial section-padding">
          <div class="container">
               <div class="row">

                    <div class="col-lg-6 col-md-5 col-12">
                        <div class="contact-image" data-aos="fade-up">

                          <img src={ require("./images/Wombat_cartoon.gif")} class="img-fluid" alt="website"/>
                         
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-7 col-12">
                      <h4 class="my-5 pt-3" data-aos="fade-up" data-aos-delay="100">Client Testimonials</h4>

                      <div class="quote" data-aos="fade-up" data-aos-delay="200"></div>

                      <h2 class="mb-4" data-aos="fade-up" data-aos-delay="300">Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo.</h2>

                      <p data-aos="fade-up" data-aos-delay="400">
                        <strong>Mary Zoe</strong>

                        <span class="mx-1">/</span>

                        <small>Digital Agency (CEO)</small>
                      </p>
                    </div>

               </div>
          </div>
     </section>


    <footer class="site-footer">
      <div class="container">
        <div class="row">

          <div class="col-lg-5 mx-lg-auto col-md-8 col-10">
            <h1 class="text-white" data-aos="fade-up" data-aos-delay="100">We make creative <strong>brands</strong> only.</h1>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="200">
            <h4 class="my-4">Contact Info</h4>

            <p class="mb-1">
              <i class="fa fa-phone mr-2 footer-icon"></i> 
              +99 080 070 4224
            </p>

            <p>
              <a href="#">
                <i class="fa fa-envelope mr-2 footer-icon"></i>
                hello@company.com
              </a>
            </p>
          </div>

          <div class="col-lg-3 col-md-6 col-12" data-aos="fade-up" data-aos-delay="300">
            <h4 class="my-4">Our Studio</h4>

            <p class="mb-1">
              <i class="fa fa-home mr-2 footer-icon"></i> 
              Av. Lúcio Costa - Barra da Tijuca, Rio de Janeiro - RJ, Brazil
            </p>
          </div>

          <div class="col-lg-4 mx-lg-auto text-center col-md-8 col-12" data-aos="fade-up" data-aos-delay="400">
            <p class="copyright-text">Copyright &copy; 2020 Your Company
            <br></br>
            <a rel="nofollow noopener" href="https://templatemo.com">Design: TemplateMo</a></p>
          </div>

          <div class="col-lg-4 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="500">
            
            <ul class="footer-link">
              <li><a href="#">Stories</a></li>
              <li><a href="#">Work with us</a></li>
              <li><a href="#">Privacy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 mx-lg-auto col-md-6 col-12" data-aos="fade-up" data-aos-delay="600">
            <ul class="social-icon">
              <li><a href="#" class="fa fa-instagram"></a></li>
              <li><a href="#" class="fa fa-twitter"></a></li>
              <li><a href="#" class="fa fa-dribbble"></a></li>
              <li><a href="#" class="fa fa-behance"></a></li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
    </div>
    )
    }
}

export default Main