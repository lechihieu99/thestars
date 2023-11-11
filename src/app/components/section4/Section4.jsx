import Image from 'next/image';
import { useEffect, useState } from 'react';
import moon from '../../asset/image/section4.moon.png'
import shadow from '../../asset/image/section4.shadow.png'
import shadowMobile from '../../asset/image/section4.shadow.mobile.png'

import wish1 from '../../asset/image/section3.element8.png'
import wish2 from '../../asset/image/section3.element9.png'

import './style.scss'
import Typewriter from 'typewriter-effect';

const Section4 = ({ selected }) => {

    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth)
        })

        return () => {
            window.removeEventListener('resize', () => {
                setWidth(window.innerWidth)
            })
        }
    }, [])

    useEffect(() => {
        stars3()
    }, [])

    function stars3() {
        const count = 20;
        const stars = document.getElementById('stars3');
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
            <div id='section4' className="w-full h-[100vh] relative overflow-hidden section4">
                <div id="stars3"></div>
                <div className="star"></div>
                <div className="meteor-1"></div>
                <div className="meteor-2"></div>
                <div className="meteor-3"></div>
                <div className="meteor-4"></div>
                <div className="meteor-5"></div>
                <div className="meteor-6"></div>
                <div className="meteor-7"></div>
                <div className="meteor-8"></div>
                <div className="meteor-9"></div>
                <div className='w-full h-full absolute top-0 left-0 flex justify-center items-center'>
                    <Image alt='moon section4' src={moon} className="w-[40%]" />
                </div>
                {width && (
                    <Image alt='shadow' src={width < 680 ? shadowMobile : shadow} className="w-full absolute bottom-0 left-0 z-40" />

                )}
                <div className='w-full absolute bottom-0 left-0 p-2 sm:p-8 flex flex-row z-40'>
                    <div className="text-gray-400 hover:text-white font-semibold text-[9px] sm:text-sm cursor-pointer basis-1/3">Created by Le Chi Hieu</div>
                    <div className="text-gray-400 hover:text-white font-semibold text-sm cursor-pointer basis-1/3"></div>
                    <div className="text-gray-400 hover:text-white font-semibold text-[9px] sm:text-sm cursor-pointer basis-1/3 text-right">0339042674 or lechihieu99us@gmail.com</div>
                </div>
                <div className="absolute top-0 left-0 p-8 w-full h-full flex justify-end items-center z-30">
                    {/* <p id="typing" data-typewriter="Web Strategy,UX Testing,Content Management System,Web Design,Research and Analytics,Information Architecture,Strategic Consulting,Maintenance and Support"></p><span className="blinking-cursor">|</span> */}

                    <Typewriter
                        options={{
                            strings: ['A gift sent to you from the stars', 'Click on the gift box in menu to receive it', 'The stars have listened to you', "Let's continue with life with good things in the future"],
                            autoStart: selected.section4 ? true : false,
                            loop: true
                        }}
                    />
                </div>
            </div>
        </>
    )
}

export default Section4;