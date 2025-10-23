// ========================================
// MODULO 4: EREDITARIETA' E POLIMORFISMO
// ========================================
// Slide 27-35 migliorate con grafiche accattivanti

// No icons needed - this file uses direct JSX with emojis and HTML elements

const ereditarietaPolimorfismoSlides = [
  // ============================
  // SEZIONE EREDITARIETA (5 slide)
  // ============================

  // Slide 1/9 - Introduzione all'Ereditarieta
  {
    title: "Ereditarieta",
    subtitle: "Riutilizzo e gerarchie di classi",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-2 border-blue-400/50 shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3">
            <span className="text-4xl">🧬</span> Cos'e l'Ereditarieta?
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            L'ereditarieta permette di creare una nuova classe (<span className="text-blue-400 font-bold">classe derivata</span> o <span className="text-blue-400 font-bold">sottoclasse</span>) basandosi su una classe esistente (<span className="text-cyan-400 font-bold">classe base</span> o <span className="text-cyan-400 font-bold">superclasse</span>), <span className="text-blue-400 font-bold">ereditando</span> i suoi attributi e metodi.
          </p>
        </div>

        <div className="flex justify-center my-8">
          <svg width="700" height="380" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-6 shadow-2xl" viewBox="0 0 700 350">
            {/* Classe base con ombra */}
            <defs>
              <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.3"/>
              </filter>
              <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="derivedGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0e7490" />
                <stop offset="100%" stopColor="#155e75" />
              </linearGradient>
            </defs>

            {/* Classe base Veicolo */}
            <rect x="250" y="30" width="200" height="120" fill="url(#baseGrad)" stroke="#60a5fa" strokeWidth="4" rx="8" filter="url(#shadow)"/>
            <text x="350" y="65" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">Veicolo</text>
            <line x1="250" y1="75" x2="450" y2="75" stroke="#60a5fa" strokeWidth="3"/>
            <text x="265" y="100" fill="#e5e7eb" fontSize="16" fontWeight="500">- marca: string</text>
            <text x="265" y="125" fill="#e5e7eb" fontSize="16" fontWeight="500">+ Avvia(): void</text>

            {/* Frecce di ereditarieta con animazione */}
            <line x1="150" y1="210" x2="320" y2="150" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
            </line>
            <line x1="550" y1="210" x2="380" y2="150" stroke="#22d3ee" strokeWidth="4" markerEnd="url(#arrowhead)" strokeDasharray="5,5">
              <animate attributeName="stroke-dashoffset" from="10" to="0" dur="1s" repeatCount="indefinite"/>
            </line>

            {/* Label "eredita" */}
            <text x="200" y="170" fill="#22d3ee" fontSize="14" fontStyle="italic">eredita</text>
            <text x="480" y="170" fill="#22d3ee" fontSize="14" fontStyle="italic">eredita</text>

            {/* Classe derivata Auto */}
            <rect x="50" y="210" width="200" height="120" fill="url(#derivedGrad)" stroke="#06b6d4" strokeWidth="4" rx="8" filter="url(#shadow)"/>
            <text x="150" y="245" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">Auto</text>
            <line x1="50" y1="255" x2="250" y2="255" stroke="#06b6d4" strokeWidth="3"/>
            <text x="65" y="280" fill="#e5e7eb" fontSize="16" fontWeight="500">- numPorte: int</text>
            <text x="65" y="305" fill="#e5e7eb" fontSize="16" fontWeight="500">+ Clacson(): void</text>

            {/* Classe derivata Moto */}
            <rect x="450" y="210" width="200" height="120" fill="url(#derivedGrad)" stroke="#06b6d4" strokeWidth="4" rx="8" filter="url(#shadow)"/>
            <text x="550" y="245" textAnchor="middle" fill="white" fontSize="22" fontWeight="bold">Moto</text>
            <line x1="450" y1="255" x2="650" y2="255" stroke="#06b6d4" strokeWidth="3"/>
            <text x="465" y="280" fill="#e5e7eb" fontSize="16" fontWeight="500">- cilindrata: int</text>
            <text x="465" y="305" fill="#e5e7eb" fontSize="16" fontWeight="500">+ Impennata(): void</text>

            {/* Marker per frecce */}
            <defs>
              <marker id="arrowhead" markerWidth="12" markerHeight="12" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
              </marker>
            </defs>
          </svg>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-5 rounded-xl border-2 border-cyan-400/50 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🔄</span>
              <h4 className="font-bold text-cyan-300 text-lg">Riuso del Codice</h4>
            </div>
            <p className="text-sm text-gray-300">Evita duplicazioni e semplifica la manutenzione</p>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-5 rounded-xl border-2 border-blue-400/50 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">📊</span>
              <h4 className="font-bold text-blue-300 text-lg">Organizzazione</h4>
            </div>
            <p className="text-sm text-gray-300">Struttura gerarchica chiara e logica</p>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-800/20 p-5 rounded-xl border-2 border-cyan-400/50 transform hover:scale-105 transition-transform">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">🎯</span>
              <h4 className="font-bold text-cyan-300 text-lg">Estensibilita</h4>
            </div>
            <p className="text-sm text-gray-300">Facile aggiungere nuove funzionalita</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2/9 - Sintassi Ereditarieta
  {
    title: "Sintassi dell'Ereditarieta in C#",
    subtitle: "Come creare classi derivate",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border-l-4 border-blue-400 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
            <span className="text-3xl">📝</span> Sintassi Base
          </h3>
          <div className="bg-gray-900 p-5 rounded-lg font-mono text-base border border-gray-700">
            <pre className="text-gray-300">
{`public class ClasseDerivata : ClasseBase
{
    // Membri aggiuntivi della classe derivata
}`}
            </pre>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-cyan-500/50 shadow-lg">
          <h4 className="text-2xl font-bold mb-5 text-cyan-300 flex items-center gap-2">
            <span className="text-3xl">🐾</span> Esempio: Animali
          </h4>
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

    public Cane(string nome, int eta, string razza)
        : base(nome, eta)  // Chiama il costruttore della classe base
    {
        this.razza = razza;
    }

    public void Abbaia()
    {
        Console.WriteLine(nome + " fa BAU BAU!");
    }
}

// Classe derivata - Gatto
public class Gatto : Animale
{
    private bool haArtigli;

    public Gatto(string nome, int eta, bool artigli) : base(nome, eta)
    {
        haArtigli = artigli;
    }

    public void Miagola()
    {
        Console.WriteLine(nome + " fa MIAO!");
    }
}

// Utilizzo
Cane rex = new Cane("Rex", 5, "Labrador");
rex.Mangia();    // Metodo ereditato da Animale
rex.Dormi();     // Metodo ereditato da Animale
rex.Abbaia();    // Metodo specifico di Cane`}
            </pre>
          </div>
        </div>

        <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="text-yellow-200 flex items-start gap-2">
            <span className="text-xl">💡</span>
            <span><strong>Keyword 'protected':</strong> I membri protected sono accessibili dalla classe base e da tutte le classi derivate, ma non dall'esterno!</span>
          </p>
        </div>
      </div>
    )
  },

  // Slide 3/9 - Keyword base e override
  {
    title: "Keyword 'base', 'virtual' e 'override'",
    subtitle: "Interazione con la classe base",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-xl border-2 border-blue-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <span className="text-2xl">🔗</span> Keyword 'base'
            </h3>
            <p className="text-gray-300 mb-4">Accede a membri della classe base</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border border-gray-700">
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

          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
              <span className="text-2xl">🔄</span> virtual e override
            </h3>
            <p className="text-gray-300 mb-4">Ridefinire metodi della classe base</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border border-gray-700">
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

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-blue-500/50 shadow-lg">
          <h4 className="text-2xl font-bold mb-5 text-blue-300 flex items-center gap-2">
            <span className="text-3xl">💼</span> Esempio Completo: Dipendenti Azienda
          </h4>
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
d.StampaInfo();  // Stipendio: €2000

Manager m = new Manager("Luigi", 3000, 500);
m.StampaInfo();  // Stipendio: €3500 (base + bonus)`}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <p className="text-blue-300 font-bold">virtual</p>
            <p className="text-sm text-gray-300">Metodo ridefinibile</p>
          </div>
          <div className="bg-cyan-900/20 p-4 rounded-lg border border-cyan-500/30">
            <p className="text-cyan-300 font-bold">override</p>
            <p className="text-sm text-gray-300">Ridefinisce il metodo</p>
          </div>
          <div className="bg-blue-900/20 p-4 rounded-lg border border-blue-500/30">
            <p className="text-blue-300 font-bold">base</p>
            <p className="text-sm text-gray-300">Chiama la versione base</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4/9 - Limitazioni Ereditarieta
  {
    title: "Ereditarieta in C#",
    subtitle: "Limitazioni e alternative",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 p-8 rounded-xl border-2 border-red-400/70 shadow-lg">
          <h3 className="text-3xl font-bold mb-4 text-red-300 flex items-center gap-3">
            <span className="text-4xl">⚠️</span> C# NON supporta ereditarieta multipla
          </h3>
          <p className="text-xl text-gray-200">Una classe puo ereditare da <strong className="text-red-300">una sola</strong> classe base, ma puo implementare <strong className="text-green-300">multiple interfacce</strong>.</p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/20 p-6 rounded-xl border-2 border-red-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-red-300 flex items-center gap-2">
              <span className="text-2xl">❌</span> NON Valido
            </h3>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border-2 border-red-500">
              <pre className="text-red-300">
{`// ERRORE! Non e possibile in C#
public class Anfibio : Terrestre, Acquatico
{
    // ...
}`}
              </pre>
            </div>
            <p className="mt-4 text-sm text-gray-300">Il compilatore genererebbe un errore!</p>
          </div>

          <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 rounded-xl border-2 border-green-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-green-300 flex items-center gap-2">
              <span className="text-2xl">✅</span> Valido
            </h3>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border-2 border-green-500">
              <pre className="text-green-300">
{`// OK: una classe + interfacce
public class Anfibio : Animale, IAcquatico, ITerrestre
{
    // Implementa interfacce
}`}
              </pre>
            </div>
            <p className="mt-4 text-sm text-gray-300">Codice perfettamente valido!</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border-2 border-blue-400/50 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-blue-300 flex items-center gap-2">
            <span className="text-3xl">🔗</span> Catena di Ereditarieta
          </h3>
          <p className="text-gray-300 mb-4 text-lg">E possibile creare gerarchie multi-livello</p>
          <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border border-gray-700">
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

        <div className="flex justify-center">
          <svg width="550" height="320" className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 shadow-xl" viewBox="0 0 550 300">
            <defs>
              <linearGradient id="level1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#1e40af" />
                <stop offset="100%" stopColor="#1e3a8a" />
              </linearGradient>
              <linearGradient id="level2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0369a1" />
                <stop offset="100%" stopColor="#0c4a6e" />
              </linearGradient>
              <linearGradient id="level3" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#0e7490" />
                <stop offset="100%" stopColor="#083344" />
              </linearGradient>
            </defs>

            {/* Livello 1 - Veicolo */}
            <rect x="170" y="20" width="210" height="70" fill="url(#level1)" stroke="#60a5fa" strokeWidth="3" rx="8"/>
            <text x="275" y="60" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Veicolo</text>

            {/* Freccia */}
            <path d="M 275 90 L 275 120" stroke="#22d3ee" strokeWidth="4" fill="none" markerEnd="url(#arrow3)"/>
            <text x="290" y="110" fill="#22d3ee" fontSize="14" fontStyle="italic">eredita</text>

            {/* Livello 2 - VeicoloAMotore */}
            <rect x="170" y="120" width="210" height="70" fill="url(#level2)" stroke="#06b6d4" strokeWidth="3" rx="8"/>
            <text x="275" y="160" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">VeicoloAMotore</text>

            {/* Freccia */}
            <path d="M 275 190 L 275 220" stroke="#22d3ee" strokeWidth="4" fill="none" markerEnd="url(#arrow3)"/>
            <text x="290" y="210" fill="#22d3ee" fontSize="14" fontStyle="italic">eredita</text>

            {/* Livello 3 - Automobile */}
            <rect x="170" y="220" width="210" height="70" fill="url(#level3)" stroke="#06b6d4" strokeWidth="3" rx="8"/>
            <text x="275" y="260" textAnchor="middle" fill="white" fontSize="20" fontWeight="bold">Automobile</text>

            <defs>
              <marker id="arrow3" markerWidth="12" markerHeight="12" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    )
  },

  // Slide 5/9 - Esempio Pratico Ereditarieta: RPG
  {
    title: "Esempio Pratico: Sistema di Gioco RPG",
    subtitle: "Gerarchia di personaggi",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border-2 border-purple-400/50 shadow-lg">
          <h3 className="text-2xl font-bold text-purple-300 flex items-center gap-2">
            <span className="text-3xl">⚔️</span> Sistema di Personaggi RPG
          </h3>
          <p className="text-gray-300 mt-2">Creiamo una gerarchia di personaggi per un gioco di ruolo!</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-cyan-500/50 shadow-lg">
          <div className="font-mono text-sm">
            <pre className="text-gray-300">
{`// Classe base - Personaggio
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
        forza = 15;  // Piu forte della base
    }

    public override int Attacca()
    {
        int dannoBase = base.Attacca();
        int bonusArma = 10;
        Console.WriteLine($"{nome} attacca con {tipoArma}!");
        return dannoBase + bonusArma;  // Danno totale: 25
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
            Console.WriteLine($"{nome} lancia un incantesimo!");
            return forza * 3;  // Attacco magico potente: 15
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

// Utilizzo nel gioco
Guerriero conan = new Guerriero("Conan", "Spada Grande");
Mago merlin = new Mago("Merlin");

conan.StampaInfo();
int danno1 = conan.Attacca();  // Attacco da 25 danni
conan.Difendi();

merlin.StampaInfo();
merlin.LanciaIncantesimo(0);  // Lancia "Palla di Fuoco"
int danno2 = merlin.Attacca();  // Attacco da 15 danni`}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-red-900/20 p-4 rounded-lg border-l-4 border-red-400">
            <h4 className="font-bold text-red-300 mb-2">⚔️ Guerriero</h4>
            <p className="text-sm text-gray-300">Alta forza, armatura, attacco fisico potenziato</p>
          </div>
          <div className="bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-bold text-purple-300 mb-2">🔮 Mago</h4>
            <p className="text-sm text-gray-300">Bassa forza, mana, attacco magico potente</p>
          </div>
        </div>
      </div>
    )
  },

  // ============================
  // SEZIONE POLIMORFISMO (4 slide)
  // ============================

  // Slide 6/9 - Introduzione Polimorfismo
  {
    title: "Polimorfismo",
    subtitle: "Un'interfaccia, molte forme",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-2xl border-2 border-purple-400/50 shadow-lg">
          <h3 className="text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3">
            <span className="text-4xl">🎭</span> Cos'e il Polimorfismo?
          </h3>
          <p className="text-xl text-gray-200 leading-relaxed">
            Il polimorfismo (dal greco "molte forme") e la capacita di oggetti di <span className="text-purple-400 font-bold">classi diverse</span> di rispondere allo <span className="text-pink-400 font-bold">stesso messaggio</span> (metodo) in modi diversi.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
              <span className="text-2xl">✨</span> Vantaggi
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span>Codice piu flessibile e riutilizzabile</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span>Facilita l'estensione del sistema</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span>Riduce l'accoppiamento tra classi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 text-xl">✓</span>
                <span>Supporta il principio Open/Closed</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl border-2 border-blue-500/50 shadow-lg">
            <h4 className="text-lg font-bold mb-4 text-blue-300 flex items-center gap-2">
              <span className="text-2xl">📐</span> Esempio Semplice
            </h4>
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

        <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border-l-4 border-blue-400 shadow-lg">
          <h4 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
            <span className="text-2xl">🎮</span> Analogia: Remote Control Universale
          </h4>
          <p className="text-lg text-gray-300 leading-relaxed">
            Premi "Play" su un telecomando universale: la TV riproduce il programma, il lettore DVD avvia il film, lo stereo suona la musica. <span className="text-blue-400 font-semibold">Stesso comando, risultati diversi</span> in base al dispositivo!
          </p>
        </div>

        <div className="flex justify-center">
          <svg width="600" height="200" className="bg-gray-800/30 rounded-xl p-4" viewBox="0 0 600 180">
            <defs>
              <linearGradient id="formGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#7c3aed" />
                <stop offset="100%" stopColor="#5b21b6" />
              </linearGradient>
            </defs>

            {/* Forma base al centro */}
            <rect x="220" y="20" width="160" height="60" fill="url(#formGrad)" stroke="#a855f7" strokeWidth="3" rx="8"/>
            <text x="300" y="55" textAnchor="middle" fill="white" fontSize="18" fontWeight="bold">Forma.Disegna()</text>

            {/* Frecce verso forme specifiche */}
            <path d="M 240 80 L 100 140" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrowP)"/>
            <path d="M 300 80 L 300 140" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrowP)"/>
            <path d="M 360 80 L 500 140" stroke="#22d3ee" strokeWidth="3" markerEnd="url(#arrowP)"/>

            {/* Forme specifiche */}
            <circle cx="80" cy="150" r="25" fill="#0ea5e9" stroke="#22d3ee" strokeWidth="2"/>
            <text x="80" y="155" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">○</text>

            <rect x="275" y="140" width="50" height="50" fill="#0ea5e9" stroke="#22d3ee" strokeWidth="2"/>
            <text x="300" y="170" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">□</text>

            <path d="M 500 140 L 520 170 L 480 170 Z" fill="#0ea5e9" stroke="#22d3ee" strokeWidth="2"/>
            <text x="500" y="165" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">△</text>

            <defs>
              <marker id="arrowP" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto">
                <path d="M0,0 L0,6 L9,3 z" fill="#22d3ee" />
              </marker>
            </defs>
          </svg>
        </div>
      </div>
    )
  },

  // Slide 7/9 - Tipi di Polimorfismo
  {
    title: "Tipi di Polimorfismo",
    subtitle: "Compile-time e Runtime",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-xl border-2 border-blue-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <span className="text-2xl">⚡</span> Polimorfismo Compile-Time
            </h3>
            <p className="text-gray-300 mb-4"><strong className="text-blue-400">Method Overloading</strong> - Risolto durante la compilazione</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-xs border border-gray-700">
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

          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
              <span className="text-2xl">🚀</span> Polimorfismo Runtime
            </h3>
            <p className="text-gray-300 mb-4"><strong className="text-cyan-400">Method Overriding</strong> - Risolto durante l'esecuzione</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-xs border border-gray-700">
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

        <div className="bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-400 shadow-lg">
          <p className="text-yellow-200 flex items-start gap-2">
            <span className="text-2xl">💡</span>
            <span className="text-lg"><strong>Differenza Chiave:</strong> <span className="text-blue-300">Overloading</span> = stesso nome, firma diversa | <span className="text-cyan-300">Overriding</span> = stessa firma, implementazione diversa</span>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900/20 p-5 rounded-lg border-2 border-blue-400/50">
            <h4 className="font-bold text-blue-300 mb-2 text-lg">Overloading</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Stesso metodo, parametri diversi</li>
              <li>• Risolto a compile-time</li>
              <li>• Nella stessa classe</li>
            </ul>
          </div>
          <div className="bg-cyan-900/20 p-5 rounded-lg border-2 border-cyan-400/50">
            <h4 className="font-bold text-cyan-300 mb-2 text-lg">Overriding</h4>
            <ul className="text-sm text-gray-300 space-y-1">
              <li>• Stesso metodo e parametri</li>
              <li>• Risolto a runtime</li>
              <li>• Tra classe base e derivata</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8/9 - Polimorfismo con Collezioni
  {
    title: "Polimorfismo con Collezioni",
    subtitle: "Il vero potere del polimorfismo",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border-2 border-purple-400/50 shadow-lg">
          <h3 className="text-2xl font-bold mb-4 text-purple-300 flex items-center gap-2">
            <span className="text-3xl">🎯</span> Array/Liste di Tipi Base
          </h3>
          <p className="text-lg text-gray-300">Possiamo memorizzare oggetti di classi derivate in array/liste del tipo base!</p>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-cyan-500/50 shadow-lg">
          <h4 className="text-2xl font-bold mb-5 text-cyan-300 flex items-center gap-2">
            <span className="text-3xl">🦁</span> Esempio: Zoo Virtuale
          </h4>
          <div className="font-mono text-xs">
            <pre className="text-gray-300">
{`public class Animale
{
    protected string nome;

    public Animale(string nome) { this.nome = nome; }

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
    public override void FaiVerso() { Console.WriteLine($"{nome} ruggisce: ROAR!"); }
    public override void Muoviti() { Console.WriteLine($"{nome} corre velocemente"); }
}

public class Elefante : Animale
{
    public Elefante(string nome) : base(nome) { }
    public override void FaiVerso() { Console.WriteLine($"{nome} barrisce: PROOOOT!"); }
    public override void Muoviti() { Console.WriteLine($"{nome} cammina pesantemente"); }
}

public class Serpente : Animale
{
    public Serpente(string nome) : base(nome) { }
    public override void FaiVerso() { Console.WriteLine($"{nome} sibila: SSSSS!"); }
    public override void Muoviti() { Console.WriteLine($"{nome} striscia"); }
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
    animale.FaiVerso();  // Chiama la versione corretta automaticamente!
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

        <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-5 rounded-xl border-l-4 border-green-400 shadow-lg">
          <p className="text-green-200 flex items-start gap-2">
            <span className="text-2xl">🌟</span>
            <span className="text-lg">
              <strong>Il Superpotere:</strong> Un singolo ciclo foreach gestisce tutti gli animali, chiamando automaticamente il metodo corretto per ogni tipo! Questo e il vero potere del polimorfismo!
            </span>
          </p>
        </div>
      </div>
    )
  },

  // Slide 9/9 - Casting e operatori is/as
  {
    title: "Type Casting e Operatori is/as",
    subtitle: "Gestire i tipi derivati (Upcasting e Downcasting)",
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-xl border-2 border-blue-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-blue-300 flex items-center gap-2">
              <span className="text-2xl">🔍</span> Operatore 'is'
            </h3>
            <p className="text-gray-300 mb-4">Verifica il tipo di un oggetto</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border border-gray-700">
              <pre className="text-gray-300">
{`Animale a = new Cane("Rex");

if(a is Cane)
{
    Console.WriteLine("E un cane!");
}

if(a is Gatto)
{
    Console.WriteLine("E un gatto!");  // Non stampa
}

// Pattern matching (C# 7+)
if(a is Cane c)
{
    c.Abbaia();  // 'c' e gia Cane!
}`}
              </pre>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-400/50 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
              <span className="text-2xl">🛡️</span> Operatore 'as'
            </h3>
            <p className="text-gray-300 mb-4">Casting sicuro (ritorna null se fallisce)</p>
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-sm border border-gray-700">
              <pre className="text-gray-300">
{`Animale a = new Cane("Rex");

Cane c = a as Cane;
if(c != null)
{
    c.Abbaia();  // Sicuro!
}

Gatto g = a as Gatto;
if(g != null)  // g e null
{
    g.Miagola();  // Non eseguito
}
else
{
    Console.WriteLine("Non e un gatto");
}`}
              </pre>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border-2 border-purple-500/50 shadow-lg">
          <h4 className="text-2xl font-bold mb-5 text-purple-300 flex items-center gap-2">
            <span className="text-3xl">🛒</span> Esempio Pratico: Sistema di Negozio
          </h4>
          <div className="font-mono text-xs">
            <pre className="text-gray-300">
{`public class Prodotto
{
    public string Nome { get; set; }
    public double Prezzo { get; set; }
}

public class Elettronica : Prodotto
{
    public int Garanzia { get; set; }  // In mesi
    public void EstendiGaranzia() { Garanzia += 12; }
}

public class Alimentare : Prodotto
{
    public DateTime Scadenza { get; set; }
    public bool IsScaduto() { return DateTime.Now > Scadenza; }
}

// Lista eterogenea - Upcasting implicito
List<Prodotto> carrello = new List<Prodotto>
{
    new Elettronica { Nome = "Laptop", Prezzo = 999, Garanzia = 24 },
    new Alimentare { Nome = "Latte", Prezzo = 1.5, Scadenza = DateTime.Now.AddDays(7) },
    new Elettronica { Nome = "Mouse", Prezzo = 25, Garanzia = 12 }
};

// Elaborazione con polimorfismo + downcasting
foreach(Prodotto p in carrello)
{
    Console.WriteLine($"Prodotto: {p.Nome} - {p.Prezzo:C}");

    // Downcasting con pattern matching - Azioni specifiche per tipo
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

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-900/20 p-5 rounded-lg border-l-4 border-green-400">
            <h4 className="font-bold text-green-300 mb-2 text-lg flex items-center gap-2">
              <span className="text-xl">⬆️</span> Upcasting
            </h4>
            <p className="text-sm text-gray-300">Conversione da derivata a base (implicita e sicura)</p>
            <code className="text-xs text-green-300">Animale a = new Cane();</code>
          </div>
          <div className="bg-orange-900/20 p-5 rounded-lg border-l-4 border-orange-400">
            <h4 className="font-bold text-orange-300 mb-2 text-lg flex items-center gap-2">
              <span className="text-xl">⬇️</span> Downcasting
            </h4>
            <p className="text-sm text-gray-300">Conversione da base a derivata (esplicita, usa is/as)</p>
            <code className="text-xs text-orange-300">Cane c = a as Cane;</code>
          </div>
        </div>

        <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="text-yellow-200 flex items-start gap-2">
            <span className="text-xl">💡</span>
            <span><strong>Regola d'oro:</strong> Usa sempre 'is' o 'as' per il downcasting! Mai fare cast diretto (Cane)a perche genera eccezioni se il tipo e sbagliato.</span>
          </p>
        </div>
      </div>
    )
  }
];

// Esporta per main.jsx
if (typeof window !== 'undefined') {
  window.ereditarietaPolimorfismoSlides = ereditarietaPolimorfismoSlides;
}
