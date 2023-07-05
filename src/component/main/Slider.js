import React from 'react'
import { Link } from 'react-router-dom'
import blog from '../../assets/images/slider1.jpeg';


export default function Slider() {
  return (
    <div>
        <section class="hero-area"style={{ 
      backgroundImage: `url(${blog})` 
    }}>
        <div class="hero-table">
            <div class="hero-tablecell">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="home2-bpx">
                                <div class="hero-heading wow fadeInDown" data-wow-duration="1.2s" data-wow-delay="0.2s">
                                    <h2 className='mb-1'> We are transforming AI</h2>
                                    <h4 className='mb-2'>for Businesses at <span className='text-primary'><b>Eikon</b></span> 
</h4>
                                </div>
                                <div class="hero-para wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <p>We aim to make global healthcare products and services more human-technology efficient and connected; to better address patient & care seeker needs, optimize costs & build value for all stakeholders.

</p>
                                </div>
                                <div class="hero-btn wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.2s">
                                    <Link class="hero-btn1" to='/about' >Read More</Link>
                                    <Link class="hero-btn2" to="/contact">Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    </div>
  )
}
