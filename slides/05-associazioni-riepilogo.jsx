// ============================================================================
// MODULO 5: ASSOCIAZIONI TRA CLASSI E RIEPILOGO FINALE
// ============================================================================
// Slide 36-40: Associazioni, Aggregazione, Composizione, N-M, Riepilogo
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
  },

  // Slide 40 - Riepilogo Finale MEMORABILE
  {
    title: "🎓 Hai Completato il Viaggio nella OOP!",
    subtitle: "Da principiante a Object-Oriented Programmer",
    content: (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-6 rounded-2xl border-2 border-cyan-500/50 text-center">
          <Rocket className="w-16 h-16 text-cyan-400 mx-auto mb-4 animate-pulse" />
          <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Congratulazioni!
          </h3>
          <p className="text-xl text-gray-300">Hai padroneggiato i fondamenti della Programmazione ad Oggetti</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Box className="w-6 h-6 text-blue-400" />
                <h4 className="font-bold text-blue-300">1. Classi e Oggetti</h4>
              </div>
              <p className="text-sm text-gray-300">Template e istanze concrete</p>
            </div>

            <div className="bg-cyan-900/30 p-4 rounded-xl border-l-4 border-cyan-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Code className="w-6 h-6 text-cyan-400" />
                <h4 className="font-bold text-cyan-300">2. Costruttori e Properties</h4>
              </div>
              <p className="text-sm text-gray-300">Inizializzazione e accesso controllato</p>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Zap className="w-6 h-6 text-blue-400" />
                <h4 className="font-bold text-blue-300">3. Metodi e Incapsulamento</h4>
              </div>
              <p className="text-sm text-gray-300">Comportamento e protezione dati</p>
            </div>

            <div className="bg-cyan-900/30 p-4 rounded-xl border-l-4 border-cyan-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Eye className="w-6 h-6 text-cyan-400" />
                <h4 className="font-bold text-cyan-300">4. Visibilità</h4>
              </div>
              <p className="text-sm text-gray-300">public, private, protected, internal</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Layers className="w-6 h-6 text-blue-400" />
                <h4 className="font-bold text-blue-300">5. Ereditarietà</h4>
              </div>
              <p className="text-sm text-gray-300">Riuso del codice, gerarchie IS-A</p>
            </div>

            <div className="bg-cyan-900/30 p-4 rounded-xl border-l-4 border-cyan-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <GitBranch className="w-6 h-6 text-cyan-400" />
                <h4 className="font-bold text-cyan-300">6. Polimorfismo</h4>
              </div>
              <p className="text-sm text-gray-300">Un'interfaccia, molte implementazioni</p>
            </div>

            <div className="bg-blue-900/30 p-4 rounded-xl border-l-4 border-blue-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Lock className="w-6 h-6 text-blue-400" />
                <h4 className="font-bold text-blue-300">7. Classi Astratte</h4>
              </div>
              <p className="text-sm text-gray-300">Contratti e implementazioni base</p>
            </div>

            <div className="bg-cyan-900/30 p-4 rounded-xl border-l-4 border-cyan-400 hover:scale-105 transition-transform">
              <div className="flex items-center gap-3 mb-2">
                <Link2 className="w-6 h-6 text-cyan-400" />
                <h4 className="font-bold text-cyan-300">8. Associazioni</h4>
              </div>
              <p className="text-sm text-gray-300">Aggregazione, Composizione, HAS-A</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-6 rounded-2xl border border-purple-500/40">
          <h3 className="text-2xl font-bold mb-4 text-center text-purple-300">I 4 Pilastri della OOP</h3>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="bg-blue-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-500/40 transition-colors">
                <Lock className="w-10 h-10 text-blue-400" />
              </div>
              <p className="font-bold text-blue-300">Incapsulamento</p>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="bg-cyan-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:bg-cyan-500/40 transition-colors">
                <Layers className="w-10 h-10 text-cyan-400" />
              </div>
              <p className="font-bold text-cyan-300">Ereditarietà</p>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="bg-blue-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:bg-blue-500/40 transition-colors">
                <GitBranch className="w-10 h-10 text-blue-400" />
              </div>
              <p className="font-bold text-blue-300">Polimorfismo</p>
            </div>
            <div className="text-center group hover:scale-110 transition-transform">
              <div className="bg-cyan-500/20 w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-3 group-hover:bg-cyan-500/40 transition-colors">
                <Box className="w-10 h-10 text-cyan-400" />
              </div>
              <p className="font-bold text-cyan-300">Astrazione</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 p-5 rounded-xl border border-green-500/30 text-center">
            <Award className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <p className="font-bold text-green-300 text-lg">8 Moduli Completati</p>
            <p className="text-sm text-gray-400">40 slide di contenuti</p>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-indigo-900/20 p-5 rounded-xl border border-blue-500/30 text-center">
            <Code className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <p className="font-bold text-blue-300 text-lg">Esempi Pratici</p>
            <p className="text-sm text-gray-400">Codice C# funzionante</p>
          </div>
          <div className="bg-gradient-to-br from-cyan-900/30 to-sky-900/20 p-5 rounded-xl border border-cyan-500/30 text-center">
            <Layers className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
            <p className="font-bold text-cyan-300 text-lg">Diagrammi UML</p>
            <p className="text-sm text-gray-400">Modellazione visuale</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-2xl border-2 border-yellow-500/40 text-center">
          <h4 className="text-2xl font-bold text-yellow-300 mb-3">🚀 Prossimi Passi</h4>
          <div className="grid grid-cols-2 gap-4 text-left">
            <div>
              <p className="text-cyan-400 font-bold mb-2">✓ Pratica Costante</p>
              <p className="text-sm text-gray-300">Scrivi codice ogni giorno, crea progetti personali</p>
            </div>
            <div>
              <p className="text-cyan-400 font-bold mb-2">✓ Design Patterns</p>
              <p className="text-sm text-gray-300">Studia i pattern GoF (Gang of Four)</p>
            </div>
            <div>
              <p className="text-cyan-400 font-bold mb-2">✓ SOLID Principles</p>
              <p className="text-sm text-gray-300">Principi di design orientato agli oggetti</p>
            </div>
            <div>
              <p className="text-cyan-400 font-bold mb-2">✓ Progetti Reali</p>
              <p className="text-sm text-gray-300">Contribuisci a progetti open source</p>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border-2 border-cyan-500/50">
          <p className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent mb-3">
            Grazie per l'attenzione!
          </p>
          <p className="text-2xl text-cyan-300 font-semibold mb-4">Buon Coding!</p>
          <div className="flex items-center justify-center gap-4 text-6xl">
            <span>🎉</span>
            <span>🚀</span>
            <span>💻</span>
            <span>🏆</span>
          </div>
        </div>
      </div>
    )
  }
];
