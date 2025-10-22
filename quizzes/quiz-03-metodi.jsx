// quizzes/quiz-03-metodi.jsx
// Quiz su Metodi, Incapsulamento e Visibilità

const React = window.React;
const { useState } = React;

// ========== ICON DEFINITIONS ==========
const IconWrapper = ({ children, className = "", ...props }) =>
  React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    ...props
  }, children);

const CheckCircle = (props) => React.createElement(IconWrapper, props,
  React.createElement("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14" }),
  React.createElement("polyline", { points: "22 4 12 14.01 9 11.01" })
);

const XCircle = (props) => React.createElement(IconWrapper, props,
  React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
  React.createElement("path", { d: "m15 9-6 6" }),
  React.createElement("path", { d: "m9 9 6 6" })
);

const GripVertical = (props) => React.createElement(IconWrapper, props,
  React.createElement("circle", { cx: "9", cy: "12", r: "1" }),
  React.createElement("circle", { cx: "9", cy: "5", r: "1" }),
  React.createElement("circle", { cx: "9", cy: "19", r: "1" }),
  React.createElement("circle", { cx: "15", cy: "12", r: "1" }),
  React.createElement("circle", { cx: "15", cy: "5", r: "1" }),
  React.createElement("circle", { cx: "15", cy: "19", r: "1" })
);

const MessageSquare = (props) => React.createElement(IconWrapper, props,
  React.createElement("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" })
);

const Send = (props) => React.createElement(IconWrapper, props,
  React.createElement("path", { d: "m22 2-7 20-4-9-9-4Z" }),
  React.createElement("path", { d: "M22 2 11 13" })
);

const ThumbsUp = (props) => React.createElement(IconWrapper, props,
  React.createElement("path", { d: "M7 10v12" }),
  React.createElement("path", { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" })
);

// ========== QUIZ SCELTA MULTIPLA (6 domande) ==========

const QuizMetodi = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Qual è la differenza principale tra un metodo void e un metodo con tipo di ritorno?",
      options: [
        "I metodi void sono più veloci",
        "I metodi void non possono avere parametri",
        "I metodi void eseguono azioni senza restituire valori, mentre i metodi con tipo di ritorno restituiscono un valore",
        "I metodi void sono sempre privati"
      ],
      correct: 2,
      explanation: "I metodi void eseguono operazioni senza restituire un valore (return opzionale solo per uscita anticipata), mentre i metodi con tipo di ritorno devono restituire un valore del tipo specificato con l'istruzione return."
    },
    {
      id: 2,
      question: "Cos'è il method overloading?",
      options: [
        "Creare troppi metodi in una classe",
        "Definire più metodi con lo stesso nome ma parametri diversi (numero, tipo o ordine)",
        "Sovrascrivere metodi della classe base",
        "Rendere un metodo pubblico"
      ],
      correct: 1,
      explanation: "Il method overloading (sovraccarico) permette di definire più versioni dello stesso metodo con parametri diversi. Il compilatore sceglie automaticamente la versione corretta in base agli argomenti passati."
    },
    {
      id: 3,
      question: "Quando un metodo dovrebbe essere dichiarato static?",
      options: [
        "Sempre, per migliorare le performance",
        "Quando non accede a dati di istanza e appartiene logicamente alla classe stessa",
        "Solo se è privato",
        "Mai, perché static è deprecato"
      ],
      correct: 1,
      explanation: "Un metodo dovrebbe essere static quando non necessita di accedere ai dati di un'istanza specifica e rappresenta un'operazione logicamente associata alla classe stessa (es: Math.Max, Convert.ToInt32)."
    },
    {
      id: 4,
      question: "Qual è il vantaggio principale dell'incapsulamento?",
      options: [
        "Rende il codice più veloce",
        "Protegge i dati da accessi e modifiche incontrollate, garantendo validazione e coerenza",
        "Riduce la dimensione del file",
        "Permette di usare più memoria"
      ],
      correct: 1,
      explanation: "L'incapsulamento protegge i dati interni nascondendoli (information hiding) e fornendo accesso controllato tramite metodi che possono validare gli input, garantendo l'integrità dello stato dell'oggetto."
    },
    {
      id: 5,
      question: "Quale modificatore di visibilità usare per un attributo che deve essere accessibile solo dalla classe stessa e dalle sue sottoclassi?",
      options: [
        "public",
        "private",
        "protected",
        "internal"
      ],
      correct: 2,
      explanation: "Il modificatore 'protected' rende un membro accessibile dalla classe che lo dichiara e da tutte le classi che ne ereditano. È ideale per dati che devono essere condivisi nella gerarchia di ereditarietà ma nascosti all'esterno."
    },
    {
      id: 6,
      question: "Secondo il principio del minimo privilegio, come dovremmo dichiarare gli attributi di una classe?",
      options: [
        "Sempre public per flessibilità",
        "Sempre private, esponendo accesso solo tramite metodi o properties pubbliche se necessario",
        "Sempre protected per l'ereditarietà",
        "Dipende dall'umore del programmatore"
      ],
      correct: 1,
      explanation: "Il principio del minimo privilegio suggerisce di usare sempre il livello più restrittivo possibile. Gli attributi dovrebbero essere private, esponendo accesso controllato solo tramite metodi pubblici o properties quando necessario."
    }
  ];

  const handleAnswer = (questionId, optionIndex) => {
    if (!showResults) {
      setSelectedAnswers({
        ...selectedAnswers,
        [questionId]: optionIndex
      });
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correct) correct++;
    });
    return correct;
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length === questions.length) {
      setShowResults(true);
    } else {
      alert('Per favore rispondi a tutte le domande prima di inviare!');
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = showResults ? calculateScore() : 0;
  const percentage = showResults ? Math.round((score / questions.length) * 100) : 0;

  return React.createElement("div", { className: "space-y-8" },
    React.createElement("div", { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border-l-4 border-cyan-400" },
      React.createElement("h3", { className: "text-2xl font-bold text-cyan-300 mb-2" }, "Quiz: Metodi e Incapsulamento"),
      React.createElement("p", { className: "text-gray-300" }, "Rispondi alle seguenti domande per testare la tua comprensione")
    ),

    // Domande
    questions.map((q, idx) =>
      React.createElement("div", {
        key: q.id,
        className: "bg-gray-900/50 p-6 rounded-xl border border-blue-500/30"
      },
        React.createElement("h4", { className: "text-lg font-bold text-blue-300 mb-4" },
          `${idx + 1}. ${q.question}`
        ),
        React.createElement("div", { className: "space-y-3" },
          q.options.map((option, optIdx) => {
            const isSelected = selectedAnswers[q.id] === optIdx;
            const isCorrect = optIdx === q.correct;
            const showCorrect = showResults && isCorrect;
            const showIncorrect = showResults && isSelected && !isCorrect;

            let borderColor = "border-gray-600";
            let bgColor = "bg-gray-800/50";
            let textColor = "text-gray-300";

            if (showCorrect) {
              borderColor = "border-green-500";
              bgColor = "bg-green-900/30";
              textColor = "text-green-300";
            } else if (showIncorrect) {
              borderColor = "border-red-500";
              bgColor = "bg-red-900/30";
              textColor = "text-red-300";
            } else if (isSelected) {
              borderColor = "border-cyan-500";
              bgColor = "bg-cyan-900/20";
              textColor = "text-cyan-300";
            }

            return React.createElement("div", {
              key: optIdx,
              onClick: () => handleAnswer(q.id, optIdx),
              className: `p-4 rounded-lg border-2 ${borderColor} ${bgColor} cursor-pointer transition-all hover:scale-102 flex items-center justify-between`
            },
              React.createElement("span", { className: `${textColor} font-medium` }, option),
              showCorrect && React.createElement(CheckCircle, { className: "w-6 h-6 text-green-400" }),
              showIncorrect && React.createElement(XCircle, { className: "w-6 h-6 text-red-400" })
            );
          })
        ),
        showResults && React.createElement("div", {
          className: `mt-4 p-4 rounded-lg ${selectedAnswers[q.id] === q.correct ? 'bg-green-900/20 border border-green-500/30' : 'bg-blue-900/20 border border-blue-500/30'}`
        },
          React.createElement("p", { className: "text-sm text-gray-300" },
            React.createElement("strong", { className: "text-cyan-300" }, "Spiegazione: "),
            q.explanation
          )
        )
      )
    ),

    // Pulsanti e Risultati
    React.createElement("div", { className: "flex gap-4 items-center" },
      !showResults && React.createElement("button", {
        onClick: handleSubmit,
        className: "px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg"
      }, "Invia Risposte"),
      showResults && React.createElement("button", {
        onClick: handleReset,
        className: "px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg"
      }, "Ricomincia Quiz"),
      showResults && React.createElement("div", {
        className: `flex-1 p-4 rounded-xl ${percentage >= 80 ? 'bg-green-900/30 border-2 border-green-500' : percentage >= 60 ? 'bg-yellow-900/30 border-2 border-yellow-500' : 'bg-red-900/30 border-2 border-red-500'}`
      },
        React.createElement("p", { className: "text-2xl font-bold text-center" },
          React.createElement("span", {
            className: percentage >= 80 ? 'text-green-300' : percentage >= 60 ? 'text-yellow-300' : 'text-red-300'
          }, `${score}/${questions.length}`),
          React.createElement("span", { className: "text-gray-400 text-lg ml-2" }, `(${percentage}%)`)
        ),
        React.createElement("p", { className: "text-center text-gray-300 text-sm mt-1" },
          percentage >= 80 ? "Eccellente! Ottima padronanza dei concetti!" :
            percentage >= 60 ? "Buon lavoro! Rivedi alcuni concetti." :
              "Continua a studiare, ce la farai!"
        )
      )
    )
  );
};

// ========== DRAG AND DROP - VISIBILITÀ CORRETTA ==========

const DragDropVisibilita = () => {
  const [dropped, setDropped] = useState({});
  const [draggedItem, setDraggedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const modifiers = [
    { id: 'public', symbol: '+', label: 'public', color: 'green' },
    { id: 'private', symbol: '-', label: 'private', color: 'red' },
    { id: 'protected', symbol: '#', label: 'protected', color: 'yellow' },
    { id: 'internal', symbol: '~', label: 'internal', color: 'blue' }
  ];

  const exercises = [
    {
      id: 1,
      member: "passwordHash: string",
      description: "Attributo per memorizzare l'hash della password",
      correct: 'private',
      explanation: "Le password hash devono essere sempre private per sicurezza, mai esposte all'esterno."
    },
    {
      id: 2,
      member: "Username: string",
      description: "Proprietà che rappresenta il nome utente visibile",
      correct: 'public',
      explanation: "Il nome utente è parte dell'interfaccia pubblica e deve essere accessibile dall'esterno."
    },
    {
      id: 3,
      member: "ValidaInput()",
      description: "Metodo helper per validare i dati in input",
      correct: 'private',
      explanation: "I metodi helper e di validazione interna sono dettagli implementativi e dovrebbero essere private."
    },
    {
      id: 4,
      member: "accountBloccato: bool",
      description: "Flag che indica se l'account è bloccato, usato anche nelle sottoclassi",
      correct: 'protected',
      explanation: "Protected permette l'accesso alle sottoclassi (es: UtenteAdmin) mantenendo l'incapsulamento verso l'esterno."
    },
    {
      id: 5,
      member: "IdDatabase: int",
      description: "ID interno usato per sincronizzazione con altri moduli dello stesso progetto",
      correct: 'internal',
      explanation: "Internal permette l'accesso solo all'interno dello stesso assembly/progetto, ideale per collaborazione tra moduli interni."
    }
  ];

  const handleDragStart = (modifier) => {
    setDraggedItem(modifier);
  };

  const handleDrop = (exerciseId) => {
    if (draggedItem && !showResults) {
      setDropped({
        ...dropped,
        [exerciseId]: draggedItem
      });
      setDraggedItem(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemove = (exerciseId) => {
    if (!showResults) {
      const newDropped = { ...dropped };
      delete newDropped[exerciseId];
      setDropped(newDropped);
    }
  };

  const handleSubmit = () => {
    if (Object.keys(dropped).length === exercises.length) {
      setShowResults(true);
    } else {
      alert('Per favore assegna un modificatore a tutti i membri prima di controllare!');
    }
  };

  const handleReset = () => {
    setDropped({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    exercises.forEach(ex => {
      if (dropped[ex.id]?.id === ex.correct) correct++;
    });
    return correct;
  };

  const score = showResults ? calculateScore() : 0;
  const percentage = showResults ? Math.round((score / exercises.length) * 100) : 0;

  const getColorClasses = (color) => {
    const colors = {
      green: { bg: 'bg-green-900/30', border: 'border-green-500', text: 'text-green-300' },
      red: { bg: 'bg-red-900/30', border: 'border-red-500', text: 'text-red-300' },
      yellow: { bg: 'bg-yellow-900/30', border: 'border-yellow-500', text: 'text-yellow-300' },
      blue: { bg: 'bg-blue-900/30', border: 'border-blue-500', text: 'text-blue-300' }
    };
    return colors[color];
  };

  return React.createElement("div", { className: "space-y-8" },
    React.createElement("div", { className: "bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border-l-4 border-purple-400" },
      React.createElement("h3", { className: "text-2xl font-bold text-purple-300 mb-2" }, "Drag & Drop: Visibilità Corretta"),
      React.createElement("p", { className: "text-gray-300" }, "Trascina il modificatore di visibilità corretto per ogni membro della classe")
    ),

    // Modificatori draggable
    React.createElement("div", { className: "bg-gray-900/50 p-6 rounded-xl border border-purple-500/30" },
      React.createElement("h4", { className: "text-lg font-bold text-purple-300 mb-4 flex items-center" },
        React.createElement(GripVertical, { className: "w-5 h-5 mr-2" }),
        "Modificatori Disponibili"
      ),
      React.createElement("div", { className: "grid grid-cols-4 gap-4" },
        modifiers.map(mod => {
          const colors = getColorClasses(mod.color);
          return React.createElement("div", {
            key: mod.id,
            draggable: !showResults,
            onDragStart: () => handleDragStart(mod),
            className: `${colors.bg} ${colors.border} border-2 p-4 rounded-lg cursor-move text-center hover:scale-105 transition-transform ${showResults ? 'opacity-50 cursor-not-allowed' : ''}`
          },
            React.createElement("div", { className: `text-3xl font-bold mb-2 ${colors.text}` }, mod.symbol),
            React.createElement("div", { className: `text-sm font-bold ${colors.text}` }, mod.label)
          );
        })
      )
    ),

    // Esercizi
    exercises.map((ex, idx) => {
      const droppedMod = dropped[ex.id];
      const isCorrect = showResults && droppedMod?.id === ex.correct;
      const isIncorrect = showResults && droppedMod && droppedMod.id !== ex.correct;
      const correctMod = modifiers.find(m => m.id === ex.correct);

      return React.createElement("div", {
        key: ex.id,
        className: `bg-gray-900/50 p-6 rounded-xl border-2 ${isCorrect ? 'border-green-500' : isIncorrect ? 'border-red-500' : 'border-gray-700'}`
      },
        React.createElement("div", { className: "flex items-start gap-4" },
          React.createElement("div", { className: "flex-1" },
            React.createElement("h4", { className: "text-lg font-bold text-cyan-300 mb-2" },
              `${idx + 1}. ${ex.member}`
            ),
            React.createElement("p", { className: "text-gray-400 text-sm mb-4" }, ex.description)
          ),

          // Drop zone
          React.createElement("div", {
            onDrop: () => handleDrop(ex.id),
            onDragOver: handleDragOver,
            className: `w-40 h-24 border-4 border-dashed ${droppedMod ? 'border-cyan-500' : 'border-gray-600'} rounded-lg flex items-center justify-center relative ${!showResults && 'hover:border-cyan-400 hover:bg-cyan-900/10'}`
          },
            droppedMod ? (
              React.createElement("div", {
                className: `${getColorClasses(droppedMod.color).bg} ${getColorClasses(droppedMod.color).border} border-2 p-3 rounded-lg w-full h-full flex flex-col items-center justify-center relative`
              },
                React.createElement("div", { className: `text-3xl font-bold ${getColorClasses(droppedMod.color).text}` }, droppedMod.symbol),
                React.createElement("div", { className: `text-sm font-bold ${getColorClasses(droppedMod.color).text}` }, droppedMod.label),
                !showResults && React.createElement("button", {
                  onClick: () => handleRemove(ex.id),
                  className: "absolute top-1 right-1 text-red-400 hover:text-red-300 text-xl font-bold"
                }, "×")
              )
            ) : (
              React.createElement("span", { className: "text-gray-500 text-sm text-center px-2" }, "Trascina qui")
            )
          )
        ),

        // Risultati
        showResults && React.createElement("div", {
          className: `mt-4 p-4 rounded-lg ${isCorrect ? 'bg-green-900/20 border border-green-500/30' : 'bg-red-900/20 border border-red-500/30'}`
        },
          React.createElement("div", { className: "flex items-start gap-2 mb-2" },
            isCorrect ?
              React.createElement(CheckCircle, { className: "w-5 h-5 text-green-400 mt-0.5" }) :
              React.createElement(XCircle, { className: "w-5 h-5 text-red-400 mt-0.5" }),
            React.createElement("div", null,
              isCorrect ?
                React.createElement("p", { className: "text-green-300 font-bold" }, "Corretto!") :
                React.createElement("p", { className: "text-red-300 font-bold" },
                  `Sbagliato! La risposta corretta è: `,
                  React.createElement("span", { className: getColorClasses(correctMod.color).text }, `${correctMod.symbol} ${correctMod.label}`)
                )
            )
          ),
          React.createElement("p", { className: "text-sm text-gray-300 mt-2" },
            React.createElement("strong", { className: "text-cyan-300" }, "Spiegazione: "),
            ex.explanation
          )
        )
      );
    }),

    // Pulsanti e Risultati
    React.createElement("div", { className: "flex gap-4 items-center" },
      !showResults && React.createElement("button", {
        onClick: handleSubmit,
        className: "px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg"
      }, "Controlla Risposte"),
      showResults && React.createElement("button", {
        onClick: handleReset,
        className: "px-8 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-bold rounded-lg hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg"
      }, "Ricomincia Esercizio"),
      showResults && React.createElement("div", {
        className: `flex-1 p-4 rounded-xl ${percentage === 100 ? 'bg-green-900/30 border-2 border-green-500' : percentage >= 60 ? 'bg-yellow-900/30 border-2 border-yellow-500' : 'bg-red-900/30 border-2 border-red-500'}`
      },
        React.createElement("p", { className: "text-2xl font-bold text-center" },
          React.createElement("span", {
            className: percentage === 100 ? 'text-green-300' : percentage >= 60 ? 'text-yellow-300' : 'text-red-300'
          }, `${score}/${exercises.length}`),
          React.createElement("span", { className: "text-gray-400 text-lg ml-2" }, `(${percentage}%)`)
        ),
        React.createElement("p", { className: "text-center text-gray-300 text-sm mt-1" },
          percentage === 100 ? "Perfetto! Hai padronanza totale dei modificatori!" :
            percentage >= 60 ? "Bene! Rivedi i casi più complessi." :
              "Continua a studiare i modificatori di visibilità!"
        )
      )
    )
  );
};

// ========== BACHECA DISCUSSIONE ==========

const BachecaDiscussione = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: "Marco R.",
      timestamp: "2 ore fa",
      text: "Domanda: quando dovrei usare 'internal' invece di 'public'? Non mi è chiara la differenza pratica.",
      likes: 5
    },
    {
      id: 2,
      author: "Prof. Anna B.",
      timestamp: "1 ora fa",
      text: "Ottima domanda! Usa 'internal' quando vuoi che una classe o un metodo sia accessibile solo all'interno del tuo progetto/assembly ma non dall'esterno. È utile per API interne che non vuoi esporre a chi usa la tua libreria.",
      likes: 12
    },
    {
      id: 3,
      author: "Luigi V.",
      timestamp: "45 min fa",
      text: "L'incapsulamento mi ha salvato da un bug terribile! Avevo un attributo 'saldo' pubblico e qualcuno lo modificava direttamente. Quando l'ho reso privato con un metodo SetSaldo() che valida l'input, il bug è sparito!",
      likes: 8
    },
    {
      id: 4,
      author: "Sofia M.",
      timestamp: "30 min fa",
      text: "Consiglio: pensate all'incapsulamento come a una capsula di medicina. La capsula protegge il farmaco e controlla come viene rilasciato. Stesso concetto con i dati! 💊",
      likes: 15
    }
  ]);

  const [newComment, setNewComment] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() && username.trim()) {
      const comment = {
        id: comments.length + 1,
        author: username,
        timestamp: "Adesso",
        text: newComment,
        likes: 0
      };
      setComments([...comments, comment]);
      setNewComment('');
    }
  };

  const handleLike = (id) => {
    setComments(comments.map(c =>
      c.id === id ? { ...c, likes: c.likes + 1 } : c
    ));
  };

  return React.createElement("div", { className: "space-y-6" },
    React.createElement("div", { className: "bg-gradient-to-r from-cyan-900/30 to-blue-900/30 p-6 rounded-xl border-l-4 border-cyan-400" },
      React.createElement("h3", { className: "text-2xl font-bold text-cyan-300 mb-2 flex items-center" },
        React.createElement(MessageSquare, { className: "w-7 h-7 mr-3" }),
        "Bacheca Discussione"
      ),
      React.createElement("p", { className: "text-gray-300" }, "Condividi dubbi, esperienze e domande con la classe")
    ),

    // Form nuovo commento
    React.createElement("div", { className: "bg-gray-900/50 p-6 rounded-xl border border-cyan-500/30" },
      React.createElement("form", { onSubmit: handleSubmit, className: "space-y-4" },
        React.createElement("input", {
          type: "text",
          placeholder: "Il tuo nome...",
          value: username,
          onChange: (e) => setUsername(e.target.value),
          className: "w-full p-3 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:border-cyan-500 focus:outline-none"
        }),
        React.createElement("textarea", {
          placeholder: "Scrivi un commento, una domanda o condividi la tua esperienza...",
          value: newComment,
          onChange: (e) => setNewComment(e.target.value),
          rows: 4,
          className: "w-full p-4 bg-gray-800 border border-gray-600 rounded-lg text-gray-200 focus:border-cyan-500 focus:outline-none resize-none"
        }),
        React.createElement("button", {
          type: "submit",
          className: "px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold rounded-lg hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg flex items-center gap-2"
        },
          React.createElement(Send, { className: "w-5 h-5" }),
          "Pubblica Commento"
        )
      )
    ),

    // Lista commenti
    React.createElement("div", { className: "space-y-4" },
      comments.map(comment =>
        React.createElement("div", {
          key: comment.id,
          className: "bg-gray-900/50 p-5 rounded-xl border border-blue-500/30 hover:border-cyan-500/50 transition-all"
        },
          React.createElement("div", { className: "flex justify-between items-start mb-3" },
            React.createElement("div", null,
              React.createElement("h4", { className: "font-bold text-cyan-300" }, comment.author),
              React.createElement("p", { className: "text-xs text-gray-500" }, comment.timestamp)
            ),
            React.createElement("button", {
              onClick: () => handleLike(comment.id),
              className: "flex items-center gap-2 px-3 py-1 bg-blue-900/30 hover:bg-blue-800/40 rounded-lg transition-all"
            },
              React.createElement(ThumbsUp, { className: "w-4 h-4 text-blue-400" }),
              React.createElement("span", { className: "text-blue-300 font-bold" }, comment.likes)
            )
          ),
          React.createElement("p", { className: "text-gray-300 leading-relaxed" }, comment.text)
        )
      )
    )
  );
};

// ========== SLIDE PRINCIPALE CHE COMBINA TUTTO ==========

const metodiQuizSlide = {
  isQuiz: true,
  title: "Quiz e Discussione: Metodi e Incapsulamento",
  subtitle: "Metti alla prova le tue conoscenze",
  content: (
    React.createElement("div", { className: "space-y-12" },
      // Quiz Scelta Multipla
      React.createElement(QuizMetodi, null),

      React.createElement("div", { className: "border-t-2 border-cyan-500/30 my-8" }),

      // Drag and Drop
      React.createElement(DragDropVisibilita, null),

      React.createElement("div", { className: "border-t-2 border-cyan-500/30 my-8" }),

      // Bacheca
      React.createElement(BachecaDiscussione, null)
    )
  )
};

// Esporta per main.jsx
if (typeof window !== 'undefined') {
  window.metodiQuizSlide = metodiQuizSlide;
}
