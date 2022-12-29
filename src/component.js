import { useState } from 'react'
import banner from './photo/banner.png'

export function Navbar() {

    const emojies = [':)', ':D', ';)', '(•‿•)', 'B)', ':>', ';D', ':o' , '(⌐■_■)', '(◕⋏◕)', 'ʕ•́ᴥ•̀ʔ', 'ツ ', '◉_◉']

    const [emoji, setEmoji] = useState(
        emojies[Math.round(Math.random() * 12)]
    )

    return (
      <div id="nav-style">
          <img src={banner} alt="Website Banner" id="nav-logo" />]

          <div id="nav-cont">
               <b id="nav-title">TinyTweaks</b>
          </div>    
      </div>
    )
}