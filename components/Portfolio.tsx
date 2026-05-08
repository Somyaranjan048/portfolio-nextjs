'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Software Company Website',
    description:
      'A corporate website for a digital software company with modern UI and animations.',
    image: '/image/pinakee_digital.png',
    link: '#',
    tags: ['React', 'CSS', 'UI/UX'],
  },
  {
    title: 'Pharma Company Website',
    description:
      'Professional pharmaceutical company site with product catalog and clean design.',
    image: '/image/Pharma_Company.png',
    link: '#',
    tags: ['HTML', 'CSS', 'JS'],
  },
  {
    title: 'Real Estate Website',
    description:
      'Property listing platform with search, filters, and detailed property views.',
    image: '/image/Realestate.png',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'E-commerce Food Website',
    description:
      'Online food ordering platform with cart, payment flow, and restaurant dashboard.',
    image: '/image/foodwebsite.png',
    link: '#',
    tags: ['Next.js', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'Laundry Management Dashboard',
    description:
      'Admin dashboard for managing laundry orders, customers, and staff operations.',
    image: '/image/LaunderyManagement_dash.png',
    link: '#',
    tags: ['React', 'Spring Boot', 'SQL'],
  },
  {
    title: 'Social Media App',
    description:
      'Full-stack social platform connecting talented people with real-time features.',
    image: '/image/Potfolio.png',
    link: '#',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold">
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h2>
          <p className="text-gray-400 mt-4 text-sm">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex gap-1.5 mb-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-white font-bold text-sm mb-1">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed mb-3">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-1.5 text-blue-400 text-xs font-medium hover:text-blue-300 transition-colors duration-200"
                >
                  <FiExternalLink size={12} />
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
