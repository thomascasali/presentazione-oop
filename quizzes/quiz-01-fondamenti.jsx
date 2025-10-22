// ============================================================================
// QUIZ INTERATTIVO: FONDAMENTI DELLA PROGRAMMAZIONE AD OGGETTI
// ============================================================================
// Quiz completo con: Multiple Choice, Memory Game, Bacheca Discussione
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
const Clock = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></IconWrapper>;
const RefreshCw = (props) => <IconWrapper {...props}><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></IconWrapper>;
const MessageCircle = (props) => <IconWrapper {...props}><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></IconWrapper>;
const Zap = (props) => <IconWrapper {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></IconWrapper>;
const TrendingUp = (props) => <IconWrapper {...props}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></IconWrapper>;
const Star = (props) => <IconWrapper {...props}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></IconWrapper>;
const Layers = (props) => <IconWrapper {...props}><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path></IconWrapper>;
const Eye = (props) => <IconWrapper {...props}><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></IconWrapper>;
const EyeOff = (props) => <IconWrapper {...props}><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"></path><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"></path><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"></path><line x1="2" x2="22" y1="2" y2="22"></line></IconWrapper>;
const Lock = (props) => <IconWrapper {...props}><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></IconWrapper>;
const ChevronRight = (props) => <IconWrapper {...props}><polyline points="9 18 15 12 9 6"></polyline></IconWrapper>;
const ChevronLeft = (props) => <IconWrapper {...props}><polyline points="15 18 9 12 15 6"></polyline></IconWrapper>;

// ============================================================================
// QUIZ A SCELTA MULTIPLA
// ============================================================================

const quizQuestions = [
  {
    question: "Cos'è una CLASSE nella programmazione orientata agli oggetti?",
    options: [
      "Un'istanza specifica di un oggetto con valori concreti",
      "Un template o blueprint che definisce caratteristiche e comportamenti",
      "Una variabile che contiene dati di tipo numerico",
      "Un metodo che viene eseguito automaticamente"
    ],
    correct: 1,
    explanation: "Una classe è un TEMPLATE (stampo) che definisce la struttura e il comportamento di un tipo di oggetto. È come il progetto di una casa: definisce cosa avrà la casa, ma non è la casa stessa."
  },
  {
    question: "Qual è la differenza fondamentale tra CLASSE e OGGETTO?",
    options: [
      "Non c'è differenza, sono sinonimi",
      "La classe è il codice, l'oggetto è il file che lo contiene",
      "La classe è il template, l'oggetto è un'istanza concreta di quella classe",
      "L'oggetto definisce i metodi, la classe definisce gli attributi"
    ],
    correct: 2,
    explanation: "La CLASSE è il modello astratto (es. 'Auto'), mentre l'OGGETTO è un'istanza concreta con valori specifici (es. 'la mia Ferrari rossa'). Da una classe possiamo creare infiniti oggetti!"
  },
  {
    question: "In UML, cosa indica il simbolo '+' prima di un attributo?",
    options: [
      "Attributo obbligatorio che deve essere inizializzato",
      "Attributo di tipo numerico positivo",
      "Visibilità PUBLIC - accessibile ovunque",
      "Attributo statico condiviso tra tutte le istanze"
    ],
    correct: 2,
    explanation: "I simboli di visibilità UML sono: + (public), - (private), # (protected), ~ (package). Il simbolo '+' indica che l'attributo o metodo è PUBLIC, quindi accessibile dall'esterno della classe."
  },
  {
    question: "Qual è la differenza tra ATTRIBUTO DI ISTANZA e ATTRIBUTO STATIC?",
    options: [
      "Gli attributi static non possono essere modificati dopo l'inizializzazione",
      "Gli attributi di istanza sono condivisi, quelli static sono unici per oggetto",
      "Gli attributi di istanza sono unici per ogni oggetto, quelli static sono condivisi da tutti",
      "Non c'è differenza funzionale, solo di naming convention"
    ],
    correct: 2,
    explanation: "Attributo di ISTANZA: ogni oggetto ha la sua copia (es. 'nome' di ogni studente). Attributo STATIC: una sola copia condivisa da TUTTI gli oggetti (es. 'numeroTotaleStudenti' per contarli tutti)."
  },
  {
    question: "Quale convenzione di naming è corretta per un campo PRIVATO in C#?",
    options: [
      "NOME_CAMPO (UPPER_CASE con underscore)",
      "nomeCampo (camelCase) o _nomeCampo (con underscore iniziale)",
      "NomeCampo (PascalCase)",
      "nome-campo (kebab-case)"
    ],
    correct: 1,
    explanation: "In C# i campi privati usano camelCase (nomeCampo) o underscore+camelCase (_nomeCampo). PascalCase è per proprietà pubbliche e metodi. UPPER_CASE è per costanti."
  },
  {
    question: "Qual è il valore di default di un attributo 'string nome;' NON inizializzato in C#?",
    options: [
      "Una stringa vuota \"\"",
      "La stringa \"null\"",
      "null (riferimento nullo)",
      "Causa un errore di compilazione"
    ],
    correct: 2,
    explanation: "In C#, i tipi RIFERIMENTO (string, oggetti) hanno valore di default NULL. I tipi VALORE (int, bool, double) hanno default numerici (0, false, 0.0). È importante inizializzare per evitare NullReferenceException!"
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
      message = "Eccellente! Hai una comprensione solida dei fondamenti OOP!";
      color = "green";
      emoji = "🏆";
    } else if (percentage >= 70) {
      message = "Ottimo lavoro! Hai capito i concetti principali!";
      color = "cyan";
      emoji = "🎉";
    } else if (percentage >= 50) {
      message = "Buon inizio! Rivedi alcuni concetti per migliorare.";
      color = "yellow";
      emoji = "📚";
    } else {
      message = "Continua a studiare! Rileggi le slide e riprova.";
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
// MEMORY GAME / FLASHCARDS
// ============================================================================

const memoryCards = [
  { id: 1, concept: "Classe", definition: "Template o blueprint che definisce caratteristiche e comportamenti" },
  { id: 2, concept: "Oggetto", definition: "Istanza concreta di una classe con valori specifici" },
  { id: 3, concept: "Attributo", definition: "Variabile che rappresenta lo stato di un oggetto" },
  { id: 4, concept: "Metodo", definition: "Funzione che definisce il comportamento di una classe" },
  { id: 5, concept: "Visibilità +", definition: "Public - accessibile da qualsiasi parte del codice" },
  { id: 6, concept: "Visibilità -", definition: "Private - accessibile solo all'interno della classe" },
  { id: 7, concept: "Static", definition: "Attributo/metodo condiviso da tutte le istanze della classe" },
  { id: 8, concept: "Istanza", definition: "Oggetto specifico creato da una classe" }
];

const MemoryGame = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [time, setTime] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    let interval;
    if (gameStarted && !gameCompleted) {
      interval = setInterval(() => {
        setTime(t => t + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameCompleted]);

  useEffect(() => {
    if (matched.length === memoryCards.length * 2 && gameStarted) {
      setGameCompleted(true);
    }
  }, [matched, gameStarted]);

  const initializeGame = () => {
    const conceptCards = memoryCards.map(card => ({
      ...card,
      type: 'concept',
      uniqueId: `concept-${card.id}`
    }));
    const definitionCards = memoryCards.map(card => ({
      ...card,
      type: 'definition',
      uniqueId: `definition-${card.id}`
    }));

    const allCards = [...conceptCards, ...definitionCards];
    const shuffled = allCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  };

  const handleCardClick = (card) => {
    if (!gameStarted) setGameStarted(true);
    if (flipped.length === 2) return;
    if (flipped.find(f => f.uniqueId === card.uniqueId)) return;
    if (matched.includes(card.uniqueId)) return;

    const newFlipped = [...flipped, card];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      checkMatch(newFlipped);
    }
  };

  const checkMatch = (flippedCards) => {
    const [first, second] = flippedCards;

    if (first.id === second.id && first.type !== second.type) {
      setTimeout(() => {
        setMatched([...matched, first.uniqueId, second.uniqueId]);
        setFlipped([]);
      }, 800);
    } else {
      setTimeout(() => {
        setFlipped([]);
      }, 1200);
    }
  };

  const handleRestart = () => {
    initializeGame();
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setGameStarted(false);
    setGameCompleted(false);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (gameCompleted) {
    return (
      <div className="space-y-6 animate-fadeIn">
        <div className="bg-gradient-to-br from-green-900/40 to-cyan-800/20 p-8 rounded-2xl border-2 border-green-500/50 text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-3xl font-bold mb-4 text-white">Complimenti!</h3>
          <p className="text-xl text-gray-300 mb-6">Hai completato il Memory Game!</p>

          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-6">
            <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-500/30">
              <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-400">{formatTime(time)}</p>
              <p className="text-sm text-gray-400">Tempo</p>
            </div>
            <div className="bg-cyan-900/30 p-4 rounded-xl border border-cyan-500/30">
              <Target className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-2xl font-bold text-cyan-400">{moves}</p>
              <p className="text-sm text-gray-400">Mosse</p>
            </div>
          </div>

          <div className="mb-6">
            {moves <= 12 && <p className="text-green-400 font-semibold">🏆 Eccellente! Memoria da campione!</p>}
            {moves > 12 && moves <= 18 && <p className="text-cyan-400 font-semibold">⭐ Ottimo lavoro!</p>}
            {moves > 18 && <p className="text-yellow-400 font-semibold">💪 Buon tentativo! Riprova per migliorare!</p>}
          </div>
        </div>

        <button
          onClick={handleRestart}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3"
        >
          <RefreshCw className="w-6 h-6" />
          Gioca Ancora
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-500/30 text-center">
          <Clock className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <p className="text-xl font-bold text-blue-400">{formatTime(time)}</p>
          <p className="text-xs text-gray-400">Tempo</p>
        </div>
        <div className="bg-cyan-900/30 p-4 rounded-xl border border-cyan-500/30 text-center">
          <Target className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
          <p className="text-xl font-bold text-cyan-400">{moves}</p>
          <p className="text-xs text-gray-400">Mosse</p>
        </div>
        <div className="bg-green-900/30 p-4 rounded-xl border border-green-500/30 text-center">
          <Star className="w-6 h-6 text-green-400 mx-auto mb-2" />
          <p className="text-xl font-bold text-green-400">{matched.length / 2}</p>
          <p className="text-xs text-gray-400">Coppie</p>
        </div>
      </div>

      {/* Info */}
      <div className="bg-blue-900/20 p-4 rounded-xl border border-blue-500/30">
        <div className="flex items-center gap-3">
          <Lightbulb className="w-6 h-6 text-yellow-400" />
          <p className="text-sm text-gray-300">
            Clicca due carte per abbinare <span className="text-cyan-400 font-bold">concetti</span> con le loro <span className="text-blue-400 font-bold">definizioni</span>!
          </p>
        </div>
      </div>

      {/* Game Grid */}
      <div className="grid grid-cols-4 gap-3">
        {cards.map((card) => {
          const isFlipped = flipped.find(f => f.uniqueId === card.uniqueId) || matched.includes(card.uniqueId);
          const isMatched = matched.includes(card.uniqueId);

          return (
            <div
              key={card.uniqueId}
              onClick={() => handleCardClick(card)}
              className={`relative h-32 cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                isMatched ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              style={{ perspective: '1000px' }}
            >
              <div
                className={`w-full h-full transition-transform duration-500 relative`}
                style={{
                  transformStyle: 'preserve-3d',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Back of card */}
                <div
                  className="absolute w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl border-2 border-blue-400 flex items-center justify-center"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Brain className="w-12 h-12 text-white opacity-70" />
                </div>

                {/* Front of card */}
                <div
                  className={`absolute w-full h-full rounded-xl border-2 p-3 flex items-center justify-center text-center ${
                    card.type === 'concept'
                      ? 'bg-gradient-to-br from-purple-900/60 to-purple-700/40 border-purple-400'
                      : 'bg-gradient-to-br from-green-900/60 to-green-700/40 border-green-400'
                  } ${isMatched ? 'border-green-500 bg-green-900/40' : ''}`}
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <p className={`text-xs font-bold leading-tight ${
                    card.type === 'concept' ? 'text-purple-200' : 'text-green-200'
                  } ${isMatched ? 'text-green-300' : ''}`}>
                    {card.type === 'concept' ? card.concept : card.definition}
                  </p>
                  {isMatched && (
                    <div className="absolute top-1 right-1">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Restart Button */}
      <button
        onClick={handleRestart}
        className="w-full bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
      >
        <RefreshCw className="w-5 h-5" />
        Ricomincia
      </button>
    </div>
  );
};

// ============================================================================
// BACHECA DISCUSSIONE
// ============================================================================

const DiscussionBoard = () => {
  const keyPoints = [
    {
      icon: Brain,
      color: "blue",
      title: "Classe vs Oggetto",
      content: "Una classe è il TEMPLATE (lo stampo), l'oggetto è l'ISTANZA concreta. Come un progetto architettonico (classe) e le case costruite da quel progetto (oggetti)."
    },
    {
      icon: Layers,
      color: "cyan",
      title: "Attributi: Stato dell'Oggetto",
      content: "Gli attributi memorizzano lo STATO di un oggetto. Ogni oggetto ha la sua copia indipendente degli attributi di istanza."
    },
    {
      icon: Lock,
      color: "purple",
      title: "Incapsulamento",
      content: "Usa attributi PRIVATE e fornisci accesso controllato tramite metodi pubblici. Questo protegge i dati da modifiche indesiderate."
    },
    {
      icon: Target,
      color: "green",
      title: "Static vs Istanza",
      content: "STATIC = condiviso da tutti (es. contatore). ISTANZA = unico per ogni oggetto (es. nome). Scegli con attenzione!"
    },
    {
      icon: Eye,
      color: "yellow",
      title: "Visibilità in UML",
      content: "+ public | - private | # protected | ~ package. La visibilità controlla chi può accedere a attributi e metodi."
    },
    {
      icon: Zap,
      color: "red",
      title: "Inizializzazione",
      content: "SEMPRE inizializza gli attributi! I valori di default (null, 0) possono causare bug. Usa l'inizializzazione inline o il costruttore."
    }
  ];

  const questions = [
    {
      icon: Lightbulb,
      question: "Quando dovrei usare un attributo STATIC invece di un attributo di istanza?",
      hint: "Pensa a cosa deve essere condiviso tra TUTTI gli oggetti vs cosa è unico per OGNI oggetto"
    },
    {
      icon: Brain,
      question: "Perché è importante usare attributi PRIVATE invece di PUBLIC?",
      hint: "Considera cosa succede se chiunque può modificare direttamente i dati interni..."
    },
    {
      icon: Target,
      question: "Come posso rappresentare in UML una classe del mondo reale (es. Libro, Studente, Auto)?",
      hint: "Identifica: 1) attributi (caratteristiche), 2) metodi (azioni), 3) visibilità appropriate"
    },
    {
      icon: MessageCircle,
      question: "Qual è la differenza tra una COSTANTE (const) e un attributo STATIC?",
      hint: "Una può cambiare durante l'esecuzione, l'altra no..."
    }
  ];

  const [expandedPoint, setExpandedPoint] = useState(null);
  const [notes, setNotes] = useState({});

  const colorClasses = {
    blue: { bg: "bg-blue-900/30", border: "border-blue-500", text: "text-blue-400", hover: "hover:border-blue-400" },
    cyan: { bg: "bg-cyan-900/30", border: "border-cyan-500", text: "text-cyan-400", hover: "hover:border-cyan-400" },
    purple: { bg: "bg-purple-900/30", border: "border-purple-500", text: "text-purple-400", hover: "hover:border-purple-400" },
    green: { bg: "bg-green-900/30", border: "border-green-500", text: "text-green-400", hover: "hover:border-green-400" },
    yellow: { bg: "bg-yellow-900/30", border: "border-yellow-500", text: "text-yellow-400", hover: "hover:border-yellow-400" },
    red: { bg: "bg-red-900/30", border: "border-red-500", text: "text-red-400", hover: "hover:border-red-400" }
  };

  return (
    <div className="space-y-8">
      {/* Key Points Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <Award className="w-8 h-8 text-cyan-400" />
          <h3 className="text-2xl font-bold text-cyan-400">Punti Chiave da Ricordare</h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {keyPoints.map((point, index) => {
            const colors = colorClasses[point.color];
            return (
              <div
                key={index}
                className={`${colors.bg} ${colors.border} border-l-4 p-5 rounded-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer`}
              >
                <div className="flex items-start gap-4">
                  <point.icon className={`w-10 h-10 ${colors.text} flex-shrink-0`} />
                  <div className="flex-1">
                    <h4 className={`font-bold text-lg mb-2 ${colors.text}`}>{point.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{point.content}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Questions Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <MessageCircle className="w-8 h-8 text-green-400" />
          <h3 className="text-2xl font-bold text-green-400">Domande di Riflessione</h3>
        </div>

        <div className="space-y-4">
          {questions.map((q, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-800/50 to-gray-700/30 p-5 rounded-xl border border-gray-600 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-cyan-900/40 flex items-center justify-center flex-shrink-0 border-2 border-cyan-500">
                  <span className="text-lg font-bold text-cyan-400">{index + 1}</span>
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold text-lg mb-3 leading-relaxed">{q.question}</p>

                  <button
                    onClick={() => setExpandedPoint(expandedPoint === index ? null : index)}
                    className="text-sm text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2 transition-colors"
                  >
                    <Lightbulb className="w-4 h-4" />
                    {expandedPoint === index ? 'Nascondi suggerimento' : 'Mostra suggerimento'}
                  </button>

                  {expandedPoint === index && (
                    <div className="mt-4 p-4 bg-cyan-900/20 rounded-lg border border-cyan-500/30 animate-slideDown">
                      <p className="text-cyan-300 text-sm italic">{q.hint}</p>
                    </div>
                  )}

                  <div className="mt-4">
                    <textarea
                      placeholder="Annota qui le tue riflessioni..."
                      value={notes[index] || ''}
                      onChange={(e) => setNotes({ ...notes, [index]: e.target.value })}
                      className="w-full bg-gray-900/50 border border-gray-600 rounded-lg p-3 text-gray-300 text-sm placeholder-gray-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                      rows="3"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/30">
        <div className="flex items-start gap-4">
          <TrendingUp className="w-8 h-8 text-blue-400 flex-shrink-0" />
          <div>
            <h4 className="text-xl font-bold text-blue-400 mb-3">Consigli per lo Studio</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span>Pratica con esempi reali: pensa a oggetti del mondo reale e modellali in UML</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span>Scrivi codice: implementa classi semplici in C# per consolidare i concetti</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span>Confronta: analizza codice esistente e identifica classi, attributi, metodi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 font-bold mt-1">•</span>
                <span>Discuti: spiega i concetti a qualcun altro per verificare la tua comprensione</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// COMPONENTE PRINCIPALE CON TABS
// ============================================================================

const FondamentiQuizMain = () => {
  const [activeTab, setActiveTab] = useState('quiz');

  const tabs = [
    { id: 'quiz', label: 'Quiz', icon: Brain, color: 'blue' },
    { id: 'memory', label: 'Memory Game', icon: Layers, color: 'cyan' },
    { id: 'discussion', label: 'Bacheca', icon: MessageCircle, color: 'green' }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <div className="flex items-center justify-center gap-4">
          <Brain className="w-16 h-16 text-cyan-400 animate-pulse" />
          <div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Quiz Interattivo: Fondamenti OOP
            </h2>
            <p className="text-gray-400 text-lg mt-2">Metti alla prova le tue conoscenze su Classi, Oggetti e Attributi!</p>
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
        {activeTab === 'memory' && <MemoryGame />}
        {activeTab === 'discussion' && <DiscussionBoard />}
      </div>
    </div>
  );
};

// ============================================================================
// ESPORTAZIONE
// ============================================================================

const fondamentiQuizSlide = {
  isQuiz: true,
  title: "Quiz Interattivo: Fondamenti OOP",
  subtitle: "Classi, Oggetti, Attributi - Verifica la tua comprensione!",
  content: <FondamentiQuizMain />
};
