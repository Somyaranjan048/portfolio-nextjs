'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'UI/UX Design',
    image: '/image/UI-UX_desgine.jpg',
    description:
      'Crafting user-centered, intuitive interfaces that blend aesthetics with functionality to deliver exceptional digital experiences.',
  },
  {
    title: 'Web Development',
    image: '/image/Webdev.jpg',
    description:
      'Building fast, responsive web applications using React, Next.js, and modern frontend frameworks with clean, maintainable code.',
  },
  {
    title: 'Backend Engineering',
    image: '/image/ApplicationDesgine.jpg',
    description:
      'Designing scalable server-side systems with NestJS, Spring Boot, Microservices architecture, Kafka, and AWS cloud infrastructure.',
  },
]

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 bg-white dark:bg-[#050505] transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            My{' '}
            <span className="bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm">
            What I can build for you
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-[#111] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:border-blue-400 dark:hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/10"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-white dark:from-[#111] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-5">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-blue-500 dark:text-blue-400 text-sm font-medium hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-200 group/link"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
