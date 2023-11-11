import Link from "next/link";
import { useEffect, useState } from "react";

const Menu = ({ selected }) => {
    const [play, setPlay] = useState(false)

    useEffect(() => {
        const audio = document.getElementById('audio')
        audio.addEventListener('ended', () => {
            setTimeout(() => {
                audio.play()
            }, 500)
        })
    }, [])
    const playSound = () => {
        const audio = document.getElementById('audio')
        if (play === false) {
            audio.play()
            setPlay(true)
        }
    }
    return (
        <>
            <div className="w-full transition linear flex justify-center items-center gap-4 sm:gap-16 p-2 sm:p-4 z-50 backdrop-blur-sm fixed" id='menu'>
                <Link href='#section1' className={`text-gray-400 ${selected.section1 && "text-white underline"} hover:text-white font-semibold text-sm sm:text-base cursor-pointer drop-shadow-xl`}>Home</Link>
                <Link href='#section2' className={`text-gray-400 ${selected.section2 && "text-white underline"} hover:text-white font-semibold text-sm sm:text-bas cursor-pointer drop-shadow-xl`}>About</Link>
                <Link href='#section3' className={`text-gray-400 ${selected.section3 && "text-white underline"} hover:text-white font-semibold text-sm sm:text-bas cursor-pointer drop-shadow-xl`}>Space</Link>
                <Link href='#section4' className={`text-gray-400 ${selected.section4 && "text-white underline"} hover:text-white font-semibold text-sm sm:text-bas cursor-pointer drop-shadow-xl`}>Stars</Link>
                <span onClick={playSound} className={`${selected.section4 ? "block" : "hidden"} transition linear duration-300 text-gray-400 hover:text-white font-semibold text-base cursor-pointer drop-shadow-xl`}>
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 20 20">
                        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
                    </svg>
                </span>
                <audio
                    id='audio'
                    src="/relax.mp3">
                    Your browser does not support the
                    <code>audio</code> element.
                </audio>
            </div>
        </>
    )
}
export default Menu;