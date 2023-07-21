import React from 'react'
import { styled } from 'styled-components'

const Hero = () => {
  return (
    <MainSection>
      <div className='section_left'>
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className='buttons'>
        <button className='btn'>Shop Now</button>
        <button className='btn'>Category</button>
        </div>
      </div>
      <div className='section_right'>
        <img src='./images/hero-image.png' alt='hero image'/>
      </div>
    </MainSection>
  )
}

export default Hero

const MainSection = styled.main`
    display:flex;
    flex-wrap:wrap;
    padding:0px auto;
    .section_left{
        display:flex;
        flex-direction:column;
        width:50%;
        justify-content:center;
        margin-left:20px;
    }
    .section_left h1{
        font-size:108px;
        font-weight:900px;
        line-height: 102px;
    }
    .section_left p{
      font-size:15px;
      margin-top:10px;
      margin-bottom:10px;
      width:80%;
      line-height:20px;
      letter-spacing:1px
    }
    .buttons{
      display:flex;
      gap:14px
    }

    .section_right img {
        object-fit:cover;

    }
`
