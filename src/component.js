import { useContext, useRef, useState } from 'react'
import moon_logo from './photo/moon_logo.png'
import sun_logo from './photo/sun_logo.png'
import { Link } from 'react-router-dom'
import banner from './photo/banner.png'
import { LightMode } from './App.jsx'

const pointer = {
    background: 'linear-gradient(orange, red)', 
    boxShadow: '0.5px 1px 4px 1.5px black' 
}

export function Navbar({ place }) {

    const emojies = [':)', ':D', ';)', '(•‿•)', 'B)', ':>', ';D', ':o' , '(⌐■_■)', '(◕⋏◕)', 'ʕ•́ᴥ•̀ʔ', 'ツ ', '◉_◉']
    const [lightColor, setLightColor] = useContext(LightMode)
    const [lightPic, setLightPic] = useState(sun_logo)
    const navref = useRef()

    const [emoji, setEmoji] = useState(
        emojies[Math.round(Math.random() * 12)]
    )

    let mode = lightColor === true ? {
        color: 'black',
        shadowType: '0.020em 0.020em 0 rgba(100,100,255, 0.5), 0.05em 0.05em 0 rgba(70, 70, 70, 1)',
        background: 'linear-gradient(39deg, #3232f5, #41b7fb, #85d2ff 94.2%, blue 1%)'
    } : {
        color: 'white',
        shadowType: '3px 3px 0 rgba(10, 10, 10, 1)',
        background: 'linear-gradient(39deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 94.2%, black 1%)'
    }

    return ( <>
      <div id="nav-style" style={{ color: mode.color, background: mode.background }}>
          <img src={banner} alt="Website Banner" id="nav-logo" />

          <div id="nav-cont">
               <b id="nav-title" style={{ textShadow: mode.shadowType }} onClick={() => setEmoji(
                       emojies[Math.round(Math.random() * 12)]
                   )}>

                   TinyTweaks <span id="nav-emoji" title={emoji}>{emoji}</span>
               </b>

               <nav id="nav-navigation">
                   <Link to="/site" style={place === 'home' ? pointer : {}} 
                       className="nav-design">
                       <span>Home</span>
                   </Link>
                   
                   <Link to="/site/settings" style={place === 'settings' ? pointer : {}}
                       className="nav-design">
                       <span>Settings</span>
                   </Link>

                   <Link to="/site/apps" style={place === 'apps' ? pointer : {}} 
                       className="nav-design">
                       <span>Apps</span>
                   </Link>
               </nav>
          </div>
      </div>

      <div id="show-stick" ref={navref}>
           <p id="text-place">{place[0].toUpperCase() + place.slice(1)}</p>

           <img src={lightPic} id="light-pic" onClick={() => {
                setLightPic((prev) => prev === sun_logo ? moon_logo : sun_logo)
                setLightColor((prev) => prev ? false : true)
           }} alt="Logo"/>
      </div>
 </>)
}