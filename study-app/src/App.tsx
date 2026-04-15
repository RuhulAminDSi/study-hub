import React, { useState, useEffect } from 'react'
import './index.css'
import { modules } from './data/modules/index'
import { translations } from './data/translations'

function parseTable(lines: string[]): React.ReactNode | null {
  const rows: string[][] = []
  const borderChars = /[┌┬┐├┤└┘┴┤┬┼╋╰╮╯╭░▒▓╔╗╚╝╠╣╦╩━▀▄▌▐╫╬┄┆]/g

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (/^[─┑▒▓│┃]{3,}$/.test(trimmed)) continue

    let processed = line
      .replace(borderChars, '')
      .replace(/║/g, '│')
      .replace(/▕/g, '│')

    if (processed.includes('│') || processed.includes('┃')) {
      const cells = processed.split(/[│┃]+/)
        .map(s => s.trim())
        .filter(s => s && s.length > 0)

      if (cells.length > 0) rows.push(cells)
    }
  }

  if (rows.length < 2) return null

  return (
    <div className="table-container">
      <table className="styled-table">
        <thead>
          <tr>
            {rows[0].map((cell, idx) => (
              <th key={idx} dangerouslySetInnerHTML={{ __html: cell }} />
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.slice(1).map((row, rowIdx) => (
            <tr key={rowIdx}>
              {row.map((cell, cellIdx) => (
                <td key={cellIdx} dangerouslySetInnerHTML={{ __html: cell }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function isTableLine(line: string): boolean {
  const trimmed = line.trim()
  if (!trimmed || trimmed.length < 3) return false
  return trimmed.includes('│') || /[┌┬┐├┤└┘┄┆─]/.test(trimmed)
}

function renderContent(content: string): React.ReactNode[] {
  const allLines = content.split('\n')
  const result: React.ReactNode[] = []
  let i = 0

  while (i < allLines.length) {
    const line = allLines[i]

    if (isTableLine(line)) {
      const tableLines: string[] = [line]
      i++
      while (i < allLines.length && isTableLine(allLines[i])) {
        tableLines.push(allLines[i])
        i++
      }

      if (tableLines.length >= 2) {
        const table = parseTable(tableLines)
        if (table) result.push(table)
      }
      continue
    }

    const trimmed = line.trim()
    if (!trimmed) { i++; continue }

    if (trimmed.startsWith('<table>')) {
      const tableMatch = trimmed.match(/<table>.*?<\/table>/s)
      if (tableMatch) {
        result.push(<div key={i} className="lesson-table-container" dangerouslySetInnerHTML={{ __html: tableMatch[0] }} />)
      }
    } else if (trimmed.match(/^[🔬⚡🌊📐🧲🌐✅⚠️]$/)) {
      result.push(<div key={i} className="section-emoji">{trimmed}</div>)
    } else if (trimmed.match(/^🔹\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^🔹\s*(\d+\.\s*.+)/)
      result.push(<h3 key={i} className="section-title">{match?.[1]}</h3>)
    } else if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s*(\d+\.\s*.+)/)
      result.push(<h3 key={i} className="section-title">{match?.[1]}</h3>)
    } else if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.trim().startsWith('•') || l.trim().startsWith('- '))
      result.push(
        <ul key={i} className="bullet-list">
          {items.map((item, j) => <li key={j}>{item.replace(/^[•-]\s*/, '').replace(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s*/, '')}</li>)}
        </ul>
      )
    } else if (trimmed.match(/^যেখানে:$|^Where:$/i)) {
      result.push(<h4 key={i} className="subsection-title">{trimmed}</h4>)
    } else if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+.+:$/) || trimmed.match(/^মূল বৈশিষ্ট্য:$|^Key Properties:$/i)) {
      result.push(<h4 key={i} className="subsection-title">{trimmed.replace(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+/, '')}</h4>)
    } else if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+[A-Zঅ-ঔ].+/) && !trimmed.includes('=')) {
      const match = trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️]\s+(.+)/)
      result.push(<h4 key={i} className="subsection-title">{match?.[1]}</h4>)
    } else if (trimmed.match(/^[📐🔹⚡🌊]\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^[📐🔹⚡🌊]\s*(\d+\.\s*.+)/)
      result.push(<h3 key={i} className="section-title">{match?.[1]}</h3>)
    } else if (trimmed.match(/^[A-Za-z].+=\s*.+$/) || trimmed.match(/^[a-z].+=\s*.+$/)) {
      result.push(<div key={i} className="formula-line">{trimmed}</div>)
    } else if (trimmed.match(/^✅\s*সংক্ষেপে:|^✅\s*In Short:$/i)) {
      result.push(<h4 key={i} className="summary-title">{trimmed}</h4>)
    } else {
      result.push(<p key={i} className="content-paragraph">{trimmed}</p>)
    }

i++
  }

  return result
}

function App() {
  const [currentModule, setCurrentModule] = useState(0)
  const [currentLesson, setCurrentLesson] = useState(0)
  const [expandedModule, setExpandedModule] = useState<number | null>(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [language, setLanguage] = useState<'en' | 'bn'>('bn')
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [searchQuery, setSearchQuery] = useState('')

  const searchResults = searchQuery.length >= 2 ? modules.flatMap(m => 
    m.lessons.filter(l => 
      (language === 'bn' && l.titleBn ? l.titleBn : l.title).toLowerCase().includes(searchQuery.toLowerCase()) ||
      (language === 'bn' && l.contentBn ? l.contentBn : l.content).toLowerCase().includes(searchQuery.toLowerCase())
    ).map(l => ({
      ...l,
      moduleTitle: language === 'bn' && m.titleBn ? m.titleBn : m.title,
      moduleIndex: modules.indexOf(m),
      lessonIndex: m.lessons.indexOf(l)
    }))
  ).slice(0, 10) : []

  const t = translations[language]

  const module = modules[currentModule]
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const lessonsBefore = modules.slice(0, currentModule).reduce((acc, m) => acc + m.lessons.length, 0)
  const progress = Math.round(((lessonsBefore + currentLesson + 1) / totalLessons) * 100)

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', theme === 'light')
  }, [theme])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [currentModule, currentLesson])

  const goToModule = (moduleIndex: number, lessonIndex: number = 0) => {
    setCurrentModule(moduleIndex)
    setCurrentLesson(lessonIndex)
    setExpandedModule(moduleIndex)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
  }

  const lesson = module?.lessons[currentLesson]
  const lessonTitle = language === 'bn' && lesson?.titleBn ? lesson.titleBn : lesson?.title

  return (
    <div className={`app-bg ${theme}`}>
      <nav className="navbar">
        <div className="navbar-top">
          <button className="mobile-menu-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="navbar-brand">StudyHub</h1>
          
          <div className="navbar-search-container">
            <form onSubmit={handleSearch} className="search-box" style={{ flex: 1 }}>
              <input
                type="text"
                className="search-input"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setTimeout(() => setSearchOpen(false), 200)}
              />
              {searchOpen && searchResults.length > 0 && (
                <div className="search-results">
                  {searchResults.map((result, i) => (
                    <div key={i} className="search-result-item" onMouseDown={() => {
                      goToModule(result.moduleIndex, result.lessonIndex)
                      setSearchQuery('')
                    }}>
                      <div className="search-result-title">{language === 'bn' && result.titleBn ? result.titleBn : result.title}</div>
                      <div className="search-result-module">{result.moduleTitle}</div>
                    </div>
                  ))}
                </div>
              )}
            </form>
          </div>

          <div className="navbar-actions">
            <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            <button className="language-toggle" onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}>
              {language === 'en' ? 'বাং' : 'EN'}
            </button>
            <div className="navbar-progress">
              <div className="progress-circle-container">
                <svg className="progress-ring" viewBox="0 0 36 36">
                  <path
                    className="progress-ring-circle-bg"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                  />
                  <path
                    className="progress-ring-circle"
                    strokeDasharray={`${progress}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="var(--accent)"
                    strokeWidth="3"
                  />
                </svg>
                <span className="progress-percentage">{progress}%</span>
              </div>
            </div>
          </div>
          </div>
        </nav>

      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-section">
          <h2 className="sidebar-title">{t.modules}</h2>
          {modules.map((m, moduleIndex) => (
            <div key={moduleIndex} className="sidebar-module">
              <div 
                className={`sidebar-item ${currentModule === moduleIndex ? 'active' : ''}`}
                onClick={() => {
                  setCurrentModule(moduleIndex)
                  setCurrentLesson(0)
                  setExpandedModule(expandedModule === moduleIndex ? null : moduleIndex)
                }}
              >
                <span className="sidebar-number">{moduleIndex + 1}</span>
                <span>{language === 'bn' && m.titleBn ? m.titleBn : m.title}</span>
                {expandedModule === moduleIndex && (
                  <button className="sidebar-expand-btn">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {expandedModule === moduleIndex && (
                <div className="sidebar-submenu">
                  {m.lessons.map((l, lessonIndex) => (
                    <div 
                      key={lessonIndex}
                      className={`sidebar-subitem ${currentModule === moduleIndex && currentLesson === lessonIndex ? 'active' : ''}`}
                      onClick={() => {
                        setCurrentModule(moduleIndex)
                        setCurrentLesson(lessonIndex)
                        setSidebarOpen(false)
                      }}
                    >
                      <span className="subitem-number">{lessonIndex + 1}</span>
                      <span>{language === 'bn' && l.titleBn ? l.titleBn : l.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      <main className="main-content">
        {module && lesson && (
          <>
            <div className="lesson-header">
              <div className="lesson-meta">
                <span className={`level-tag ${lesson.level === 'Beginner' ? 'bg-green-500' : lesson.level === 'Intermediate' ? 'bg-amber-500' : 'bg-red-500'} text-black`}>
                  {lesson.level === 'Beginner' ? (language === 'bn' ? 'শুরু' : 'Beginner') : 
                   lesson.level === 'Intermediate' ? (language === 'bn' ? 'মধ্যম' : 'Intermediate') : 
                   (language === 'bn' ? 'উন্নত' : 'Advanced')}
                </span>
                <span className="lesson-subtitle">{t.lesson} {currentLesson + 1} / {module.lessons.length}</span>
              </div>
              <h1 className="lesson-title">{lessonTitle}</h1>
            </div>

            <div className="content-rendered">
              {renderContent(language === 'bn' && lesson.contentBn ? lesson.contentBn : lesson.content)}
            </div>

            <div className="takeaways-card">
              <h3 className="takeaways-title">{t.keyTakeaways}</h3>
              <ul className="bullet-list">
                {(language === 'bn' && lesson.takeawaysBn ? lesson.takeawaysBn : lesson.takeaways).map((takeaway, i) => (
                  <li key={i}>{takeaway}</li>
                ))}
              </ul>
            </div>

            {lesson.code && (
              <div className="code-block">
                <div className="code-header">
                  <span className="code-label">{t.keyFormula}</span>
                  <button className="code-copy" onClick={() => navigator.clipboard.writeText(lesson.code || '')}>{t.copy}</button>
                </div>
                <pre className="code-content">{lesson.code}</pre>
              </div>
            )}
          </>
        )}

        <div className="nav-buttons">
          <button 
            className="nav-btn nav-btn-secondary" 
            onClick={() => {
              if (currentLesson > 0) {
                setCurrentLesson(currentLesson - 1)
              } else if (currentModule > 0) {
                setCurrentModule(currentModule - 1)
                setCurrentLesson(modules[currentModule - 1].lessons.length - 1)
              }
            }}
            disabled={currentModule === 0 && currentLesson === 0}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.previous}
          </button>
          <span className="nav-counter">{currentModule + 1} / {modules.length}</span>
          <button 
            className="nav-btn nav-btn-primary" 
            onClick={() => {
              if (currentLesson < module.lessons.length - 1) {
                setCurrentLesson(currentLesson + 1)
              } else if (currentModule < modules.length - 1) {
                setCurrentModule(currentModule + 1)
                setCurrentLesson(0)
              }
            }}
            disabled={currentModule === modules.length - 1 && currentLesson === module.lessons.length - 1}
          >
            {t.next}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="scroll-buttons">
          <button className="scroll-btn scroll-btn-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} title={t.goToTop}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <button className="scroll-btn scroll-btn-bottom" onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} title={t.goToBottom}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </main>
    </div>
  )
}

export default App