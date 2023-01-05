import React, { useContext, useEffect, useState } from "react";
import { LightMode } from './App.jsx';
import { Navbar } from './component'

export default function Home() {
    const [ modeState, setmodeState ] = useContext(LightMode)
    const [animate, setAnimation] = useState('none')

    useEffect(() => {
        setAnimation('drag 1.6s infinite')

        setTimeout(() => {
            setAnimation('none')
        }, 1500)
    }, [])

    return (
        <div id="home-container">
            <Navbar place="home"/>

            <div id="home-details" style={{ animation: animate }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nam illum, voluptatibus provident dicta, nulla aliquam ratione architecto officiis temporibus sunt impedit? Ipsum, inventore placeat. Necessitatibus nam ipsum ratione explicabo.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis magnam sapiente aut reiciendis pariatur sit magni, ad exercitationem laborum illum ipsa ab doloremque, eos praesentium eveniet, molestias illo sed sint.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta dolorum eligendi aspernatur, libero necessitatibus voluptates deserunt soluta tempore mollitia consectetur, hic nostrum cum neque ducimus. Quos at magnam incidunt adipisci.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, labore! Ipsa voluptatibus itaque doloribus dolorum veritatis. Accusantium nam, modi nobis, quod deleniti dignissimos dolor officia tenetur, architecto quae aspernatur similique!``
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam facere iure esse iste debitis quis id illum saepe natus earum. Quibusdam perspiciatis odio atque quia libero quaerat praesentium natus temporibus!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio alias libero expedita ad fugiat eligendi, amet nisi sequi impedit quis cum inventore laboriosam sunt accusamus ea, tempore obcaecati fugit accusantium!
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas quaerat laudantium natus iste! Dignissimos delectus ea fugit provident, doloremque porro blanditiis culpa mollitia ipsa explicabo hic quas est cupiditate dolor.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos perspiciatis architecto rem alias porro repellendus, repudiandae eum sed quisquam natus esse, doloribus earum qui ipsam, sint officia maiores magnam soluta?
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat officia consequuntur suscipit voluptates veniam nobis animi enim saepe vel nihil, eveniet et sed ad rerum quis quo recusandae similique expedita?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere nemo sit alias neque aut modi recusandae accusantium delectus fugit, error ex aliquid nisi, vitae officia ea autem deleniti dignissimos commodi.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam iusto nobis voluptatibus, debitis corrupti fuga harum assumenda alias ut voluptatem error recusandae sapiente cum porro magni deserunt eius nostrum architecto.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias perferendis assumenda saepe aut nam dolorum dolorem esse porro illo doloremque earum explicabo fugiat nostrum sed corrupti excepturi, perspiciatis dolor quisquam!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit recusandae odio adipisci reiciendis, nostrum molestiae. Recusandae iste consequuntur magnam consectetur et alias quis dolor totam, quo cum sapiente necessitatibus dolore.
            </div>
        </div>
    )
}