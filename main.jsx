const { useState, useEffect, useCallback } = React;

// ==================== ICONE INLINE ====================
const ChevronLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);

const ChevronRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

const MenuIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

const HomeIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const HelpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const TrophyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
    <path d="M4 22h16"></path>
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
  </svg>
);

const KeyboardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
    <path d="M6 8h.001"></path>
    <path d="M10 8h.001"></path>
    <path d="M14 8h.001"></path>
    <path d="M18 8h.001"></path>
    <path d="M8 12h.001"></path>
    <path d="M12 12h.001"></path>
    <path d="M16 12h.001"></path>
    <path d="M7 16h10"></path>
  </svg>
);

// ==================== COMPONENTE PRINCIPALE ====================
const OOPPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [jumpToSlide, setJumpToSlide] = useState('');
  const [globalScore, setGlobalScore] = useState({ correct: 0, total: 0 });

  // ==================== CARICAMENTO MODULI ====================
  const dashboardSlide = window.dashboardSlide || {
    isDashboard: true,
    title: 'Dashboard non disponibile',
    content: React.createElement('div', null, 'Dashboard mancante')
  };

  const fondamentiSlides = window.fondamentiSlides || [];
  const fondamentiQuizSlide = window.fondamentiQuizSlide || null;

  const costruttoriPropertiesSlides = window.costruttoriPropertiesSlides || [];
  const costruttoriQuizSlide = window.costruttoriQuizSlide || null;

  const metodiIncapsulamentoSlides = window.metodiIncapsulamentoSlides || [];
  const metodiQuizSlide = window.metodiQuizSlide || null;

  const ereditarietaPolimorfismoSlides = window.ereditarietaPolimorfismoSlides || [];
  const ereditarietaQuizSlides = window.ereditarietaQuizSlides || [];
  const ereditarietaQuizSlide = window.ereditarietaQuizSlide || null;

  const associazioniRiepilogoSlides = window.associazioniRiepilogoSlides || [];
  const associazioniQuizSlide = window.associazioniQuizSlide || null;

  // ==================== COSTRUZIONE ARRAY SLIDES ====================
  const allSlides = [
    dashboardSlide,
    ...fondamentiSlides,
    ...(fondamentiQuizSlide ? [fondamentiQuizSlide] : []),
    ...costruttoriPropertiesSlides,
    ...(costruttoriQuizSlide ? [costruttoriQuizSlide] : []),
    ...metodiIncapsulamentoSlides,
    ...(metodiQuizSlide ? [metodiQuizSlide] : []),
    ...ereditarietaPolimorfismoSlides,
    ...(ereditarietaQuizSlides.length > 0 ? ereditarietaQuizSlides : (ereditarietaQuizSlide ? [ereditarietaQuizSlide] : [])),
    ...associazioniRiepilogoSlides,
    ...(associazioniQuizSlide ? [associazioniQuizSlide] : []),
  ];

  // ==================== CALCOLO INDICE SEZIONI ====================
  const sections = [];
  let slideIndex = 0;

  // Dashboard
  sections.push({
    title: 'Dashboard',
    startSlide: slideIndex,
    slideCount: 1,
    type: 'dashboard',
    moduleNumber: 0
  });
  slideIndex += 1;

  // Fondamenti
  if (fondamentiSlides.length > 0) {
    sections.push({
      title: 'Fondamenti OOP',
      startSlide: slideIndex,
      slideCount: fondamentiSlides.length,
      type: 'module',
      moduleNumber: 1
    });
    slideIndex += fondamentiSlides.length;
  }

  if (fondamentiQuizSlide) {
    sections.push({
      title: 'Quiz - Fondamenti',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz',
      moduleNumber: 1
    });
    slideIndex += 1;
  }

  // Costruttori e Properties
  if (costruttoriPropertiesSlides.length > 0) {
    sections.push({
      title: 'Costruttori e Properties',
      startSlide: slideIndex,
      slideCount: costruttoriPropertiesSlides.length,
      type: 'module',
      moduleNumber: 2
    });
    slideIndex += costruttoriPropertiesSlides.length;
  }

  if (costruttoriQuizSlide) {
    sections.push({
      title: 'Quiz - Costruttori',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz',
      moduleNumber: 2
    });
    slideIndex += 1;
  }

  // Metodi e Incapsulamento
  if (metodiIncapsulamentoSlides.length > 0) {
    sections.push({
      title: 'Metodi e Incapsulamento',
      startSlide: slideIndex,
      slideCount: metodiIncapsulamentoSlides.length,
      type: 'module',
      moduleNumber: 3
    });
    slideIndex += metodiIncapsulamentoSlides.length;
  }

  if (metodiQuizSlide) {
    sections.push({
      title: 'Quiz - Metodi',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz',
      moduleNumber: 3
    });
    slideIndex += 1;
  }

  // Ereditarieta e Polimorfismo
  if (ereditarietaPolimorfismoSlides.length > 0) {
    sections.push({
      title: 'Ereditarieta e Polimorfismo',
      startSlide: slideIndex,
      slideCount: ereditarietaPolimorfismoSlides.length,
      type: 'module',
      moduleNumber: 4
    });
    slideIndex += ereditarietaPolimorfismoSlides.length;
  }

  if (ereditarietaQuizSlides.length > 0) {
    sections.push({
      title: 'Quiz - Ereditarieta',
      startSlide: slideIndex,
      slideCount: ereditarietaQuizSlides.length,
      type: 'quiz',
      moduleNumber: 4
    });
    slideIndex += ereditarietaQuizSlides.length;
  } else if (ereditarietaQuizSlide) {
    sections.push({
      title: 'Quiz - Ereditarieta',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz',
      moduleNumber: 4
    });
    slideIndex += 1;
  }

  // Associazioni e Riepilogo
  if (associazioniRiepilogoSlides.length > 0) {
    sections.push({
      title: 'Associazioni e Riepilogo',
      startSlide: slideIndex,
      slideCount: associazioniRiepilogoSlides.length,
      type: 'module',
      moduleNumber: 5
    });
    slideIndex += associazioniRiepilogoSlides.length;
  }

  if (associazioniQuizSlide) {
    sections.push({
      title: 'Quiz - Associazioni',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz',
      moduleNumber: 5
    });
    slideIndex += 1;
  }

  // ==================== PROGRESS TRACKING ====================
  useEffect(() => {
    // Load saved progress
    const savedSlide = localStorage.getItem('oop-current-slide');
    const savedScore = localStorage.getItem('oop-global-score');

    if (savedSlide) {
      const slideNum = parseInt(savedSlide);
      if (!isNaN(slideNum) && slideNum < allSlides.length) {
        setCurrentSlide(slideNum);
      }
    }

    if (savedScore) {
      try {
        setGlobalScore(JSON.parse(savedScore));
      } catch (e) {
        console.error('Error loading score:', e);
      }
    }
  }, []);

  useEffect(() => {
    // Save current progress
    localStorage.setItem('oop-current-slide', currentSlide.toString());
  }, [currentSlide]);

  // ==================== CALCOLO NUMERAZIONE MODULO ====================
  const getModuleSlideInfo = useCallback(() => {
    const currentSection = sections.find(
      (section) =>
        currentSlide >= section.startSlide &&
        currentSlide < section.startSlide + section.slideCount
    );

    if (!currentSection) {
      return { moduleSlide: currentSlide + 1, moduleTotal: allSlides.length, moduleName: '' };
    }

    const slideInModule = currentSlide - currentSection.startSlide + 1;
    return {
      moduleSlide: slideInModule,
      moduleTotal: currentSection.slideCount,
      moduleName: currentSection.title,
      moduleNumber: currentSection.moduleNumber
    };
  }, [currentSlide, sections]);

  // ==================== GESTIONE NAVIGAZIONE ====================
  const goToSlide = (index) => {
    if (index >= 0 && index < allSlides.length) {
      setCurrentSlide(index);
      setShowMenu(false);
    }
  };

  const nextSlide = useCallback(() => {
    if (currentSlide < allSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  }, [currentSlide, allSlides.length]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }, [currentSlide]);

  const goToDashboard = () => {
    setCurrentSlide(0);
    setShowMenu(false);
  };

  const handleJumpToSlide = (e) => {
    e.preventDefault();
    const slideNum = parseInt(jumpToSlide);
    if (!isNaN(slideNum) && slideNum >= 1 && slideNum <= allSlides.length) {
      setCurrentSlide(slideNum - 1);
      setJumpToSlide('');
    }
  };

  const handleProgressBarClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = clickX / rect.width;
    const targetSlide = Math.floor(percentage * allSlides.length);
    goToSlide(targetSlide);
  };

  // ==================== KEYBOARD SHORTCUTS ====================
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't handle if user is typing in input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Home':
          e.preventDefault();
          goToDashboard();
          break;
        case 'Escape':
          setShowMenu(false);
          setShowHelp(false);
          break;
        case 'm':
        case 'M':
          setShowMenu(!showMenu);
          break;
        case '?':
        case 'h':
        case 'H':
          setShowHelp(!showHelp);
          break;
        case 'f':
        case 'F':
          // Toggle fullscreen
          if (document.fullscreenElement) {
            document.exitFullscreen();
          } else {
            document.documentElement.requestFullscreen();
          }
          break;
        default:
          // Number keys 1-5 for quick module navigation
          if (e.key >= '1' && e.key <= '5') {
            const moduleNum = parseInt(e.key);
            const targetSection = sections.find(s => s.moduleNumber === moduleNum && s.type === 'module');
            if (targetSection) {
              goToSlide(targetSection.startSlide);
            }
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, showMenu, showHelp, nextSlide, prevSlide]);

  // ==================== GLOBAL SCORE MANAGEMENT ====================
  const updateGlobalScore = useCallback((correct, total) => {
    setGlobalScore(prev => {
      const newScore = { correct: prev.correct + correct, total: prev.total + total };
      localStorage.setItem('oop-global-score', JSON.stringify(newScore));
      return newScore;
    });
  }, []);

  // Expose to window for quiz components
  useEffect(() => {
    window.updateGlobalScore = updateGlobalScore;
  }, [updateGlobalScore]);

  // ==================== RENDERING ====================
  const currentSlideData = allSlides[currentSlide];
  const progress = ((currentSlide + 1) / allSlides.length) * 100;
  const moduleInfo = getModuleSlideInfo();

  const currentSection = sections.find(
    (section) =>
      currentSlide >= section.startSlide &&
      currentSlide < section.startSlide + section.slideCount
  );

  return React.createElement(
    'div',
    { className: 'presentation-container' },
    [
      // ==================== HEADER ====================
      React.createElement(
        'header',
        { key: 'header', className: 'presentation-header' },
        [
          // Menu Toggle Button
          React.createElement(
            'button',
            {
              key: 'menu-btn',
              className: 'icon-button',
              onClick: () => setShowMenu(!showMenu),
              'aria-label': 'Toggle menu',
              title: 'Menu (M)'
            },
            showMenu ? React.createElement(XIcon) : React.createElement(MenuIcon)
          ),

          // Progress Bar (clickable)
          React.createElement(
            'div',
            {
              key: 'progress-container',
              className: 'progress-container',
              onClick: handleProgressBarClick,
              style: { cursor: 'pointer' },
              title: 'Clicca per saltare a una posizione'
            },
            React.createElement('div', {
              className: 'progress-bar',
              style: { width: `${progress}%` }
            })
          ),

          // Global Score Badge
          globalScore.total > 0 && React.createElement(
            'div',
            { key: 'score-badge', className: 'score-badge', title: 'Punteggio Quiz' },
            [
              React.createElement(TrophyIcon, { key: 'trophy' }),
              React.createElement('span', { key: 'score' },
                `${globalScore.correct}/${globalScore.total}`
              )
            ]
          ),

          // Jump to Slide Form
          React.createElement(
            'form',
            {
              key: 'jump-form',
              onSubmit: handleJumpToSlide,
              style: { display: 'flex', alignItems: 'center', gap: '0.5rem' }
            },
            [
              React.createElement('input', {
                key: 'jump-input',
                type: 'number',
                min: 1,
                max: allSlides.length,
                value: jumpToSlide,
                onChange: (e) => setJumpToSlide(e.target.value),
                placeholder: '#',
                style: {
                  width: '50px',
                  padding: '0.25rem 0.5rem',
                  borderRadius: '0.25rem',
                  border: '1px solid rgba(59, 130, 246, 0.5)',
                  background: 'rgba(17, 24, 39, 0.8)',
                  color: 'white',
                  fontSize: '0.875rem',
                  textAlign: 'center'
                },
                'aria-label': 'Vai alla slide'
              }),
              React.createElement(
                'button',
                {
                  key: 'jump-btn',
                  type: 'submit',
                  className: 'icon-button',
                  style: { padding: '0.25rem 0.5rem', fontSize: '0.75rem' },
                  'aria-label': 'Vai'
                },
                'Vai'
              )
            ]
          ),

          // Home Button
          React.createElement(
            'button',
            {
              key: 'home-btn',
              className: 'icon-button',
              onClick: goToDashboard,
              'aria-label': 'Go to dashboard',
              title: 'Dashboard (Home)',
              disabled: currentSlide === 0
            },
            React.createElement(HomeIcon)
          ),

          // Slide Counter - Module based
          React.createElement(
            'div',
            { key: 'counter', className: 'slide-counter', title: `Slide globale: ${currentSlide + 1}/${allSlides.length}` },
            moduleInfo.moduleNumber > 0
              ? `M${moduleInfo.moduleNumber}: ${moduleInfo.moduleSlide}/${moduleInfo.moduleTotal}`
              : `${currentSlide + 1}/${allSlides.length}`
          ),

          // Help Button (in header)
          React.createElement(
            'button',
            {
              key: 'help-btn',
              className: 'icon-button',
              onClick: () => setShowHelp(!showHelp),
              'aria-label': 'Mostra scorciatoie',
              title: 'Scorciatoie tastiera (?)',
              style: { marginLeft: '0.5rem' }
            },
            '?'
          )
        ]
      ),

      // ==================== MENU LATERALE ====================
      showMenu &&
        React.createElement(
          'aside',
          { key: 'sidebar', className: 'sidebar-menu' },
          [
            React.createElement(
              'div',
              { key: 'menu-header', className: 'menu-header' },
              [
                React.createElement('h2', { key: 'title' }, 'Indice'),
                React.createElement(
                  'button',
                  {
                    key: 'close-btn',
                    className: 'icon-button',
                    onClick: () => setShowMenu(false),
                    'aria-label': 'Close menu'
                  },
                  React.createElement(XIcon)
                )
              ]
            ),

            React.createElement(
              'nav',
              { key: 'menu-nav', className: 'menu-navigation' },
              sections.map((section, idx) =>
                React.createElement(
                  'div',
                  { key: idx, className: 'menu-section' },
                  [
                    React.createElement(
                      'button',
                      {
                        key: 'section-btn',
                        className: `menu-item ${
                          currentSlide >= section.startSlide &&
                          currentSlide < section.startSlide + section.slideCount
                            ? 'active'
                            : ''
                        } ${section.type === 'quiz' ? 'quiz-item' : ''}`,
                        onClick: () => goToSlide(section.startSlide)
                      },
                      [
                        React.createElement(
                          'span',
                          { key: 'title', className: 'menu-item-title' },
                          section.moduleNumber > 0 ? `${section.moduleNumber}. ${section.title}` : section.title
                        ),
                        React.createElement(
                          'span',
                          { key: 'count', className: 'menu-item-count' },
                          section.type === 'quiz' ? 'Quiz' :
                          section.slideCount > 1 ? `${section.slideCount} slides` : '1 slide'
                        )
                      ]
                    ),

                    // Sub-slides per moduli (collapsed by default, expanded when active)
                    section.type === 'module' &&
                      section.slideCount > 1 &&
                      currentSlide >= section.startSlide &&
                      currentSlide < section.startSlide + section.slideCount &&
                      React.createElement(
                        'div',
                        { key: 'sub-slides', className: 'menu-sub-items' },
                        Array.from({ length: section.slideCount }).map((_, i) => {
                          const slideIdx = section.startSlide + i;
                          return React.createElement(
                            'button',
                            {
                              key: i,
                              className: `menu-sub-item ${
                                currentSlide === slideIdx ? 'active' : ''
                              }`,
                              onClick: () => goToSlide(slideIdx)
                            },
                            `${i + 1}. ${allSlides[slideIdx]?.title || `Slide ${i + 1}`}`
                          );
                        })
                      )
                  ]
                )
              )
            )
          ]
        ),

      // ==================== CONTENUTO SLIDE ====================
      React.createElement(
        'main',
        { key: 'main', className: 'slide-content' },
        currentSlideData
          ? currentSlideData.isDashboard
            ? typeof currentSlideData.content === 'function'
                ? React.createElement(currentSlideData.content, {
                    onNavigateToModule: (moduleKey) => {
                      const moduleMap = {
                        fondamenti: fondamentiSlides.length > 0 ? 1 : null,
                        costruttori: fondamentiSlides.length > 0
                          ? 1 + fondamentiSlides.length + (fondamentiQuizSlide ? 1 : 0)
                          : null,
                        metodi: costruttoriPropertiesSlides.length > 0
                          ? 1 + fondamentiSlides.length + (fondamentiQuizSlide ? 1 : 0) +
                            costruttoriPropertiesSlides.length + (costruttoriQuizSlide ? 1 : 0)
                          : null,
                        ereditarieta: metodiIncapsulamentoSlides.length > 0
                          ? 1 + fondamentiSlides.length + (fondamentiQuizSlide ? 1 : 0) +
                            costruttoriPropertiesSlides.length + (costruttoriQuizSlide ? 1 : 0) +
                            metodiIncapsulamentoSlides.length + (metodiQuizSlide ? 1 : 0)
                          : null,
                        associazioni: ereditarietaPolimorfismoSlides.length > 0
                          ? 1 + fondamentiSlides.length + (fondamentiQuizSlide ? 1 : 0) +
                            costruttoriPropertiesSlides.length + (costruttoriQuizSlide ? 1 : 0) +
                            metodiIncapsulamentoSlides.length + (metodiQuizSlide ? 1 : 0) +
                            ereditarietaPolimorfismoSlides.length + (ereditarietaQuizSlides.length || (ereditarietaQuizSlide ? 1 : 0))
                          : null
                      };
                      const slideIndex = moduleMap[moduleKey];
                      if (slideIndex !== null && slideIndex !== undefined) {
                        goToSlide(slideIndex);
                      }
                    }
                  })
                : currentSlideData.content
            : currentSlideData.isQuiz || currentSlideData.type === 'quiz'
            ? typeof currentSlideData.content === 'function'
                ? (() => {
                    const result = currentSlideData.content();
                    return typeof result === 'function'
                      ? React.createElement(result)
                      : result;
                  })()
                : currentSlideData.content
            : React.createElement(
                'div',
                { className: 'slide-inner' },
                [
                  currentSlideData.title &&
                    React.createElement(
                      'div',
                      { key: 'slide-header', className: 'mb-6 pb-4 border-b-2 border-blue-500/30' },
                      [
                        React.createElement(
                          'h2',
                          { key: 'title', className: 'text-4xl font-bold text-white mb-2' },
                          currentSlideData.title
                        ),
                        currentSlideData.subtitle &&
                          React.createElement(
                            'p',
                            { key: 'subtitle', className: 'text-xl text-gray-400' },
                            currentSlideData.subtitle
                          )
                      ]
                    ),
                  React.createElement(
                    'div',
                    { key: 'slide-body' },
                    currentSlideData.content
                  )
                ]
              )
          : React.createElement(
              'div',
              { className: 'error-slide' },
              React.createElement('h1', null, 'Slide non disponibile'),
              React.createElement('p', null, 'Verifica che tutti i moduli siano caricati.')
            )
      ),

      // ==================== FOOTER NAVIGATION ====================
      React.createElement(
        'footer',
        { key: 'footer', className: 'presentation-footer' },
        [
          // Previous Button
          React.createElement(
            'button',
            {
              key: 'prev',
              className: 'nav-button',
              onClick: prevSlide,
              disabled: currentSlide === 0
            },
            [
              React.createElement(ChevronLeft, { key: 'icon' }),
              React.createElement('span', { key: 'text' }, 'Precedente')
            ]
          ),

          // Current Section Info
          React.createElement(
            'div',
            { key: 'section-info', className: 'section-info' },
            currentSection
              ? React.createElement('span', null, currentSection.title)
              : null
          ),

          // Next Button
          React.createElement(
            'button',
            {
              key: 'next',
              className: 'nav-button',
              onClick: nextSlide,
              disabled: currentSlide === allSlides.length - 1
            },
            [
              React.createElement('span', { key: 'text' }, 'Successiva'),
              React.createElement(ChevronRight, { key: 'icon' })
            ]
          )
        ]
      ),

      // ==================== KEYBOARD SHORTCUTS HELP ====================
      showHelp &&
        React.createElement(
          'div',
          { key: 'shortcuts', className: 'shortcuts-panel' },
          [
            React.createElement(
              'h3',
              { key: 'title' },
              [
                React.createElement(KeyboardIcon, { key: 'icon' }),
                'Scorciatoie Tastiera'
              ]
            ),
            React.createElement('div', { key: 'items' }, [
              React.createElement('div', { key: 's1', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, '←'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Slide precedente')
              ]),
              React.createElement('div', { key: 's2', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, '→'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Slide successiva')
              ]),
              React.createElement('div', { key: 's3', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, 'Home'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Vai alla dashboard')
              ]),
              React.createElement('div', { key: 's4', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, 'M'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Apri/chiudi menu')
              ]),
              React.createElement('div', { key: 's5', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, 'F'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Schermo intero')
              ]),
              React.createElement('div', { key: 's6', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, '1-5'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Vai al modulo')
              ]),
              React.createElement('div', { key: 's7', className: 'shortcut-item' }, [
                React.createElement('span', { key: 'k', className: 'shortcut-key' }, 'Esc'),
                React.createElement('span', { key: 'd', className: 'shortcut-desc' }, 'Chiudi pannelli')
              ])
            ])
          ]
        ),

      // ==================== OVERLAY MENU ====================
      showMenu &&
        React.createElement('div', {
          key: 'overlay',
          className: 'menu-overlay',
          onClick: () => setShowMenu(false)
        })
    ]
  );
};

// ==================== RENDERING ROOT ====================
