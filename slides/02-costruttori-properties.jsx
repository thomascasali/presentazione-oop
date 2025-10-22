// ============================================
// MODULO 2: COSTRUTTORI E PROPERTIES
// ============================================
// Slide 9-16: Costruttori (4) + Properties (4)

const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div style={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
      transition: 'all 0.6s ease-out'
    }}>
      {children}
    </div>
  );
};

// IconWrapper uses alternative pattern: receives icon component as prop
const IconWrapper = ({ icon: Icon, className = "" }) => {
  return React.createElement(Icon, { className: `w-6 h-6 ${className}` });
};

// Icone necessarie (usando lucide-react inline)
const Zap = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('polygon', { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" })
);

const Settings = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('circle', { cx: "12", cy: "12", r: "3" }),
  React.createElement('path', { d: "M12 1v6m0 6v6" }),
  React.createElement('path', { d: "m4.93 4.93 4.24 4.24m5.66 5.66 4.24 4.24" }),
  React.createElement('path', { d: "m19.07 4.93-4.24 4.24m-5.66 5.66-4.24 4.24" })
);

const Code = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('polyline', { points: "16 18 22 12 16 6" }),
  React.createElement('polyline', { points: "8 6 2 12 8 18" })
);

const Layers = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('polygon', { points: "12 2 2 7 12 12 22 7 12 2" }),
  React.createElement('polyline', { points: "2 17 12 22 22 17" }),
  React.createElement('polyline', { points: "2 12 12 17 22 12" })
);

const CheckCircle = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('path', { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
  React.createElement('polyline', { points: "22 4 12 14.01 9 11.01" })
);

const Lock = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('rect', { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2" }),
  React.createElement('path', { d: "M7 11V7a5 5 0 0 1 10 0v4" })
);

const Shield = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('path', { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" })
);

const Eye = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('path', { d: "M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" }),
  React.createElement('circle', { cx: "12", cy: "12", r: "3" })
);

const Sparkles = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('path', { d: "m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" }),
  React.createElement('path', { d: "M5 3v4" }),
  React.createElement('path', { d: "M19 17v4" }),
  React.createElement('path', { d: "M3 5h4" }),
  React.createElement('path', { d: "M17 19h4" })
);

const AlertCircle = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('circle', { cx: "12", cy: "12", r: "10" }),
  React.createElement('line', { x1: "12", y1: "8", x2: "12", y2: "12" }),
  React.createElement('line', { x1: "12", y1: "16", x2: "12.01", y2: "16" })
);

const Lightbulb = (props) => React.createElement('svg', { ...props, xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" },
  React.createElement('path', { d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" }),
  React.createElement('path', { d: "M9 18h6" }),
  React.createElement('path', { d: "M10 22h4" })
);

// ============================================
// SLIDE 9: COSTRUTTORI - INTRODUZIONE
// ============================================
const slide9 = {
  title: "Costruttori",
  subtitle: "Inizializzare gli oggetti correttamente",
  content: React.createElement('div', { className: "space-y-8" },
    React.createElement(FadeIn, { delay: 0 },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-blue-400 shadow-2xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Zap, className: "w-10 h-10 mr-4 text-blue-300" }),
          React.createElement('h3', { className: "text-3xl font-bold text-blue-300" }, "Cos'è un Costruttore?")
        ),
        React.createElement('p', { className: "text-xl text-gray-200 leading-relaxed" },
          "Un costruttore è un ",
          React.createElement('span', { className: "text-blue-400 font-bold" }, "metodo speciale"),
          " che viene chiamato ",
          React.createElement('span', { className: "text-cyan-400 font-bold" }, "automaticamente"),
          " quando si crea un nuovo oggetto. Serve per ",
          React.createElement('span', { className: "text-blue-400 font-bold" }, "inizializzare"),
          " lo stato dell'oggetto."
        )
      )
    ),

    React.createElement('div', { className: "grid grid-cols-2 gap-6" },
      React.createElement(FadeIn, { delay: 200 },
        React.createElement('div', { className: "space-y-4" },
          React.createElement('div', { className: "flex items-center mb-4" },
            React.createElement(IconWrapper, { icon: CheckCircle, className: "w-8 h-8 mr-3 text-cyan-400" }),
            React.createElement('h4', { className: "text-2xl font-bold text-cyan-300" }, "Caratteristiche:")
          ),
          React.createElement('ul', { className: "space-y-3 text-gray-200" },
            React.createElement('li', { className: "flex items-start bg-blue-900/20 p-3 rounded-lg transform hover:scale-105 transition-transform" },
              React.createElement('span', { className: "text-blue-400 mr-3 text-2xl" }, "✓"),
              React.createElement('span', { className: "text-lg" }, "Ha lo stesso nome della classe")
            ),
            React.createElement('li', { className: "flex items-start bg-blue-900/20 p-3 rounded-lg transform hover:scale-105 transition-transform" },
              React.createElement('span', { className: "text-blue-400 mr-3 text-2xl" }, "✓"),
              React.createElement('span', { className: "text-lg" }, "Non ha tipo di ritorno (nemmeno void)")
            ),
            React.createElement('li', { className: "flex items-start bg-blue-900/20 p-3 rounded-lg transform hover:scale-105 transition-transform" },
              React.createElement('span', { className: "text-blue-400 mr-3 text-2xl" }, "✓"),
              React.createElement('span', { className: "text-lg" }, "Può avere parametri")
            ),
            React.createElement('li', { className: "flex items-start bg-blue-900/20 p-3 rounded-lg transform hover:scale-105 transition-transform" },
              React.createElement('span', { className: "text-blue-400 mr-3 text-2xl" }, "✓"),
              React.createElement('span', { className: "text-lg" }, "Può essere overloaded (più versioni)")
            ),
            React.createElement('li', { className: "flex items-start bg-blue-900/20 p-3 rounded-lg transform hover:scale-105 transition-transform" },
              React.createElement('span', { className: "text-blue-400 mr-3 text-2xl" }, "✓"),
              React.createElement('span', { className: "text-lg" }, "Chiamato automaticamente con 'new'")
            )
          )
        )
      ),

      React.createElement(FadeIn, { delay: 400 },
        React.createElement('div', { className: "bg-gray-900/80 p-6 rounded-2xl border border-cyan-500/40 shadow-2xl" },
          React.createElement('div', { className: "flex items-center mb-4" },
            React.createElement(IconWrapper, { icon: Code, className: "w-7 h-7 mr-3 text-cyan-400" }),
            React.createElement('h4', { className: "text-xl font-bold text-cyan-300" }, "Sintassi Base")
          ),
          React.createElement('div', { className: "font-mono text-sm" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class NomeClasse
{
    // Attributi
    private string campo;

    // Costruttore
    public NomeClasse()
    {
        // Codice inizializzazione
        campo = "valore";
    }
}`
            )
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 600 },
      React.createElement('div', { className: "bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-5 rounded-xl border-l-4 border-yellow-400 shadow-lg" },
        React.createElement('div', { className: "flex items-start" },
          React.createElement(IconWrapper, { icon: Lightbulb, className: "w-7 h-7 mr-3 text-yellow-300 mt-1" }),
          React.createElement('p', { className: "text-yellow-100 text-lg" },
            React.createElement('strong', null, "💡 Importante:"),
            " Se non dichiari alcun costruttore, C# ne crea automaticamente uno vuoto (costruttore di default)."
          )
        )
      )
    )
  )
};

// ============================================
// SLIDE 10: TIPI DI COSTRUTTORI
// ============================================
const slide10 = {
  title: "Tipi di Costruttori",
  subtitle: "Default, parametrizzati e di copia",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement(FadeIn, { delay: 0 },
      React.createElement('div', { className: "bg-blue-900/30 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Layers, className: "w-8 h-8 mr-3 text-blue-300" }),
          React.createElement('h3', { className: "text-2xl font-bold text-blue-300" }, "1. Costruttore di Default (senza parametri)")
        ),
        React.createElement('div', { className: "bg-gray-900/80 p-5 rounded-xl font-mono text-sm shadow-inner" },
          React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Libro
{
    private string titolo;
    private string autore;
    private int pagine;

    // Costruttore di default
    public Libro()
    {
        titolo = "Sconosciuto";
        autore = "Anonimo";
        pagine = 0;
    }
}

// Utilizzo
Libro libro1 = new Libro();
// titolo = "Sconosciuto", autore = "Anonimo"`
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 200 },
      React.createElement('div', { className: "bg-cyan-900/30 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Settings, className: "w-8 h-8 mr-3 text-cyan-300" }),
          React.createElement('h3', { className: "text-2xl font-bold text-cyan-300" }, "2. Costruttore Parametrizzato")
        ),
        React.createElement('div', { className: "bg-gray-900/80 p-5 rounded-xl font-mono text-sm shadow-inner" },
          React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Libro
{
    private string titolo;
    private string autore;
    private int pagine;

    // Costruttore parametrizzato
    public Libro(string t, string a, int p)
    {
        titolo = t;
        autore = a;
        pagine = p;
    }
}

// Utilizzo
Libro libro2 = new Libro("1984", "Orwell", 328);`
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 400 },
      React.createElement('div', { className: "grid grid-cols-3 gap-4" },
        React.createElement('div', { className: "bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Zap, className: "w-12 h-12 mx-auto mb-2 text-blue-300" }),
          React.createElement('p', { className: "text-blue-200 font-bold" }, "Default"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Valori predefiniti")
        ),
        React.createElement('div', { className: "bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Settings, className: "w-12 h-12 mx-auto mb-2 text-cyan-300" }),
          React.createElement('p', { className: "text-cyan-200 font-bold" }, "Parametrizzato"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Valori personalizzati")
        ),
        React.createElement('div', { className: "bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Layers, className: "w-12 h-12 mx-auto mb-2 text-purple-300" }),
          React.createElement('p', { className: "text-purple-200 font-bold" }, "Flessibilità"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Più opzioni di creazione")
        )
      )
    )
  )
};

// ============================================
// SLIDE 11: OVERLOADING COSTRUTTORI
// ============================================
const slide11 = {
  title: "Overloading dei Costruttori",
  subtitle: "Più costruttori con parametri diversi",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement(FadeIn, { delay: 0 },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-900/30 to-purple-900/30 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
        React.createElement('div', { className: "flex items-center mb-3" },
          React.createElement(IconWrapper, { icon: Layers, className: "w-9 h-9 mr-3 text-blue-300" }),
          React.createElement('h3', { className: "text-2xl font-bold text-blue-300" }, "Costruttori Multipli")
        ),
        React.createElement('p', { className: "text-gray-200 text-lg" },
          "Una classe può avere ",
          React.createElement('span', { className: "text-cyan-400 font-bold" }, "più costruttori"),
          " con numero o tipo di parametri diversi."
        )
      )
    ),

    React.createElement(FadeIn, { delay: 200 },
      React.createElement('div', { className: "bg-gray-900/80 p-6 rounded-2xl border border-cyan-500/40 shadow-2xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Sparkles, className: "w-7 h-7 mr-3 text-cyan-400" }),
          React.createElement('h4', { className: "text-xl font-bold text-cyan-300" }, "Esempio: Smartphone")
        ),
        React.createElement('div', { className: "font-mono text-sm" },
          React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Smartphone
{
    private string marca;
    private string modello;
    private int memoriaGB;
    private double prezzo;

    // Costruttore 1: Solo marca e modello
    public Smartphone(string marca, string modello)
    {
        this.marca = marca;
        this.modello = modello;
        this.memoriaGB = 64;  // Default
        this.prezzo = 0.0;    // Default
    }

    // Costruttore 2: Marca, modello e memoria
    public Smartphone(string marca, string modello, int memoria)
    {
        this.marca = marca;
        this.modello = modello;
        this.memoriaGB = memoria;
        this.prezzo = 0.0;
    }

    // Costruttore 3: Tutti i parametri
    public Smartphone(string marca, string modello, int memoria, double prezzo)
    {
        this.marca = marca;
        this.modello = modello;
        this.memoriaGB = memoria;
        this.prezzo = prezzo;
    }
}`
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 400 },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-5 rounded-xl shadow-lg" },
        React.createElement('h4', { className: "font-bold mb-3 text-blue-300 text-lg flex items-center" },
          React.createElement(IconWrapper, { icon: Code, className: "w-6 h-6 mr-2" }),
          "Utilizzo dei vari costruttori:"
        ),
        React.createElement('div', { className: "bg-gray-900 p-4 rounded-lg font-mono text-sm" },
          React.createElement('pre', { className: "text-gray-200" },
`Smartphone s1 = new Smartphone("Apple", "iPhone 15");
Smartphone s2 = new Smartphone("Samsung", "Galaxy S24", 256);
Smartphone s3 = new Smartphone("Xiaomi", "Mi 13", 128, 599.99);`
          )
        )
      )
    )
  )
};

// ============================================
// SLIDE 12: KEYWORD THIS E CONSTRUCTOR CHAINING
// ============================================
const slide12 = {
  title: "Keyword 'this' e Constructor Chaining",
  subtitle: "Riuso del codice tra costruttori",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement('div', { className: "grid grid-cols-2 gap-6" },
      React.createElement(FadeIn, { delay: 0 },
        React.createElement('div', { className: "bg-blue-900/30 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-3" },
            React.createElement(IconWrapper, { icon: Zap, className: "w-8 h-8 mr-3 text-blue-300" }),
            React.createElement('h3', { className: "text-xl font-bold text-blue-300" }, "Keyword 'this'")
          ),
          React.createElement('p', { className: "text-gray-200 mb-4 text-base" },
            "Riferimento all'",
            React.createElement('span', { className: "text-blue-400 font-bold" }, "istanza corrente"),
            ". Utile per distinguere parametri da attributi."
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Punto
{
    private int x;
    private int y;

    public Punto(int x, int y)
    {
        this.x = x;  // this.x è attributo
        this.y = y;  // x e y sono parametri
    }
}`
            )
          )
        )
      ),

      React.createElement(FadeIn, { delay: 200 },
        React.createElement('div', { className: "bg-cyan-900/30 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-3" },
            React.createElement(IconWrapper, { icon: Layers, className: "w-8 h-8 mr-3 text-cyan-300" }),
            React.createElement('h3', { className: "text-xl font-bold text-cyan-300" }, "Constructor Chaining")
          ),
          React.createElement('p', { className: "text-gray-200 mb-4 text-base" },
            "Un costruttore ",
            React.createElement('span', { className: "text-cyan-400 font-bold" }, "chiama un altro costruttore"),
            " della stessa classe."
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Punto
{
    private int x;
    private int y;

    public Punto() : this(0, 0)
    {
        // Chiama Punto(0, 0)
    }

    public Punto(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}`
            )
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 400 },
      React.createElement('div', { className: "bg-gray-900/80 p-6 rounded-2xl border border-blue-500/40 shadow-2xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Sparkles, className: "w-8 h-8 mr-3 text-blue-400" }),
          React.createElement('h4', { className: "text-xl font-bold text-blue-300" }, "Esempio Completo: Giocatore")
        ),
        React.createElement('div', { className: "font-mono text-sm" },
          React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Giocatore
{
    private string nome;
    private int livello;
    private int puntiVita;

    // Costruttore completo
    public Giocatore(string nome, int livello, int puntiVita)
    {
        this.nome = nome;
        this.livello = livello;
        this.puntiVita = puntiVita;
    }

    // Costruttore con valori default per livello e vita
    public Giocatore(string nome) : this(nome, 1, 100)
    {
        // Chiama il costruttore sopra con livello=1 e puntiVita=100
    }

    // Costruttore con nome e livello
    public Giocatore(string nome, int livello) : this(nome, livello, livello * 100)
    {
        // Vita proporzionale al livello
    }
}`
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 600 },
      React.createElement('div', { className: "bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-4 rounded-xl border-l-4 border-green-400" },
        React.createElement('div', { className: "flex items-start" },
          React.createElement(IconWrapper, { icon: CheckCircle, className: "w-7 h-7 mr-3 text-green-300 mt-1" }),
          React.createElement('p', { className: "text-green-100 text-base" },
            React.createElement('strong', null, "✓ Vantaggi:"),
            " Evita duplicazione del codice e garantisce una logica di inizializzazione centralizzata!"
          )
        )
      )
    )
  )
};

// ============================================
// SLIDE 13: PROPERTIES - INTRODUZIONE
// ============================================
const slide13 = {
  title: "Properties (Proprietà)",
  subtitle: "Accesso controllato agli attributi",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement(FadeIn, { delay: 0 },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-blue-400 shadow-2xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Lock, className: "w-10 h-10 mr-4 text-blue-300" }),
          React.createElement('h3', { className: "text-3xl font-bold text-blue-300" }, "Cosa sono le Properties?")
        ),
        React.createElement('p', { className: "text-xl text-gray-200 leading-relaxed" },
          "Le properties sono ",
          React.createElement('span', { className: "text-blue-400 font-bold" }, "membri speciali"),
          " che forniscono un meccanismo per ",
          React.createElement('span', { className: "text-cyan-400 font-bold" }, "leggere, scrivere o calcolare"),
          " il valore di un campo privato, mantenendo l'",
          React.createElement('span', { className: "text-blue-400 font-bold" }, "incapsulamento"),
          "."
        )
      )
    ),

    React.createElement('div', { className: "grid grid-cols-2 gap-6" },
      React.createElement(FadeIn, { delay: 200 },
        React.createElement('div', { className: "bg-red-900/30 p-6 rounded-2xl border-l-4 border-red-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-4" },
            React.createElement('h3', { className: "text-xl font-bold text-red-300" }, "❌ Senza Properties")
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Persona
{
    public string nome;  // Pubblico!
    public int eta;      // Nessun controllo
}

// Utilizzo - PERICOLOSO!
Persona p = new Persona();
p.nome = "";      // Nessuna validazione
p.eta = -5;       // Valore invalido!`
            )
          ),
          React.createElement('div', { className: "mt-4 bg-red-800/30 p-3 rounded-lg" },
            React.createElement('p', { className: "text-red-200 text-sm flex items-start" },
              React.createElement(IconWrapper, { icon: AlertCircle, className: "w-5 h-5 mr-2 mt-0.5" }),
              React.createElement('span', null, "Dati esposti e non validati!")
            )
          )
        )
      ),

      React.createElement(FadeIn, { delay: 400 },
        React.createElement('div', { className: "bg-green-900/30 p-6 rounded-2xl border-l-4 border-green-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-4" },
            React.createElement('h3', { className: "text-xl font-bold text-green-300" }, "✅ Con Properties")
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Persona
{
    private string nome;
    private int eta;

    public string Nome
    {
        get { return nome; }
        set { nome = value; }
    }

    public int Eta
    {
        get { return eta; }
        set {
            if(value >= 0) eta = value;
        }
    }
}`
            )
          ),
          React.createElement('div', { className: "mt-4 bg-green-800/30 p-3 rounded-lg" },
            React.createElement('p', { className: "text-green-200 text-sm flex items-start" },
              React.createElement(IconWrapper, { icon: CheckCircle, className: "w-5 h-5 mr-2 mt-0.5" }),
              React.createElement('span', null, "Dati protetti e validati!")
            )
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 600 },
      React.createElement('div', { className: "bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-5 rounded-xl border-l-4 border-yellow-400 shadow-lg" },
        React.createElement('div', { className: "flex items-start" },
          React.createElement(IconWrapper, { icon: Shield, className: "w-8 h-8 mr-3 text-yellow-300 mt-1" }),
          React.createElement('p', { className: "text-yellow-100 text-lg" },
            React.createElement('strong', null, "💡 Vantaggio:"),
            " Controllo totale sull'accesso ai dati con sintassi semplice e naturale!"
          )
        )
      )
    )
  )
};

// ============================================
// SLIDE 14: GET E SET ACCESSORS
// ============================================
const slide14 = {
  title: "Accessors: Get e Set",
  subtitle: "Lettura e scrittura controllata",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement('div', { className: "grid grid-cols-2 gap-6" },
      React.createElement(FadeIn, { delay: 0 },
        React.createElement('div', { className: "bg-blue-900/30 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-3" },
            React.createElement(IconWrapper, { icon: Eye, className: "w-8 h-8 mr-3 text-blue-300" }),
            React.createElement('h3', { className: "text-xl font-bold text-blue-300" }, "Get Accessor")
          ),
          React.createElement('p', { className: "text-gray-200 mb-4" },
            "Restituisce il valore della property (",
            React.createElement('span', { className: "text-blue-400 font-bold" }, "lettura"),
            ")"
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`private double saldo;

public double Saldo
{
    get
    {
        return saldo;
    }
}

// Utilizzo
ContoCorrente conto = new ContoCorrente();
double denaro = conto.Saldo;  // GET`
            )
          )
        )
      ),

      React.createElement(FadeIn, { delay: 200 },
        React.createElement('div', { className: "bg-cyan-900/30 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-3" },
            React.createElement(IconWrapper, { icon: Settings, className: "w-8 h-8 mr-3 text-cyan-300" }),
            React.createElement('h3', { className: "text-xl font-bold text-cyan-300" }, "Set Accessor")
          ),
          React.createElement('p', { className: "text-gray-200 mb-4" },
            "Imposta il valore della property (",
            React.createElement('span', { className: "text-cyan-400 font-bold" }, "scrittura"),
            ")"
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`private double saldo;

public double Saldo
{
    set
    {
        if(value >= 0)
            saldo = value;
    }
}

// Utilizzo
ContoCorrente conto = new ContoCorrente();
conto.Saldo = 1000;  // SET (value = 1000)`
            )
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 400 },
      React.createElement('div', { className: "bg-gray-900/80 p-6 rounded-2xl border border-blue-500/40 shadow-2xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Sparkles, className: "w-8 h-8 mr-3 text-blue-400" }),
          React.createElement('h4', { className: "text-xl font-bold text-blue-300" }, "Esempio: Prodotto E-Commerce con Validazione")
        ),
        React.createElement('div', { className: "font-mono text-sm" },
          React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Prodotto
{
    private string nome;
    private double prezzo;
    private int giacenza;

    public string Nome
    {
        get { return nome; }
        set
        {
            if(!string.IsNullOrEmpty(value))
                nome = value;
            else
                nome = "Prodotto Senza Nome";
        }
    }

    public double Prezzo
    {
        get { return prezzo; }
        set { if(value > 0) prezzo = value; }
    }

    public int Giacenza
    {
        get { return giacenza; }
        set { if(value >= 0) giacenza = value; }
    }
}`
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 600 },
      React.createElement('div', { className: "grid grid-cols-3 gap-4" },
        React.createElement('div', { className: "bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Eye, className: "w-10 h-10 mx-auto mb-2 text-blue-300" }),
          React.createElement('p', { className: "text-blue-200 font-bold" }, "GET"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Legge il valore")
        ),
        React.createElement('div', { className: "bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Settings, className: "w-10 h-10 mx-auto mb-2 text-cyan-300" }),
          React.createElement('p', { className: "text-cyan-200 font-bold" }, "SET"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Scrive il valore")
        ),
        React.createElement('div', { className: "bg-gradient-to-br from-green-900/40 to-green-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Shield, className: "w-10 h-10 mx-auto mb-2 text-green-300" }),
          React.createElement('p', { className: "text-green-200 font-bold" }, "VALIDAZIONE"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Controlla i dati")
        )
      )
    )
  )
};

// ============================================
// SLIDE 15: AUTO-IMPLEMENTED PROPERTIES
// ============================================
const slide15 = {
  title: "Auto-Implemented Properties",
  subtitle: "Sintassi semplificata in C#",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement(FadeIn, { delay: 0 },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
        React.createElement('div', { className: "flex items-center mb-3" },
          React.createElement(IconWrapper, { icon: Zap, className: "w-9 h-9 mr-3 text-blue-300" }),
          React.createElement('h3', { className: "text-2xl font-bold text-blue-300" }, "Sintassi Breve")
        ),
        React.createElement('p', { className: "text-lg text-gray-200" },
          "Quando non serve logica custom, C# permette una ",
          React.createElement('span', { className: "text-cyan-400 font-bold" }, "sintassi compatta"),
          " che crea automaticamente il campo privato."
        )
      )
    ),

    React.createElement('div', { className: "grid grid-cols-2 gap-6" },
      React.createElement(FadeIn, { delay: 200 },
        React.createElement('div', { className: "bg-red-900/30 p-6 rounded-2xl border-l-4 border-red-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-4" },
            React.createElement('h3', { className: "text-lg font-bold text-red-300" }, "😓 Sintassi Completa")
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Auto
{
    private string marca;
    private string modello;
    private int anno;

    public string Marca
    {
        get { return marca; }
        set { marca = value; }
    }

    public string Modello
    {
        get { return modello; }
        set { modello = value; }
    }

    public int Anno
    {
        get { return anno; }
        set { anno = value; }
    }
}`
            )
          ),
          React.createElement('div', { className: "mt-3 text-red-300 text-sm text-center font-bold" },
            "Molto codice ripetitivo!"
          )
        )
      ),

      React.createElement(FadeIn, { delay: 400 },
        React.createElement('div', { className: "bg-green-900/30 p-6 rounded-2xl border-l-4 border-green-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-4" },
            React.createElement('h3', { className: "text-lg font-bold text-green-300" }, "✨ Auto-Implemented")
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Auto
{
    // Molto più semplice!
    public string Marca { get; set; }
    public string Modello { get; set; }
    public int Anno { get; set; }
}

// Utilizzo identico
Auto auto = new Auto();
auto.Marca = "Ferrari";
auto.Modello = "F8";
auto.Anno = 2023;

Console.WriteLine(auto.Marca);`
            )
          ),
          React.createElement('div', { className: "mt-3 text-green-300 text-sm text-center font-bold" },
            "Sintetico ed elegante!"
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 600 },
      React.createElement('div', { className: "grid grid-cols-2 gap-6" },
        React.createElement('div', { className: "bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-5 rounded-xl border-l-4 border-yellow-400 shadow-lg" },
          React.createElement('div', { className: "flex items-start" },
            React.createElement(IconWrapper, { icon: AlertCircle, className: "w-7 h-7 mr-3 text-yellow-300 mt-1" }),
            React.createElement('p', { className: "text-yellow-100" },
              React.createElement('strong', null, "⚠️ Attenzione:"),
              " Usa auto-implemented solo se ",
              React.createElement('span', { className: "text-yellow-300 font-bold" }, "non serve logica di validazione"),
              "!"
            )
          )
        ),
        React.createElement('div', { className: "bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-5 rounded-xl border-l-4 border-green-400 shadow-lg" },
          React.createElement('div', { className: "flex items-start" },
            React.createElement(IconWrapper, { icon: CheckCircle, className: "w-7 h-7 mr-3 text-green-300 mt-1" }),
            React.createElement('p', { className: "text-green-100" },
              React.createElement('strong', null, "✓ Quando usare:"),
              " Per ",
              React.createElement('span', { className: "text-green-300 font-bold" }, "semplici contenitori di dati"),
              " senza logica complessa."
            )
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 800 },
      React.createElement('div', { className: "bg-gradient-to-r from-blue-900/20 to-purple-900/20 p-5 rounded-xl border border-blue-400/30" },
        React.createElement('div', { className: "flex items-center mb-3" },
          React.createElement(IconWrapper, { icon: Lightbulb, className: "w-7 h-7 mr-3 text-blue-300" }),
          React.createElement('h4', { className: "text-lg font-bold text-blue-300" }, "Valori di Default (C# 6+)")
        ),
        React.createElement('div', { className: "bg-gray-900 p-4 rounded-lg font-mono text-sm" },
          React.createElement('pre', { className: "text-gray-200" },
`public class Configurazione
{
    public string Nome { get; set; } = "Default";
    public int MaxConnessioni { get; set; } = 100;
    public bool Debug { get; set; } = false;
}`
          )
        )
      )
    )
  )
};

// ============================================
// SLIDE 16: READ-ONLY E INIT PROPERTIES
// ============================================
const slide16 = {
  title: "Properties Read-Only e Init",
  subtitle: "Proprietà a sola lettura e immutabili",
  content: React.createElement('div', { className: "space-y-6" },
    React.createElement('div', { className: "grid grid-cols-2 gap-6" },
      React.createElement(FadeIn, { delay: 0 },
        React.createElement('div', { className: "bg-blue-900/30 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-3" },
            React.createElement(IconWrapper, { icon: Lock, className: "w-8 h-8 mr-3 text-blue-300" }),
            React.createElement('h3', { className: "text-xl font-bold text-blue-300" }, "Read-Only Property")
          ),
          React.createElement('p', { className: "text-gray-200 mb-4" },
            "Solo ",
            React.createElement('span', { className: "text-blue-400 font-bold" }, "get accessor"),
            " - solo lettura"
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Ordine
{
    private string codice;
    private DateTime data;

    // Solo lettura dall'esterno
    public string Codice
    {
        get { return codice; }
    }

    public DateTime Data
    {
        get { return data; }
    }

    public Ordine(string cod)
    {
        codice = cod;  // Nel costruttore
        data = DateTime.Now;
    }
}`
            )
          )
        )
      ),

      React.createElement(FadeIn, { delay: 200 },
        React.createElement('div', { className: "bg-cyan-900/30 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
          React.createElement('div', { className: "flex items-center mb-3" },
            React.createElement(IconWrapper, { icon: Shield, className: "w-8 h-8 mr-3 text-cyan-300" }),
            React.createElement('h3', { className: "text-xl font-bold text-cyan-300" }, "Init-Only Property (C# 9+)")
          ),
          React.createElement('p', { className: "text-gray-200 mb-4" },
            "Impostabile solo in ",
            React.createElement('span', { className: "text-cyan-400 font-bold" }, "fase di inizializzazione")
          ),
          React.createElement('div', { className: "bg-gray-900/80 p-4 rounded-lg font-mono text-sm shadow-inner" },
            React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Persona
{
    // Init: solo alla creazione
    public string Nome { get; init; }
    public string Cognome { get; init; }
    public DateTime DataNascita { get; init; }
}

// Utilizzo - Object Initializer
Persona p = new Persona
{
    Nome = "Mario",
    Cognome = "Rossi",
    DataNascita = new DateTime(2000, 5, 15)
};

// p.Nome = "Luigi";  // ERRORE!`
            )
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 400 },
      React.createElement('div', { className: "bg-gray-900/80 p-6 rounded-2xl border border-blue-500/40 shadow-2xl" },
        React.createElement('div', { className: "flex items-center mb-4" },
          React.createElement(IconWrapper, { icon: Sparkles, className: "w-8 h-8 mr-3 text-blue-400" }),
          React.createElement('h4', { className: "text-xl font-bold text-blue-300" }, "Esempio: Sistema di Videogioco")
        ),
        React.createElement('div', { className: "font-mono text-sm" },
          React.createElement('pre', { className: "text-gray-200 leading-relaxed" },
`public class Arma
{
    // Proprietà immutabili (definite alla creazione)
    public string Nome { get; init; }
    public string Tipo { get; init; }
    public int DannoBase { get; init; }

    // Proprietà calcolate (solo lettura)
    private int livelloPotenziamento;

    public int DannoEffettivo
    {
        get { return DannoBase + (livelloPotenziamento * 5); }
    }

    public void Potenzia()
    {
        livelloPotenziamento++;
    }
}

// Utilizzo
Arma spada = new Arma
{
    Nome = "Excalibur",
    Tipo = "Spada",
    DannoBase = 50
};

Console.WriteLine(spada.DannoEffettivo);  // 50
spada.Potenzia();
Console.WriteLine(spada.DannoEffettivo);  // 55
// spada.Nome = "Durlindana";  // ERRORE! Immutabile`
          )
        )
      )
    ),

    React.createElement(FadeIn, { delay: 600 },
      React.createElement('div', { className: "grid grid-cols-3 gap-4" },
        React.createElement('div', { className: "bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Lock, className: "w-10 h-10 mx-auto mb-2 text-blue-300" }),
          React.createElement('p', { className: "text-blue-200 font-bold" }, "Read-Only"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Solo get { }")
        ),
        React.createElement('div', { className: "bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Shield, className: "w-10 h-10 mx-auto mb-2 text-cyan-300" }),
          React.createElement('p', { className: "text-cyan-200 font-bold" }, "Init-Only"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "{ get; init; }")
        ),
        React.createElement('div', { className: "bg-gradient-to-br from-purple-900/40 to-purple-800/20 p-4 rounded-xl text-center transform hover:scale-105 transition-transform" },
          React.createElement(IconWrapper, { icon: Sparkles, className: "w-10 h-10 mx-auto mb-2 text-purple-300" }),
          React.createElement('p', { className: "text-purple-200 font-bold" }, "Immutabilità"),
          React.createElement('p', { className: "text-gray-300 text-sm" }, "Dati protetti")
        )
      )
    )
  )
};

// ============================================
// EXPORT ARRAY
// ============================================
const costruttoriPropertiesSlides = [
  slide9,   // Costruttori - Introduzione
  slide10,  // Tipi di Costruttori
  slide11,  // Overloading Costruttori
  slide12,  // Keyword this e Constructor Chaining
  slide13,  // Properties - Introduzione
  slide14,  // Get e Set Accessors
  slide15,  // Auto-Implemented Properties
  slide16   // Read-Only e Init Properties
];
