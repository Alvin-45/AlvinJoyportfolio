import React from 'react'
import img1 from '../assets/face.png'
import img2 from '../assets/linkedin.png'
import img3 from '../assets/git.png'
function Footer() {
  return (
    <>
    <div className="footer p-4" id='contact' style={{backgroundColor:'black'}}>
        <div className="fbody d-flex justify-content-around align-items-center ">
        <div className="iconsf d-flex w-50 justify-content-start align-items-start">
                    {/* <img src={img1} className='fimg' style={{width:'15%'}} alt="" />
                    <img className='fimg2' src={img2} style={{width:'15%'}} alt="" />
                    <img src={img3} className='fimg3' style={{width:'20%'}} alt="" /> */}
                    <a className='me-2 fbox' href='https://www.facebook.com/ALVINJOY2000/' target='_blank'><div id='i1' className='p-4 rounded' style={{width:'100%',border:'1px solid gold'}}><i className="fa-brands fa-facebook-f fa-2xl ficon"></i></div></a>
                    <a className='me-2 fbox' href='https://www.linkedin.com/in/alvin-joy/' target='_blank'><div id='i2' className=' p-4 rounded' style={{width:'100%',border:'1px solid gold'}}><i className="fa-brands fa-linkedin-in ficon fa-2xl"></i></div></a>
                    <a className='me-2 fbox' href='https://github.com/Alvin-45' target='_blank'><div id='i3' className='p-4 rounded gdiv' style={{border:'1px solid gold'}}><i id='gicon' className="fa-brands fa-github ficon fa-2xl"></i></div></a>
                </div>
                <p className="fw-bolder text-light">COPYRIGHT  2024 PORTFOLIO WEBSITE.ALL RIGHTS RESERVED BT ALVIN <i className="fa-regular fa-copyright"></i> </p>

        </div>
    </div>
    </>
  )
}

export default Footer