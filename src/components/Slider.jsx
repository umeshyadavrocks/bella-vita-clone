import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    url: 'images/slide_2.jpg',
    caption: 'New Users Get 10% OFF!! Code : NEW10'
  },
  {
    url: 'images/slide_3.jpg',
    caption: 'Buy Any 4 Products for the Price of 3! Code: 4FOR3'
  },
  {
    url: 'images/slide_4.jpg',
    caption: 'Flexi-Box Buy any 4 Products at \u20A8 999'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{backgroundColor: "rgb(229,240,218)", textAlign: "center", padding: "0.5%", fontWeight:"bolder", color:"rgb(71,93,75)"}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow