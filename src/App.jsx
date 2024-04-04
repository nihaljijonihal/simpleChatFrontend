import React, { useState } from 'react'

import {Routes,Route} from 'react-router-dom'
import Chat from './Chat'
import LandingPage from './LandingPage'


import icon1 from './profileIcons/1.png';
import icon2 from './profileIcons/2.png';
import icon3 from './profileIcons/3.png';
import icon4 from './profileIcons/4.png';
import icon5 from './profileIcons/5.png';
import icon6 from './profileIcons/6.png';
import icon7 from './profileIcons/7.png';
import icon8 from './profileIcons/8.png';
import icon9 from './profileIcons/9.png';

function App() {
  const [userName, setUserName] = useState("")
  const [userIcon, setUserIcon] = useState()
  return (
    <div>
      
      <Routes>
        <Route path='/' element={<LandingPage userName={userName} setUserName= {setUserName} userIcon={userIcon} setUserIcon={setUserIcon}/>}/>
        <Route path='/chat' element={<Chat userName={userName} setUserName= {setUserName} userIcon={userIcon} setUserIcon={setUserIcon}/>}/>
     </Routes>
    </div>
  )
}

export default App