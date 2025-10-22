// ============================================================================
// QUIZ INTERATTIVO: ASSOCIAZIONI TRA CLASSI
// ============================================================================
// Quiz su: Aggregazione, Composizione, Relazioni N-M, Tipi di Associazioni
// ============================================================================

// Componenti necessari (copiati inline, no import)
const { useState, useEffect } = React;

// Icon Components (inline SVG)
const IconWrapper = ({ children, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const CheckCircle = (props) => <IconWrapper {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></IconWrapper>;
const XCircle = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><line x1="15" x2="9" y1="9" y2="15"></line><line x1="9" x2="15" y1="9" y2="15"></line></IconWrapper>;
const Award = (props) => <IconWrapper {...props}><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></IconWrapper>;
const Brain = (props) => <IconWrapper {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path></IconWrapper>;
const Lightbulb = (props) => <IconWrapper {...props}><line x1="9" x2="15" y1="18" y2="18"></line><line x1="10" x2="14" y1="22" y2="22"></line><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></IconWrapper>;
const Target = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></IconWrapper>;
const RefreshCw = (props) => <IconWrapper {...props}><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></IconWrapper>;
const MessageCircle = (props) => <IconWrapper {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></IconWrapper>;
const ChevronRight = (props) => <IconWrapper {...props}><polyline points="9 18 15 12 9 6"></polyline></IconWrapper>;
const Link2 = (props) => <IconWrapper {...props}><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></IconWrapper>;
const Box = (props) => <IconWrapper {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></IconWrapper>;
const Layers = (props) => <IconWrapper {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></IconWrapper>;
const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></IconWrapper>;
const TrendingUp = (props) => <IconWrapper {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></IconWrapper>;
const Code = (props) => <IconWrapper {...props}><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></IconWrapper>;
const Rocket = (props) => <IconWrapper {...props}><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></IconWrapper>;

// ============================================================================
// QUIZ A SCELTA MULTIPLA - ASSOCIAZIONI
// ============================================================================

const quizQuestions = [
  {
    question: "Qual è la differenza principale tra AGGREGAZIONE e COMPOSIZIONE?",
    options: [
      "L'aggregazione usa un rombo pieno in UML, la composizione usa un rombo vuoto",
      "Nell'aggregazione gli oggetti hanno vita indipendente, nella composizione sono dipendenti dal contenitore",
      "L'aggregazione è una relazione 1-a-1, la composizione è 1-a-N",
      "Non c'è differenza sostanziale, sono solo nomi diversi per lo stesso concetto"
    ],
    correct: 1,
    explanation: "AGGREGAZIONE: gli oggetti contenuti esistono INDIPENDENTEMENTE dal contenitore (rombo VUOTO). COMPOSIZIONE: gli oggetti sono PARTE del contenitore e vengono distrutti con esso (rombo PIENO). Es: Squadra-Giocatori = aggregazione, Auto-Motore = composizione."
  },
  {
    question: "In UML, cosa rappresenta un rombo PIENO tra due classi?",
    options: [
      "Una semplice associazione bidirezionale",
      "Una relazione di ereditarietà",
      "Una composizione (relazione 'parte di' forte)",
      "Un'aggregazione (relazione 'ha un' debole)"
    ],
    correct: 2,
    explanation: "Il rombo PIENO indica COMPOSIZIONE: una relazione forte dove le parti NON possono esistere senza il tutto. Quando l'oggetto contenitore viene distrutto, anche le parti vengono distrutte. Es: Automobile ◆—— Motore."
  },
  {
    question: "Quale delle seguenti è un esempio corretto di AGGREGAZIONE?",
    options: [
      "Auto e Motore (il motore non può esistere senza l'auto)",
      "Casa e Stanze (le stanze sono parte integrante della casa)",
      "Università e Studenti (gli studenti esistono indipendentemente dall'università)",
      "Persona e Cuore (il cuore non può esistere senza la persona)"
    ],
    correct: 2,
    explanation: "Università-Studenti è AGGREGAZIONE perché gli studenti ESISTONO INDIPENDENTEMENTE dall'università. Possono lasciare l'università e continuare a esistere. Auto-Motore, Casa-Stanze, Persona-Cuore sono esempi di COMPOSIZIONE (parti che non esistono senza il tutto)."
  },
  {
    question: "In una relazione Molti-a-Molti (N-M) tra Studenti e Corsi, come si implementa in C#?",
    options: [
      "Ogni classe ha un singolo riferimento all'altra classe",
      "Solo la classe Studente ha un List<Corso>, non servono riferimenti in Corso",
      "Entrambe le classi hanno List<T> per gestire le relazioni bidirezionali",
      "Si usa sempre una classe di associazione intermedia (tabella ponte)"
    ],
    correct: 2,
    explanation: "In una relazione N-M, entrambe le classi hanno List<T>: Studente ha List<Corso> e Corso ha List<Studente>. Questo permette la navigazione BIDIREZIONALE. Quando uno studente si iscrive a un corso, si aggiorna sia la lista dello studente che quella del corso."
  },
  {
    question: "Cosa significa che una relazione è BIDIREZIONALE?",
    options: [
      "Che gli oggetti possono essere creati in entrambi i sensi",
      "Che si può navigare la relazione in entrambe le direzioni (da A a B e da B ad A)",
      "Che entrambe le classi devono avere lo stesso numero di attributi",
      "Che le classi devono ereditare l'una dall'altra"
    ],
    correct: 1,
    explanation: "Una relazione BIDIREZIONALE permette di navigare in ENTRAMBE le direzioni: da Studente posso ottenere i suoi Corsi, da Corso posso ottenere i suoi Studenti. Si implementa mantenendo riferimenti in entrambe le classi e aggiornandoli sincronizzati."
  },
  {
    question: "Quale cardinalità ha la relazione tra Squadra e Giocatori nell'aggregazione?",
    options: [
      "1-a-1 (uno-a-uno): una squadra ha un solo giocatore",
      "1-a-N (uno-a-molti): una squadra ha molti giocatori",
      "N-a-1 (molti-a-uno): molte squadre hanno un giocatore",
      "N-a-M (molti-a-molti): molte squadre hanno molti giocatori"
    ],
    correct: 1,
    explanation: "La relazione Squadra-Giocatori è 1-a-N (uno-a-molti): UNA squadra ha MOLTI giocatori. In C# si implementa con List<Giocatore> nella classe Squadra. Se fosse N-a-M (un giocatore in più squadre), entrambe avrebbero List<T>."
  },
  {
    question: "Quando si distrugge un oggetto Automobile che contiene un Motore (composizione), cosa succede al Motore?",
    options: [
      "Il motore continua a esistere e può essere assegnato a un'altra automobile",
      "Il motore viene automaticamente distrutto insieme all'automobile",
      "Il motore viene messo in una pool per essere riutilizzato",
      "Dipende da come è stata implementata la classe"
    ],
    correct: 1,
    explanation: "In una COMPOSIZIONE, quando il contenitore (Automobile) viene distrutto, anche le sue PARTI (Motore) vengono distrutte. Il Motore è creato DENTRO l'Automobile e la sua vita è legata ad essa. È una relazione di dipendenza esistenziale forte."
  }
];

const MultipleChoiceQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answers, setAnswers] = useState([]);

  const handleAnswerSelect = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].correct;
    setShowFeedback(true);

    const newAnswers = [...answers, {
      question: currentQuestion,
      selected: selectedAnswer,
      correct: isCorrect
    }];
    setAnswers(newAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizCompleted(false);
    setAnswers([]);
  };

  if (quizCompleted) {
    const percentage = Math.round((score / quizQuestions.length) * 100);
    let message, color, emoji;

    if (percentage >= 90) {
      message = "Eccellente! Padroneggi perfettamente le associazioni!";
      color = "green";
      emoji = "🏆";
    } else if (percentage >= 70) {
      message = "Ottimo lavoro! Hai una buona comprensione delle relazioni tra classi!";
      color = "cyan";
      emoji = "🎉";
    } else if (percentage >= 50) {
      message = "Buon inizio! Rivedi i concetti di aggregazione e composizione.";
      color = "yellow";
      emoji = "📚";
    } else {
      message = "Continua a studiare! Le associazioni sono fondamentali nella OOP.";
      color = "red";
      emoji = "💪";
    }

    return (
      <div className="space-y-6 animate-fadeIn">
        <div className={`bg-gradient-to-br from-${color}-900/40 to-${color}-800/20 p-8 rounded-2xl border-2 border-${color}-500/50 text-center`}>
          <div className="text-6xl mb-4">{emoji}</div>
          <h3 className="text-3xl font-bold mb-4 text-white">Quiz Completato!</h3>
          <div className="text-6xl font-bold mb-4">
            <span className={`text-${color}-400`}>{score}</span>
            <span className="text-gray-400 text-4xl">/{quizQuestions.length}</span>
          </div>
          <div className={`text-2xl font-semibold mb-4 text-${color}-300`}>
            {percentage}%
          </div>
          <p className="text-xl text-gray-300 mb-6">{message}</p>

          <div className="flex items-center justify-center gap-4 mb-6">
            {[...Array(quizQuestions.length)].map((_, i) => {
              const ans = answers.find(a => a.question === i);
              return (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                    ans?.correct
                      ? 'bg-green-500/30 text-green-400 border-2 border-green-500'
                      : 'bg-red-500/30 text-red-400 border-2 border-red-500'
                  }`}
                >
                  {ans?.correct ? '✓' : '✗'}
                </div>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <RefreshCw className="w-6 h-6" />
          Riprova il Quiz
        </button>
      </div>
    );
  }

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-gray-400">
          <span>Domanda {currentQuestion + 1} di {quizQuestions.length}</span>
          <span>Punteggio: {score}/{currentQuestion}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-500 ease-out rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-gradient-to-br from-blue-900/40 to-cyan-900/20 p-6 rounded-2xl border border-blue-500/30">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0 border-2 border-blue-500">
            <span className="text-2xl font-bold text-blue-400">{currentQuestion + 1}</span>
          </div>
          <h3 className="text-xl font-semibold text-white leading-relaxed pt-2">
            {question.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === question.correct;
            const showCorrect = showFeedback && isCorrect;
            const showWrong = showFeedback && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                  showCorrect
                    ? 'bg-green-900/40 border-green-500 text-green-300'
                    : showWrong
                    ? 'bg-red-900/40 border-red-500 text-red-300'
                    : isSelected
                    ? 'bg-blue-900/60 border-blue-400 text-blue-200'
                    : 'bg-gray-800/40 border-gray-600 text-gray-300 hover:border-blue-500 hover:bg-blue-900/20'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold border-2 ${
                    showCorrect
                      ? 'bg-green-500 border-green-400'
                      : showWrong
                      ? 'bg-red-500 border-red-400'
                      : isSelected
                      ? 'bg-blue-500 border-blue-400'
                      : 'bg-gray-700 border-gray-600'
                  }`}>
                    {showCorrect ? '✓' : showWrong ? '✗' : String.fromCharCode(65 + index)}
                  </div>
                  <span className="flex-1 font-medium">{option}</span>
                  {showCorrect && <CheckCircle className="w-6 h-6 text-green-400" />}
                  {showWrong && <XCircle className="w-6 h-6 text-red-400" />}
                </div>
              </button>
            );
          })}
        </div>

        {/* Feedback */}
        {showFeedback && (
          <div className={`mt-6 p-5 rounded-xl border-l-4 animate-slideDown ${
            selectedAnswer === question.correct
              ? 'bg-green-900/30 border-green-500 text-green-300'
              : 'bg-red-900/30 border-red-500 text-red-300'
          }`}>
            <div className="flex items-start gap-3 mb-3">
              {selectedAnswer === question.correct ? (
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
              ) : (
                <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
              )}
              <div>
                <p className="font-bold text-lg mb-2">
                  {selectedAnswer === question.correct ? 'Corretto! 🎉' : 'Non corretto 📚'}
                </p>
                <p className="text-gray-300 leading-relaxed">{question.explanation}</p>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-6 flex gap-3">
          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`flex-1 font-bold py-3 px-6 rounded-xl transition-all duration-300 transform ${
                selectedAnswer === null
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white hover:scale-105'
              }`}
            >
              Conferma Risposta
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              {currentQuestion < quizQuestions.length - 1 ? (
                <>
                  Prossima Domanda
                  <ChevronRight className="w-5 h-5" />
                </>
              ) : (
                <>
                  Vedi Risultati
                  <Award className="w-5 h-5" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// QUIZ "INDOVINA IL TIPO DI RELAZIONE"
// ============================================================================

const relationshipScenarios = [
  {
    scenario: "Una Biblioteca ha molti Libri. I libri possono esistere anche se la biblioteca chiude.",
    code: `public class Biblioteca
{
    private List<Libro> libri;

    public void AggiungiLibro(Libro libro)
    {
        libri.Add(libro);
    }
}`,
    options: ["Associazione Semplice", "Aggregazione", "Composizione", "Ereditarietà"],
    correct: 1,
    explanation: "È AGGREGAZIONE: i libri esistono INDIPENDENTEMENTE dalla biblioteca. Possono essere spostati o la biblioteca può chiudere, ma i libri continuano a esistere."
  },
  {
    scenario: "Un Computer ha una CPU. Se il computer viene distrutto, anche la CPU viene distrutta.",
    code: `public class Computer
{
    private CPU cpu;

    public Computer()
    {
        cpu = new CPU();  // Creato internamente
    }
}`,
    options: ["Associazione Semplice", "Aggregazione", "Composizione", "Polimorfismo"],
    correct: 2,
    explanation: "È COMPOSIZIONE: la CPU è creata DENTRO il Computer e la sua vita è legata ad esso. Se il computer viene distrutto, la CPU non può esistere separatamente."
  },
  {
    scenario: "Uno Studente frequenta molti Corsi e ogni Corso ha molti Studenti.",
    code: `public class Studente
{
    private List<Corso> corsi;
}

public class Corso
{
    private List<Studente> studenti;
}`,
    options: ["Aggregazione 1-N", "Composizione 1-N", "Associazione N-M", "Ereditarietà"],
    correct: 2,
    explanation: "È ASSOCIAZIONE N-M (Molti-a-Molti): entrambe le classi hanno List<T> per gestire le relazioni bidirezionali. Gli studenti e i corsi esistono indipendentemente."
  },
  {
    scenario: "Una Casa ha molte Stanze. Le stanze sono parte integrante della casa.",
    code: `public class Casa
{
    private List<Stanza> stanze;

    public Casa()
    {
        stanze = new List<Stanza>();
        stanze.Add(new Stanza("Cucina"));
        stanze.Add(new Stanza("Camera"));
    }
}`,
    options: ["Associazione Semplice", "Aggregazione", "Composizione", "Dipendenza"],
    correct: 2,
    explanation: "È COMPOSIZIONE: le stanze sono PARTE della casa e vengono create internamente. Se demolisci la casa, le stanze non esistono più come entità separate."
  },
  {
    scenario: "Un Cliente effettua molti Ordini. Gli ordini esistono finché esiste il cliente.",
    code: `public class Cliente
{
    private List<Ordine> ordini;

    public void CreaOrdine()
    {
        ordini.Add(new Ordine(this));
    }
}`,
    options: ["Aggregazione debole", "Composizione forte", "Associazione 1-1", "Ereditarietà"],
    correct: 1,
    explanation: "È COMPOSIZIONE: gli ordini sono creati DAL cliente e la loro esistenza è legata al cliente. In molti sistemi, se elimini un cliente, elimini anche i suoi ordini."
  },
  {
    scenario: "Un Team ha un Leader. Il leader può cambiare e può esistere senza il team.",
    code: `public class Team
{
    private Persona leader;

    public void AssegnaLeader(Persona p)
    {
        leader = p;
    }
}`,
    options: ["Composizione", "Aggregazione", "Ereditarietà", "Implementazione"],
    correct: 1,
    explanation: "È AGGREGAZIONE: il leader esiste INDIPENDENTEMENTE dal team. Può essere rimosso, il team può essere sciolto, ma la persona continua a esistere."
  }
];

const RelationshipGuessGame = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  const handleAnswerSelect = (index) => {
    if (showFeedback) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    const isCorrect = selectedAnswer === relationshipScenarios[currentScenario].correct;
    setShowFeedback(true);
    if (isCorrect) setScore(score + 1);
  };

  const handleNext = () => {
    if (currentScenario < relationshipScenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowFeedback(false);
    } else {
      setGameCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentScenario(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setGameCompleted(false);
  };

  if (gameCompleted) {
    const percentage = Math.round((score / relationshipScenarios.length) * 100);
    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="bg-gradient-to-br from-green-900/40 to-cyan-800/20 p-8 rounded-2xl border-2 border-green-500/50 text-center">
          <div className="text-6xl mb-4">🎯</div>
          <h3 className="text-3xl font-bold mb-4 text-white">Gioco Completato!</h3>
          <div className="text-6xl font-bold mb-4">
            <span className="text-green-400">{score}</span>
            <span className="text-gray-400 text-4xl">/{relationshipScenarios.length}</span>
          </div>
          <div className="text-2xl font-semibold mb-4 text-green-300">{percentage}%</div>
          <p className="text-xl text-gray-300">
            {percentage >= 80 ? "Eccellente! Riconosci perfettamente i tipi di relazione!" :
             percentage >= 60 ? "Buon lavoro! Stai imparando a distinguere le relazioni!" :
             "Continua a esercitarti! Le associazioni richiedono pratica."}
          </p>
        </div>
        <button
          onClick={handleRestart}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <RefreshCw className="w-6 h-6" />
          Rigioca
        </button>
      </div>
    );
  }

  const scenario = relationshipScenarios[currentScenario];

  return (
    <div className="space-y-6">
      <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Scenario {currentScenario + 1} di {relationshipScenarios.length}</span>
          <span className="text-sm text-gray-400">Punteggio: {score}/{currentScenario}</span>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/20 p-6 rounded-2xl border border-cyan-500/30">
        <h3 className="text-xl font-bold text-cyan-300 mb-4">📋 Leggi lo scenario:</h3>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">{scenario.scenario}</p>

        <div className="bg-gray-900 p-4 rounded-xl border border-gray-700 mb-6">
          <pre className="text-sm text-gray-300 font-mono overflow-x-auto">{scenario.code}</pre>
        </div>

        <h4 className="text-lg font-bold text-cyan-300 mb-4">🤔 Che tipo di relazione è?</h4>

        <div className="grid grid-cols-2 gap-3 mb-6">
          {scenario.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = index === scenario.correct;
            const showCorrect = showFeedback && isCorrect;
            const showWrong = showFeedback && isSelected && !isCorrect;

            return (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                disabled={showFeedback}
                className={`p-4 rounded-xl border-2 font-bold transition-all duration-300 ${
                  showCorrect ? 'bg-green-900/40 border-green-500 text-green-300' :
                  showWrong ? 'bg-red-900/40 border-red-500 text-red-300' :
                  isSelected ? 'bg-blue-900/60 border-blue-400 text-blue-200' :
                  'bg-gray-800/40 border-gray-600 text-gray-300 hover:border-cyan-500'
                } ${showFeedback ? 'cursor-not-allowed' : 'cursor-pointer hover:scale-105'}`}
              >
                {option}
                {showCorrect && <span className="ml-2">✓</span>}
                {showWrong && <span className="ml-2">✗</span>}
              </button>
            );
          })}
        </div>

        {showFeedback && (
          <div className={`p-5 rounded-xl border-l-4 ${
            selectedAnswer === scenario.correct
              ? 'bg-green-900/30 border-green-500'
              : 'bg-red-900/30 border-red-500'
          }`}>
            <p className="text-gray-300 leading-relaxed">{scenario.explanation}</p>
          </div>
        )}

        <div className="mt-6">
          {!showFeedback ? (
            <button
              onClick={handleSubmit}
              disabled={selectedAnswer === null}
              className={`w-full font-bold py-3 px-6 rounded-xl transition-all duration-300 ${
                selectedAnswer === null
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white hover:scale-105'
              }`}
            >
              Conferma Risposta
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="w-full bg-gradient-to-r from-green-600 to-cyan-600 hover:from-green-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
            >
              {currentScenario < relationshipScenarios.length - 1 ? 'Prossimo Scenario →' : 'Vedi Risultati'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// BACHECA DISCUSSIONE FINALE
// ============================================================================

const FinalDiscussionBoard = () => {
  const keyTakeaways = [
    {
      icon: Box,
      color: "blue",
      title: "Aggregazione (Rombo Vuoto)",
      content: "Relazione HAS-A DEBOLE. Gli oggetti hanno vita INDIPENDENTE. Es: Squadra-Giocatori, Università-Studenti."
    },
    {
      icon: Layers,
      color: "cyan",
      title: "Composizione (Rombo Pieno)",
      content: "Relazione HAS-A FORTE. Le parti NON esistono senza il tutto. Es: Auto-Motore, Casa-Stanze, Computer-CPU."
    },
    {
      icon: Link2,
      color: "purple",
      title: "Relazioni N-M",
      content: "Bidirezionali con List<T> su entrambi i lati. Es: Studenti-Corsi. Navigabili in entrambe le direzioni."
    },
    {
      icon: Target,
      color: "green",
      title: "Quando usare cosa?",
      content: "Chiediti: 'Se elimino il contenitore, le parti devono morire?' SÌ = Composizione, NO = Aggregazione."
    }
  ];

  const congratsMessages = [
    "🎉 Hai completato l'intero corso sulla Programmazione ad Oggetti!",
    "🚀 Ora conosci Classi, Oggetti, Ereditarietà, Polimorfismo e Associazioni!",
    "💻 Sei pronto per creare applicazioni orientate agli oggetti professionali!",
    "🏆 Continua a praticare e diventerai un esperto OOP!"
  ];

  return (
    <div className="space-y-8">
      <div className="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 p-8 rounded-2xl border-2 border-cyan-500/50 text-center">
        <Rocket className="w-20 h-20 text-cyan-400 mx-auto mb-4 animate-pulse" />
        <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
          🎓 Corso Completato!
        </h3>
        <p className="text-xl text-gray-300">Congratulazioni per aver completato il viaggio nella OOP!</p>
      </div>

      <div>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-cyan-400" />
          <h3 className="text-2xl font-bold text-cyan-400">Concetti Chiave sulle Associazioni</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {keyTakeaways.map((item, index) => (
            <div
              key={index}
              className={`bg-${item.color}-900/30 border-l-4 border-${item.color}-500 p-5 rounded-xl hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-start gap-4">
                <item.icon className={`w-10 h-10 text-${item.color}-400 flex-shrink-0`} />
                <div>
                  <h4 className={`font-bold text-lg mb-2 text-${item.color}-300`}>{item.title}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/20 p-6 rounded-2xl border border-green-500/40">
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="w-8 h-8 text-green-400" />
          <h3 className="text-2xl font-bold text-green-400">Messaggi Finali</h3>
        </div>
        <div className="space-y-4">
          {congratsMessages.map((msg, index) => (
            <div key={index} className="bg-gray-800/50 p-4 rounded-xl border border-green-500/30">
              <p className="text-lg text-gray-200 font-semibold">{msg}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/30">
        <div className="flex items-start gap-4">
          <TrendingUp className="w-8 h-8 text-blue-400 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-bold text-blue-400 mb-3">Prossimi Passi nel tuo Percorso OOP</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">1.</span>
                <span><strong className="text-cyan-400">Pratica quotidiana:</strong> Scrivi codice OOP ogni giorno, anche piccoli esercizi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">2.</span>
                <span><strong className="text-cyan-400">Design Patterns:</strong> Studia i pattern GoF (Singleton, Factory, Observer, Strategy, etc.)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">3.</span>
                <span><strong className="text-cyan-400">SOLID Principles:</strong> Approfondisci i 5 principi fondamentali del design OOP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">4.</span>
                <span><strong className="text-cyan-400">Progetti reali:</strong> Crea applicazioni complete (gestionale, e-commerce, giochi)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">5.</span>
                <span><strong className="text-cyan-400">Open Source:</strong> Contribuisci a progetti GitHub per imparare da altri sviluppatori</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center bg-gradient-to-r from-purple-900/30 to-blue-900/30 p-8 rounded-2xl border-2 border-purple-500/40">
        <div className="text-6xl mb-4">
          <span>🎉</span>
          <span className="mx-2">🚀</span>
          <span>💻</span>
          <span className="mx-2">🏆</span>
          <span>⭐</span>
        </div>
        <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
          Grazie per aver seguito questo corso!
        </p>
        <p className="text-2xl text-cyan-300 font-semibold mb-2">Buon Coding!</p>
        <p className="text-lg text-gray-400">Continua a imparare, a crescere e a creare software straordinario!</p>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPALE CON TABS
// ============================================================================

const AssociazioniQuizMain = () => {
  const [activeTab, setActiveTab] = useState('quiz');

  const tabs = [
    { id: 'quiz', label: 'Quiz', icon: Brain, color: 'blue' },
    { id: 'guess', label: 'Indovina Relazione', icon: Target, color: 'cyan' },
    { id: 'finale', label: 'Congratulazioni', icon: Rocket, color: 'green' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex items-center justify-center gap-4">
          <Link2 className="w-16 h-16 text-cyan-400 animate-pulse" />
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quiz: Associazioni tra Classi
            </h2>
            <p className="text-gray-400 text-lg mt-2">Aggregazione, Composizione e Relazioni N-M</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex items-center justify-center gap-3 py-4 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                isActive
                  ? `bg-gradient-to-r from-${tab.color}-600 to-cyan-600 text-white shadow-lg`
                  : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              <Icon className="w-6 h-6" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="min-h-[600px]">
        {activeTab === 'quiz' && <MultipleChoiceQuiz />}
        {activeTab === 'guess' && <RelationshipGuessGame />}
        {activeTab === 'finale' && <FinalDiscussionBoard />}
      </div>
    </div>
  );
};

// ============================================================================
// ESPORTAZIONE
// ============================================================================

const associazioniQuizSlide = {
  isQuiz: true,
  title: "Quiz Interattivo: Associazioni tra Classi",
  subtitle: "Aggregazione, Composizione, Relazioni N-M - Test Finale!",
  content: <AssociazioniQuizMain />
};
