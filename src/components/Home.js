import React from 'react';
import image from '../assets/Saly-13.jpg';





export default function Home(){
    return(
        <header>
            <div className="container">
                <h1 className="hero_text">I'm Riddhesh Patil</h1>
                <p className="hero_para"> Web Designer based in Mumbai. I create WebDesigns and Websites using<span className="span_col"> HTML, CSS, JAVASCRIPT, REACT.JS.</span> I started Web development in 2019.</p>
                <div className="hero_img">
                    <img src={image} alt="" className="image-cover" />
                </div>
            </div>
        </header>
        
        
    )
}
