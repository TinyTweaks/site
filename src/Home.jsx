import React, { useContext, useEffect, useState } from "react";
import { LightMode } from './App.jsx';
import { Navbar } from './component'

const textArray = [
    'Howdy Folks!',
    'Greetings ;)',
    'Hello There!',
    "What's up?",
    "Hi Friend!",
    "Welcome Here!:)",
    "Enjoy your trip!:D",
    "Welcome to my website!",
    "Enjoy your stay! :)",
    "Syntax error x_x",
    "I'm kinda glitchy o_o",
    'Do people even read this?',
    'Aha! A Human! Hello :)',
    "Look, I'm glowing!",
    "Nice to meet you :)",
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
]

let selectedText = textArray[Math.round(Math.random() * (textArray.length - 1))]
let isClearing = true

export default function Home() {
    const [ animate, setAnimation ] = useState('none')
    const [ hideText, setHideText ] = useState('0')
    const [ lightColor ] = useContext(LightMode)

    const [ sayText, setSayText ] = useState(selectedText)
    
    let mode = lightColor === true ? {
        backgroundC: 'linear-gradient(30deg, white, rgb(240, 240, 240))',
        color: 'black'
    } : {
        backgroundC: 'linear-gradient(30deg, black, #242629)',
        color: 'white'
    }

    useEffect(() => {
        setAnimation('drag 1.9s infinite')
        setHideText('1')

        setTimeout(() => {
            setAnimation('none')

            setInterval(() => {
                if(isClearing) {
                    let removeInv = setInterval(() => {
                        if(!isClearing) return
                        let sayTextN = '0'

                        setSayText(prev => (function() {
                            sayTextN = prev
                            return prev
                        })())

                        if(sayTextN !== '') {
                            setSayText(prev => prev.slice(0, prev.length -1))
                        }
                        else {
                            selectedText = textArray[Math.round(Math.random() * (textArray.length - 1))]
                            clearInterval(removeInv)
                            isClearing = false
                        }
                    }, 120)
                }

                else {
                    let writeInv = setInterval(() => {
                        if(isClearing) return
                        let sayTextN = '0'

                        setSayText(prev => (function(){
                            sayTextN = prev
                            return prev
                        })())

                        if(sayTextN !== selectedText) {
                            setSayText(prev => selectedText.slice(0, prev.length + 1))
                        }
                        else {
                            selectedText = textArray[Math.round(Math.random() * (textArray.length - 1))]
                            clearInterval(writeInv)
                            isClearing = true
                        }
                    }, 150)
                }
            }, 4000)
        }, 1850)
    }, [])

    return (
        <div id="home-container">
            <Navbar place="home"/>
            
            <div id="home-d-cover" style={{ color: mode.color, background: mode.backgroundC }}>
                <div style={{ animation: animate, opacity: hideText }}>
                    <div id="w-text-c">
                        <p id="welcome-text">
                            &nbsp;{sayText}<span>_</span>
                        </p>
                    </div>

                    <div id="home-cont-down">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}