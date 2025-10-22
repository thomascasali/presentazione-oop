const { useState, useEffect } = React;

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

// ==================== COMPONENTE PRINCIPALE ====================
const OOPPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  // ==================== CARICAMENTO MODULI ====================
  // I moduli sono caricati tramite <script> in index.html
  // Verifico che esistano le variabili globali

  const dashboardSlide = window.dashboardSlide || {
    type: 'dashboard',
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
  const ereditarietaQuizSlide = window.ereditarietaQuizSlide || null;

  const associazioniRiepilogoSlides = window.associazioniRiepilogoSlides || [];
  const associazioniQuizSlide = window.associazioniQuizSlide || null;

  // ==================== COSTRUZIONE ARRAY SLIDES ====================
  const allSlides = [
    dashboardSlide, // Slide 0
    ...fondamentiSlides, // Slides 1-8
    ...(fondamentiQuizSlide ? [fondamentiQuizSlide] : []), // Slide 9
    ...costruttoriPropertiesSlides, // Slides 10-17
    ...(costruttoriQuizSlide ? [costruttoriQuizSlide] : []), // Slide 18
    ...metodiIncapsulamentoSlides, // Slides 19-26
    ...(metodiQuizSlide ? [metodiQuizSlide] : []), // Slide 27
    ...ereditarietaPolimorfismoSlides, // Slides 28-35
    ...(ereditarietaQuizSlide ? [ereditarietaQuizSlide] : []), // Slide 36
    ...associazioniRiepilogoSlides, // Slides 37-44
    ...(associazioniQuizSlide ? [associazioniQuizSlide] : []), // Slide 45
  ];

  // ==================== CALCOLO INDICE SEZIONI ====================
  const sections = [];
  let slideIndex = 0;

  // Dashboard
  sections.push({
    title: 'Dashboard',
    startSlide: slideIndex,
    slideCount: 1,
    type: 'dashboard'
  });
  slideIndex += 1;

  // Fondamenti
  if (fondamentiSlides.length > 0) {
    sections.push({
      title: 'Fondamenti OOP',
      startSlide: slideIndex,
      slideCount: fondamentiSlides.length,
      type: 'module'
    });
    slideIndex += fondamentiSlides.length;
  }

  if (fondamentiQuizSlide) {
    sections.push({
      title: 'Quiz - Fondamenti',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz'
    });
    slideIndex += 1;
  }

  // Costruttori e Properties
  if (costruttoriPropertiesSlides.length > 0) {
    sections.push({
      title: 'Costruttori e Properties',
      startSlide: slideIndex,
      slideCount: costruttoriPropertiesSlides.length,
      type: 'module'
    });
    slideIndex += costruttoriPropertiesSlides.length;
  }

  if (costruttoriQuizSlide) {
    sections.push({
      title: 'Quiz - Costruttori',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz'
    });
    slideIndex += 1;
  }

  // Metodi e Incapsulamento
  if (metodiIncapsulamentoSlides.length > 0) {
    sections.push({
      title: 'Metodi e Incapsulamento',
      startSlide: slideIndex,
      slideCount: metodiIncapsulamentoSlides.length,
      type: 'module'
    });
    slideIndex += metodiIncapsulamentoSlides.length;
  }

  if (metodiQuizSlide) {
    sections.push({
      title: 'Quiz - Metodi',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz'
    });
    slideIndex += 1;
  }

  // Ereditarietà e Polimorfismo
  if (ereditarietaPolimorfismoSlides.length > 0) {
    sections.push({
      title: 'Ereditarietà e Polimorfismo',
      startSlide: slideIndex,
      slideCount: ereditarietaPolimorfismoSlides.length,
      type: 'module'
    });
    slideIndex += ereditarietaPolimorfismoSlides.length;
  }

  if (ereditarietaQuizSlide) {
    sections.push({
      title: 'Quiz - Ereditarietà',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz'
    });
    slideIndex += 1;
  }

  // Associazioni e Riepilogo
  if (associazioniRiepilogoSlides.length > 0) {
    sections.push({
      title: 'Associazioni e Riepilogo',
      startSlide: slideIndex,
      slideCount: associazioniRiepilogoSlides.length,
      type: 'module'
    });
    slideIndex += associazioniRiepilogoSlides.length;
  }

  if (associazioniQuizSlide) {
    sections.push({
      title: 'Quiz - Associazioni',
      startSlide: slideIndex,
      slideCount: 1,
      type: 'quiz'
    });
    slideIndex += 1;
  }

  // ==================== GESTIONE NAVIGAZIONE ====================
  const goToSlide = (index) => {
    if (index >= 0 && index < allSlides.length) {
      setCurrentSlide(index);
      setShowMenu(false);
    }
  };

  const nextSlide = () => {
    if (currentSlide < allSlides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToDashboard = () => {
    setCurrentSlide(0);
    setShowMenu(false);
  };

  // Gestione tasti freccia
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'Home') {
        goToDashboard();
      } else if (e.key === 'Escape') {
        setShowMenu(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  // ==================== RENDERING ====================
  const currentSlideData = allSlides[currentSlide];
  const progress = ((currentSlide + 1) / allSlides.length) * 100;

  // Trova la sezione corrente per il menu
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
              'aria-label': 'Toggle menu'
            },
            showMenu ? React.createElement(XIcon) : React.createElement(MenuIcon)
          ),

          // Progress Bar
          React.createElement(
            'div',
            { key: 'progress-container', className: 'progress-container' },
            React.createElement('div', {
              className: 'progress-bar',
              style: { width: `${progress}%` }
            })
          ),

          // Home Button
          React.createElement(
            'button',
            {
              key: 'home-btn',
              className: 'icon-button',
              onClick: goToDashboard,
              'aria-label': 'Go to dashboard',
              disabled: currentSlide === 0
            },
            React.createElement(HomeIcon)
          ),

          // Slide Counter
          React.createElement(
            'div',
            { key: 'counter', className: 'slide-counter' },
            `${currentSlide + 1} / ${allSlides.length}`
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
                          section.title
                        ),
                        React.createElement(
                          'span',
                          { key: 'count', className: 'menu-item-count' },
                          section.slideCount > 1
                            ? `${section.slideCount} slides`
                            : '1 slide'
                        )
                      ]
                    ),

                    // Sub-slides per moduli
                    section.type === 'module' &&
                      section.slideCount > 1 &&
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
                            `Slide ${i + 1}`
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
          ? currentSlideData.type === 'dashboard'
            ? // Dashboard: passa callback per navigazione
              React.createElement(currentSlideData.content, {
                onNavigateToModule: (moduleIndex) => {
                  // Trova la sezione del modulo
                  const moduleSection = sections.find(
                    (s) => s.type === 'module' && sections.indexOf(s) === moduleIndex
                  );
                  if (moduleSection) {
                    goToSlide(moduleSection.startSlide);
                  }
                }
              })
            : currentSlideData.type === 'quiz'
            ? // Quiz: renderizza direttamente
              React.createElement(currentSlideData.content)
            : // Slide normale: renderizza content
              currentSlideData.content
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
// Questo componente è pronto per essere renderizzato con:
// ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(OOPPresentation));
