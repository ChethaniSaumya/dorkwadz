import React, { Component, useEffect } from 'react';
import '../App.css';
import "aos/dist/aos.css";
import Aos from 'aos';
import logo from '../assets/logo.gif';
import homeL from '../assets/home.png';
import twitter from '../assets/twitter.png';
import telegram from '../assets/telegram.png';

const Stry = () => {
    useEffect(() => {
        Aos.init({ duration: 4000 });
    }, [])
}


const home = () => {
	window.open("https://bonewhale.com/");
}

const tweet = () => {
	window.open("https://twitter.com/bonewhaletoken");
}

const tg = () => {
	window.open("https://t.me/+S_LoK30EjwthYmI5");
}

class Footer extends Component {

    render() {
        return (

            <div class="boxWrap2Footer">

                <div class="footer">
                    <div class="logoF"><img src={logo} /></div>
                    <div class="footer2">
                        <div class="footerImg">
                            <img onClick={home} src={homeL} />
                            <img onClick={tweet} src={twitter} />
                            <img onClick={tg} src={telegram} />

                        </div>
                        <div class="copyright">Copyright © 2023 Dork Wadz. All Rights Reserved</div>
                    </div>

                </div>

            </div>
        )
    }
}

export default Footer;

