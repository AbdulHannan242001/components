import { useMotionValue, motion } from 'framer-motion'
import React, { useState } from 'react'

const SplitVignetteEffect = () => {
  const div = [
    {
      id: 1,
      background: '#264653',
      img: 'https://images.unsplash.com/photo-1725489890986-330621425633?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 2,
      background: '#e76f51',
      img: 'https://images.unsplash.com/photo-1725958171072-808f8b8bd313?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 3,
      background: '#a8dadc',
      img: 'https://images.unsplash.com/photo-1726007403882-e8f76fe5dc07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D'
    }, {
      id: 4,
      background: '#bc6c25',
      img: 'https://images.unsplash.com/photo-1726134212431-c794fd3d0c34?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  const mousePosition = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }
  const mouseMove = (e) => {
    const { clientX, clientY } = e
    const targetX = clientX - (window.innerHeight * 0.125)
    const targetY = clientY - (window.innerWidth * 0.080)
    mousePosition.x.set(targetX)
    mousePosition.y.set(targetY)

  }
  return (

    <section className='h-auto w-full flex flex-col items-center justify-center overflow-hidden cursor-none'>
      <main onMouseMove={mouseMove}>
        {
          div.map((item, i) => {
            return <Gallery key={i} mousePosition={mousePosition} item={item} i={i} />
          })
        }
      </main>
    </section>
  )
}


const Gallery = ({ mousePosition, item, i }) => {

  const { background, img } = item

  const { x, y } = mousePosition

  return (
    <div className='h-[120vh]' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }} >
      <div style={{ background }} className='h-full w-screen relative overflow-hidden'>
      </div>
      <motion.div
        className='h-[30vh] w-[25vh] fixed top-0 left-0 rounded-xl overflow-hidden pointer-events-none'
        style={{ x, y }}
      >
        <img src={img} alt={i} className='w-full h-full object-cover' />
      </motion.div>
    </div>
  )
}

export default SplitVignetteEffect