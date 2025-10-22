// Using global variables from CDN
const { useState } = React;
const { ChevronLeft, ChevronRight, Home, Menu, X, Code, Box, GitBranch, Link2, Eye, Lock, Layers, Zap } = lucide;

const OOPPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const sections = [
    { id: 0, title: "Introduzione", icon: Home, slides: [0, 1] },
    { id: 2, title: "Classi e Oggetti", icon: Box, slides: [2, 3, 4] },
    { id: 5, title: "Attributi", icon: Code, slides: [5, 6, 7, 8] },
    { id: 9, title: "Costruttori", icon: Zap, slides: [9, 10, 11, 12] },
    { id: 13, title: "Properties", icon: Lock, slides: [13, 14, 15, 16] },
    { id: 17, title: "Metodi", icon: GitBranch, slides: [17, 18, 19, 20] },
    { id: 21, title: "Incapsulamento", icon: Lock, slides: [21, 22, 23] },
    { id: 24, title: "Visibilità", icon: Eye, slides: [24, 25, 26] },
    { id: 27, title: "Ereditarietà", icon: Layers, slides: [27, 28, 29, 30, 31] },
    { id: 32, title: "Polimorfismo", icon: GitBranch, slides: [32, 33, 34, 35] },
    { id: 36, title: "Associazioni", icon: Link2, slides: [36, 37, 38, 39] }
  ];

  const slides = [
    // Slide 0 - Dashboard
    {
      title: "Dashboard",
      isDashboard: true
    },
    
    // Slide 1 - Titolo
    {
      title: "Programmazione ad Oggetti",
      subtitle: "Object-Oriented Programming con C# e UML",
      content: (
        <div className="text-center space-y-8">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            OOP
          </div>
          <p className="text-2xl text-gray-300">Dai concetti base ai pattern avanzati</p>
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
              <Code className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <p className="text-lg">C# 12.0</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-xl border border-cyan-500/30">
              <Box className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
              <p className="text-lg">UML 2.5</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-xl border border-blue-500/30">
              <Layers className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <p className="text-lg">.NET 8</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 2 - Cosa sono le Classi
    {
      title: "Classi e Oggetti",
      subtitle: "Il fondamento della OOP",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cos'è una Classe?</h3>
            <p className="text-lg text-gray-300">Una classe è un <span className="text-blue-400 font-semibold">template</span> o <span className="text-blue-400 font-semibold">blueprint</span> che definisce le caratteristiche (attributi) e i comportamenti (metodi) di un tipo di oggetto.</p>
          </div>
          
          <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
            <h3 className="text-2xl font-bold mb-4 text-cyan-300">Cos'è un Oggetto?</h3>
            <p className="text-lg text-gray-300">Un oggetto è una <span className="text-cyan-400 font-semibold">istanza</span> specifica di una classe, con valori concreti per i suoi attributi.</p>
          </div>

          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-blue-300">Analogia: Stampo per Biscotti</h4>
              <p className="text-gray-300">La classe è lo stampo, gli oggetti sono i biscotti prodotti.</p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-3 text-cyan-300">Analogia: Progetto Architettonico</h4>
              <p className="text-gray-300">La classe è il progetto, gli oggetti sono le case costruite.</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 3 - Diagramma UML Classe
    {
      title: "Rappresentazione UML di una Classe",
      subtitle: "Unified Modeling Language",
      content: (
        <div className="space-y-6">
          <p className="text-lg text-gray-300">In UML, una classe è rappresentata con un rettangolo diviso in tre sezioni:</p>
          
          <div className="flex justify-center my-8">
            <svg width="400" height="350" className="bg-gray-800/30 rounded-xl p-4">
              {/* Rettangolo principale */}
              <rect x="50" y="20" width="300" height="300" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="3" rx="8"/>
              
              {/* Sezione Nome */}
              <rect x="50" y="20" width="300" height="80" fill="#2563eb" stroke="#60a5fa" strokeWidth="3" rx="8"/>
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

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
              <p className="font-bold text-blue-300 mb-2">1. Nome Classe</p>
              <p className="text-sm text-gray-300">Identificatore unico</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30">
              <p className="font-bold text-cyan-300 mb-2">2. Attributi</p>
              <p className="text-sm text-gray-300">Dati/Caratteristiche</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
              <p className="font-bold text-blue-300 mb-2">3. Metodi</p>
              <p className="text-sm text-gray-300">Comportamenti/Azioni</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 4 - Esempio Classe in C#
    {
      title: "Prima Classe in C#",
      subtitle: "Esempio: Videogioco - Personaggio",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30 font-mono text-sm">
            <pre className="text-gray-300">
{`public class Personaggio
{
    // Attributi
    private string nome;
    private int puntiVita;
    private int livello;
    
    // Metodi
    public void Attacca()
    {
        Console.WriteLine(nome + " attacca!");
    }
    
    public void RiceviDanno(int danno)
    {
        puntiVita -= danno;
        Console.WriteLine(nome + " ha subito " + danno + " danni");
    }
}`}
            </pre>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
              <h4 className="font-bold text-blue-300 mb-2">Creazione Oggetto</h4>
              <pre className="text-sm text-gray-300 font-mono">
{`Personaggio eroe = new Personaggio();
Personaggio nemico = new Personaggio();`}
              </pre>
            </div>
            <div className="bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-400">
              <h4 className="font-bold text-cyan-300 mb-2">Utilizzo</h4>
              <pre className="text-sm text-gray-300 font-mono">
{`eroe.Attacca();
nemico.RiceviDanno(25);`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 5 - Attributi Introduzione
    {
      title: "Attributi (Campi)",
      subtitle: "Le caratteristiche degli oggetti",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cosa sono gli Attributi?</h3>
            <p className="text-lg text-gray-300">Gli attributi (o campi) sono <span className="text-blue-400 font-semibold">variabili</span> dichiarate all'interno di una classe che rappresentano lo <span className="text-blue-400 font-semibold">stato</span> di un oggetto.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-cyan-300">Caratteristiche:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Memorizzano lo stato dell'oggetto</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Hanno un tipo di dato specifico</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Possono essere di tipi primitivi o riferimenti</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Hanno modificatori di visibilità</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-900 p-4 rounded-xl border border-cyan-500/30 font-mono text-sm">
              <pre className="text-gray-300">
{`public class Auto
{
    // Attributi
    private string marca;
    private string modello;
    private int anno;
    private double velocitaMassima;
    private bool inMovimento;
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 6 - Tipi di Attributi
    {
      title: "Tipi di Attributi",
      subtitle: "Attributi di istanza vs attributi di classe (static)",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Attributi di Istanza</h3>
              <p className="text-gray-300 mb-4">Ogni oggetto ha la sua copia. Valori diversi per ogni istanza.</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`class Studente
{
    private string nome;
    private int eta;
    private double media;
}`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Attributi Statici (static)</h3>
              <p className="text-gray-300 mb-4">Condivisi da tutte le istanze. Un'unica copia per tutta la classe.</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`class Studente
{
    private static int contatore;
    private static string scuola;
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio Completo: E-Commerce</h4>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`public class Prodotto
{
    // Attributi di istanza (ogni prodotto ha i suoi valori)
    private string nome;
    private double prezzo;
    private int quantitaDisponibile;
    
    // Attributi statici (condivisi da tutti i prodotti)
    private static int numeroProdotti = 0;
    private static double totaleVendite = 0.0;
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 7 - Convenzioni Naming
    {
      title: "Convenzioni di Naming per Attributi",
      subtitle: "Best practices in C#",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Campi Privati</h3>
              <p className="text-gray-300 mb-4">Iniziano con lettera minuscola o underscore</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`private string nome;
private int eta;
private double altezza;

// Oppure con underscore
private string _nome;
private int _eta;
private double _altezza;`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Campi Pubblici/Costanti</h3>
              <p className="text-gray-300 mb-4">PascalCase per pubblici, UPPER_CASE per costanti</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public string NomeCompleto;

public const int MAX_GIOCATORI = 4;
public const double PI_GRECO = 3.14159;
private const string VERSIONE = "1.0";`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Sistema di Gioco RPG</h4>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`public class Guerriero
{
    // Costanti
    public const int MAX_LIVELLO = 100;
    private const double BONUS_FORZA = 1.5;
    
    // Campi privati
    private string nomePersonaggio;
    private int puntiVita;
    private int puntiEsperienza;
    
    // Campi statici
    private static int numeroGuerrieri = 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 8 - Valori Default e Inizializzazione
    {
      title: "Inizializzazione degli Attributi",
      subtitle: "Valori di default e inizializzazione esplicita",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Valori di Default in C#</h3>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-blue-300 font-bold mb-1">Numeri</p>
                <p className="text-gray-300">int, double → 0</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-cyan-300 font-bold mb-1">Bool</p>
                <p className="text-gray-300">bool → false</p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded">
                <p className="text-blue-300 font-bold mb-1">Riferimenti</p>
                <p className="text-gray-300">string, object → null</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-cyan-300">❌ Senza Inizializzazione</h4>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`class ContoCorrente
{
    private string intestatario;
    private double saldo;
    private bool attivo;
    // intestatario = null
    // saldo = 0.0
    // attivo = false
}`}
                </pre>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-bold text-cyan-300">✅ Con Inizializzazione</h4>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`class ContoCorrente
{
    private string intestatario = "";
    private double saldo = 100.0;
    private bool attivo = true;
    private DateTime apertura = DateTime.Now;
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Veicolo</h4>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`public class Veicolo
{
    private string targa = "N/A";
    private int numeroRuote = 4;
    private double carburante = 0.0;
    private bool acceso = false;
    private static int totaleVeicoli = 0;
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 9 - Costruttori Introduzione
    {
      title: "Costruttori",
      subtitle: "Inizializzare gli oggetti correttamente",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cos'è un Costruttore?</h3>
            <p className="text-lg text-gray-300">Un costruttore è un <span className="text-blue-400 font-semibold">metodo speciale</span> che viene chiamato automaticamente quando si crea un nuovo oggetto. Serve per <span className="text-blue-400 font-semibold">inizializzare</span> lo stato dell'oggetto.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-cyan-300">Caratteristiche:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Ha lo stesso nome della classe</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Non ha tipo di ritorno (nemmeno void)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Può avere parametri</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Può essere overloaded (più versioni)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">✓</span>
                  <span>Chiamato automaticamente con 'new'</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-bold mb-4 text-cyan-300">Sintassi Base</h4>
              <div className="font-mono text-sm">
                <pre className="text-gray-300">
{`public class NomeClasse
{
    // Attributi
    private string campo;
    
    // Costruttore
    public NomeClasse()
    {
        // Codice inizializzazione
        campo = "valore";
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-200"><strong>💡 Importante:</strong> Se non dichiari alcun costruttore, C# ne crea automaticamente uno vuoto (costruttore di default).</p>
          </div>
        </div>
      )
    },

    // Slide 10 - Tipi di Costruttori
    {
      title: "Tipi di Costruttori",
      subtitle: "Default, parametrizzati e di copia",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">1. Costruttore di Default (senza parametri)</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Libro
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
Libro libro1 = new Libro();  // titolo = "Sconosciuto", autore = "Anonimo"`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">2. Costruttore Parametrizzato</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Libro
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
Libro libro2 = new Libro("1984", "Orwell", 328);`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 11 - Overloading Costruttori
    {
      title: "Overloading dei Costruttori",
      subtitle: "Più costruttori con parametri diversi",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Costruttori Multipli</h3>
            <p className="text-gray-300">Una classe può avere più costruttori con numero o tipo di parametri diversi.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-lg font-bold mb-4 text-cyan-300">Esempio: Smartphone</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Smartphone
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
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-4 rounded-xl">
            <h4 className="font-bold mb-3 text-blue-300">Utilizzo dei vari costruttori:</h4>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`Smartphone s1 = new Smartphone("Apple", "iPhone 15");
Smartphone s2 = new Smartphone("Samsung", "Galaxy S24", 256);
Smartphone s3 = new Smartphone("Xiaomi", "Mi 13", 128, 599.99);`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 12 - Keyword this e Constructor Chaining
    {
      title: "Keyword 'this' e Constructor Chaining",
      subtitle: "Riuso del codice tra costruttori",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Keyword 'this'</h3>
              <p className="text-gray-300 mb-4">Riferimento all'istanza corrente. Utile per distinguere parametri da attributi.</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Punto
{
    private int x;
    private int y;
    
    public Punto(int x, int y)
    {
        this.x = x;  // this.x è l'attributo
        this.y = y;  // x e y sono parametri
    }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Constructor Chaining</h3>
              <p className="text-gray-300 mb-4">Un costruttore chiama un altro costruttore della stessa classe.</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Punto
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
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio Completo: Giocatore</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Giocatore
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
    
    // Costruttore che usa valori default per livello e vita
    public Giocatore(string nome) : this(nome, 1, 100)
    {
        // Chiama il costruttore sopra con livello=1 e puntiVita=100
    }
    
    // Costruttore con nome e livello
    public Giocatore(string nome, int livello) : this(nome, livello, livello * 100)
    {
        // Vita proporzionale al livello
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 13 - Properties Introduzione
    {
      title: "Properties (Proprietà)",
      subtitle: "Accesso controllato agli attributi",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cosa sono le Properties?</h3>
            <p className="text-lg text-gray-300">Le properties sono <span className="text-blue-400 font-semibold">membri speciali</span> che forniscono un meccanismo per <span className="text-blue-400 font-semibold">leggere, scrivere o calcolare</span> il valore di un campo privato, mantenendo l'incapsulamento.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400">
              <h3 className="text-xl font-bold mb-4 text-red-300">❌ Senza Properties</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Persona
{
    public string nome;  // Pubblico!
    public int eta;      // Nessun controllo
}

// Utilizzo - PERICOLOSO!
Persona p = new Persona();
p.nome = "";      // Nessuna validazione
p.eta = -5;       // Valore invalido!`}
                </pre>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-bold mb-4 text-green-300">✅ Con Properties</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Persona
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
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-200"><strong>💡 Vantaggio:</strong> Controllo totale sull'accesso ai dati con sintassi semplice!</p>
          </div>
        </div>
      )
    },

    // Slide 14 - Get e Set
    {
      title: "Accessors: Get e Set",
      subtitle: "Lettura e scrittura controllata",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Get Accessor</h3>
              <p className="text-gray-300 mb-4">Restituisce il valore della property (lettura)</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`private double saldo;

public double Saldo
{
    get 
    { 
        return saldo; 
    }
}

// Utilizzo
ContoCorrente conto = new ContoCorrente();
double denaro = conto.Saldo;  // GET`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Set Accessor</h3>
              <p className="text-gray-300 mb-4">Imposta il valore della property (scrittura)</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`private double saldo;

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
conto.Saldo = 1000;  // SET (value = 1000)`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Prodotto E-Commerce con Validazione</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Prodotto
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
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 15 - Auto-implemented Properties
    {
      title: "Auto-Implemented Properties",
      subtitle: "Sintassi semplificata in C#",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Sintassi Breve</h3>
            <p className="text-lg text-gray-300">Quando non serve logica custom, C# permette una sintassi compatta che crea automaticamente il campo privato.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400">
              <h3 className="text-lg font-bold mb-4 text-red-300">Sintassi Completa</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Auto
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
}`}
                </pre>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-lg font-bold mb-4 text-green-300">Auto-Implemented</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Auto
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

Console.WriteLine(auto.Marca);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-200"><strong>⚠️ Attenzione:</strong> Usa auto-implemented solo se non serve logica di validazione!</p>
          </div>
        </div>
      )
    },

    // Slide 16 - Read-only e Init Properties
    {
      title: "Properties Read-Only e Init",
      subtitle: "Proprietà a sola lettura",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Read-Only Property</h3>
              <p className="text-gray-300 mb-4">Solo get accessor - solo lettura</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Ordine
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
        codice = cod;  // Impostato nel costruttore
        data = DateTime.Now;
    }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Init-Only Property (C# 9+)</h3>
              <p className="text-gray-300 mb-4">Impostabile solo in fase di inizializzazione</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Persona
{
    // Init: impostabile solo alla creazione
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

// p.Nome = "Luigi";  // ERRORE!`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Sistema di Videogioco</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Arma
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
    
    // Proprietà modificabili
    public int Durabilita { get; set; }
}

// Utilizzo
Arma spada = new Arma 
{ 
    Nome = "Excalibur", 
    Tipo = "Spada", 
    DannoBase = 50,
    Durabilita = 100
};`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 17 - Metodi Introduzione
    {
      title: "Metodi",
      subtitle: "Il comportamento degli oggetti",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cosa sono i Metodi?</h3>
            <p className="text-lg text-gray-300">I metodi sono <span className="text-blue-400 font-semibold">funzioni</span> definite all'interno di una classe che determinano il <span className="text-blue-400 font-semibold">comportamento</span> degli oggetti. Rappresentano le <span className="text-blue-400 font-semibold">azioni</span> che un oggetto può compiere.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-cyan-300">Componenti di un Metodo:</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Modificatore di accesso:</strong> public, private, protected</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Tipo di ritorno:</strong> int, string, void, etc.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Nome del metodo:</strong> identificatore</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Parametri:</strong> input (opzionali)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span><strong>Corpo:</strong> codice da eseguire</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-bold mb-4 text-cyan-300">Sintassi</h4>
              <div className="font-mono text-sm">
                <pre className="text-gray-300">
{`modificatore tipoRitorno NomeMetodo(parametri)
{
    // Corpo del metodo
    return valore;  // se non void
}

// Esempi
public void Stampa()
{
    Console.WriteLine("Hello");
}

public int Calcola(int a, int b)
{
    return a + b;
}

private string GetNome()
{
    return nome;
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 18 - Metodi con e senza ritorno
    {
      title: "Metodi con e senza Ritorno",
      subtitle: "void vs tipi di ritorno",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Metodi void (senza ritorno)</h3>
              <p className="text-gray-300 mb-4">Eseguono azioni ma non restituiscono valori</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Stampante
{
    public void StampaDocumento()
    {
        Console.WriteLine("Stampa in corso...");
        // Nessun return
    }
    
    public void CambiaModalita(string modo)
    {
        Console.WriteLine("Modalità: " + modo);
    }
}

// Utilizzo
Stampante s = new Stampante();
s.StampaDocumento();  // Non restituisce nulla
s.CambiaModalita("Colore");`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Metodi con Ritorno</h3>
              <p className="text-gray-300 mb-4">Restituiscono un valore del tipo specificato</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Calcolatrice
{
    public int Somma(int a, int b)
    {
        return a + b;
    }
    
    public double Dividi(double a, double b)
    {
        if(b != 0)
            return a / b;
        return 0;
    }
    
    public bool IsPositivo(int num)
    {
        return num > 0;
    }
}

// Utilizzo
Calcolatrice calc = new Calcolatrice();
int risultato = calc.Somma(5, 3);  // 8
double div = calc.Dividi(10, 2);    // 5.0
bool check = calc.IsPositivo(-5);   // false`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Conto Bancario</h4>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`public class ContoBancario
{
    private double saldo;
    
    // void - modifica lo stato
    public void Deposita(double importo)
    {
        if(importo > 0)
            saldo += importo;
    }
    
    // bool - ritorna successo/fallimento
    public bool Preleva(double importo)
    {
        if(importo > 0 && saldo >= importo)
        {
            saldo -= importo;
            return true;
        }
        return false;
    }
    
    // double - ritorna un valore
    public double GetSaldo()
    {
        return saldo;
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 19 - Parametri e Overloading
    {
      title: "Parametri e Method Overloading",
      subtitle: "Flessibilità nei metodi",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Method Overloading</h3>
            <p className="text-gray-300">Più metodi con lo stesso nome ma parametri diversi (numero o tipo).</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-lg font-bold mb-4 text-cyan-300">Esempio: Sistema di Messaggistica</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Messaggio
{
    // Overload 1: solo testo
    public void Invia(string testo)
    {
        Console.WriteLine("Invio messaggio: " + testo);
    }
    
    // Overload 2: testo e destinatario
    public void Invia(string testo, string destinatario)
    {
        Console.WriteLine("Invio a " + destinatario + ": " + testo);
    }
    
    // Overload 3: testo, destinatario e priorità
    public void Invia(string testo, string destinatario, int priorita)
    {
        Console.WriteLine("[P" + priorita + "] A " + destinatario + ": " + testo);
    }
    
    // Overload 4: numero destinatari
    public void Invia(string testo, string[] destinatari)
    {
        foreach(string dest in destinatari)
            Console.WriteLine("Invio a " + dest + ": " + testo);
    }
}

// Utilizzo - C# sceglie automaticamente il metodo giusto
Messaggio msg = new Messaggio();
msg.Invia("Ciao!");
msg.Invia("Ciao!", "Mario");
msg.Invia("Urgente!", "Luigi", 1);
msg.Invia("Avviso", new string[] {"Mario", "Luigi", "Anna"});`}
              </pre>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-200"><strong>💡 Nota:</strong> Il tipo di ritorno NON è sufficiente per distinguere overload - devono differire nei parametri!</p>
          </div>
        </div>
      )
    },

    // Slide 20 - Metodi Static
    {
      title: "Metodi Static",
      subtitle: "Metodi di classe vs metodi di istanza",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Metodi di Istanza</h3>
              <p className="text-gray-300 mb-4">Operano su un oggetto specifico. Accedono agli attributi dell'istanza.</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Cerchio
{
    private double raggio;
    
    public Cerchio(double r)
    {
        raggio = r;
    }
    
    // Metodo di istanza
    public double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }
}

// Serve un oggetto
Cerchio c1 = new Cerchio(5);
double area = c1.CalcolaArea();`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Metodi Static</h3>
              <p className="text-gray-300 mb-4">Appartengono alla classe. Non richiedono un'istanza.</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Matematica
{
    // Metodo static
    public static int Max(int a, int b)
    {
        return (a > b) ? a : b;
    }
    
    public static double Potenza(double x, int n)
    {
        return Math.Pow(x, n);
    }
}

// Non serve un oggetto
int massimo = Matematica.Max(10, 20);
double pot = Matematica.Potenza(2, 3);`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Sistema di Gioco con Utility</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class GameUtils
{
    private static Random random = new Random();
    
    // Metodi static - utility condivise
    public static int LanciaDado()
    {
        return random.Next(1, 7);
    }
    
    public static int CalcolaDanno(int attacco, int difesa)
    {
        int danno = attacco - difesa;
        return danno > 0 ? danno : 0;
    }
    
    public static string GeneraID()
    {
        return Guid.NewGuid().ToString();
    }
}

// Utilizzo senza creare oggetti
int dado = GameUtils.LanciaDado();
int danno = GameUtils.CalcolaDanno(50, 20);
string id = GameUtils.GeneraID();`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 21 - Incapsulamento
    {
      title: "Incapsulamento",
      subtitle: "Nascondere i dettagli implementativi",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cos'è l'Incapsulamento?</h3>
            <p className="text-lg text-gray-300">L'incapsulamento è il principio di <span className="text-blue-400 font-semibold">nascondere</span> i dettagli interni di un oggetto e fornire solo un'<span className="text-blue-400 font-semibold">interfaccia pubblica</span> controllata per interagire con esso.</p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30">
              <Lock className="w-8 h-8 mb-2 text-cyan-400" />
              <h4 className="font-bold text-cyan-300 mb-2">Information Hiding</h4>
              <p className="text-sm text-gray-300">Dettagli interni nascosti</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
              <Eye className="w-8 h-8 mb-2 text-blue-400" />
              <h4 className="font-bold text-blue-300 mb-2">Interfaccia Pubblica</h4>
              <p className="text-sm text-gray-300">Accesso controllato</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30">
              <Code className="w-8 h-8 mb-2 text-cyan-400" />
              <h4 className="font-bold text-cyan-300 mb-2">Validazione</h4>
              <p className="text-sm text-gray-300">Controllo dei dati</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-4 rounded-xl border-l-4 border-red-400">
              <h4 className="font-bold text-red-300 mb-3">❌ Senza Incapsulamento</h4>
              <div className="bg-gray-900 p-3 rounded-lg font-mono text-xs">
                <pre className="text-gray-300">
{`public class Motore
{
    public int giri;  // Pubblico!
    public double temperatura;
    
    public void Accelera()
    {
        giri += 1000;
    }
}

// PROBLEMA: accesso diretto
Motore m = new Motore();
m.giri = 15000;  // PERICOLOSO!
m.temperatura = 999;  // BOOM!`}
                </pre>
              </div>
            </div>

            <div className="bg-green-900/20 p-4 rounded-xl border-l-4 border-green-400">
              <h4 className="font-bold text-green-300 mb-3">✅ Con Incapsulamento</h4>
              <div className="bg-gray-900 p-3 rounded-lg font-mono text-xs">
                <pre className="text-gray-300">
{`public class Motore
{
    private int giri;  // Privato!
    private double temperatura;
    
    public void Accelera()
    {
        if(giri < 6000)
            giri += 1000;
    }
    
    public int GetGiri() { return giri; }
}

// Accesso controllato
Motore m = new Motore();
m.Accelera();  // OK
// m.giri = 15000;  // ERRORE!`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 22 - Vantaggi Incapsulamento
    {
      title: "Vantaggi dell'Incapsulamento",
      subtitle: "Perché è importante?",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">1. Protezione dei Dati</h3>
              <p className="text-gray-300 mb-4">Previene modifiche accidentali o dannose</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Password
{
    private string hash;
    
    public void ImpostaPassword(string pwd)
    {
        // Validazione
        if(pwd.Length >= 8)
            hash = CalcolaHash(pwd);
    }
    
    // Non espone mai la password!
    public bool Verifica(string pwd)
    {
        return hash == CalcolaHash(pwd);
    }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">2. Flessibilità</h3>
              <p className="text-gray-300 mb-4">Cambiare implementazione senza rompere il codice esterno</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Cache
{
    // Posso cambiare da array a Dictionary
    // senza impattare chi usa la classe
    private Dictionary<string, object> data;
    
    public void Salva(string key, object val)
    {
        data[key] = val;
    }
    
    public object Recupera(string key)
    {
        return data.ContainsKey(key) 
            ? data[key] : null;
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">3. Manutenibilità</h3>
              <p className="text-gray-300">Codice più facile da mantenere e debuggare</p>
            </div>
            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">4. Controllo</h3>
              <p className="text-gray-300">Validazione e invarianti garantiti</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Analogia: Automobile</h4>
            <p className="text-lg text-gray-300">Quando guidi un'auto, non hai accesso diretto al motore. Usi solo i comandi (volante, pedali, cambio). L'auto <span className="text-blue-400 font-semibold">incapsula</span> la complessità del motore e ti offre un'<span className="text-cyan-400 font-semibold">interfaccia semplice</span>.</p>
          </div>
        </div>
      )
    },

    // Slide 23 - Incapsulamento in Pratica
    {
      title: "Incapsulamento in Pratica",
      subtitle: "Esempio completo: Sistema Bancario",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class ContoBancario
{
    // Attributi privati - nascosti dall'esterno
    private string numeroConto;
    private string intestatario;
    private double saldo;
    private List<string> movimenti;
    private bool bloccato;
    
    // Costruttore
    public ContoBancario(string numero, string intestatario)
    {
        this.numeroConto = numero;
        this.intestatario = intestatario;
        this.saldo = 0;
        this.movimenti = new List<string>();
        this.bloccato = false;
    }
    
    // Interfaccia pubblica controllata
    public bool Deposita(double importo)
    {
        if(bloccato) return false;
        
        if(importo > 0)
        {
            saldo += importo;
            movimenti.Add($"DEPOSITO: +{importo:C}");
            return true;
        }
        return false;
    }
    
    public bool Preleva(double importo)
    {
        if(bloccato) return false;
        
        if(importo > 0 && saldo >= importo)
        {
            saldo -= importo;
            movimenti.Add($"PRELIEVO: -{importo:C}");
            return true;
        }
        return false;
    }
    
    // Accesso in sola lettura al saldo
    public double GetSaldo()
    {
        return bloccato ? 0 : saldo;
    }
    
    public void BloccaConto()
    {
        bloccato = true;
    }
    
    public void SbloccaConto(string pin)
    {
        // Validazione PIN
        if(VerificaPIN(pin))
            bloccato = false;
    }
    
    // Metodo privato - logica interna
    private bool VerificaPIN(string pin)
    {
        // Logica di verifica...
        return true;
    }
}`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-bold text-green-300 mb-2">✅ Operazioni Valide</h4>
              <div className="bg-gray-900 p-3 rounded font-mono text-xs">
                <pre className="text-gray-300">
{`ContoBancario conto = new ContoBancario("12345", "Mario Rossi");
conto.Deposita(1000);
conto.Preleva(200);
double saldo = conto.GetSaldo();`}
                </pre>
              </div>
            </div>
            <div className="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-bold text-red-300 mb-2">❌ Operazioni Bloccate</h4>
              <div className="bg-gray-900 p-3 rounded font-mono text-xs">
                <pre className="text-gray-300">
{`// ERRORE - attributi privati!
conto.saldo = 99999999;
conto.bloccato = false;
conto.movimenti.Clear();`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 24 - Modificatori di Visibilità
    {
      title: "Modificatori di Visibilità",
      subtitle: "Controllare l'accesso ai membri della classe",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Access Modifiers in C#</h3>
            <p className="text-lg text-gray-300">I modificatori di visibilità determinano <span className="text-blue-400 font-semibold">chi può accedere</span> agli attributi e metodi di una classe.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="font-bold text-green-300 mb-2 flex items-center">
                  <span className="text-2xl mr-2">+</span> public
                </h4>
                <p className="text-gray-300">Accessibile da qualsiasi codice</p>
              </div>

              <div className="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-bold text-red-300 mb-2 flex items-center">
                  <span className="text-2xl mr-2">-</span> private
                </h4>
                <p className="text-gray-300">Accessibile solo dalla classe stessa</p>
              </div>

              <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="font-bold text-yellow-300 mb-2 flex items-center">
                  <span className="text-2xl mr-2">#</span> protected
                </h4>
                <p className="text-gray-300">Accessibile dalla classe e dalle classi derivate</p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                  <span className="text-2xl mr-2">~</span> internal
                </h4>
                <p className="text-gray-300">Accessibile solo nello stesso assembly</p>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
              <h4 className="text-lg font-bold mb-4 text-cyan-300">Notazione UML</h4>
              <svg width="100%" height="300" className="bg-gray-800/30 rounded-lg">
                <rect x="20" y="10" width="280" height="270" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
                <text x="30" y="35" fill="#93c5fd" fontSize="18" fontWeight="bold">Classe</text>
                <line x1="20" y1="45" x2="300" y2="45" stroke="#60a5fa" strokeWidth="2"/>
                
                <text x="30" y="70" fill="#4ade80" fontSize="16">+ pubblico: int</text>
                <text x="30" y="95" fill="#ef4444" fontSize="16">- privato: string</text>
                <text x="30" y="120" fill="#fbbf24" fontSize="16"># protetto: double</text>
                <text x="30" y="145" fill="#60a5fa" fontSize="16">~ internal: bool</text>
                
                <line x1="20" y1="160" x2="300" y2="160" stroke="#60a5fa" strokeWidth="2"/>
                
                <text x="30" y="185" fill="#4ade80" fontSize="16">+ MetodoPublic()</text>
                <text x="30" y="210" fill="#ef4444" fontSize="16">- MetodoPrivate()</text>
                <text x="30" y="235" fill="#fbbf24" fontSize="16"># MetodoProtected()</text>
                <text x="30" y="260" fill="#60a5fa" fontSize="16">~ MetodoInternal()</text>
              </svg>
            </div>
          </div>
        </div>
      )
    },

    // Slide 25 - Esempi Visibilità
    {
      title: "Visibilità in Pratica",
      subtitle: "Esempi di utilizzo dei modificatori",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio: Sistema di Autenticazione</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Utente
{
    // public - accessibile ovunque
    public string Username { get; set; }
    public DateTime UltimoAccesso { get; set; }
    
    // private - solo nella classe Utente
    private string passwordHash;
    private string salt;
    
    // protected - accessibile nelle classi derivate
    protected int tentativiAccesso;
    protected bool accountBloccato;
    
    // internal - accessibile nello stesso assembly/progetto
    internal int IdDatabase { get; set; }
    
    // Costruttore pubblico
    public Utente(string username, string password)
    {
        Username = username;
        ImpostaPassword(password);
        tentativiAccesso = 0;
        accountBloccato = false;
    }
    
    // Metodo pubblico
    public bool Login(string password)
    {
        if(accountBloccato) return false;
        
        if(VerificaPassword(password))
        {
            UltimoAccesso = DateTime.Now;
            tentativiAccesso = 0;
            return true;
        }
        else
        {
            tentativiAccesso++;
            if(tentativiAccesso >= 3)
                BloccaAccount();
            return false;
        }
    }
    
    // Metodo privato - logica interna
    private void ImpostaPassword(string password)
    {
        salt = GeneraSalt();
        passwordHash = CalcolaHash(password + salt);
    }
    
    private bool VerificaPassword(string password)
    {
        return passwordHash == CalcolaHash(password + salt);
    }
    
    private string GeneraSalt()
    {
        return Guid.NewGuid().ToString();
    }
    
    private string CalcolaHash(string input)
    {
        // Simulazione hash
        return input.GetHashCode().ToString();
    }
    
    // Metodo protected - disponibile per classi derivate
    protected void BloccaAccount()
    {
        accountBloccato = true;
    }
}`}
              </pre>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-900/20 p-4 rounded-lg border-l-4 border-green-400">
              <h4 className="font-bold text-green-300 mb-2">✅ Accesso Esterno</h4>
              <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                <pre className="text-gray-300">{`Utente u = new Utente("mario", "pass123");
u.Login("pass123");
Console.WriteLine(u.Username);`}</pre>
              </div>
            </div>
            <div className="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-bold text-red-300 mb-2">❌ Private</h4>
              <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                <pre className="text-gray-300">{`// ERRORE!
u.passwordHash = "hack";
u.ImpostaPassword("new");`}</pre>
              </div>
            </div>
            <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
              <h4 className="font-bold text-yellow-300 mb-2">⚠️ Protected</h4>
              <div className="bg-gray-900 p-2 rounded font-mono text-xs">
                <pre className="text-gray-300">{`// Solo nelle classi derivate
class Admin : Utente
{
    void Reset() {
        tentativiAccesso = 0;
    }
}`}</pre>
              </div>
            </div>
          </div>
        </div>
      )
    },

    // Slide 26 - Best Practices Visibilità
    {
      title: "Best Practices per la Visibilità",
      subtitle: "Linee guida per un buon design",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Principio del Minimo Privilegio</h3>
              <p className="text-gray-300 mb-4">Usa sempre il livello di visibilità <strong>più restrittivo</strong> possibile.</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">1.</span>
                  <span>Parti sempre da <code className="text-red-400">private</code></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">2.</span>
                  <span>Passa a <code className="text-yellow-400">protected</code> se serve l'ereditarietà</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">3.</span>
                  <span>Usa <code className="text-green-400">public</code> solo per l'interfaccia esterna</span>
                </li>
              </ul>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Regole Generali</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span><strong>Attributi:</strong> sempre private</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span><strong>Properties:</strong> public se necessario</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span><strong>Metodi helper:</strong> private</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span><strong>API pubblica:</strong> minima e stabile</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400">
              <h3 className="text-xl font-bold mb-4 text-red-300">❌ Cattive Pratiche</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class ProdottoBad
{
    // MALE: tutto pubblico!
    public double prezzo;
    public int giacenza;
    public string id;
    
    public void CalcolaSconto()
    {
        prezzo = prezzo * 0.9;
    }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-bold mb-4 text-green-300">✅ Buone Pratiche</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class ProdottoGood
{
    // BENE: incapsulamento
    private double prezzo;
    private int giacenza;
    private string id;
    
    public double Prezzo 
    { 
        get { return prezzo; }
    }
    
    public void ApplicaSconto(double perc)
    {
        if(perc > 0 && perc <= 100)
            prezzo *= (1 - perc/100);
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-4 rounded-xl">
            <p className="text-lg text-gray-300"><strong className="text-blue-300">Ricorda:</strong> Una volta che rendi qualcosa <code className="text-green-400">public</code>, non puoi più cambiarlo senza rompere il codice che lo usa!</p>
          </div>
        </div>
      )
    },

    // Slide 27 - Ereditarietà Introduzione
    {
      title: "Ereditarietà",
      subtitle: "Riutilizzo e gerarchie di classi",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cos'è l'Ereditarietà?</h3>
            <p className="text-lg text-gray-300">L'ereditarietà permette di creare una nuova classe (<span className="text-blue-400 font-semibold">classe derivata</span> o <span className="text-blue-400 font-semibold">sottoclasse</span>) basandosi su una classe esistente (<span className="text-cyan-400 font-semibold">classe base</span> o <span className="text-cyan-400 font-semibold">superclasse</span>), <span className="text-blue-400 font-semibold">ereditando</span> i suoi attributi e metodi.</p>
          </div>

          <div className="flex justify-center my-6">
            <svg width="600" height="300" className="bg-gray-800/30 rounded-xl p-4">
              {/* Classe base */}
              <rect x="220" y="20" width="160" height="100" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="3" rx="6"/>
              <text x="300" y="50" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Veicolo</text>
              <line x1="220" y1="60" x2="380" y2="60" stroke="#60a5fa" strokeWidth="2"/>
              <text x="230" y="80" fill="#d1d5db" fontSize="14">- marca: string</text>
              <text x="230" y="100" fill="#d1d5db" fontSize="14">+ Avvia(): void</text>
              
              {/* Frecce */}
              <line x1="150" y1="170" x2="270" y2="120" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrowblue)"/>
              <line x1="450" y1="170" x2="330" y2="120" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrowblue)"/>
              
              {/* Classi derivate */}
              <rect x="50" y="170" width="160" height="100" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="3" rx="6"/>
              <text x="130" y="200" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Auto</text>
              <line x1="50" y1="210" x2="210" y2="210" stroke="#06b6d4" strokeWidth="2"/>
              <text x="60" y="230" fill="#d1d5db" fontSize="14">- numPorte: int</text>
              <text x="60" y="250" fill="#d1d5db" fontSize="14">+ Clacson(): void</text>
              
              <rect x="370" y="170" width="160" height="100" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="3" rx="6"/>
              <text x="450" y="200" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Moto</text>
              <line x1="370" y1="210" x2="530" y2="210" stroke="#06b6d4" strokeWidth="2"/>
              <text x="380" y="230" fill="#d1d5db" fontSize="14">- cilindrata: int</text>
              <text x="380" y="250" fill="#d1d5db" fontSize="14">+ Impennata(): void</text>
              
              {/* Marker for arrow */}
              <defs>
                <marker id="arrowblue" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
                </marker>
              </defs>
            </svg>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30">
              <h4 className="font-bold text-cyan-300 mb-2">🔄 Riuso del Codice</h4>
              <p className="text-sm text-gray-300">Evita duplicazioni</p>
            </div>
            <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-500/30">
              <h4 className="font-bold text-blue-300 mb-2">📊 Gerarchie</h4>
              <p className="text-sm text-gray-300">Organizzazione logica</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-lg border border-cyan-500/30">
              <h4 className="font-bold text-cyan-300 mb-2">🔧 Estensibilità</h4>
              <p className="text-sm text-gray-300">Facilita l'espansione</p>
            </div>
          </div>
        </div>
      )
    },

    // Slide 28 - Sintassi Ereditarietà
    {
      title: "Sintassi dell'Ereditarietà in C#",
      subtitle: "Come creare classi derivate",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Sintassi Base</h3>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`public class ClasseDerivata : ClasseBase
{
    // Membri aggiuntivi della classe derivata
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-xl font-bold mb-4 text-cyan-300">Esempio: Animali</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`// Classe base
public class Animale
{
    protected string nome;
    protected int eta;
    
    public Animale(string nome, int eta)
    {
        this.nome = nome;
        this.eta = eta;
    }
    
    public void Mangia()
    {
        Console.WriteLine(nome + " sta mangiando");
    }
    
    public void Dormi()
    {
        Console.WriteLine(nome + " sta dormendo");
    }
}

// Classe derivata - Cane
public class Cane : Animale
{
    private string razza;
    
    public Cane(string nome, int eta, string razza) : base(nome, eta)
    {
        this.razza = razza;
    }
    
    public void Abbaia()
    {
        Console.WriteLine(nome + " fa: BAU BAU!");
    }
}

// Classe derivata - Gatto
public class Gatto : Animale
{
    private string colore;
    
    public Gatto(string nome, int eta, string colore) : base(nome, eta)
    {
        this.colore = colore;
    }
    
    public void Miagola()
    {
        Console.WriteLine(nome + " fa: MIAO!");
    }
}

// Utilizzo
Cane rex = new Cane("Rex", 5, "Labrador");
rex.Mangia();    // Ereditato da Animale
rex.Abbaia();    // Specifico di Cane

Gatto felix = new Gatto("Felix", 3, "Nero");
felix.Dormi();   // Ereditato da Animale
felix.Miagola(); // Specifico di Gatto`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 29 - base keyword e override
    {
      title: "Keyword 'base' e 'override'",
      subtitle: "Interazione con la classe base",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Keyword 'base'</h3>
              <p className="text-gray-300 mb-4">Accede a membri della classe base</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Studente : Persona
{
    private string matricola;
    
    public Studente(string nome, int eta, string matr) 
        : base(nome, eta)  // Chiama costruttore base
    {
        matricola = matr;
    }
    
    public void Info()
    {
        base.Presenta();  // Chiama metodo base
        Console.WriteLine("Matricola: " + matricola);
    }
}`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">virtual e override</h3>
              <p className="text-gray-300 mb-4">Ridefinire metodi della classe base</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Forma
{
    public virtual double CalcolaArea()
    {
        return 0;
    }
}

public class Cerchio : Forma
{
    private double raggio;
    
    public override double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio Completo: Dipendenti Azienda</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Dipendente
{
    protected string nome;
    protected double stipendioBase;
    
    public Dipendente(string nome, double stipendio)
    {
        this.nome = nome;
        this.stipendioBase = stipendio;
    }
    
    public virtual double CalcolaStipendio()
    {
        return stipendioBase;
    }
    
    public virtual void StampaInfo()
    {
        Console.WriteLine($"Dipendente: {nome}");
        Console.WriteLine($"Stipendio: {CalcolaStipendio():C}");
    }
}

public class Manager : Dipendente
{
    private double bonus;
    
    public Manager(string nome, double stipendio, double bonus) 
        : base(nome, stipendio)
    {
        this.bonus = bonus;
    }
    
    public override double CalcolaStipendio()
    {
        return base.CalcolaStipendio() + bonus;  // Usa base + bonus
    }
    
    public override void StampaInfo()
    {
        base.StampaInfo();  // Chiama versione base
        Console.WriteLine($"Bonus: {bonus:C}");
    }
}

// Utilizzo
Dipendente d = new Dipendente("Mario", 2000);
d.StampaInfo();  // Stipendio: 2000

Manager m = new Manager("Luigi", 3000, 500);
m.StampaInfo();  // Stipendio: 3500 (base + bonus)`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 30 - Ereditarietà Multipla
    {
      title: "Ereditarietà in C#",
      subtitle: "Limitazioni e alternative",
      content: (
        <div className="space-y-6">
          <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400">
            <h3 className="text-2xl font-bold mb-4 text-red-300">⚠️ C# NON supporta ereditarietà multipla</h3>
            <p className="text-lg text-gray-300">Una classe può ereditare da <strong>una sola</strong> classe base, ma può implementare <strong>multiple interfacce</strong>.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-900/20 p-6 rounded-xl border-l-4 border-red-400">
              <h3 className="text-xl font-bold mb-4 text-red-300">❌ NON Valido</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`// ERRORE! Non è possibile in C#
public class Anfibio : Terrestre, Acquatico
{
    // ...
}`}
                </pre>
              </div>
            </div>

            <div className="bg-green-900/20 p-6 rounded-xl border-l-4 border-green-400">
              <h3 className="text-xl font-bold mb-4 text-green-300">✅ Valido</h3>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`// OK: una classe + interfacce
public class Anfibio : Animale, IAcquatico, ITerrestre
{
    // Implementa interfacce
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Catena di Ereditarietà</h3>
            <p className="text-gray-300 mb-4">È possibile creare gerarchie multi-livello</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
              <pre className="text-gray-300">
{`public class Veicolo 
{ 
    protected int numeroRuote; 
}

public class VeicoloAMotore : Veicolo 
{ 
    protected int cilindrata; 
}

public class Automobile : VeicoloAMotore 
{ 
    private int numeroPorte; 
}

// Automobile eredita da VeicoloAMotore
// che eredita da Veicolo`}
              </pre>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <svg width="500" height="250" className="bg-gray-800/30 rounded-xl p-4">
              {/* Livello 1 */}
              <rect x="170" y="10" width="160" height="50" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="250" y="40" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Veicolo</text>
              
              {/* Freccia */}
              <line x1="250" y1="60" x2="250" y2="90" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrow2)"/>
              
              {/* Livello 2 */}
              <rect x="170" y="90" width="160" height="50" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
              <text x="250" y="120" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">VeicoloAMotore</text>
              
              {/* Freccia */}
              <line x1="250" y1="140" x2="250" y2="170" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrow2)"/>
              
              {/* Livello 3 */}
              <rect x="170" y="170" width="160" height="50" fill="#083344" stroke="#06b6d4" strokeWidth="2" rx="4"/>
              <text x="250" y="200" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Automobile</text>
              
              <defs>
                <marker id="arrow2" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                  <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
                </marker>
              </defs>
            </svg>
          </div>
        </div>
      )
    },

    // Slide 31 - Esempio Pratico Ereditarietà
    {
      title: "Esempio Pratico: Sistema di Gioco RPG",
      subtitle: "Gerarchia di personaggi",
      content: (
        <div className="space-y-6">
          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`// Classe base
public class Personaggio
{
    protected string nome;
    protected int puntiVita;
    protected int livello;
    protected int forza;
    
    public Personaggio(string nome)
    {
        this.nome = nome;
        this.puntiVita = 100;
        this.livello = 1;
        this.forza = 10;
    }
    
    public virtual int Attacca()
    {
        return forza;
    }
    
    public void RiceviDanno(int danno)
    {
        puntiVita -= danno;
        if(puntiVita < 0) puntiVita = 0;
    }
    
    public virtual void StampaInfo()
    {
        Console.WriteLine($"Nome: {nome}, Vita: {puntiVita}, Livello: {livello}");
    }
}

// Classe derivata - Guerriero
public class Guerriero : Personaggio
{
    private int armatura;
    private string tipoArma;
    
    public Guerriero(string nome, string arma) : base(nome)
    {
        tipoArma = arma;
        armatura = 20;
        forza = 15;  // Più forte della base
    }
    
    public override int Attacca()
    {
        int dannoBase = base.Attacca();
        int bonusArma = 10;
        return dannoBase + bonusArma;
    }
    
    public void Difendi()
    {
        Console.WriteLine($"{nome} si difende con armatura {armatura}");
    }
    
    public override void StampaInfo()
    {
        base.StampaInfo();
        Console.WriteLine($"Classe: Guerriero, Arma: {tipoArma}, Armatura: {armatura}");
    }
}

// Classe derivata - Mago
public class Mago : Personaggio
{
    private int mana;
    private string[] incantesimi;
    
    public Mago(string nome) : base(nome)
    {
        mana = 100;
        forza = 5;  // Meno forte fisicamente
        incantesimi = new string[] { "Palla di Fuoco", "Fulmine", "Gelo" };
    }
    
    public override int Attacca()
    {
        if(mana >= 20)
        {
            mana -= 20;
            return forza * 3;  // Attacco magico potente
        }
        return base.Attacca();  // Attacco base se senza mana
    }
    
    public void LanciaIncantesimo(int index)
    {
        if(mana >= 30 && index < incantesimi.Length)
        {
            mana -= 30;
            Console.WriteLine($"{nome} lancia {incantesimi[index]}!");
        }
    }
    
    public override void StampaInfo()
    {
        base.StampaInfo();
        Console.WriteLine($"Classe: Mago, Mana: {mana}");
    }
}

// Utilizzo
Guerriero conan = new Guerriero("Conan", "Spada Grande");
Mago merlin = new Mago("Merlin");

conan.StampaInfo();
int danno1 = conan.Attacca();
conan.Difendi();

merlin.StampaInfo();
merlin.LanciaIncantesimo(0);
int danno2 = merlin.Attacca();`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 32 - Polimorfismo Introduzione
    {
      title: "Polimorfismo",
      subtitle: "Un'interfaccia, molte forme",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cos'è il Polimorfismo?</h3>
            <p className="text-lg text-gray-300">Il polimorfismo (dal greco "molte forme") è la capacità di oggetti di <span className="text-blue-400 font-semibold">classi diverse</span> di rispondere allo <span className="text-blue-400 font-semibold">stesso messaggio</span> (metodo) in modi diversi.</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Vantaggi</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Codice più flessibile e riutilizzabile</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Facilita l'estensione del sistema</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Riduce l'accoppiamento tra classi</span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">✓</span>
                  <span>Supporta il principio Open/Closed</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-lg font-bold mb-4 text-blue-300">Esempio Semplice</h4>
              <div className="font-mono text-sm">
                <pre className="text-gray-300">
{`public class Forma
{
    public virtual void Disegna()
    {
        Console.WriteLine("Disegno forma");
    }
}

public class Cerchio : Forma
{
    public override void Disegna()
    {
        Console.WriteLine("Disegno cerchio ○");
    }
}

public class Quadrato : Forma
{
    public override void Disegna()
    {
        Console.WriteLine("Disegno quadrato □");
    }
}

// Polimorfismo in azione!
Forma f1 = new Cerchio();
Forma f2 = new Quadrato();

f1.Disegna();  // "Disegno cerchio ○"
f2.Disegna();  // "Disegno quadrato □"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Analogia: Remote Control Universale</h4>
            <p className="text-lg text-gray-300">Premi "Play" su un telecomando universale: la TV riproduce il programma, il lettore DVD avvia il film, lo stereo suona la musica. <span className="text-blue-400 font-semibold">Stesso comando, risultati diversi</span> in base al dispositivo!</p>
          </div>
        </div>
      )
    },

    // Slide 33 - Polimorfismo Compile-time vs Runtime
    {
      title: "Tipi di Polimorfismo",
      subtitle: "Compile-time e Runtime",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Polimorfismo Compile-Time</h3>
              <p className="text-gray-300 mb-4"><strong>Method Overloading</strong> - Risolto durante la compilazione</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Calcolatrice
{
    // Stesso nome, parametri diversi
    public int Somma(int a, int b)
    {
        return a + b;
    }
    
    public double Somma(double a, double b)
    {
        return a + b;
    }
    
    public int Somma(int a, int b, int c)
    {
        return a + b + c;
    }
}

// Il compilatore sceglie il metodo giusto
Calcolatrice calc = new Calcolatrice();
calc.Somma(5, 3);        // int version
calc.Somma(5.5, 3.2);    // double version
calc.Somma(1, 2, 3);     // tre parametri`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Polimorfismo Runtime</h3>
              <p className="text-gray-300 mb-4"><strong>Method Overriding</strong> - Risolto durante l'esecuzione</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`public class Animale
{
    public virtual void FaiVerso()
    {
        Console.WriteLine("Verso generico");
    }
}

public class Cane : Animale
{
    public override void FaiVerso()
    {
        Console.WriteLine("BAU!");
    }
}

public class Gatto : Animale
{
    public override void FaiVerso()
    {
        Console.WriteLine("MIAO!");
    }
}

// Deciso a runtime!
Animale a1 = new Cane();
Animale a2 = new Gatto();
a1.FaiVerso();  // "BAU!"
a2.FaiVerso();  // "MIAO!"`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-200"><strong>💡 Differenza Chiave:</strong> Overloading = stesso nome, firma diversa | Overriding = stessa firma, implementazione diversa</p>
          </div>
        </div>
      )
    },

    // Slide 34 - Polimorfismo con Array
    {
      title: "Polimorfismo con Collezioni",
      subtitle: "Il vero potere del polimorfismo",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-xl font-bold mb-4 text-blue-300">Array/Liste di Tipi Base</h3>
            <p className="text-gray-300">Possiamo memorizzare oggetti di classi derivate in array/liste del tipo base!</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-xl font-bold mb-4 text-cyan-300">Esempio: Zoo Virtuale</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Animale
{
    protected string nome;
    
    public Animale(string nome)
    {
        this.nome = nome;
    }
    
    public virtual void FaiVerso()
    {
        Console.WriteLine($"{nome} fa un verso");
    }
    
    public virtual void Muoviti()
    {
        Console.WriteLine($"{nome} si muove");
    }
}

public class Leone : Animale
{
    public Leone(string nome) : base(nome) { }
    
    public override void FaiVerso()
    {
        Console.WriteLine($"{nome} ruggisce: ROAR!");
    }
    
    public override void Muoviti()
    {
        Console.WriteLine($"{nome} corre velocemente");
    }
}

public class Elefante : Animale
{
    public Elefante(string nome) : base(nome) { }
    
    public override void FaiVerso()
    {
        Console.WriteLine($"{nome} barrisce: PROOOOT!");
    }
    
    public override void Muoviti()
    {
        Console.WriteLine($"{nome} cammina pesantemente");
    }
}

public class Serpente : Animale
{
    public Serpente(string nome) : base(nome) { }
    
    public override void FaiVerso()
    {
        Console.WriteLine($"{nome} sibila: SSSSS!");
    }
    
    public override void Muoviti()
    {
        Console.WriteLine($"{nome} striscia");
    }
}

// MAGIA DEL POLIMORFISMO!
Animale[] zoo = new Animale[4];
zoo[0] = new Leone("Simba");
zoo[1] = new Elefante("Dumbo");
zoo[2] = new Serpente("Kaa");
zoo[3] = new Leone("Mufasa");

// Un ciclo, tanti comportamenti!
Console.WriteLine("=== TUTTI FANNO IL VERSO ===");
foreach(Animale animale in zoo)
{
    animale.FaiVerso();  // Chiama la versione corretta!
}

Console.WriteLine("\\n=== TUTTI SI MUOVONO ===");
foreach(Animale animale in zoo)
{
    animale.Muoviti();
}

/* Output:
=== TUTTI FANNO IL VERSO ===
Simba ruggisce: ROAR!
Dumbo barrisce: PROOOOT!
Kaa sibila: SSSSS!
Mufasa ruggisce: ROAR!

=== TUTTI SI MUOVONO ===
Simba corre velocemente
Dumbo cammina pesantemente
Kaa striscia
Mufasa corre velocemente
*/`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 35 - Casting e is/as
    {
      title: "Type Casting e Operatori is/as",
      subtitle: "Gestire i tipi derivati",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
              <h3 className="text-xl font-bold mb-4 text-blue-300">Operatore 'is'</h3>
              <p className="text-gray-300 mb-4">Verifica il tipo di un oggetto</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`Animale a = new Cane("Rex");

if(a is Cane)
{
    Console.WriteLine("È un cane!");
}

if(a is Gatto)
{
    Console.WriteLine("È un gatto!");  // Non stampa
}

// Pattern matching (C# 7+)
if(a is Cane c)
{
    c.Abbaia();  // 'c' è già Cane!
}`}
                </pre>
              </div>
            </div>

            <div className="bg-cyan-900/20 p-6 rounded-xl border-l-4 border-cyan-400">
              <h3 className="text-xl font-bold mb-4 text-cyan-300">Operatore 'as'</h3>
              <p className="text-gray-300 mb-4">Casting sicuro (ritorna null se fallisce)</p>
              <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm">
                <pre className="text-gray-300">
{`Animale a = new Cane("Rex");

Cane c = a as Cane;
if(c != null)
{
    c.Abbaia();  // Sicuro!
}

Gatto g = a as Gatto;
if(g != null)  // g è null
{
    g.Miagola();  // Non eseguito
}
else
{
    Console.WriteLine("Non è un gatto");
}`}
                </pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Esempio Pratico: Sistema di Negozio</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Prodotto
{
    public string Nome { get; set; }
    public double Prezzo { get; set; }
}

public class Elettronica : Prodotto
{
    public int Garanzia { get; set; }  // In mesi
    
    public void EstendiGaranzia()
    {
        Garanzia += 12;
    }
}

public class Alimentare : Prodotto
{
    public DateTime Scadenza { get; set; }
    
    public bool IsScaduto()
    {
        return DateTime.Now > Scadenza;
    }
}

// Lista eterogenea
List<Prodotto> carrello = new List<Prodotto>
{
    new Elettronica { Nome = "Laptop", Prezzo = 999, Garanzia = 24 },
    new Alimentare { Nome = "Latte", Prezzo = 1.5, Scadenza = DateTime.Now.AddDays(7) },
    new Elettronica { Nome = "Mouse", Prezzo = 25, Garanzia = 12 }
};

// Elaborazione con polimorfismo + casting
foreach(Prodotto p in carrello)
{
    Console.WriteLine($"Prodotto: {p.Nome} - {p.Prezzo:C}");
    
    // Azioni specifiche per tipo
    if(p is Elettronica elettronico)
    {
        Console.WriteLine($"  Garanzia: {elettronico.Garanzia} mesi");
        if(elettronico.Garanzia < 24)
            elettronico.EstendiGaranzia();
    }
    
    if(p is Alimentare cibo)
    {
        Console.WriteLine($"  Scadenza: {cibo.Scadenza:dd/MM/yyyy}");
        if(cibo.IsScaduto())
            Console.WriteLine("  ⚠️ PRODOTTO SCADUTO!");
    }
}`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 36 - Associazioni Introduzione
    {
      title: "Associazioni tra Classi",
      subtitle: "Come gli oggetti si relazionano",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Cos'è un'Associazione?</h3>
            <p className="text-lg text-gray-300">Un'associazione rappresenta una <span className="text-blue-400 font-semibold">relazione</span> tra due o più classi. Gli oggetti di una classe <span className="text-blue-400 font-semibold">conoscono e interagiscono</span> con oggetti di un'altra classe.</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-500/30">
              <Link2 className="w-10 h-10 mb-3 text-cyan-400" />
              <h4 className="font-bold text-cyan-300 mb-2">Associazione Semplice</h4>
              <p className="text-sm text-gray-300">Relazione generica tra classi</p>
            </div>
            <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-500/30">
              <Box className="w-10 h-10 mb-3 text-blue-400" />
              <h4 className="font-bold text-blue-300 mb-2">Aggregazione</h4>
              <p className="text-sm text-gray-300">Relazione "ha un" (debole)</p>
            </div>
            <div className="bg-cyan-900/30 p-6 rounded-lg border border-cyan-500/30">
              <Layers className="w-10 h-10 mb-3 text-cyan-400" />
              <h4 className="font-bold text-cyan-300 mb-2">Composizione</h4>
              <p className="text-sm text-gray-300">Relazione "parte di" (forte)</p>
            </div>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
            <h4 className="text-xl font-bold mb-4 text-blue-300">Cardinalità delle Associazioni</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="text-cyan-300 font-bold mb-2">1 a 1 (Uno-a-Uno)</p>
                <p className="text-gray-300">Persona ↔ PassaportoPersona</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="text-cyan-300 font-bold mb-2">1 a N (Uno-a-Molti)</p>
                <p className="text-gray-300">Squadra ↔ Giocatori</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="text-cyan-300 font-bold mb-2">N a 1 (Molti-a-Uno)</p>
                <p className="text-gray-300">Studenti ↔ Università</p>
              </div>
              <div className="bg-gray-800/50 p-4 rounded">
                <p className="text-cyan-300 font-bold mb-2">N a M (Molti-a-Molti)</p>
                <p className="text-gray-300">Studenti ↔ Corsi</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <svg width="600" height="120" className="bg-gray-800/30 rounded-xl p-4">
              {/* Associazione semplice */}
              <rect x="20" y="30" width="120" height="60" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="80" y="65" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Studente</text>
              
              <line x1="140" y1="60" x2="260" y2="60" stroke="#22d3ee" strokeWidth="2"/>
              <text x="200" y="50" textAnchor="middle" fill="#93c5fd" fontSize="12">frequenta</text>
              
              <rect x="260" y="30" width="120" height="60" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="320" y="65" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">Corso</text>
              
              <text x="145" y="80" fill="#93c5fd" fontSize="11">*</text>
              <text x="370" y="80" fill="#93c5fd" fontSize="11">*</text>
            </svg>
          </div>
        </div>
      )
    },

    // Slide 37 - Aggregazione
    {
      title: "Aggregazione",
      subtitle: "Relazione 'ha un' (has-a) debole",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Aggregazione</h3>
            <p className="text-lg text-gray-300">L'aggregazione indica che una classe <span className="text-blue-400 font-semibold">"ha un"</span> oggetto di un'altra classe, ma gli oggetti hanno <span className="text-blue-400 font-semibold">vita indipendente</span>. Se il contenitore viene distrutto, gli oggetti contenuti possono continuare a esistere.</p>
          </div>

          <div className="flex justify-center mb-6">
            <svg width="500" height="100" className="bg-gray-800/30 rounded-xl p-4">
              <rect x="50" y="20" width="140" height="60" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="120" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Squadra</text>
              
              {/* Linea aggregazione (rombo vuoto) */}
              <line x1="190" y1="50" x2="290" y2="50" stroke="#22d3ee" strokeWidth="2"/>
              <path d="M 190,50 L 200,45 L 210,50 L 200,55 Z" fill="none" stroke="#22d3ee" strokeWidth="2"/>
              
              <rect x="290" y="20" width="140" height="60" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="360" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Giocatore</text>
              
              <text x="235" y="40" textAnchor="middle" fill="#93c5fd" fontSize="12">composta da</text>
            </svg>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-xl font-bold mb-4 text-cyan-300">Esempio: Squadra e Giocatori</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Giocatore
{
    public string Nome { get; set; }
    public int Numero { get; set; }
    public string Ruolo { get; set; }
    
    public Giocatore(string nome, int numero, string ruolo)
    {
        Nome = nome;
        Numero = numero;
        Ruolo = ruolo;
    }
    
    public void StampaInfo()
    {
        Console.WriteLine($"#{Numero} {Nome} - {Ruolo}");
    }
}

public class Squadra
{
    public string Nome { get; set; }
    private List<Giocatore> giocatori;  // AGGREGAZIONE
    
    public Squadra(string nome)
    {
        Nome = nome;
        giocatori = new List<Giocatore>();
    }
    
    // Aggiungi giocatore esistente
    public void AggiungiGiocatore(Giocatore g)
    {
        giocatori.Add(g);
    }
    
    public void RimuoviGiocatore(Giocatore g)
    {
        giocatori.Remove(g);
    }
    
    public void StampaRosa()
    {
        Console.WriteLine($"\\n=== SQUADRA: {Nome} ===");
        foreach(var g in giocatori)
        {
            g.StampaInfo();
        }
    }
}

// Utilizzo - I giocatori esistono indipendentemente
Giocatore g1 = new Giocatore("Mario Rossi", 10, "Attaccante");
Giocatore g2 = new Giocatore("Luigi Verdi", 5, "Difensore");
Giocatore g3 = new Giocatore("Anna Bianchi", 7, "Centrocampista");

Squadra squadraA = new Squadra("Aquile");
squadraA.AggiungiGiocatore(g1);
squadraA.AggiungiGiocatore(g2);

Squadra squadraB = new Squadra("Leoni");
squadraB.AggiungiGiocatore(g3);

squadraA.StampaRosa();
squadraB.StampaRosa();

// Se elimino squadraA, i giocatori esistono ancora
squadraA = null;
g1.StampaInfo();  // Mario Rossi esiste ancora!`}
              </pre>
            </div>
          </div>
        </div>
      )
    },

    // Slide 38 - Composizione
    {
      title: "Composizione",
      subtitle: "Relazione 'parte di' forte",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Composizione</h3>
            <p className="text-lg text-gray-300">La composizione è una forma <span className="text-blue-400 font-semibold">forte</span> di aggregazione dove gli oggetti contenuti <span className="text-blue-400 font-semibold">non possono esistere</span> senza il contenitore. Se il contenitore viene distrutto, anche le parti vengono distrutte.</p>
          </div>

          <div className="flex justify-center mb-6">
            <svg width="500" height="100" className="bg-gray-800/30 rounded-xl p-4">
              <rect x="50" y="20" width="140" height="60" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="120" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Automobile</text>
              
              {/* Linea composizione (rombo pieno) */}
              <line x1="190" y1="50" x2="290" y2="50" stroke="#22d3ee" strokeWidth="2"/>
              <path d="M 190,50 L 200,45 L 210,50 L 200,55 Z" fill="#22d3ee" stroke="#22d3ee" strokeWidth="2"/>
              
              <rect x="290" y="20" width="140" height="60" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="360" y="55" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">Motore</text>
              
              <text x="235" y="40" textAnchor="middle" fill="#93c5fd" fontSize="12">composta da</text>
            </svg>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <h4 className="text-xl font-bold mb-4 text-cyan-300">Esempio: Automobile e Motore</h4>
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Motore
{
    public int Cilindrata { get; private set; }
    public int Potenza { get; private set; }
    private bool acceso;
    
    public Motore(int cilindrata, int potenza)
    {
        Cilindrata = cilindrata;
        Potenza = potenza;
        acceso = false;
    }
    
    public void Avvia()
    {
        acceso = true;
        Console.WriteLine("Motore avviato!");
    }
    
    public void Spegni()
    {
        acceso = false;
        Console.WriteLine("Motore spento");
    }
}

public class Carrozzeria
{
    public string Colore { get; set; }
    public int NumeroPorte { get; set; }
    
    public Carrozzeria(string colore, int porte)
    {
        Colore = colore;
        NumeroPorte = porte;
    }
}

public class Automobile
{
    public string Marca { get; set; }
    public string Modello { get; set; }
    
    // COMPOSIZIONE - le parti sono create internamente
    private Motore motore;
    private Carrozzeria carrozzeria;
    
    public Automobile(string marca, string modello, int cilindrata, string colore)
    {
        Marca = marca;
        Modello = modello;
        
        // Creo le parti DENTRO l'automobile
        motore = new Motore(cilindrata, 150);
        carrozzeria = new Carrozzeria(colore, 5);
    }
    
    public void Accendi()
    {
        Console.WriteLine($"Accendo {Marca} {Modello}");
        motore.Avvia();
    }
    
    public void Spegni()
    {
        motore.Spegni();
    }
    
    public void Vernicia(string nuovoColore)
    {
        carrozzeria.Colore = nuovoColore;
        Console.WriteLine($"Auto verniciata di {nuovoColore}");
    }
    
    public void StampaInfo()
    {
        Console.WriteLine($"{Marca} {Modello}");
        Console.WriteLine($"Motore: {motore.Cilindrata}cc, {motore.Potenza}CV");
        Console.WriteLine($"Carrozzeria: {carrozzeria.Colore}, {carrozzeria.NumeroPorte} porte");
    }
}

// Utilizzo
Automobile miaAuto = new Automobile("Fiat", "500", 1200, "Rosso");
miaAuto.StampaInfo();
miaAuto.Accendi();
miaAuto.Vernicia("Blu");

// Se elimino l'auto, anche motore e carrozzeria vengono eliminati
miaAuto = null;  // Tutto viene distrutto insieme!`}
              </pre>
            </div>
          </div>

          <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
            <p className="text-yellow-200"><strong>💡 Differenza chiave:</strong> Aggregazione = oggetti indipendenti | Composizione = oggetti dipendenti (creati e distrutti insieme)</p>
          </div>
        </div>
      )
    },

    // Slide 39 - Associazioni N-M
    {
      title: "Associazioni Molti-a-Molti",
      subtitle: "Studenti e Corsi",
      content: (
        <div className="space-y-6">
          <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
            <h3 className="text-2xl font-bold mb-4 text-blue-300">Associazioni N-M</h3>
            <p className="text-lg text-gray-300">Ogni studente può frequentare <span className="text-blue-400 font-semibold">più corsi</span> e ogni corso può avere <span className="text-blue-400 font-semibold">più studenti</span>.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
            <div className="font-mono text-sm">
              <pre className="text-gray-300">
{`public class Studente
{
    public string Nome { get; set; }
    public string Matricola { get; set; }
    private List<Corso> corsi;  // Uno studente ha molti corsi
    
    public Studente(string nome, string matricola)
    {
        Nome = nome;
        Matricola = matricola;
        corsi = new List<Corso>();
    }
    
    public void IscriviACorso(Corso corso)
    {
        if(!corsi.Contains(corso))
        {
            corsi.Add(corso);
            corso.AggiungiStudente(this);  // Bidirezionale!
        }
    }
    
    public void MostraCorsi()
    {
        Console.WriteLine($"\\nCorsi di {Nome}:");
        foreach(var c in corsi)
        {
            Console.WriteLine($"  - {c.Nome}");
        }
    }
}

public class Corso
{
    public string Nome { get; set; }
    public string Codice { get; set; }
    private List<Studente> studenti;  // Un corso ha molti studenti
    
    public Corso(string nome, string codice)
    {
        Nome = nome;
        Codice = codice;
        studenti = new List<Studente>();
    }
    
    public void AggiungiStudente(Studente studente)
    {
        if(!studenti.Contains(studente))
        {
            studenti.Add(studente);
        }
    }
    
    public void MostraStudenti()
    {
        Console.WriteLine($"\\nStudenti iscritti a {Nome}:");
        foreach(var s in studenti)
        {
            Console.WriteLine($"  - {s.Nome} ({s.Matricola})");
        }
    }
}

// Utilizzo
Studente s1 = new Studente("Mario Rossi", "12345");
Studente s2 = new Studente("Laura Bianchi", "12346");
Studente s3 = new Studente("Paolo Verdi", "12347");

Corso c1 = new Corso("Programmazione OOP", "INF101");
Corso c2 = new Corso("Database", "INF102");
Corso c3 = new Corso("Reti", "INF103");

// Iscrizioni (relazioni N-M)
s1.IscriviACorso(c1);
s1.IscriviACorso(c2);
s1.IscriviACorso(c3);

s2.IscriviACorso(c1);
s2.IscriviACorso(c2);

s3.IscriviACorso(c1);

// Navigazione in entrambe le direzioni
s1.MostraCorsi();      // Mario -> OOP, Database, Reti
s2.MostraCorsi();      // Laura -> OOP, Database
c1.MostraStudenti();   // OOP -> Mario, Laura, Paolo
c2.MostraStudenti();   // Database -> Mario, Laura`}
              </pre>
            </div>
          </div>

          <div className="flex justify-center">
            <svg width="600" height="180" className="bg-gray-800/30 rounded-xl p-4">
              {/* Studenti */}
              <rect x="50" y="10" width="120" height="40" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="110" y="35" textAnchor="middle" fill="white" fontSize="13">Mario</text>
              
              <rect x="50" y="70" width="120" height="40" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="110" y="95" textAnchor="middle" fill="white" fontSize="13">Laura</text>
              
              <rect x="50" y="130" width="120" height="40" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
              <text x="110" y="155" textAnchor="middle" fill="white" fontSize="13">Paolo</text>
              
              {/* Corsi */}
              <rect x="430" y="10" width="120" height="40" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
              <text x="490" y="35" textAnchor="middle" fill="white" fontSize="13">OOP</text>
              
              <rect x="430" y="70" width="120" height="40" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
              <text x="490" y="95" textAnchor="middle" fill="white" fontSize="13">Database</text>
              
              <rect x="430" y="130" width="120" height="40" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
              <text x="490" y="155" textAnchor="middle" fill="white" fontSize="13">Reti</text>
              
              {/* Linee di associazione */}
              <line x1="170" y1="30" x2="430" y2="30" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="170" y1="30" x2="430" y2="90" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="170" y1="30" x2="430" y2="150" stroke="#22d3ee" strokeWidth="2"/>
              
              <line x1="170" y1="90" x2="430" y2="30" stroke="#22d3ee" strokeWidth="2"/>
              <line x1="170" y1="90" x2="430" y2="90" stroke="#22d3ee" strokeWidth="2"/>
              
              <line x1="170" y1="150" x2="430" y2="30" stroke="#22d3ee" strokeWidth="2"/>
              
              <text x="300" y="20" textAnchor="middle" fill="#93c5fd" fontSize="11">*</text>
              <text x="415" y="20" textAnchor="middle" fill="#93c5fd" fontSize="11">*</text>
            </svg>
          </div>
        </div>
      )
    },

    // Slide 40 - Riepilogo Finale
    {
      title: "Riepilogo Programmazione ad Oggetti",
      subtitle: "I concetti fondamentali",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                  <Box className="w-6 h-6 mr-2" />
                  Classi e Oggetti
                </h4>
                <p className="text-sm text-gray-300">Template e istanze concrete</p>
              </div>

              <div className="bg-cyan-900/20 p-4 rounded-xl border-l-4 border-cyan-400">
                <h4 className="font-bold text-cyan-300 mb-2 flex items-center">
                  <Code className="w-6 h-6 mr-2" />
                  Attributi e Properties
                </h4>
                <p className="text-sm text-gray-300">Stato degli oggetti con accesso controllato</p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                  <Zap className="w-6 h-6 mr-2" />
                  Costruttori e Metodi
                </h4>
                <p className="text-sm text-gray-300">Inizializzazione e comportamento</p>
              </div>

              <div className="bg-cyan-900/20 p-4 rounded-xl border-l-4 border-cyan-400">
                <h4 className="font-bold text-cyan-300 mb-2 flex items-center">
                  <Lock className="w-6 h-6 mr-2" />
                  Incapsulamento
                </h4>
                <p className="text-sm text-gray-300">Nascondere i dettagli, proteggere i dati</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                  <Eye className="w-6 h-6 mr-2" />
                  Visibilità
                </h4>
                <p className="text-sm text-gray-300">public, private, protected, internal</p>
              </div>

              <div className="bg-cyan-900/20 p-4 rounded-xl border-l-4 border-cyan-400">
                <h4 className="font-bold text-cyan-300 mb-2 flex items-center">
                  <Layers className="w-6 h-6 mr-2" />
                  Ereditarietà
                </h4>
                <p className="text-sm text-gray-300">Riuso del codice, gerarchie IS-A</p>
              </div>

              <div className="bg-blue-900/20 p-4 rounded-xl border-l-4 border-blue-400">
                <h4 className="font-bold text-blue-300 mb-2 flex items-center">
                  <GitBranch className="w-6 h-6 mr-2" />
                  Polimorfismo
                </h4>
                <p className="text-sm text-gray-300">Un'interfaccia, molte implementazioni</p>
              </div>

              <div className="bg-cyan-900/20 p-4 rounded-xl border-l-4 border-cyan-400">
                <h4 className="font-bold text-cyan-300 mb-2 flex items-center">
                  <Link2 className="w-6 h-6 mr-2" />
                  Associazioni
                </h4>
                <p className="text-sm text-gray-300">Aggregazione, Composizione, relazioni HAS-A</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border border-blue-500/30">
            <h3 className="text-2xl font-bold mb-4 text-center text-blue-300">I 4 Pilastri della OOP</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <div className="bg-blue-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3">
                  <Lock className="w-10 h-10 text-blue-400" />
                </div>
                <p className="font-bold text-blue-300">Incapsulamento</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3">
                  <Layers className="w-10 h-10 text-cyan-400" />
                </div>
                <p className="font-bold text-cyan-300">Ereditarietà</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3">
                  <GitBranch className="w-10 h-10 text-blue-400" />
                </div>
                <p className="font-bold text-blue-300">Polimorfismo</p>
              </div>
              <div className="text-center">
                <div className="bg-cyan-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3">
                  <Box className="w-10 h-10 text-cyan-400" />
                </div>
                <p className="font-bold text-cyan-300">Astrazione</p>
              </div>
            </div>
          </div>

          <div className="text-center bg-blue-900/20 p-6 rounded-xl">
            <p className="text-2xl font-bold text-blue-300">Grazie per l'attenzione!</p>
            <p className="text-lg text-gray-300 mt-2">Buon coding! 🚀</p>
          </div>
        </div>
      )
    }
  ];

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setShowMenu(false);
  };

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const getCurrentSection = () => {
    return sections.find(section => 
      currentSlide >= section.slides[0] && currentSlide <= section.slides[section.slides.length - 1]
    ) || sections[0];
  };

  // Dashboard Component
  if (slides[currentSlide].isDashboard) {
    return (
      <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col items-center justify-center p-4 overflow-hidden">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Programmazione ad Oggetti
            </h1>
            <p className="text-2xl text-gray-300">Seleziona un argomento per iniziare</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {sections.slice(1).map((section) => {
              const Icon = section.icon;
              return (
                <button
                  key={section.id}
                  onClick={() => goToSlide(section.id)}
                  className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 hover:from-blue-800/60 hover:to-cyan-800/60 
                           border-2 border-blue-500/30 hover:border-cyan-400/50 rounded-xl p-6 
                           transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-cyan-500/20"
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white mb-2">{section.title}</h3>
                  <p className="text-sm text-gray-400">{section.slides.length} slide</p>
                </button>
              );
            })}
          </div>

          <div className="text-center">
            <button
              onClick={() => goToSlide(1)}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 
                       text-white px-8 py-4 rounded-xl font-bold text-xl shadow-xl 
                       transform hover:scale-105 transition-all duration-300"
            >
              Inizia dall'Inizio →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main Presentation View
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-b border-blue-500/30 px-6 py-3 flex items-center justify-between">
        <button
          onClick={() => goToSlide(0)}
          className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <Home className="w-5 h-5" />
          <span className="font-semibold">Dashboard</span>
        </button>

        <div className="flex items-center space-x-4">
          <span className="text-gray-300 text-sm">
            {currentSlide} / {slides.length - 1}
          </span>
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            {showMenu ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu Laterale */}
      {showMenu && (
        <div className="absolute right-0 top-16 w-80 bg-gray-900/95 backdrop-blur-sm border-l border-blue-500/30 h-[calc(100vh-4rem)] overflow-y-auto z-50 shadow-2xl">
          <div className="p-6">
            <h3 className="text-xl font-bold text-cyan-400 mb-4">Indice</h3>
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = currentSlide >= section.slides[0] && currentSlide <= section.slides[section.slides.length - 1];
              return (
                <div key={section.id} className="mb-4">
                  <button
                    onClick={() => goToSlide(section.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-all ${
                      isActive 
                        ? 'bg-blue-600/30 border-l-4 border-cyan-400' 
                        : 'hover:bg-blue-900/30'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-cyan-400" />
                    <span className="text-white font-medium">{section.title}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-8 overflow-auto">
        <div className="w-full h-full max-w-7xl max-h-[85vh] bg-gray-900/50 backdrop-blur-sm rounded-2xl shadow-2xl border border-blue-500/30 p-8 flex flex-col">
          {/* Slide Header */}
          <div className="mb-6">
            <div className="flex items-center space-x-3 mb-2">
              {React.createElement(getCurrentSection().icon, { className: "w-8 h-8 text-cyan-400" })}
              <span className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                {getCurrentSection().title}
              </span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-2">{slides[currentSlide].title}</h2>
            {slides[currentSlide].subtitle && (
              <p className="text-xl text-gray-400">{slides[currentSlide].subtitle}</p>
            )}
          </div>

          {/* Slide Content */}
          <div className="flex-1 overflow-auto">
            {slides[currentSlide].content}
          </div>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="bg-gray-900/50 backdrop-blur-sm border-t border-blue-500/30 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Precedente</span>
          </button>

          {/* Progress Bar */}
          <div className="flex-1 mx-8">
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentSlide / (slides.length - 1)) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:cursor-not-allowed rounded-lg transition-colors text-white"
          >
            <span>Successivo</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};