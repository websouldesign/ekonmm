import React from 'react';
import skill1 from '../../assets/images/x-ray.png';
import skill2 from '../../assets/images/responsive.png';
import skill3 from '../../assets/images/smoke-detector.png';
import skill4 from '../../assets/images/graphic.png';
import skill5 from '../../assets/images/doctor.png';
import skill6 from '../../assets/images/business-and-finance.png';
import skillImage from '../../assets/images/skill-images.png';



export default function Skill() {
  return (
    <div>
        <section class="service-area hummm">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="service-top text-center">
                            <h4>Our Skills in Medical Imaging & Healthcare</h4>
                            {/* <img src={skill1} width={'30px'} alt="" /> */}
                            
                            <p className='pt-5'>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers</p>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 services-lft">
                        <div class="service-box d-flex flex-row-reverse text-right">
                            <div class="box-icon">
                                <span><img src={skill1} width={'40px'} alt="" /></span>
                            </div>
                            <div class="box-content">
                                <h6>X Ray tube, Generator</h6>
                                
                            </div>
                        </div>
                        <div class="service-box d-flex flex-row-reverse text-right">
                            <div class="box-icon">
                                <span>                            <img src={skill2} width={'40px'} alt="" />
</span>
                            </div>
                            <div class="box-content">
                                <h6>Collimator and DAP
</h6>
                                
                            </div>
                        </div>
                        <div class="service-box d-flex flex-row-reverse text-right">
                            <div class="box-icon">
                                <span>                            <img src={skill3} width={'40px'} alt="" />
</span>
                            </div>
                            <div class="box-content">
                                <h6>Flat panel Detector,1k x 1k CMOS based Solution
</h6>
                                
                            </div>
                        </div>
                      
                    </div>
                    <div class="col-lg-2 d-md-none d-lg-block">
                        <div class="service-image">
                            <img src={skillImage} height={'350px'} className='imagebannee' alt=""  />
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-6 services-ryt">
                        <div class="service-box d-flex">
                            <div class="box-icon">
                                <span><img src={skill4} className='' width={'40px'} alt="" /></span>
                            </div>
                            <div class="box-content">
                                <h6>Imaging Software
</h6>
                                
                            </div>
                        </div>
                        <div class="service-box d-flex">
                            <div class="box-icon">
                                <span><img src={skill5} width={'40px'} alt="" /></span>
                            </div>
                            <div class="box-content">
                                <h6>Smartphone based OPD Management App
</h6>
                                
                            </div>
                        </div>
                        <div class="service-box d-flex">
                            <div class="box-icon">
                                <span><img src={skill6} width={'40px'} alt="" /> </span>
                            </div>
                            <div class="box-content">
                                <h6>Sales and Marketing
</h6>
                                
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
