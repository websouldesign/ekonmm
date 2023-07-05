import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
  return (
   
    <section class="breadcrumb-area text-center">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h2>Service</h2>
                <ul class="list-unstyled list-inline">
                    <li class="list-inline-item"><Link to="/">Home</Link></li>
                    <li class="list-inline-item"><i class="fa fa-long-arrow-right"></i>Service</li>
                </ul>
            </div>
        </div>
    </div>
</section>
  )
}
