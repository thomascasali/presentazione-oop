// ============================================================================
// MODULO 1: FONDAMENTI DELLA PROGRAMMAZIONE AD OGGETTI
// ============================================================================
// Slide 1-8: Introduzione, Classi, Oggetti, Attributi
// ============================================================================

// Componenti necessari (copiati inline, no import)
const { useState } = React;

// Icon Components (inline SVG)
const IconWrapper = ({ children, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const Code = (props) => <IconWrapper {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></IconWrapper>;
const Box = (props) => <IconWrapper {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></IconWrapper>;
const Layers = (props) => <IconWrapper {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></IconWrapper>;
const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></IconWrapper>;
const Target = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></IconWrapper>;
const Lightbulb = (props) => <IconWrapper {...props}><line x1="9" x2="15" y1="18" y2="18"></line><line x1="10" x2="14" y1="22" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></IconWrapper>;
const Brain = (props) => <IconWrapper {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></IconWrapper>;
const Award = (props) => <IconWrapper {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></IconWrapper>;
const CheckCircle = (props) => <IconWrapper {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></IconWrapper>;
const Database = (props) => <IconWrapper {...props}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14a9 3 0 0 0 18 0V5"></path></IconWrapper>;
const Settings = (props) => <IconWrapper {...props}><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></IconWrapper>;
const Package = (props) => <IconWrapper {...props}><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></IconWrapper>;
const Users = (props) => <IconWrapper {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></IconWrapper>;
const BookOpen = (props) => <IconWrapper {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></IconWrapper>;

// Componente per animazioni di entrata
const FadeIn = ({ children, delay = 0, className = "" }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
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

// Componente per code block
const CodeBlock = ({ code, language = "csharp", className = "" }) => (
  <div className={`bg-gray-900 p-6 rounded-xl border border-blue-500/30 font-mono text-sm overflow-x-auto ${className}`}>
    <pre className="text-gray-300 whitespace-pre-wrap">{code}</pre>
  </div>
);

// Componente per highlight box
const HighlightBox = ({ children, color = "blue", icon: Icon, className = "" }) => {
  const colors = {
    blue: "bg-blue-900/20 border-blue-400 text-blue-300",
    cyan: "bg-cyan-900/20 border-cyan-400 text-cyan-300",
    green: "bg-green-900/20 border-green-400 text-green-300",
    yellow: "bg-yellow-900/20 border-yellow-400 text-yellow-300",
    red: "bg-red-900/20 border-red-400 text-red-300"
  };

  return (
    <div className={`${colors[color]} p-6 rounded-xl border-l-4 ${className}`}>
      {Icon && (
        <div className="flex items-center gap-3 mb-4">
          <Icon className="w-8 h-8" />
          <div className="flex-1">{children}</div>
        </div>
      )}
      {!Icon && children}
    </div>
  );
};

// Componente per card informativa
const InfoCard = ({ title, description, icon: Icon, color = "blue", className = "" }) => {
  const colors = {
    blue: "bg-blue-900/30 border-blue-500/30 text-blue-400",
    cyan: "bg-cyan-900/30 border-cyan-500/30 text-cyan-400",
    green: "bg-green-900/30 border-green-500/30 text-green-400"
  };

  return (
    <div className={`${colors[color]} p-6 rounded-xl border hover:scale-105 transition-transform duration-300 ${className}`}>
      {Icon && <Icon className={`w-12 h-12 mx-auto mb-4 ${color === 'blue' ? 'text-blue-400' : color === 'cyan' ? 'text-cyan-400' : 'text-green-400'}`} />}
      <p className="font-bold text-lg mb-2">{title}</p>
      <p className="text-sm text-gray-300">{description}</p>
    </div>
  );
};

// ============================================================================
// SLIDE DEL MODULO FONDAMENTI
// ============================================================================

const fondamentiSlides = [
  // Slide 1 - Titolo Introduttivo
  {
    title: "Programmazione ad Oggetti",
    subtitle: "Object-Oriented Programming con C# e UML",
    content: (
      <div className="text-center space-y-8">
        <FadeIn delay={0}>
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent animate-pulse">
            OOP
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <p className="text-2xl text-gray-300">Dai concetti base ai pattern avanzati</p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <InfoCard
              icon={Code}
              color="blue"
              title="C# 12.0"
              description="Linguaggio moderno e potente per OOP"
            />
            <InfoCard
              icon={Box}
              color="cyan"
              title="UML 2.5"
              description="Linguaggio visuale per modellare sistemi"
            />
            <InfoCard
              icon={Layers}
              color="blue"
              title=".NET 8"
              description="Framework enterprise-ready"
            />
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="mt-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
            <div className="flex items-center justify-center gap-4">
              <Brain className="w-8 h-8 text-cyan-400" />
              <p className="text-lg text-gray-300">
                Scopri come <span className="text-cyan-400 font-bold">modellare il mondo reale</span> attraverso il codice
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 2 - Classi e Oggetti - Concetti Base
  {
    title: "Classi e Oggetti",
    subtitle: "Il fondamento della OOP",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <HighlightBox color="blue" icon={BookOpen}>
            <h3 className="text-2xl font-bold mb-4">Cos'è una Classe?</h3>
            <p className="text-lg text-gray-300">
              Una classe è un <span className="text-blue-400 font-semibold">template</span> o{" "}
              <span className="text-blue-400 font-semibold">blueprint</span> che definisce le caratteristiche
              (attributi) e i comportamenti (metodi) di un tipo di oggetto.
            </p>
          </HighlightBox>
        </FadeIn>

        <FadeIn delay={200}>
          <HighlightBox color="cyan" icon={Package}>
            <h3 className="text-2xl font-bold mb-4">Cos'è un Oggetto?</h3>
            <p className="text-lg text-gray-300">
              Un oggetto è una <span className="text-cyan-400 font-semibold">istanza</span> specifica
              di una classe, con valori concreti per i suoi attributi.
            </p>
          </HighlightBox>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-xl border border-blue-500/40 hover:border-blue-400 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-8 h-8 text-blue-400" />
                <h4 className="text-xl font-bold text-blue-300">Analogia: Stampo per Biscotti</h4>
              </div>
              <p className="text-gray-300">
                La <span className="text-blue-400 font-semibold">classe</span> è lo stampo,
                gli <span className="text-cyan-400 font-semibold">oggetti</span> sono i biscotti prodotti.
              </p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-6 rounded-xl border border-cyan-500/40 hover:border-cyan-400 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <Lightbulb className="w-8 h-8 text-cyan-400" />
                <h4 className="text-xl font-bold text-cyan-300">Analogia: Progetto Architettonico</h4>
              </div>
              <p className="text-gray-300">
                La <span className="text-blue-400 font-semibold">classe</span> è il progetto,
                gli <span className="text-cyan-400 font-semibold">oggetti</span> sono le case costruite.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="bg-gradient-to-r from-green-900/20 to-cyan-900/20 p-5 rounded-xl border border-green-500/30">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-400" />
              <p className="text-gray-300">
                <span className="text-green-400 font-bold">Ricorda:</span> Una classe può generare
                infiniti oggetti, ognuno con il proprio stato indipendente!
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 3 - Rappresentazione UML
  {
    title: "Rappresentazione UML di una Classe",
    subtitle: "Unified Modeling Language",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <p className="text-lg text-gray-300 flex items-center gap-3">
            <Box className="w-6 h-6 text-blue-400" />
            In UML, una classe è rappresentata con un rettangolo diviso in <span className="text-cyan-400 font-bold">tre sezioni</span>:
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex justify-center my-8">
            <svg width="400" height="380" className="bg-gray-800/30 rounded-xl p-4" viewBox="0 0 400 350">
              <defs>
                <linearGradient id="headerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#1e40af', stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              {/* Rettangolo principale */}
              <rect x="50" y="20" width="300" height="300" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="3" rx="8"/>

              {/* Sezione Nome */}
              <rect x="50" y="20" width="300" height="80" fill="url(#headerGradient)" stroke="#60a5fa" strokeWidth="3" rx="8"/>
              <text x="200" y="65" textAnchor="middle" fill="white" fontSize="24" fontWeight="bold">NomeClasse</text>

              {/* Linea separazione */}
              <line x1="50" y1="100" x2="350" y2="100" stroke="#60a5fa" strokeWidth="3"/>

              {/* Sezione Attributi */}
              <text x="60" y="130" fill="#93c5fd" fontSize="18" fontWeight="bold">Attributi</text>
              <text x="60" y="155" fill="#d1d5db" fontSize="16">- attributo1: tipo</text>
              <text x="60" y="180" fill="#d1d5db" fontSize="16">+ attributo2: tipo</text>

              {/* Linea separazione */}
              <line x1="50" y1="200" x2="350" y2="200" stroke="#60a5fa" strokeWidth="3"/>

              {/* Sezione Metodi */}
              <text x="60" y="230" fill="#93c5fd" fontSize="18" fontWeight="bold">Metodi</text>
              <text x="60" y="255" fill="#d1d5db" fontSize="16">+ metodo1(): tipo</text>
              <text x="60" y="280" fill="#d1d5db" fontSize="16">- metodo2(): void</text>
              <text x="60" y="305" fill="#d1d5db" fontSize="16"># metodo3(): tipo</text>
            </svg>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-6 h-6 text-blue-400" />
                <p className="font-bold text-blue-300">1. Nome Classe</p>
              </div>
              <p className="text-sm text-gray-300">Identificatore unico del tipo</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <Database className="w-6 h-6 text-cyan-400" />
                <p className="font-bold text-cyan-300">2. Attributi</p>
              </div>
              <p className="text-sm text-gray-300">Dati e caratteristiche</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 hover:scale-105 transition-transform">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-6 h-6 text-blue-400" />
                <p className="font-bold text-blue-300">3. Metodi</p>
              </div>
              <p className="text-sm text-gray-300">Comportamenti e azioni</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-4 rounded-xl border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-yellow-400 font-bold mb-1">Simboli di Visibilità UML:</p>
                <p className="text-sm text-gray-300">
                  <span className="text-green-400">+</span> public |
                  <span className="text-red-400"> -</span> private |
                  <span className="text-yellow-400"> #</span> protected |
                  <span className="text-blue-400"> ~</span> package
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 4 - Esempio Pratico Classe C#
  {
    title: "Prima Classe in C#",
    subtitle: "Esempio: Videogioco - Personaggio",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <CodeBlock code={`public class Personaggio
{
    // Attributi (stato del personaggio)
    private string nome;
    private int puntiVita;
    private int livello;

    // Metodi (comportamenti del personaggio)
    public void Attacca()
    {
        Console.WriteLine(nome + " attacca!");
    }

    public void RiceviDanno(int danno)
    {
        puntiVita -= danno;
        Console.WriteLine(nome + " ha subito " + danno + " danni");
    }
}`} />
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-6">
            <HighlightBox color="blue" icon={Package}>
              <h4 className="font-bold text-xl mb-3">Creazione Oggetto</h4>
              <CodeBlock code={`Personaggio eroe = new Personaggio();
Personaggio nemico = new Personaggio();
Personaggio alleato = new Personaggio();`} />
            </HighlightBox>

            <HighlightBox color="cyan" icon={Zap}>
              <h4 className="font-bold text-xl mb-3">Utilizzo Oggetti</h4>
              <CodeBlock code={`eroe.Attacca();
nemico.RiceviDanno(25);
alleato.RiceviDanno(10);`} />
            </HighlightBox>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 p-5 rounded-xl border border-green-500/30">
            <div className="flex items-start gap-3">
              <Brain className="w-8 h-8 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-green-400 font-bold mb-2">Concetto Chiave:</p>
                <p className="text-gray-300">
                  Ogni oggetto (<code className="text-cyan-400">eroe</code>, <code className="text-cyan-400">nemico</code>, <code className="text-cyan-400">alleato</code>)
                  ha la sua <span className="text-green-400 font-semibold">copia indipendente</span> degli attributi.
                  Modificare un oggetto NON influenza gli altri!
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30 text-center">
              <Users className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-300 font-bold">3 Oggetti</p>
              <p className="text-gray-400 text-xs">3 istanze diverse</p>
            </div>
            <div className="bg-cyan-900/20 p-3 rounded-lg border border-cyan-500/30 text-center">
              <Database className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
              <p className="text-cyan-300 font-bold">Stato Separato</p>
              <p className="text-gray-400 text-xs">Dati indipendenti</p>
            </div>
            <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30 text-center">
              <Zap className="w-6 h-6 text-blue-400 mx-auto mb-2" />
              <p className="text-blue-300 font-bold">Metodi Condivisi</p>
              <p className="text-gray-400 text-xs">Stesso comportamento</p>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 5 - Attributi Introduzione
  {
    title: "Attributi (Campi)",
    subtitle: "Le caratteristiche degli oggetti",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <HighlightBox color="blue" icon={Database}>
            <h3 className="text-2xl font-bold mb-4">Cosa sono gli Attributi?</h3>
            <p className="text-lg text-gray-300">
              Gli attributi (o campi) sono <span className="text-blue-400 font-semibold">variabili</span> dichiarate
              all'interno di una classe che rappresentano lo <span className="text-blue-400 font-semibold">stato</span> di un oggetto.
            </p>
          </HighlightBox>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
                <h4 className="text-xl font-bold text-cyan-300">Caratteristiche:</h4>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Memorizzano lo <span className="text-blue-400 font-semibold">stato</span> dell'oggetto</span>
                </li>
                <li className="flex items-start bg-cyan-900/20 p-3 rounded-lg border-l-4 border-cyan-500">
                  <span className="text-cyan-400 mr-3 text-xl">•</span>
                  <span>Hanno un <span className="text-cyan-400 font-semibold">tipo di dato</span> specifico</span>
                </li>
                <li className="flex items-start bg-blue-900/20 p-3 rounded-lg border-l-4 border-blue-500">
                  <span className="text-blue-400 mr-3 text-xl">•</span>
                  <span>Possono essere tipi <span className="text-blue-400 font-semibold">primitivi o riferimenti</span></span>
                </li>
                <li className="flex items-start bg-cyan-900/20 p-3 rounded-lg border-l-4 border-cyan-500">
                  <span className="text-cyan-400 mr-3 text-xl">•</span>
                  <span>Hanno <span className="text-cyan-400 font-semibold">modificatori di visibilità</span></span>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-green-400" />
                <h4 className="text-xl font-bold text-green-300">Esempio: Classe Auto</h4>
              </div>
              <CodeBlock code={`public class Auto
{
    // Attributi (caratteristiche dell'auto)
    private string marca;
    private string modello;
    private int anno;
    private double velocitaMassima;
    private bool inMovimento;
    private string colore;
}`} />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-5 rounded-xl border border-purple-500/30">
            <div className="flex items-start gap-3">
              <Target className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <div>
                <p className="text-purple-400 font-bold mb-2">Esempio Reale:</p>
                <p className="text-gray-300">
                  Se hai 2 oggetti <code className="text-cyan-400">Auto</code>:
                  <code className="text-green-400"> ferrari</code> e <code className="text-green-400"> fiat</code>,
                  ogni oggetto avrà i suoi valori per <code className="text-blue-400">marca</code>,
                  <code className="text-blue-400"> modello</code>, <code className="text-blue-400">colore</code>, ecc.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 6 - Tipi di Attributi
  {
    title: "Tipi di Attributi",
    subtitle: "Attributi di istanza vs attributi di classe (static)",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <div className="grid grid-cols-2 gap-6">
            <HighlightBox color="blue" icon={Package}>
              <h3 className="text-xl font-bold mb-4">Attributi di Istanza</h3>
              <p className="text-gray-300 mb-4">
                Ogni oggetto ha la <span className="text-blue-400 font-bold">sua copia</span>.
                Valori diversi per ogni istanza.
              </p>
              <CodeBlock code={`class Studente
{
    private string nome;
    private int eta;
    private double media;
}`} />
              <div className="mt-3 bg-blue-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-300">
                  <Users className="w-4 h-4 inline text-blue-400" /> Ogni studente ha il proprio nome, età e media
                </p>
              </div>
            </HighlightBox>

            <HighlightBox color="cyan" icon={Database}>
              <h3 className="text-xl font-bold mb-4">Attributi Statici (static)</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-cyan-400 font-bold">Condivisi</span> da tutte le istanze.
                Un'unica copia per tutta la classe.
              </p>
              <CodeBlock code={`class Studente
{
    private static int contatore;
    private static string scuola;

    public const int MAX_STUDENTI = 100;
}`} />
              <div className="mt-3 bg-cyan-900/30 p-3 rounded-lg">
                <p className="text-sm text-gray-300">
                  <Settings className="w-4 h-4 inline text-cyan-400" /> Tutti gli studenti condividono lo stesso contatore e scuola
                </p>
              </div>
            </HighlightBox>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 p-6 rounded-xl border border-blue-500/40">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-bold text-blue-300">Esempio Completo: Sistema E-Commerce</h4>
            </div>
            <CodeBlock code={`public class Prodotto
{
    // Attributi di istanza (ogni prodotto ha i suoi valori)
    private string nome;
    private double prezzo;
    private int quantitaDisponibile;
    private string categoria;

    // Attributi statici (condivisi da tutti i prodotti)
    private static int numeroProdotti = 0;
    private static double totaleVendite = 0.0;

    // Costanti (valori fissi per tutta la classe)
    public const double IVA = 0.22;
    public const int MAX_QUANTITA = 1000;
}`} />
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 text-center hover:scale-105 transition-transform">
              <Package className="w-10 h-10 text-blue-400 mx-auto mb-2" />
              <p className="font-bold text-blue-300 mb-1">Istanza</p>
              <p className="text-xs text-gray-400">Ogni oggetto ha la sua copia</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30 text-center hover:scale-105 transition-transform">
              <Database className="w-10 h-10 text-cyan-400 mx-auto mb-2" />
              <p className="font-bold text-cyan-300 mb-1">Static</p>
              <p className="text-xs text-gray-400">Unica copia condivisa</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30 text-center hover:scale-105 transition-transform">
              <Award className="w-10 h-10 text-green-400 mx-auto mb-2" />
              <p className="font-bold text-green-300 mb-1">Const</p>
              <p className="text-xs text-gray-400">Valore immutabile</p>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 7 - Convenzioni Naming
  {
    title: "Convenzioni di Naming per Attributi",
    subtitle: "Best practices in C#",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <div className="grid grid-cols-2 gap-6">
            <HighlightBox color="blue" icon={Code}>
              <h3 className="text-xl font-bold mb-4">Campi Privati</h3>
              <p className="text-gray-300 mb-4">
                Iniziano con <span className="text-blue-400 font-bold">lettera minuscola</span> o
                <span className="text-blue-400 font-bold"> underscore</span>
              </p>
              <CodeBlock code={`// Stile camelCase
private string nome;
private int eta;
private double altezza;

// Stile con underscore (alternativa)
private string _nome;
private int _eta;
private double _altezza;`} />
            </HighlightBox>

            <HighlightBox color="cyan" icon={Award}>
              <h3 className="text-xl font-bold mb-4">Campi Pubblici/Costanti</h3>
              <p className="text-gray-300 mb-4">
                <span className="text-cyan-400 font-bold">PascalCase</span> per pubblici,
                <span className="text-cyan-400 font-bold"> UPPER_CASE</span> per costanti
              </p>
              <CodeBlock code={`// Campi pubblici (raro, meglio usare proprietà)
public string NomeCompleto;

// Costanti (sempre maiuscole)
public const int MAX_GIOCATORI = 4;
public const double PI_GRECO = 3.14159;
private const string VERSIONE = "1.0";`} />
            </HighlightBox>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-bold text-blue-300">Esempio: Sistema di Gioco RPG</h4>
            </div>
            <CodeBlock code={`public class Guerriero
{
    // Costanti (UPPER_CASE con underscore)
    public const int MAX_LIVELLO = 100;
    private const double BONUS_FORZA = 1.5;
    private const string CLASSE_DEFAULT = "Guerriero Base";

    // Campi privati (camelCase)
    private string nomePersonaggio;
    private int puntiVita;
    private int puntiEsperienza;
    private double percentualeVita;

    // Campi statici (camelCase con static)
    private static int numeroGuerrieri = 0;
    private static double bonusGlobale = 1.0;
}`} />
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="grid grid-cols-4 gap-3">
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30 text-center">
              <p className="text-blue-300 font-bold mb-2">camelCase</p>
              <p className="text-xs text-gray-400">nomeVariabile</p>
              <p className="text-xs text-cyan-400 mt-1">Campi privati</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30 text-center">
              <p className="text-cyan-300 font-bold mb-2">PascalCase</p>
              <p className="text-xs text-gray-400">NomeVariabile</p>
              <p className="text-xs text-cyan-400 mt-1">Pubblici/Proprietà</p>
            </div>
            <div className="bg-green-900/30 p-4 rounded-lg border border-green-500/30 text-center">
              <p className="text-green-300 font-bold mb-2">UPPER_CASE</p>
              <p className="text-xs text-gray-400">NOME_COSTANTE</p>
              <p className="text-xs text-cyan-400 mt-1">Costanti</p>
            </div>
            <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/30 text-center">
              <p className="text-purple-300 font-bold mb-2">_underscore</p>
              <p className="text-xs text-gray-400">_nomeVariabile</p>
              <p className="text-xs text-cyan-400 mt-1">Alternativa privati</p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-4 rounded-xl border border-yellow-500/30">
            <div className="flex items-start gap-3">
              <Lightbulb className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-yellow-400 font-bold mb-1">Best Practice:</p>
                <p className="text-sm text-gray-300">
                  Scegli uno stile e mantienilo <span className="text-yellow-400 font-bold">consistente</span> in tutto il progetto.
                  La leggibilità del codice è fondamentale per il lavoro in team!
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  },

  // Slide 8 - Inizializzazione Attributi
  {
    title: "Inizializzazione degli Attributi",
    subtitle: "Valori di default e inizializzazione esplicita",
    content: (
      <div className="space-y-6">
        <FadeIn delay={0}>
          <HighlightBox color="blue" icon={Database}>
            <h3 className="text-xl font-bold mb-4">Valori di Default in C#</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/30 p-4 rounded-lg border border-blue-500/40 hover:scale-105 transition-transform">
                <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-300 font-bold mb-1">Numeri</p>
                <p className="text-gray-300"><code>int, double → 0</code></p>
                <p className="text-gray-300"><code>float → 0.0f</code></p>
              </div>
              <div className="bg-gradient-to-br from-cyan-800/50 to-cyan-900/30 p-4 rounded-lg border border-cyan-500/40 hover:scale-105 transition-transform">
                <CheckCircle className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <p className="text-cyan-300 font-bold mb-1">Bool</p>
                <p className="text-gray-300"><code>bool → false</code></p>
              </div>
              <div className="bg-gradient-to-br from-blue-800/50 to-blue-900/30 p-4 rounded-lg border border-blue-500/40 hover:scale-105 transition-transform">
                <Package className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <p className="text-blue-300 font-bold mb-1">Riferimenti</p>
                <p className="text-gray-300"><code>string, object → null</code></p>
              </div>
            </div>
          </HighlightBox>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-red-900/40 rounded-full flex items-center justify-center">
                  <span className="text-red-400 font-bold text-xl">✗</span>
                </div>
                <h4 className="text-lg font-bold text-red-300">Senza Inizializzazione</h4>
              </div>
              <CodeBlock code={`class ContoCorrente
{
    private string intestatario;
    private double saldo;
    private bool attivo;

    // Valori default automatici:
    // intestatario = null
    // saldo = 0.0
    // attivo = false
}`} />
              <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                <p className="text-sm text-gray-300">
                  ⚠️ Rischio di <code className="text-red-400">NullReferenceException</code>!
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-900/40 rounded-full flex items-center justify-center">
                  <span className="text-green-400 font-bold text-xl">✓</span>
                </div>
                <h4 className="text-lg font-bold text-green-300">Con Inizializzazione</h4>
              </div>
              <CodeBlock code={`class ContoCorrente
{
    private string intestatario = "";
    private double saldo = 100.0;
    private bool attivo = true;
    private DateTime apertura = DateTime.Now;

    // Valori iniziali sicuri!
}`} />
              <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                <p className="text-sm text-gray-300">
                  ✓ Valori iniziali <span className="text-green-400 font-bold">sicuri e prevedibili</span>
                </p>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/40">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-8 h-8 text-blue-400" />
              <h4 className="text-xl font-bold text-blue-300">Esempio Completo: Sistema Veicoli</h4>
            </div>
            <CodeBlock code={`public class Veicolo
{
    // Attributi con inizializzazione inline
    private string targa = "N/A";
    private int numeroRuote = 4;
    private double carburante = 0.0;
    private bool acceso = false;
    private string marca = "Sconosciuta";

    // Attributi statici inizializzati
    private static int totaleVeicoli = 0;
    private static double kmTotali = 0.0;

    // Costanti (sempre inizializzate)
    public const int MAX_CARBURANTE = 60;
    public const double CONSUMO_MEDIO = 0.08;
}`} />
          </div>
        </FadeIn>

        <FadeIn delay={600}>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-4 rounded-xl border border-blue-500/30">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-6 h-6 text-blue-400" />
                <div>
                  <p className="text-blue-400 font-bold mb-1">Inizializzazione Inline</p>
                  <p className="text-sm text-gray-300">Valori assegnati direttamente nella dichiarazione</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 p-4 rounded-xl border border-cyan-500/30">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-cyan-400" />
                <div>
                  <p className="text-cyan-400 font-bold mb-1">Costruttore</p>
                  <p className="text-sm text-gray-300">Valori assegnati nel costruttore (prossime slide)</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  }
];
