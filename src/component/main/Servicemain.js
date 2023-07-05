import React from 'react'
import service1 from '../../assets/images/service-1';
import service2 from '../../assets/images/service--2.png';
import service3 from '../../assets/images/service--3.png';
import service4 from '../../assets/images/service--4.png';
import service5 from '../../assets/images/service--5.png';
import service6 from '../../assets/images/service--6.png';


export default function Servicemain() {
  return (
    <div>
        <section class="service-area2">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="service2-top text-center">
                        <h4>Our Services</h4>
                        <img  alt="" />
                        <br/>
                        <p className='pt-3'>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={service1} width={'60px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6>TECHNOLOGY</h6>
                            <p>Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={service2} width={'60px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6>PRODUCT DESIGN</h6>
                            <p>Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={service3} width={'60px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6>AI-NIZATION</h6>
                            <p>Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
            
                <div class="col-lg-4 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={service4} width={'60px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6>COMPLIANCE</h6>
                            <p>Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={service5} width={'60px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6>RISK ASSESSMENT</h6>
                            <p>Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={service6} width={'60px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6>END-TO-END SERVICES</h6>
                            <p>Lorem ipsum dolor sit amet, consectet commodi sit veniam adipisicing.</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </section>
    </div>
  )
}
