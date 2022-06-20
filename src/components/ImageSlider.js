import './ImageSlider.css'
import React from 'react'
import { motion } from 'framer-motion';
import { movie } from '../movie'

//slicer function
function slicer(arr, start, no) {
  let result = arr.slice(start, start + no);
  if (result.length < no) {
    result.push(...arr.slice(0, no - result.length));
  }
  result = [...result.slice(3,6),...result.slice(0,3)]
  return result;
}
 function currentImage(index) {
   if (index === 2) {
     return "large";
   }
   if (index === 1 || index === 3) {
     return "medium";
   }
   return "small";
 }
const ImageSlider = ({no}) => {
console.log(no)
  return (
    <>
    <div className='image-slider'>
        {slicer(movie,no,5).map((movie,i)=>{
          return <motion.img key={movie.id} src={movie.cardImage} className={` slider-image ${currentImage(i)}`} alt={movie.title}/>
        })}
    </div>
    <div className="slider-indicator">
     {
        movie.map((movie,i)=>{

          return <div key={movie.id} className={`slider-indicator-item ${i===no ? 'active' : ''}`}></div>
        })
     }
    
    </div>
        </>
  )
}
//[1,2,3,4,5]
//[1,2,3,4,5]
//[1,2,3,4,5]

export default ImageSlider