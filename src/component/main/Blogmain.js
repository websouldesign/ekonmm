import React from 'react'
import blog from '../../assets/images/blog1.jpeg';
import { Link } from 'react-router-dom';
// import mail from '../../assets/images/mail.png';


export default function Blogmain() {
  return (
    <div>
         <section class="news">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="news-top text-center">
                            <h4>Blog</h4>
                            <img src="images/heartbeat.png" alt="" />
                            <p className='pt-3 pb-5 mb-0 '>This is a sample of dummy copy text often used to show page layout . </p>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="news-box">
                            <div class="news-image">
                                <Link to="/blog-detail"><img src={blog} alt="" class="img-fluid" /></Link>
                                
                            </div>
                            <div class="news-heading d-flex">
                               
                                <div class="heading-box">
                                     <h6><Link to="/blog-detail">OSF Healthcare using predictive AI</Link></h6>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a >12 August 2023</a></li>
                                        {/* <li class="list-inline-item"><i class="fa fa-commenting-o"></i><a href="">(<span>23</span>)</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="news-content">
                                <p>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People .</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="news-box">
                            <div class="news-image">
                                <Link to="/blog-detail"><img src={blog} alt="" class="img-fluid" /></Link>
                            </div>
                            <div class="news-heading d-flex">
                                
                                <div class="heading-box">
                                    <h6><Link to="/blog-detail">OSF Healthcare using predictive AI</Link></h6>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a >12 August 2023</a></li>
                                        {/* <li class="list-inline-item"><i class="fa fa-commenting-o"></i><a href="">(<span>23</span>)</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="news-content">
                                <p>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People .</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="news-box">
                            <div class="news-image">
                                <Link to="/blog-detail"><img src={blog} alt="" class="img-fluid" /></Link>
                            </div>
                            <div class="news-heading d-flex">
                                
                                <div class="heading-box">
                                     <h6><Link to="/blog-detail">OSF Healthcare using predictive AI</Link></h6>
                                    <ul class="list-unstyled list-inline">
                                        <li class="list-inline-item"><i class="fa fa-user-o"></i><a>12 August 2023</a></li>
                                        {/* <li class="list-inline-item"><i class="fa fa-commenting-o"></i><a href="">(<span>23</span>)</a></li> */}
                                    </ul>
                                </div>
                            </div>
                            <div class="news-content">
                            <p>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers, Web designers, People .</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
    </div>
  )
}
