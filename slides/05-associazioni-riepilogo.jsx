// ============================================================================
// MODULO 5: ASSOCIAZIONI TRA CLASSI
// ============================================================================
// Slide 36-39: Associazioni, Aggregazione, Composizione, Relazioni N-M
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
const Lock = (props) => <IconWrapper {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></IconWrapper>;
const Eye = (props) => <IconWrapper {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></IconWrapper>;
const Link2 = (props) => <IconWrapper {...props}><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></IconWrapper>;
const GitBranch = (props) => <IconWrapper {...props}><line x1="6" x2="6" y1="3" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></IconWrapper>;
const Award = (props) => <IconWrapper {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></IconWrapper>;
const Rocket = (props) => <IconWrapper {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></IconWrapper>;

// ============================================================================
// SLIDE DEL MODULO ASSOCIAZIONI E RIEPILOGO
// ============================================================================

const associazioniRiepilogoSlides = [
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
              <p className="text-gray-300">Persona ↔ Passaporto</p>
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

        <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="text-yellow-200"><strong>💡 Ricorda:</strong> Le associazioni modellano le <span className="text-yellow-400 font-bold">relazioni del mondo reale</span> tra gli oggetti!</p>
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
          <svg width="500" height="120" className="bg-gray-800/30 rounded-xl p-4" viewBox="0 0 500 100">
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

    public void AggiungiGiocatore(Giocatore g)
    {
        giocatori.Add(g);
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

// Utilizzo - I giocatori esistono indipendentemente!
Giocatore g1 = new Giocatore("Mario Rossi", 10, "Attaccante");
Squadra squadra = new Squadra("Aquile");
squadra.AggiungiGiocatore(g1);

// Se elimino squadra, g1 esiste ancora!
squadra = null;
g1.StampaInfo();  // Mario Rossi esiste ancora!`}
            </pre>
          </div>
        </div>

        <div className="bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-400">
          <p className="text-cyan-200"><strong>🔑 Caratteristica chiave:</strong> Rombo <span className="text-cyan-400 font-bold">VUOTO</span> in UML | Oggetti con <span className="text-cyan-400 font-bold">vita indipendente</span></p>
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
          <svg width="500" height="120" className="bg-gray-800/30 rounded-xl p-4" viewBox="0 0 500 100">
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

    public Motore(int cilindrata, int potenza)
    {
        Cilindrata = cilindrata;
        Potenza = potenza;
    }

    public void Avvia()
    {
        Console.WriteLine("Motore avviato!");
    }
}

public class Automobile
{
    public string Marca { get; set; }
    private Motore motore;  // COMPOSIZIONE

    public Automobile(string marca, int cilindrata)
    {
        Marca = marca;
        // Il motore è creato DENTRO l'automobile
        motore = new Motore(cilindrata, 150);
    }

    public void Accendi()
    {
        Console.WriteLine($"Accendo {Marca}");
        motore.Avvia();
    }
}

// Utilizzo
Automobile miaAuto = new Automobile("Fiat", 1200);
miaAuto.Accendi();

// Se elimino l'auto, anche il motore viene eliminato!
miaAuto = null;  // Tutto distrutto insieme!`}
            </pre>
          </div>
        </div>

        <div className="bg-yellow-900/20 p-4 rounded-lg border-l-4 border-yellow-400">
          <p className="text-yellow-200"><strong>💡 Differenza chiave:</strong> Rombo <span className="text-yellow-400 font-bold">PIENO</span> in UML | Aggregazione = indipendenti | Composizione = dipendenti</p>
        </div>
      </div>
    )
  },

  // Slide 39 - Associazioni N-M
  {
    title: "Associazioni Molti-a-Molti (N-M)",
    subtitle: "Studenti e Corsi - Relazioni bidirezionali",
    content: (
      <div className="space-y-6">
        <div className="bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-400">
          <h3 className="text-2xl font-bold mb-4 text-blue-300">Associazioni N-M</h3>
          <p className="text-lg text-gray-300">Ogni studente può frequentare <span className="text-blue-400 font-semibold">più corsi</span> e ogni corso può avere <span className="text-blue-400 font-semibold">più studenti</span>. Relazione <span className="text-blue-400 font-semibold">bidirezionale</span>!</p>
        </div>

        <div className="flex justify-center mb-4">
          <svg width="600" height="180" className="bg-gray-800/30 rounded-xl p-4" viewBox="0 0 600 150">
            {/* Studenti */}
            <rect x="50" y="10" width="120" height="35" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
            <text x="110" y="32" textAnchor="middle" fill="white" fontSize="13">Mario</text>

            <rect x="50" y="60" width="120" height="35" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
            <text x="110" y="82" textAnchor="middle" fill="white" fontSize="13">Laura</text>

            <rect x="50" y="110" width="120" height="35" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="2" rx="4"/>
            <text x="110" y="132" textAnchor="middle" fill="white" fontSize="13">Paolo</text>

            {/* Corsi */}
            <rect x="430" y="10" width="120" height="35" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
            <text x="490" y="32" textAnchor="middle" fill="white" fontSize="13">OOP</text>

            <rect x="430" y="60" width="120" height="35" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
            <text x="490" y="82" textAnchor="middle" fill="white" fontSize="13">Database</text>

            <rect x="430" y="110" width="120" height="35" fill="#0c4a6e" stroke="#06b6d4" strokeWidth="2" rx="4"/>
            <text x="490" y="132" textAnchor="middle" fill="white" fontSize="13">Reti</text>

            {/* Linee di associazione */}
            <line x1="170" y1="27" x2="430" y2="27" stroke="#22d3ee" strokeWidth="2"/>
            <line x1="170" y1="27" x2="430" y2="77" stroke="#22d3ee" strokeWidth="2"/>
            <line x1="170" y1="27" x2="430" y2="127" stroke="#22d3ee" strokeWidth="2"/>

            <line x1="170" y1="77" x2="430" y2="27" stroke="#22d3ee" strokeWidth="2"/>
            <line x1="170" y1="77" x2="430" y2="77" stroke="#22d3ee" strokeWidth="2"/>

            <line x1="170" y1="127" x2="430" y2="27" stroke="#22d3ee" strokeWidth="2"/>

            <text x="185" y="22" fill="#93c5fd" fontSize="11" fontWeight="bold">*</text>
            <text x="415" y="22" fill="#93c5fd" fontSize="11" fontWeight="bold">*</text>
          </svg>
        </div>

        <div className="bg-gray-900 p-6 rounded-xl border border-cyan-500/30">
          <div className="font-mono text-sm">
            <pre className="text-gray-300">
{`public class Studente
{
    public string Nome { get; set; }
    private List<Corso> corsi;  // Uno studente -> molti corsi

    public Studente(string nome)
    {
        Nome = nome;
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
}

public class Corso
{
    public string Nome { get; set; }
    private List<Studente> studenti;  // Un corso -> molti studenti

    public Corso(string nome)
    {
        Nome = nome;
        studenti = new List<Studente>();
    }

    public void AggiungiStudente(Studente s)
    {
        if(!studenti.Contains(s))
            studenti.Add(s);
    }
}

// Utilizzo
Studente mario = new Studente("Mario");
Corso oop = new Corso("OOP");
Corso db = new Corso("Database");

mario.IscriviACorso(oop);    // Mario -> OOP
mario.IscriviACorso(db);     // Mario -> Database`}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-900/20 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-blue-200"><strong>🔄 Bidirezionale:</strong> Navigabile in entrambe le direzioni</p>
          </div>
          <div className="bg-cyan-900/20 p-4 rounded-lg border-l-4 border-cyan-400">
            <p className="text-cyan-200"><strong>📊 Molti-a-Molti:</strong> List&lt;T&gt; su entrambi i lati</p>
          </div>
        </div>
      </div>
    )
  }
];

// Esporta per main.jsx
if (typeof window !== 'undefined') {
  window.associazioniRiepilogoSlides = associazioniRiepilogoSlides;
}
