'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNodedotjs,
  SiNestjs,
  SiSpringboot,
  SiPython,
  SiApachekafka,
  SiMongodb,
  SiPostgresql,
  SiFigma,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { IconType } from 'react-icons'

interface Skill {
  name: string
  icon?: IconType
  color: string
}

interface SkillCategory {
  title: string
  accent: string
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    accent: '#3b82f6',
    skills: [
      { name: 'HTML5', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: SiCss, color: '#1572B6' },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff' },
      { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D' },
    ],
  },
  {
    title: 'Backend',
    accent: '#8b5cf6',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
      { name: 'NestJS', icon: SiNestjs, color: '#E0234E' },
      { name: 'Spring Boot', icon: SiSpringboot, color: '#6DB33F' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ],
  },
  {
    title: 'Architecture & Cloud',
    accent: '#f59e0b',
    skills: [
      { name: 'Microservices', color: '#FF6B6B' },
      { name: 'Apache Kafka', icon: SiApachekafka, color: '#ffffff' },
      { name: 'AWS', icon: FaAws, color: '#FF9900' },
    ],
  },
  {
    title: 'Databases',
    accent: '#10b981',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'SQL / PostgreSQL', icon: SiPostgresql, color: '#336791' },
    ],
  },
  {
    title: 'Design',
    accent: '#ec4899',
    skills: [
      { name: 'UI/UX Design', color: '#FF6B9D' },
      { name: 'Figma', icon: SiFigma, color: '#F24E1E' },
    ],
  },
]

type TabName = 'skills' | 'experience' | 'education'

export default function About() {
  const [activeTab, setActiveTab] = useState<TabName>('skills')

  return (
    <section id="about" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row gap-16 items-start"
        >
          {/* Image */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative w-64 h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-gray-700/50">
                <Image
                  src="/image/fun-3d-cartoon-about-removebg-.png"
                  alt="About Soumya"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h2 className="text-4xl font-bold mb-6">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Me
              </span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-sm md:text-base">
              I am{' '}
              <span className="text-white font-semibold">
                Soumya Ranjan Behera
              </span>
              , a passionate Full Stack Developer and UI/UX Designer from
              India. I build scalable web applications and elegant interfaces
              using modern technologies — from React and Next.js on the frontend
              to NestJS, Spring Boot, and Microservices on the backend, with
              cloud deployments on AWS and event-driven systems using Kafka.
            </p>

            {/* Tabs */}
            <div className="flex gap-6 mb-8 border-b border-gray-800">
              {(['skills', 'experience', 'education'] as TabName[]).map(
                (tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-sm font-semibold capitalize tracking-wide transition-colors duration-200 relative ${
                      activeTab === tab
                        ? 'text-white'
                        : 'text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full" />
                    )}
                  </button>
                )
              )}
            </div>

            {/* Skills tab */}
            {activeTab === 'skills' && (
              <div className="space-y-5">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-2"
                      style={{ color: cat.accent }}
                    >
                      {cat.title}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-gray-900 border border-gray-700 text-gray-300 hover:border-blue-500/50 hover:text-white transition-all duration-200"
                        >
                          {skill.icon && (
                            <skill.icon
                              size={11}
                              style={{ color: skill.color }}
                            />
                          )}
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Experience tab */}
            {activeTab === 'experience' && (
              <div className="space-y-3">
                {[
                  {
                    year: '2016 – Present',
                    title: 'Web Development',
                    desc: 'Building full-stack web apps, REST APIs, and microservice architectures',
                  },
                  {
                    year: '2016 – Present',
                    title: 'UI/UX Design',
                    desc: 'Designing intuitive user interfaces and experiences with Figma',
                  },
                  {
                    year: '2014 – Present',
                    title: 'App Development',
                    desc: 'Developing cross-platform Android and iOS applications',
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-blue-500/30 transition-colors duration-200"
                  >
                    <span className="text-blue-400 font-semibold text-xs whitespace-nowrap mt-0.5">
                      {item.year}
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm">
                        {item.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Education tab */}
            {activeTab === 'education' && (
              <div className="space-y-3">
                {[
                  {
                    degree: "Bachelor's in Technology",
                    school: 'Biju Patnaik University of Technology',
                    years: '2016 – 2020',
                  },
                  {
                    degree: 'Web Development Training',
                    school: 'J Spider',
                    years: '2020 – 2021',
                  },
                ].map((item) => (
                  <div
                    key={item.degree}
                    className="p-4 rounded-xl bg-gray-900/50 border border-gray-800 hover:border-purple-500/30 transition-colors duration-200"
                  >
                    <p className="font-semibold text-white text-sm">
                      {item.degree}
                    </p>
                    <p className="text-blue-400 text-xs mt-1">{item.school}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.years}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
