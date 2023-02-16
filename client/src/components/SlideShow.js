import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import './slideshow.css'
const images=[
  {url:"https://www.gopgo.in/assets/new_ui/webp_images/homeEndingpgwoeSlider3-2a05b9d6e5fd3995723f026bb709b79061b55d0a9c666dfbc154c6623cf064c2.webp"},
  {url:"https://www.gopgo.in/assets/new_ui/webp_images/homeEndingpgwoeSlider1-eaacd45db4ffd4c17f2094840fa46ce9b3d72323c3d2721871437e3af7a5c51d.webp"}
]
const SlideShow = () => {
  return (
    <div className='slideImage'>
        <div className='slideImageLogo'>
            <h1>Ending PG finding 
with BookMyPG</h1>
        </div>
        <SimpleImageSlider
        className='slideImagePhoto'
      style={{alignItme:"center"}}
      autoPlay={true}
    width={400}
    height={400}
    
    images={images}
    showBullets={true}
    showNavs={false}
    ></SimpleImageSlider>
    </div>
  )
}

export default SlideShow