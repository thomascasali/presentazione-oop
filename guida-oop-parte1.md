# Programmazione Orientata agli Oggetti con C# e UML

## Guida completa per il corso di Informatica - Classe 4°

---

### Indice Generale

- **Parte 1**
  - [Capitolo 1: Fondamenti della OOP](#capitolo-1-fondamenti-della-oop)
    - [1.1 Che cos'e la Programmazione Orientata agli Oggetti?](#11-che-cose-la-programmazione-orientata-agli-oggetti)
    - [1.2 I Quattro Pilastri della OOP](#12-i-quattro-pilastri-della-oop)
    - [1.3 Perche gli Attributi Privati?](#13-perche-gli-attributi-privati)
    - [1.4 Classi e Oggetti](#14-classi-e-oggetti)
    - [1.5 Diagrammi delle Classi UML](#15-diagrammi-delle-classi-uml)
    - [1.6 Esempio Completo: la Classe Persona](#16-esempio-completo-la-classe-persona)
    - [1.7 Attributi: Campi e Tipi di Dato](#17-attributi-campi-e-tipi-di-dato)
    - [1.8 Creare Oggetti con la Parola Chiave new](#18-creare-oggetti-con-la-parola-chiave-new)
  - [Capitolo 2: Costruttori e Properties](#capitolo-2-costruttori-e-properties)
    - [2.1 Che cos'e un Costruttore?](#21-che-cose-un-costruttore)
    - [2.2 Tipi di Costruttore](#22-tipi-di-costruttore)
    - [2.3 Overloading dei Costruttori](#23-overloading-dei-costruttori)
    - [2.4 La Parola Chiave this](#24-la-parola-chiave-this)
    - [2.5 Constructor Chaining](#25-constructor-chaining)
    - [2.6 Le Properties](#26-le-properties)
    - [2.7 Confronto: Senza Properties vs Con Properties](#27-confronto-senza-properties-vs-con-properties)
    - [2.8 Accessori Get e Set](#28-accessori-get-e-set)
    - [2.9 Auto-Implemented Properties](#29-auto-implemented-properties)
    - [2.10 Properties in Sola Lettura e Init-Only](#210-properties-in-sola-lettura-e-init-only)
    - [2.11 Esempio Completo: la Classe Arma](#211-esempio-completo-la-classe-arma)
- **Parte 2**
  - [Capitolo 3: Metodi e Incapsulamento](#capitolo-3-metodi-e-incapsulamento)
  - [Capitolo 4: Ereditarieta e Polimorfismo](#capitolo-4-ereditarieta-e-polimorfismo)
  - [Capitolo 5: Associazioni tra Classi](#capitolo-5-associazioni-tra-classi)

---

# Capitolo 1: Fondamenti della OOP

## 1.1 Che cos'e la Programmazione Orientata agli Oggetti?

La **Programmazione Orientata agli Oggetti** (in inglese *Object-Oriented Programming*, abbreviato **OOP**) e un **paradigma di programmazione** basato sul concetto di **oggetti**. Un oggetto e un'entita software che racchiude al suo interno sia **dati** (chiamati *attributi* o *campi*) sia **comportamenti** (chiamati *metodi*).

L'idea fondamentale e semplice: invece di pensare a un programma come una sequenza di istruzioni che manipolano dati sparsi, lo pensiamo come un insieme di **oggetti che interagiscono tra loro**, ognuno con le proprie responsabilita.

### Dal mondo reale al codice

Pensiamo a un'automobile. Un'automobile ha:

- **Dati** (attributi): marca, modello, colore, velocita attuale, livello carburante
- **Comportamenti** (metodi): accelera, frena, sterza, accendi il motore

Nella OOP, modelliamo questa automobile come un **oggetto** che contiene tutti questi elementi insieme. La **classe** e il progetto (il "disegno tecnico") da cui creiamo l'automobile, mentre l'**oggetto** e l'automobile concreta, costruita a partire da quel progetto.

```csharp
// La CLASSE e il progetto
class Automobile
{
    // DATI (attributi)
    private string marca;
    private string modello;
    private int velocitaAttuale;

    // COMPORTAMENTI (metodi)
    public void Accelera(int incremento)
    {
        velocitaAttuale += incremento;
    }

    public void Frena()
    {
        velocitaAttuale = 0;
    }
}
```

```csharp
// L'OGGETTO e un'istanza concreta
Automobile miaAuto = new Automobile();
miaAuto.Accelera(50); // L'oggetto esegue un comportamento
```

### Vantaggi della OOP

| Vantaggio | Descrizione |
|-----------|-------------|
| **Modularita** | Il codice e organizzato in unita indipendenti (classi) |
| **Riusabilita** | Le classi possono essere riutilizzate in progetti diversi |
| **Manutenibilita** | Modificare una classe non impatta le altre |
| **Scalabilita** | Facile aggiungere nuove funzionalita |

---

## 1.2 I Quattro Pilastri della OOP

La OOP si fonda su **quattro principi fondamentali**, spesso chiamati i "quattro pilastri". Ogni concetto che studieremo in questo corso si riconduce a uno o piu di questi pilastri.

### Pilastro 1: Incapsulamento

L'**incapsulamento** consiste nel **nascondere i dati interni** di un oggetto e nel **controllare l'accesso** a tali dati attraverso metodi e properties pubbliche. L'oggetto protegge il proprio stato interno, esponendo solo cio che e necessario.

```csharp
class ContoBancario
{
    // Il saldo e NASCOSTO (private): nessuno puo modificarlo direttamente
    private double saldo;

    // L'accesso al saldo avviene SOLO attraverso metodi controllati
    public double GetSaldo()
    {
        return saldo;
    }

    public void Versa(double importo)
    {
        if (importo > 0)
            saldo += importo;
    }

    public bool Preleva(double importo)
    {
        if (importo > 0 && importo <= saldo)
        {
            saldo -= importo;
            return true;
        }
        return false;
    }
}
```

In questo esempio, nessun codice esterno puo impostare il saldo a un valore negativo o scorretto: ogni modifica passa attraverso metodi che **validano** l'operazione.

### Pilastro 2: Astrazione

L'**astrazione** consiste nel **semplificare una realta complessa** creando modelli che catturano solo le caratteristiche essenziali. Quando creiamo una classe, non rappresentiamo ogni singolo dettaglio dell'entita reale, ma solo quelli rilevanti per il nostro programma.

```csharp
// Non modelliamo OGNI dettaglio di uno studente reale,
// solo quelli che servono al nostro sistema scolastico
class Studente
{
    private string nome;
    private string cognome;
    private string matricola;
    private double mediaVoti;

    public void AggiungiVoto(double voto)
    {
        // Logica per aggiornare la media
    }

    public bool IsPromosso()
    {
        return mediaVoti >= 6.0;
    }
}
// Non ci interessano: colore degli occhi, altezza, hobby...
// Abbiamo ASTRATTO solo cio che serve.
```

### Pilastro 3: Ereditarieta

L'**ereditarieta** permette di **creare nuove classi a partire da classi esistenti**. La classe figlia (o *derivata*) eredita attributi e metodi dalla classe padre (o *base*), e puo aggiungerne di nuovi o modificare quelli ereditati.

```csharp
// Classe BASE (padre)
class Animale
{
    public string Nome { get; set; }

    public void Mangia()
    {
        Console.WriteLine($"{Nome} sta mangiando.");
    }
}

// Classe DERIVATA (figlia) - eredita da Animale
class Cane : Animale
{
    public string Razza { get; set; }

    public void Abbaia()
    {
        Console.WriteLine($"{Nome} fa: Bau bau!");
    }
}
```

```csharp
Cane fido = new Cane();
fido.Nome = "Fido";          // Attributo EREDITATO da Animale
fido.Razza = "Labrador";     // Attributo PROPRIO di Cane
fido.Mangia();               // Metodo EREDITATO da Animale
fido.Abbaia();               // Metodo PROPRIO di Cane
```

### Pilastro 4: Polimorfismo

Il **polimorfismo** (dal greco: "molte forme") permette a oggetti di classi diverse di **rispondere allo stesso messaggio in modi diversi**. Una stessa interfaccia puo produrre comportamenti differenti a seconda dell'oggetto concreto che la implementa.

```csharp
class Animale
{
    public string Nome { get; set; }

    // Il metodo e "virtual": le classi figlie possono ridefinirlo
    public virtual void FaiVerso()
    {
        Console.WriteLine($"{Nome} fa un verso generico.");
    }
}

class Cane : Animale
{
    public override void FaiVerso()
    {
        Console.WriteLine($"{Nome} fa: Bau bau!");
    }
}

class Gatto : Animale
{
    public override void FaiVerso()
    {
        Console.WriteLine($"{Nome} fa: Miao!");
    }
}
```

```csharp
// POLIMORFISMO in azione: stesso tipo (Animale), comportamenti diversi
Animale[] animali = new Animale[]
{
    new Cane { Nome = "Fido" },
    new Gatto { Nome = "Micio" },
    new Cane { Nome = "Rex" }
};

foreach (Animale a in animali)
{
    a.FaiVerso(); // Ogni animale risponde A MODO SUO
}
// Output:
// Fido fa: Bau bau!
// Micio fa: Miao!
// Rex fa: Bau bau!
```

### Riepilogo dei Quattro Pilastri

| Pilastro | Parola chiave | Significato |
|----------|---------------|-------------|
| **Incapsulamento** | Nascondere | Proteggere i dati interni, controllare l'accesso tramite properties e metodi |
| **Astrazione** | Semplificare | Modellare solo le caratteristiche essenziali di un'entita |
| **Ereditarieta** | Estendere | Creare nuove classi a partire da classi esistenti |
| **Polimorfismo** | Adattare | Stessa interfaccia, comportamenti diversi a seconda dell'oggetto |

---

## 1.3 Perche gli Attributi Privati?

Uno degli errori piu comuni per chi inizia a programmare a oggetti e rendere tutti gli attributi **pubblici**. Vediamo con un esempio concreto perche questo e un problema e come l'incapsulamento lo risolve.

### Approccio SBAGLIATO: attributi pubblici

```csharp
class ContoBancario
{
    // PERICOLO: attributi pubblici, chiunque puo modificarli!
    public string Titolare;
    public double Saldo;
}
```

```csharp
ContoBancario conto = new ContoBancario();
conto.Titolare = "Mario Rossi";
conto.Saldo = 1000;

// PROBLEMA 1: Saldo negativo? Nessun controllo!
conto.Saldo = -1000;  // Operazione permessa, ma assurda!

// PROBLEMA 2: Qualcuno puo barare
conto.Saldo = 999999999;  // Milionario con una riga di codice!

// PROBLEMA 3: Nessuna traccia delle operazioni
conto.Saldo = conto.Saldo - 500;  // Chi ha prelevato? Quando? Perche?
```

Con gli attributi pubblici **non c'e alcun controllo**: qualsiasi parte del programma puo leggere e scrivere qualsiasi valore, anche assurdo.

### Approccio CORRETTO: attributi privati con metodi controllati

```csharp
class ContoBancario
{
    // Attributi PRIVATI: accessibili solo dall'interno della classe
    private string titolare;
    private double saldo;

    // Costruttore: inizializza il conto con valori validi
    public ContoBancario(string titolare, double saldoIniziale)
    {
        this.titolare = titolare;
        if (saldoIniziale >= 0)
            this.saldo = saldoIniziale;
        else
            this.saldo = 0;
    }

    // Property in sola lettura per il saldo
    public double Saldo
    {
        get { return saldo; }
    }

    // Property in sola lettura per il titolare
    public string Titolare
    {
        get { return titolare; }
    }

    // Metodo controllato per i versamenti
    public bool Versa(double importo)
    {
        if (importo <= 0)
        {
            Console.WriteLine("Errore: l'importo deve essere positivo.");
            return false;
        }

        saldo += importo;
        Console.WriteLine($"Versati {importo:C}. Nuovo saldo: {saldo:C}");
        return true;
    }

    // Metodo controllato per i prelievi
    public bool Preleva(double importo)
    {
        if (importo <= 0)
        {
            Console.WriteLine("Errore: l'importo deve essere positivo.");
            return false;
        }

        if (importo > saldo)
        {
            Console.WriteLine("Errore: saldo insufficiente.");
            return false;
        }

        saldo -= importo;
        Console.WriteLine($"Prelevati {importo:C}. Nuovo saldo: {saldo:C}");
        return true;
    }
}
```

```csharp
ContoBancario conto = new ContoBancario("Mario Rossi", 1000);

conto.Versa(500);       // OK: Versati 500. Nuovo saldo: 1.500
conto.Preleva(200);     // OK: Prelevati 200. Nuovo saldo: 1.300
conto.Preleva(5000);    // Errore: saldo insufficiente.
conto.Versa(-100);      // Errore: l'importo deve essere positivo.

// conto.saldo = -1000; // ERRORE DI COMPILAZIONE! 'saldo' e privato
```

### Confronto diretto

| Aspetto | Attributi Pubblici | Attributi Privati + Metodi |
|---------|-------------------|---------------------------|
| Validazione | Nessuna | Si, in ogni metodo |
| Saldo negativo | Possibile | Impossibile |
| Tracciabilita | Nessuna | Messaggi di log |
| Sicurezza | Nessuna | Accesso controllato |
| Manutenzione | Difficile | Facile |

> **Regola d'oro**: gli attributi di una classe devono essere **sempre privati**. L'accesso dall'esterno avviene esclusivamente tramite **properties** e **metodi pubblici** che ne controllano la validita.

---

## 1.4 Classi e Oggetti

Questa distinzione e il cuore della OOP e va compresa a fondo.

### La Classe: il Progetto

Una **classe** e un **modello** (in inglese *blueprint*, cioe "progetto tecnico") che definisce:

- Quali **attributi** (dati) avranno gli oggetti
- Quali **metodi** (comportamenti) avranno gli oggetti

La classe, da sola, non occupa memoria per i dati: e solo una **descrizione astratta**.

```csharp
// Questa e una CLASSE: un modello, un progetto
class Automobile
{
    private string marca;
    private string modello;
    private int anno;
    private string colore;

    public Automobile(string marca, string modello, int anno, string colore)
    {
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.colore = colore;
    }

    public void MostraInfo()
    {
        Console.WriteLine($"{marca} {modello} ({anno}) - {colore}");
    }
}
```

### L'Oggetto: l'Istanza Concreta

Un **oggetto** e un'**istanza** concreta di una classe, creata in memoria con la parola chiave `new`. Ogni oggetto ha i propri valori per gli attributi definiti nella classe.

```csharp
// Questi sono OGGETTI: istanze concrete create dal modello
Automobile auto1 = new Automobile("Fiat", "Panda", 2023, "Bianco");
Automobile auto2 = new Automobile("BMW", "Serie 3", 2024, "Nero");
Automobile auto3 = new Automobile("Toyota", "Yaris", 2022, "Rosso");

auto1.MostraInfo();  // Fiat Panda (2023) - Bianco
auto2.MostraInfo();  // BMW Serie 3 (2024) - Nero
auto3.MostraInfo();  // Toyota Yaris (2022) - Rosso
```

### Analogia: Classe vs Oggetto

Pensate allo **stampino per biscotti** e ai **biscotti**:

- Lo **stampino** e la **classe**: definisce la forma (attributi e metodi)
- Ogni **biscotto** e un **oggetto**: ha la stessa forma, ma puo avere decorazioni diverse (valori diversi per gli attributi)
- Da un solo stampino possiamo creare **molti biscotti**, cosi come da una sola classe possiamo creare **molti oggetti**

| Concetto | Classe | Oggetto |
|----------|--------|---------|
| Definizione | Modello/Progetto | Istanza concreta |
| Memoria | Non occupa spazio per i dati | Occupa spazio in memoria |
| Quantita | Una sola definizione | Molteplici istanze |
| Creazione | Parola chiave `class` | Parola chiave `new` |
| Esempio | `class Automobile { ... }` | `new Automobile(...)` |

---

## 1.5 Diagrammi delle Classi UML

### Che cos'e UML?

**UML** (*Unified Modeling Language*) e un linguaggio visuale standard per rappresentare la struttura e il comportamento di un sistema software. Nel nostro corso ci concentriamo sui **diagrammi delle classi**, che mostrano le classi, i loro attributi, i loro metodi e le relazioni tra di esse.

### Struttura di una Classe UML

Una classe in UML si rappresenta come un **rettangolo diviso in tre sezioni**:

```
+---------------------------+
|       NomeClasse          |   <-- Sezione 1: NOME della classe
+---------------------------+
| - attributo1: tipo        |   <-- Sezione 2: ATTRIBUTI
| - attributo2: tipo        |
+---------------------------+
| + metodo1(): tipoRitorno  |   <-- Sezione 3: METODI
| + metodo2(param): tipo    |
+---------------------------+
```

### Simboli di Visibilita

I simboli davanti ad attributi e metodi indicano la loro **visibilita** (modificatore di accesso):

| Simbolo | Significato | In C# |
|---------|-------------|-------|
| `-` | **Private**: accessibile solo dalla classe stessa | `private` |
| `+` | **Public**: accessibile da qualsiasi parte del codice | `public` |
| `#` | **Protected**: accessibile dalla classe e dalle sue derivate | `protected` |

### Esempio: dalla UML al Codice

Diagramma UML della classe `Persona`:

```
+---------------------------+
|         Persona           |
+---------------------------+
| - nome: string            |
| - cognome: string         |
| - eta: int                |
+---------------------------+
| + Presenta(): void        |
| + GetNomeCompleto():string|
+---------------------------+
```

Traduzione in C#:

```csharp
class Persona
{
    // Attributi (- significa private)
    private string nome;
    private string cognome;
    private int eta;

    // Costruttore
    public Persona(string nome, string cognome, int eta)
    {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
    }

    // Metodi (+ significa public)
    public void Presenta()
    {
        Console.WriteLine($"Ciao, mi chiamo {nome} {cognome} e ho {eta} anni.");
    }

    public string GetNomeCompleto()
    {
        return $"{nome} {cognome}";
    }
}
```

> **Regola pratica**: ogni classe che disegnate in UML deve poter essere tradotta direttamente in codice C#. I simboli `-` e `+` nel diagramma corrispondono a `private` e `public` nel codice.

---

## 1.6 Esempio Completo: la Classe Persona

Mettiamo in pratica tutti i concetti visti finora con un esempio completo e commentato.

### Diagramma UML

```
+--------------------------------------+
|              Persona                 |
+--------------------------------------+
| - nome: string                       |
| - eta: int                           |
+--------------------------------------+
| + Persona(nome: string, eta: int)    |
| + Presenta(): void                   |
| + IsAdulto(): bool                   |
+--------------------------------------+
```

### Codice C# Completo

```csharp
class Persona
{
    // === ATTRIBUTI (privati) ===
    private string nome;
    private int eta;

    // === COSTRUTTORE ===
    public Persona(string nome, int eta)
    {
        this.nome = nome;
        // Validazione: l'eta non puo essere negativa
        if (eta >= 0)
            this.eta = eta;
        else
            this.eta = 0;
    }

    // === METODI (pubblici) ===

    /// <summary>
    /// Stampa una presentazione della persona.
    /// </summary>
    public void Presenta()
    {
        Console.WriteLine($"Ciao! Mi chiamo {nome} e ho {eta} anni.");
    }

    /// <summary>
    /// Restituisce true se la persona e maggiorenne.
    /// </summary>
    public bool IsAdulto()
    {
        return eta >= 18;
    }
}
```

### Utilizzo della Classe

```csharp
// Creazione di oggetti (istanze) della classe Persona
Persona p1 = new Persona("Alice", 25);
Persona p2 = new Persona("Marco", 16);

// Utilizzo dei metodi
p1.Presenta();  // Ciao! Mi chiamo Alice e ho 25 anni.
p2.Presenta();  // Ciao! Mi chiamo Marco e ho 16 anni.

// Verifica se sono adulti
Console.WriteLine($"Alice e adulta? {p1.IsAdulto()}");  // True
Console.WriteLine($"Marco e adulto? {p2.IsAdulto()}");  // False

// ERRORE: non possiamo accedere direttamente agli attributi privati
// p1.nome = "Altro nome";  // Errore di compilazione!
// int x = p2.eta;          // Errore di compilazione!
```

---

## 1.7 Attributi: Campi e Tipi di Dato

### Cosa sono gli Attributi?

Gli **attributi** (chiamati anche **campi** o *fields*) sono le **variabili dichiarate all'interno di una classe** che rappresentano i dati dell'oggetto. Ogni oggetto creato dalla classe avra la propria copia indipendente di questi attributi.

### Tipi di Dato Fondamentali in C#

I tipi di dato piu comuni usati per gli attributi sono:

| Tipo | Descrizione | Esempio di Valore |
|------|-------------|-------------------|
| `string` | Testo (sequenza di caratteri) | `"Mario Rossi"` |
| `int` | Numero intero | `42`, `-7`, `0` |
| `double` | Numero decimale (virgola mobile) | `3.14`, `99.99` |
| `bool` | Valore booleano (vero/falso) | `true`, `false` |
| `char` | Singolo carattere | `'A'`, `'x'` |
| `decimal` | Decimale ad alta precisione (per valori monetari) | `19.99m` |

### Esempio: una Classe con Attributi di Tipi Diversi

```csharp
class Studente
{
    // Attributi con tipi diversi
    private string nome;           // Testo
    private string cognome;        // Testo
    private int annoNascita;       // Numero intero
    private double mediaVoti;      // Numero decimale
    private bool iscritto;         // Vero/falso
    private char sezione;          // Singolo carattere

    public Studente(string nome, string cognome, int annoNascita, char sezione)
    {
        this.nome = nome;
        this.cognome = cognome;
        this.annoNascita = annoNascita;
        this.sezione = sezione;
        this.mediaVoti = 0.0;
        this.iscritto = true;
    }

    public void StampaInfo()
    {
        Console.WriteLine($"Studente: {nome} {cognome}");
        Console.WriteLine($"Nato nel: {annoNascita}");
        Console.WriteLine($"Sezione: {sezione}");
        Console.WriteLine($"Media voti: {mediaVoti:F2}");
        Console.WriteLine($"Iscritto: {(iscritto ? "Si" : "No")}");
    }
}
```

### Valori di Default dei Tipi

Quando un attributo non viene inizializzato esplicitamente, C# gli assegna un **valore di default**:

| Tipo | Valore di Default |
|------|-------------------|
| `string` | `null` (nessun valore) |
| `int` | `0` |
| `double` | `0.0` |
| `bool` | `false` |
| `char` | `'\0'` (carattere nullo) |

> **Buona pratica**: inizializzare sempre gli attributi nel costruttore, senza affidarsi ai valori di default, per rendere il codice piu chiaro e leggibile.

---

## 1.8 Creare Oggetti con la Parola Chiave new

### Il Processo di Creazione

La parola chiave `new` e il meccanismo con cui creiamo un **oggetto** (istanza) a partire da una classe. Quando scriviamo `new`, accade quanto segue:

1. Viene **allocata memoria** per il nuovo oggetto
2. Gli attributi vengono **inizializzati** ai loro valori di default
3. Viene **chiamato il costruttore** che puo impostare valori specifici
4. Viene restituito un **riferimento** all'oggetto creato

### Sintassi

```
NomeClasse nomeVariabile = new NomeClasse(parametri);
```

### Esempio Pratico

```csharp
class Libro
{
    private string titolo;
    private string autore;
    private int pagine;
    private bool disponibile;

    public Libro(string titolo, string autore, int pagine)
    {
        this.titolo = titolo;
        this.autore = autore;
        this.pagine = pagine;
        this.disponibile = true; // Un libro nuovo e sempre disponibile
    }

    public void Presta()
    {
        if (disponibile)
        {
            disponibile = false;
            Console.WriteLine($"'{titolo}' e stato prestato.");
        }
        else
        {
            Console.WriteLine($"'{titolo}' non e disponibile.");
        }
    }

    public void Restituisci()
    {
        disponibile = true;
        Console.WriteLine($"'{titolo}' e stato restituito.");
    }

    public void StampaInfo()
    {
        string stato = disponibile ? "Disponibile" : "In prestito";
        Console.WriteLine($"'{titolo}' di {autore} ({pagine} pag.) - {stato}");
    }
}
```

```csharp
// Creazione di TRE oggetti dalla STESSA classe
Libro libro1 = new Libro("Il Signore degli Anelli", "J.R.R. Tolkien", 1178);
Libro libro2 = new Libro("1984", "George Orwell", 328);
Libro libro3 = new Libro("Harry Potter", "J.K. Rowling", 294);

// Ogni oggetto ha i PROPRI dati, indipendenti dagli altri
libro1.StampaInfo();  // 'Il Signore degli Anelli' di J.R.R. Tolkien (1178 pag.) - Disponibile
libro2.StampaInfo();  // '1984' di George Orwell (328 pag.) - Disponibile

// Prestare un libro NON modifica gli altri
libro1.Presta();      // 'Il Signore degli Anelli' e stato prestato.
libro1.StampaInfo();  // 'Il Signore degli Anelli' di J.R.R. Tolkien (1178 pag.) - In prestito
libro2.StampaInfo();  // '1984' di George Orwell (328 pag.) - Disponibile  (non cambiato!)
```

### Oggetti in un Array

Possiamo creare collezioni di oggetti usando gli array:

```csharp
// Array di oggetti Libro
Libro[] libreria = new Libro[]
{
    new Libro("Divina Commedia", "Dante Alighieri", 432),
    new Libro("I Promessi Sposi", "Alessandro Manzoni", 720),
    new Libro("Il Nome della Rosa", "Umberto Eco", 512)
};

// Iterare su tutti gli oggetti
foreach (Libro libro in libreria)
{
    libro.StampaInfo();
}
```

> **Concetto chiave**: ogni chiamata a `new` crea un oggetto **indipendente** in memoria. Modificare un oggetto non ha alcun effetto sugli altri oggetti della stessa classe.

---

# Capitolo 2: Costruttori e Properties

## 2.1 Che cos'e un Costruttore?

Un **costruttore** e un **metodo speciale** che viene chiamato automaticamente quando si crea un nuovo oggetto con la parola chiave `new`. Il suo scopo e **inizializzare** l'oggetto, assicurandosi che tutti gli attributi abbiano valori validi fin dal momento della creazione.

### Caratteristiche di un Costruttore

Un costruttore si distingue dai metodi normali per tre caratteristiche:

1. Ha lo **stesso nome della classe**
2. **Non ha un tipo di ritorno** (nemmeno `void`)
3. Viene chiamato **automaticamente** al momento della creazione dell'oggetto

```csharp
class Studente
{
    private string nome;
    private int eta;

    // Questo e un COSTRUTTORE:
    // - stesso nome della classe: "Studente"
    // - nessun tipo di ritorno
    public Studente(string nome, int eta)
    {
        this.nome = nome;
        this.eta = eta;
    }

    public void Presenta()
    {
        Console.WriteLine($"Sono {nome}, ho {eta} anni.");
    }
}
```

```csharp
// Il costruttore viene chiamato AUTOMATICAMENTE qui
Studente s = new Studente("Luca", 17);
s.Presenta();  // Sono Luca, ho 17 anni.
```

---

## 2.2 Tipi di Costruttore

### Costruttore di Default (senza parametri)

Il **costruttore di default** non accetta parametri e assegna valori predefiniti agli attributi. E utile quando vogliamo creare un oggetto "vuoto" da configurare in seguito.

```csharp
class Personaggio
{
    private string nome;
    private int livello;
    private int puntiVita;

    // Costruttore di DEFAULT: nessun parametro, valori predefiniti
    public Personaggio()
    {
        nome = "Sconosciuto";
        livello = 1;
        puntiVita = 100;
    }

    public void StampaInfo()
    {
        Console.WriteLine($"[{nome}] Lv.{livello} - HP: {puntiVita}");
    }
}
```

```csharp
Personaggio p = new Personaggio();  // Usa il costruttore di default
p.StampaInfo();  // [Sconosciuto] Lv.1 - HP: 100
```

> **Nota importante**: se non definiamo alcun costruttore, C# ne fornisce automaticamente uno di default vuoto. Ma se definiamo anche solo un costruttore con parametri, quello automatico **non viene piu generato** e dobbiamo definirlo esplicitamente se ci serve.

### Costruttore Parametrizzato

Il **costruttore parametrizzato** accetta uno o piu parametri per inizializzare l'oggetto con valori specifici forniti al momento della creazione.

```csharp
class Personaggio
{
    private string nome;
    private int livello;
    private int puntiVita;

    // Costruttore PARAMETRIZZATO: riceve valori dall'esterno
    public Personaggio(string nome, int livello, int puntiVita)
    {
        this.nome = nome;
        this.livello = livello;
        this.puntiVita = puntiVita;
    }

    public void StampaInfo()
    {
        Console.WriteLine($"[{nome}] Lv.{livello} - HP: {puntiVita}");
    }
}
```

```csharp
Personaggio eroe = new Personaggio("Arthas", 80, 5000);
eroe.StampaInfo();  // [Arthas] Lv.80 - HP: 5000
```

---

## 2.3 Overloading dei Costruttori

L'**overloading dei costruttori** consiste nel definire **piu costruttori nella stessa classe**, ciascuno con una **lista di parametri diversa** (per numero o per tipo). Questo offre all'utente della classe diversi modi per creare un oggetto.

### Esempio: la Classe Smartphone

```csharp
class Smartphone
{
    private string marca;
    private string modello;
    private int memoriaGB;
    private string colore;

    // Costruttore 1: COMPLETO - tutti i parametri
    public Smartphone(string marca, string modello, int memoriaGB, string colore)
    {
        this.marca = marca;
        this.modello = modello;
        this.memoriaGB = memoriaGB;
        this.colore = colore;
    }

    // Costruttore 2: PARZIALE - senza colore (valore di default)
    public Smartphone(string marca, string modello, int memoriaGB)
    {
        this.marca = marca;
        this.modello = modello;
        this.memoriaGB = memoriaGB;
        this.colore = "Nero";  // Colore di default
    }

    // Costruttore 3: MINIMO - solo marca e modello
    public Smartphone(string marca, string modello)
    {
        this.marca = marca;
        this.modello = modello;
        this.memoriaGB = 64;    // Memoria di default
        this.colore = "Nero";   // Colore di default
    }

    public void StampaInfo()
    {
        Console.WriteLine($"{marca} {modello} - {memoriaGB}GB - {colore}");
    }
}
```

```csharp
// Tre modi diversi per creare uno Smartphone
Smartphone s1 = new Smartphone("Apple", "iPhone 15", 256, "Blu");
Smartphone s2 = new Smartphone("Samsung", "Galaxy S24", 128);
Smartphone s3 = new Smartphone("Xiaomi", "Redmi Note 13");

s1.StampaInfo();  // Apple iPhone 15 - 256GB - Blu
s2.StampaInfo();  // Samsung Galaxy S24 - 128GB - Nero
s3.StampaInfo();  // Xiaomi Redmi Note 13 - 64GB - Nero
```

Il compilatore sceglie il costruttore corretto in base al **numero e al tipo di argomenti** passati nella chiamata a `new`.

---

## 2.4 La Parola Chiave this

La parola chiave `this` e un **riferimento all'istanza corrente** dell'oggetto. Serve principalmente per **distinguere i parametri del costruttore dagli attributi della classe** quando hanno lo stesso nome.

### Il Problema dell'Ambiguita

```csharp
class Giocatore
{
    private string nome;
    private int livello;

    // PROBLEMA: "nome" e sia il parametro che l'attributo!
    // Senza "this", il compilatore non sa a quale ci riferiamo
    public Giocatore(string nome, int livello)
    {
        // SBAGLIATO: assegna il parametro a se stesso (non fa nulla di utile)
        // nome = nome;

        // CORRETTO: "this.nome" e l'attributo, "nome" e il parametro
        this.nome = nome;
        this.livello = livello;
    }
}
```

### Come Funziona this

```csharp
class Giocatore
{
    private string nome;
    private int livello;
    private int esperienza;

    public Giocatore(string nome, int livello)
    {
        this.nome = nome;           // this.nome = attributo, nome = parametro
        this.livello = livello;     // this.livello = attributo, livello = parametro
        this.esperienza = 0;        // Anche qui "this" chiarisce che e l'attributo
    }

    public void GuadagnaEsperienza(int punti)
    {
        this.esperienza += punti;   // "this" e opzionale qui, ma rende il codice piu chiaro

        if (this.esperienza >= this.livello * 100)
        {
            this.livello++;
            this.esperienza = 0;
            Console.WriteLine($"{this.nome} e salito al livello {this.livello}!");
        }
    }

    public void StampaInfo()
    {
        Console.WriteLine($"[{this.nome}] Lv.{this.livello} - EXP: {this.esperienza}");
    }
}
```

```csharp
Giocatore g = new Giocatore("Aragorn", 5);
g.StampaInfo();              // [Aragorn] Lv.5 - EXP: 0
g.GuadagnaEsperienza(300);  // Output: nessuno (300 < 500)
g.GuadagnaEsperienza(250);  // Aragorn e salito al livello 6!
g.StampaInfo();              // [Aragorn] Lv.6 - EXP: 50
```

> **Consiglio**: usare `this` nel costruttore e **obbligatorio** quando i parametri hanno lo stesso nome degli attributi. Nei metodi e **opzionale** ma consigliato per chiarezza.

---

## 2.5 Constructor Chaining

Il **constructor chaining** (concatenamento dei costruttori) e una tecnica che permette a un costruttore di **chiamare un altro costruttore della stessa classe** usando la sintassi `: this(parametri)`. Questo evita la duplicazione del codice di inizializzazione.

### Il Problema della Duplicazione

Nell'esempio della classe `Smartphone` visto prima, ogni costruttore ripeteva le stesse assegnazioni. Con il constructor chaining possiamo eliminare questa ridondanza.

### Esempio: la Classe Giocatore con Constructor Chaining

```csharp
class Giocatore
{
    private string nome;
    private string classe;
    private int livello;
    private int puntiVita;
    private int attacco;

    // Costruttore PRINCIPALE (quello piu completo)
    public Giocatore(string nome, string classe, int livello, int puntiVita, int attacco)
    {
        this.nome = nome;
        this.classe = classe;
        this.livello = livello;
        this.puntiVita = puntiVita;
        this.attacco = attacco;
    }

    // Costruttore con 3 parametri: chiama quello principale con valori di default
    // Il ": this(...)" viene eseguito PRIMA del corpo del costruttore
    public Giocatore(string nome, string classe, int livello)
        : this(nome, classe, livello, livello * 100, livello * 10)
    {
        // Il corpo puo essere vuoto: tutto e gia stato fatto dal costruttore principale
        // Oppure possiamo aggiungere logica aggiuntiva qui
    }

    // Costruttore con solo il nome: chiama quello con 3 parametri
    public Giocatore(string nome)
        : this(nome, "Guerriero", 1)
    {
        // Crea un guerriero di livello 1 con il nome specificato
    }

    // Costruttore di default: chiama quello con solo il nome
    public Giocatore()
        : this("Eroe Senza Nome")
    {
        // Crea un personaggio con valori completamente di default
    }

    public void StampaScheda()
    {
        Console.WriteLine("=== SCHEDA PERSONAGGIO ===");
        Console.WriteLine($"Nome:      {nome}");
        Console.WriteLine($"Classe:    {classe}");
        Console.WriteLine($"Livello:   {livello}");
        Console.WriteLine($"Punti Vita:{puntiVita}");
        Console.WriteLine($"Attacco:   {attacco}");
        Console.WriteLine("==========================");
    }
}
```

```csharp
// 4 modi diversi per creare un Giocatore, tutti passano dal costruttore principale
Giocatore g1 = new Giocatore("Cloud", "Spadaccino", 50, 5000, 800);
Giocatore g2 = new Giocatore("Gandalf", "Mago", 99);
Giocatore g3 = new Giocatore("Link");
Giocatore g4 = new Giocatore();

g1.StampaScheda();
// Nome: Cloud | Classe: Spadaccino | Lv.50 | HP: 5000 | ATK: 800

g2.StampaScheda();
// Nome: Gandalf | Classe: Mago | Lv.99 | HP: 9900 | ATK: 990

g3.StampaScheda();
// Nome: Link | Classe: Guerriero | Lv.1 | HP: 100 | ATK: 10

g4.StampaScheda();
// Nome: Eroe Senza Nome | Classe: Guerriero | Lv.1 | HP: 100 | ATK: 10
```

### Schema del Chaining

```
new Giocatore()
    --> new Giocatore("Eroe Senza Nome")
        --> new Giocatore("Eroe Senza Nome", "Guerriero", 1)
            --> new Giocatore("Eroe Senza Nome", "Guerriero", 1, 100, 10)
                --> Costruttore principale: assegna tutti gli attributi
```

> **Vantaggio**: la logica di inizializzazione e scritta **una sola volta** nel costruttore principale. Se dobbiamo modificarla, lo facciamo in un solo punto.

---

## 2.6 Le Properties

### Cosa sono le Properties?

Le **properties** (proprieta) sono un meccanismo di C# che consente di **controllare l'accesso ai campi privati** mantenendo l'incapsulamento, ma con una sintassi piu elegante e intuitiva rispetto ai metodi getter/setter tradizionali.

Una property si comporta come un attributo pubblico dal punto di vista di chi usa la classe, ma internamente contiene **logica di controllo** tramite gli accessori `get` (lettura) e `set` (scrittura).

### Struttura di una Property

```csharp
class Esempio
{
    // Campo privato (backing field)
    private string nome;

    // PROPERTY: accesso controllato al campo privato
    public string Nome
    {
        get { return nome; }              // Accessore di LETTURA
        set { nome = value; }             // Accessore di SCRITTURA ("value" = valore assegnato)
    }
}
```

```csharp
Esempio e = new Esempio();
e.Nome = "Mario";           // Chiama il SET (sembra un'assegnazione diretta)
Console.WriteLine(e.Nome);  // Chiama il GET (sembra un accesso diretto)
// In realta, dietro le quinte, vengono eseguiti i metodi get e set!
```

---

## 2.7 Confronto: Senza Properties vs Con Properties

### Approccio SBAGLIATO: campi pubblici senza alcun controllo

```csharp
class Prodotto
{
    // Campi PUBBLICI: nessuna protezione, nessuna validazione
    public string Nome;
    public double Prezzo;
    public int Giacenza;
}
```

```csharp
Prodotto p = new Prodotto();
p.Nome = "";             // Nome vuoto? Permesso, ma non ha senso!
p.Prezzo = -50;          // Prezzo negativo? Permesso, ma assurdo!
p.Giacenza = -100;       // Giacenza negativa? Permesso, ma impossibile!
```

### Approccio CORRETTO: campi privati con Properties che validano

```csharp
class Prodotto
{
    // Campi PRIVATI (backing fields)
    private string nome;
    private double prezzo;
    private int giacenza;

    // Property Nome: il nome non puo essere vuoto
    public string Nome
    {
        get { return nome; }
        set
        {
            if (!string.IsNullOrWhiteSpace(value))
                nome = value;
            else
                Console.WriteLine("Errore: il nome non puo essere vuoto.");
        }
    }

    // Property Prezzo: il prezzo non puo essere negativo
    public double Prezzo
    {
        get { return prezzo; }
        set
        {
            if (value >= 0)
                prezzo = value;
            else
                Console.WriteLine("Errore: il prezzo non puo essere negativo.");
        }
    }

    // Property Giacenza: la giacenza non puo essere negativa
    public int Giacenza
    {
        get { return giacenza; }
        set
        {
            if (value >= 0)
                giacenza = value;
            else
                Console.WriteLine("Errore: la giacenza non puo essere negativa.");
        }
    }
}
```

```csharp
Prodotto p = new Prodotto();

p.Nome = "Laptop";    // OK
p.Prezzo = 999.99;    // OK
p.Giacenza = 50;      // OK

p.Nome = "";           // Errore: il nome non puo essere vuoto.
p.Prezzo = -50;        // Errore: il prezzo non puo essere negativo.
p.Giacenza = -10;      // Errore: la giacenza non puo essere negativa.

Console.WriteLine($"{p.Nome}: {p.Prezzo:C} (Disponibili: {p.Giacenza})");
// Laptop: 999,99 EUR (Disponibili: 50)
```

### Confronto Diretto

| Aspetto | Campi Pubblici | Properties |
|---------|---------------|------------|
| Sintassi d'uso | `obj.Campo = valore` | `obj.Property = valore` |
| Validazione | Nessuna | Si, nel `set` |
| Incapsulamento | Violato | Rispettato |
| Flessibilita | Nessuna | Logica personalizzabile |
| Sicurezza | Bassa | Alta |

---

## 2.8 Accessori Get e Set

### L'Accessore Get (Lettura)

L'accessore `get` viene eseguito quando si **legge** il valore della property. Deve restituire un valore dello stesso tipo della property.

```csharp
public double Prezzo
{
    get
    {
        // Possiamo aggiungere logica: ad esempio, formattazione o calcoli
        return prezzo;
    }
}
```

### L'Accessore Set (Scrittura)

L'accessore `set` viene eseguito quando si **assegna** un valore alla property. La parola chiave `value` rappresenta il valore che viene assegnato.

```csharp
public double Prezzo
{
    set
    {
        // "value" contiene il valore che qualcuno sta cercando di assegnare
        if (value >= 0)
            prezzo = value;
    }
}
```

### Esempio Completo: la Classe Prodotto

```csharp
class Prodotto
{
    private string nome;
    private double prezzo;
    private int giacenza;

    public Prodotto(string nome, double prezzo, int giacenza)
    {
        // Usiamo le Properties (non i campi!) per sfruttare la validazione
        Nome = nome;
        Prezzo = prezzo;
        Giacenza = giacenza;
    }

    public string Nome
    {
        get { return nome; }
        set
        {
            if (!string.IsNullOrWhiteSpace(value))
                nome = value.Trim();  // Rimuove spazi iniziali e finali
            else
                throw new ArgumentException("Il nome non puo essere vuoto.");
        }
    }

    public double Prezzo
    {
        get { return prezzo; }
        set
        {
            if (value >= 0)
                prezzo = Math.Round(value, 2);  // Arrotonda a 2 decimali
            else
                throw new ArgumentException("Il prezzo non puo essere negativo.");
        }
    }

    public int Giacenza
    {
        get { return giacenza; }
        set
        {
            if (value >= 0)
                giacenza = value;
            else
                throw new ArgumentException("La giacenza non puo essere negativa.");
        }
    }

    // Property CALCOLATA (solo get): il valore totale in magazzino
    public double ValoreTotale
    {
        get { return prezzo * giacenza; }
    }

    public void StampaDettagli()
    {
        Console.WriteLine($"Prodotto: {Nome}");
        Console.WriteLine($"Prezzo:   {Prezzo:C}");
        Console.WriteLine($"Giacenza: {Giacenza} pezzi");
        Console.WriteLine($"Valore:   {ValoreTotale:C}");
    }
}
```

```csharp
Prodotto p = new Prodotto("Mouse Wireless", 29.99, 150);
p.StampaDettagli();
// Prodotto: Mouse Wireless
// Prezzo:   29,99 EUR
// Giacenza: 150 pezzi
// Valore:   4.498,50 EUR

// Modifica tramite properties (con validazione automatica)
p.Prezzo = 24.99;
p.Giacenza = 200;
Console.WriteLine($"Nuovo valore totale: {p.ValoreTotale:C}");  // 4.998,00 EUR
```

---

## 2.9 Auto-Implemented Properties

Quando una property **non necessita di logica personalizzata** nel `get` o nel `set`, C# offre una sintassi abbreviata chiamata **auto-implemented property**. Il compilatore crea automaticamente un campo privato nascosto (backing field).

### Sintassi

```csharp
class Contatto
{
    // Auto-implemented properties: niente backing field esplicito,
    // niente logica personalizzata, solo get e set automatici
    public string Nome { get; set; }
    public string Email { get; set; }
    public string Telefono { get; set; }
}
```

```csharp
Contatto c = new Contatto();
c.Nome = "Anna Verdi";
c.Email = "anna.verdi@email.it";
c.Telefono = "333-1234567";

Console.WriteLine($"{c.Nome} - {c.Email} - {c.Telefono}");
// Anna Verdi - anna.verdi@email.it - 333-1234567
```

### Con Valori di Default

A partire da C# 6, e possibile assegnare un **valore di default** direttamente nella dichiarazione della auto-implemented property:

```csharp
class ImpostazioniGioco
{
    public string NomeGiocatore { get; set; } = "Giocatore 1";
    public int Volume { get; set; } = 80;
    public bool MusicaAttiva { get; set; } = true;
    public string Difficolta { get; set; } = "Normale";
    public string Lingua { get; set; } = "Italiano";

    public void StampaImpostazioni()
    {
        Console.WriteLine("=== IMPOSTAZIONI ===");
        Console.WriteLine($"Giocatore:  {NomeGiocatore}");
        Console.WriteLine($"Volume:     {Volume}%");
        Console.WriteLine($"Musica:     {(MusicaAttiva ? "On" : "Off")}");
        Console.WriteLine($"Difficolta: {Difficolta}");
        Console.WriteLine($"Lingua:     {Lingua}");
    }
}
```

```csharp
// Creazione con tutti i valori di default
ImpostazioniGioco impostazioni = new ImpostazioniGioco();
impostazioni.StampaImpostazioni();
// Giocatore: Giocatore 1 | Volume: 80% | Musica: On | Difficolta: Normale | Lingua: Italiano

// Modifica solo cio che serve
impostazioni.NomeGiocatore = "SuperMario99";
impostazioni.Difficolta = "Difficile";
impostazioni.StampaImpostazioni();
// Giocatore: SuperMario99 | Volume: 80% | Musica: On | Difficolta: Difficile | Lingua: Italiano
```

### Quando Usare Auto-Implemented vs Properties Complete

| Situazione | Tipo Consigliato | Esempio |
|-----------|-----------------|---------|
| Semplice contenitore di dati | Auto-implemented | `public string Nome { get; set; }` |
| Serve validazione | Property completa | `set { if (value > 0) prezzo = value; }` |
| Valore calcolato | Solo get | `get { return prezzo * quantita; }` |
| DTO / Modelli semplici | Auto-implemented | Classi che trasportano dati |

---

## 2.10 Properties in Sola Lettura e Init-Only

### Property in Sola Lettura (Read-Only)

Una property con **solo l'accessore `get`** e in sola lettura: il suo valore puo essere impostato solo nel costruttore o nel campo privato, ma **non puo essere modificato dall'esterno**.

```csharp
class CertificatoDigitale
{
    private string titolare;
    private DateTime dataEmissione;
    private DateTime dataScadenza;

    public CertificatoDigitale(string titolare, int durataMesi)
    {
        this.titolare = titolare;
        this.dataEmissione = DateTime.Now;
        this.dataScadenza = DateTime.Now.AddMonths(durataMesi);
    }

    // Properties in SOLA LETTURA: non hanno "set"
    public string Titolare
    {
        get { return titolare; }
    }

    public DateTime DataEmissione
    {
        get { return dataEmissione; }
    }

    public DateTime DataScadenza
    {
        get { return dataScadenza; }
    }

    // Property calcolata in sola lettura
    public bool IsValido
    {
        get { return DateTime.Now < dataScadenza; }
    }

    public void StampaInfo()
    {
        Console.WriteLine($"Certificato di: {Titolare}");
        Console.WriteLine($"Emesso il: {DataEmissione:dd/MM/yyyy}");
        Console.WriteLine($"Scade il: {DataScadenza:dd/MM/yyyy}");
        Console.WriteLine($"Valido: {(IsValido ? "Si" : "No")}");
    }
}
```

```csharp
CertificatoDigitale cert = new CertificatoDigitale("Mario Rossi", 12);
cert.StampaInfo();

// cert.Titolare = "Altro nome";  // ERRORE di compilazione! Property in sola lettura.
```

### Auto-Implemented Read-Only

Per le auto-implemented properties, la versione in sola lettura si scrive cosi:

```csharp
class CodiceFiscale
{
    // Auto-implemented read-only: impostabile solo nel costruttore
    public string Codice { get; }
    public string NomeCompleto { get; }

    public CodiceFiscale(string codice, string nomeCompleto)
    {
        Codice = codice;            // OK: siamo nel costruttore
        NomeCompleto = nomeCompleto; // OK: siamo nel costruttore
    }
}
```

```csharp
CodiceFiscale cf = new CodiceFiscale("RSSMRA85M01H501Z", "Mario Rossi");
Console.WriteLine(cf.Codice);  // RSSMRA85M01H501Z

// cf.Codice = "ALTRO";  // ERRORE di compilazione!
```

### Init-Only Properties (C# 9+)

Le **init-only properties** sono una novita introdotta in C# 9. Usano la parola chiave `init` al posto di `set`: il valore puo essere assegnato **solo durante l'inizializzazione** dell'oggetto (nel costruttore o con l'*object initializer*), ma non puo essere modificato successivamente.

```csharp
class Configurazione
{
    // Init-only: impostabili solo alla creazione dell'oggetto
    public string NomeApp { get; init; }
    public string Versione { get; init; }
    public int PortaServer { get; init; }
    public bool ModalitaDebug { get; init; }
}
```

```csharp
// Inizializzazione con object initializer
Configurazione config = new Configurazione
{
    NomeApp = "MiaApp",
    Versione = "2.1.0",
    PortaServer = 8080,
    ModalitaDebug = false
};

Console.WriteLine($"{config.NomeApp} v{config.Versione} - Porta: {config.PortaServer}");
// MiaApp v2.1.0 - Porta: 8080

// config.PortaServer = 9090;  // ERRORE di compilazione! Init-only dopo l'inizializzazione.
```

### Confronto tra i Tipi di Properties

| Tipo | Dichiarazione | Scrivibile nel Costruttore | Scrivibile Dopo |
|------|--------------|---------------------------|-----------------|
| Read-Write | `{ get; set; }` | Si | Si |
| Read-Only | `{ get; }` | Si | No |
| Init-Only | `{ get; init; }` | Si (anche con object initializer) | No |

---

## 2.11 Esempio Completo: la Classe Arma

Mettiamo insieme tutti i concetti di questo capitolo in un esempio completo che utilizza properties immutabili, properties calcolate e constructor chaining.

### Diagramma UML

```
+------------------------------------------+
|                  Arma                    |
+------------------------------------------+
| - nome: string          {init}           |
| - tipo: string          {init}           |
| - dannoBase: int        {init}           |
| - rarita: string        {init}           |
| - livelloPotenziamento: int              |
+------------------------------------------+
| + Arma(nome, tipo, dannoBase, rarita)    |
| + Arma(nome, tipo, dannoBase)            |
| + Arma(nome, tipo)                       |
| + DannoEffettivo: int   {get}            |
| + Potenzia(): bool                       |
| + StampaScheda(): void                   |
+------------------------------------------+
```

### Codice C# Completo

```csharp
class Arma
{
    // === PROPERTIES IMMUTABILI (init-only) ===
    // Una volta creata l'arma, queste caratteristiche non cambiano
    public string Nome { get; init; }
    public string Tipo { get; init; }
    public int DannoBase { get; init; }
    public string Rarita { get; init; }

    // === CAMPO PRIVATO per lo stato mutabile ===
    private int livelloPotenziamento;

    // === PROPERTY con logica personalizzata ===
    public int LivelloPotenziamento
    {
        get { return livelloPotenziamento; }
        // set privato: solo i metodi della classe possono modificarlo
        private set
        {
            if (value >= 0 && value <= 10)
                livelloPotenziamento = value;
        }
    }

    // === PROPERTY CALCOLATA (solo get) ===
    // Il danno effettivo tiene conto del potenziamento e della rarita
    public int DannoEffettivo
    {
        get
        {
            double moltiplicatoreRarita = Rarita switch
            {
                "Comune"    => 1.0,
                "Non Comune" => 1.2,
                "Raro"      => 1.5,
                "Epico"     => 1.8,
                "Leggendario" => 2.5,
                _ => 1.0
            };

            double danno = DannoBase * moltiplicatoreRarita;
            // Ogni livello di potenziamento aggiunge il 10% al danno
            danno += danno * (livelloPotenziamento * 0.10);

            return (int)Math.Round(danno);
        }
    }

    // === COSTRUTTORI con chaining ===

    // Costruttore PRINCIPALE
    public Arma(string nome, string tipo, int dannoBase, string rarita)
    {
        Nome = nome;
        Tipo = tipo;
        DannoBase = dannoBase > 0 ? dannoBase : 1;
        Rarita = rarita;
        livelloPotenziamento = 0;
    }

    // Costruttore PARZIALE: rarita di default "Comune"
    public Arma(string nome, string tipo, int dannoBase)
        : this(nome, tipo, dannoBase, "Comune")
    {
    }

    // Costruttore MINIMO: danno base e rarita di default
    public Arma(string nome, string tipo)
        : this(nome, tipo, 10, "Comune")
    {
    }

    // === METODI ===

    /// <summary>
    /// Potenzia l'arma di un livello (massimo 10).
    /// Restituisce true se il potenziamento e riuscito.
    /// </summary>
    public bool Potenzia()
    {
        if (livelloPotenziamento >= 10)
        {
            Console.WriteLine($"{Nome} e gia al potenziamento massimo!");
            return false;
        }

        livelloPotenziamento++;
        Console.WriteLine($"{Nome} potenziata al livello +{livelloPotenziamento}! " +
                          $"Danno effettivo: {DannoEffettivo}");
        return true;
    }

    /// <summary>
    /// Stampa la scheda completa dell'arma.
    /// </summary>
    public void StampaScheda()
    {
        Console.WriteLine("========================================");
        Console.WriteLine($"  {Nome} +{LivelloPotenziamento}");
        Console.WriteLine($"  Tipo:    {Tipo}");
        Console.WriteLine($"  Rarita:  {Rarita}");
        Console.WriteLine($"  Danno Base:      {DannoBase}");
        Console.WriteLine($"  Potenziamento:   +{LivelloPotenziamento}");
        Console.WriteLine($"  Danno Effettivo: {DannoEffettivo}");
        Console.WriteLine("========================================");
    }
}
```

### Utilizzo Completo

```csharp
// Creazione armi con costruttori diversi
Arma spada = new Arma("Excalibur", "Spada", 150, "Leggendario");
Arma arco = new Arma("Arco Lungo", "Arco", 80, "Raro");
Arma pugnale = new Arma("Pugnale Arrugginito", "Pugnale");

// Stampa delle schede
spada.StampaScheda();
// ========================================
//   Excalibur +0
//   Tipo:    Spada
//   Rarita:  Leggendario
//   Danno Base:      150
//   Potenziamento:   +0
//   Danno Effettivo: 375       (150 * 2.5 = 375)
// ========================================

arco.StampaScheda();
// ========================================
//   Arco Lungo +0
//   Tipo:    Arco
//   Rarita:  Raro
//   Danno Base:      80
//   Potenziamento:   +0
//   Danno Effettivo: 120       (80 * 1.5 = 120)
// ========================================

// Potenziamento dell'arco
arco.Potenzia();  // Arco Lungo potenziata al livello +1! Danno effettivo: 132
arco.Potenzia();  // Arco Lungo potenziata al livello +2! Danno effettivo: 144
arco.Potenzia();  // Arco Lungo potenziata al livello +3! Danno effettivo: 156

arco.StampaScheda();
// ========================================
//   Arco Lungo +3
//   Tipo:    Arco
//   Rarita:  Raro
//   Danno Base:      80
//   Potenziamento:   +3
//   Danno Effettivo: 156       (80 * 1.5 = 120; 120 + 120*0.30 = 156)
// ========================================

// Le properties init-only non possono essere modificate dopo la creazione
// spada.Nome = "Altra Spada";    // ERRORE di compilazione!
// spada.DannoBase = 999;         // ERRORE di compilazione!
// spada.Rarita = "Comune";       // ERRORE di compilazione!
```

### Riepilogo dei Concetti Utilizzati

Questo esempio mette in pratica tutti i concetti del Capitolo 2:

| Concetto | Dove lo vediamo |
|----------|-----------------|
| Costruttore parametrizzato | `Arma(string nome, string tipo, int dannoBase, string rarita)` |
| Constructor Chaining | `: this(nome, tipo, dannoBase, "Comune")` |
| Parola chiave `this` | `this.livelloPotenziamento` |
| Auto-implemented properties | `public string Nome { get; init; }` |
| Init-only properties | `{ get; init; }` per Nome, Tipo, DannoBase, Rarita |
| Property con validazione | `LivelloPotenziamento` con `private set` |
| Property calcolata | `DannoEffettivo` calcolato da DannoBase, rarita e potenziamento |
| Incapsulamento | Campo `livelloPotenziamento` privato, modificabile solo tramite `Potenzia()` |

---

> **Fine della Parte 1.** La Parte 2 contiene i Capitoli 3, 4 e 5: Metodi e Incapsulamento, Ereditarieta e Polimorfismo, e Associazioni tra Classi.
