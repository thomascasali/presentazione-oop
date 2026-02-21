// ========================================
// QUIZ MODULO 4: EREDITARIETA' E POLIMORFISMO
// ========================================
// Ristrutturato: componenti interattivi con feedback immediato
// Suddiviso in slide multiple per migliore fruibilità
// IMPORTANTE: content è una funzione per resettare lo stato tra le slide

const { useState, useEffect } = React;

// ========================================
// COMPONENTE: Domanda a Scelta Multipla
// ========================================
const QuizDomanda = ({ numero, domanda, opzioni, corretta, spiegazione, colore = "blue", resetKey }) => {
  const [selezionata, setSelezionata] = useState(null);
  const [verificata, setVerificata] = useState(false);

  // Reset quando cambia la slide (resetKey cambia)
  useEffect(() => {
    setSelezionata(null);
    setVerificata(false);
  }, [resetKey]);

  const colori = {
    blue: { border: "border-blue-400", text: "text-blue-300", bg: "bg-blue-900/20" },
    cyan: { border: "border-cyan-400", text: "text-cyan-300", bg: "bg-cyan-900/20" },
    purple: { border: "border-purple-400", text: "text-purple-300", bg: "bg-purple-900/20" },
    pink: { border: "border-pink-400", text: "text-pink-300", bg: "bg-pink-900/20" }
  };
  const c = colori[colore] || colori.blue;

  const handleVerifica = () => {
    if (selezionata !== null) setVerificata(true);
  };

  const isCorretta = selezionata === corretta;

  return (
    <div className={`bg-gray-900 p-5 rounded-lg mb-4 border-l-4 ${c.border}`}>
      <p className={`text-lg font-bold ${c.text} mb-3`}>{numero}. {domanda}</p>
      <div className="space-y-2 ml-2">
        {opzioni.map((opzione, idx) => {
          let stile = "bg-gray-800/50 border border-gray-700 hover:border-gray-500";
          if (verificata) {
            if (idx === corretta) {
              stile = "bg-green-900/40 border-2 border-green-400";
            } else if (idx === selezionata && idx !== corretta) {
              stile = "bg-red-900/40 border-2 border-red-400";
            } else {
              stile = "bg-gray-800/30 border border-gray-700 opacity-50";
            }
          } else if (idx === selezionata) {
            stile = "bg-blue-900/40 border-2 border-blue-400";
          }

          return (
            <button
              key={idx}
              onClick={() => { if (!verificata) setSelezionata(idx); }}
              className={`flex items-center gap-3 w-full text-left p-3 rounded-lg transition-all ${stile} ${!verificata ? 'cursor-pointer' : 'cursor-default'}`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                verificata && idx === corretta ? 'bg-green-500 text-white' :
                verificata && idx === selezionata && idx !== corretta ? 'bg-red-500 text-white' :
                idx === selezionata ? 'bg-blue-500 text-white' :
                'bg-gray-700 text-gray-300'
              }`}>
                {verificata && idx === corretta ? '✓' :
                 verificata && idx === selezionata && idx !== corretta ? '✗' :
                 String.fromCharCode(65 + idx)}
              </span>
              <span className={verificata && idx !== corretta && idx !== selezionata ? 'text-gray-500' : 'text-gray-200'}>
                {opzione}
              </span>
            </button>
          );
        })}
      </div>

      {!verificata && (
        <button
          onClick={handleVerifica}
          disabled={selezionata === null}
          className={`mt-4 px-6 py-2 rounded-lg font-bold text-sm transition-all ${
            selezionata !== null
              ? 'bg-blue-600 hover:bg-blue-700 text-white cursor-pointer'
              : 'bg-gray-700 text-gray-500 cursor-not-allowed'
          }`}
        >
          Verifica Risposta
        </button>
      )}

      {verificata && (
        <div className={`mt-4 p-4 rounded-lg border ${isCorretta ? 'bg-green-900/30 border-green-500/50' : 'bg-red-900/30 border-red-500/50'}`}>
          <p className={`font-bold ${isCorretta ? 'text-green-300' : 'text-red-300'}`}>
            {isCorretta ? '✓ Corretto!' : `✗ Sbagliato! La risposta corretta era: ${String.fromCharCode(65 + corretta)}) ${opzioni[corretta]}`}
          </p>
          <p className="text-sm text-gray-300 mt-1">{spiegazione}</p>
        </div>
      )}
    </div>
  );
};

// ========================================
// COMPONENTE: Tracker Punteggio per sezione
// ========================================
const QuizTracker = ({ titolo, children }) => {
  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-5 rounded-xl border-2 border-purple-400/50">
        <h3 className="text-2xl font-bold text-purple-300 flex items-center gap-3">
          <span className="text-3xl">❓</span> {titolo}
        </h3>
        <p className="text-gray-400 text-sm mt-1">Seleziona una risposta e premi "Verifica Risposta" per ogni domanda</p>
      </div>
      {children}
    </div>
  );
};

// ========================================
// COMPONENTE: Esercizio Completamento Codice
// ========================================
const EsercizioCodice = ({ numero, titolo, descrizione, codice, soluzioni, spiegazioneFinale, colore = "cyan", resetKey }) => {
  const [mostraSoluzione, setMostraSoluzione] = useState(false);

  useEffect(() => {
    setMostraSoluzione(false);
  }, [resetKey]);

  const colori = {
    cyan: "border-cyan-500/50",
    purple: "border-purple-500/50",
    pink: "border-pink-500/50"
  };

  return (
    <div className={`bg-gray-900 p-5 rounded-lg mb-6 border-2 ${colori[colore]}`}>
      <p className={`text-xl font-bold text-${colore}-300 mb-3`}>Esercizio {numero}: {titolo}</p>
      <p className="text-gray-300 mb-4">{descrizione}</p>
      <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm border border-gray-700">
        <pre className="text-gray-300">{codice}</pre>
      </div>

      <button
        onClick={() => setMostraSoluzione(!mostraSoluzione)}
        className={`mt-4 px-6 py-2 rounded-lg font-bold text-sm transition-all ${
          mostraSoluzione
            ? 'bg-gray-700 hover:bg-gray-600 text-gray-300'
            : 'bg-green-700 hover:bg-green-600 text-white'
        }`}
      >
        {mostraSoluzione ? 'Nascondi Soluzione' : 'Mostra Soluzione'}
      </button>

      {mostraSoluzione && (
        <div className="mt-4 p-4 bg-green-900/20 rounded border border-green-500/30">
          <p className="text-green-300 font-bold mb-2">✓ Soluzione:</p>
          <div className="bg-gray-950 p-3 rounded font-mono text-sm">
            <pre className="text-green-300">{soluzioni}</pre>
          </div>
          <p className="text-sm text-gray-300 mt-2">{spiegazioneFinale}</p>
        </div>
      )}
    </div>
  );
};

// ========================================
// COMPONENTE: Flashcard interattiva
// ========================================
const Flashcard = ({ termine, definizione, esempio, colore = "blue", resetKey }) => {
  const [aperta, setAperta] = useState(false);

  useEffect(() => {
    setAperta(false);
  }, [resetKey]);

  const colori = {
    blue: "border-blue-400/50 hover:border-blue-400",
    cyan: "border-cyan-400/50 hover:border-cyan-400",
    purple: "border-purple-400/50 hover:border-purple-400",
    pink: "border-pink-400/50 hover:border-pink-400",
    green: "border-green-400/50 hover:border-green-400",
    orange: "border-orange-400/50 hover:border-orange-400"
  };
  const textColori = {
    blue: "text-blue-300", cyan: "text-cyan-300", purple: "text-purple-300",
    pink: "text-pink-300", green: "text-green-300", orange: "text-orange-300"
  };

  return (
    <div
      onClick={() => setAperta(!aperta)}
      className={`bg-gray-900 p-4 rounded-lg border-2 ${colori[colore]} transition-all cursor-pointer ${aperta ? 'ring-2 ring-offset-2 ring-offset-gray-900 ring-' + colore + '-400/50' : ''}`}
    >
      <div className="text-center">
        <p className={`text-lg font-bold ${textColori[colore]} mb-2`}>{termine}</p>
        {aperta ? (
          <div className="text-sm text-gray-300 border-t border-gray-700 pt-2 text-left">
            <p>{definizione}</p>
            {esempio && <p className={`mt-2 ${textColori[colore]} font-mono text-xs`}>{esempio}</p>}
          </div>
        ) : (
          <p className="text-xs text-gray-500 italic">Clicca per vedere la definizione</p>
        )}
      </div>
    </div>
  );
};


// ========================================
// SLIDE 1: Quiz Ereditarietà (4 domande)
// ========================================
const QuizSlide1Content = ({ slideKey }) => (
  <QuizTracker titolo="Ereditarieta - Domande a scelta multipla">
    <QuizDomanda
      numero={1}
      domanda="Quale keyword permette ad una classe di ereditare da un'altra in C#?"
      opzioni={["extends", "implements", ": (due punti)", "inherits"]}
      corretta={2}
      spiegazione="In C# si usa la sintassi: public class Derivata : Base"
      colore="blue"
      resetKey={slideKey}
    />
    <QuizDomanda
      numero={2}
      domanda="Quante classi base puo ereditare una classe in C#?"
      opzioni={["Nessuna", "Una sola", "Due", "Illimitate"]}
      corretta={1}
      spiegazione="C# non supporta ereditarieta multipla (ma supporta multiple interfacce)"
      colore="cyan"
      resetKey={slideKey}
    />
    <QuizDomanda
      numero={3}
      domanda="Quale keyword si usa per ridefinire un metodo virtual nella classe derivata?"
      opzioni={["redefine", "override", "new", "virtual"]}
      corretta={1}
      spiegazione="La keyword 'override' indica che si sta ridefinendo un metodo virtual della classe base"
      colore="purple"
      resetKey={slideKey}
    />
    <QuizDomanda
      numero={4}
      domanda="Qual e il modificatore di accesso per membri accessibili nelle classi derivate?"
      opzioni={["private", "public", "protected", "internal"]}
      corretta={2}
      spiegazione="'protected' permette accesso alla classe base e a tutte le classi derivate, ma non dall'esterno"
      colore="blue"
      resetKey={slideKey}
    />
  </QuizTracker>
);

const quizSlide1 = {
  isQuiz: true,
  slideId: "quiz-m4-1",
  title: "Quiz: Ereditarieta",
  subtitle: "Verifica le tue conoscenze sull'ereditarieta",
  content: (slideKey) => <QuizSlide1Content slideKey={slideKey} />
};


// ========================================
// SLIDE 2: Quiz Polimorfismo e Casting (4 domande)
// ========================================
const QuizSlide2Content = ({ slideKey }) => (
  <QuizTracker titolo="Polimorfismo e Casting - Domande a scelta multipla">
    <QuizDomanda
      numero={5}
      domanda="Cos'e il polimorfismo runtime?"
      opzioni={[
        "Method overloading (stesso nome, parametri diversi)",
        "Method overriding (ridefinizione metodi virtual)",
        "Casting tra tipi",
        "Generics"
      ]}
      corretta={1}
      spiegazione="Il polimorfismo runtime si ottiene tramite override di metodi virtual, risolto durante l'esecuzione"
      colore="purple"
      resetKey={slideKey}
    />
    <QuizDomanda
      numero={6}
      domanda="Quale operatore verifica il tipo di un oggetto senza sollevare eccezioni?"
      opzioni={["typeof", "instanceof", "is", "cast"]}
      corretta={2}
      spiegazione="L'operatore 'is' verifica se un oggetto e di un certo tipo e ritorna bool"
      colore="cyan"
      resetKey={slideKey}
    />
    <QuizDomanda
      numero={7}
      domanda="Cosa restituisce l'operatore 'as' se il cast fallisce?"
      opzioni={["Lancia un'eccezione", "Ritorna null", "Ritorna false", "Ritorna l'oggetto originale"]}
      corretta={1}
      spiegazione="L'operatore 'as' e sicuro: ritorna null se il cast non riesce, senza lanciare eccezioni"
      colore="blue"
      resetKey={slideKey}
    />
    <QuizDomanda
      numero={8}
      domanda="Qual e la differenza tra interfaccia e classe base?"
      opzioni={[
        "L'interfaccia definisce 'cosa fare' (sa fare), la classe base condivide logica comune (e un)",
        "Non c'e differenza, sono la stessa cosa",
        "L'interfaccia puo avere costruttori, la classe base no",
        "La classe base supporta implementazione multipla, l'interfaccia no"
      ]}
      corretta={0}
      spiegazione="Interfaccia = 'SA FARE' (contratto di comportamento). Classe base = 'E UN' (condivide codice). Una classe puo implementare molte interfacce ma ereditare da una sola classe base."
      colore="pink"
      resetKey={slideKey}
    />
  </QuizTracker>
);

const quizSlide2 = {
  isQuiz: true,
  slideId: "quiz-m4-2",
  title: "Quiz: Polimorfismo e Casting",
  subtitle: "Verifica le tue conoscenze su polimorfismo e type casting",
  content: (slideKey) => <QuizSlide2Content slideKey={slideKey} />
};


// ========================================
// SLIDE 3: Esercizi di Completamento Codice
// ========================================
const QuizSlide3Content = ({ slideKey }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-5 rounded-xl border-2 border-blue-400/50">
      <h3 className="text-2xl font-bold text-blue-300 flex items-center gap-3">
        <span className="text-3xl">💻</span> Esercizi di Completamento Codice
      </h3>
      <p className="text-gray-400 text-sm mt-1">Leggi il codice, individua le keyword mancanti, poi verifica la soluzione</p>
    </div>

    <EsercizioCodice
      numero={1}
      titolo="Completa la classe derivata"
      descrizione="Completa il codice della classe Gatto che eredita da Animale:"
      colore="cyan"
      resetKey={slideKey}
      codice={`public class Animale
{
    protected string nome;
    public Animale(string nome) { this.nome = nome; }

    public virtual void FaiVerso()
    {
        Console.WriteLine("Verso generico");
    }
}

public class Gatto ___ Animale  // 1. Completa
{
    private string colore;

    public Gatto(string nome, string colore)
        ___ ___(nome)  // 2. Completa (chiama costruttore base)
    {
        this.colore = colore;
    }

    public ___ void FaiVerso()  // 3. Completa (ridefinisci)
    {
        Console.WriteLine($"{nome} fa MIAO!");
    }
}`}
      soluzioni={`1. : (due punti) → public class Gatto : Animale
2. : base      → : base(nome)
3. override    → public override void FaiVerso()`}
      spiegazioneFinale="':' per ereditare, ': base(...)' per il costruttore della classe base, 'override' per ridefinire un metodo virtual."
    />

    <EsercizioCodice
      numero={2}
      titolo="Implementa il polimorfismo"
      descrizione="Completa il codice per il polimorfismo con le forme geometriche:"
      colore="purple"
      resetKey={slideKey}
      codice={`public class Forma
{
    public ___ double CalcolaArea()  // 1. Rendi ridefinibile
    {
        return 0;
    }
}

public class Rettangolo : Forma
{
    private double larghezza, altezza;

    public Rettangolo(double l, double a)
    { larghezza = l; altezza = a; }

    public ___ double CalcolaArea()  // 2. Ridefinisci
    {
        return larghezza * altezza;
    }
}

// Utilizzo con polimorfismo
___ f1 = new Rettangolo(5, 10);  // 3. Che tipo usare?
Console.WriteLine(f1.CalcolaArea());  // Output: 50`}
      soluzioni={`1. virtual   → public virtual double CalcolaArea()
2. override  → public override double CalcolaArea()
3. Forma     → Forma f1 = new Rettangolo(5, 10)`}
      spiegazioneFinale="'virtual' nella base, 'override' nella derivata. Per il polimorfismo si usa il tipo base (Forma) come tipo della variabile!"
    />

    <EsercizioCodice
      numero={3}
      titolo="Interfaccia + Ereditarieta"
      descrizione="Completa usando l'interfaccia IAccendibile e la classe base Veicolo:"
      colore="pink"
      resetKey={slideKey}
      codice={`public ___ IAccendibile  // 1. Keyword per dichiarare interfaccia
{
    void Accendi();
    void Spegni();
}

public class Veicolo
{
    public string Modello { get; set; }
    public ___ void Accelera(int kmh)  // 2. Rendilo ridefinibile
    {
        Console.WriteLine($"{Modello}: +{kmh} km/h");
    }
}

// Auto: eredita da Veicolo E implementa IAccendibile
public class Auto ___ Veicolo, IAccendibile  // 3. Completa
{
    public void Accendi() { Console.WriteLine("Accesa!"); }
    public void Spegni() { Console.WriteLine("Spenta!"); }

    public ___ void Accelera(int kmh)  // 4. Ridefinisci
    {
        Console.WriteLine("Controllo accensione...");
        ___.Accelera(kmh);  // 5. Chiama versione base
    }
}`}
      soluzioni={`1. interface  → public interface IAccendibile
2. virtual    → public virtual void Accelera(int kmh)
3. :          → public class Auto : Veicolo, IAccendibile
4. override   → public override void Accelera(int kmh)
5. base       → base.Accelera(kmh)`}
      spiegazioneFinale="'interface' per dichiarare, ':' per ereditare/implementare (classe base PRIMA, interfacce DOPO), 'virtual/override' per il polimorfismo, 'base' per chiamare il metodo della classe padre."
    />
  </div>
);

const quizSlide3 = {
  isQuiz: true,
  slideId: "quiz-m4-3",
  title: "Esercizi: Completamento Codice",
  subtitle: "Completa il codice mancante",
  content: (slideKey) => <QuizSlide3Content slideKey={slideKey} />
};


// ========================================
// SLIDE 4: Flashcards + Sfida Pratica
// ========================================
const QuizSlide4Content = ({ slideKey }) => (
  <div className="space-y-6">
    <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 p-5 rounded-xl border-2 border-cyan-400/50">
      <h3 className="text-2xl font-bold text-cyan-300 flex items-center gap-3">
        <span className="text-3xl">🎴</span> Flashcards - Clicca per rivelare
      </h3>
      <p className="text-gray-400 text-sm mt-1">Prova a ricordare la definizione prima di cliccare!</p>
    </div>

    <div className="grid grid-cols-3 gap-3">
      <Flashcard termine="Classe Base" definizione="Classe da cui altre classi ereditano proprieta e metodi. Chiamata anche superclasse o parent class." esempio="class Animale { }" colore="blue" resetKey={slideKey} />
      <Flashcard termine="Classe Derivata" definizione="Classe che eredita da una classe base. Chiamata anche sottoclasse o child class." esempio="class Cane : Animale { }" colore="cyan" resetKey={slideKey} />
      <Flashcard termine="virtual" definizione="Keyword che indica che un metodo puo essere ridefinito nelle classi derivate." esempio="public virtual void Metodo()" colore="purple" resetKey={slideKey} />
      <Flashcard termine="override" definizione="Keyword che ridefinisce un metodo virtual della classe base con una nuova implementazione." esempio="public override void Metodo()" colore="pink" resetKey={slideKey} />
      <Flashcard termine="base" definizione="Keyword per accedere a membri della classe base da una classe derivata." esempio="base.Metodo() oppure : base(param)" colore="blue" resetKey={slideKey} />
      <Flashcard termine="abstract" definizione="Classe o metodo incompleto che DEVE essere implementato nelle classi derivate. Non istanziabile." esempio="public abstract class Forma { }" colore="cyan" resetKey={slideKey} />
      <Flashcard termine="interface" definizione="Contratto che definisce 'SA FARE': solo firme di metodi senza implementazione. Implementazione multipla." esempio="public interface IAccendibile { }" colore="green" resetKey={slideKey} />
      <Flashcard termine="protected" definizione="Modificatore: membro accessibile nella classe stessa e in tutte le classi derivate, non dall'esterno." esempio="protected string nome;" colore="orange" resetKey={slideKey} />
      <Flashcard termine="Upcasting" definizione="Conversione implicita da derivata a base. Sempre sicura, avviene automaticamente." esempio="Animale a = new Cane();" colore="green" resetKey={slideKey} />
      <Flashcard termine="Downcasting" definizione="Conversione esplicita da base a derivata. Serve 'as' o 'is' per sicurezza." esempio="Cane c = a as Cane;" colore="orange" resetKey={slideKey} />
      <Flashcard termine="Overloading" definizione="Polimorfismo compile-time: stesso nome metodo con parametri diversi. Risolto dal compilatore." esempio="Somma(int,int) vs Somma(double,double)" colore="blue" resetKey={slideKey} />
      <Flashcard termine="Overriding" definizione="Polimorfismo runtime: ridefinizione metodi virtual con stessa firma. Risolto a tempo di esecuzione." esempio="public override void FaiVerso()" colore="purple" resetKey={slideKey} />
    </div>

    {/* Sfida pratica */}
    <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-6 rounded-xl border-2 border-yellow-400/50">
      <h4 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
        <span className="text-3xl">🏆</span> Sfida Pratica
      </h4>
      <p className="text-gray-300 mb-4">
        Progetta un sistema di gestione per una biblioteca con le seguenti classi:
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-900 p-4 rounded-lg border border-yellow-500/30">
          <p className="text-yellow-300 font-bold mb-2">Classe Base</p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• <strong>MediaItem</strong>: titolo, anno, disponibile</li>
            <li>• Metodi virtual: StampaInfo(), CalcolaMulta(int giorni)</li>
          </ul>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg border border-orange-500/30">
          <p className="text-orange-300 font-bold mb-2">Classi Derivate</p>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>• <strong>Libro</strong>: autore, ISBN, numeroPagine</li>
            <li>• <strong>DVD</strong>: regista, durata</li>
            <li>• <strong>Rivista</strong>: numeroEdizione, mese</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-900 p-4 rounded-lg border border-yellow-500/30">
        <p className="text-yellow-200 font-bold mb-2">Obiettivo:</p>
        <p className="text-gray-300 text-sm">
          Implementa override di StampaInfo() e CalcolaMulta() per ogni tipo.
          Usa il polimorfismo per gestire una <code>List&lt;MediaItem&gt;</code> con tutti i media!
          La multa e diversa per tipo: Libro 0.50€/giorno, DVD 1.00€/giorno, Rivista 0.20€/giorno.
        </p>
      </div>
    </div>
  </div>
);

const quizSlide4 = {
  isQuiz: true,
  slideId: "quiz-m4-4",
  title: "Flashcards e Sfida Pratica",
  subtitle: "Ripasso termini chiave e sfida di progettazione",
  content: (slideKey) => <QuizSlide4Content slideKey={slideKey} />
};


// ========================================
// EXPORT: Array di slide quiz
// ========================================
const ereditarietaQuizSlides = [
  quizSlide1,  // Quiz Ereditarietà
  quizSlide2,  // Quiz Polimorfismo e Casting
  quizSlide3,  // Esercizi Completamento Codice
  quizSlide4   // Flashcards e Sfida Pratica
];

// Esporta per main.jsx (retrocompatibilità + nuovo array)
if (typeof window !== 'undefined') {
  window.ereditarietaQuizSlide = quizSlide1;  // Retrocompatibilità
  window.ereditarietaQuizSlides = ereditarietaQuizSlides;  // Nuovo: array di 4 slide
}
