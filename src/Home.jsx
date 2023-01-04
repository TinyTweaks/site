import React, { useContext, useEffect, useState } from "react";
import { LightMode } from './App.jsx';
import { Navbar } from './component'

export default function Home() {
    const [ modeState, setmodeState ] = useContext(LightMode)
    const [animate, setAnimation] = useState('none')

    useEffect(() => {
        setAnimation('drag 1.1s infinite')

        setTimeout(() => {
            setAnimation('none')
        }, 1000)
    }, [])

    return (
        <div id="home-container">
            <Navbar place="home"/>

            <div id="home-details" style={{ animation: animate }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam illum, voluptatibus provident dicta, nulla aliquam ratione architecto officiis temporibus sunt impedit? Ipsum, inventore placeat. Necessitatibus nam ipsum ratione explicabo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam sapiente aut reiciendis pariatur sit magni, ad exercitationem laborum illum ipsa ab doloremque, eos praesentium eveniet, molestias illo sed sint.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorum eligendi aspernatur, libero necessitatibus voluptates deserunt soluta tempore mollitia consectetur, hic nostrum cum neque ducimus. Quos at magnam incidunt adipisci.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, labore! Ipsa voluptatibus itaque doloribus dolorum veritatis. Accusantium nam, modi nobis, quod deleniti dignissimos dolor officia tenetur, architecto quae aspernatur similique!
            </div>
        </div>
    )
}