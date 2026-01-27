# Guida alla Programmazione a Oggetti con C# e UML - Parte 3

# Ereditarietà, Polimorfismo e Associazioni tra Classi

---

## Capitolo 4: Ereditarietà e Polimorfismo

### 4.1 Ereditarietà

#### Cos'è l'Ereditarietà?

L'**ereditarietà** è uno dei pilastri fondamentali della programmazione a oggetti. Consiste nel creare una nuova classe (detta **classe derivata** o **sottoclasse**) basata su una classe già esistente (detta **classe base** o **superclasse**). La classe derivata **eredita** tutti gli attributi e i metodi della classe base, e può aggiungerne di nuovi o ridefinire quelli esistenti.

**Vantaggi dell'ereditarietà:**
- **Riuso del codice**: non serve riscrivere funzionalità già implementate nella classe base.
- **Organizzazione gerarchica**: le classi vengono organizzate in una struttura ad albero che rispecchia le relazioni del mondo reale.
- **Estensibilità**: è possibile aggiungere nuove funzionalità senza modificare il codice esistente.

#### Diagramma UML dell'Ereditarietà

In UML, l'ereditarietà si rappresenta con una **freccia con punta triangolare vuota** che va dalla classe derivata alla classe base.

```
        ┌──────────────────────┐
        │       Veicolo        │
        ├──────────────────────┤
        │ - marca: string      │
        ├──────────────────────┤
        │ + Avvia(): void      │
        └──────────┬───────────┘
                   △
          ┌────────┴────────┐
          │                 │
┌─────────┴──────────┐  ┌──┴──────────────────┐
│       Auto         │  │       Moto          │
├────────────────────┤  ├─────────────────────┤
│ - numPorte: int    │  │ - cilindrata: int   │
├────────────────────┤  ├─────────────────────┤
│ + Clacson(): void  │  │ + Impennata(): void │
└────────────────────┘  └─────────────────────┘
```

La freccia punta **sempre dalla classe derivata verso la classe base**: Auto e Moto ereditano da Veicolo.

#### Sintassi in C#

In C# l'ereditarietà si indica con il simbolo `:` (due punti) dopo il nome della classe derivata:

```csharp
public class ClasseDerivata : ClasseBase
{
    // nuovi attributi e metodi della classe derivata
}
```

#### Esempio Completo: Animale, Cane e Gatto

```csharp
// Classe base
public class Animale
{
    // protected: accessibile dalla classe base e da tutte le classi derivate
    protected string nome;
    protected int eta;

    public Animale(string nome, int eta)
    {
        this.nome = nome;
        this.eta = eta;
    }

    public void Mangia()
    {
        Console.WriteLine($"{nome} sta mangiando.");
    }

    public void Dormi()
    {
        Console.WriteLine($"{nome} sta dormendo.");
    }
}

// Classe derivata: Cane
public class Cane : Animale
{
    private string razza;

    // Il costruttore usa : base(...) per chiamare il costruttore della classe base
    public Cane(string nome, int eta, string razza) : base(nome, eta)
    {
        this.razza = razza;
    }

    public void Abbaia()
    {
        Console.WriteLine($"{nome} ({razza}) fa: BAU BAU!");
    }
}

// Classe derivata: Gatto
public class Gatto : Animale
{
    private bool haArtigli;

    public Gatto(string nome, int eta, bool haArtigli) : base(nome, eta)
    {
        this.haArtigli = haArtigli;
    }

    public void Miagola()
    {
        Console.WriteLine($"{nome} fa: MIAO!");
    }
}

// Utilizzo
Cane fido = new Cane("Fido", 3, "Labrador");
fido.Mangia();    // Ereditato da Animale: "Fido sta mangiando."
fido.Dormi();     // Ereditato da Animale: "Fido sta dormendo."
fido.Abbaia();    // Metodo proprio di Cane: "Fido (Labrador) fa: BAU BAU!"

Gatto micio = new Gatto("Micio", 5, true);
micio.Mangia();   // Ereditato da Animale: "Micio sta mangiando."
micio.Miagola();  // Metodo proprio di Gatto: "Micio fa: MIAO!"
```

#### La Parola Chiave `protected`

Il modificatore di accesso `protected` rende un membro accessibile dalla classe base e da **tutte le classi derivate**, ma **non dall'esterno**:

| Modificatore | Classe stessa | Classi derivate | Esterno |
|:---|:---:|:---:|:---:|
| `private` | Si | No | No |
| `protected` | Si | Si | No |
| `public` | Si | Si | Si |

```csharp
public class Animale
{
    protected string nome;  // Accessibile anche nelle classi derivate
    private int codice;     // Accessibile SOLO in Animale
}

public class Cane : Animale
{
    public void Presenta()
    {
        Console.WriteLine(nome);    // OK: nome e' protected
        // Console.WriteLine(codice); // ERRORE: codice e' private
    }
}
```

#### Le Parole Chiave `base`, `virtual` e `override`

##### `base` - Accedere ai Membri della Classe Base

La parola chiave `base` permette di accedere ai membri della classe base dalla classe derivata. Si usa in due contesti principali: nel costruttore e per chiamare metodi della classe base.

```csharp
public class Persona
{
    protected string nome;
    protected int eta;

    public Persona(string nome, int eta)
    {
        this.nome = nome;
        this.eta = eta;
    }

    public virtual void Presenta()
    {
        Console.WriteLine($"Mi chiamo {nome} e ho {eta} anni.");
    }
}

public class Studente : Persona
{
    private string scuola;

    // base(...) chiama il costruttore della classe Persona
    public Studente(string nome, int eta, string scuola) : base(nome, eta)
    {
        this.scuola = scuola;
    }

    public override void Presenta()
    {
        // base.Presenta() chiama il metodo della classe Persona
        base.Presenta();
        Console.WriteLine($"Frequento la scuola: {scuola}");
    }
}

// Utilizzo
Studente s = new Studente("Marco", 17, "ITIS Galilei");
s.Presenta();
// Output:
// Mi chiamo Marco e ho 17 anni.
// Frequento la scuola: ITIS Galilei
```

##### `virtual` + `override` - Ridefinire i Metodi

La parola chiave `virtual` nella classe base indica che un metodo **puo essere ridefinito** nelle classi derivate. La parola chiave `override` nella classe derivata effettua la **ridefinizione** del metodo.

```csharp
public class Forma
{
    public virtual double CalcolaArea()
    {
        return 0; // Implementazione di default
    }
}

public class Cerchio : Forma
{
    private double raggio;

    public Cerchio(double raggio)
    {
        this.raggio = raggio;
    }

    // override ridefinisce il metodo CalcolaArea della classe base
    public override double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }
}

// Utilizzo
Cerchio c = new Cerchio(5);
Console.WriteLine($"Area del cerchio: {c.CalcolaArea():F2}");
// Output: Area del cerchio: 78.54
```

##### Esempio Completo: Dipendente e Manager

```csharp
public class Dipendente
{
    protected string nome;
    protected double stipendioBase;

    public Dipendente(string nome, double stipendioBase)
    {
        this.nome = nome;
        this.stipendioBase = stipendioBase;
    }

    public virtual double CalcolaStipendio()
    {
        return stipendioBase;
    }

    public virtual void StampaInfo()
    {
        Console.WriteLine($"Dipendente: {nome}");
        Console.WriteLine($"Stipendio: {CalcolaStipendio():C}");
    }
}

public class Manager : Dipendente
{
    private double bonus;

    public Manager(string nome, double stipendioBase, double bonus)
        : base(nome, stipendioBase)
    {
        this.bonus = bonus;
    }

    public override double CalcolaStipendio()
    {
        // Lo stipendio del manager include il bonus
        return base.CalcolaStipendio() + bonus;
    }

    public override void StampaInfo()
    {
        Console.WriteLine($"Manager: {nome}");
        Console.WriteLine($"Stipendio base: {stipendioBase:C}");
        Console.WriteLine($"Bonus: {bonus:C}");
        Console.WriteLine($"Stipendio totale: {CalcolaStipendio():C}");
    }
}

// Utilizzo
Dipendente d = new Dipendente("Mario Rossi", 1500);
d.StampaInfo();
// Output:
// Dipendente: Mario Rossi
// Stipendio: 1.500,00 EUR

Manager m = new Manager("Laura Bianchi", 2500, 1000);
m.StampaInfo();
// Output:
// Manager: Laura Bianchi
// Stipendio base: 2.500,00 EUR
// Bonus: 1.000,00 EUR
// Stipendio totale: 3.500,00 EUR
```

#### Limitazioni: Ereditarietà Singola

C# **NON supporta l'ereditarietà multipla**: una classe puo ereditare da **una sola classe base**. Tuttavia, una classe puo implementare **piu interfacce** contemporaneamente:

```csharp
// ERRORE: ereditarietà multipla NON consentita in C#
// public class Anfibio : Animale, Veicolo { }  // NON VALIDO!

// CORRETTO: una classe base + multiple interfacce
public class Anfibio : Animale, IAcquatico, ITerrestre
{
    // Implementazione...
}
```

Questa scelta di design evita i problemi di ambiguità che si presentano con l'ereditarietà multipla (il cosiddetto "problema del diamante").

#### Catena di Ereditarietà (Ereditarietà Multilivello)

E' possibile creare catene di ereditarietà su piu livelli, dove ogni classe eredita da quella precedente:

```
┌──────────────┐
│   Veicolo    │     Livello 0 (classe base)
└──────┬───────┘
       △
┌──────┴───────────┐
│ VeicoloAMotore   │ Livello 1
└──────┬───────────┘
       △
┌──────┴───────┐
│  Automobile  │     Livello 2
└──────────────┘
```

```csharp
public class Veicolo
{
    protected string marca;

    public Veicolo(string marca)
    {
        this.marca = marca;
    }

    public void Avvia()
    {
        Console.WriteLine($"{marca}: Veicolo avviato.");
    }
}

public class VeicoloAMotore : Veicolo
{
    protected int cavalli;

    public VeicoloAMotore(string marca, int cavalli) : base(marca)
    {
        this.cavalli = cavalli;
    }

    public void Accelera()
    {
        Console.WriteLine($"{marca}: Accelerazione con {cavalli} CV!");
    }
}

public class Automobile : VeicoloAMotore
{
    private int numPorte;

    public Automobile(string marca, int cavalli, int numPorte)
        : base(marca, cavalli)
    {
        this.numPorte = numPorte;
    }

    public void ApriPortaBagagli()
    {
        Console.WriteLine($"{marca}: Porta bagagli aperta.");
    }
}

// Utilizzo - Automobile eredita TUTTI i metodi della catena
Automobile auto = new Automobile("Fiat", 95, 5);
auto.Avvia();              // Da Veicolo
auto.Accelera();           // Da VeicoloAMotore
auto.ApriPortaBagagli();   // Da Automobile
```

#### Esempio Pratico: Sistema RPG

Vediamo un esempio completo che mette insieme tutti i concetti dell'ereditarietà: un sistema di personaggi per un gioco di ruolo (RPG).

```csharp
// Classe base: Personaggio
public class Personaggio
{
    protected string nome;
    protected int puntiVita;
    protected int livello;
    protected int forza;

    public Personaggio(string nome, int puntiVita, int livello, int forza)
    {
        this.nome = nome;
        this.puntiVita = puntiVita;
        this.livello = livello;
        this.forza = forza;
    }

    public virtual int Attacca()
    {
        int danno = forza * livello;
        Console.WriteLine($"{nome} attacca e infligge {danno} danni!");
        return danno;
    }

    public void RiceviDanno(int danno)
    {
        puntiVita -= danno;
        if (puntiVita < 0) puntiVita = 0;
        Console.WriteLine($"{nome} riceve {danno} danni! PV rimanenti: {puntiVita}");
    }

    public virtual void StampaInfo()
    {
        Console.WriteLine($"=== {nome} ===");
        Console.WriteLine($"  Livello: {livello}");
        Console.WriteLine($"  Punti Vita: {puntiVita}");
        Console.WriteLine($"  Forza: {forza}");
    }
}

// Classe derivata: Guerriero
public class Guerriero : Personaggio
{
    private int armatura;
    private string tipoArma;

    public Guerriero(string nome, int puntiVita, int livello, int forza,
                     int armatura, string tipoArma)
        : base(nome, puntiVita, livello, forza)
    {
        this.armatura = armatura;
        this.tipoArma = tipoArma;
    }

    // Override: il guerriero aggiunge un bonus basato sull'arma
    public override int Attacca()
    {
        int bonusArma = tipoArma == "Spadone" ? 15 : 8;
        int danno = (forza * livello) + bonusArma;
        Console.WriteLine($"{nome} colpisce con {tipoArma} e infligge {danno} danni!");
        return danno;
    }

    public void Difendi()
    {
        Console.WriteLine($"{nome} alza lo scudo! Armatura: {armatura}");
    }

    public override void StampaInfo()
    {
        base.StampaInfo();
        Console.WriteLine($"  Classe: Guerriero");
        Console.WriteLine($"  Armatura: {armatura}");
        Console.WriteLine($"  Arma: {tipoArma}");
    }
}

// Classe derivata: Mago
public class Mago : Personaggio
{
    private int mana;
    private string[] incantesimi;

    public Mago(string nome, int puntiVita, int livello, int forza,
                int mana, string[] incantesimi)
        : base(nome, puntiVita, livello, forza)
    {
        this.mana = mana;
        this.incantesimi = incantesimi;
    }

    // Override: il mago usa la magia per attaccare
    public override int Attacca()
    {
        if (mana >= 10)
        {
            mana -= 10;
            int danno = (forza + mana / 2) * livello;
            Console.WriteLine($"{nome} lancia un incantesimo e infligge {danno} danni!");
            return danno;
        }
        else
        {
            Console.WriteLine($"{nome} non ha abbastanza mana! Attacco base.");
            return base.Attacca();
        }
    }

    public void LanciaIncantesimo(string incantesimo)
    {
        if (mana >= 20)
        {
            mana -= 20;
            Console.WriteLine($"{nome} lancia {incantesimo}! Mana rimanente: {mana}");
        }
        else
        {
            Console.WriteLine($"{nome}: mana insufficiente per {incantesimo}!");
        }
    }

    public override void StampaInfo()
    {
        base.StampaInfo();
        Console.WriteLine($"  Classe: Mago");
        Console.WriteLine($"  Mana: {mana}");
        Console.WriteLine($"  Incantesimi: {string.Join(", ", incantesimi)}");
    }
}

// === Utilizzo del sistema RPG ===
Guerriero g = new Guerriero("Arthas", 150, 5, 20, 30, "Spadone");
Mago m = new Mago("Gandalf", 80, 7, 10, 100,
    new string[] { "Palla di Fuoco", "Scudo Magico", "Fulmine" });

g.StampaInfo();
// Output:
// === Arthas ===
//   Livello: 5
//   Punti Vita: 150
//   Forza: 20
//   Classe: Guerriero
//   Armatura: 30
//   Arma: Spadone

m.StampaInfo();
// Output:
// === Gandalf ===
//   Livello: 7
//   Punti Vita: 80
//   Forza: 10
//   Classe: Mago
//   Mana: 100
//   Incantesimi: Palla di Fuoco, Scudo Magico, Fulmine

// Combattimento!
int dannoGuerriero = g.Attacca();  // "Arthas colpisce con Spadone e infligge 115 danni!"
m.RiceviDanno(dannoGuerriero);     // "Gandalf riceve 115 danni! PV rimanenti: 0"

int dannoMago = m.Attacca();       // "Gandalf lancia un incantesimo e infligge 315 danni!"
g.RiceviDanno(dannoMago);          // "Arthas riceve 315 danni! PV rimanenti: 0"
```

---

### 4.2 Polimorfismo

#### Cos'è il Polimorfismo?

Il **polimorfismo** (dal greco: "molte forme") e' la capacita degli oggetti di classi diverse di **rispondere allo stesso messaggio** (ovvero alla stessa chiamata di metodo) in **modi differenti**. E' uno dei concetti piu potenti della programmazione a oggetti.

#### Analogia: Il Telecomando Universale

Immagina un telecomando universale con un pulsante "Play":
- Premi "Play" sulla **TV**: inizia a trasmettere un programma
- Premi "Play" sul **lettore DVD**: avvia la riproduzione di un film
- Premi "Play" sullo **stereo**: riproduce una canzone

**Stesso comando, risultati diversi!** Questo e' il polimorfismo in azione.

#### Esempio Base

```csharp
public class Forma
{
    public virtual void Disegna()
    {
        Console.WriteLine("Disegno una forma generica.");
    }
}

public class Cerchio : Forma
{
    public override void Disegna()
    {
        Console.WriteLine("Disegno un cerchio: O");
    }
}

public class Quadrato : Forma
{
    public override void Disegna()
    {
        Console.WriteLine("Disegno un quadrato: []");
    }
}

// Polimorfismo in azione!
Forma f1 = new Cerchio();    // Variabile di tipo Forma, oggetto di tipo Cerchio
Forma f2 = new Quadrato();   // Variabile di tipo Forma, oggetto di tipo Quadrato

f1.Disegna();  // Output: "Disegno un cerchio: O"    (chiama la versione di Cerchio!)
f2.Disegna();  // Output: "Disegno un quadrato: []"  (chiama la versione di Quadrato!)
```

Nonostante `f1` e `f2` siano dichiarate come `Forma`, a runtime viene chiamato il metodo corretto della classe effettiva dell'oggetto.

#### Due Tipi di Polimorfismo

##### 1. Polimorfismo a Tempo di Compilazione (Overloading)

L'**overloading** (sovraccarico) consiste nel definire piu metodi con lo **stesso nome** ma con **firme diverse** (numero o tipo di parametri diversi). Il compilatore sceglie quale metodo chiamare al momento della compilazione.

```csharp
public class Calcolatrice
{
    // Stessi nomi, firme diverse
    public int Somma(int a, int b)
    {
        return a + b;
    }

    public double Somma(double a, double b)
    {
        return a + b;
    }

    public int Somma(int a, int b, int c)
    {
        return a + b + c;
    }
}

// Il compilatore sceglie il metodo corretto in base ai parametri
Calcolatrice calc = new Calcolatrice();
Console.WriteLine(calc.Somma(3, 5));          // Chiama Somma(int, int) -> 8
Console.WriteLine(calc.Somma(3.5, 2.1));      // Chiama Somma(double, double) -> 5.6
Console.WriteLine(calc.Somma(1, 2, 3));       // Chiama Somma(int, int, int) -> 6
```

La scelta del metodo e' **risolta a tempo di compilazione** (compile-time).

##### 2. Polimorfismo a Tempo di Esecuzione (Overriding)

L'**overriding** (ridefinizione) consiste nel ridefinire un metodo della classe base nella classe derivata, mantenendo la **stessa firma**. Il metodo da chiamare viene deciso a **tempo di esecuzione** (runtime), in base al tipo effettivo dell'oggetto.

```csharp
public class Animale
{
    public virtual void FaiVerso()
    {
        Console.WriteLine("(verso generico)");
    }
}

public class Cane : Animale
{
    public override void FaiVerso()
    {
        Console.WriteLine("BAU! BAU!");
    }
}

public class Gatto : Animale
{
    public override void FaiVerso()
    {
        Console.WriteLine("MIAO!");
    }
}

// Il tipo della variabile e' Animale, ma l'oggetto effettivo e' un Cane
Animale a1 = new Cane();
Animale a2 = new Gatto();

a1.FaiVerso();  // Output: "BAU! BAU!"  (deciso a RUNTIME!)
a2.FaiVerso();  // Output: "MIAO!"      (deciso a RUNTIME!)
```

#### Differenza Chiave

| Caratteristica | Overloading | Overriding |
|:---|:---|:---|
| Nome metodo | Stesso | Stesso |
| Firma | **Diversa** | **Stessa** |
| Quando si decide | Compilazione | Esecuzione (runtime) |
| Parole chiave | Nessuna | `virtual` / `override` |
| Classi coinvolte | Stessa classe | Classe base e derivata |

#### Polimorfismo con le Collezioni

Ecco dove il polimorfismo mostra la sua **vera potenza**: gestire collezioni di oggetti diversi con un unico ciclo!

```csharp
public class Animale
{
    protected string nome;

    public Animale(string nome)
    {
        this.nome = nome;
    }

    public virtual void FaiVerso()
    {
        Console.WriteLine($"{nome}: ...");
    }

    public virtual void Muoviti()
    {
        Console.WriteLine($"{nome} si muove.");
    }
}

public class Leone : Animale
{
    public Leone(string nome) : base(nome) { }

    public override void FaiVerso()
    {
        Console.WriteLine($"{nome}: ROAR!!!");
    }

    public override void Muoviti()
    {
        Console.WriteLine($"{nome} corre nella savana.");
    }
}

public class Elefante : Animale
{
    public Elefante(string nome) : base(nome) { }

    public override void FaiVerso()
    {
        Console.WriteLine($"{nome}: BARRR!!!");
    }

    public override void Muoviti()
    {
        Console.WriteLine($"{nome} cammina lentamente.");
    }
}

public class Serpente : Animale
{
    public Serpente(string nome) : base(nome) { }

    public override void FaiVerso()
    {
        Console.WriteLine($"{nome}: SSSSS!!!");
    }

    public override void Muoviti()
    {
        Console.WriteLine($"{nome} striscia silenziosamente.");
    }
}

// === Lo Zoo: polimorfismo con array ===
Animale[] zoo = new Animale[]
{
    new Leone("Simba"),
    new Elefante("Dumbo"),
    new Serpente("Kaa"),
    new Leone("Mufasa"),
    new Elefante("Ellie")
};

// UN SOLO ciclo gestisce TUTTI i tipi di animale!
Console.WriteLine("=== Benvenuti allo Zoo! ===");
foreach (Animale animale in zoo)
{
    animale.FaiVerso();   // Chiama la versione corretta per ogni animale
    animale.Muoviti();    // Chiama la versione corretta per ogni animale
    Console.WriteLine("---");
}
// Output:
// === Benvenuti allo Zoo! ===
// Simba: ROAR!!!
// Simba corre nella savana.
// ---
// Dumbo: BARRR!!!
// Dumbo cammina lentamente.
// ---
// Kaa: SSSSS!!!
// Kaa striscia silenziosamente.
// ---
// Mufasa: ROAR!!!
// Mufasa corre nella savana.
// ---
// Ellie: BARRR!!!
// Ellie cammina lentamente.
// ---
```

Questa e' la **VERA potenza del polimorfismo**: un singolo ciclo `foreach` gestisce automaticamente oggetti di tipo diverso, chiamando sempre il metodo corretto. Aggiungere un nuovo tipo di animale non richiede di modificare il ciclo!

#### Type Casting: Upcasting e Downcasting

##### Upcasting (Derivata -> Base)

L'**upcasting** consiste nel trattare un oggetto di una classe derivata come se fosse della classe base. E' **implicito** e **sempre sicuro**.

```csharp
// Upcasting: implicito e sicuro
Animale a = new Cane("Fido");  // Cane -> Animale (upcasting)
a.FaiVerso();                  // Funziona: chiama la versione di Cane
// a.Abbaia();                 // ERRORE: Animale non ha il metodo Abbaia()
```

##### Downcasting (Base -> Derivata)

Il **downcasting** consiste nel trattare un oggetto della classe base come se fosse della classe derivata. E' **esplicito** e puo essere **pericoloso** se il tipo non corrisponde.

##### L'operatore `is`

L'operatore `is` verifica se un oggetto e' di un determinato tipo. Supporta anche il **pattern matching**, che permette di verificare il tipo e creare una variabile in un'unica istruzione:

```csharp
Animale a = new Cane("Fido");

// Verifica semplice con is
if (a is Cane)
{
    Console.WriteLine("a e' un Cane!");
}

// Pattern matching con is (piu moderno e comodo)
if (a is Cane c)
{
    // c e' gia' di tipo Cane, pronta all'uso!
    c.Abbaia();  // Funziona!
}
```

##### L'operatore `as`

L'operatore `as` tenta il casting e restituisce `null` se il tipo non corrisponde (invece di generare un'eccezione):

```csharp
Animale a = new Cane("Fido");

Cane c = a as Cane;
if (c != null)
{
    c.Abbaia();  // Funziona!
}

Gatto g = a as Gatto;  // Restituisce null (a non e' un Gatto)
// g.Miagola();         // ERRORE: g e' null!
```

##### Esempio Pratico: Negozio con Pattern Matching

```csharp
public class Prodotto
{
    public string Nome { get; set; }
    public double Prezzo { get; set; }

    public Prodotto(string nome, double prezzo)
    {
        Nome = nome;
        Prezzo = prezzo;
    }
}

public class Elettronica : Prodotto
{
    public int GaranziaMesi { get; set; }

    public Elettronica(string nome, double prezzo, int garanziaMesi)
        : base(nome, prezzo)
    {
        GaranziaMesi = garanziaMesi;
    }
}

public class Alimentare : Prodotto
{
    public DateTime Scadenza { get; set; }

    public Alimentare(string nome, double prezzo, DateTime scadenza)
        : base(nome, prezzo)
    {
        Scadenza = scadenza;
    }
}

// Gestione del negozio con polimorfismo e pattern matching
List<Prodotto> inventario = new List<Prodotto>
{
    new Elettronica("Smartphone", 699.99, 24),
    new Alimentare("Pasta", 1.29, new DateTime(2026, 12, 31)),
    new Elettronica("Cuffie Bluetooth", 49.99, 12),
    new Alimentare("Latte", 1.50, new DateTime(2026, 2, 15))
};

Console.WriteLine("=== Inventario Negozio ===");
foreach (Prodotto p in inventario)
{
    Console.WriteLine($"Prodotto: {p.Nome} - Prezzo: {p.Prezzo:C}");

    // Pattern matching: comportamento diverso per ogni tipo
    if (p is Elettronica e)
    {
        Console.WriteLine($"  Garanzia: {e.GaranziaMesi} mesi");
    }
    else if (p is Alimentare a)
    {
        Console.WriteLine($"  Scadenza: {a.Scadenza:dd/MM/yyyy}");
        if (a.Scadenza < DateTime.Now)
            Console.WriteLine("  ATTENZIONE: Prodotto scaduto!");
    }
    Console.WriteLine();
}
```

---

### 4.3 Classi Astratte

#### Cos'è una Classe Astratta?

Una **classe astratta** e' una classe incompleta che **non puo essere istanziata** direttamente. Serve come **modello** (template) per le classi derivate, definendo una struttura comune che le sottoclassi devono completare.

#### Caratteristiche Principali

- Si dichiara con la parola chiave `abstract`.
- **Non si puo usare `new`** per creare un'istanza.
- Puo contenere **metodi astratti** (senza implementazione): le classi derivate **DEVONO** implementarli.
- Puo contenere **metodi concreti** (con implementazione): le classi derivate li ereditano cosi' come sono.

#### Esempio: Forma Astratta

```csharp
public abstract class Forma
{
    // Proprieta concreta (con implementazione)
    public string Colore { get; set; }

    // Metodo astratto: NESSUNA implementazione!
    // Le classi derivate DEVONO fornire l'implementazione
    public abstract double CalcolaArea();

    // Metodo concreto: ha un'implementazione completa
    // Puo usare metodi astratti (saranno implementati dalle derivate)
    public void Descrivi()
    {
        Console.WriteLine($"Sono una forma di colore {Colore}.");
        Console.WriteLine($"La mia area e': {CalcolaArea():F2}");
    }
}

public class Rettangolo : Forma
{
    private double larghezza;
    private double altezza;

    public Rettangolo(double larghezza, double altezza, string colore)
    {
        this.larghezza = larghezza;
        this.altezza = altezza;
        Colore = colore;
    }

    // OBBLIGATORIO: implementare il metodo astratto
    public override double CalcolaArea()
    {
        return larghezza * altezza;
    }
}

public class Triangolo : Forma
{
    private double base_;
    private double altezza;

    public Triangolo(double base_, double altezza, string colore)
    {
        this.base_ = base_;
        this.altezza = altezza;
        Colore = colore;
    }

    public override double CalcolaArea()
    {
        return (base_ * altezza) / 2;
    }
}

// Utilizzo
// Forma f = new Forma();  // ERRORE! Non si puo istanziare una classe astratta!

Rettangolo r = new Rettangolo(5, 3, "Rosso");  // OK!
r.Descrivi();
// Output:
// Sono una forma di colore Rosso.
// La mia area e': 15.00

Triangolo t = new Triangolo(6, 4, "Blu");  // OK!
t.Descrivi();
// Output:
// Sono una forma di colore Blu.
// La mia area e': 12.00
```

#### Quando Usare una Classe Astratta?

Usa una classe astratta quando hai dei **comportamenti comuni** da condividere tra piu classi, ma anche dei metodi che **DEVONO essere implementati in modo diverso** da ciascuna classe derivata.

Ad esempio, tutte le forme hanno un colore e possono descriversi (comportamento comune), ma ciascuna calcola l'area in modo diverso (comportamento specifico).

---

### 4.4 Interfacce

#### Cos'è un'Interfaccia?

Un'**interfaccia** e' un **contratto** che definisce **COSA** una classe deve fare, senza specificare **COME**. Contiene soltanto le **firme** di metodi e proprieta, senza alcuna implementazione.

#### Vantaggi delle Interfacce

- **Implementazione multipla**: una classe puo implementare piu interfacce (a differenza dell'ereditarietà).
- **Disaccoppiamento**: il codice dipende dal contratto (interfaccia), non dall'implementazione concreta.
- **Polimorfismo**: oggetti di classi diverse possono essere trattati allo stesso modo tramite l'interfaccia.
- **Contratto chiaro**: l'interfaccia definisce esattamente cosa una classe deve offrire.

#### Sintassi

```csharp
// Convenzione: il nome inizia con "I" maiuscola
public interface INomeInterfaccia
{
    // Solo firme di metodi (nessuna implementazione)
    void Metodo();
    int AltrometMetodo(string parametro);
}
```

#### Esempio: Sistema di Pagamento

```csharp
// Interfaccia: definisce il contratto per un metodo di pagamento
public interface IMetodoPagamento
{
    bool Paga(double importo);
    string GetNome();
    bool VerificaFondi(double importo);
}

// Implementazione 1: Carta di Credito
public class CartaCredito : IMetodoPagamento
{
    private string numeroCarta;
    private double limite;
    private double speso;

    public CartaCredito(string numeroCarta, double limite)
    {
        this.numeroCarta = numeroCarta;
        this.limite = limite;
        this.speso = 0;
    }

    public bool Paga(double importo)
    {
        if (VerificaFondi(importo))
        {
            speso += importo;
            Console.WriteLine($"Pagamento di {importo:C} con Carta di Credito {numeroCarta}");
            return true;
        }
        Console.WriteLine("Limite carta superato!");
        return false;
    }

    public string GetNome()
    {
        return $"Carta di Credito ****{numeroCarta[^4..]}";
    }

    public bool VerificaFondi(double importo)
    {
        return (speso + importo) <= limite;
    }
}

// Implementazione 2: PayPal
public class PayPal : IMetodoPagamento
{
    private string email;
    private double saldo;

    public PayPal(string email, double saldo)
    {
        this.email = email;
        this.saldo = saldo;
    }

    public bool Paga(double importo)
    {
        if (VerificaFondi(importo))
        {
            saldo -= importo;
            Console.WriteLine($"Pagamento di {importo:C} con PayPal ({email})");
            return true;
        }
        Console.WriteLine("Saldo PayPal insufficiente!");
        return false;
    }

    public string GetNome()
    {
        return $"PayPal ({email})";
    }

    public bool VerificaFondi(double importo)
    {
        return saldo >= importo;
    }
}

// Funzione che lavora con QUALSIASI metodo di pagamento!
public static void ProcessaOrdine(IMetodoPagamento metodo, double totale)
{
    Console.WriteLine($"Elaborazione ordine con {metodo.GetNome()}...");

    if (metodo.VerificaFondi(totale))
    {
        metodo.Paga(totale);
        Console.WriteLine("Ordine completato con successo!");
    }
    else
    {
        Console.WriteLine("Fondi insufficienti. Ordine annullato.");
    }
}

// Utilizzo: stessa funzione, metodi di pagamento diversi!
IMetodoPagamento carta = new CartaCredito("1234567890123456", 5000);
IMetodoPagamento paypal = new PayPal("mario@email.it", 250);

ProcessaOrdine(carta, 99.99);
// Output:
// Elaborazione ordine con Carta di Credito ****3456...
// Pagamento di 99,99 EUR con Carta di Credito 1234567890123456
// Ordine completato con successo!

ProcessaOrdine(paypal, 49.99);
// Output:
// Elaborazione ordine con PayPal (mario@email.it)...
// Pagamento di 49,99 EUR con PayPal (mario@email.it)
// Ordine completato con successo!
```

#### Tabella Comparativa: Classe Astratta vs Interfaccia

| Caratteristica | Classe Astratta | Interfaccia |
|:---|:---|:---|
| Implementazione metodi | Puo avere metodi implementati | Solo firme (nessuna implementazione) |
| Ereditarietà | Singola (una sola classe base) | Multipla (piu interfacce) |
| Costruttori | Puo avere costruttori | Non puo avere costruttori |
| Campi (attributi) | Puo avere campi | Non puo avere campi |
| Quando usare | Comportamento comune + metodi da specializzare | Contratto che classi diverse devono rispettare |

---

### 4.5 Diagrammi UML di Sequenza

#### Cos'è un Diagramma di Sequenza?

I **diagrammi di sequenza** UML mostrano come gli oggetti interagiscono tra loro nel tempo, visualizzando lo **scambio di messaggi** (chiamate di metodo) in ordine cronologico. Sono fondamentali per comprendere il flusso di esecuzione di un processo.

#### Elementi Principali

| Elemento | Rappresentazione | Descrizione |
|:---|:---|:---|
| **Oggetti** | Rettangoli in alto con `:NomeClasse` | Le istanze che partecipano all'interazione |
| **Linee di vita** | Linee tratteggiate verticali | Mostrano l'esistenza dell'oggetto nel tempo |
| **Messaggi** | Frecce orizzontali | Rappresentano le chiamate di metodo |
| **Barre di attivazione** | Rettangoli stretti sulle linee di vita | Indicano quando un oggetto e' attivo |

#### Esempio: Processo di Login

```
 :Utente          :LoginForm       :AuthService      :Database
    |                  |                 |                 |
    |  inserisciCredenziali(user, pwd)   |                 |
    |----------------->|                 |                 |
    |                  |  valida(user, pwd)                |
    |                  |---------------->|                 |
    |                  |                 | trovaUtente(user)|
    |                  |                 |---------------->|
    |                  |                 |                 |
    |                  |                 |  datiUtente     |
    |                  |                 |<----------------|
    |                  |                 |                 |
    |                  |  risultatoLogin |                 |
    |                  |<----------------|                 |
    |                  |                 |                 |
    |  mostraRisultato |                 |                 |
    |<-----------------|                 |                 |
    |                  |                 |                 |
```

**Lettura del diagramma:**
1. L'**Utente** inserisce le credenziali nel **LoginForm**.
2. Il **LoginForm** chiede all'**AuthService** di validare le credenziali.
3. L'**AuthService** cerca l'utente nel **Database**.
4. Il **Database** restituisce i dati dell'utente.
5. L'**AuthService** comunica il risultato al **LoginForm**.
6. Il **LoginForm** mostra il risultato all'**Utente**.

Il codice C# corrispondente sarebbe:

```csharp
public class LoginForm
{
    private AuthService authService = new AuthService();

    public bool InserisciCredenziali(string user, string password)
    {
        bool risultato = authService.Valida(user, password);
        MostraRisultato(risultato);
        return risultato;
    }

    private void MostraRisultato(bool successo)
    {
        if (successo)
            Console.WriteLine("Login effettuato con successo!");
        else
            Console.WriteLine("Credenziali errate. Riprova.");
    }
}

public class AuthService
{
    private Database database = new Database();

    public bool Valida(string user, string password)
    {
        Utente utente = database.TrovaUtente(user);
        if (utente != null && utente.Password == password)
            return true;
        return false;
    }
}

public class Database
{
    private List<Utente> utenti = new List<Utente>();

    public Utente TrovaUtente(string username)
    {
        return utenti.Find(u => u.Username == username);
    }
}
```

---

## Capitolo 5: Associazioni tra Classi

### 5.1 Cos'è un'Associazione?

Un'**associazione** rappresenta una **relazione tra classi**. Quando due classi sono associate, gli oggetti di una classe conoscono e possono interagire con gli oggetti dell'altra. Le associazioni modellano i legami che esistono tra gli elementi del mondo reale.

#### Tre Tipi di Associazione

| Tipo | Simbolo UML | Descrizione | Esempio |
|:---|:---:|:---|:---|
| **Associazione semplice** | --- (linea) | Relazione generica tra classi | Persona conosce Persona |
| **Aggregazione** | ---◇ | Relazione debole "ha-un" | Squadra ha Giocatori |
| **Composizione** | ---◆ | Relazione forte "parte-di" | Casa ha Stanze |

#### Cardinalità (Molteplicità)

La **cardinalità** indica quanti oggetti di una classe possono essere associati a quanti oggetti dell'altra.

| Cardinalità | Notazione | Esempio |
|:---|:---:|:---|
| **1 a 1** | 1 --- 1 | Persona ↔ Passaporto |
| **1 a N** | 1 --- * | Squadra ↔ Giocatori, Ordine ↔ RigheOrdine |
| **N a 1** | * --- 1 | Dipendenti ↔ Dipartimento |
| **N a M** | * --- * | Studenti ↔ Corsi, Attori ↔ Film |

#### Notazione UML

```
Associazione semplice:    ClasseA ──────────── ClasseB

Aggregazione (debole):    ClasseA ◇──────────── ClasseB
                          (contenitore)          (contenuto)

Composizione (forte):     ClasseA ◆──────────── ClasseB
                          (contenitore)          (contenuto)
```

Il **diamante vuoto** (◇) indica l'aggregazione, il **diamante pieno** (◆) indica la composizione. Il diamante si posiziona sempre dal lato della classe che "contiene".

---

### 5.2 Aggregazione

#### Cos'è l'Aggregazione?

L'**aggregazione** e' una relazione di tipo **"ha-un"** (has-a) in cui gli oggetti contenuti hanno una **vita indipendente** dal contenitore. Se il contenitore viene distrutto, gli oggetti contenuti **continuano ad esistere**.

In UML si rappresenta con un **diamante vuoto** (◇) dal lato della classe contenitore.

```
 ┌──────────────┐         ┌──────────────┐
 │   Squadra    │◇───────>│  Giocatore   │
 │              │  1    * │              │
 └──────────────┘         └──────────────┘
```

#### Esempio: Squadra e Giocatore

```csharp
public class Giocatore
{
    public string Nome { get; set; }
    public int Numero { get; set; }
    public string Ruolo { get; set; }

    public Giocatore(string nome, int numero, string ruolo)
    {
        Nome = nome;
        Numero = numero;
        Ruolo = ruolo;
    }

    public void StampaInfo()
    {
        Console.WriteLine($"  #{Numero} {Nome} ({Ruolo})");
    }
}

public class Squadra
{
    public string Nome { get; set; }
    private List<Giocatore> giocatori;

    public Squadra(string nome)
    {
        Nome = nome;
        giocatori = new List<Giocatore>();
    }

    public void AggiungiGiocatore(Giocatore g)
    {
        giocatori.Add(g);
        Console.WriteLine($"{g.Nome} aggiunto alla squadra {Nome}");
    }

    public void StampaRosa()
    {
        Console.WriteLine($"\n=== Rosa {Nome} ===");
        foreach (Giocatore g in giocatori)
        {
            g.StampaInfo();
        }
        Console.WriteLine($"Totale giocatori: {giocatori.Count}");
    }
}

// === Dimostrazione: vita indipendente ===
// I giocatori vengono creati FUORI dalla squadra
Giocatore g1 = new Giocatore("Paolo Rossi", 10, "Attaccante");
Giocatore g2 = new Giocatore("Marco Bianchi", 1, "Portiere");
Giocatore g3 = new Giocatore("Luca Verdi", 5, "Difensore");

Squadra squadra = new Squadra("FC Example");
squadra.AggiungiGiocatore(g1);
squadra.AggiungiGiocatore(g2);
squadra.AggiungiGiocatore(g3);
squadra.StampaRosa();

// Se la squadra viene "distrutta"...
squadra = null;

// ...i giocatori ESISTONO ancora! (vita indipendente)
g1.StampaInfo();  // Funziona: "#10 Paolo Rossi (Attaccante)"
g2.StampaInfo();  // Funziona: "#1 Marco Bianchi (Portiere)"
```

**Punto chiave:** i giocatori sono creati **esternamente** alla squadra e passati come riferimento. Se la squadra viene eliminata, i giocatori continuano ad esistere.

#### Altri Esempi di Aggregazione

| Contenitore | Contenuto | Spiegazione |
|:---|:---|:---|
| Biblioteca ◇ | Libri | I libri esistono anche senza la biblioteca |
| Aula ◇ | Studenti | Gli studenti esistono anche senza l'aula |
| Playlist ◇ | Canzoni | Le canzoni esistono anche senza la playlist |

---

### 5.3 Composizione

#### Cos'è la Composizione?

La **composizione** e' una forma **forte** di aggregazione in cui gli oggetti contenuti **NON possono esistere** senza il contenitore. Se il contenitore viene distrutto, anche le parti vengono **distrutte**.

In UML si rappresenta con un **diamante pieno** (◆) dal lato della classe contenitore.

```
 ┌──────────────┐         ┌──────────────┐
 │  Automobile  │◆───────>│    Motore    │
 │              │  1    1 │              │
 └──────────────┘         └──────────────┘
```

#### Esempio: Automobile e Motore

```csharp
public class Motore
{
    public int Cilindrata { get; set; }
    public int CavalliVapore { get; set; }
    private bool acceso;

    public Motore(int cilindrata, int cavalliVapore)
    {
        Cilindrata = cilindrata;
        CavalliVapore = cavalliVapore;
        acceso = false;
    }

    public void Avvia()
    {
        acceso = true;
        Console.WriteLine($"Motore {Cilindrata}cc ({CavalliVapore}CV) avviato!");
    }

    public void Spegni()
    {
        acceso = false;
        Console.WriteLine("Motore spento.");
    }

    public void StampaInfo()
    {
        Console.WriteLine($"  Motore: {Cilindrata}cc, {CavalliVapore}CV" +
                          $" - {(acceso ? "Acceso" : "Spento")}");
    }
}

public class Automobile
{
    public string Marca { get; set; }
    public string Modello { get; set; }
    private Motore motore;  // Composizione: il motore e' PARTE dell'auto

    public Automobile(string marca, string modello, int cilindrata)
    {
        Marca = marca;
        Modello = modello;
        // Il motore viene creato DENTRO il costruttore dell'auto!
        motore = new Motore(cilindrata, 150);
    }

    public void Avvia()
    {
        Console.WriteLine($"{Marca} {Modello}: avviamento...");
        motore.Avvia();
    }

    public void Spegni()
    {
        Console.WriteLine($"{Marca} {Modello}: spegnimento...");
        motore.Spegni();
    }

    public void StampaInfo()
    {
        Console.WriteLine($"\n=== {Marca} {Modello} ===");
        motore.StampaInfo();
    }
}

// === Dimostrazione: vita dipendente ===
Automobile miaAuto = new Automobile("Fiat", "Punto", 1200);
miaAuto.StampaInfo();
// Output:
// === Fiat Punto ===
//   Motore: 1200cc, 150CV - Spento

miaAuto.Avvia();
// Output:
// Fiat Punto: avviamento...
// Motore 1200cc (150CV) avviato!

// Se l'auto viene "distrutta"...
miaAuto = null;
// ...il motore viene distrutto INSIEME all'auto!
// Non c'e' alcun riferimento al motore al di fuori dell'auto.
```

**Punto chiave:** il motore viene creato **all'interno** del costruttore dell'automobile. Non esiste un riferimento esterno al motore: se l'auto viene distrutta, il motore scompare con essa.

#### Differenza tra Aggregazione e Composizione

| Caratteristica | Aggregazione ◇ | Composizione ◆ |
|:---|:---|:---|
| Dipendenza | Debole (vita indipendente) | Forte (vita dipendente) |
| Creazione | Oggetto creato esternamente | Oggetto creato internamente |
| Distruzione | Il contenuto sopravvive | Il contenuto viene distrutto |
| Esempio | Squadra ◇ Giocatori | Casa ◆ Stanze |

#### Altri Esempi di Composizione

| Contenitore | Contenuto | Spiegazione |
|:---|:---|:---|
| Casa ◆ | Stanze | Demolire la casa elimina le stanze |
| Ordine ◆ | RigheOrdine | Annullare l'ordine elimina le righe |
| Fattura ◆ | DettagliFattura | Eliminare la fattura elimina i dettagli |

---

### 5.4 Associazioni Molti-a-Molti (N-M)

#### Il Problema

Ci sono situazioni in cui la relazione tra due classi e' **bidirezionale e multipla**: ogni studente puo frequentare **piu corsi**, e ogni corso puo avere **piu studenti**. Questo tipo di relazione si chiama **molti-a-molti** (N-M).

```
 ┌──────────────┐  *     *  ┌──────────────┐
 │   Studente   │───────────│    Corso     │
 │              │           │              │
 └──────────────┘           └──────────────┘
```

#### Implementazione in C#

Ogni classe mantiene una **lista di riferimenti** all'altra. L'operazione di iscrizione aggiorna **entrambe le liste** (relazione bidirezionale).

```csharp
public class Corso
{
    public string Nome { get; set; }
    public string Docente { get; set; }
    private List<Studente> studenti;

    public Corso(string nome, string docente)
    {
        Nome = nome;
        Docente = docente;
        studenti = new List<Studente>();
    }

    // Metodo interno per aggiungere uno studente (senza ricorsione)
    public void AggiungiStudente(Studente s)
    {
        if (!studenti.Contains(s))
        {
            studenti.Add(s);
        }
    }

    public void StampaIscritti()
    {
        Console.WriteLine($"\nCorso: {Nome} (Prof. {Docente})");
        Console.WriteLine("Studenti iscritti:");
        foreach (Studente s in studenti)
        {
            Console.WriteLine($"  - {s.Nome} {s.Cognome}");
        }
    }
}

public class Studente
{
    public string Nome { get; set; }
    public string Cognome { get; set; }
    private List<Corso> corsi;

    public Studente(string nome, string cognome)
    {
        Nome = nome;
        Cognome = cognome;
        corsi = new List<Corso>();
    }

    // Iscrizione bidirezionale: aggiunge a ENTRAMBE le liste
    public void IscriviACorso(Corso c)
    {
        if (!corsi.Contains(c))
        {
            corsi.Add(c);
            c.AggiungiStudente(this);  // Aggiorna anche il lato Corso
            Console.WriteLine($"{Nome} {Cognome} iscritto a {c.Nome}");
        }
    }

    public void StampaCorsi()
    {
        Console.WriteLine($"\n{Nome} {Cognome} - Corsi frequentati:");
        foreach (Corso c in corsi)
        {
            Console.WriteLine($"  - {c.Nome} (Prof. {c.Docente})");
        }
    }
}

// === Utilizzo ===
Studente s1 = new Studente("Marco", "Rossi");
Studente s2 = new Studente("Laura", "Bianchi");
Studente s3 = new Studente("Andrea", "Verdi");

Corso cInfo = new Corso("Informatica", "Prof. Neri");
Corso cMat = new Corso("Matematica", "Prof. Gialli");
Corso cFis = new Corso("Fisica", "Prof. Blu");

// Iscrizioni (N-M: ogni studente a piu corsi, ogni corso piu studenti)
s1.IscriviACorso(cInfo);  // Marco -> Informatica
s1.IscriviACorso(cMat);   // Marco -> Matematica
s2.IscriviACorso(cInfo);  // Laura -> Informatica
s2.IscriviACorso(cFis);   // Laura -> Fisica
s3.IscriviACorso(cMat);   // Andrea -> Matematica
s3.IscriviACorso(cFis);   // Andrea -> Fisica
s3.IscriviACorso(cInfo);  // Andrea -> Informatica

// Visualizzazione dal lato studente
s1.StampaCorsi();
// Marco Rossi - Corsi frequentati:
//   - Informatica (Prof. Neri)
//   - Matematica (Prof. Gialli)

// Visualizzazione dal lato corso
cInfo.StampaIscritti();
// Corso: Informatica (Prof. Neri)
// Studenti iscritti:
//   - Marco Rossi
//   - Laura Bianchi
//   - Andrea Verdi
```

#### Altri Esempi di Associazioni N-M

| Classe A | Classe B | Relazione |
|:---|:---|:---|
| Attori | Film | Un attore recita in piu film, un film ha piu attori |
| Prodotti | Ordini | Un prodotto appare in piu ordini, un ordine ha piu prodotti |
| Autori | Libri | Un autore scrive piu libri, un libro puo avere piu autori |
| Tag | Articoli | Un tag e' associato a piu articoli, un articolo ha piu tag |

---

### 5.5 Classe di Associazione

#### Quando la Relazione Ha Attributi Propri

A volte la **relazione stessa** possiede degli attributi che non appartengono ne' a una classe ne' all'altra. In questo caso si introduce una **classe di associazione** che rappresenta la relazione.

**Esempio:** l'iscrizione di uno studente a un corso ha una **data di iscrizione** e un **voto finale**. Questi dati non appartengono ne' allo studente (che puo avere voti diversi per corsi diversi) ne' al corso (che ha voti diversi per studenti diversi).

#### Diagramma UML

```
 ┌──────────────┐  *     *  ┌──────────────┐
 │   Studente   │───────────│    Corso     │
 │              │     |     │              │
 └──────────────┘     |     └──────────────┘
                      |
                 ┌────┴─────────────┐
                 │    Iscrizione    │
                 ├──────────────────┤
                 │ dataIscrizione   │
                 │ votoFinale       │
                 └──────────────────┘
```

La linea tratteggiata collega l'associazione alla classe di associazione.

#### Implementazione in C#

```csharp
public class Studente
{
    public string Nome { get; set; }
    public string Cognome { get; set; }

    public Studente(string nome, string cognome)
    {
        Nome = nome;
        Cognome = cognome;
    }
}

public class Corso
{
    public string Nome { get; set; }
    public string Docente { get; set; }

    public Corso(string nome, string docente)
    {
        Nome = nome;
        Docente = docente;
    }
}

// Classe di associazione: contiene gli attributi della RELAZIONE
public class Iscrizione
{
    public Studente Studente { get; set; }
    public Corso Corso { get; set; }
    public DateTime DataIscrizione { get; set; }
    public int? VotoFinale { get; set; }  // Nullable: puo non avere ancora un voto

    public Iscrizione(Studente studente, Corso corso)
    {
        Studente = studente;
        Corso = corso;
        DataIscrizione = DateTime.Now;
        VotoFinale = null;
    }

    public void AssegnaVoto(int voto)
    {
        if (voto >= 1 && voto <= 10)
        {
            VotoFinale = voto;
            Console.WriteLine($"Voto {voto} assegnato a {Studente.Nome} " +
                              $"{Studente.Cognome} per {Corso.Nome}");
        }
        else
        {
            Console.WriteLine("Voto non valido! Deve essere tra 1 e 10.");
        }
    }

    public void StampaDettagli()
    {
        Console.WriteLine($"  {Studente.Nome} {Studente.Cognome} -> {Corso.Nome}");
        Console.WriteLine($"  Data iscrizione: {DataIscrizione:dd/MM/yyyy}");
        Console.WriteLine($"  Voto finale: {(VotoFinale.HasValue ? VotoFinale.ToString() : "Non ancora assegnato")}");
    }
}

// === Utilizzo ===
Studente s1 = new Studente("Marco", "Rossi");
Corso cInfo = new Corso("Informatica", "Prof. Neri");

Iscrizione iscrizione = new Iscrizione(s1, cInfo);
iscrizione.StampaDettagli();
// Output:
//   Marco Rossi -> Informatica
//   Data iscrizione: 27/01/2026
//   Voto finale: Non ancora assegnato

iscrizione.AssegnaVoto(8);
// Output: Voto 8 assegnato a Marco Rossi per Informatica

iscrizione.StampaDettagli();
// Output:
//   Marco Rossi -> Informatica
//   Data iscrizione: 27/01/2026
//   Voto finale: 8
```

#### Altri Esempi di Classi di Associazione

| Classe A | Classe B | Classe Associazione | Attributi della Relazione |
|:---|:---|:---|:---|
| Ordine | Prodotto | RigaOrdine | quantita, prezzoUnitario |
| Dipendente | Progetto | Assegnazione | oreLavorate, ruoloProgetto |

---

### 5.6 Esempio Completo: Sistema Bancario

Mettiamo insieme tutti i concetti appresi con un esempio completo e realistico: un **sistema bancario** che gestisce una banca, i suoi conti correnti e i movimenti.

#### Struttura delle Relazioni

```
 ┌──────────┐        ┌─────────────────┐        ┌──────────────┐
 │  Banca   │◆──────>│  ContoCorrente  │◆──────>│  Movimento   │
 │          │ 1    * │                 │ 1    * │              │
 └──────────┘        └─────────────────┘        └──────────────┘
```

- **Banca ◆ ContoCorrente**: composizione. Chiudere la banca elimina tutti i conti.
- **ContoCorrente ◆ Movimento**: composizione. Chiudere un conto elimina tutti i movimenti.

#### Enum TipoMovimento

```csharp
public enum TipoMovimento
{
    Versamento,
    Prelievo,
    Bonifico,
    Addebito
}
```

#### Classe Movimento

```csharp
public class Movimento
{
    public DateTime Data { get; set; }
    public double Importo { get; set; }
    public TipoMovimento Tipo { get; set; }
    public string Descrizione { get; set; }

    public Movimento(double importo, TipoMovimento tipo, string descrizione)
    {
        Data = DateTime.Now;
        Importo = importo;
        Tipo = tipo;
        Descrizione = descrizione;
    }

    public override string ToString()
    {
        // Il segno dipende dal tipo di movimento
        string segno = (Tipo == TipoMovimento.Versamento ||
                        Tipo == TipoMovimento.Bonifico) ? "+" : "-";
        return $"  {Data:dd/MM/yyyy HH:mm} | {Tipo,-12} | " +
               $"{segno}{Importo,10:F2} EUR | {Descrizione}";
    }
}
```

#### Classe ContoCorrente

```csharp
public class ContoCorrente
{
    public string IBAN { get; set; }
    public string Titolare { get; set; }
    public double Saldo { get; private set; }  // Saldo modificabile solo internamente
    private List<Movimento> movimenti;

    public ContoCorrente(string iban, string titolare)
    {
        IBAN = iban;
        Titolare = titolare;
        Saldo = 0;
        movimenti = new List<Movimento>();  // Composizione: creati internamente
    }

    public bool Versa(double importo)
    {
        if (importo <= 0)
        {
            Console.WriteLine("Errore: l'importo deve essere positivo.");
            return false;
        }

        Saldo += importo;
        movimenti.Add(new Movimento(importo, TipoMovimento.Versamento,
            $"Versamento contanti"));
        Console.WriteLine($"Versamento di {importo:F2} EUR effettuato. " +
                          $"Nuovo saldo: {Saldo:F2} EUR");
        return true;
    }

    public bool Preleva(double importo)
    {
        if (importo <= 0)
        {
            Console.WriteLine("Errore: l'importo deve essere positivo.");
            return false;
        }

        if (importo > Saldo)
        {
            Console.WriteLine($"Errore: saldo insufficiente. " +
                              $"Saldo attuale: {Saldo:F2} EUR");
            return false;
        }

        Saldo -= importo;
        movimenti.Add(new Movimento(importo, TipoMovimento.Prelievo,
            $"Prelievo da sportello"));
        Console.WriteLine($"Prelievo di {importo:F2} EUR effettuato. " +
                          $"Nuovo saldo: {Saldo:F2} EUR");
        return true;
    }

    public void StampaEstrattoConto()
    {
        Console.WriteLine($"\n{"",2}========================================");
        Console.WriteLine($"  ESTRATTO CONTO");
        Console.WriteLine($"  IBAN: {IBAN}");
        Console.WriteLine($"  Titolare: {Titolare}");
        Console.WriteLine($"{"",2}========================================");
        Console.WriteLine($"  {"Data",-17}| {"Tipo",-13}| {"Importo",14} | Descrizione");
        Console.WriteLine($"{"",2}----------------------------------------");

        foreach (Movimento m in movimenti)
        {
            Console.WriteLine(m);
        }

        Console.WriteLine($"{"",2}----------------------------------------");
        Console.WriteLine($"  SALDO ATTUALE: {Saldo,26:F2} EUR");
        Console.WriteLine($"{"",2}========================================\n");
    }
}
```

#### Classe Banca

```csharp
public class Banca
{
    public string Nome { get; set; }
    private List<ContoCorrente> conti;
    private int prossimoNumeroConto;

    public Banca(string nome)
    {
        Nome = nome;
        conti = new List<ContoCorrente>();  // Composizione: creati internamente
        prossimoNumeroConto = 1;
    }

    public ContoCorrente ApriConto(string titolare)
    {
        // Genera IBAN automaticamente
        string iban = $"IT{prossimoNumeroConto:D2}X0000000000{prossimoNumeroConto:D12}";
        prossimoNumeroConto++;

        ContoCorrente conto = new ContoCorrente(iban, titolare);
        conti.Add(conto);
        Console.WriteLine($"Conto aperto per {titolare}. IBAN: {iban}");
        return conto;
    }

    public ContoCorrente TrovaConto(string iban)
    {
        return conti.Find(c => c.IBAN == iban);
    }

    public void StampaReport()
    {
        Console.WriteLine($"\n╔══════════════════════════════════════╗");
        Console.WriteLine($"║  REPORT BANCA: {Nome,-21} ║");
        Console.WriteLine($"╠══════════════════════════════════════╣");
        Console.WriteLine($"║  Numero conti: {conti.Count,-21} ║");

        double totaleDepositi = 0;
        foreach (ContoCorrente c in conti)
        {
            totaleDepositi += c.Saldo;
        }

        Console.WriteLine($"║  Totale depositi: {totaleDepositi,14:F2} EUR ║");
        Console.WriteLine($"╠══════════════════════════════════════╣");

        foreach (ContoCorrente c in conti)
        {
            Console.WriteLine($"║  {c.Titolare,-15} | {c.Saldo,12:F2} EUR ║");
        }

        Console.WriteLine($"╚══════════════════════════════════════╝\n");
    }
}
```

#### Utilizzo Completo del Sistema

```csharp
// Creazione della banca
Banca banca = new Banca("Banca Example");

// Apertura conti
ContoCorrente conto1 = banca.ApriConto("Mario Rossi");
ContoCorrente conto2 = banca.ApriConto("Laura Bianchi");

// Operazioni sul conto di Mario
conto1.Versa(1000);     // Versamento di 1000.00 EUR
conto1.Versa(500);      // Versamento di 500.00 EUR
conto1.Preleva(200);    // Prelievo di 200.00 EUR

// Operazioni sul conto di Laura
conto2.Versa(2500);     // Versamento di 2500.00 EUR
conto2.Preleva(800);    // Prelievo di 800.00 EUR
conto2.Preleva(5000);   // Errore: saldo insufficiente!

// Stampa estratto conto di Mario
conto1.StampaEstrattoConto();
// Output:
//   ========================================
//   ESTRATTO CONTO
//   IBAN: IT01X0000000000000000000001
//   Titolare: Mario Rossi
//   ========================================
//   Data             | Tipo         |        Importo | Descrizione
//   ----------------------------------------
//   27/01/2026 10:30 | Versamento   |     +1000.00 EUR | Versamento contanti
//   27/01/2026 10:30 | Versamento   |      +500.00 EUR | Versamento contanti
//   27/01/2026 10:30 | Prelievo     |      -200.00 EUR | Prelievo da sportello
//   ----------------------------------------
//   SALDO ATTUALE:                      1300.00 EUR
//   ========================================

// Report della banca
banca.StampaReport();
// Output:
// ╔══════════════════════════════════════╗
// ║  REPORT BANCA: Banca Example        ║
// ╠══════════════════════════════════════╣
// ║  Numero conti: 2                    ║
// ║  Totale depositi:        3000.00 EUR ║
// ╠══════════════════════════════════════╣
// ║  Mario Rossi    |      1300.00 EUR ║
// ║  Laura Bianchi  |      1700.00 EUR ║
// ╚══════════════════════════════════════╝
```

#### Punti Chiave del Sistema Bancario

1. **Banca ◆ ContoCorrente** (Composizione): chiudere la banca significa eliminare tutti i conti. I conti vengono creati e gestiti esclusivamente dalla banca.

2. **ContoCorrente ◆ Movimento** (Composizione): chiudere un conto elimina tutti i suoi movimenti. I movimenti vengono creati internamente ai metodi `Versa()` e `Preleva()`.

3. **Incapsulamento**: il `Saldo` ha un setter `private` -- puo essere modificato solo attraverso i metodi `Versa()` e `Preleva()`, che eseguono i controlli di validazione (importo positivo, saldo sufficiente).

---

## Conclusioni

In questa terza parte della guida abbiamo affrontato i concetti piu avanzati e potenti della programmazione a oggetti:

- **Ereditarietà**: abbiamo imparato a creare gerarchie di classi, riutilizzando il codice della classe base e specializzandolo nelle classi derivate tramite le parole chiave `virtual`, `override` e `base`.

- **Polimorfismo**: abbiamo compreso come oggetti di classi diverse possano rispondere allo stesso messaggio in modi differenti, sia a tempo di compilazione (overloading) che a tempo di esecuzione (overriding). Il polimorfismo con le collezioni ci ha mostrato la vera potenza di questo concetto.

- **Classi astratte e interfacce**: abbiamo visto come definire contratti e modelli che le classi devono rispettare, favorendo la progettazione flessibile e il disaccoppiamento del codice.

- **Diagrammi UML di sequenza**: abbiamo imparato a leggere e interpretare diagrammi che rappresentano le interazioni tra oggetti nel tempo.

- **Associazioni tra classi**: abbiamo studiato come modellare le relazioni del mondo reale attraverso aggregazione, composizione, relazioni molti-a-molti e classi di associazione, con particolare attenzione alla differenza tra vita indipendente (aggregazione) e vita dipendente (composizione).

Questi concetti sono alla base di qualsiasi progetto software ben strutturato. Padroneggiandoli, avrete gli strumenti per progettare e implementare sistemi complessi, mantenibili e facilmente estensibili.
