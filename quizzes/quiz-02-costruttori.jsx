// Quiz 02 - Costruttori e Properties
// NO ES6 imports/exports - tutto inline

// No custom icons needed - this quiz uses plain HTML elements and text

const costruttoriQuizSlide = {
  title: "Quiz: Costruttori e Properties",
  content: function() {
    const React = window.React;
    const { useState } = React;

    return function CostruttoriQuizComponent() {
      const [activeTab, setActiveTab] = useState('multiple-choice');
      const [mcAnswers, setMcAnswers] = useState({});
      const [mcSubmitted, setMcSubmitted] = useState(false);
      const [codeAnswers, setCodeAnswers] = useState({});
      const [codeSubmitted, setCodeSubmitted] = useState({});

      // Domande a scelta multipla
      const multipleChoiceQuestions = [
        {
          id: 'q1',
          question: 'Quando viene chiamato il costruttore di una classe?',
          options: [
            'Quando viene dichiarata la classe',
            'Quando viene creata una nuova istanza con "new"',
            'Quando viene chiamato un metodo della classe',
            'Solo se esplicitamente invocato'
          ],
          correct: 1,
          explanation: 'Il costruttore viene chiamato automaticamente quando si crea una nuova istanza usando la keyword "new". È il momento perfetto per inizializzare lo stato dell\'oggetto.'
        },
        {
          id: 'q2',
          question: 'Qual è la differenza principale tra un field e una property in C#?',
          options: [
            'Non c\'è differenza, sono sinonimi',
            'Le properties permettono controllo tramite get/set, i field sono variabili dirette',
            'I field sono pubblici, le properties private',
            'Le properties sono più lente dei field'
          ],
          correct: 1,
          explanation: 'Le properties forniscono un livello di astrazione con accessors (get/set) che permettono validazione e controllo, mentre i field sono semplici variabili di istanza.'
        },
        {
          id: 'q3',
          question: 'Cosa fa la keyword "this" in un costruttore?',
          options: [
            'Crea una nuova istanza della classe',
            'Si riferisce all\'istanza corrente dell\'oggetto',
            'Chiama il costruttore base',
            'Dichiara una variabile locale'
          ],
          correct: 1,
          explanation: '"this" si riferisce all\'istanza corrente dell\'oggetto. È utile per distinguere parametri del costruttore da campi della classe quando hanno lo stesso nome.'
        },
        {
          id: 'q4',
          question: 'Quale vantaggio offrono le properties rispetto ai campi pubblici?',
          options: [
            'Sono più veloci in esecuzione',
            'Occupano meno memoria',
            'Permettono validazione e logica custom nell\'accesso ai dati',
            'Sono più facili da scrivere'
          ],
          correct: 2,
          explanation: 'Le properties permettono di aggiungere logica di validazione, calcoli lazy, notification changes, e mantenere l\'incapsulamento anche modificando l\'implementazione interna.'
        },
        {
          id: 'q5',
          question: 'Quando è utile l\'overloading dei costruttori?',
          options: [
            'Mai, è sempre meglio avere un solo costruttore',
            'Quando si vuole offrire diversi modi per inizializzare un oggetto',
            'Solo per classi molto grandi',
            'Quando si eredita da una classe base'
          ],
          correct: 1,
          explanation: 'L\'overloading permette di creare oggetti in modi diversi: con tutti i parametri, con valori di default, o con configurazioni predefinite, migliorando la flessibilità dell\'API.'
        },
        {
          id: 'q6',
          question: 'Cosa indica una property con solo il getter (senza setter)?',
          options: [
            'È un errore di sintassi',
            'È una property read-only accessibile dall\'esterno',
            'È una property privata',
            'È una property statica'
          ],
          correct: 1,
          explanation: 'Una property con solo get è read-only dall\'esterno della classe. Il valore può essere impostato solo internamente (nel costruttore o tramite un field privato).'
        },
        {
          id: 'q7',
          question: 'Quale sintassi rappresenta una auto-implemented property in C#?',
          options: [
            'public string Nome;',
            'public string Nome { get; set; }',
            'private string _nome; public string Nome { return _nome; }',
            'public string GetNome() { return nome; }'
          ],
          correct: 1,
          explanation: 'La sintassi { get; set; } è una auto-implemented property. Il compilatore crea automaticamente un field privato nascosto, riducendo il boilerplate code.'
        }
      ];

      // Esercizi di codice
      const codeExercises = [
        {
          id: 'code1',
          title: 'Completa il Costruttore',
          description: 'Completa il costruttore mancante per inizializzare correttamente i campi:',
          code: `public class Persona
{
    private string _nome;
    private int _eta;

    // Completa il costruttore qui:
    public Persona(_____)
    {
        _____
        _____
    }
}`,
          blanks: [
            { id: 'b1', placeholder: 'parametri' },
            { id: 'b2', placeholder: 'inizializza _nome' },
            { id: 'b3', placeholder: 'inizializza _eta' }
          ],
          solution: {
            b1: 'string nome, int eta',
            b2: '_nome = nome;',
            b3: '_eta = eta;'
          },
          hints: [
            'I parametri del costruttore dovrebbero corrispondere ai campi da inizializzare',
            'Usa "this" se i nomi dei parametri coincidono con i campi, oppure usa nomi diversi',
            'Ricorda il punto e virgola alla fine di ogni statement'
          ]
        },
        {
          id: 'code2',
          title: 'Correggi la Property',
          description: 'Trova e correggi gli errori in questa property con validazione:',
          code: `public class Prodotto
{
    private decimal _prezzo;

    public decimal Prezzo
    {
        get { return _prezzo }
        set
        {
            if (value > 0)
                _prezzo = value;
        }
    }
}`,
          errors: [
            { line: 6, description: 'Manca il punto e virgola dopo return' },
            { line: 8, description: 'Manca un else o throw per valore invalido' }
          ],
          solution: `public class Prodotto
{
    private decimal _prezzo;

    public decimal Prezzo
    {
        get { return _prezzo; }
        set
        {
            if (value > 0)
                _prezzo = value;
            else
                throw new ArgumentException("Il prezzo deve essere positivo");
        }
    }
}`,
          hints: [
            'Controlla la sintassi del getter - manca qualcosa?',
            'Cosa succede se il valore è negativo o zero? Dovrebbe essere gestito',
            'Considera di lanciare un\'eccezione per valori non validi'
          ]
        },
        {
          id: 'code3',
          title: 'Crea Property Read-Only',
          description: 'Crea una property NomeCompleto read-only che combina Nome e Cognome:',
          code: `public class Studente
{
    public string Nome { get; set; }
    public string Cognome { get; set; }

    // Crea qui la property NomeCompleto (read-only)
    _____
}`,
          blanks: [
            { id: 'b1', placeholder: 'definizione property completa' }
          ],
          solution: {
            b1: 'public string NomeCompleto { get { return $"{Nome} {Cognome}"; } }'
          },
          alternativeSolutions: [
            'public string NomeCompleto => $"{Nome} {Cognome}";',
            'public string NomeCompleto { get { return Nome + " " + Cognome; } }'
          ],
          hints: [
            'Una property read-only ha solo il getter, non il setter',
            'Puoi usare string interpolation ($"") per combinare le stringhe',
            'Oppure usa la sintassi expression-bodied: => per proprietà semplici'
          ]
        },
        {
          id: 'code4',
          title: 'Overloading Costruttori',
          description: 'Implementa tre costruttori overloaded per massima flessibilità:',
          code: `public class ContoBancario
{
    public string Intestatario { get; set; }
    public decimal Saldo { get; private set; }
    public string NumeroConto { get; private set; }

    // 1. Costruttore completo
    _____

    // 2. Costruttore senza saldo iniziale (default 0)
    _____

    // 3. Costruttore di default (genera numero conto automatico)
    _____
}`,
          blanks: [
            { id: 'b1', placeholder: 'costruttore completo' },
            { id: 'b2', placeholder: 'costruttore senza saldo' },
            { id: 'b3', placeholder: 'costruttore default' }
          ],
          solution: {
            b1: 'public ContoBancario(string intestatario, decimal saldo, string numeroConto) { Intestatario = intestatario; Saldo = saldo; NumeroConto = numeroConto; }',
            b2: 'public ContoBancario(string intestatario, string numeroConto) : this(intestatario, 0, numeroConto) { }',
            b3: 'public ContoBancario() : this("Sconosciuto", 0, Guid.NewGuid().ToString()) { }'
          },
          hints: [
            'Usa ": this(...)" per chiamare un altro costruttore della stessa classe',
            'Il costruttore con più parametri dovrebbe fare il lavoro principale',
            'Gli altri costruttori possono chiamare quello principale con valori default',
            'Guid.NewGuid() può generare un identificatore unico per il numero conto'
          ]
        }
      ];

      // Discussion topics
      const discussionTopics = [
        {
          category: 'Punti Chiave',
          points: [
            'I costruttori inizializzano lo stato di un oggetto al momento della creazione',
            'Le properties offrono un\'interfaccia controllata per accedere ai dati',
            'L\'overloading dei costruttori migliora la flessibilità e usabilità della classe',
            'Auto-implemented properties riducono il boilerplate mantenendo l\'incapsulamento',
            'Properties read-only proteggono i dati permettendo solo lettura dall\'esterno',
            'La validazione nelle properties garantisce l\'integrità dei dati'
          ]
        },
        {
          category: 'Best Practices',
          points: [
            'Usa properties invece di campi pubblici per mantenere l\'incapsulamento',
            'Valida sempre i dati nei setter per prevenire stati inconsistenti',
            'Preferisci auto-implemented properties quando non serve logica custom',
            'Usa ": this()" per evitare duplicazione di codice tra costruttori',
            'Considera properties read-only per dati che non dovrebbero cambiare',
            'Usa nomi descrittivi: PascalCase per properties, camelCase per parametri',
            'Lancia eccezioni appropriate quando la validazione fallisce'
          ]
        },
        {
          category: 'Domande di Riflessione',
          questions: [
            'Quando preferiresti usare un field privato con property invece di una auto-implemented property?',
            'Come gestiresti la validazione quando più properties sono interdipendenti?',
            'Quali sono i pro e contro di avere molti costruttori overloaded vs un costruttore con parametri opzionali?',
            'Come bilanci la flessibilità (molte properties pubbliche) con l\'incapsulamento?',
            'Quando è appropriato avere un setter privato invece di eliminarlo completamente?'
          ]
        },
        {
          category: 'Scenari Reali',
          examples: [
            'Entity Framework richiede un costruttore parameterless per il mapping',
            'DTOs (Data Transfer Objects) spesso usano solo auto-implemented properties',
            'Domain entities usano properties con validazione per garantire business rules',
            'Immutable objects usano properties read-only e inizializzazione via costruttore',
            'Builder pattern come alternativa a molti costruttori overloaded'
          ]
        }
      ];

      // Handlers
      const handleMcAnswer = (questionId, optionIndex) => {
        if (!mcSubmitted) {
          setMcAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
        }
      };

      const handleMcSubmit = () => {
        setMcSubmitted(true);
      };

      const handleMcReset = () => {
        setMcAnswers({});
        setMcSubmitted(false);
      };

      const calculateScore = () => {
        let correct = 0;
        multipleChoiceQuestions.forEach(q => {
          if (mcAnswers[q.id] === q.correct) correct++;
        });
        return {
          correct,
          total: multipleChoiceQuestions.length,
          percentage: Math.round((correct / multipleChoiceQuestions.length) * 100)
        };
      };

      const handleCodeAnswer = (exerciseId, blankId, value) => {
        setCodeAnswers(prev => ({
          ...prev,
          [exerciseId]: {
            ...(prev[exerciseId] || {}),
            [blankId]: value
          }
        }));
      };

      const handleCodeSubmit = (exerciseId) => {
        setCodeSubmitted(prev => ({ ...prev, [exerciseId]: true }));
      };

      const handleCodeReset = (exerciseId) => {
        setCodeAnswers(prev => {
          const newAnswers = { ...prev };
          delete newAnswers[exerciseId];
          return newAnswers;
        });
        setCodeSubmitted(prev => {
          const newSubmitted = { ...prev };
          delete newSubmitted[exerciseId];
          return newSubmitted;
        });
      };

      const checkCodeAnswer = (exercise) => {
        const userAnswers = codeAnswers[exercise.id] || {};
        const solution = exercise.solution;

        let correct = 0;
        let total = 0;

        Object.keys(solution).forEach(key => {
          total++;
          const userAnswer = (userAnswers[key] || '').trim().toLowerCase().replace(/\s+/g, ' ');
          const correctAnswer = solution[key].trim().toLowerCase().replace(/\s+/g, ' ');

          if (userAnswer === correctAnswer) {
            correct++;
          } else if (exercise.alternativeSolutions) {
            // Check alternative solutions
            const isAlternativeCorrect = exercise.alternativeSolutions.some(alt =>
              userAnswer === alt.trim().toLowerCase().replace(/\s+/g, ' ')
            );
            if (isAlternativeCorrect) correct++;
          }
        });

        return { correct, total, percentage: Math.round((correct / total) * 100) };
      };

      const score = mcSubmitted ? calculateScore() : null;

      // Styles
      const styles = {
        container: {
          padding: '40px',
          maxWidth: '1400px',
          margin: '0 auto',
          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
        },
        header: {
          textAlign: 'center',
          marginBottom: '40px'
        },
        title: {
          fontSize: '48px',
          fontWeight: '700',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '10px'
        },
        subtitle: {
          fontSize: '20px',
          color: '#64748b',
          fontWeight: '400'
        },
        tabs: {
          display: 'flex',
          gap: '10px',
          marginBottom: '30px',
          borderBottom: '2px solid #e2e8f0',
          paddingBottom: '0'
        },
        tab: {
          padding: '12px 24px',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          color: '#64748b',
          borderBottom: '3px solid transparent',
          transition: 'all 0.3s ease',
          position: 'relative',
          bottom: '-2px'
        },
        activeTab: {
          color: '#667eea',
          borderBottomColor: '#667eea'
        },
        questionCard: {
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0',
          transition: 'all 0.3s ease'
        },
        questionNumber: {
          display: 'inline-block',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center',
          lineHeight: '32px',
          fontWeight: '700',
          marginRight: '12px',
          fontSize: '14px'
        },
        questionText: {
          fontSize: '18px',
          fontWeight: '600',
          color: '#1e293b',
          marginBottom: '20px',
          lineHeight: '1.6'
        },
        option: {
          padding: '16px 20px',
          margin: '10px 0',
          borderRadius: '8px',
          border: '2px solid #e2e8f0',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          fontSize: '16px',
          background: 'white'
        },
        optionHover: {
          borderColor: '#667eea',
          background: '#f8f9ff'
        },
        optionSelected: {
          borderColor: '#667eea',
          background: '#f0f2ff',
          fontWeight: '600'
        },
        optionCorrect: {
          borderColor: '#10b981',
          background: '#f0fdf4',
          color: '#059669'
        },
        optionWrong: {
          borderColor: '#ef4444',
          background: '#fef2f2',
          color: '#dc2626'
        },
        explanation: {
          marginTop: '16px',
          padding: '16px',
          borderRadius: '8px',
          background: '#f8fafc',
          borderLeft: '4px solid #667eea',
          fontSize: '15px',
          color: '#475569',
          lineHeight: '1.6'
        },
        submitButton: {
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: '600',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
        },
        resetButton: {
          padding: '14px 32px',
          fontSize: '16px',
          fontWeight: '600',
          border: '2px solid #667eea',
          borderRadius: '8px',
          cursor: 'pointer',
          background: 'white',
          color: '#667eea',
          transition: 'all 0.3s ease',
          marginLeft: '12px'
        },
        scoreCard: {
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '16px',
          padding: '40px',
          textAlign: 'center',
          color: 'white',
          marginBottom: '30px',
          boxShadow: '0 8px 24px rgba(102, 126, 234, 0.3)'
        },
        scoreNumber: {
          fontSize: '72px',
          fontWeight: '700',
          marginBottom: '10px'
        },
        scoreText: {
          fontSize: '24px',
          opacity: '0.95'
        },
        codeBlock: {
          background: '#1e293b',
          color: '#e2e8f0',
          padding: '20px',
          borderRadius: '8px',
          fontFamily: '"Fira Code", "Courier New", monospace',
          fontSize: '14px',
          lineHeight: '1.6',
          overflowX: 'auto',
          marginBottom: '20px'
        },
        codeInput: {
          width: '100%',
          padding: '10px',
          fontSize: '14px',
          fontFamily: '"Fira Code", "Courier New", monospace',
          border: '2px solid #e2e8f0',
          borderRadius: '6px',
          marginTop: '8px',
          background: '#f8fafc',
          transition: 'all 0.2s ease'
        },
        codeInputFocused: {
          borderColor: '#667eea',
          outline: 'none',
          background: 'white'
        },
        hint: {
          padding: '12px 16px',
          margin: '8px 0',
          background: '#fef3c7',
          borderLeft: '4px solid #f59e0b',
          borderRadius: '4px',
          fontSize: '14px',
          color: '#92400e'
        },
        discussionSection: {
          marginBottom: '40px'
        },
        discussionCategory: {
          background: 'white',
          borderRadius: '12px',
          padding: '30px',
          marginBottom: '24px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          border: '1px solid #e2e8f0'
        },
        categoryTitle: {
          fontSize: '24px',
          fontWeight: '700',
          color: '#1e293b',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        },
        categoryIcon: {
          width: '40px',
          height: '40px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '20px'
        },
        listItem: {
          padding: '12px 0',
          fontSize: '16px',
          color: '#475569',
          lineHeight: '1.6',
          borderBottom: '1px solid #f1f5f9'
        },
        buttonContainer: {
          display: 'flex',
          justifyContent: 'center',
          marginTop: '30px'
        }
      };

      return React.createElement('div', { style: styles.container },
        // Header
        React.createElement('div', { style: styles.header },
          React.createElement('h1', { style: styles.title }, 'Quiz Interattivo'),
          React.createElement('p', { style: styles.subtitle }, 'Costruttori e Properties')
        ),

        // Tabs
        React.createElement('div', { style: styles.tabs },
          React.createElement('button', {
            style: { ...styles.tab, ...(activeTab === 'multiple-choice' ? styles.activeTab : {}) },
            onClick: () => setActiveTab('multiple-choice')
          }, 'Scelta Multipla'),
          React.createElement('button', {
            style: { ...styles.tab, ...(activeTab === 'code-exercises' ? styles.activeTab : {}) },
            onClick: () => setActiveTab('code-exercises')
          }, 'Esercizi di Codice'),
          React.createElement('button', {
            style: { ...styles.tab, ...(activeTab === 'discussion' ? styles.activeTab : {}) },
            onClick: () => setActiveTab('discussion')
          }, 'Bacheca Discussione')
        ),

        // Content
        activeTab === 'multiple-choice' && React.createElement('div', null,
          // Score Card
          mcSubmitted && score && React.createElement('div', { style: styles.scoreCard },
            React.createElement('div', { style: styles.scoreNumber }, score.percentage + '%'),
            React.createElement('div', { style: styles.scoreText },
              score.correct + ' su ' + score.total + ' corrette'
            ),
            React.createElement('div', { style: { marginTop: '10px', fontSize: '18px', opacity: '0.9' } },
              score.percentage >= 90 ? 'Eccellente! Ottima padronanza!' :
              score.percentage >= 70 ? 'Molto bene! Buona comprensione!' :
              score.percentage >= 50 ? 'Discreto, ma rivedere alcuni concetti.' :
              'Continua a studiare, non mollare!'
            )
          ),

          // Questions
          multipleChoiceQuestions.map((q, qIndex) =>
            React.createElement('div', { key: q.id, style: styles.questionCard },
              React.createElement('div', { style: { marginBottom: '16px' } },
                React.createElement('span', { style: styles.questionNumber }, (qIndex + 1)),
                React.createElement('span', { style: styles.questionText }, q.question)
              ),
              q.options.map((option, oIndex) => {
                const isSelected = mcAnswers[q.id] === oIndex;
                const isCorrect = oIndex === q.correct;
                const showResult = mcSubmitted;

                let optionStyle = { ...styles.option };
                if (showResult) {
                  if (isCorrect) {
                    optionStyle = { ...optionStyle, ...styles.optionCorrect };
                  } else if (isSelected && !isCorrect) {
                    optionStyle = { ...optionStyle, ...styles.optionWrong };
                  }
                } else if (isSelected) {
                  optionStyle = { ...optionStyle, ...styles.optionSelected };
                }

                return React.createElement('div', {
                  key: oIndex,
                  style: optionStyle,
                  onClick: () => handleMcAnswer(q.id, oIndex)
                },
                  (showResult && isCorrect ? '✓ ' : showResult && isSelected ? '✗ ' : '') + option
                );
              }),
              mcSubmitted && React.createElement('div', { style: styles.explanation },
                React.createElement('strong', null, 'Spiegazione: '),
                q.explanation
              )
            )
          ),

          // Submit/Reset Buttons
          React.createElement('div', { style: styles.buttonContainer },
            !mcSubmitted ?
              React.createElement('button', {
                style: styles.submitButton,
                onClick: handleMcSubmit,
                disabled: Object.keys(mcAnswers).length !== multipleChoiceQuestions.length
              }, 'Invia Risposte') :
              React.createElement('button', {
                style: styles.resetButton,
                onClick: handleMcReset
              }, 'Ricomincia Quiz')
          )
        ),

        activeTab === 'code-exercises' && React.createElement('div', null,
          codeExercises.map((exercise, index) => {
            const isSubmitted = codeSubmitted[exercise.id];
            const result = isSubmitted ? checkCodeAnswer(exercise) : null;

            return React.createElement('div', { key: exercise.id, style: styles.questionCard },
              React.createElement('div', { style: { marginBottom: '20px' } },
                React.createElement('span', { style: styles.questionNumber }, (index + 1)),
                React.createElement('span', { style: { fontSize: '24px', fontWeight: '700', color: '#1e293b' } },
                  exercise.title
                )
              ),
              React.createElement('p', { style: { fontSize: '16px', color: '#64748b', marginBottom: '20px' } },
                exercise.description
              ),

              // Code block
              React.createElement('pre', { style: styles.codeBlock },
                React.createElement('code', null, exercise.code)
              ),

              // Input fields for blanks
              exercise.blanks && exercise.blanks.map(blank =>
                React.createElement('div', { key: blank.id, style: { marginBottom: '16px' } },
                  React.createElement('label', {
                    style: {
                      display: 'block',
                      marginBottom: '8px',
                      fontWeight: '600',
                      color: '#475569'
                    }
                  }, 'Completa: ' + blank.placeholder),
                  React.createElement('input', {
                    type: 'text',
                    style: styles.codeInput,
                    placeholder: blank.placeholder,
                    value: (codeAnswers[exercise.id] && codeAnswers[exercise.id][blank.id]) || '',
                    onChange: (e) => handleCodeAnswer(exercise.id, blank.id, e.target.value),
                    disabled: isSubmitted
                  })
                )
              ),

              // Show hints before submission
              !isSubmitted && exercise.hints && React.createElement('div', { style: { marginTop: '20px' } },
                React.createElement('h4', { style: { fontSize: '16px', fontWeight: '600', color: '#1e293b', marginBottom: '12px' } },
                  'Suggerimenti:'
                ),
                exercise.hints.map((hint, hIndex) =>
                  React.createElement('div', { key: hIndex, style: styles.hint },
                    '💡 ' + hint
                  )
                )
              ),

              // Show results after submission
              isSubmitted && result && React.createElement('div', {
                style: {
                  marginTop: '20px',
                  padding: '20px',
                  borderRadius: '8px',
                  background: result.percentage >= 80 ? '#f0fdf4' : '#fef2f2',
                  border: '2px solid ' + (result.percentage >= 80 ? '#10b981' : '#ef4444')
                }
              },
                React.createElement('div', { style: { fontSize: '18px', fontWeight: '700', marginBottom: '10px' } },
                  result.percentage >= 80 ? '✓ Ottimo lavoro!' : '✗ Riprova!'
                ),
                React.createElement('div', { style: { fontSize: '16px', marginBottom: '16px' } },
                  'Punteggio: ' + result.correct + '/' + result.total + ' (' + result.percentage + '%)'
                ),
                React.createElement('div', { style: { fontSize: '14px', fontWeight: '600', marginBottom: '8px' } },
                  'Soluzione corretta:'
                ),
                React.createElement('pre', { style: { ...styles.codeBlock, background: '#0f172a' } },
                  React.createElement('code', null, exercise.solution ?
                    (typeof exercise.solution === 'string' ? exercise.solution :
                     Object.values(exercise.solution).join('\n')) :
                    'Soluzione non disponibile'
                  )
                ),
                exercise.alternativeSolutions && React.createElement('div', { style: { marginTop: '12px' } },
                  React.createElement('div', { style: { fontSize: '14px', fontWeight: '600', marginBottom: '8px' } },
                    'Soluzioni alternative accettate:'
                  ),
                  exercise.alternativeSolutions.map((alt, altIndex) =>
                    React.createElement('pre', { key: altIndex, style: { ...styles.codeBlock, background: '#1e3a5f', marginTop: '8px' } },
                      React.createElement('code', null, alt)
                    )
                  )
                )
              ),

              // Buttons
              React.createElement('div', { style: { ...styles.buttonContainer, marginTop: '20px' } },
                !isSubmitted ?
                  React.createElement('button', {
                    style: styles.submitButton,
                    onClick: () => handleCodeSubmit(exercise.id)
                  }, 'Verifica Soluzione') :
                  React.createElement('button', {
                    style: styles.resetButton,
                    onClick: () => handleCodeReset(exercise.id)
                  }, 'Riprova Esercizio')
              )
            );
          })
        ),

        activeTab === 'discussion' && React.createElement('div', { style: styles.discussionSection },
          discussionTopics.map((topic, index) =>
            React.createElement('div', { key: index, style: styles.discussionCategory },
              React.createElement('div', { style: styles.categoryTitle },
                React.createElement('div', { style: styles.categoryIcon },
                  topic.category === 'Punti Chiave' ? '🎯' :
                  topic.category === 'Best Practices' ? '⭐' :
                  topic.category === 'Domande di Riflessione' ? '🤔' :
                  '🌍'
                ),
                React.createElement('span', null, topic.category)
              ),
              topic.points && React.createElement('div', null,
                topic.points.map((point, pIndex) =>
                  React.createElement('div', { key: pIndex, style: styles.listItem },
                    '• ' + point
                  )
                )
              ),
              topic.questions && React.createElement('div', null,
                topic.questions.map((question, qIndex) =>
                  React.createElement('div', { key: qIndex, style: { ...styles.listItem, fontWeight: '500' } },
                    '❓ ' + question
                  )
                )
              ),
              topic.examples && React.createElement('div', null,
                topic.examples.map((example, eIndex) =>
                  React.createElement('div', { key: eIndex, style: styles.listItem },
                    '📌 ' + example
                  )
                )
              )
            )
          )
        )
      );
    };
  }
};

// Esporta per Reveal.js
if (typeof window !== 'undefined') {
  window.costruttoriQuizSlide = costruttoriQuizSlide;
}