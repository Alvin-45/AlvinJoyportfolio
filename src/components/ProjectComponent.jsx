import React from 'react'
import img1 from '../assets/snapgram.png'
import img2 from '../assets/cboat.png'
import img3 from '../assets/nike.png'
import img4 from '../assets/interior.png'
import img5 from '../assets/atmosview.png'
import img6 from '../assets/netflix.png'
import img7 from '../assets/todo.png'
import img8 from '../assets/hotstar.png'
import img9 from '../assets/gym.png'
import img10 from '../assets/wheather.png'
import img11 from '../assets/dailymeet.png'
import img12 from '../assets/pf.png'
import img13 from '../assets/note.png'
import img14 from '../assets/quiz.png'
import img15 from '../assets/note.png'
import img16 from '../assets/parallax.png'
import img17 from '../assets/calc.png'

function ProjectComponent() {
  return (
    <>
    <div className="" style={{backgroundColor:'black',paddingTop:'130px'}}>
    <h5 className="text-center fw-bolder text-light abh">
        <i id='i5' className="fa-solid fa-caret-left  arrow"></i><span className='abhead'>MY PROJECTS</span><i id='i6' className="fa-solid fa-caret-right  arrow"></i>
        </h5>
        <div className="project d-flex justify-content-evenly align-items-center flex-wrap w-100 pt-5">
        <div className='me-3 mb-3 project1'>
                <div className="outerpart" style={{borderRadius:'20px'}}>
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">Snapgram(A social media Application)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://snapgramlite.netlify.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/snapgram' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img1} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className='me-3 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">A MERN Full stackApp for displaying Projects</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://projectexpo2.netlify.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/projectfair' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img12} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
           <div className='me-3 mb-3 project1'>
                <div className="outerpart " style={{borderRadius:'20px'}}>
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center  pt-5">ChatBoat(A Real time chat Application)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://chat-boat-olive.vercel.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/ChatBoat' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img2} className='img-fluid' style={{width:'100%',height:'300px'}} alt="" />
                    </div>
                </div>
           </div>
            <div className='me-3 mb-3  project1'>
                <div className="outerpart" style={{borderRadius:'20px'}}>
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">Nike Website With Google Authentication</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://nikeweb-googlelogin.vercel.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/Nikeweb-googlelogin' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img3} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className='me-3 mb-3  project1'>
                <div className="outerpart" style={{borderRadius:'20px'}}>
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">Interno:Interior Designing Company Website (Using Figma Template)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://interno-zeta.vercel.app/' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/interno' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img4} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className='me-3 mb-3 project1'>
                <div className="outerpart" style={{borderRadius:'20px'}}>
                    <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                        <h4 className="text-light text-center pt-5">ATMOSVIEW (A weather tracking(realtime) using API and news platform)</h4>
                        <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                            <a href='https://atmosview.vercel.app/index.html' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                            <a href='https://github.com/Alvin-45/atmosview' target='_blank'>
                                <div className="bg-secondary rounded">
                                    <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="b2">
                        <img src={img5} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
            <div className='me-3 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">VideoVerse-Netflix homepage clone Using React,CSS</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://video-streaming-platform-eight.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/netflixclone' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img6} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">A dynamic gym website using HTML,CSS and JS with BMI Calculator</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://gladiator-gym.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/gladiator-gym' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img9} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">A static website for a hotel using React for a restuarent</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://dailymeetcafe.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/dailymeetcafe' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img11} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">Todo List Using React,Redux</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://todolist-liart-kappa.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/todolist' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img7} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            
            
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">A simple weather tracker using react and fetch operation</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://weathertracker-steel.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/weathertracker' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img10} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">NoteWave-A note app using Reactjs,material ui,firebase,React Quill</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://react-note-app-two.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/react-note-app' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img13} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">QuizZone-A quiz app using react</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://quiz-zone-inky.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/quiz-zone' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img14} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">A simple parallax React.js front end for tours and travels</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://wanderlust-travels-lilac.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/wanderlust-travels' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img16} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">A simple calculater using React</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://react-calculator-seven-gamma.vercel.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/react-calculator' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img17} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>
            <div className='me-2 mb-3 project1'>
                <div className="outerpart"  style={{borderRadius:'20px'}}>
                <div className="b1 w-100" style={{position:'absolute',zIndex:'15'}}>
                    <h4 className="text-light text-center pt-5">Disney+Hotstar clone Using HTML,CSS</h4>
                    <div className="d-flex justify-content-around align-items-center  w-50 pt-5 ">
                        <a href='https://hotstar2clone.netlify.app/' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-solid fa-link p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                        <a href='https://github.com/Alvin-45/HotstarClone2' target='_blank'>
                            <div className="bg-secondary rounded">
                                <i className="fa-brands fa-github p-3 fw-bolder fa-lg"></i>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="b2">
                    <img src={img8} style={{width:'100%',height:'300px'}} className='img-fluid' alt="" />
                </div>
            </div>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default ProjectComponent