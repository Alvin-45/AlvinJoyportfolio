import React from 'react'
import img1 from '../assets/globe.png'
import img2 from '../assets/cmp.png'
import img3 from '../assets/search.png'
import img4 from '../assets/file.png'
import img5 from '../assets/layer.png'
import img6 from '../assets/wrench.png'

function Services() {
  return (
    <>
    <div className="services pt-5" id='services'>
    <h5 className="text-center fw-bolder text-light abh">
      <i id='i1' className="fa-solid fa-caret-left arrow"></i><span className='abhead'>SERVICES</span><i id='i2' className="fa-solid fa-caret-right  arrow"></i>
    </h5>
        <div className="d-flex justify-content-evenly align-items-center mt-5 flex-wrap">
            <div className="box1  rounded  d-flex justify-content-evenly align-items-center flex-column p-5 text-center m-2">
              <img src={img2} alt="" style={{width:'30%',height:'90px'}} />
              <h5 className="text-danger mt-3">FULL STACK APPLICATION</h5>
              <p className="text-light mt-3">I can develop comprehensive full stack applications with responsive designs and optimized performance across both client and server sides.</p>
            </div>
            <div className="box6  rounded  d-flex justify-content-evenly align-items-center flex-column p-5 text-center m-2">
              <img src={img1} alt="" style={{width:'30%',height:'90px'}} />
              <h5 className="text-danger mt-3">WEBSITE</h5>
              <p className="text-light mt-3">I Can Build Professional Responsive Websites Optimized For The Most Popular Search Engines</p>
            </div>
            <div className="box2  rounded d-flex justify-content-evenly align-items-center flex-column p-5 text-center m-2">
              <img src={img3} alt="" style={{width:'30%',height:'90px'}} />
              <h5 className="text-danger mt-3">WEB APPLICATIONS</h5>
              <p className="text-light mt-3">I Can Build Applications For Different Purposes Using Technologies That Allow You More Security.</p>
            </div>
            <div className="box3  rounded  d-flex justify-content-evenly align-items-center flex-column p-5 text-center m-2">
              <img src={img4} alt="" style={{width:'30%',height:'90px'}} />
              <h5 className="text-danger mt-5">FIGMA TEMPLATE TO HTML</h5>
              <p className="text-light mt-3">I could bring life to any design of your choise.Kickstart your bussiness today!</p>
            </div>
            <div className="box4  rounded  d-flex justify-content-evenly align-items-center flex-column p-5 text-center m-2">
              <img src={img5} alt="" style={{width:'30%',height:'90px'}} />
              <h5 className="text-danger mt-3">BACKEND DEVELOPMENT</h5>
              <p className="text-light mt-3">I can build robust and scalable backend systems, ensuring efficient data management and seamless integration with frontend applications.</p>
            </div>
            <div className="box5  rounded  d-flex justify-content-evenly align-items-center flex-column p-5 text-center m-2">
              <img src={img6} alt="" style={{width:'30%',height:'90px'}} />
              <h5 className="text-danger mt-3">DEBUGGING</h5>
              <p className="text-light mt-3">I Can Build Professional Responsive Websites Optimized For The Most Popular Search Engines</p>
            </div>
            
        </div>
        
    </div>
    </>
  )
}

export default Services