import React from 'react'
import { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('olive')
  return (
    <div
      className='w-full h-screen duration-200'
      style={{ backgroundColor: color }}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 shadow-xl bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => {
              setColor('red')
            }}
            className=' outline-none  px-5 py-1 text-white   rounded-full shadow-lg cursor-pointer'
            style={{ background: 'red' }}
          >
            Red
          </button>
          <button
            onClick={() => {
              setColor('green')
            }}
            className=' outline-none  px-5 py-1 text-white   rounded-full shadow-lg cursor-pointer'
            style={{ background: 'green' }}
          >
            Green
          </button>
          <button
            onClick={() => {
              setColor('blue')
            }}
            className=' outline-none  px-5 py-1 text-white   rounded-full shadow-lg cursor-pointer'
            style={{ background: 'blue' }}
          >
            Blue
          </button>

          <button
            onClick={() => {
              setColor('purple')
            }}
            className=' outline-none  px-5 py-1 text-white   rounded-full shadow-lg cursor-pointer'
            style={{ background: 'purple' }}
          >
            Purple
          </button>

          <button
            onClick={() => {
              setColor('violet')
            }}
            className=' outline-none  px-5 py-1 text-black  rounded-full shadow-lg cursor-pointer '
            style={{ background: 'violet' }}
          >
            Violet
          </button>

          <button
            onClick={() => {
              setColor('lavender')
            }}
            className=' outline-none  px-5 py-1 text-black   rounded-full shadow-lg cursor-pointer '
            style={{ background: 'lavender' }}
          >
            Lavender
          </button>

          <button
            onClick={() => {
              setColor('yellow')
            }}
            className=' outline-none  px-5 py-1 text-white  rounded-full shadow-lg cursor-pointer '
            style={{ background: 'yellow' }}
          >
            Yellow
          </button>

          <button
            onClick={() => {
              setColor('orange')
            }}
            className=' outline-none  px-5 py-1 text-white  rounded-full shadow-lg cursor-pointer '
            style={{ background: 'orange' }}
          >
            Orange
          </button>

          <button
            onClick={() => {
              setColor('olive')
            }}
            className=' outline-none  px-5 py-1 text-white  rounded-full shadow-lg cursor-pointer '
            style={{ background: 'olive' }}
          >
            Olive
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
