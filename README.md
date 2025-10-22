# Presentazione OOP - Programmazione ad Oggetti

Presentazione interattiva sulla Programmazione ad Oggetti con C# e UML, pensata per studenti di 4° superiore.

## 🌐 Demo Live

**Visita la presentazione:** https://thomascasali.github.io/presentazione-oop/

## 📚 Contenuti

La presentazione copre **40 slide** organizzate in 11 sezioni tematiche:

1. **Introduzione** (slide 0-1)
   - Dashboard interattiva
   - Panoramica OOP, C# e UML

2. **Classi e Oggetti** (slide 2-4)
   - Fondamenti della OOP
   - Diagrammi UML
   - Analogie e esempi pratici

3. **Attributi** (slide 5-8)
   - Tipi e convenzioni
   - Valori default
   - Esempi con classi Studente, Prodotto, Auto

4. **Costruttori** (slide 9-12)
   - Default e parametrizzati
   - Overloading
   - Best practices

5. **Properties** (slide 13-16)
   - Get/Set accessors
   - Auto-implemented properties
   - Read-only properties
   - Validation

6. **Metodi** (slide 17-20)
   - Metodi di istanza
   - Metodi static
   - Overloading
   - Esempi pratici

7. **Incapsulamento** (slide 21-23)
   - Information hiding
   - Protezione dei dati
   - Vantaggi

8. **Visibilità** (slide 24-26)
   - public, private, protected, internal
   - Access modifiers
   - Best practices

9. **Ereditarietà** (slide 27-31)
   - Classi base e derivate
   - override e virtual
   - Gerarchie di classi
   - Esempi: Veicoli, Personaggi, Dipendenti

10. **Polimorfismo** (slide 32-35)
    - Compile-time (overloading)
    - Runtime (override)
    - Upcasting e downcasting
    - Pattern matching

11. **Associazioni** (slide 36-39)
    - Aggregazione
    - Composizione
    - Relazioni N-M
    - Esempi: Università, Ordini

12. **Riepilogo** (slide 40)
    - Sintesi finale dei concetti

## 🚀 Caratteristiche

- ✅ **Dashboard interattiva** con navigazione diretta agli argomenti
- ✅ **Design responsive** (smartphone, tablet, PC)
- ✅ **Tema moderno** blu/azzurro con gradients
- ✅ **Diagrammi UML formali** in formato SVG
- ✅ **Esempi di codice C#** da domini multipli (studenti, e-commerce, veicoli, gaming)
- ✅ **Navigazione avanzata** con progress bar, frecce prev/next, home button
- ✅ **Menu laterale** con indice completo di tutte le sezioni
- ✅ **Syntax highlighting** per codice C#
- ✅ **Animazioni fluide** tra le slide

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
├── index.html              # Pagina principale HTML
├── presentazione-oop.jsx   # Componente React con tutte le 40 slide
├── README.md              # Questo file
└── .claude/               # Configurazione Claude Code (opzionale)
```

### File principali

- **`index.html`** (78 righe)
  - Caricamento CDN (React, Tailwind, Babel, Lucide)
  - Stili base e animazione loading
  - Root div per React

- **`presentazione-oop.jsx`** (3636 righe)
  - Componente principale `OOPPresentation`
  - Array `slides` con tutte le 40 slide
  - Logica di navigazione e menu
  - Contenuto didattico completo

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
