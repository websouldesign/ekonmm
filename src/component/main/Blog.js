import React from 'react'
import blog from '../../assets/images/blog1.jpeg';
import { Link } from 'react-router-dom';

export default function Blog() {
  return (
    <section class="breadcrumb-area text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Blog</h2>
                <ul class="list-unstyled list-inline">
                    <li class="list-inline-item"><Link to="/">Home</Link></li>
                    <li class="list-inline-item"><i class="fa fa-long-arrow-right"></i>Blog</li>
                </ul>
            </div>
        </div>
    </div>


</section>
  )
}
