# Guida alla Programmazione ad Oggetti con C# e UML - Parte 2

> **Corso per studenti del 4° anno di scuola superiore**
> Prerequisiti: Programmazione strutturata, procedurale e modulare, struct, collezioni, sintassi base C#
> Riferimento: Modulo 3 della presentazione interattiva

---

## Capitolo 3: Metodi e Incapsulamento

In questo capitolo affronteremo due pilastri fondamentali della programmazione ad oggetti: i **metodi**, che definiscono il comportamento degli oggetti, e l'**incapsulamento**, che protegge i dati interni garantendo coerenza e sicurezza. Impareremo anche a controllare la visibilita dei membri di una classe attraverso i **modificatori di accesso**, sia in C# che nella notazione UML.

---

### 3.1 Metodi

#### Che cosa sono i metodi?

Un **metodo** e una funzione definita all'interno di una classe che determina il **comportamento** di un oggetto. Se gli attributi rappresentano *cosa un oggetto sa* (i suoi dati), i metodi rappresentano *cosa un oggetto sa fare* (le sue azioni).

Ogni metodo e composto da cinque elementi fondamentali:

| Componente | Descrizione | Esempio |
|---|---|---|
| **Modificatore** | Livello di accesso e caratteristiche | `public`, `private`, `static` |
| **Tipo di ritorno** | Il tipo di dato restituito dal metodo | `int`, `string`, `void`, `bool` |
| **Nome** | Identificativo del metodo (PascalCase) | `CalcolaArea`, `Saluta` |
| **Parametri** | Dati in ingresso (tra parentesi) | `(int x, string nome)` |
| **Corpo** | Blocco di istruzioni eseguite | `{ ... }` |

#### Sintassi generale

```csharp
modificatore tipoRitorno NomeMetodo(parametri)
{
    // Corpo del metodo
    return valore;  // se non void
}
```

Vediamo un primo esempio semplice:

```csharp
public class Studente
{
    private string nome;
    private int eta;

    public Studente(string nome, int eta)
    {
        this.nome = nome;
        this.eta = eta;
    }

    // Metodo pubblico: restituisce una stringa
    public string Presentati()
    {
        return $"Ciao, sono {nome} e ho {eta} anni.";
    }

    // Metodo pubblico: modifica lo stato dell'oggetto
    public void CompiAnni()
    {
        eta++;
    }
}
```

In questo esempio, `Presentati()` restituisce un valore di tipo `string`, mentre `CompiAnni()` non restituisce nulla (`void`) ma modifica lo stato interno dell'oggetto.

---

#### Metodi void vs metodi con valore di ritorno

La distinzione fondamentale tra i metodi riguarda la presenza o assenza di un valore restituito.

**Metodi `void`**: eseguono un'azione senza restituire alcun valore al chiamante. Sono tipicamente usati per operazioni che modificano lo stato dell'oggetto, stampano a video o eseguono effetti collaterali.

**Metodi con tipo di ritorno**: restituiscono un valore al chiamante tramite la parola chiave `return`. Il tipo del valore restituito deve corrispondere al tipo dichiarato nella firma del metodo. Ogni percorso di esecuzione del metodo **deve** terminare con un'istruzione `return`.

Vediamo due classi che illustrano questa differenza.

**Esempio con metodi `void` - Classe Stampante:**

```csharp
public class Stampante
{
    private string modello;
    private int pagineStampate;

    public Stampante(string modello)
    {
        this.modello = modello;
        this.pagineStampate = 0;
    }

    // void: esegue un'azione senza restituire nulla
    public void Stampa(string documento)
    {
        Console.WriteLine($"[{modello}] Stampa in corso: {documento}");
        pagineStampate++;
    }

    // void: esegue un'azione senza restituire nulla
    public void StampaRapporto()
    {
        Console.WriteLine($"=== Rapporto Stampante ===");
        Console.WriteLine($"Modello: {modello}");
        Console.WriteLine($"Pagine stampate: {pagineStampate}");
    }

    // void: modifica lo stato interno
    public void Reset()
    {
        pagineStampate = 0;
        Console.WriteLine($"[{modello}] Contatore azzerato.");
    }
}
```

**Esempio con metodi con ritorno - Classe Calcolatrice:**

```csharp
public class Calcolatrice
{
    private string marca;

    public Calcolatrice(string marca)
    {
        this.marca = marca;
    }

    // Restituisce un int: la somma dei due numeri
    public int Somma(int a, int b)
    {
        return a + b;
    }

    // Restituisce un double: la media dei valori
    public double Media(double a, double b)
    {
        return (a + b) / 2.0;
    }

    // Restituisce un bool: true se il numero e pari
    public bool IsPari(int numero)
    {
        return numero % 2 == 0;
    }

    // Restituisce una string: descrizione del risultato
    public string Descrivi(int a, int b)
    {
        int somma = Somma(a, b);
        return $"[{marca}] La somma di {a} e {b} e {somma}";
    }
}
```

Utilizzo delle due classi:

```csharp
// Uso della Stampante (metodi void)
Stampante hp = new Stampante("HP LaserJet");
hp.Stampa("Relazione.pdf");      // Azione eseguita, nessun valore restituito
hp.Stampa("Compito.docx");
hp.StampaRapporto();              // Stampa a video il rapporto

// Uso della Calcolatrice (metodi con ritorno)
Calcolatrice calc = new Calcolatrice("Casio");
int risultato = calc.Somma(15, 27);           // risultato = 42
double media = calc.Media(8.5, 9.0);          // media = 8.75
bool pari = calc.IsPari(risultato);            // pari = true
string desc = calc.Descrivi(15, 27);           // "Casio: La somma..."

Console.WriteLine(risultato);  // 42
Console.WriteLine(media);      // 8.75
Console.WriteLine(pari);       // True
Console.WriteLine(desc);       // [Casio] La somma di 15 e 27 e 42
```

> **Regola importante:** un metodo con tipo di ritorno diverso da `void` **deve sempre** terminare con un'istruzione `return` in ogni possibile percorso di esecuzione. Il compilatore segnala un errore se esiste un percorso che non restituisce un valore.

```csharp
// ERRORE DI COMPILAZIONE: non tutti i percorsi restituiscono un valore
public string Valuta(int voto)
{
    if (voto >= 6)
        return "Sufficiente";
    // Manca il return per il caso voto < 6!
}

// CORRETTO: tutti i percorsi hanno un return
public string Valuta(int voto)
{
    if (voto >= 6)
        return "Sufficiente";
    else
        return "Insufficiente";
}
```

---

#### Method Overloading (Sovraccarico dei metodi)

L'**overloading** consiste nel definire piu metodi con lo **stesso nome** ma con **parametri diversi** all'interno della stessa classe. I metodi possono differire per:

- **Numero** di parametri
- **Tipo** dei parametri
- **Ordine** dei parametri (se di tipi diversi)

Il compilatore sceglie automaticamente quale versione invocare in base agli argomenti passati nella chiamata. Questo meccanismo rende il codice piu leggibile e intuitivo.

**Esempio completo: Classe Messaggio con 4 overload del metodo Invia()**

```csharp
public class Messaggio
{
    private string mittente;

    public Messaggio(string mittente)
    {
        this.mittente = mittente;
    }

    // Overload 1: solo testo
    public void Invia(string testo)
    {
        Console.WriteLine($"[{mittente}] Messaggio inviato: {testo}");
    }

    // Overload 2: testo + destinatario
    public void Invia(string testo, string destinatario)
    {
        Console.WriteLine($"[{mittente} -> {destinatario}] {testo}");
    }

    // Overload 3: testo + destinatario + priorita
    public void Invia(string testo, string destinatario, int priorita)
    {
        string livello = priorita > 5 ? "URGENTE" : "normale";
        Console.WriteLine($"[{livello}] [{mittente} -> {destinatario}] {testo}");
    }

    // Overload 4: testo + array di destinatari
    public void Invia(string testo, string[] destinatari)
    {
        foreach (string dest in destinatari)
        {
            Console.WriteLine($"[{mittente} -> {dest}] {testo}");
        }
        Console.WriteLine($"Messaggio inviato a {destinatari.Length} destinatari.");
    }
}
```

Utilizzo con i diversi overload:

```csharp
Messaggio msg = new Messaggio("Prof. Rossi");

// Il compilatore sceglie automaticamente l'overload corretto
msg.Invia("Buongiorno a tutti!");
// Output: [Prof. Rossi] Messaggio inviato: Buongiorno a tutti!

msg.Invia("Compito domani", "Marco");
// Output: [Prof. Rossi -> Marco] Compito domani

msg.Invia("Consegna urgente!", "Luca", 8);
// Output: [URGENTE] [Prof. Rossi -> Luca] Consegna urgente!

string[] classe = { "Anna", "Marco", "Luca", "Sara" };
msg.Invia("Buone vacanze!", classe);
// Output: [Prof. Rossi -> Anna] Buone vacanze!
//         [Prof. Rossi -> Marco] Buone vacanze!
//         [Prof. Rossi -> Luca] Buone vacanze!
//         [Prof. Rossi -> Sara] Buone vacanze!
//         Messaggio inviato a 4 destinatari.
```

> **Attenzione:** l'overloading si basa solo sulla **lista dei parametri**, non sul tipo di ritorno. Due metodi che differiscono solo per il tipo di ritorno causano un errore di compilazione.

```csharp
// ERRORE: non si puo fare overloading solo sul tipo di ritorno
public int    Calcola(int x) { return x * 2; }
public double Calcola(int x) { return x * 2.0; }  // Errore!
```

---

#### Metodi Static vs metodi di istanza

Questa distinzione e fondamentale in C# e nella programmazione ad oggetti in generale.

**Metodi di istanza**: operano su un oggetto specifico e possono accedere agli attributi di istanza tramite `this`. Per invocarli serve prima creare un'istanza della classe.

**Metodi statici** (`static`): appartengono alla **classe stessa**, non a un'istanza particolare. Non possono accedere ad attributi di istanza e non richiedono la creazione di un oggetto.

**Esempio di metodo di istanza - Classe Cerchio:**

```csharp
public class Cerchio
{
    private double raggio;

    public Cerchio(double raggio)
    {
        this.raggio = raggio;
    }

    // Metodo di ISTANZA: usa l'attributo "raggio" dell'oggetto specifico
    public double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }

    // Metodo di ISTANZA: usa l'attributo "raggio" dell'oggetto specifico
    public double CalcolaCirconferenza()
    {
        return 2 * Math.PI * raggio;
    }

    // Metodo di ISTANZA: confronta con un altro cerchio
    public bool IsMaggiore(Cerchio altro)
    {
        return this.raggio > altro.raggio;
    }
}
```

Utilizzo:

```csharp
// Serve un'istanza per chiamare metodi di istanza
Cerchio c1 = new Cerchio(5.0);
Cerchio c2 = new Cerchio(3.0);

double area = c1.CalcolaArea();           // 78.54 (usa il raggio di c1)
double circ = c2.CalcolaCirconferenza();  // 18.85 (usa il raggio di c2)
bool maggiore = c1.IsMaggiore(c2);       // true
```

**Esempio di metodi statici - Classe Matematica:**

```csharp
public class Matematica
{
    // Metodo STATICO: non ha bisogno di un'istanza
    // Prende due numeri e restituisce il maggiore
    public static int Max(int a, int b)
    {
        return a > b ? a : b;
    }

    // Metodo STATICO: calcola la potenza
    public static double Potenza(double base_, int esponente)
    {
        double risultato = 1;
        for (int i = 0; i < esponente; i++)
        {
            risultato *= base_;
        }
        return risultato;
    }

    // Metodo STATICO: verifica se un numero e primo
    public static bool IsPrimo(int numero)
    {
        if (numero < 2) return false;
        for (int i = 2; i <= Math.Sqrt(numero); i++)
        {
            if (numero % i == 0)
                return false;
        }
        return true;
    }
}
```

Utilizzo:

```csharp
// NON serve creare un'istanza: si usa il nome della classe
int massimo = Matematica.Max(15, 27);         // 27
double potenza = Matematica.Potenza(2, 10);   // 1024.0
bool primo = Matematica.IsPrimo(17);          // true
bool nonPrimo = Matematica.IsPrimo(15);       // false

// ERRORE: non si puo chiamare un metodo statico su un'istanza
// Matematica m = new Matematica();
// m.Max(3, 5);  // Errore concettuale!
```

**Quando usare metodi statici:**

| Usa `static` quando... | NON usare `static` quando... |
|---|---|
| Il metodo e una **funzione pura** (dipende solo dai parametri) | Il metodo accede a **dati di istanza** (attributi dell'oggetto) |
| Il metodo e una **utility** generica (conversioni, calcoli matematici) | Il metodo deve essere **sovrascritto** nelle classi derivate (`override`) |
| Il metodo e un **factory method** (crea e restituisce nuove istanze) | Serve il **polimorfismo** (comportamento diverso in classi diverse) |
| Non c'e bisogno di mantenere uno stato | Il metodo modifica lo **stato** dell'oggetto |

Esempio di factory method statico:

```csharp
public class Cerchio
{
    private double raggio;

    public Cerchio(double raggio)
    {
        this.raggio = raggio;
    }

    // Factory method statico: crea un cerchio dal diametro
    public static Cerchio CreaDaDiametro(double diametro)
    {
        return new Cerchio(diametro / 2.0);
    }

    // Factory method statico: crea un cerchio dall'area
    public static Cerchio CreaDaArea(double area)
    {
        double raggio = Math.Sqrt(area / Math.PI);
        return new Cerchio(raggio);
    }

    public double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }
}
```

```csharp
// Creazione tramite costruttore classico
Cerchio c1 = new Cerchio(5.0);

// Creazione tramite factory methods statici
Cerchio c2 = Cerchio.CreaDaDiametro(10.0);   // raggio = 5.0
Cerchio c3 = Cerchio.CreaDaArea(78.54);       // raggio ~ 5.0
```

---

### 3.2 Incapsulamento

#### Che cos'e l'incapsulamento?

L'**incapsulamento** e uno dei quattro pilastri fondamentali della programmazione ad oggetti (insieme a ereditarieta, polimorfismo e astrazione). Consiste nel **nascondere i dettagli interni** di una classe, fornendo al mondo esterno solo un'**interfaccia pubblica controllata** per interagire con l'oggetto.

L'incapsulamento si articola in tre aspetti:

1. **Information Hiding** (Occultamento dell'informazione): i dati interni della classe sono nascosti e non direttamente accessibili dall'esterno.
2. **Interfaccia Pubblica**: la classe espone solo un insieme selezionato di metodi e proprieta attraverso cui il mondo esterno puo interagire con l'oggetto.
3. **Validazione**: i metodi pubblici controllano e validano i dati prima di modificare lo stato interno, garantendo che l'oggetto rimanga sempre in uno stato coerente.

---

#### Senza incapsulamento: i rischi

Vediamo cosa succede quando una classe non protegge i propri dati.

```csharp
// SENZA incapsulamento: tutti i campi sono pubblici
public class Motore
{
    public int giri;           // Chiunque puo modificare!
    public double temperatura; // Chiunque puo modificare!
    public bool acceso;

    public Motore()
    {
        giri = 0;
        temperatura = 20.0;
        acceso = false;
    }
}
```

Il problema e evidente:

```csharp
Motore m = new Motore();
m.acceso = true;

// Valori assurdi e pericolosi: nessun controllo!
m.giri = 15000;        // Il motore ha un limite di 8000 giri!
m.temperatura = 999;   // Temperatura impossibile: il motore fonderebbe!
m.giri = -500;         // Giri negativi? Non ha senso!

// Il motore e ora in uno stato INCOERENTE e PERICOLOSO
// Nessuno ha impedito queste operazioni scorrette
```

Senza incapsulamento, qualsiasi parte del programma puo alterare lo stato dell'oggetto in modo arbitrario, portando a **comportamenti imprevedibili**, **errori logici** e **stati incoerenti**.

---

#### Con incapsulamento: la soluzione

```csharp
// CON incapsulamento: campi privati, metodi pubblici controllati
public class Motore
{
    private int giri;            // Accessibile solo dall'interno della classe
    private double temperatura;  // Accessibile solo dall'interno della classe
    private bool acceso;

    public Motore()
    {
        giri = 0;
        temperatura = 20.0;
        acceso = false;
    }

    public void Accendi()
    {
        if (!acceso)
        {
            acceso = true;
            giri = 800;  // Giri minimi al minimo
            Console.WriteLine("Motore acceso. Giri al minimo: 800");
        }
    }

    public void Spegni()
    {
        acceso = false;
        giri = 0;
        temperatura = Math.Max(temperatura - 10, 20.0);
        Console.WriteLine("Motore spento.");
    }

    public void Accelera()
    {
        if (!acceso)
        {
            Console.WriteLine("Errore: il motore e spento!");
            return;
        }

        // Controllo: i giri non possono superare 8000
        if (giri < 8000)
        {
            giri += 500;
            temperatura += 5.0;
            Console.WriteLine($"Accelerazione! Giri: {giri}, Temp: {temperatura}°C");
        }
        else
        {
            Console.WriteLine("Attenzione: limite giri raggiunto (8000)!");
        }
    }

    public void Decelera()
    {
        if (!acceso)
        {
            Console.WriteLine("Errore: il motore e spento!");
            return;
        }

        if (giri > 800)
        {
            giri -= 500;
            temperatura -= 3.0;
            Console.WriteLine($"Decelerazione. Giri: {giri}, Temp: {temperatura}°C");
        }
        else
        {
            Console.WriteLine("Sei gia al minimo (800 giri).");
        }
    }

    public int GetGiri()
    {
        return giri;
    }

    public double GetTemperatura()
    {
        return temperatura;
    }
}
```

Ora l'utilizzo e sicuro:

```csharp
Motore m = new Motore();

// m.giri = 15000;     // ERRORE DI COMPILAZIONE: "giri" e privato!
// m.temperatura = 999; // ERRORE DI COMPILAZIONE: "temperatura" e privato!

m.Accendi();           // "Motore acceso. Giri al minimo: 800"
m.Accelera();          // "Accelerazione! Giri: 1300, Temp: 25°C"
m.Accelera();          // "Accelerazione! Giri: 1800, Temp: 30°C"

// Il motore non puo mai superare 8000 giri
// La temperatura e gestita automaticamente
// Lo stato e sempre coerente
```

---

#### I vantaggi dell'incapsulamento

##### 1. Protezione dei dati

L'incapsulamento garantisce che i dati sensibili siano accessibili solo attraverso metodi controllati che ne verificano la validita.

```csharp
public class Password
{
    private string hash;           // Mai esporre la password in chiaro!
    private DateTime ultimoAggiornamento;

    public Password(string passwordIniziale)
    {
        if (!IsValida(passwordIniziale))
            throw new ArgumentException("Password non valida.");

        hash = CalcolaHash(passwordIniziale);
        ultimoAggiornamento = DateTime.Now;
    }

    // Metodo pubblico: imposta una nuova password con validazione
    public bool ImpostaPassword(string nuovaPassword)
    {
        // Validazione: lunghezza minima
        if (nuovaPassword.Length < 8)
        {
            Console.WriteLine("Errore: la password deve avere almeno 8 caratteri.");
            return false;
        }

        // Validazione: deve contenere almeno una lettera maiuscola
        bool haMaiuscola = false;
        foreach (char c in nuovaPassword)
        {
            if (char.IsUpper(c))
            {
                haMaiuscola = true;
                break;
            }
        }
        if (!haMaiuscola)
        {
            Console.WriteLine("Errore: la password deve contenere almeno una maiuscola.");
            return false;
        }

        // Validazione: deve contenere almeno un numero
        bool haNumero = false;
        foreach (char c in nuovaPassword)
        {
            if (char.IsDigit(c))
            {
                haNumero = true;
                break;
            }
        }
        if (!haNumero)
        {
            Console.WriteLine("Errore: la password deve contenere almeno un numero.");
            return false;
        }

        // Tutte le validazioni superate: aggiorna la password
        hash = CalcolaHash(nuovaPassword);
        ultimoAggiornamento = DateTime.Now;
        Console.WriteLine("Password aggiornata con successo.");
        return true;
    }

    // Metodo pubblico: verifica la password SENZA esporre l'hash
    public bool Verifica(string tentativo)
    {
        return CalcolaHash(tentativo) == hash;
    }

    // Metodo privato: calcola l'hash (dettaglio implementativo nascosto)
    private string CalcolaHash(string input)
    {
        // Implementazione semplificata a scopo didattico
        int hashValue = 0;
        foreach (char c in input)
        {
            hashValue = hashValue * 31 + c;
        }
        return hashValue.ToString("X");
    }

    // Metodo privato: validazione iniziale
    private bool IsValida(string password)
    {
        return password != null && password.Length >= 8;
    }
}
```

Utilizzo:

```csharp
Password pwd = new Password("Sicura123");

// pwd.hash = "abc";  // ERRORE: hash e privato!

pwd.ImpostaPassword("corta");           // "Errore: almeno 8 caratteri"
pwd.ImpostaPassword("tuttominuscolo1"); // "Errore: almeno una maiuscola"
pwd.ImpostaPassword("SenzaNumeri");     // "Errore: almeno un numero"
pwd.ImpostaPassword("NuovaPass1");      // "Password aggiornata con successo"

bool ok = pwd.Verifica("NuovaPass1");   // true (senza mai vedere l'hash)
bool no = pwd.Verifica("Sbagliata");    // false
```

##### 2. Flessibilita di implementazione

L'incapsulamento permette di cambiare l'implementazione interna senza che il codice esterno debba essere modificato. L'interfaccia pubblica rimane identica.

```csharp
public class Cache
{
    // IMPLEMENTAZIONE INTERNA: puo cambiare senza rompere il codice esterno
    private Dictionary<string, string> dati;

    public Cache()
    {
        dati = new Dictionary<string, string>();
    }

    // INTERFACCIA PUBBLICA: resta invariata
    public void Inserisci(string chiave, string valore)
    {
        dati[chiave] = valore;
    }

    public string Recupera(string chiave)
    {
        if (dati.ContainsKey(chiave))
            return dati[chiave];
        return null;
    }

    public void Rimuovi(string chiave)
    {
        dati.Remove(chiave);
    }

    public int Dimensione()
    {
        return dati.Count;
    }
}
```

Domani potremmo decidere di sostituire il `Dictionary` interno con un sistema di cache distribuita come Redis, oppure con un file su disco. Il codice esterno che utilizza `Cache` **non dovra cambiare nulla**, perche interagisce solo con l'interfaccia pubblica (`Inserisci`, `Recupera`, `Rimuovi`, `Dimensione`).

```csharp
// Questo codice funziona IDENTICAMENTE sia con Dictionary che con Redis
Cache cache = new Cache();
cache.Inserisci("utente_1", "Mario Rossi");
cache.Inserisci("utente_2", "Anna Verdi");

string nome = cache.Recupera("utente_1");  // "Mario Rossi"
int dim = cache.Dimensione();               // 2
```

##### 3. Manutenibilita

L'incapsulamento porta a un codice meglio organizzato, con responsabilita chiare:

- **Modifiche localizzate**: un cambiamento nella logica interna non si propaga all'esterno.
- **Refactoring sicuro**: si puo ristrutturare il codice interno con la certezza di non rompere nulla, purche l'interfaccia pubblica resti la stessa.
- **Testing facilitato**: e possibile testare ogni classe in isolamento attraverso la sua interfaccia pubblica.

```csharp
public class Inventario
{
    private List<string> prodotti;
    private int capacitaMassima;

    public Inventario(int capacita)
    {
        prodotti = new List<string>();
        capacitaMassima = capacita;
    }

    public bool Aggiungi(string prodotto)
    {
        if (prodotti.Count >= capacitaMassima)
        {
            Console.WriteLine("Inventario pieno!");
            return false;
        }
        if (string.IsNullOrEmpty(prodotto))
        {
            Console.WriteLine("Nome prodotto non valido!");
            return false;
        }
        prodotti.Add(prodotto);
        return true;
    }

    public bool Rimuovi(string prodotto)
    {
        return prodotti.Remove(prodotto);
    }

    // Restituisce una COPIA della lista, non il riferimento originale
    public List<string> GetProdotti()
    {
        return new List<string>(prodotti);
    }

    public int ProdottiDisponibili()
    {
        return prodotti.Count;
    }
}
```

##### 4. Controllo centralizzato

Tutta la logica di validazione si trova in un unico punto, facilitando il controllo, il logging e il debugging.

```csharp
public class Termostato
{
    private double temperatura;
    private double minima;
    private double massima;
    private List<string> log;

    public Termostato(double minima, double massima)
    {
        this.minima = minima;
        this.massima = massima;
        this.temperatura = (minima + massima) / 2;
        this.log = new List<string>();
        RegistraLog("Termostato inizializzato");
    }

    // Validazione centralizzata: un solo punto di controllo
    public bool ImpostaTemperatura(double nuovaTemp)
    {
        if (nuovaTemp < minima)
        {
            RegistraLog($"Rifiutata temperatura {nuovaTemp}: sotto il minimo ({minima})");
            return false;
        }
        if (nuovaTemp > massima)
        {
            RegistraLog($"Rifiutata temperatura {nuovaTemp}: sopra il massimo ({massima})");
            return false;
        }

        double vecchia = temperatura;
        temperatura = nuovaTemp;
        RegistraLog($"Temperatura cambiata da {vecchia} a {nuovaTemp}");
        return true;
    }

    public double GetTemperatura()
    {
        return temperatura;
    }

    // Log interno: registra ogni operazione per il debugging
    private void RegistraLog(string messaggio)
    {
        string entry = $"[{DateTime.Now:HH:mm:ss}] {messaggio}";
        log.Add(entry);
    }

    public List<string> GetLog()
    {
        return new List<string>(log);  // Copia, non riferimento!
    }
}
```

> **Principio fondamentale: "Nascondi l'implementazione, esponi l'interfaccia."**
>
> L'utente della classe non deve sapere *come* funziona internamente: deve solo sapere *cosa puo fare* con essa.

---

#### Esempio pratico completo: ContoBancario

Questo esempio riunisce tutti i concetti dell'incapsulamento in una classe realistica e completa.

```csharp
public class ContoBancario
{
    // === ATTRIBUTI PRIVATI ===
    private string numeroConto;
    private string intestatario;
    private double saldo;
    private List<string> movimenti;
    private bool bloccato;

    // === COSTRUTTORE ===
    public ContoBancario(string numeroConto, string intestatario, double saldoIniziale)
    {
        this.numeroConto = numeroConto;
        this.intestatario = intestatario;
        this.saldo = saldoIniziale > 0 ? saldoIniziale : 0;
        this.movimenti = new List<string>();
        this.bloccato = false;

        AggiungiMovimento($"Apertura conto - Saldo iniziale: {this.saldo:C}");
    }

    // === METODI PUBBLICI (INTERFACCIA) ===

    /// <summary>
    /// Deposita un importo sul conto con validazione.
    /// L'importo deve essere positivo e non superiore a 10.000 euro per singola operazione.
    /// </summary>
    public bool Deposita(double importo)
    {
        // Validazione: il conto non deve essere bloccato
        if (bloccato)
        {
            Console.WriteLine("Operazione rifiutata: conto bloccato.");
            return false;
        }

        // Validazione: importo deve essere positivo
        if (importo <= 0)
        {
            Console.WriteLine("Errore: l'importo deve essere positivo.");
            return false;
        }

        // Validazione: limite massimo per singola operazione
        if (importo > 10000)
        {
            Console.WriteLine("Errore: deposito massimo 10.000 euro per operazione.");
            return false;
        }

        // Operazione valida: aggiorna saldo e registra il movimento
        saldo += importo;
        AggiungiMovimento($"Deposito: +{importo:C} | Saldo: {saldo:C}");
        Console.WriteLine($"Deposito di {importo:C} effettuato. Nuovo saldo: {saldo:C}");
        return true;
    }

    /// <summary>
    /// Preleva un importo dal conto con validazione.
    /// L'importo deve essere positivo, non superiore al saldo disponibile
    /// e non superiore a 500 euro per singola operazione.
    /// </summary>
    public bool Preleva(double importo)
    {
        // Validazione: il conto non deve essere bloccato
        if (bloccato)
        {
            Console.WriteLine("Operazione rifiutata: conto bloccato.");
            return false;
        }

        // Validazione: importo deve essere positivo
        if (importo <= 0)
        {
            Console.WriteLine("Errore: l'importo deve essere positivo.");
            return false;
        }

        // Validazione: saldo sufficiente
        if (importo > saldo)
        {
            Console.WriteLine($"Errore: saldo insufficiente. Disponibile: {saldo:C}");
            BloccaConto();  // Tentativo sospetto: blocca il conto
            return false;
        }

        // Validazione: limite massimo per singolo prelievo
        if (importo > 500)
        {
            Console.WriteLine("Errore: prelievo massimo 500 euro per operazione.");
            return false;
        }

        // Operazione valida: aggiorna saldo e registra il movimento
        saldo -= importo;
        AggiungiMovimento($"Prelievo: -{importo:C} | Saldo: {saldo:C}");
        Console.WriteLine($"Prelievo di {importo:C} effettuato. Nuovo saldo: {saldo:C}");
        return true;
    }

    /// <summary>
    /// Restituisce il saldo corrente.
    /// Se il conto e bloccato, restituisce 0 per motivi di sicurezza.
    /// </summary>
    public double GetSaldo()
    {
        if (bloccato)
        {
            Console.WriteLine("Conto bloccato: saldo non disponibile.");
            return 0;
        }
        return saldo;
    }

    /// <summary>
    /// Restituisce una COPIA della lista dei movimenti.
    /// Attenzione: restituire il riferimento originale permetterebbe
    /// al codice esterno di modificare direttamente la lista interna!
    /// </summary>
    public List<string> GetMovimenti()
    {
        // IMPORTANTE: restituiamo una COPIA, non il riferimento originale!
        // Se restituissimo "return movimenti;", il codice esterno potrebbe
        // fare movimenti.Clear() e cancellare tutti i movimenti reali.
        return new List<string>(movimenti);
    }

    public string GetIntestatario()
    {
        return intestatario;
    }

    public string GetNumeroConto()
    {
        return numeroConto;
    }

    public bool IsBloccato()
    {
        return bloccato;
    }

    // === METODI PRIVATI (IMPLEMENTAZIONE NASCOSTA) ===

    /// <summary>
    /// Blocca il conto in caso di operazioni sospette.
    /// Questo metodo e privato: solo la logica interna della classe
    /// puo decidere quando bloccare un conto.
    /// </summary>
    private void BloccaConto()
    {
        bloccato = true;
        AggiungiMovimento("*** CONTO BLOCCATO: operazione sospetta ***");
        Console.WriteLine("ATTENZIONE: il conto e stato bloccato per operazione sospetta.");
    }

    /// <summary>
    /// Registra un movimento nella cronologia.
    /// Metodo privato: i movimenti sono gestiti solo internamente.
    /// </summary>
    private void AggiungiMovimento(string descrizione)
    {
        string timestamp = DateTime.Now.ToString("dd/MM/yyyy HH:mm:ss");
        movimenti.Add($"[{timestamp}] {descrizione}");
    }
}
```

Utilizzo completo del ContoBancario:

```csharp
ContoBancario conto = new ContoBancario("IT001", "Mario Rossi", 1000);

// Operazioni regolari
conto.Deposita(500);     // OK: deposito di 500 euro
conto.Preleva(200);      // OK: prelievo di 200 euro

// Tentativi non validi (bloccati dalla validazione)
conto.Deposita(-100);    // "Errore: l'importo deve essere positivo"
conto.Deposita(50000);   // "Errore: deposito massimo 10.000 euro"
conto.Preleva(0);        // "Errore: l'importo deve essere positivo"
conto.Preleva(800);      // "Errore: prelievo massimo 500 euro"

// Saldo attuale
double saldo = conto.GetSaldo();  // 1300 euro

// Movimenti (copia sicura)
List<string> mov = conto.GetMovimenti();
foreach (string m in mov)
{
    Console.WriteLine(m);
}

// Tentativo con saldo insufficiente: blocca il conto!
conto.Preleva(5000);     // "Saldo insufficiente" + blocco automatico

// Dopo il blocco, tutte le operazioni sono rifiutate
conto.Deposita(100);     // "Operazione rifiutata: conto bloccato"
conto.GetSaldo();        // "Conto bloccato: saldo non disponibile" -> restituisce 0
```

> **Nota sulla restituzione delle collezioni:** il metodo `GetMovimenti()` restituisce `new List<string>(movimenti)`, cioe una **copia** della lista interna. Se restituissimo direttamente il riferimento `movimenti`, il codice esterno potrebbe modificare la lista originale (ad esempio con `Clear()` o `Add()`), violando l'incapsulamento. Questo e un errore molto comune.

---

### 3.3 Modificatori di Visibilita

#### I modificatori di accesso in C#

I **modificatori di accesso** (detti anche modificatori di visibilita) controllano **chi puo accedere** ai membri (attributi, metodi, proprieta) di una classe. Sono lo strumento principale per realizzare l'incapsulamento in C#.

| Modificatore | Simbolo UML | Accessibile da... | Uso tipico |
|---|---|---|---|
| `public` | `+` | Ovunque (qualsiasi classe, qualsiasi progetto) | Interfaccia pubblica della classe |
| `private` | `-` | Solo dalla classe stessa | Implementazione interna nascosta |
| `protected` | `#` | Dalla classe stessa e dalle classi derivate (figlie) | Membri condivisi nell'ereditarieta |
| `internal` | `~` | Solo all'interno dello stesso assembly (progetto) | Membri condivisi tra classi dello stesso progetto |

#### Notazione UML

Nei diagrammi UML, ogni membro di una classe e preceduto da un simbolo che ne indica la visibilita:

```
+-----------------------------------+
|            NomeClasse             |
+-----------------------------------+
| + campoPublic : tipo              |
| - campoPrivate : tipo             |
| # campoProtected : tipo           |
| ~ campoInternal : tipo            |
+-----------------------------------+
| + MetodoPublic() : tipo           |
| - MetodoPrivate() : tipo          |
| # MetodoProtected() : tipo        |
| ~ MetodoInternal() : tipo         |
+-----------------------------------+
```

- `+` (piu) = `public`
- `-` (meno) = `private`
- `#` (cancelletto) = `protected`
- `~` (tilde) = `internal`

---

#### Esempio completo: Classe Utente con tutti i modificatori

Vediamo una classe realistica che utilizza tutti e quattro i modificatori di accesso, ciascuno con un ruolo preciso.

```csharp
public class Utente
{
    // === PUBLIC (+): accessibili da qualsiasi parte del codice ===
    public string Username;
    public DateTime UltimoAccesso;

    // === PRIVATE (-): accessibili SOLO dall'interno di questa classe ===
    private string passwordHash;
    private string salt;
    private const int MAX_TENTATIVI = 3;

    // === PROTECTED (#): accessibili dalla classe e dalle classi DERIVATE ===
    protected int tentativiAccesso;
    protected bool accountBloccato;

    // === INTERNAL (~): accessibili solo nello stesso progetto/assembly ===
    internal int IdDatabase;
    internal DateTime DataCreazione;

    // === COSTRUTTORE ===
    public Utente(string username, string password)
    {
        // public
        this.Username = username;
        this.UltimoAccesso = DateTime.Now;

        // private
        this.salt = GeneraSalt();
        this.passwordHash = CalcolaHash(password, salt);

        // protected
        this.tentativiAccesso = 0;
        this.accountBloccato = false;

        // internal
        this.IdDatabase = -1;  // Verra assegnato dal database
        this.DataCreazione = DateTime.Now;
    }

    // === METODO PUBBLICO: interfaccia principale ===
    public bool Login(string password)
    {
        // Controlla se l'account e bloccato
        if (accountBloccato)
        {
            Console.WriteLine($"Account {Username} bloccato. Contattare l'amministratore.");
            return false;
        }

        // Verifica la password (usa metodo privato)
        if (VerificaPassword(password))
        {
            tentativiAccesso = 0;
            UltimoAccesso = DateTime.Now;
            Console.WriteLine($"Benvenuto, {Username}!");
            return true;
        }
        else
        {
            // Gestisci il tentativo fallito (usa metodo privato)
            GestisciLoginFallito();
            return false;
        }
    }

    // === METODO PRIVATO: verifica interna della password ===
    private bool VerificaPassword(string password)
    {
        string hashTentativo = CalcolaHash(password, salt);
        return hashTentativo == passwordHash;
    }

    // === METODO PRIVATO: gestione dei tentativi falliti ===
    private void GestisciLoginFallito()
    {
        tentativiAccesso++;
        int rimasti = MAX_TENTATIVI - tentativiAccesso;

        if (rimasti > 0)
        {
            Console.WriteLine($"Password errata. Tentativi rimasti: {rimasti}");
        }
        else
        {
            Console.WriteLine("Troppi tentativi falliti!");
            BloccaAccount();
        }
    }

    // === METODO PROTECTED: accessibile dalle classi derivate ===
    protected void BloccaAccount()
    {
        accountBloccato = true;
        Console.WriteLine($"Account {Username} BLOCCATO per sicurezza.");
    }

    // === METODO PROTECTED: le classi derivate possono sbloccare ===
    protected void SbloccaAccount()
    {
        accountBloccato = false;
        tentativiAccesso = 0;
        Console.WriteLine($"Account {Username} sbloccato.");
    }

    // === METODI PRIVATI: dettagli implementativi nascosti ===
    private string GeneraSalt()
    {
        // Semplificato a scopo didattico
        Random rng = new Random();
        return rng.Next(10000, 99999).ToString();
    }

    private string CalcolaHash(string password, string salt)
    {
        // Semplificato a scopo didattico
        string combinato = password + salt;
        int hash = 0;
        foreach (char c in combinato)
        {
            hash = hash * 31 + c;
        }
        return hash.ToString("X");
    }

    // === METODO INTERNAL: usato solo all'interno del progetto ===
    internal void AssegnaIdDatabase(int id)
    {
        IdDatabase = id;
        Console.WriteLine($"Utente {Username} salvato nel database con ID {id}.");
    }

    // === METODO PUBLIC: informazioni leggibili ===
    public override string ToString()
    {
        return $"Utente: {Username} | Ultimo accesso: {UltimoAccesso:dd/MM/yyyy HH:mm}";
    }
}
```

Flusso completo del Login:

```csharp
Utente utente = new Utente("mario_rossi", "MiaPassword123");

// LOGIN RIUSCITO
utente.Login("MiaPassword123");
// Output: "Benvenuto, mario_rossi!"

// LOGIN FALLITI
utente.Login("password_sbagliata");
// Output: "Password errata. Tentativi rimasti: 2"

utente.Login("altro_tentativo");
// Output: "Password errata. Tentativi rimasti: 1"

utente.Login("ancora_sbagliata");
// Output: "Troppi tentativi falliti!"
// Output: "Account mario_rossi BLOCCATO per sicurezza."

// TENTATIVO SU ACCOUNT BLOCCATO
utente.Login("MiaPassword123");
// Output: "Account mario_rossi bloccato. Contattare l'amministratore."

// Accesso ai campi:
Console.WriteLine(utente.Username);        // OK: public
Console.WriteLine(utente.UltimoAccesso);   // OK: public
// utente.passwordHash = "...";            // ERRORE: private
// utente.tentativiAccesso = 0;            // ERRORE: protected (accessibile solo da classi derivate)
// utente.IdDatabase;                      // OK solo se siamo nello stesso progetto (internal)
```

Esempio di classe derivata che accede ai membri `protected`:

```csharp
// Classe derivata: ha accesso ai membri protected della classe base
public class Admin : Utente
{
    public Admin(string username, string password)
        : base(username, password) { }

    // L'admin puo sbloccare gli account (usa il metodo protected)
    public void SbloccaUtente(Utente utenteDaSbloccare)
    {
        // NOTA: un Admin puo sbloccare SE STESSO perche ha accesso a protected
        // ma non puo accedere ai campi protected di un ALTRO oggetto Utente
        // (a meno che non sia la stessa gerarchia)
        Console.WriteLine($"Admin {Username}: sblocco account richiesto.");
    }

    // L'admin puo vedere i tentativi di accesso (campo protected)
    public void MostraInfoSicurezza()
    {
        // "tentativiAccesso" e protected: accessibile dalla classe derivata
        Console.WriteLine($"Tentativi accesso: {tentativiAccesso}");
        Console.WriteLine($"Account bloccato: {accountBloccato}");
    }
}
```

---

#### Best Practices: il Principio del Minimo Privilegio

Il **Principio del Minimo Privilegio** (Principle of Least Privilege) afferma che ogni membro di una classe dovrebbe avere il livello di visibilita **piu restrittivo possibile** per svolgere il proprio compito.

**Ordine di valutazione**: partire sempre dal livello piu restrittivo e salire solo se necessario.

```
private  -->  protected  -->  internal  -->  public
(piu restrittivo)                       (meno restrittivo)
```

**Regole pratiche:**

| Membro | Visibilita consigliata | Motivazione |
|---|---|---|
| **Attributi (campi)** | Sempre `private` | I dati interni non devono mai essere esposti direttamente |
| **Proprieta** | `public` solo se necessario | Usare get/set con validazione per esporre i dati |
| **Metodi helper** | Sempre `private` | Dettagli implementativi, non parte dell'interfaccia |
| **API pubblica** | `public`, ma **minimale e stabile** | Solo i metodi che il mondo esterno deve davvero usare |
| **Membri per ereditarieta** | `protected` | Solo se le classi derivate devono accedervi |

---

**Esempio di cattiva pratica: tutto pubblico**

```csharp
// CATTIVA PRATICA: nessun controllo, nessuna protezione
public class ContoBancarioInsicuro
{
    public string numeroConto;    // Chiunque puo modificarlo!
    public double saldo;          // Chiunque puo assegnare valori negativi!
    public List<string> movimenti; // Chiunque puo cancellare i movimenti!
    public bool bloccato;         // Chiunque puo sbloccare il conto!

    public ContoBancarioInsicuro(string numero, double saldoIniziale)
    {
        numeroConto = numero;
        saldo = saldoIniziale;
        movimenti = new List<string>();
        bloccato = false;
    }
}
```

```csharp
// Conseguenze della cattiva pratica:
ContoBancarioInsicuro conto = new ContoBancarioInsicuro("IT001", 1000);

conto.saldo = 999999;           // Soldi dal nulla!
conto.saldo = -500;             // Saldo negativo: impossibile nella realta
conto.bloccato = false;         // Sblocco non autorizzato
conto.movimenti.Clear();        // Cancellazione di tutti i movimenti
conto.numeroConto = "HACKED";   // Modifica del numero di conto
// Nessun log, nessuna validazione, nessun controllo.
```

**Esempio di buona pratica: incapsulamento corretto**

```csharp
// BUONA PRATICA: campi privati, metodi pubblici con validazione
public class ContoBancarioSicuro
{
    private string numeroConto;
    private double saldo;
    private List<string> movimenti;
    private bool bloccato;

    public ContoBancarioSicuro(string numero, double saldoIniziale)
    {
        numeroConto = numero;
        saldo = saldoIniziale > 0 ? saldoIniziale : 0;
        movimenti = new List<string>();
        bloccato = false;
    }

    public bool Deposita(double importo)
    {
        if (bloccato || importo <= 0 || importo > 10000)
            return false;
        saldo += importo;
        movimenti.Add($"Deposito: +{importo:C}");
        return true;
    }

    public bool Preleva(double importo)
    {
        if (bloccato || importo <= 0 || importo > saldo || importo > 500)
            return false;
        saldo -= importo;
        movimenti.Add($"Prelievo: -{importo:C}");
        return true;
    }

    public double GetSaldo()
    {
        return bloccato ? 0 : saldo;
    }

    public List<string> GetMovimenti()
    {
        return new List<string>(movimenti);  // Copia, non riferimento!
    }

    public string GetNumeroConto()
    {
        return numeroConto;
    }
}
```

```csharp
// Conseguenze della buona pratica:
ContoBancarioSicuro conto = new ContoBancarioSicuro("IT001", 1000);

// conto.saldo = 999999;       // ERRORE DI COMPILAZIONE: saldo e privato!
// conto.movimenti.Clear();    // ERRORE DI COMPILAZIONE: movimenti e privato!

conto.Deposita(-100);          // Restituisce false: importo non valido
conto.Deposita(500);           // Restituisce true: operazione corretta
conto.Preleva(2000);           // Restituisce false: supera il limite di 500

// I movimenti restituiti sono una copia: modificarli non altera l'originale
List<string> mov = conto.GetMovimenti();
mov.Clear();  // Cancella solo la copia, l'originale e intatto!
```

---

> **Mantra dell'incapsulamento: "Privato per default, pubblico per necessita."**
>
> Quando si progetta una classe, ogni attributo e ogni metodo dovrebbe partire come `private`. Solo quando si verifica un effettivo bisogno di accesso esterno, si alza gradualmente il livello di visibilita. Questo approccio garantisce la massima protezione e la minima superficie di attacco, producendo codice robusto, manutenibile e sicuro.

---

**Riepilogo del Capitolo 3:**

| Concetto | Punti chiave |
|---|---|
| **Metodi** | Definiscono il comportamento degli oggetti. Composti da: modificatore, tipo di ritorno, nome, parametri, corpo |
| **void vs ritorno** | `void` esegue azioni senza restituire valori; metodi con tipo di ritorno devono sempre terminare con `return` |
| **Overloading** | Stesso nome, parametri diversi (numero, tipo, ordine). Il compilatore sceglie automaticamente |
| **Static vs Istanza** | Static: appartengono alla classe, non servono istanze. Istanza: operano su un oggetto specifico |
| **Incapsulamento** | Nascondere i dettagli interni, esporre un'interfaccia pubblica controllata |
| **Vantaggi** | Protezione dati, flessibilita, manutenibilita, controllo centralizzato |
| **Modificatori** | `public` (+), `private` (-), `protected` (#), `internal` (~) |
| **Best Practice** | Principio del Minimo Privilegio: privato per default, pubblico per necessita |
