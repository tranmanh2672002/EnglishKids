import React from 'react'
import Slider from './slider.js'
import Main from './Main.js'
import Footer from './Footer.js'
import ScrollToTop from './ScrollToTop';

export default function Intro() {
    return (
        <div id="intro" >
            <ScrollToTop />
            <Slider />
            <Main />
            <Footer />
        </div>
    )
}
