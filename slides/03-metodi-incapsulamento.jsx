// slides/03-metodi-incapsulamento.jsx
// Slide Metodi, Incapsulamento e Visibilità (10 slide totali)

const React = window.React;
const { Code, Lock, Eye, Shield, Package, ArrowRight, CheckCircle, XCircle, AlertTriangle, Zap } = window.Lucide;

const metodiIncapsulamentoSlides = [
  // ========== METODI (Slide 1-4) ==========

  // Slide 1 - Introduzione ai Metodi
  {
    title: "Metodi",
    subtitle: "Il comportamento degli oggetti",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
          React.createElement("h3", { className: "text-3xl font-bold mb-4 text-blue-300 flex items-center" },
            React.createElement(Zap, { className: "w-8 h-8 mr-3 text-cyan-400" }),
            "Cosa sono i Metodi?"
          ),
          React.createElement("p", { className: "text-xl text-gray-200 leading-relaxed" },
            "I metodi sono ",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "funzioni"),
            " definite all'interno di una classe che determinano il ",
            React.createElement("span", { className: "text-blue-400 font-bold" }, "comportamento"),
            " degli oggetti. Rappresentano le ",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "azioni"),
            " che un oggetto può compiere."
          )
        ),

        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          React.createElement("div", { className: "space-y-4 bg-blue-900/10 p-6 rounded-xl border border-blue-500/30" },
            React.createElement("h4", { className: "text-2xl font-bold text-cyan-300 mb-4 flex items-center" },
              React.createElement(Code, { className: "w-6 h-6 mr-2" }),
              "Componenti di un Metodo"
            ),
            React.createElement("ul", { className: "space-y-3 text-gray-200" },
              React.createElement("li", { className: "flex items-start p-3 bg-blue-900/20 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "▸"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-blue-300" }, "Modificatore:"),
                  React.createElement("span", { className: "text-gray-300" }, " public, private, protected")
                )
              ),
              React.createElement("li", { className: "flex items-start p-3 bg-cyan-900/20 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl" }, "▸"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "Tipo di ritorno:"),
                  React.createElement("span", { className: "text-gray-300" }, " int, string, void")
                )
              ),
              React.createElement("li", { className: "flex items-start p-3 bg-blue-900/20 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "▸"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-blue-300" }, "Nome:"),
                  React.createElement("span", { className: "text-gray-300" }, " identificatore univoco")
                )
              ),
              React.createElement("li", { className: "flex items-start p-3 bg-cyan-900/20 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl" }, "▸"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "Parametri:"),
                  React.createElement("span", { className: "text-gray-300" }, " input (opzionali)")
                )
              ),
              React.createElement("li", { className: "flex items-start p-3 bg-blue-900/20 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl" }, "▸"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-blue-300" }, "Corpo:"),
                  React.createElement("span", { className: "text-gray-300" }, " codice eseguibile")
                )
              )
            )
          ),

          React.createElement("div", { className: "bg-gray-900 p-6 rounded-xl border-2 border-cyan-500/40 shadow-2xl" },
            React.createElement("h4", { className: "text-xl font-bold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2" }, "Sintassi"),
            React.createElement("div", { className: "font-mono text-sm" },
              React.createElement("pre", { className: "text-gray-200" },
`modificatore tipoRitorno NomeMetodo(parametri)
{
    // Corpo del metodo
    return valore;  // se non void
}

// Esempi
public void Stampa()
{
    Console.WriteLine("Hello!");
}

public int Somma(int a, int b)
{
    return a + b;
}

public string GetNome()
{
    return nome;
}`
              )
            )
          )
        )
      )
    )
  },

  // Slide 2 - Metodi con e senza Ritorno
  {
    title: "Metodi con e senza Ritorno",
    subtitle: "void vs tipi di ritorno",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Metodi void
          React.createElement("div", { className: "bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-blue-300 flex items-center" },
              React.createElement(XCircle, { className: "w-7 h-7 mr-3 text-blue-400" }),
              "Metodi void"
            ),
            React.createElement("p", { className: "text-gray-300 mb-4 text-lg" },
              "Eseguono azioni ma ",
              React.createElement("span", { className: "text-blue-400 font-bold" }, "non restituiscono valori")
            ),
            React.createElement("div", { className: "bg-gray-900 p-5 rounded-xl font-mono text-sm border border-blue-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Stampante
{
    public void StampaDocumento()
    {
        Console.WriteLine("Stampa...");
        // Nessun return
    }

    public void CambiaModalita(string modo)
    {
        Console.WriteLine("Modalità: " + modo);
    }
}

// Utilizzo
Stampante s = new Stampante();
s.StampaDocumento();
s.CambiaModalita("Colore");`
              )
            )
          ),

          // Metodi con ritorno
          React.createElement("div", { className: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-cyan-300 flex items-center" },
              React.createElement(CheckCircle, { className: "w-7 h-7 mr-3 text-cyan-400" }),
              "Metodi con Ritorno"
            ),
            React.createElement("p", { className: "text-gray-300 mb-4 text-lg" },
              React.createElement("span", { className: "text-cyan-400 font-bold" }, "Restituiscono un valore"),
              " del tipo specificato"
            ),
            React.createElement("div", { className: "bg-gray-900 p-5 rounded-xl font-mono text-sm border border-cyan-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Calcolatrice
{
    public int Somma(int a, int b)
    {
        return a + b;
    }

    public double Dividi(double a, double b)
    {
        if(b != 0)
            return a / b;
        return 0;
    }

    public bool IsPari(int n)
    {
        return n % 2 == 0;
    }
}

// Utilizzo - cattura il valore
Calcolatrice c = new Calcolatrice();
int risultato = c.Somma(5, 3);
double quoziente = c.Dividi(10, 2);
bool pari = c.IsPari(4);`
              )
            )
          )
        ),

        React.createElement("div", { className: "bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border border-blue-500/30" },
          React.createElement("h4", { className: "text-xl font-bold text-cyan-300 mb-3 flex items-center" },
            React.createElement(AlertTriangle, { className: "w-6 h-6 mr-2 text-yellow-400" }),
            "Nota Importante"
          ),
          React.createElement("p", { className: "text-gray-200 text-lg" },
            "Quando un metodo ha un tipo di ritorno diverso da ",
            React.createElement("code", { className: "text-red-400 bg-gray-900 px-2 py-1 rounded" }, "void"),
            ", deve ",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "sempre"),
            " terminare con un'istruzione ",
            React.createElement("code", { className: "text-green-400 bg-gray-900 px-2 py-1 rounded" }, "return"),
            " che restituisce un valore del tipo corretto."
          )
        )
      )
    )
  },

  // Slide 3 - Method Overloading
  {
    title: "Method Overloading",
    subtitle: "Polimorfismo a tempo di compilazione",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
          React.createElement("h3", { className: "text-2xl font-bold mb-4 text-cyan-300 flex items-center" },
            React.createElement(Package, { className: "w-8 h-8 mr-3 text-blue-400" }),
            "Cos'è il Method Overloading?"
          ),
          React.createElement("p", { className: "text-xl text-gray-200 leading-relaxed" },
            "Definire ",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "più metodi con lo stesso nome"),
            " ma con ",
            React.createElement("span", { className: "text-blue-400 font-bold" }, "parametri diversi"),
            " (numero, tipo o ordine). Il compilatore sceglie automaticamente il metodo corretto in base agli argomenti."
          )
        ),

        React.createElement("div", { className: "bg-gray-900 p-6 rounded-xl border-2 border-cyan-500/40 shadow-2xl" },
          React.createElement("h4", { className: "text-xl font-bold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2" },
            "Esempio: Sistema di Messaggistica"
          ),
          React.createElement("div", { className: "font-mono text-sm" },
            React.createElement("pre", { className: "text-gray-200" },
`public class Messaggio
{
    // Overload 1: solo testo
    public void Invia(string testo)
    {
        Console.WriteLine("Invio messaggio: " + testo);
    }

    // Overload 2: testo e destinatario
    public void Invia(string testo, string destinatario)
    {
        Console.WriteLine($"Invio a {destinatario}: {testo}");
    }

    // Overload 3: testo, destinatario e priorità
    public void Invia(string testo, string destinatario, int priorita)
    {
        Console.WriteLine($"[P{priorita}] A {destinatario}: {testo}");
    }

    // Overload 4: broadcast a più destinatari
    public void Invia(string testo, string[] destinatari)
    {
        foreach(string dest in destinatari)
            Console.WriteLine($"Invio a {dest}: {testo}");
    }
}

// Utilizzo - C# sceglie il metodo corretto automaticamente
Messaggio msg = new Messaggio();
msg.Invia("Ciao!");                                    // Overload 1
msg.Invia("Ciao!", "Mario");                          // Overload 2
msg.Invia("Urgente!", "Luigi", 1);                    // Overload 3
msg.Invia("Avviso", new[] {"Mario", "Luigi"});        // Overload 4`
            )
          )
        ),

        React.createElement("div", { className: "grid grid-cols-3 gap-4" },
          React.createElement("div", { className: "bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 text-center" },
            React.createElement("div", { className: "text-3xl font-bold text-cyan-400 mb-2" }, "✓"),
            React.createElement("p", { className: "text-sm text-gray-300" }, "Numero parametri diverso")
          ),
          React.createElement("div", { className: "bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/30 text-center" },
            React.createElement("div", { className: "text-3xl font-bold text-blue-400 mb-2" }, "✓"),
            React.createElement("p", { className: "text-sm text-gray-300" }, "Tipo parametri diverso")
          ),
          React.createElement("div", { className: "bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 text-center" },
            React.createElement("div", { className: "text-3xl font-bold text-cyan-400 mb-2" }, "✓"),
            React.createElement("p", { className: "text-sm text-gray-300" }, "Ordine parametri diverso")
          )
        )
      )
    )
  },

  // Slide 4 - Metodi Static vs Istanza
  {
    title: "Metodi Static vs Istanza",
    subtitle: "Metodi di classe vs metodi di oggetto",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Metodi di Istanza
          React.createElement("div", { className: "bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-blue-300" }, "Metodi di Istanza"),
            React.createElement("p", { className: "text-gray-300 mb-4 text-lg" },
              "Operano su un ",
              React.createElement("span", { className: "text-blue-400 font-bold" }, "oggetto specifico"),
              ". Accedono agli attributi dell'istanza."
            ),
            React.createElement("div", { className: "bg-gray-900 p-5 rounded-xl font-mono text-sm border border-blue-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Cerchio
{
    private double raggio;

    public Cerchio(double r)
    {
        raggio = r;
    }

    // Metodo di istanza
    // Accede a 'raggio' dell'oggetto
    public double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }

    public double CalcolaCirconferenza()
    {
        return 2 * Math.PI * raggio;
    }
}

// SERVE un oggetto
Cerchio c1 = new Cerchio(5);
Cerchio c2 = new Cerchio(10);
double area1 = c1.CalcolaArea();
double area2 = c2.CalcolaArea();`
              )
            ),
            React.createElement("div", { className: "mt-4 bg-blue-900/30 p-3 rounded-lg" },
              React.createElement("p", { className: "text-sm text-gray-300 italic" },
                "Ogni oggetto ha i propri valori"
              )
            )
          ),

          // Metodi Static
          React.createElement("div", { className: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-cyan-300" }, "Metodi Static"),
            React.createElement("p", { className: "text-gray-300 mb-4 text-lg" },
              "Appartengono alla ",
              React.createElement("span", { className: "text-cyan-400 font-bold" }, "classe"),
              ". Non richiedono un'istanza."
            ),
            React.createElement("div", { className: "bg-gray-900 p-5 rounded-xl font-mono text-sm border border-cyan-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Matematica
{
    // Metodo static
    // NON accede a dati di istanza
    public static int Max(int a, int b)
    {
        return (a > b) ? a : b;
    }

    public static double Potenza(double x, int n)
    {
        return Math.Pow(x, n);
    }

    public static bool IsPrimo(int n)
    {
        if(n < 2) return false;
        for(int i = 2; i <= Math.Sqrt(n); i++)
            if(n % i == 0) return false;
        return true;
    }
}

// NON serve un oggetto
int massimo = Matematica.Max(5, 10);
double pot = Matematica.Potenza(2, 3);
bool primo = Matematica.IsPrimo(17);`
              )
            ),
            React.createElement("div", { className: "mt-4 bg-cyan-900/30 p-3 rounded-lg" },
              React.createElement("p", { className: "text-sm text-gray-300 italic" },
                "Si chiama direttamente sulla classe"
              )
            )
          )
        ),

        React.createElement("div", { className: "bg-gradient-to-r from-yellow-900/20 to-orange-900/20 p-6 rounded-xl border-l-4 border-yellow-400" },
          React.createElement("h4", { className: "text-xl font-bold text-yellow-300 mb-3 flex items-center" },
            React.createElement(AlertTriangle, { className: "w-6 h-6 mr-2" }),
            "Quando usare static?"
          ),
          React.createElement("div", { className: "grid grid-cols-2 gap-4 text-gray-200" },
            React.createElement("div", null,
              React.createElement("p", { className: "font-bold text-green-300 mb-2" }, "✓ Usa static per:"),
              React.createElement("ul", { className: "space-y-1 text-sm" },
                React.createElement("li", null, "• Utility methods (Math, Convert)"),
                React.createElement("li", null, "• Factory methods"),
                React.createElement("li", null, "• Funzioni pure (senza stato)")
              )
            ),
            React.createElement("div", null,
              React.createElement("p", { className: "font-bold text-red-300 mb-2" }, "✗ NON usare static per:"),
              React.createElement("ul", { className: "space-y-1 text-sm" },
                React.createElement("li", null, "• Metodi che usano attributi dell'oggetto"),
                React.createElement("li", null, "• Metodi che devono essere overridden"),
                React.createElement("li", null, "• Quando serve polimorfismo")
              )
            )
          )
        )
      )
    )
  },

  // ========== INCAPSULAMENTO (Slide 5-7) ==========

  // Slide 5 - Introduzione Incapsulamento
  {
    title: "Incapsulamento",
    subtitle: "Information Hiding e protezione dei dati",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
          React.createElement("h3", { className: "text-3xl font-bold mb-4 text-cyan-300 flex items-center" },
            React.createElement(Lock, { className: "w-8 h-8 mr-3 text-blue-400" }),
            "Cos'è l'Incapsulamento?"
          ),
          React.createElement("p", { className: "text-xl text-gray-200 leading-relaxed" },
            "L'incapsulamento è il principio di ",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "nascondere"),
            " i dettagli interni di un oggetto e fornire solo un'",
            React.createElement("span", { className: "text-blue-400 font-bold" }, "interfaccia pubblica controllata"),
            " per interagire con esso."
          )
        ),

        React.createElement("div", { className: "grid grid-cols-3 gap-4 mb-6" },
          React.createElement("div", { className: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-500/40 text-center shadow-lg hover:scale-105 transition-transform" },
            React.createElement(Lock, { className: "w-12 h-12 mb-3 text-cyan-400 mx-auto" }),
            React.createElement("h4", { className: "font-bold text-cyan-300 mb-2 text-lg" }, "Information Hiding"),
            React.createElement("p", { className: "text-sm text-gray-300" }, "Dettagli interni nascosti all'esterno")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-xl border-2 border-blue-500/40 text-center shadow-lg hover:scale-105 transition-transform" },
            React.createElement(Eye, { className: "w-12 h-12 mb-3 text-blue-400 mx-auto" }),
            React.createElement("h4", { className: "font-bold text-blue-300 mb-2 text-lg" }, "Interfaccia Pubblica"),
            React.createElement("p", { className: "text-sm text-gray-300" }, "Accesso controllato tramite metodi")
          ),
          React.createElement("div", { className: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-xl border-2 border-cyan-500/40 text-center shadow-lg hover:scale-105 transition-transform" },
            React.createElement(Shield, { className: "w-12 h-12 mb-3 text-cyan-400 mx-auto" }),
            React.createElement("h4", { className: "font-bold text-cyan-300 mb-2 text-lg" }, "Validazione"),
            React.createElement("p", { className: "text-sm text-gray-300" }, "Controllo e protezione dei dati")
          )
        ),

        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Senza Incapsulamento
          React.createElement("div", { className: "bg-gradient-to-br from-red-900/30 to-red-800/20 p-6 rounded-xl border-l-4 border-red-400 shadow-xl" },
            React.createElement("h4", { className: "font-bold text-red-300 mb-4 text-xl flex items-center" },
              React.createElement(XCircle, { className: "w-6 h-6 mr-2" }),
              "Senza Incapsulamento"
            ),
            React.createElement("div", { className: "bg-gray-900 p-4 rounded-lg font-mono text-sm border border-red-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Motore
{
    public int giri;  // Pubblico!
    public double temperatura;

    public void Accelera()
    {
        giri += 1000;
    }
}

// PROBLEMA: accesso diretto
Motore m = new Motore();
m.giri = 15000;        // PERICOLOSO!
m.temperatura = 999;   // BOOM!
// Nessun controllo sui valori!`
              )
            ),
            React.createElement("div", { className: "mt-3 bg-red-900/30 p-3 rounded-lg" },
              React.createElement("p", { className: "text-sm text-red-300 font-bold" },
                "Dati esposti: vulnerabile a modifiche pericolose"
              )
            )
          ),

          // Con Incapsulamento
          React.createElement("div", { className: "bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 rounded-xl border-l-4 border-green-400 shadow-xl" },
            React.createElement("h4", { className: "font-bold text-green-300 mb-4 text-xl flex items-center" },
              React.createElement(CheckCircle, { className: "w-6 h-6 mr-2" }),
              "Con Incapsulamento"
            ),
            React.createElement("div", { className: "bg-gray-900 p-4 rounded-lg font-mono text-sm border border-green-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Motore
{
    private int giri;  // Privato!
    private double temperatura;

    public void Accelera()
    {
        if(giri < 8000)  // Controllo!
            giri += 1000;
    }

    public int GetGiri()
    {
        return giri;  // Solo lettura
    }
}

// Accesso controllato
Motore m = new Motore();
m.Accelera();  // Metodo sicuro
// m.giri = 15000;  // ERRORE COMPILAZIONE!`
              )
            ),
            React.createElement("div", { className: "mt-3 bg-green-900/30 p-3 rounded-lg" },
              React.createElement("p", { className: "text-sm text-green-300 font-bold" },
                "Dati protetti: modifiche solo tramite metodi validati"
              )
            )
          )
        )
      )
    )
  },

  // Slide 6 - Vantaggi Incapsulamento
  {
    title: "Vantaggi dell'Incapsulamento",
    subtitle: "Perché è fondamentale?",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Vantaggio 1: Protezione
          React.createElement("div", { className: "bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-blue-300 flex items-center" },
              React.createElement(Shield, { className: "w-7 h-7 mr-3" }),
              "1. Protezione dei Dati"
            ),
            React.createElement("p", { className: "text-gray-300 mb-4 text-lg" },
              "Previene modifiche accidentali o dannose"
            ),
            React.createElement("div", { className: "bg-gray-900 p-5 rounded-xl font-mono text-sm border border-blue-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Password
{
    private string hash;

    public void ImpostaPassword(string pwd)
    {
        // Validazione
        if(pwd.Length >= 8 &&
           HasUpperCase(pwd) &&
           HasNumber(pwd))
        {
            hash = CalcolaHash(pwd);
        }
        else
            throw new Exception("Password debole");
    }

    // Non espone mai la password!
    public bool Verifica(string pwd)
    {
        return hash == CalcolaHash(pwd);
    }
}`
              )
            )
          ),

          // Vantaggio 2: Flessibilità
          React.createElement("div", { className: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-cyan-300 flex items-center" },
              React.createElement(Code, { className: "w-7 h-7 mr-3" }),
              "2. Flessibilità"
            ),
            React.createElement("p", { className: "text-gray-300 mb-4 text-lg" },
              "Cambiare implementazione interna senza impatto esterno"
            ),
            React.createElement("div", { className: "bg-gray-900 p-5 rounded-xl font-mono text-sm border border-cyan-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`public class Cache
{
    // Posso cambiare struttura dati
    // senza impattare chi usa la classe
    private Dictionary<string, object> data;

    public void Salva(string key, object val)
    {
        data[key] = val;
    }

    public object Recupera(string key)
    {
        return data.ContainsKey(key)
            ? data[key] : null;
    }
}
// L'interfaccia pubblica resta uguale!
// Posso passare da Dictionary a Redis
// senza rompere il codice esistente`
              )
            )
          )
        ),

        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Vantaggio 3: Manutenibilità
          React.createElement("div", { className: "bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 rounded-xl border-l-4 border-green-400 shadow-lg" },
            React.createElement("h3", { className: "text-xl font-bold mb-3 text-green-300 flex items-center" },
              React.createElement(CheckCircle, { className: "w-6 h-6 mr-2" }),
              "3. Manutenibilità"
            ),
            React.createElement("ul", { className: "space-y-2 text-gray-300" },
              React.createElement("li", { className: "flex items-start" },
                React.createElement("span", { className: "text-green-400 mr-2" }, "✓"),
                "Codice più organizzato e leggibile"
              ),
              React.createElement("li", { className: "flex items-start" },
                React.createElement("span", { className: "text-green-400 mr-2" }, "✓"),
                "Modifiche localizzate in un punto"
              ),
              React.createElement("li", { className: "flex items-start" },
                React.createElement("span", { className: "text-green-400 mr-2" }, "✓"),
                "Facilita refactoring e testing"
              )
            )
          ),

          // Vantaggio 4: Controllo
          React.createElement("div", { className: "bg-gradient-to-br from-purple-900/30 to-purple-800/20 p-6 rounded-xl border-l-4 border-purple-400 shadow-lg" },
            React.createElement("h3", { className: "text-xl font-bold mb-3 text-purple-300 flex items-center" },
              React.createElement(Lock, { className: "w-6 h-6 mr-2" }),
              "4. Controllo Centralizzato"
            ),
            React.createElement("ul", { className: "space-y-2 text-gray-300" },
              React.createElement("li", { className: "flex items-start" },
                React.createElement("span", { className: "text-purple-400 mr-2" }, "✓"),
                "Validazione in un unico punto"
              ),
              React.createElement("li", { className: "flex items-start" },
                React.createElement("span", { className: "text-purple-400 mr-2" }, "✓"),
                "Logging e debugging facilitati"
              ),
              React.createElement("li", { className: "flex items-start" },
                React.createElement("span", { className: "text-purple-400 mr-2" }, "✓"),
                "Garantisce invarianti di classe"
              )
            )
          )
        ),

        React.createElement("div", { className: "bg-gradient-to-r from-blue-900/20 to-cyan-900/20 p-6 rounded-xl border-2 border-cyan-500/40" },
          React.createElement("h4", { className: "text-xl font-bold text-cyan-300 mb-3 text-center" },
            "Principio Fondamentale"
          ),
          React.createElement("p", { className: "text-center text-gray-200 text-lg" },
            "\"",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "Hide implementation, expose interface"),
            "\" - Nascondi come funziona, mostra solo cosa fa"
          )
        )
      )
    )
  },

  // Slide 7 - Esempio Pratico Incapsulamento
  {
    title: "Incapsulamento in Pratica",
    subtitle: "Esempio completo: Sistema Bancario",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-gray-900 p-6 rounded-2xl border-2 border-blue-500/40 shadow-2xl" },
          React.createElement("h4", { className: "text-xl font-bold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2" },
            "ContoBancario - Esempio Completo"
          ),
          React.createElement("div", { className: "font-mono text-sm" },
            React.createElement("pre", { className: "text-gray-200" },
`public class ContoBancario
{
    // ============ DATI PRIVATI (nascosti) ============
    private string numeroConto;
    private string intestatario;
    private double saldo;
    private List<string> movimenti;
    private bool bloccato;

    // ============ COSTRUTTORE ============
    public ContoBancario(string numero, string intestatario)
    {
        this.numeroConto = numero;
        this.intestatario = intestatario;
        this.saldo = 0;
        this.movimenti = new List<string>();
        this.bloccato = false;
    }

    // ============ INTERFACCIA PUBBLICA (controllata) ============

    public bool Deposita(double importo)
    {
        if(bloccato)
        {
            Console.WriteLine("Conto bloccato!");
            return false;
        }

        if(importo > 0 && importo <= 10000)  // Validazione
        {
            saldo += importo;
            movimenti.Add($"{DateTime.Now}: DEPOSITO +{importo:C}");
            return true;
        }
        return false;
    }

    public bool Preleva(double importo)
    {
        if(bloccato) return false;

        if(importo > 0 && saldo >= importo && importo <= 500)  // Limiti
        {
            saldo -= importo;
            movimenti.Add($"{DateTime.Now}: PRELIEVO -{importo:C}");
            return true;
        }
        return false;
    }

    // Accesso in sola lettura al saldo (protetto)
    public double GetSaldo()
    {
        return bloccato ? 0 : saldo;
    }

    public string[] GetMovimenti()
    {
        return movimenti.ToArray();  // Copia, non riferimento diretto!
    }

    // ============ METODI PRIVATI (helper) ============

    private void BloccaConto()
    {
        bloccato = true;
        movimenti.Add($"{DateTime.Now}: CONTO BLOCCATO");
    }
}

// ============ UTILIZZO ============
ContoBancario conto = new ContoBancario("IT123456", "Mario Rossi");

conto.Deposita(1000);      // OK
conto.Preleva(200);        // OK
double saldo = conto.GetSaldo();  // Solo lettura

// conto.saldo = 999999;   // ERRORE! Privato - non accessibile
// conto.BloccaConto();    // ERRORE! Metodo privato`
            )
          )
        ),

        React.createElement("div", { className: "grid grid-cols-3 gap-4" },
          React.createElement("div", { className: "bg-red-900/20 p-4 rounded-xl border border-red-500/30 text-center" },
            React.createElement(Lock, { className: "w-8 h-8 mb-2 text-red-400 mx-auto" }),
            React.createElement("p", { className: "text-sm font-bold text-red-300" }, "Dati Privati"),
            React.createElement("p", { className: "text-xs text-gray-400 mt-1" }, "Protetti dall'accesso esterno")
          ),
          React.createElement("div", { className: "bg-green-900/20 p-4 rounded-xl border border-green-500/30 text-center" },
            React.createElement(CheckCircle, { className: "w-8 h-8 mb-2 text-green-400 mx-auto" }),
            React.createElement("p", { className: "text-sm font-bold text-green-300" }, "Metodi Pubblici"),
            React.createElement("p", { className: "text-xs text-gray-400 mt-1" }, "Interfaccia controllata")
          ),
          React.createElement("div", { className: "bg-blue-900/20 p-4 rounded-xl border border-blue-500/30 text-center" },
            React.createElement(Shield, { className: "w-8 h-8 mb-2 text-blue-400 mx-auto" }),
            React.createElement("p", { className: "text-sm font-bold text-blue-300" }, "Validazione"),
            React.createElement("p", { className: "text-xs text-gray-400 mt-1" }, "Controlli di sicurezza")
          )
        )
      )
    )
  },

  // ========== VISIBILITÀ (Slide 8-10) ==========

  // Slide 8 - Modificatori di Visibilità
  {
    title: "Modificatori di Visibilità",
    subtitle: "Access Modifiers in C#",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
          React.createElement("h3", { className: "text-2xl font-bold mb-4 text-cyan-300" },
            "Controllare l'Accesso ai Membri della Classe"
          ),
          React.createElement("p", { className: "text-xl text-gray-200 leading-relaxed" },
            "I modificatori di visibilità determinano ",
            React.createElement("span", { className: "text-cyan-400 font-bold" }, "chi può accedere"),
            " agli attributi e metodi di una classe."
          )
        ),

        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Modificatori
          React.createElement("div", { className: "space-y-4" },
            React.createElement("div", { className: "bg-gradient-to-r from-green-900/30 to-green-800/20 p-5 rounded-xl border-l-4 border-green-400 shadow-lg hover:scale-105 transition-transform" },
              React.createElement("h4", { className: "font-bold text-green-300 mb-2 flex items-center text-xl" },
                React.createElement("span", { className: "text-3xl mr-3 font-mono" }, "+"),
                "public"
              ),
              React.createElement("p", { className: "text-gray-200 text-lg" },
                "Accessibile da ",
                React.createElement("span", { className: "text-green-400 font-bold" }, "qualsiasi codice")
              ),
              React.createElement("p", { className: "text-sm text-gray-400 mt-2 italic" }, "Interfaccia pubblica della classe")
            ),

            React.createElement("div", { className: "bg-gradient-to-r from-red-900/30 to-red-800/20 p-5 rounded-xl border-l-4 border-red-400 shadow-lg hover:scale-105 transition-transform" },
              React.createElement("h4", { className: "font-bold text-red-300 mb-2 flex items-center text-xl" },
                React.createElement("span", { className: "text-3xl mr-3 font-mono" }, "-"),
                "private"
              ),
              React.createElement("p", { className: "text-gray-200 text-lg" },
                "Accessibile solo ",
                React.createElement("span", { className: "text-red-400 font-bold" }, "dalla classe stessa")
              ),
              React.createElement("p", { className: "text-sm text-gray-400 mt-2 italic" }, "Implementazione interna nascosta")
            ),

            React.createElement("div", { className: "bg-gradient-to-r from-yellow-900/30 to-yellow-800/20 p-5 rounded-xl border-l-4 border-yellow-400 shadow-lg hover:scale-105 transition-transform" },
              React.createElement("h4", { className: "font-bold text-yellow-300 mb-2 flex items-center text-xl" },
                React.createElement("span", { className: "text-3xl mr-3 font-mono" }, "#"),
                "protected"
              ),
              React.createElement("p", { className: "text-gray-200 text-lg" },
                "Accessibile dalla classe e ",
                React.createElement("span", { className: "text-yellow-400 font-bold" }, "dalle classi derivate")
              ),
              React.createElement("p", { className: "text-sm text-gray-400 mt-2 italic" }, "Per ereditarietà")
            ),

            React.createElement("div", { className: "bg-gradient-to-r from-blue-900/30 to-blue-800/20 p-5 rounded-xl border-l-4 border-blue-400 shadow-lg hover:scale-105 transition-transform" },
              React.createElement("h4", { className: "font-bold text-blue-300 mb-2 flex items-center text-xl" },
                React.createElement("span", { className: "text-3xl mr-3 font-mono" }, "~"),
                "internal"
              ),
              React.createElement("p", { className: "text-gray-200 text-lg" },
                "Accessibile solo ",
                React.createElement("span", { className: "text-blue-400 font-bold" }, "nello stesso assembly")
              ),
              React.createElement("p", { className: "text-sm text-gray-400 mt-2 italic" }, "Stesso progetto/DLL")
            )
          ),

          // Diagramma UML
          React.createElement("div", { className: "bg-gray-900 p-6 rounded-2xl border-2 border-cyan-500/40 shadow-2xl" },
            React.createElement("h4", { className: "text-xl font-bold mb-4 text-cyan-300 text-center border-b border-cyan-500/30 pb-2" },
              "Notazione UML"
            ),
            React.createElement("svg", { width: "100%", height: "400", className: "bg-gray-800/50 rounded-lg p-4", viewBox: "0 0 350 380" },
              // Box principale
              React.createElement("rect", { x: "25", y: "20", width: "300", height: "340", fill: "#1e3a5f", stroke: "#60a5fa", strokeWidth: "3", rx: "8" }),

              // Header
              React.createElement("text", { x: "175", y: "50", fill: "#93c5fd", fontSize: "22", fontWeight: "bold", textAnchor: "middle" }, "Veicolo"),
              React.createElement("line", { x1: "25", y1: "65", x2: "325", y2: "65", stroke: "#60a5fa", strokeWidth: "3" }),

              // Attributi
              React.createElement("text", { x: "40", y: "95", fill: "#4ade80", fontSize: "18", fontWeight: "bold" }, "+ marca: string"),
              React.createElement("text", { x: "40", y: "125", fill: "#ef4444", fontSize: "18", fontWeight: "bold" }, "- chilometraggio: int"),
              React.createElement("text", { x: "40", y: "155", fill: "#fbbf24", fontSize: "18", fontWeight: "bold" }, "# annoImmatricolazione: int"),
              React.createElement("text", { x: "40", y: "185", fill: "#60a5fa", fontSize: "18", fontWeight: "bold" }, "~ idDatabase: int"),

              React.createElement("line", { x1: "25", y1: "205", x2: "325", y2: "205", stroke: "#60a5fa", strokeWidth: "3" }),

              // Metodi
              React.createElement("text", { x: "40", y: "235", fill: "#4ade80", fontSize: "18", fontWeight: "bold" }, "+ Accelera()"),
              React.createElement("text", { x: "40", y: "265", fill: "#4ade80", fontSize: "18", fontWeight: "bold" }, "+ Frena()"),
              React.createElement("text", { x: "40", y: "295", fill: "#ef4444", fontSize: "18", fontWeight: "bold" }, "- AggiornaDatabase()"),
              React.createElement("text", { x: "40", y: "325", fill: "#fbbf24", fontSize: "18", fontWeight: "bold" }, "# CalcolaUsura()"),
              React.createElement("text", { x: "40", y: "350", fill: "#60a5fa", fontSize: "18", fontWeight: "bold" }, "~ SincronizzaCache()")
            ),

            React.createElement("div", { className: "mt-4 grid grid-cols-2 gap-2 text-xs" },
              React.createElement("div", { className: "flex items-center" },
                React.createElement("span", { className: "text-green-400 font-bold mr-2" }, "+ public"),
                React.createElement("span", { className: "text-gray-400" }, "tutti")
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement("span", { className: "text-red-400 font-bold mr-2" }, "- private"),
                React.createElement("span", { className: "text-gray-400" }, "solo classe")
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement("span", { className: "text-yellow-400 font-bold mr-2" }, "# protected"),
                React.createElement("span", { className: "text-gray-400" }, "+ derivate")
              ),
              React.createElement("div", { className: "flex items-center" },
                React.createElement("span", { className: "text-blue-400 font-bold mr-2" }, "~ internal"),
                React.createElement("span", { className: "text-gray-400" }, "stesso assembly")
              )
            )
          )
        )
      )
    )
  },

  // Slide 9 - Esempi Pratici Visibilità
  {
    title: "Visibilità in Pratica",
    subtitle: "Esempio completo: Sistema di Autenticazione",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "bg-gray-900 p-6 rounded-2xl border-2 border-blue-500/40 shadow-2xl" },
          React.createElement("h4", { className: "text-xl font-bold mb-4 text-cyan-300 border-b border-cyan-500/30 pb-2" },
            "Classe Utente - Tutti i Modificatori"
          ),
          React.createElement("div", { className: "font-mono text-sm" },
            React.createElement("pre", { className: "text-gray-200" },
`public class Utente
{
    // ========== PUBLIC - Accessibile ovunque ==========
    public string Username { get; set; }
    public DateTime UltimoAccesso { get; set; }

    // ========== PRIVATE - Solo nella classe Utente ==========
    private string passwordHash;
    private string salt;
    private const int MAX_TENTATIVI = 3;

    // ========== PROTECTED - Accessibile nelle classi derivate ==========
    protected int tentativiAccesso;
    protected bool accountBloccato;

    // ========== INTERNAL - Accessibile nello stesso assembly ==========
    internal int IdDatabase { get; set; }
    internal DateTime DataCreazione { get; set; }

    // ========== COSTRUTTORE ==========
    public Utente(string username, string password)
    {
        Username = username;
        ImpostaPassword(password);
        tentativiAccesso = 0;
        accountBloccato = false;
        DataCreazione = DateTime.Now;
    }

    // ========== METODI PUBBLICI ==========
    public bool Login(string password)
    {
        if(accountBloccato)
        {
            Console.WriteLine("Account bloccato!");
            return false;
        }

        if(VerificaPassword(password))
        {
            UltimoAccesso = DateTime.Now;
            ResetTentativi();
            return true;
        }
        else
        {
            GestisciLoginFallito();
            return false;
        }
    }

    public void CambiaPassword(string vecchia, string nuova)
    {
        if(VerificaPassword(vecchia))
            ImpostaPassword(nuova);
    }

    // ========== METODI PRIVATI - Logica interna ==========
    private void ImpostaPassword(string password)
    {
        ValidaPassword(password);  // Può lanciare eccezione
        salt = GeneraSalt();
        passwordHash = CalcolaHash(password + salt);
    }

    private bool VerificaPassword(string password)
    {
        return passwordHash == CalcolaHash(password + salt);
    }

    private void ValidaPassword(string pwd)
    {
        if(pwd.Length < 8)
            throw new Exception("Password troppo corta");
        if(!pwd.Any(char.IsUpper))
            throw new Exception("Serve maiuscola");
        if(!pwd.Any(char.IsDigit))
            throw new Exception("Serve numero");
    }

    private string GeneraSalt()
    {
        return Guid.NewGuid().ToString();
    }

    private string CalcolaHash(string input)
    {
        // Logica di hashing
        return input.GetHashCode().ToString();
    }

    private void GestisciLoginFallito()
    {
        tentativiAccesso++;
        if(tentativiAccesso >= MAX_TENTATIVI)
            BloccaAccount();
    }

    // ========== METODI PROTECTED - Per ereditarietà ==========
    protected virtual void BloccaAccount()
    {
        accountBloccato = true;
        Console.WriteLine("Account bloccato dopo troppi tentativi");
    }

    protected void ResetTentativi()
    {
        tentativiAccesso = 0;
    }

    // ========== METODI INTERNAL - Per uso interno assembly ==========
    internal void SincronizzaDatabase()
    {
        // Sincronizza con DB
        Console.WriteLine($"Sync user {IdDatabase} to database");
    }
}`
            )
          )
        ),

        React.createElement("div", { className: "grid grid-cols-4 gap-3" },
          React.createElement("div", { className: "bg-green-900/20 p-3 rounded-lg border border-green-500/30 text-center" },
            React.createElement("div", { className: "text-2xl font-bold text-green-400 mb-1" }, "2"),
            React.createElement("p", { className: "text-xs text-gray-300" }, "public")
          ),
          React.createElement("div", { className: "bg-red-900/20 p-3 rounded-lg border border-red-500/30 text-center" },
            React.createElement("div", { className: "text-2xl font-bold text-red-400 mb-1" }, "9"),
            React.createElement("p", { className: "text-xs text-gray-300" }, "private")
          ),
          React.createElement("div", { className: "bg-yellow-900/20 p-3 rounded-lg border border-yellow-500/30 text-center" },
            React.createElement("div", { className: "text-2xl font-bold text-yellow-400 mb-1" }, "4"),
            React.createElement("p", { className: "text-xs text-gray-300" }, "protected")
          ),
          React.createElement("div", { className: "bg-blue-900/20 p-3 rounded-lg border border-blue-500/30 text-center" },
            React.createElement("div", { className: "text-2xl font-bold text-blue-400 mb-1" }, "3"),
            React.createElement("p", { className: "text-xs text-gray-300" }, "internal")
          )
        )
      )
    )
  },

  // Slide 10 - Best Practices Visibilità
  {
    title: "Best Practices per la Visibilità",
    subtitle: "Linee guida per un design robusto",
    content: (
      React.createElement("div", { className: "space-y-6" },
        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Principio del Minimo Privilegio
          React.createElement("div", { className: "bg-gradient-to-br from-blue-900/30 to-blue-800/20 p-6 rounded-2xl border-l-4 border-blue-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-blue-300 flex items-center" },
              React.createElement(Lock, { className: "w-7 h-7 mr-3" }),
              "Principio del Minimo Privilegio"
            ),
            React.createElement("p", { className: "text-gray-200 mb-4 text-lg" },
              "Usa sempre il livello di visibilità ",
              React.createElement("span", { className: "text-blue-400 font-bold" }, "più restrittivo"),
              " possibile."
            ),
            React.createElement("div", { className: "space-y-3" },
              React.createElement("div", { className: "flex items-start bg-red-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl font-bold" }, "1."),
                React.createElement("span", { className: "text-gray-200" },
                  "Parti sempre da ",
                  React.createElement("code", { className: "text-red-400 bg-gray-900 px-2 py-1 rounded font-bold" }, "private")
                )
              ),
              React.createElement("div", { className: "flex items-start bg-yellow-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl font-bold" }, "2."),
                React.createElement("span", { className: "text-gray-200" },
                  "Passa a ",
                  React.createElement("code", { className: "text-yellow-400 bg-gray-900 px-2 py-1 rounded font-bold" }, "protected"),
                  " se serve ereditarietà"
                )
              ),
              React.createElement("div", { className: "flex items-start bg-blue-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl font-bold" }, "3."),
                React.createElement("span", { className: "text-gray-200" },
                  "Usa ",
                  React.createElement("code", { className: "text-blue-400 bg-gray-900 px-2 py-1 rounded font-bold" }, "internal"),
                  " per collaborazione assembly"
                )
              ),
              React.createElement("div", { className: "flex items-start bg-green-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-blue-400 mr-3 text-xl font-bold" }, "4."),
                React.createElement("span", { className: "text-gray-200" },
                  "Usa ",
                  React.createElement("code", { className: "text-green-400 bg-gray-900 px-2 py-1 rounded font-bold" }, "public"),
                  " solo per interfaccia esterna"
                )
              )
            )
          ),

          // Regole Generali
          React.createElement("div", { className: "bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 p-6 rounded-2xl border-l-4 border-cyan-400 shadow-xl" },
            React.createElement("h3", { className: "text-2xl font-bold mb-4 text-cyan-300 flex items-center" },
              React.createElement(CheckCircle, { className: "w-7 h-7 mr-3" }),
              "Regole Generali"
            ),
            React.createElement("ul", { className: "space-y-3 text-gray-200 text-lg" },
              React.createElement("li", { className: "flex items-start bg-cyan-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "✓"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "Attributi:"),
                  " sempre ",
                  React.createElement("code", { className: "text-red-400" }, "private")
                )
              ),
              React.createElement("li", { className: "flex items-start bg-cyan-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "✓"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "Properties:"),
                  " ",
                  React.createElement("code", { className: "text-green-400" }, "public"),
                  " se necessario"
                )
              ),
              React.createElement("li", { className: "flex items-start bg-cyan-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "✓"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "Metodi helper:"),
                  " sempre ",
                  React.createElement("code", { className: "text-red-400" }, "private")
                )
              ),
              React.createElement("li", { className: "flex items-start bg-cyan-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "✓"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "API pubblica:"),
                  " minima e stabile"
                )
              ),
              React.createElement("li", { className: "flex items-start bg-cyan-900/20 p-3 rounded-lg" },
                React.createElement("span", { className: "text-cyan-400 mr-3 text-xl" }, "✓"),
                React.createElement("div", null,
                  React.createElement("strong", { className: "text-cyan-300" }, "Costanti:"),
                  " ",
                  React.createElement("code", { className: "text-green-400" }, "public const"),
                  " o ",
                  React.createElement("code", { className: "text-red-400" }, "private const")
                )
              )
            )
          )
        ),

        React.createElement("div", { className: "grid grid-cols-2 gap-6" },
          // Cattive Pratiche
          React.createElement("div", { className: "bg-gradient-to-br from-red-900/30 to-red-800/20 p-6 rounded-xl border-l-4 border-red-400 shadow-xl" },
            React.createElement("h3", { className: "text-xl font-bold mb-4 text-red-300 flex items-center" },
              React.createElement(XCircle, { className: "w-6 h-6 mr-2" }),
              "Cattive Pratiche"
            ),
            React.createElement("div", { className: "bg-gray-900 p-4 rounded-lg font-mono text-sm border border-red-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`// MALE: tutto pubblico!
public class ProdottoBad
{
    public double prezzo;
    public int giacenza;
    public string id;

    public void Vendi()
    {
        giacenza--;  // Nessun controllo!
    }
}

// PROBLEMA:
ProdottoBad p = new ProdottoBad();
p.prezzo = -100;      // Negativo!
p.giacenza = 999999;  // Inconsistente!`
              )
            )
          ),

          // Buone Pratiche
          React.createElement("div", { className: "bg-gradient-to-br from-green-900/30 to-green-800/20 p-6 rounded-xl border-l-4 border-green-400 shadow-xl" },
            React.createElement("h3", { className: "text-xl font-bold mb-4 text-green-300 flex items-center" },
              React.createElement(CheckCircle, { className: "w-6 h-6 mr-2" }),
              "Buone Pratiche"
            ),
            React.createElement("div", { className: "bg-gray-900 p-4 rounded-lg font-mono text-sm border border-green-500/30" },
              React.createElement("pre", { className: "text-gray-200" },
`// BENE: incapsulamento corretto
public class ProdottoGood
{
    private double prezzo;
    private int giacenza;
    private string id;

    public bool SetPrezzo(double p)
    {
        if(p > 0)
        {
            prezzo = p;
            return true;
        }
        return false;
    }

    public bool Vendi(int quantita)
    {
        if(giacenza >= quantita)
        {
            giacenza -= quantita;
            return true;
        }
        return false;
    }
}`
              )
            )
          )
        ),

        React.createElement("div", { className: "bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-xl border-2 border-purple-500/40 shadow-xl" },
          React.createElement("h4", { className: "text-xl font-bold text-purple-300 mb-3 text-center flex items-center justify-center" },
            React.createElement(Shield, { className: "w-7 h-7 mr-2" }),
            "Mantra della Visibilità"
          ),
          React.createElement("p", { className: "text-center text-gray-100 text-2xl font-bold" },
            "\"Make it ",
            React.createElement("span", { className: "text-red-400" }, "private"),
            " by default, ",
            React.createElement("span", { className: "text-green-400" }, "public"),
            " by necessity\""
          ),
          React.createElement("p", { className: "text-center text-gray-400 text-sm mt-2 italic" },
            "Privato per default, pubblico per necessità"
          )
        )
      )
    )
  }
];
