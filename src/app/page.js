'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import moon from './asset/image/moon4.png'

import Menu from './components/menu/Menu'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/section4/Section4'


export default function Home() {

  const [isChangeText, setIsChangeText] = useState(false)
  const [isChangeMenu, setIsChangeMenu] = useState(undefined)

  const [menuSelected, setMenuSelected] = useState({
    section1: true,
    section2: false,
    section3: false,
    section4: false
  })

  useEffect(() => {
    if (isChangeText) {
      var title = document.getElementById('title')
      title.style.opacity = 0
      setTimeout(() => {
        title.innerText = 'A PEACEFUL PLACE\n FOR THE SOUL'
        title.style.opacity = 1
      }, 500)
    }
    else {
      var title = document.getElementById('title')
      title.style.opacity = 0
      setTimeout(() => {
        title.innerText = 'WELCOME TO THE PAGE!'
        title.style.opacity = 1
      }, 500)
    }
  }, [isChangeText])

  useEffect(() => {
    if (isChangeMenu) {
      var menu = document.getElementById('menu')
      menu.style.backgroundColor = 'transparent'
      setTimeout(() => {
        menu.style.backgroundColor = 'rgba(0, 0, 0, 0.3)'
      }, 500)
    }
    else if (isChangeMenu === false) {
      var menu = document.getElementById('menu')
      setTimeout(() => {
        menu.style.backgroundColor = 'transparent'
      }, 500)
    }
  }, [isChangeMenu])

  useEffect(() => {
    var moon = document.getElementById('moon')
    var title = document.getElementById('title')

    const section1 = document.getElementById('section1')
    const section2 = document.getElementById('section2')
    const section3 = document.getElementById('section3')
    const section4 = document.getElementById('section4')

    window.addEventListener('scroll', (e) => {
      if (window.scrollY >= 0 && window.scrollY < window.innerHeight) {
        moon.style.transform = `translateY(${Math.floor(window.scrollY)}px)`
        title.style.transform = `translateY(${Math.floor(window.scrollY) * 0.5}px)`
        if (window.scrollY > 200) {
          setIsChangeText(true)
        }
        else {
          setIsChangeText(false)
        }

        if (window.scrollY > 64) {
          setIsChangeMenu(true)
        }
        else {
          setIsChangeMenu(false)
        }
      }
      if (window.scrollY <= 300)
        setMenuSelected({
          section1: true,
          section2: false,
          section3: false,
          section4: false
        })

      if (Math.abs(window.scrollY - window.innerHeight) <= 200)
        setMenuSelected({
          section1: false,
          section2: true,
          section3: false,
          section4: false
        })

      if (Math.abs(window.scrollY - window.innerHeight * 2) <= 200)
        setMenuSelected({
          section1: false,
          section2: false,
          section3: true,
          section4: false
        })

      if (Math.abs(window.scrollY - window.innerHeight * 3) <= 200)
        setMenuSelected({
          section1: false,
          section2: false,
          section3: false,
          section4: true
        })
    })

    return () => {
      window.removeEventListener('scroll', (e) => {
        if (window.scrollY >= 0 && window.scrollY < window.innerHeight * 0.7) {
          moon.style.transform = `translateY(${Math.floor(window.scrollY)}px)`
          title.style.transform = `translateY(${Math.floor(window.scrollY) * 0.5}px)`
          if (window.scrollY > 200) {
            setIsChangeText(true)
          }
          else {
            setIsChangeText(false)
          }

          if (window.scrollY > 64) {
            setIsChangeMenu(true)
          }
          else {
            setIsChangeMenu(false)
          }
        }
        if (window.scrollY <= 300)
          setMenuSelected({
            section1: true,
            section2: false,
            section3: false,
            section4: false
          })

        if (Math.abs(window.scrollY - window.innerHeight) <= 200)
          setMenuSelected({
            section1: false,
            section2: true,
            section3: false,
            section4: false
          })

        if (Math.abs(window.scrollY - window.innerHeight * 2) <= 200)
          setMenuSelected({
            section1: false,
            section2: false,
            section3: true,
            section4: false
          })

        if (Math.abs(window.scrollY - window.innerHeight * 3) <= 200)
          setMenuSelected({
            section1: false,
            section2: false,
            section3: false,
            section4: true
          })
      })
    }
  }, [])
  return (
    <>
      <Menu selected={menuSelected} />
      <div id='section1' className='w-full h-[100vh] bg-fixed background'>
        <div className='absolute w-full h-full flex justify-center items-center overflow-hidden'>
          <Image alt='moon' src={moon} className="w-52 h-52 transition linear" id='moon' />

          <div className='text-white font-bold md:text-xl lg:text-2xl xl:text-4xl 2xl:text-6xl absolute top-0 left-0 w-full h-full flex justify-center items-center pb-32'>
            <span className='transition ease-in-out duration-200 text-center p-2 text-2xl sm:text-4xl' id='title'></span>
          </div>
        </div>
        <div className='absolute w-full h-full bottom-0 left-0 other'>
        </div>
      </div>
      <Section2 selected={menuSelected} />
      <Section3 />
      <Section4 selected={menuSelected} />
    </>
  )
}
