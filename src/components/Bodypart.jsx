import React from 'react'
import Navpart from './Navpart'
import img1 from '../assets/face.png'
import img2 from '../assets/linkedin.png'
import img3 from '../assets/git.png'
import Typewriter from "typewriter-effect";
import myimg from '../assets/img2.jpg'

function Bodypart() {
  return (
    <>
    <div className="fullbody" id='home'>
        <Navpart/>
        <div className="d-flex justify-content-evenly align-items-center ps-5 pe-5 flex-wrap bdy2" style={{paddingTop:'190px'}}>
            <div className='d-flex justify-content-start align-items-start flex-column bcnt1'>
                <h1 className="fw-bolder text-light">
                    HI I'AM
                </h1>
                <h1 className="fw-bolder name">
                   ALVIN JOY
                </h1>
                <div className='d-flex '>
                    <p className="text-light fw-bolder">I'M A :</p>
                    <span className='name2 fw-bolder'>
                    <Typewriter
                            options={{
                                strings: ["FRONTEND DEVELOPER", "REACT DEVELOPER", "BACKEND DEVELOPER"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>

                </div>
                <p className="text-light text-justify bintro fw-bolder">I work in Front-End Web Development, and I have experience in dealing with programming and modern Web Technologies, and I have built a lot of projects that have increased my experience and trained a lot. I'm a fast learner and always love to develop myself. </p>
                <div className="icons d-flex w-50 justify-content-evenly align-items-start">
                    {/* <img src={img1} className='fimg' style={{width:'15%'}} alt="" />
                    <img className='fimg2' src={img2} style={{width:'15%'}} alt="" />
                    <img src={img3} className='fimg3' style={{width:'20%'}} alt="" /> */}
                    <a className='fbox2' href='https://www.facebook.com/ALVINJOY2000/' target='_blank'><div id='i1' className='p-4 rounded' style={{width:'100%',border:'1px solid gold'}}><i className="fa-brands fa-facebook-f fa-2xl ficon"></i></div></a>
                    <a  className='fbox2' href='https://www.linkedin.com/in/alvin-joy/' target='_blank'><div id='i2' className=' p-4 rounded' style={{width:'100%',border:'1px solid gold'}}><i className="fa-brands fa-linkedin-in ficon fa-2xl"></i></div></a>
                    <a className='fbox2' href='https://github.com/Alvin-45' target='_blank'><div id='i3' className='p-4 rounded gdiv' style={{border:'1px solid gold'}}><i id='gicon' className="fa-brands fa-github ficon fa-2xl"></i></div></a>
                </div>

            </div>
            <div className='bg-light bd2' style={{zIndex:'5555'}}>
                <img className='img-fluid bimg ' src={myimg} alt="" style={{zIndex:'999999999999'}} />
                </div>
        </div>
    </div>
    </>
  )
}

export default Bodypart