'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import planet1 from '../../asset/image/section2.planet1.png'
import planet2 from '../../asset/image/section2.planet2.png'

import Typewriter from "typewriter-effect";
const Section2 = ({ selected }) => {

    useEffect(() => {
        stars()
    }, [])

    function stars() {
        const count = 100;
        const stars = document.getElementById('stars');
        var i = 0;
        while (i < count) {
            const star = document.createElement('i');
            const x = Math.floor(Math.random() * window.innerWidth)
            const y = Math.floor(Math.random() * window.innerHeight)
            const size = Math.random() * 3;
            star.style.left = x + 'px';
            star.style.top = y + 'px';
            star.style.height = 1 + size + 'px';
            star.style.width = 1 + size + 'px';
            const duration = Math.random() * 2;
            star.style.animationDuration = 2 + duration + 's';
            stars.appendChild(star);
            i++
        }
    }

    return (
        <>
            <div id='section2' className='w-full h-[100vh] overflow-hidden relative section2'>
                <div id="stars"></div>

                <div className="absolute w-1/2 h-full flex justify-center items-center top-0 -left-[20%]">
                    <Image alt='planet1' src={planet1} className="w-full" />
                </div>
                <div className="absolute w-2/3 h-full flex justify-center items-center top-0 -right-[28%]">
                    <Image alt='planet2' src={planet2} className="w-full" />
                </div>
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center p-4">
                    {/* <p id="typing" data-typewriter="Web Strategy,UX Testing,Content Management System,Web Design,Research and Analytics,Information Architecture,Strategic Consulting,Maintenance and Support"></p><span className="blinking-cursor">|</span> */}

                    <Typewriter
                        options={{
                            strings: ['How are you today, tomorrow or last month?', 'Are you satisfied with what you have?', 'Joy, Sadness, Disappointment or Pride', 'Please send all the emotions in your soul', 'The stars and planets in space will listen to you'],
                            autoStart: selected.section2 ? true : false,
                            loop: true
                        }}
                    />
                </div>
            </div>

        </>
    )
}

export default Section2;