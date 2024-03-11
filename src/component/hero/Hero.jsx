import React from 'react'
import "./Hero.css"
import picture from '../../assets/picture.png'
import html from "../../assets/html.png";
import bstr from "../../assets/bstr.png";
import js from "../../assets/js.png";
import css from "../../assets/img1.png";
import vector from "../../assets/vector.png";
import project1 from "../../assets/Rectangle.png";
import project2 from "../../assets/Rectangle1.png";
import project3 from "../../assets/Rectangle2.png";
import man from "../../assets/manstand.png";




export default function Hero() {
  return (
    <>
      <div id='container'>


        <div className='wrapper'>
        <div className="left">
         <div className='left-wrap'>
         <span>Hi, I'm a </span>
          <div>Software Developer</div>
          <p>I’m John Doe, a developer dedicated to making the world a better place one line of code at a time.</p>
          <button>Hire me</button>
         </div>
        </div>


        <div className="right">
          <div className="right-wrap">
          <img src={picture} alt="picture" />
          </div>
        </div>
        </div>
      </div>


      {/* skills */}
      <div className="skills">
        <h3>Skills</h3>

        <div className="skills-icon">
          <div className="tools">
          <h5>i have a vast experience in the following web technologies</h5>
            <img src= {html} alt="" />
            <img src= {css} alt="" />
            <img src= {js} alt="" />
            <img src= {bstr} alt="" />
          </div>

          <div className="vector">
            <img src={vector} alt="" />
          </div>

        </div>
      </div>

      {/* projects */}
      <div className="project">
        <h3>Projects</h3>
        <h5>A selected number of projects</h5>

        <div className="project-select">
            <img src= {project1} alt="" />
            <img src= {project2} alt="" />
            <img src= {project3} alt="" />
          </div>
      </div>

{/* contact */}
<div className="contact">
        <h3>contact me</h3>
  
        <div className="contact-flex">
            <img src= {man} alt="" />
            
            <div>
            <input type="text" placeholder='Enter email address'/> <br /> <br />
            <textarea name="" id="" cols="62" rows="8" />
            </div>
            
          </div>
      </div>


      

    </>
  )
}
