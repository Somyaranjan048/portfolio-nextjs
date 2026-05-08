'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const phrases = [
  'Full Stack Developer',
  'UI/UX Designer',
  'Backend Engineer',
  'App Developer',
]

function TypingText() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        100
      )
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000)
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length - 1)),
        55
      )
    } else {
      setIsDeleting(false)
      setPhraseIndex((prev) => (prev + 1) % phrases.length)
    }

    return () => clearTimeout(timeout)
  }, [displayed, isDeleting, phraseIndex])

  return (
    <span>
      <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
        {displayed}
      </span>
      <span className="animate-pulse text-blue-500">|</span>
    </span>
  )
}

const floatingBoxes = [
  { size: 40, left: '8%',  top: '20%', duration: '3s',   delay: '0s' },
  { size: 55, left: '18%', top: '60%', duration: '3.7s', delay: '0.4s' },
  { size: 30, left: '80%', top: '15%', duration: '2.9s', delay: '0.8s' },
  { size: 65, left: '75%', top: '65%', duration: '4.2s', delay: '0.2s' },
  { size: 45, left: '50%', top: '80%', duration: '3.4s', delay: '1s' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-white dark:bg-[#050505] transition-colors duration-300"
    >
      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: '1.5s' }}
        />
      </div>

      {/* Floating boxes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingBoxes.map((box, i) => (
          <div
            key={i}
            className="absolute border border-blue-400/20 dark:border-blue-500/20 rounded-lg"
            style={{
              width: box.size,
              height: box.size,
              left: box.left,
              top: box.top,
              animation: `float ${box.duration} ease-in-out infinite`,
              animationDelay: box.delay,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 flex flex-col md:flex-row items-center gap-12 w-full">
        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-blue-500 dark:text-blue-400 font-medium mb-3 tracking-widest text-xs uppercase">
            Welcome to my portfolio
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Soumya
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 min-h-[2rem]">
            <TypingText />
          </p>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mb-8 leading-relaxed text-sm md:text-base">
            Passionate developer from India crafting exceptional digital
            experiences with modern web technologies and scalable backend
            systems.
          </p>
          <div className="flex gap-4 justify-center md:justify-start flex-wrap">
            <a
              href="/my-cv.pdf"
              download
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-blue-500 rounded-full font-semibold text-blue-500 dark:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-0.5 text-sm"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0 relative">
          <div
            className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl scale-110"
            style={{ animation: 'glow-pulse 4s ease-in-out infinite' }}
          />
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <Image
              src="/image/fun-3d-cartoon-teenage-boy-removebg-preview.png"
              alt="Soumya Ranjan Behera"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-gray-400 dark:text-gray-600 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>
    </section>
  )
}
