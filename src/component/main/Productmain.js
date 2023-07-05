import React from 'react'
import Product1 from '../../assets/images/blogger.png';
import Product2 from '../../assets/images/camera (3).png';
import Product3 from '../../assets/images/process.png';
import Product4 from '../../assets/images/hosting.png';
import Product5 from '../../assets/images/setting.png';
import Product6 from '../../assets/images/ad-blocker.png';
import Product7 from '../../assets/images/feature.png';
import Product8 from '../../assets/images/floppy-disk.png';
import Product from '../../assets/images/ideator.jpg';
import { Link } from 'react-router-dom';

export default function Productmain() {
  return (
    <div>
        <div class="testimonial service-area2">
            <div class="container">
            <div class="col-md-12">
                    <div class="service2-top text-center">
                        <h4 className='text-white'>Our Product</h4>
                        <img  alt="" />
                        <br/>
                        <p className='text-white'>This is a sample of dummy copy text often used to show page layout and design as sample layout text by Graphic designers</p>
                    </div>
                </div>
            <div class="row">

             <div className='col-lg-4 mb-3'>
                    <img src={Product} width="100%" />
             </div>
             <div className='col-lg-8'>
                <div className='row'>
               
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product1} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6 className='text-white'>PATIENT ADMINISTRATION</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                            <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product2} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6  className='text-white'>IMAGE ACQUISITION</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product3} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6  className='text-white'>LIVE IMAGE PROCESSING</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
            
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product4} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6  className='text-white'>Image Storage</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product5} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6 className='text-white'>IMAGE POST PROCESSING</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product6} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6  className='text-white'>ON SCREEN DISPLAY</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product7} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6 className='text-white'>REMOTE CONTROL</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product7} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6 className='text-white'>UNIQUE FEATURES FOR LOW DOSE</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="service2-box d-flex">
                        <div class="box-icon">
                            <img src={Product8} width={'40px'} alt="" />
                        </div>
                        <div class="box-content">
                            <h6  className='text-white'>EXPORT MEDIA</h6>
                            <ul className='pl-3'>
                            <li className='text-white'>Add New Patient</li>
                            <li className='text-white'>Modify Patient Details</li>
                           <p><Link to='/product' className='text-warning'><b>Read More</b></Link></p>

                            </ul>                        </div>
                    </div>
                </div>
                </div>

             </div>
               
            </div>
            </div>
        </div>
    </div>
  )
}
