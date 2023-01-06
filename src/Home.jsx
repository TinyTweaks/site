import React, { useContext, useEffect, useState } from "react";
import { LightMode } from './App.jsx';
import { Navbar } from './component'

export default function Home() {
    const [ animate, setAnimation ] = useState('none')
    const [ hideText, setHideText ] = useState('0')
    const [ lightColor ] = useContext(LightMode)
    
    let mode = lightColor === true ? {
        backgroundC: 'linear-gradient(white, grey)',
        color: 'black'
    } : {
        backgroundC: 'linear-gradient(30deg, black, #242629)',
        color: 'white'
    }

    useEffect(() => {
        setAnimation('drag 1.6s infinite')
        setHideText('1')

        setTimeout(() => {
            setAnimation('none')
        }, 1500)
    }, [])

    return (
        <div id="home-container">
            <Navbar place="home"/>
            
            <div id="home-d-cover" style={{ color: mode.color, background: mode.backgroundC }}>
                <div style={{ animation: animate, opacity: hideText }}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, voluptates. Illo voluptates animi quas vel quaerat eligendi quisquam itaque beatae quo nulla. Eos amet ratione, assumenda molestias totam corporis dolorum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, minus. Cum aut sequi est tenetur nisi maiores? Officia suscipit vitae accusamus quaerat commodi maxime fugit at delectus esse, cum eligendi.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, maiores officia ad nisi consequatur non asperiores officiis quasi deserunt sit laudantium, explicabo cumin doloremque unde! Cumque ea cum quas magnam!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis doloremque dignissimos iste, reiciendis natus ipsum illum, voluptas fugit ut porro doloribus magnam fugiat ratione quia molestias facilis consectetur optio. Quia?
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet totam ut voluptatibus ipsam nulla cum quam, inventore assumenda minima nobis quia, eveniet earum at minus aliquam cumque, perspiciatis omnis tenetur!
                </div>
            </div>
        </div>
    )
}