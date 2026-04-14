'use client'
import { useState } from 'react'
import Scene from './Scene'
import QuestLog from './QuestLog'
import Skills from './Skills'

type Mode = 'dev' | 'professor'

export default function Hero() {
  const [mode, setMode] = useState<Mode>('dev')
  const isDev = mode === 'dev'

  return (
    <div className="flex flex-col gap-6 h-screen items-center">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        Marcos Vinícius
      </h1>
       <div className="flex flex-row items-center justify-center gap-2 w-full">
        <span className={isDev ? 'opacity-100' : 'opacity-40'}>dev</span>

        <button
          role="switch"
          aria-checked={!isDev}
          onClick={() => setMode(isDev ? 'professor' : 'dev')}
          className="w-10 h-5 bg-gray-300 rounded-full relative focus:outline-none"
        >
          <div
            className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform duration-300 ${
              isDev ? 'left-0.5' : 'translate-x-5'
            }`}
          />
        </button>

        <span className={!isDev ? 'opacity-100' : 'opacity-40'}>professor</span>
      </div>
<div className='flex flex-row gap-2 items-start justify-center w-full'>
     <QuestLog />
      {isDev ? (
        <Scene modelPath='/sci-fi_computer.glb' className='w-full h-128' />
      ) : (
                <Scene modelPath='/basic_classroom.glb' className='max-w-128 max-h-128' />

      )}
      <Skills/>
    </div>
    </div>
  )
}
