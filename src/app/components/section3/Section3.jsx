'use client'

import Image from "next/image";
import { useEffect, useState } from "react";

import element1 from '../../asset/image/section3.element1.png'
import element2 from '../../asset/image/section3.element2.png'
import element3 from '../../asset/image/section3.element3.png'
import element4 from '../../asset/image/section3.element4.png'
import element5 from '../../asset/image/section3.element5.png'
import element6 from '../../asset/image/section3.element6.png'
import element7 from '../../asset/image/section3.element7.png'

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Card from "../card/Card";
import axios from "axios";

const axiosApi = axios.create({
    baseURL: 'https://feaa-2402-800-fc0e-da4e-f886-8a1c-1c74-b26c.ngrok-free.app/api',
    headers: {
        'Content-type': 'application/json',
        "ngrok-skip-browser-warning": "69420",
    },
});
export async function getServerSideProps() {
    const response = await axiosApi.get("/get-wish-list")
    return response
}

export async function postServerSideProps({ type, content }) {
    const response = await axiosApi.post("/post-wish", {
        type: type,
        content: content
    })
    return response
}

const Section3 = () => {
    const [zodiac, setZodiac] = useState('aries')
    const [data, setData] = useState()

    useEffect(() => {
        stars2()
    }, [])

    useEffect(() => {
        getServerSideProps().then((res) => setData(res.data)).catch((err) => console.log(err))
    }, [])

    const options = [
        { value: 'aries', label: 'Aries' },
        { value: 'taurus', label: 'Taurus' },
        { value: 'gemini', label: 'Gemini' },
        { value: 'cancer', label: 'Cancer' },
        { value: 'leo', label: 'Leo' },
        { value: 'virgo', label: 'Virgo' },
        { value: 'libra', label: 'Libra' },
        { value: 'scorpius', label: 'Scorpius' },
        { value: 'sagittarius', label: 'Sagittarius' },
        { value: 'capricorn', label: 'Capricorn' },
        { value: 'aquarius', label: 'Aquarius' },
        { value: 'pisces', label: 'Pisces' }
    ];
    const [defaultOption, setDefaultOption] = useState(options[0]);

    function stars2() {
        const count = 50;
        const stars = document.getElementById('stars2');
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

    const changeZodiac = (e) => {
        setZodiac(e.value)
        setDefaultOption(e)
    }

    const postWish = async () => {
        const content = document.getElementById('chat').value;
        if (content) {
            await postServerSideProps({
                type: zodiac,
                content: content
            })
            socket.emit('get wish', content)
            document.getElementById('chat').value = ''
        }

        await getServerSideProps().then((res) => setData(res.data)).catch((err) => console.log(err))

    }


    return (
        <>
            <div id='section3' className='w-full h-[100vh] overflow-hidden relative section3'>
                <div id="stars2"></div>
                <Image alt='element1' src={element1} className="absolute top-0 left-0 w-full h-[100vh] object-fit" />
                <Image alt='element2' src={element2} className="absolute left-[80%] top-[10%] scale-50 object-fit" />
                <Image alt='element3' src={element3} className="absolute left-[50%] top-[40%] scale-50 object-fit" />
                <Image alt='element4' src={element4} className="absolute right-0 top-[50%] w-1/3 object-fit" />
                <Image alt='element5' src={element5} className="absolute top-[10%] w-1/4 object-fit" style={{ left: '-10%' }} />
                <Image alt='element6' src={element6} className="absolute left-[20%] bottom-[30%] w-[5%] object-fit" />
                <Image alt='element7' src={element7} className="absolute left-[15%] top-0 w-[10%] object-fit" />
                <div className="absolute left-0 top-0 w-full h-[100vh] pt-12 flex justify-center items-center">
                    <div className="w-[90%] h-[90%] sm:w-[70%] sm:h-[80%] border-[1px] border-gray-400 rounded-lg bg-transparent backdrop-blur-sm shadow-2xl overflow-hidden">
                        <div className="w-full h-16 flex justify-center items-center">
                            <Dropdown className="w-[20%]" onChange={changeZodiac} options={options} value={defaultOption} placeHolder="Select an option" />
                            <textarea id="chat" rows="1" className="block mx-4 p-2.5 w-[70%] text-sm text-gray-200 bg-transparent rounded-lg border border-gray-300 focus:ring-transparent focus:border-gray-200 " placeholder="Your message..."></textarea>
                            <button onClick={postWish} className="inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer hover:bg-transparent">
                                <svg className="w-5 h-5 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 18 20">
                                    <path d="m17.914 18.594-8-18a1 1 0 0 0-1.828 0l-8 18a1 1 0 0 0 1.157 1.376L8 18.281V9a1 1 0 0 1 2 0v9.281l6.758 1.689a1 1 0 0 0 1.156-1.376Z" />
                                </svg>
                            </button>
                        </div>
                        <div className="w-full overflow-hidden" style={{ height: 'calc(100% - 64px)' }}>
                            <div className="w-full h-full overflow-y-auto">
                                <div className="w-full flex p-2 gap-2 sm:p-4 sm:gap-8 justify-center flex-wrap">
                                    {data?.length > 0 ? data?.map((item) => (

                                        <Card key={item.message} type={item.type} content={item.message} />
                                    ))
                                        : (
                                            <div className="text-gray-400">None</div>
                                        )}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Section3;