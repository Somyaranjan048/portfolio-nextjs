'use client'

import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      style={{
        position: 'relative',
        width: '56px',
        height: '28px',
        borderRadius: '9999px',
        backgroundColor: isDark ? '#1e293b' : '#e0f2fe',
        border: `1px solid ${isDark ? '#334155' : '#7dd3fc'}`,
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'background-color 0.3s, border-color 0.3s',
        outline: 'none',
      }}
    >
      {/* Moon icon — fixed on LEFT */}
      <span
        style={{
          position: 'absolute',
          left: '7px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
          transition: 'opacity 0.2s',
          opacity: isDark ? 1 : 0.35,
          color: isDark ? '#93c5fd' : '#94a3b8',
        }}
      >
        <FiMoon size={13} />
      </span>

      {/* Sun icon — fixed on RIGHT */}
      <span
        style={{
          position: 'absolute',
          right: '7px',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          display: 'flex',
          alignItems: 'center',
          pointerEvents: 'none',
          transition: 'opacity 0.2s',
          opacity: isDark ? 0.35 : 1,
          color: isDark ? '#94a3b8' : '#f59e0b',
        }}
      >
        <FiSun size={13} />
      </span>

      {/* Sliding knob — sits on TOP of icons (z-index: 2) */}
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: 0,
          width: '22px',
          height: '22px',
          borderRadius: '9999px',
          backgroundColor: isDark ? '#0f172a' : '#ffffff',
          border: `1px solid ${isDark ? '#475569' : '#7dd3fc'}`,
          boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
          zIndex: 2,
          transform: `translateX(${isDark ? '29px' : '3px'})`,
          transition: 'transform 0.3s ease, background-color 0.3s, border-color 0.3s',
        }}
      />
    </button>
  )
}
