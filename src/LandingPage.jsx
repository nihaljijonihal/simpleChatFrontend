import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import icon1 from './profileIcons/1.png';
import icon2 from './profileIcons/2.png';
import icon3 from './profileIcons/3.png';
import icon4 from './profileIcons/4.png';
import icon5 from './profileIcons/5.png';
import icon6 from './profileIcons/6.png';
import icon7 from './profileIcons/7.png';
import icon8 from './profileIcons/8.png';
import icon9 from './profileIcons/9.png';

export default function LandingPage({ userName, setUserName, userIcon, setUserIcon }) {
    useEffect(() => {
        setUserIcon(null)
        setUserName(null)
    }, [])

    const handleIconClick = (iconSrc) => {
        setUserIcon(iconSrc);
    };

    return (
        <div style={{backgroundColor: "#e1ebf7",height: "100vh"}}>
            <div className='d-flex justify-content-center mb-3 mt-5'><h3 style={{overflow: "hidden"}} className='fw-bolder'>Select Your Profile Avatar</h3></div>
            <div className='d-flex align-items-center justify-content-center row'>
                <div className="col-lg-4"></div>
                <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                    {userIcon ? <img src={userIcon} alt="" /> : <div className='iconContainer row  d-flex  align-items-center justify-content-center'>
    
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <div><img onClick={() => handleIconClick(icon1)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon1} alt="" /></div>
                            <div><img onClick={() => handleIconClick(icon2)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon2} alt="" /></div>
                            <div><img onClick={() => handleIconClick(icon3)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon3} alt="" /></div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <div><img onClick={() => handleIconClick(icon4)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon4} alt="" /></div>
                            <div><img onClick={() => handleIconClick(icon5)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon5} alt="" /></div>
                            <div><img onClick={() => handleIconClick(icon6)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon6} alt="" /></div>
                        </div>
                        <div className="col-lg-4 d-flex flex-column align-items-center justify-content-center">
                            <div><img onClick={() => handleIconClick(icon7)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon7} alt="" /></div>
                            <div><img onClick={() => handleIconClick(icon8)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon8} alt="" /></div>
                            <div><img onClick={() => handleIconClick(icon9)} style={{ height: '5rem', width: 'auto' }} className='btn' src={icon9} alt="" /></div>
                        </div>
    
                    </div>}
                    <div className='d-flex justify-content-center mb-3 mt-5'><h3 style={{overflow: "hidden"}} className='fw-bolder'>Enter Your Profile Name</h3></div>
                    <div className='mt-4 ms-4 me-4 mb-2'><input className='form-control rounded ' onChange={(e) => setUserName(e.target.value)} type="text" placeholder='Enter your name' /></div>
                    <Link className='mt-4' to={"/chat"}><button className='btn btn-primary d-flex align-items-center'>Start Chating <i className
                            ="fas fa-paper-plane sendIcon ms-2"></i></button></Link>
    
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    );
}

{/* <input className='form-control rounded' onChange={(e) => setUserName(e.target.value)}  type="text" placeholder='Enter your name' />
<Link to={"/chat"}><button className='btn'>Enter</button></Link> */}
