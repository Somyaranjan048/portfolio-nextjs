import { FiGithub, FiLinkedin, FiTwitter, FiInstagram } from 'react-icons/fi'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/Somyaranjan048', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800/60 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-4">
              Soumya
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Full Stack Developer & UI/UX Designer from India. Building
              exceptional digital experiences with modern technologies.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-4">
              Connect
            </h4>
            <div className="flex gap-3 mb-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    href.startsWith('http') ? 'noopener noreferrer' : undefined
                  }
                  className="w-9 h-9 rounded-lg bg-gray-900 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
            <a
              href="mailto:soumyaranjan048@gmail.com"
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              soumyaranjan048@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800/60 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Soumya Ranjan Behera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
