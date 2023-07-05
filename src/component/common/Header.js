import React, { useState } from 'react';
import phone from '../../assets/images/phone.png';
import clock from '../../assets/images/clock.png';
import mail from '../../assets/images/mail.png';
import Logo from '../../assets/images/logoEcon.png';

import { Link } from 'react-router-dom';

export default function Header() {

    const [visible, setVisible] = useState(false)
    
    const handleLinkClick = () => {
        setVisible(false);
      };
    return (
        <div>

            <section class="top-bar d-none d-lg-block" >
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-md-9">
                            <div class="bar-content">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item"><img src={phone} alt />+91-992-0728-890</li>
                                    <li class="list-inline-item"><img src={mail} alt />support@eikonimaging.ai</li>
                                    <li class="list-inline-item"><img src={clock} alt />504, 5-B, Manasarovar Complex
                                        Sector-34, Kamothe</li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-3">
                            <div class="top-social text-right">
                                <ul class="list-unstyled list-inline pt-2">
                                    <li class="list-inline-item"><a href><i class="fa fa-facebook"></i></a></li>
                                    <li class="list-inline-item"><a href><i class="fa fa-twitter"></i></a></li>
                                    <li class="list-inline-item"><a href><i class="fa fa-linkedin"></i></a></li>
                                    <li class="list-inline-item"><a href><i class="fa fa-youtube"></i></a></li>
                                    <li></li>

                                    {/* <li class="list-inline-item">
                                    <span><button type="button" data-toggle="modal" data-target="#model-box">Make an Appointment</button></span>
                                    <div class="modal fade" id="model-box">
                                        <div class="modal-dialog modal-dialog-centered">
                                            <div class="modal-content text-center">
                                                <div class="medel-box-top">
                                                    <h4>Book An Appointment</h4>
                                                    <img src="images/heartbeat.png" alt />
                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                        <i class="fa fa-times"></i>
                                                    </button>
                                                </div>
                                                <form action="#">
                                                    <input type="text" name="name" placeholder="Full Name" required />
                                                    <input type="text" name="phone" placeholder="Phone Number" required />
                                                    <input type="text" name="email" placeholder="Email Address" required />
                                                    <input type="text" id="datetimepicker" data-toggle="datetimepicker" data-target="#datetimepicker" name="appdate" placeholder="Appointment Date" />
                                                    <textarea name="message" placeholder="Message" required ></textarea>
                                                    <button type="submit">Book Now</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* desktop */}
            <section class="logo-area menu-sticky">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 col-6">
                            <div class="logo">
                                <Link to='/' >
                                    <img src={Logo} height={'58px'} />
                                </Link>
                            </div>
                        </div>
                        <div class="col-md-9 col-6 d-lg-none d-block text-right">
        <i
          class="fa fa-bars toggle_button "
          onClick={() => setVisible(!visible)}
          aria-expanded={visible}
          aria-controls="collapseWidthExample"
        ></i>
      </div>
      {visible && (
        <div id="collapseWidthExample" className='w-100 text-center mobile_togle'>
          <div class="card card-body">
          <div class="main-menu text-right">
                                <ul class="list-unstyled list-inline">
                                    <li class=""><a><Link to="/"onClick={handleLinkClick} >HOME</Link>
                                    </a>
                                    </li>
                                    <li class=""><a>
                                        <Link to="/about"onClick={handleLinkClick} >ABOUT</Link>

                                    </a>
                                    </li>
                                    <li class=" "><a><Link to="/service" onClick={handleLinkClick} >SERVICE</Link>  </a>
                                    </li>
                                    <li class=" "><a><Link to="/product"onClick={handleLinkClick} >PRODUCT</Link>  </a>
                                    </li>
                                    <li class=""><a><Link to="/blog"onClick={handleLinkClick} >BLOG</Link> </a>
                                    </li>
                                    <li class=""><a><Link to="/contact"onClick={handleLinkClick} >CONTACT</Link> </a>
                                    </li>



                                </ul>
                            </div>
          </div>
        </div>
      )}
                    
                        <div class="col-md-9 d-lg-block d-none">
                            <div class="main-menu text-right">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item active"><a><Link to="/" onClick={handleLinkClick}>HOME</Link>
                                    </a>
                                    </li>
                                    <li class="list-inline-item "><a>
                                        <Link to="/about" >ABOUT</Link>

                                    </a>
                                    </li>
                                    <li class="list-inline-item "><a><Link to="/service" >SERVICE</Link>  </a>
                                    </li>
                                    <li class="list-inline-item "><a><Link to="/product" >PRODUCT</Link>  </a>
                                    </li>
                                    <li class="list-inline-item "><a><Link to="/blog" >BLOG</Link> </a>
                                    </li>
                                    <li class="list-inline-item "><a><Link to="/contact" >CONTACT</Link> </a>
                                    </li>



                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    )
}
