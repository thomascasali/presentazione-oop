// ============================================================================
// MODULO 6: ESERCIZI PRATICI
// ============================================================================
// Slide 1-5: Esercizi a difficoltà crescente per mettere in pratica i concetti OOP
// ============================================================================

const { useState } = React;

// Icon Components
const IconWrapper = ({ children, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    {children}
  </svg>
);

const PenTool = (props) => <IconWrapper {...props}><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></IconWrapper>;
const Utensils = (props) => <IconWrapper {...props}><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></IconWrapper>;
const Stethoscope = (props) => <IconWrapper {...props}><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"></path><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"></path><circle cx="20" cy="10" r="2"></circle></IconWrapper>;
const Music = (props) => <IconWrapper {...props}><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></IconWrapper>;
const Building = (props) => <IconWrapper {...props}><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></IconWrapper>;
const Trophy = (props) => <IconWrapper {...props}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></IconWrapper>;
const Target = (props) => <IconWrapper {...props}><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></IconWrapper>;
const CheckCircle = (props) => <IconWrapper {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></IconWrapper>;
const BookOpen = (props) => <IconWrapper {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></IconWrapper>;

// Componente per card esercizio
const ExerciseCard = ({ icon: Icon, difficulty, difficultyColor, title, children }) => (
  <div className="bg-slate-800/50 rounded-xl border border-slate-600/50 overflow-hidden">
    <div className="bg-gradient-to-r from-slate-700 to-slate-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${difficultyColor}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${difficultyColor}`}>
        {difficulty}
      </span>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

// Componente per sezione consegna
const ConsegnaSection = ({ items }) => (
  <div className="mt-6 bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
    <h4 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
      <Target className="w-5 h-5" />
      Consegna
    </h4>
    <ol className="space-y-2 text-sm text-gray-300">
      {items.map((item, idx) => (
        <li key={idx} className="flex gap-2">
          <span className="text-blue-400 font-mono">{idx + 1}.</span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  </div>
);

// ============================================================================
// SLIDE 1: ESERCIZIO RISTORANTE (LIVELLO BASE)
// ============================================================================
const esercizioRistoranteSlide = {
  title: "Esercizio 1: Il Ristorante \"Da Mario\"",
  subtitle: "Livello Base - Classi, Proprietà, Incapsulamento",
  content: (
    <div className="space-y-6">
      <ExerciseCard
        icon={Utensils}
        difficulty="Livello Base"
        difficultyColor="bg-green-500/20 text-green-400"
        title="Gestione Menu Ristorante"
      >
        <div className="bg-slate-900/50 rounded-lg p-5 border-l-4 border-amber-500">
          <p className="text-gray-300 leading-relaxed text-justify">
            Mario gestisce un piccolo ristorante e ha bisogno di un software per organizzare il suo menu.
            Ogni piatto ha un <span className="text-amber-400 font-semibold">nome</span>, un <span className="text-amber-400 font-semibold">prezzo</span> e
            appartiene a una <span className="text-amber-400 font-semibold">categoria</span>: antipasti, primi, secondi o dolci.
            Mario vuole poter segnare quali piatti sono <span className="text-amber-400 font-semibold">disponibili</span> in un dato giorno e quali no,
            così da non proporli ai clienti.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
            Il menu del ristorante cambia stagionalmente: Mario <span className="text-cyan-400 font-semibold">aggiunge nuovi piatti</span> e
            ne <span className="text-cyan-400 font-semibold">toglie altri</span>. Vorrebbe anche sapere qual è il <span className="text-cyan-400 font-semibold">prezzo medio</span> dei
            piatti per categoria e poter <span className="text-cyan-400 font-semibold">stampare</span> velocemente l'elenco di tutti i piatti disponibili
            di una certa categoria per i camerieri.
          </p>
        </div>

        <ConsegnaSection items={[
          "Individuare le classi necessarie con i relativi attributi e metodi",
          "Disegnare il diagramma delle classi UML",
          "Implementare le classi in C#",
          "Creare un programma di test che: crei almeno 5 piatti, li aggiunga al menu, ne renda alcuni non disponibili, calcoli il prezzo medio dei primi piatti e stampi tutti i secondi disponibili"
        ]} />
      </ExerciseCard>

      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <span className="text-green-400">Classi e Oggetti</span>
        </div>
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <span className="text-green-400">Proprietà</span>
        </div>
        <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-1" />
          <span className="text-green-400">List&lt;T&gt;</span>
        </div>
      </div>
    </div>
  )
};

// ============================================================================
// SLIDE 2: ESERCIZIO CLINICA VETERINARIA (LIVELLO MEDIO-BASE)
// ============================================================================
const esercizioVeterinariaSlide = {
  title: "Esercizio 2: La Clinica Veterinaria \"Zampe Felici\"",
  subtitle: "Livello Medio-Base - Ereditarietà, Classi Astratte",
  content: (
    <div className="space-y-6">
      <ExerciseCard
        icon={Stethoscope}
        difficulty="Livello Medio-Base"
        difficultyColor="bg-yellow-500/20 text-yellow-400"
        title="Gestione Clinica Veterinaria"
      >
        <div className="bg-slate-900/50 rounded-lg p-5 border-l-4 border-emerald-500">
          <p className="text-gray-300 leading-relaxed text-justify">
            La dottoressa Bianchi gestisce una clinica veterinaria dove si curano principalmente <span className="text-emerald-400 font-semibold">cani</span>, <span className="text-emerald-400 font-semibold">gatti</span> e <span className="text-emerald-400 font-semibold">uccelli</span>.
            Ogni animale che arriva in clinica viene registrato con il suo <span className="text-amber-400 font-semibold">nome</span>,
            l'<span className="text-amber-400 font-semibold">età</span> e il <span className="text-amber-400 font-semibold">peso</span>.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
            Durante le visite, la dottoressa annota la <span className="text-amber-400 font-semibold">data</span>, cosa ha <span className="text-amber-400 font-semibold">riscontrato</span> e
            quanto <span className="text-amber-400 font-semibold">costa</span> l'intervento. Ha notato che il costo base di una visita <span className="text-cyan-400 font-semibold">varia</span>:
            per gli uccelli è più basso perché sono visite più rapide, mentre per i cani di grossa taglia
            il costo <span className="text-cyan-400 font-semibold">aumenta in base al peso</span>.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
            La dottoressa vorrebbe anche un modo simpatico per identificare velocemente il tipo di animale nel sistema:
            magari facendogli "<span className="text-cyan-400 font-semibold">emettere il suo verso</span>" a schermo quando viene selezionato.
          </p>
        </div>

        <ConsegnaSection items={[
          "Progettare la gerarchia di classi identificando quali devono essere astratte",
          "Individuare i metodi virtuali e le relative implementazioni nelle classi derivate",
          "Disegnare il diagramma delle classi UML con le relazioni di ereditarietà",
          "Implementare le classi in C#",
          "Creare un programma di test che: registri almeno 2 animali per tipo, crei alcune visite, dimostri il polimorfismo stampando il verso di ogni animale e calcolando il costo di una visita per ciascuno"
        ]} />
      </ExerciseCard>

      <div className="grid grid-cols-3 gap-4 text-center text-sm">
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
          <span className="text-yellow-400">Ereditarietà</span>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
          <span className="text-yellow-400">Classi Astratte</span>
        </div>
        <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-yellow-400 mx-auto mb-1" />
          <span className="text-yellow-400">Override</span>
        </div>
      </div>
    </div>
  )
};

// ============================================================================
// SLIDE 3: ESERCIZIO STREAMING MUSICALE (LIVELLO MEDIO)
// ============================================================================
const esercizioStreamingSlide = {
  title: "Esercizio 3: StreamSound - La Tua Musica Ovunque",
  subtitle: "Livello Medio - Interfacce, Composizione, Polimorfismo",
  content: (
    <div className="space-y-6">
      <ExerciseCard
        icon={Music}
        difficulty="Livello Medio"
        difficultyColor="bg-orange-500/20 text-orange-400"
        title="Piattaforma Streaming Musicale"
      >
        <div className="bg-slate-900/50 rounded-lg p-5 border-l-4 border-purple-500">
          <p className="text-gray-300 leading-relaxed text-justify">
            Una startup vuole creare una piattaforma di streaming musicale. Gli utenti possono ascoltare <span className="text-purple-400 font-semibold">brani musicali</span>, <span className="text-purple-400 font-semibold">podcast</span> e <span className="text-purple-400 font-semibold">video musicali</span>.
            Tutti questi contenuti hanno un <span className="text-amber-400 font-semibold">titolo</span>, un <span className="text-amber-400 font-semibold">artista</span> e
            l'<span className="text-amber-400 font-semibold">anno di uscita</span>.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
            Ovviamente, tutti <span className="text-cyan-400 font-semibold">possono essere riprodotti</span>: l'utente può premere play, mettere in pausa o fermare
            la riproduzione, e vedere quanto dura il contenuto. Però solo i brani e i video musicali <span className="text-cyan-400 font-semibold">possono essere scaricati</span> per l'ascolto offline
            (i podcast no, per motivi di licenza), e in quel caso l'utente deve sapere quanto spazio occuperanno sul telefono.
          </p>
          <p className="text-gray-300 leading-relaxed mt-4 text-justify">
            Gli utenti creano le proprie <span className="text-pink-400 font-semibold">playlist personalizzate</span>, aggiungendo qualsiasi contenuto riproducibile.
            Quando un utente <span className="text-pink-400 font-semibold">elimina il suo account</span>, le sue playlist vengono <span className="text-pink-400 font-semibold">eliminate con lui</span>.
            La piattaforma vuole mostrare a ogni utente il <span className="text-cyan-400 font-semibold">tempo totale di ascolto</span> settimanale.
          </p>
        </div>

        <ConsegnaSection items={[
          "Identificare le interfacce necessarie e quali classi le implementano",
          "Distinguere tra relazioni di composizione e aggregazione, giustificando la scelta",
          "Disegnare il diagramma delle classi UML completo con interfacce e relazioni",
          "Implementare le classi in C#",
          "Creare un programma di test che: crei diversi contenuti multimediali, crei un utente con 2 playlist, aggiunga contenuti alle playlist, dimostri il polimorfismo riproducendo tutti gli elementi di una playlist, e tenti di scaricare solo i contenuti che lo permettono"
        ]} />
      </ExerciseCard>

      <div className="grid grid-cols-4 gap-3 text-center text-sm">
        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-orange-400 mx-auto mb-1" />
          <span className="text-orange-400">Interfacce</span>
        </div>
        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-orange-400 mx-auto mb-1" />
          <span className="text-orange-400">Polimorfismo</span>
        </div>
        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-orange-400 mx-auto mb-1" />
          <span className="text-orange-400">Composizione</span>
        </div>
        <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-orange-400 mx-auto mb-1" />
          <span className="text-orange-400">Classi Astratte</span>
        </div>
      </div>
    </div>
  )
};

// ============================================================================
// SLIDE 4: ESERCIZIO HOTEL (LIVELLO MEDIO-ALTO)
// ============================================================================
const esercizioHotelSlide = {
  title: "Esercizio 4: Hotel Bellavista - Sistema di Prenotazioni",
  subtitle: "Livello Medio-Alto - Associazioni N-M, Classi di Associazione",
  content: (
    <div className="space-y-6">
      <ExerciseCard
        icon={Building}
        difficulty="Livello Medio-Alto"
        difficultyColor="bg-red-500/20 text-red-400"
        title="Sistema Gestione Hotel"
      >
        <div className="bg-slate-900/50 rounded-lg p-5 border-l-4 border-blue-500 text-sm">
          <p className="text-gray-300 leading-relaxed text-justify">
            L'Hotel Bellavista ha 50 camere di tre tipologie: <span className="text-blue-400 font-semibold">singole</span>, <span className="text-blue-400 font-semibold">doppie</span> e <span className="text-blue-400 font-semibold">suite</span>,
            ognuna con il suo <span className="text-amber-400 font-semibold">prezzo a notte</span>. Alcune camere includono servizi aggiuntivi come il <span className="text-emerald-400 font-semibold">minibar</span>,
            l'accesso alla <span className="text-emerald-400 font-semibold">spa</span> o la <span className="text-emerald-400 font-semibold">colazione in camera</span>; questi servizi hanno un costo extra e
            possono essere <span className="text-cyan-400 font-semibold">aggiunti o rimossi</span> dalle camere a seconda della stagione.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3 text-justify">
            Quando un <span className="text-purple-400 font-semibold">ospite</span> prenota, lascia i suoi dati (nome, cognome, documento e telefono) e sceglie le
            <span className="text-amber-400 font-semibold"> date di check-in e check-out</span>. Una prenotazione può essere <span className="text-amber-400 font-semibold">confermata</span>, <span className="text-amber-400 font-semibold">in attesa</span> o <span className="text-amber-400 font-semibold">cancellata</span>.
            Lo stesso ospite può prenotare <span className="text-pink-400 font-semibold">più volte nel tempo</span>, e la stessa camera viene ovviamente prenotata da
            <span className="text-pink-400 font-semibold"> ospiti diversi in periodi diversi</span>.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3 text-justify">
            La direzione vuole poter <span className="text-cyan-400 font-semibold">verificare la disponibilità</span> delle camere in un certo periodo,
            calcolare l'<span className="text-cyan-400 font-semibold">incasso giornaliero</span> e generare un <span className="text-cyan-400 font-semibold">report di occupazione</span> mensile.
            Se l'hotel chiude, <span className="text-red-400 font-semibold">tutte le camere cessano di esistere</span>; i servizi invece sono
            <span className="text-emerald-400 font-semibold"> condivisi tra più strutture</span> della catena.
          </p>
        </div>

        <ConsegnaSection items={[
          "Identificare la classe di associazione e spiegare perché è necessaria",
          "Distinguere tra composizione (hotel-camere) e aggregazione (camere-servizi), motivando",
          "Disegnare il diagramma delle classi UML con le corrette notazioni per le associazioni",
          "Implementare le classi in C#",
          "Creare un programma di test che: crei l'hotel con almeno 5 camere di tipi diversi, registri alcuni servizi e li associ alle camere, crei almeno 3 ospiti con relative prenotazioni, verifichi la disponibilità di una camera in un periodo, e calcoli l'incasso di una giornata"
        ]} />
      </ExerciseCard>

      <div className="grid grid-cols-4 gap-3 text-center text-sm">
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-red-400 mx-auto mb-1" />
          <span className="text-red-400">Associazioni N-M</span>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-red-400 mx-auto mb-1" />
          <span className="text-red-400">Classi Associazione</span>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-red-400 mx-auto mb-1" />
          <span className="text-red-400">Composizione ◆</span>
        </div>
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-3">
          <CheckCircle className="w-5 h-5 text-red-400 mx-auto mb-1" />
          <span className="text-red-400">Aggregazione ◇</span>
        </div>
      </div>
    </div>
  )
};

// ============================================================================
// SLIDE 5: ESERCIZIO TORNEO SPORTIVO (LIVELLO AVANZATO)
// ============================================================================
const esercizioTorneoSlide = {
  title: "Esercizio 5: Campionato di Calcetto \"Fair Play\"",
  subtitle: "Livello Avanzato - Progettazione Completa OOP",
  content: (
    <div className="space-y-6">
      <ExerciseCard
        icon={Trophy}
        difficulty="Livello Avanzato"
        difficultyColor="bg-purple-500/20 text-purple-400"
        title="Sistema Gestione Torneo"
      >
        <div className="bg-slate-900/50 rounded-lg p-5 border-l-4 border-yellow-500 text-sm">
          <p className="text-gray-300 leading-relaxed text-justify">
            L'associazione sportiva "Fair Play" organizza un torneo di calcetto tra 8 <span className="text-yellow-400 font-semibold">squadre</span>.
            Ogni squadra ha un <span className="text-amber-400 font-semibold">nome</span>, un <span className="text-blue-400 font-semibold">allenatore</span> e un gruppo di <span className="text-blue-400 font-semibold">giocatori</span>;
            ogni giocatore ha un <span className="text-amber-400 font-semibold">ruolo</span> (portiere, difensore, attaccante) e un <span className="text-amber-400 font-semibold">numero di maglia</span>.
            I giocatori <span className="text-emerald-400 font-semibold">possono cambiare squadra</span> tra una stagione e l'altra.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3 text-justify">
            Ogni <span className="text-pink-400 font-semibold">partita</span> vede schierate due squadre, una in casa e una in trasferta, e viene diretta da un <span className="text-blue-400 font-semibold">arbitro</span>.
            Al termine della partita si registra il <span className="text-amber-400 font-semibold">risultato</span>. Il torneo <span className="text-cyan-400 font-semibold">genera automaticamente il calendario</span> delle partite
            in modo che ogni squadra giochi contro tutte le altre.
          </p>
          <p className="text-gray-300 leading-relaxed mt-3 text-justify">
            Esiste una <span className="text-cyan-400 font-semibold">classifica</span> che assegna 3 punti per la vittoria, 1 per il pareggio e 0 per la sconfitta, e ordina le squadre per punteggio.
            L'organizzazione vuole anche sapere chi è il <span className="text-cyan-400 font-semibold">capocannoniere</span> e l'<span className="text-cyan-400 font-semibold">MVP</span> del torneo.
            Se il torneo viene annullato, <span className="text-red-400 font-semibold">tutte le partite in programma vengono cancellate</span>;
            le squadre e i giocatori invece <span className="text-emerald-400 font-semibold">continuano a esistere</span> per la prossima stagione.
          </p>
        </div>

        <ConsegnaSection items={[
          "Progettare la gerarchia completa identificando classi astratte, interfacce e tutte le relazioni",
          "Individuare le classi di associazione presenti nel sistema",
          "Distinguere composizione e aggregazione per ogni relazione, giustificando",
          "Disegnare il diagramma delle classi UML completo",
          "Implementare le classi in C#",
          "Creare un programma di test che: crei il torneo con almeno 4 squadre complete di giocatori, generi il calendario, simuli almeno 6 partite con risultati, aggiorni e stampi la classifica, e individui il capocannoniere"
        ]} />
      </ExerciseCard>

      <div className="grid grid-cols-5 gap-2 text-center text-xs">
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-2">
          <CheckCircle className="w-4 h-4 text-purple-400 mx-auto mb-1" />
          <span className="text-purple-400">Ereditarietà</span>
        </div>
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-2">
          <CheckCircle className="w-4 h-4 text-purple-400 mx-auto mb-1" />
          <span className="text-purple-400">Interfacce</span>
        </div>
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-2">
          <CheckCircle className="w-4 h-4 text-purple-400 mx-auto mb-1" />
          <span className="text-purple-400">Composizione</span>
        </div>
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-2">
          <CheckCircle className="w-4 h-4 text-purple-400 mx-auto mb-1" />
          <span className="text-purple-400">Aggregazione</span>
        </div>
        <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-2">
          <CheckCircle className="w-4 h-4 text-purple-400 mx-auto mb-1" />
          <span className="text-purple-400">Classi Assoc.</span>
        </div>
      </div>
    </div>
  )
};

// ============================================================================
// EXPORT SLIDES
// ============================================================================
const eserciziSlides = [
  esercizioRistoranteSlide,
  esercizioVeterinariaSlide,
  esercizioStreamingSlide,
  esercizioHotelSlide,
  esercizioTorneoSlide
];

// Export globale
window.eserciziSlides = eserciziSlides;
