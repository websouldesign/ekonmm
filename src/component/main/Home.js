import React from 'react'
import Blog from './Blog'
import Counter from './Counter'
import Aboutmain from './Aboutmain'
import Servicemain from './Servicemain'
import Skill from './Skill'
import Productmain from './Productmain'
import Slider from './Slider'
import Blogmain from './Blogmain'


export default function Home() {
  return (
    <div>
      <Slider/>
        <Aboutmain/>
        <Servicemain/>
        <Productmain/>
        <Skill/>
        <Counter/>
        {/* <Blog/> */}
        <Blogmain/>
    </div>
  )
}
