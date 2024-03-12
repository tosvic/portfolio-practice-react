import React from 'react'
import "./Footer.css"
import whap from "../../assets/whatsapp.svg";
import twit from "../../assets/twitter.svg";
import ig from "../../assets/instagram.svg";
import git from "../../assets/github.svg";

function Footer() {
  return (

    <>
    <div className='foot'>
        <div className="foot-icons">
      
            <div className='foot-left'>
            <p>My social media links:</p>
            <img src= {whap} alt="" />
            <img src= {twit} alt="" />
            <img src= {ig} alt="" />
            </div>
            
            <div className='foot-right'>
            <p>More projects i've worked on</p>
            <img src= {git} alt="" /> @tosvic on github
            </div>
          </div>
      </div>
    </>
  )
}

export default Footer