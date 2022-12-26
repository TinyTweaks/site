import { useState } from 'react'
import { Link } from 'react-router-dom'
import banner from './photo/banner.png'

export function Navbar() {

    const emojies = [':)', ':D', ';)', '(•‿•)', 'B)', ':>', ';D', ':o' , '(⌐■_■)', '(◕⋏◕)', 'ʕ•́ᴥ•̀ʔ', 'ツ', '◉_◉']

    const [emoji, setEmoji] = useState(
        emojies[Math.round(Math.random() * 12)]
    )

    return (
      <div id="nav-style">
          <img src={banner} alt="Website Banner" id="banner-logo" />
            <div id="nav-cont">
                <h1 id="nav-title">TinyTweaks</h1>
   
                <nav id="nav-bar">
                    <p>&nbsp; <span id="nav-home">Home</span></p>
                    <p>Details</p>
                    <p>Apps</p>
                    <p>Settings &nbsp;</p>
                </nav>
           </div>

           <div id="nav-emoji" onClick={() => {
               setEmoji(
                   emojies[Math.round(Math.random() * 12)]
               )
           }}>
               <p id="nav-emote" title=":)">
                   {emoji}
               </p>
           </div>

           <div id="setting-btn">
                
           </div>
       </div>
    )
}