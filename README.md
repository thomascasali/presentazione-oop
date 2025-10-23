# Presentazione OOP - Programmazione ad Oggetti

Presentazione interattiva sulla Programmazione ad Oggetti con C# e UML, pensata per studenti di 4° superiore.

## 🌐 Demo Live

**Visita la presentazione:** https://thomascasali.github.io/presentazione-oop/

## 📚 Contenuti

La presentazione copre **41 slide** organizzate in **5 moduli tematici + 5 quiz interattivi**:

### 🎯 Modulo 0: Dashboard (1 slide)
   - Dashboard interattiva con card animate
   - Navigazione diretta ai moduli
   - Statistiche corso (41 slide, 5 quiz, ~90min)

### 📦 Modulo 1: Fondamenti (8 slide + quiz)
   - **Introduzione OOP**: C# 12.0, UML 2.5, .NET 8
   - **Classi e Oggetti**: Template, istanze, analogie
   - **Rappresentazione UML**: Diagrammi formali
   - **Prima classe C#**: Esempio Personaggio
   - **Attributi**: Tipi, convenzioni, inizializzazione
   - **Quiz Interattivo**: Scelta multipla, Memory game, Bacheca

### ⚡ Modulo 2: Costruttori e Properties (8 slide + quiz)
   - **Costruttori**: Default, parametrizzati, overloading
   - **Keyword 'this'**: Constructor chaining
   - **Properties**: Get/set, auto-implemented, validation
   - **Read-only**: Init-only (C# 9+)
   - **Quiz Interattivo**: Scelta multipla, Esercizi codice, Bacheca

### 🔒 Modulo 3: Metodi e Incapsulamento (10 slide + quiz)
   - **Metodi**: Istanza, static, overloading
   - **Return types**: void vs tipi di ritorno
   - **Incapsulamento**: Information hiding, vantaggi
   - **Visibilità**: public, private, protected, internal
   - **Best practices**: Principio del minimo privilegio
   - **Quiz Interattivo**: Scelta multipla, Drag-and-drop visibilità, Bacheca

### 🌳 Modulo 4: Ereditarietà e Polimorfismo (9 slide + quiz)
   - **Ereditarietà**: base, virtual, override
   - **Gerarchie**: Veicoli, RPG, Dipendenti
   - **Polimorfismo**: Compile-time e runtime
   - **Type casting**: Upcasting, downcasting, is/as
   - **Quiz Interattivo**: Scelta multipla, Esercizi override, Flashcards, Bacheca

### 🔗 Modulo 5: Associazioni (4 slide + quiz)
   - **Aggregazione**: Rombo vuoto (◇), vita indipendente
   - **Composizione**: Rombo pieno (◆), vita dipendente
   - **Relazioni N-M**: Studenti ↔ Corsi
   - **Quiz Interattivo**: Scelta multipla, Indovina tipo relazione, Tab finale con congratulazioni e riepilogo

## 🚀 Caratteristiche

### 🎨 Design e UX
- ✅ **Dashboard interattiva** con card animate e navigazione diretta
- ✅ **Design responsive** ottimizzato per smartphone, tablet e PC
- ✅ **Tema moderno** blu/cyan con gradients professionali
- ✅ **Animazioni fluide** FadeIn, slide, scale, pulse
- ✅ **Hover effects** avanzati con glowing borders
- ✅ **Dark theme** ottimizzato per presentazioni

### 📊 Contenuto Didattico
- ✅ **Diagrammi UML formali** in formato SVG vettoriale
- ✅ **Esempi di codice C#** da domini multipli (RPG, e-commerce, veicoli, università)
- ✅ **Syntax highlighting** professionale per codice
- ✅ **Oltre 20 icone SVG** per concetti visivi
- ✅ **Analogie pratiche** per ogni concetto complesso

### 🎮 Interattività
- ✅ **5 Quiz completi** con scelta multipla, drag-and-drop, codice
- ✅ **Memory games** con flashcards interattive
- ✅ **Esercizi di codice** con correzione automatica
- ✅ **Bacheche discussione** per ogni modulo
- ✅ **Feedback immediato** con spiegazioni dettagliate
- ✅ **Sistema di punteggio** e percentuali

### 🧭 Navigazione
- ✅ **Progress bar animata** con percentuale completamento e cliccabile
- ✅ **Salto diretto tramite textbox** (digita numero slide 1-41 e premi "Vai")
- ✅ **Progress bar interattiva** (clicca ovunque sulla barra per saltare a quella posizione)
- ✅ **Frecce prev/next** con keyboard shortcuts (←/→)
- ✅ **Home button** per tornare alla dashboard
- ✅ **Menu laterale** con indice completo e sottosezioni
- ✅ **Contatore slide** (es. "5 / 41")
- ✅ **Hover effects** sulla progress bar (si ingrandisce per facilitare il clic)

## 💻 Tecnologie

- **React 18** - Framework UI (caricato via CDN, no build process)
- **Tailwind CSS** - Styling e responsive design (via CDN)
- **Lucide React** - Set di icone moderne (via CDN)
- **Babel Standalone** - Trasformazione JSX nel browser
- **SVG** - Diagrammi UML vettoriali

**Nota:** Il progetto non richiede npm, webpack o altri build tools. Tutto funziona direttamente nel browser grazie ai CDN.

## 📖 Come usare

### Online (GitHub Pages)
Visita: **https://thomascasali.github.io/presentazione-oop/**

### Localmente

1. **Clona il repository:**
   ```bash
   git clone https://github.com/thomascasali/presentazione-oop.git
   cd presentazione-oop
   ```

2. **Opzione A - Apri direttamente nel browser:**
   - Apri il file `index.html` con un browser moderno (Chrome, Firefox, Edge, Safari)

3. **Opzione B - Usa un server locale (raccomandato):**
   ```bash
   # Con Python
   python -m http.server 8000
   # Poi apri http://localhost:8000

   # Con Node.js
   npx http-server
   # Poi apri http://localhost:8080

   # Con PHP
   php -S localhost:8000
   ```

### Navigazione

- **Frecce** ← → per navigare tra le slide
- **Textbox numerica** - Digita un numero da 1 a 41 e premi "Vai" per saltare direttamente a quella slide
- **Progress bar cliccabile** - Clicca su qualsiasi punto della barra di avanzamento per saltare a quella posizione
- **Home button** per tornare alla dashboard
- **Menu laterale** (icona ☰) per accedere all'indice completo
- **Dashboard** con card cliccabili per saltare alle sezioni

## 📄 Struttura File

```
presentazione-oop/
├── index.html                     # Pagina principale HTML
├── main.jsx                       # Componente orchestratore
├── README.md                      # Documentazione completa
├── presentazione-oop.jsx          # [DEPRECATO] File monolitico originale
│
├── slides/                        # Moduli slide organizzati
│   ├── 00-dashboard.jsx          # Dashboard interattiva (1 slide)
│   ├── 01-fondamenti.jsx         # Classi, Oggetti, Attributi (8 slide)
│   ├── 02-costruttori-properties.jsx  # Costruttori e Properties (8 slide)
│   ├── 03-metodi-incapsulamento.jsx   # Metodi, Incapsulamento, Visibilità (8 slide)
│   ├── 04-ereditarieta-polimorfismo.jsx  # Ereditarietà e Polimorfismo (9 slide)
│   └── 05-associazioni-riepilogo.jsx    # Associazioni (4 slide)
│
├── quizzes/                       # Quiz interattivi
│   ├── quiz-01-fondamenti.jsx    # Quiz scelta multipla + memory game + bacheca
│   ├── quiz-02-costruttori.jsx   # Quiz + esercizi codice + bacheca
│   ├── quiz-03-metodi.jsx        # Quiz + drag-and-drop + bacheca
│   ├── quiz-04-ereditarieta.jsx  # Quiz + esercizi + flashcards + bacheca
│   └── quiz-05-associazioni.jsx  # Quiz + indovina tipo + bacheca finale
│
└── utils/                         # Utility e componenti condivisi
    ├── components.jsx             # Icone SVG e componenti UI
    └── slideCalculator.js         # Calcolo automatico numeri slide
```

### File Principali

#### **`index.html`** (~95 righe)
- Caricamento CDN (React, Tailwind, Babel)
- Caricamento modulare di tutti i file JSX
- Animazione loading iniziale
- Root div per React

#### **`main.jsx`** (~400 righe)
- Componente orchestratore `OOPPresentation`
- Caricamento dinamico di tutti i moduli
- Sistema di navigazione completo (prev/next, menu, home)
- Progress bar e contatore slide
- Keyboard shortcuts (←/→, Home, Esc)

#### **Moduli Slide** (totale ~2500 righe)
Ogni file contiene:
- Componenti inline (no import ES6)
- Array di slide esportato come variabile globale
- Animazioni FadeIn progressive
- Design migliorato con gradients e icone

#### **Quiz Interattivi** (totale ~4000 righe)
Ogni quiz contiene:
- React hooks per gestione stato (useState, useEffect)
- Sezioni multiple (quiz, esercizi, bacheca)
- Feedback immediato con spiegazioni
- Sistema di punteggio e valutazione

## 🔄 Miglioramenti Recenti (v2.0 - Gennaio 2025)

### Bug Fixes Critici
- ✅ **Risolti export mancanti** - Aggiunti `window.export` a tutti i 12 moduli (slide + quiz + dashboard)
- ✅ **Fixate variabili globali duplicate** - Quiz-01 e Quiz-05 avevano nomi identici che causavano conflitti
- ✅ **Convertito Quiz-02 a dark mode** - 31 proprietà di stile convertite da light a dark theme
- ✅ **Fixato rendering Quiz-02** - Gestione corretta del pattern function factory
- ✅ **Rimossa slide ridondante** - Congratulazioni ora integrate nel tab finale del Quiz-05

### Nuove Funzionalità
- ✨ **Navigazione diretta tramite textbox** - Input numerico 1-41 con validazione e pulsante "Vai"
- ✨ **Progress bar cliccabile** - Clicca ovunque sulla barra per saltare a quella slide
- ✨ **Hover effects migliorati** - Progress bar si ingrandisce al passaggio del mouse
- ✨ **Cache busting** - Versioning degli script (?v=2) per aggiornamenti immediati

### Ottimizzazioni
- 📦 **Slide count ottimizzato** - Da 46 a 41 slide eliminando duplicati
- 🎨 **Styling unificato** - Tutti i quiz ora usano tema dark coerente
- 🔧 **Architettura migliorata** - Variabili con naming conventions univoche per modulo

## 🎓 Target Audience

**Studenti di 4° anno delle scuole superiori** con conoscenze pregresse di:
- Programmazione strutturata
- Programmazione procedurale e modulare
- Struct e collezioni (vettori, liste)
- Sintassi base di C#

## 🎨 Design System

**Colori principali:**
- Tema: Gradient blu/azzurro (`from-blue-900 via-blue-900 to-gray-900`)
- Accenti: `cyan-400`, `blue-400`
- Bordi: `blue-500/30`
- Testo: `white`, `gray-300`, `gray-400`
- Sfondo code blocks: `gray-800/50`

**Tipografia:**
- Font: System fonts (Segoe UI, Roboto, sans-serif)
- Titoli: Font bold con gradient text
- Codice: Monospace con syntax highlighting

## 🔧 Sviluppo e Modifiche

### Setup
Il progetto non richiede installazione di dipendenze. Tutte le librerie sono caricate via CDN.

### Modificare le slide
Apri `presentazione-oop.jsx` e modifica l'array `slides`. Ogni slide ha questa struttura:

```javascript
{
  title: "Titolo della slide",
  subtitle: "Sottotitolo (opzionale)",
  content: (
    <div>
      {/* JSX content */}
    </div>
  )
}
```

### Test locale
Dopo le modifiche, apri `index.html` nel browser o usa un server locale.

### Commit e Deploy
```bash
git add .
git commit -m "Descrizione modifiche"
git push
```

GitHub Pages si aggiorna automaticamente dopo il push.

## 🐛 Troubleshooting

**La presentazione non si carica (rotella infinita)?**
- Verifica che tutti i CDN siano raggiungibili
- Controlla la console del browser per errori
- Assicurati che tutti i moduli abbiano l'export `window.moduleName` alla fine del file
- Verifica che non ci siano errori di sintassi JSX nei file caricati

**Quiz mostra contenuti sbagliati?**
- Verifica che ogni quiz usi nomi univoci per le variabili globali (es. `fondamentiQuizQuestions`, non solo `quizQuestions`)
- Controlla che non ci siano duplicati di nomi di funzioni/componenti tra diversi file quiz
- Prova un hard refresh (Ctrl+F5 o Cmd+Shift+R) per svuotare la cache

**Quiz illeggibile o con colori strani?**
- Verifica che gli stili siano ottimizzati per dark mode (background scuri, testo chiaro)
- Controlla che non ci siano conflitti tra stili inline e Tailwind CSS
- I quiz dovrebbero usare colori con trasparenza (rgba) per adattarsi al tema

**Le modifiche non si vedono dopo un push?**
- GitHub Pages può richiedere 1-2 minuti per l'aggiornamento
- Fai un hard refresh del browser per svuotare la cache
- Controlla che i file siano stati effettivamente modificati su GitHub

**Errori di export/import?**
- NON usare `import/export` ES6 - Babel Standalone non li supporta
- Usa sempre pattern `window.moduleName = moduleName` per esporre variabili globali
- Verifica che l'ordine di caricamento degli script in `index.html` sia corretto

## 📝 Licenza

Materiale didattico per uso educativo.

## 👨‍💻 Autore

**Thomas Casali**
- GitHub: [@thomascasali](https://github.com/thomascasali)
- Repository: [presentazione-oop](https://github.com/thomascasali/presentazione-oop)

Creato con **Claude Code** (Anthropic) - 2025

---

⭐ Se questa presentazione ti è stata utile, lascia una stella al repository!
