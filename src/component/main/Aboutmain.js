import React from 'react';
import about from '../../assets/images/About.png';
import { Link } from 'react-router-dom';


export default function Aboutmain() {
  return (
    <div>
        <section class="welcome-area">
            <div class="container">
                <div class="row">
                 
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="about-image">
                            <img src={about} alt="" class="img-fluid" />
                        </div>
                    </div>

                    <div class="col-lg-6">
                        <div class="welcome-box">
                            <h4>Welcome To <span className='text-primary'>Eikon</span></h4>
                            <img src="images/heartbeat.png" alt="" />
                           
                            <p className='pt-4'>We at Eikon provide our services to different industries like Healtchare, NDT, Home Security to name a few.</p>
                           <p>Our product IDEATOR, is an AI enabled system and software solution. It has been successfully installed and perfoming well in hospitals and at OEMs in India. Our product is mainly used by endo-spine surgeons, urologists, orthopaedics, neurologists and radiologists. IDEATOR's main USP is the best image quality at lower X-ray Dose and seamless UI/UX.</p>
                            <p>Eikon provides a complete, customized E2E product development from ideation to realization. Our expertise in product development use state-of-the-art AI/ML solutions to address the exact pain points and requirements from end-users & market.</p>
                            
                            <Link to='/about' >Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
