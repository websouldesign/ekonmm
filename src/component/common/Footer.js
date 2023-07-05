import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div>
      
      <footer>
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <div class="findus">
                            <h4>About Us</h4>
                            <p>We aim to make global healthcare products and services more human-technology efficient and connected; to better address patient & care seeker needs, optimize costs & build value for all stakeholders.</p>
                            <ul class="social list-unstyled list-inline">
                                <li class="list-inline-item"><Link to='/'><i class="fa fa-facebook"></i></Link></li>
                                <li class="list-inline-item"><Link to='/'><i class="fa fa-twitter"></i></Link></li>
                                <li class="list-inline-item"><Link to='/'><i class="fa fa-linkedin"></i></Link></li>
                                <li class="list-inline-item"><Link to='/'><i class="fa fa-youtube"></i></Link></li>
                                {/* <li class="list-inline-item"><Link to='/'><i class="fa fa-pinterest"></i></Link></li> */}
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="qlink">
                            <h4>Main Links</h4>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-angle-right"></i><Link to='/'>Home</Link></li>
                                
                                <li><i class="fa fa-angle-right"></i><Link to="/about">About </Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/service'>Services</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/blog'>Blog</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/contact'>Contacts</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/career'>Career</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                    <div class="qlink">
                            <h4>Product</h4>
                            <ul class="list-unstyled">
                                <li><i class="fa fa-angle-right"></i><Link to='/'>Ideator</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/'>TappDoc </Link></li>
                                {/* <li><i class="fa fa-angle-right"></i><Link to='/'>Services</Link></li> */}
                                <li><i class="fa fa-angle-right"></i><Link to='/'>AI Consultation</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/'>Product Planning</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/'>End-to-End System Design</Link></li>
                                <li><i class="fa fa-angle-right"></i><Link to='/'>Sales & Marketing</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="newsletter findus">
                            <h4>Contact us</h4>
                             <ul class="list-unstyled">
                                <li><i class="fa fa-map-marker"></i>504, 5-B, Manasarovar Complex Sector-34, Kamothe</li>
                                <li><i class="fa fa-envelope"></i>support@eikonimaging.ai</li>
                                <li><i class="fa fa-phone"></i>+91-992-0728-890</li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="f-menu text-center">
                          
                            <p>Copyright © 2023 <Link to="/" target="_blank">Eikon</Link>  All Right Reserved</p>
                          
                        </div>
                        <div class="back-to-top text-center">
                            {/* <a data-scroll="" href="#btt" style={{display: 'block'}}><img src="images/backtotop.png" alt="" class="img-fluid"/></a> */}
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div>
  )
}
