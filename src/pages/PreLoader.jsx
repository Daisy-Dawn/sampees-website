import React, { useEffect } from 'react'
import anime from 'animejs'
import { logo } from '../assets'

const PreLoader = () => {
  useEffect(() => {
    anime
      .timeline({ loop: true })
      .add({
        targets: '.ml5 .line',
        opacity: [0.5, 1],
        scaleX: [0, 1],
        easing: 'easeInOutExpo',
        duration: 700
      })
      .add({
        targets: '.ml5 .line',
        duration: 600,
        easing: 'easeOutExpo',
        translateY: (el, i) => -0.625 + 0.625 * 2 * i + 'em'
      })
      .add({
        targets: '.ml5 .ampersand',
        opacity: [0, 1],
        scaleY: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=600'
      })
      .add({
        targets: '.ml5 .letters-left',
        opacity: [0, 1],
        translateX: ['0.5em', 0],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=300'
      })
      .add({
        targets: '.ml5 .letters-right',
        opacity: [0, 1],
        translateX: ['-0.5em', 0],
        easing: 'easeOutExpo',
        duration: 600,
        offset: '-=600'
      })
      .add({
        targets: '.ml5',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      })
  }, [])

  return (
    <div className='w-screen flex justify-center items-center circle-spinner h-screen'>
        <div class="sk-circle">
  <div class="sk-circle1 sk-child"></div>
  <div class="sk-circle2 sk-child"></div>
  <div class="sk-circle3 sk-child"></div>
  <div class="sk-circle4 sk-child"></div>
  <div class="sk-circle5 sk-child"></div>
  <div class="sk-circle6 sk-child"></div>
  <div class="sk-circle7 sk-child"></div>
  <div class="sk-circle8 sk-child"></div>
  <div class="sk-circle9 sk-child"></div>
  <div class="sk-circle10 sk-child"></div>
  <div class="sk-circle11 sk-child"></div>
  <div class="sk-circle12 sk-child"></div>
</div>
    </div>
    
  )
}

export default PreLoader
