import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import banner from './photo/banner.png'
import { LightMode } from './App.jsx'

const pointer = {
    background: 'linear-gradient(orange, red)', 
    boxShadow: '1px 2px 8px 3px black' 
}

export function Navbar({ place }) {

    const emojies = [':)', ':D', ';)', '(•‿•)', 'B)', ':>', ';D', ':o' , '(⌐■_■)', '(◕⋏◕)', 'ʕ•́ᴥ•̀ʔ', 'ツ ', '◉_◉']
    const [lightColor, setLightColor] = useContext(LightMode)
    
    const [emoji, setEmoji] = useState(
        emojies[Math.round(Math.random() * 12)]
    )

    let mode = lightColor === true ? {
        color: 'black',
        background: 'linear-gradient(72.3deg, #3232f5, #41b7fb, #85d2ff)'
    } : {
        color: 'white',
        background: 'linear-gradient(39deg, rgb(29, 7, 64) 8.5%, rgb(253, 105, 139) 94.2%, black 1%)'
    }

    return (
      <div id="nav-style" style={{ color: mode.color, background: mode.background }}>
          <img src={banner} alt="Website Banner" id="nav-logo" />

          <div id="nav-cont">
               <b id="nav-title" onClick={() => setEmoji(
                       emojies[Math.round(Math.random() * 12)]
                   )}>

                   TinyTweaks <span id="nav-emoji" title={emoji}>{emoji}</span>
               </b>

               <nav id="nav-navigation">
                   <Link to="/site" style={place === 'home' ? pointer : {}} class="nav-design">
                       Home
                   </Link>
                   
                   <Link to="/site/settings" style={place === 'settings' ? pointer : {}} class="nav-design">
                       Settings
                   </Link>

                   <Link to="/site/apps" style={place === 'apps' ? pointer : {}} class="nav-design">
                       Apps
                   </Link>
               </nav>
          </div>    
      </div>
    )
}