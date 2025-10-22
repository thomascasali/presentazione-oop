# Presentazione OOP - Programmazione ad Oggetti

Presentazione interattiva sulla Programmazione ad Oggetti con C# e UML, pensata per studenti di 4° superiore.

## 🌐 Demo Live

**Visita la presentazione:** https://thomascasali.github.io/presentazione-oop/

## 📚 Contenuti

La presentazione copre **46+ slide** organizzate in **5 moduli tematici + 5 quiz interattivi**:

### 🎯 Modulo 0: Dashboard (1 slide)
   - Dashboard interattiva con card animate
   - Navigazione diretta ai moduli
   - Statistiche corso (40+ slide, 5 quiz, ~90min)

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

### 🔗 Modulo 5: Associazioni e Riepilogo (5 slide + quiz)
   - **Aggregazione**: Rombo vuoto (◇), vita indipendente
   - **Composizione**: Rombo pieno (◆), vita dipendente
   - **Relazioni N-M**: Studenti ↔ Corsi
   - **Riepilogo finale**: I 4 pilastri OOP, roadmap futuro
   - **Quiz Interattivo**: Scelta multipla, Indovina tipo relazione, Congratulazioni

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
- ✅ **Progress bar animata** con percentuale completamento
- ✅ **Frecce prev/next** con keyboard shortcuts (←/→)
- ✅ **Home button** per tornare alla dashboard
- ✅ **Menu laterale** con indice completo e sottosezioni
- ✅ **Contatore slide** (es. "5 / 46")
- ✅ **Salto diretto** a qualsiasi slide dal menu

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
- **Home button** per tornare alla dashboard
- **Menu laterale** (icona ☰) per accedere all'indice completo
- **Progress bar** per vedere l'avanzamento
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
│   ├── 03-metodi-incapsulamento.jsx   # Metodi, Incapsulamento, Visibilità (10 slide)
│   ├── 04-ereditarieta-polimorfismo.jsx  # Ereditarietà e Polimorfismo (9 slide)
│   └── 05-associazioni-riepilogo.jsx    # Associazioni e Riepilogo (5 slide)
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
- Assicurati di non usare `import/export` ES6 nel JSX (usa variabili globali da CDN)

**Le icone non appaiono?**
- Verifica che il CDN di Lucide React sia caricato in `index.html`
- Usa la sintassi `const { IconName } = lucide;`

**Errori Babel?**
- Assicurati che lo script sia di tipo `text/babel`
- Verifica la sintassi JSX (chiusura tag, key props, etc.)

## 📝 Licenza

Materiale didattico per uso educativo.

## 👨‍💻 Autore

**Thomas Casali**
- GitHub: [@thomascasali](https://github.com/thomascasali)
- Repository: [presentazione-oop](https://github.com/thomascasali/presentazione-oop)

Creato con **Claude Code** (Anthropic) - 2025

---

⭐ Se questa presentazione ti è stata utile, lascia una stella al repository!
