// ============================================================================
// DASHBOARD PRINCIPALE - PRESENTAZIONE OOP
// ============================================================================
// Dashboard animata e moderna per navigare tra i 5 moduli del corso
// ============================================================================

const { useState, useEffect } = React;

// ============================================================================
// ICON COMPONENTS (inline SVG)
// ============================================================================

const IconWrapper = ({ children, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const Box = (props) => <IconWrapper {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></IconWrapper>;
const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></IconWrapper>;
const Lock = (props) => <IconWrapper {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></IconWrapper>;
const Layers = (props) => <IconWrapper {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></IconWrapper>;
const Link2 = (props) => <IconWrapper {...props}><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></IconWrapper>;
const BookOpen = (props) => <IconWrapper {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></IconWrapper>;
const Award = (props) => <IconWrapper {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></IconWrapper>;
const Clock = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></IconWrapper>;
const Target = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></IconWrapper>;
const TrendingUp = (props) => <IconWrapper {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></IconWrapper>;
const Sparkles = (props) => <IconWrapper {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></IconWrapper>;

// ============================================================================
// ANIMATION COMPONENTS
// ============================================================================

const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className}`}
    >
      {children}
    </div>
  );
};

const ScaleIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} ${className}`}
    >
      {children}
    </div>
  );
};

// ============================================================================
// MODULE CARD COMPONENT
// ============================================================================

const ModuleCard = ({ module, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  const gradients = {
    blue: "from-blue-600 to-cyan-600",
    purple: "from-purple-600 to-pink-600",
    green: "from-green-600 to-emerald-600",
    orange: "from-orange-600 to-red-600",
    indigo: "from-indigo-600 to-blue-600"
  };

  const IconComponent = module.icon;

  return (
    <ScaleIn delay={300 + index * 100}>
      <div
        className={`relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border-2 cursor-pointer transition-all duration-300 ${
          isHovered
            ? 'border-cyan-400 shadow-2xl shadow-cyan-500/30 -translate-y-2 scale-105'
            : 'border-gray-700 hover:border-cyan-500/50'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
      >
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradients[module.color]} opacity-0 ${isHovered ? 'opacity-5' : ''} rounded-2xl transition-opacity duration-300`}></div>

        {/* Module number badge */}
        <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
          {module.number}
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className={`w-20 h-20 bg-gradient-to-br ${gradients[module.color]} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 ${isHovered ? 'rotate-6 scale-110' : ''}`}>
            <IconComponent className="w-10 h-10 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-3">{module.title}</h3>

          {/* Subtitle */}
          <p className="text-cyan-300 text-sm mb-6 h-12">{module.subtitle}</p>

          {/* Stats */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <BookOpen className="w-4 h-4" />
              <span>{module.slides} slide</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Target className="w-4 h-4" />
              <span>Quiz</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 h-1 bg-gray-700 rounded-full overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${gradients[module.color]} transition-all duration-1000 ${isHovered ? 'w-full' : 'w-0'}`}
            ></div>
          </div>
        </div>

        {/* Hover arrow */}
        <div className={`absolute bottom-6 right-6 text-cyan-400 transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </div>
    </ScaleIn>
  );
};

// ============================================================================
// STAT CARD COMPONENT
// ============================================================================

const StatCard = ({ icon: Icon, value, label, delay, gradient }) => {
  return (
    <FadeIn delay={delay}>
      <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
        <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-lg flex items-center justify-center mb-4`}>
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div className="text-3xl font-bold text-white mb-1">{value}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </FadeIn>
  );
};

// ============================================================================
// MAIN DASHBOARD COMPONENT
// ============================================================================

const Dashboard = ({ onNavigateToModule }) => {
  const modules = [
    {
      number: 1,
      title: "Fondamenti",
      subtitle: "Classi, Oggetti e Attributi",
      slides: 8,
      icon: Box,
      color: "blue",
      moduleKey: "fondamenti"
    },
    {
      number: 2,
      title: "Costruttori e Properties",
      subtitle: "Inizializzazione e Proprieta",
      slides: 8,
      icon: Zap,
      color: "purple",
      moduleKey: "costruttori"
    },
    {
      number: 3,
      title: "Metodi e Incapsulamento",
      subtitle: "Comportamenti e Visibilita",
      slides: 10,
      icon: Lock,
      color: "green",
      moduleKey: "metodi"
    },
    {
      number: 4,
      title: "Ereditarieta e Polimorfismo",
      subtitle: "Riuso del codice e Flessibilita",
      slides: 9,
      icon: Layers,
      color: "orange",
      moduleKey: "ereditarieta"
    },
    {
      number: 5,
      title: "Associazioni",
      subtitle: "Relazioni tra oggetti + Riepilogo",
      slides: 5,
      icon: Link2,
      color: "indigo",
      moduleKey: "associazioni"
    }
  ];

  const totalSlides = modules.reduce((sum, m) => sum + m.slides, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 p-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Animated sparkles */}
          <FadeIn delay={0}>
            <div className="flex justify-center mb-6">
              <Sparkles className="w-12 h-12 text-cyan-400 animate-pulse" />
            </div>
          </FadeIn>

          {/* Main title */}
          <FadeIn delay={100}>
            <h1 className="text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Programmazione
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent">
                ad Oggetti
              </span>
            </h1>
          </FadeIn>

          {/* Subtitle */}
          <FadeIn delay={200}>
            <div className="text-xl text-gray-300 mb-4">
              Corso completo con C# e UML
            </div>
            <div className="text-cyan-400 text-lg font-semibold">
              5 Moduli Interattivi + Quiz di Verifica
            </div>
          </FadeIn>

          {/* Decorative line */}
          <FadeIn delay={300}>
            <div className="flex items-center justify-center gap-4 mt-8">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse"></div>
              <div className="h-1 w-24 bg-gradient-to-l from-transparent to-cyan-500 rounded-full"></div>
            </div>
          </FadeIn>
        </div>

        {/* Modules Grid */}
        <div className="mb-16">
          <FadeIn delay={250}>
            <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
              Percorso di Apprendimento
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <ModuleCard
                key={module.number}
                module={module}
                index={index}
                onClick={() => onNavigateToModule && onNavigateToModule(module.moduleKey)}
              />
            ))}
          </div>
        </div>

        {/* Statistics Section */}
        <div>
          <FadeIn delay={800}>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Award className="w-7 h-7 text-cyan-400" />
              Statistiche del Corso
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              icon={BookOpen}
              value={totalSlides}
              label="Slide Totali"
              delay={850}
              gradient="from-blue-600 to-cyan-600"
            />
            <StatCard
              icon={Target}
              value="5"
              label="Quiz Interattivi"
              delay={900}
              gradient="from-purple-600 to-pink-600"
            />
            <StatCard
              icon={Clock}
              value="~90min"
              label="Tempo Stimato"
              delay={950}
              gradient="from-green-600 to-emerald-600"
            />
          </div>
        </div>

        {/* Footer hint */}
        <FadeIn delay={1000}>
          <div className="text-center mt-16 text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4" />
              Clicca su un modulo per iniziare il tuo percorso
              <Sparkles className="w-4 h-4" />
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

// ============================================================================
// EXPORT
// ============================================================================

const dashboardSlide = {
  isDashboard: true,
  content: (props) => <Dashboard {...props} />
};

// Esporta per main.jsx
if (typeof window !== 'undefined') {
  window.dashboardSlide = dashboardSlide;
}
