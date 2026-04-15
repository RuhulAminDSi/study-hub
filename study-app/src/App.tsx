import { useState, useEffect } from 'react'
import './index.css'
import { modules } from './data/modules/index'
import { translations } from './data/translations'

function renderContent(content: string) {
  const lines = content.split('\n').filter(line => line.trim())
  
  return lines.map((line, i) => {
    const trimmed = line.trim()
    
    if (trimmed.startsWith('<table>')) {
      const tableMatch = trimmed.match(/<table>.*?<\/table>/s)
      if (tableMatch) {
        return <div key={i} className="lesson-table-container" dangerouslySetInnerHTML={{ __html: tableMatch[0] }} />
      }
    }
    
    if (trimmed.match(/^[🔬⚡🌊📐🧲🌐✅⚠️✅]$/)) {
      return <div key={i} className="section-emoji">{trimmed}</div>
    }
    
    if (trimmed.match(/^🔹\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^🔹\s*(\d+\.\s*.+)/)
      return <h3 key={i} className="section-title">{match?.[1]}</h3>
    }
    
    if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s*(\d+\.\s*.+)/)
      return <h3 key={i} className="section-title">{match?.[1]}</h3>
    }
    
    if (trimmed.startsWith('•') || trimmed.startsWith('- ')) {
      const items = trimmed.split('\n').filter(l => l.trim().startsWith('•') || l.trim().startsWith('- '))
      return (
        <ul key={i} className="bullet-list">
          {items.map((item, j) => <li key={j}>{item.replace(/^[•-]\s*/, '').replace(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s*/, '')}</li>)}
        </ul>
      )
    }
    
    if (trimmed.match(/^যেখানে:$|^Where:$/i)) {
      return <h4 key={i} className="subsection-title">{trimmed}</h4>
    }
    
    if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s+.+:$/) || trimmed.match(/^মূল বৈশিষ্ট্য:$|^Key Properties:$/i)) {
      return <h4 key={i} className="subsection-title">{trimmed.replace(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s+/, '')}</h4>
    }
    
    if (trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s+[A-Zঅ-ঔ].+/) && !trimmed.includes('=')) {
      const match = trimmed.match(/^[⚡🧲🌐🔬🌊📐✅⚠️✅]\s+(.+)/)
      return <h4 key={i} className="subsection-title">{match?.[1]}</h4>
    }
    
    if (trimmed.match(/^[📐🔹⚡🌊]\s*\d+\.\s*.+/)) {
      const match = trimmed.match(/^[📐🔹⚡🌊]\s*(\d+\.\s*.+)/)
      return <h3 key={i} className="section-title">{match?.[1]}</h3>
    }
    
    if (trimmed.match(/^[A-Za-z].+=\s*.+$/) || trimmed.match(/^[a-z].+=\s*.+$/)) {
      return <div key={i} className="formula-line">{trimmed}</div>
    }
    
    if (trimmed.match(/^✅\s*সংক্ষেপে:|^✅\s*In Short:$/i)) {
      return <h4 key={i} className="summary-title">{trimmed}</h4>
    }
    
    return <p key={i} className="content-paragraph">{trimmed}</p>
  })
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
    const handleScroll = () => {
      const lessonElements = document.querySelectorAll('[id^="lesson-"]')
      const navbarHeight = 70
      
      for (let i = lessonElements.length - 1; i >= 0; i--) {
        const el = lessonElements[i] as HTMLElement
        const rect = el.getBoundingClientRect()
        if (rect.top <= navbarHeight) {
          const id = el.id.match(/lesson-(\d+)-(\d+)/)
          if (id) {
            const modIdx = parseInt(id[1])
            const lesIdx = parseInt(id[2])
            if (modIdx !== currentModule || lesIdx !== currentLesson) {
              setCurrentModule(modIdx)
              setCurrentLesson(lesIdx)
              setExpandedModule(modIdx)
            }
          }
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [currentModule, currentLesson])

  const navigate = (dir: 'prev' | 'next') => {
    if (dir === 'next') {
      if (currentModule < modules.length - 1) {
        const next = currentModule + 1
        setCurrentModule(next)
        setCurrentLesson(0)
        setExpandedModule(next)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } else {
      if (currentModule > 0) {
        const prev = currentModule - 1
        setCurrentModule(prev)
        setCurrentLesson(0)
        setExpandedModule(prev)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
  }

  const toggleModuleExpand = (idx: number) => {
    setExpandedModule(expandedModule === idx ? null : idx)
  }

  const copyCode = (code?: string) => {
    if (code) navigator.clipboard.writeText(code)
  }

  return (
    <div className={`min-h-screen ${language === 'bn' ? 'bengali' : ''} ${theme === 'light' ? 'light-theme' : ''}`}>
      <div className="app-bg" />
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-top">
          <button 
            className="mobile-menu-btn"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1 className="navbar-brand">StudyHub</h1>
          <div className="navbar-search-desktop">
            <input
              type="text"
              className="search-input-desktop"
              placeholder={t.search}
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); }}
            />
            {searchQuery.length >= 2 && (
              <div className="search-results-desktop">
                {searchResults.length > 0 ? searchResults.map((result, i) => (
                  <div
                    key={i}
                    className="search-result-item"
                    onClick={() => { setCurrentModule(result.moduleIndex); setCurrentLesson(result.lessonIndex); setExpandedModule(result.moduleIndex); setSearchQuery(''); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  >
                    <div className="search-result-title">{language === 'bn' && result.titleBn ? result.titleBn : result.title}</div>
                    <div className="search-result-module">{result.moduleTitle}</div>
                  </div>
                )) : (
                  <div className="search-result-item">
                    <div className="search-result-title">{t.noResults}</div>
                  </div>
                )}
              </div>
            )}
          </div>
          <div className="navbar-actions">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="theme-toggle" title={theme === 'dark' ? t.lightMode : t.darkMode}>
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.75 9.75 0 0012 21.75 9.75 9.75 0 0020.354 15.354z" />
                </svg>
              )}
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="language-toggle"
            >
              {language === 'en' ? 'বাংলা' : 'English'}
            </button>
            <button 
              className="search-toggle-btn"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <div className="navbar-progress">
              <svg className="progress-ring" viewBox="0 0 36 36">
                <path
                  stroke="var(--text-dim)"
                  strokeWidth="3"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="progress-ring-circle"
                  stroke="var(--accent)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${progress}, 100`}
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="20.5" textAnchor="middle" fill="var(--text-main)" fontSize="9" fontWeight="600" dominantBaseline="middle">{progress}%</text>
              </svg>
            </div>
          </div>
          {searchOpen && (
            <div className="navbar-search-container">
              <input
                type="text"
                className="navbar-search-input"
                placeholder={t.search}
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); }}
                autoFocus
              />
              <button className="search-close-btn" onClick={() => { setSearchOpen(false); setSearchQuery(''); }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {searchQuery.length >= 2 && (
                <div className="search-results-dropdown">
                  {searchResults.length > 0 ? searchResults.map((result, i) => (
                    <div
                      key={i}
                      className="search-result-item"
                      onClick={() => { setCurrentModule(result.moduleIndex); setCurrentLesson(result.lessonIndex); setExpandedModule(result.moduleIndex); setSearchQuery(''); setSearchOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    >
                      <div className="search-result-title">{language === 'bn' && result.titleBn ? result.titleBn : result.title}</div>
                      <div className="search-result-module">{result.moduleTitle}</div>
                    </div>
                  )) : (
                    <div className="search-result-item">
                      <div className="search-result-title">{t.noResults}</div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Sidebar with Sub-menu */}
      <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="sidebar-section">
          <h2 className="sidebar-title">{t.modules}</h2>
          {modules.map((m, idx) => (
            <div key={idx} className="sidebar-module">
              <div
                onClick={() => { setCurrentModule(idx); setCurrentLesson(0); setExpandedModule(idx); setSidebarOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                className={`sidebar-item ${currentModule === idx ? 'active' : ''}`}
              >
                <span className="sidebar-number">{idx + 1}</span>
                <span>{language === 'bn' && m.titleBn ? m.titleBn : m.title}</span>
                <button 
                  className="sidebar-expand-btn"
                  onClick={(e) => { e.stopPropagation(); toggleModuleExpand(idx); }}
                >
                  <svg className={`w-4 h-4 transform ${expandedModule === idx ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
              {expandedModule === idx && (
                <div className="sidebar-submenu">
                  {m.lessons.map((l, lIdx) => (
                    <div
                      key={lIdx}
                      className="sidebar-subitem"
                      onClick={() => { 
                        setCurrentModule(idx); 
                        setCurrentLesson(lIdx);
                        setExpandedModule(idx);
                        setSidebarOpen(false); 
                        const lessonEl = document.getElementById(`lesson-${idx}-${lIdx}`);
                        if (lessonEl) {
                          const navbarHeight = 64;
                          const top = lessonEl.offsetTop - navbarHeight;
                          window.scrollTo({ top: top, behavior: 'smooth' });
                        }
                      }}
                    >
                      <span className="subitem-number">{lIdx + 1}.</span>
                      <span>{language === 'bn' && l.titleBn ? l.titleBn : l.title}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Main Content - Module Page with All Lessons */}
      <main className="main-content">
        <div className="module-header animate-fade">
          <div className="module-meta">
            <span className="module-subtitle">{module.lessons.length} {module.lessons.length === 1 ? t.lesson : t.lessons}</span>
          </div>
          <h1 className="module-title">{language === 'bn' && module.titleBn ? module.titleBn : module.title}</h1>
        </div>

        {/* All Lessons in this Module */}
        <div className="module-lessons-container">
          {module.lessons.map((lesson, idx) => (
            <div key={idx} id={`lesson-${currentModule}-${idx}`} className="lesson-section animate-fade">
              <div className="lesson-header-inline">
                <span className="lesson-number">{idx + 1}</span>
                <h2 className="lesson-title-inline">{language === 'bn' && lesson.titleBn ? lesson.titleBn : lesson.title}</h2>
              </div>

              <div className="content-card">
                <div className="content-rendered">
                  {renderContent(language === 'bn' && lesson.contentBn ? lesson.contentBn : lesson.content)}
                </div>
              </div>

              <div className="takeaways-card">
                <h3 className="takeaways-title">{t.keyTakeaways}</h3>
                <div className="takeaways-grid">
                  {(language === 'bn' && lesson.takeawaysBn ? lesson.takeawaysBn : lesson.takeaways).map((takeaway, i) => (
                    <div key={i} className="takeaway-item">
                      <span className="takeaway-dot" />
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>

              {(lesson.code || lesson.codeBn) && (
                <div className="code-block">
                  <div className="code-header">
                    <span className="code-label">{t.keyFormula}</span>
                    <button onClick={() => copyCode(language === 'bn' && lesson.codeBn ? lesson.codeBn : lesson.code || '')} className="code-copy">{t.copy}</button>
                  </div>
                  <pre className="code-content">{language === 'bn' && lesson.codeBn ? lesson.codeBn : lesson.code}</pre>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="nav-buttons animate-fade">
          <button 
            onClick={() => navigate('prev')} 
            disabled={currentModule === 0}
            className="nav-btn nav-btn-secondary"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t.previousModule}
          </button>
          <span className="nav-counter">{currentModule + 1} / {modules.length}</span>
          <button onClick={() => navigate('next')} className="nav-btn nav-btn-primary">
            {t.nextModule}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Go Top / Go Bottom Buttons */}
        <div className="scroll-buttons scroll-buttons-top" style={{ position: 'fixed', top: '5rem', right: '1rem', zIndex: 30, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} 
            className="scroll-btn"
            title={t.goToBottom}
            style={{ width: 48, height: 48, borderRadius: '50%', background: '#f59e0b', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
        <div className="scroll-buttons scroll-buttons-bottom" style={{ position: 'fixed', bottom: '2rem', right: '1rem', zIndex: 30, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
            className="scroll-btn"
            title={t.goToTop}
            style={{ width: 48, height: 48, borderRadius: '50%', background: '#f59e0b', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.3)' }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
      </main>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

export default App