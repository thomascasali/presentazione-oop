// ========================================
// QUIZ MODULO 4: EREDITARIETA' E POLIMORFISMO
// ========================================
// Quiz scelta multipla, esercizi codice, flashcards e discussione

// No custom icons needed - this quiz uses emojis and HTML radio buttons

const ereditarietaQuizSlide = {
  isQuiz: true,
  title: "Quiz: Ereditarieta e Polimorfismo",
  subtitle: "Verifica le tue conoscenze",
  content: (
    <div className="space-y-8">

      {/* ===================================== */}
      {/* SEZIONE 1: QUIZ A SCELTA MULTIPLA */}
      {/* ===================================== */}
      <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-xl border-2 border-purple-400/50">
        <h3 className="text-3xl font-bold mb-6 text-purple-300 flex items-center gap-3">
          <span className="text-4xl">❓</span> Quiz a Scelta Multipla
        </h3>

        {/* Domanda 1 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-blue-400">
          <p className="text-lg font-bold text-blue-300 mb-3">1. Quale keyword permette ad una classe di ereditare da un'altra classe in C#?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q1" value="a" className="w-4 h-4"/>
              <span>A) extends</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q1" value="b" className="w-4 h-4"/>
              <span>B) implements</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q1" value="c" className="w-4 h-4"/>
              <span>C) : (due punti)</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q1" value="d" className="w-4 h-4"/>
              <span>D) inherits</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer1">
            <p className="text-green-300">✓ Risposta corretta: C) : (due punti)</p>
            <p className="text-sm text-gray-300">In C# si usa la sintassi: <code>public class Derivata : Base</code></p>
          </div>
        </div>

        {/* Domanda 2 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-cyan-400">
          <p className="text-lg font-bold text-cyan-300 mb-3">2. Quante classi base puo ereditare una classe in C#?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q2" value="a" className="w-4 h-4"/>
              <span>A) Nessuna</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q2" value="b" className="w-4 h-4"/>
              <span>B) Una sola</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q2" value="c" className="w-4 h-4"/>
              <span>C) Due</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q2" value="d" className="w-4 h-4"/>
              <span>D) Illimitate</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer2">
            <p className="text-green-300">✓ Risposta corretta: B) Una sola</p>
            <p className="text-sm text-gray-300">C# non supporta ereditarieta multipla (ma supporta multiple interfacce)</p>
          </div>
        </div>

        {/* Domanda 3 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-purple-400">
          <p className="text-lg font-bold text-purple-300 mb-3">3. Quale keyword si usa per ridefinire un metodo virtual nella classe derivata?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q3" value="a" className="w-4 h-4"/>
              <span>A) redefine</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q3" value="b" className="w-4 h-4"/>
              <span>B) override</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q3" value="c" className="w-4 h-4"/>
              <span>C) new</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q3" value="d" className="w-4 h-4"/>
              <span>D) virtual</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer3">
            <p className="text-green-300">✓ Risposta corretta: B) override</p>
            <p className="text-sm text-gray-300">La keyword 'override' indica che si sta ridefinendo un metodo virtual della classe base</p>
          </div>
        </div>

        {/* Domanda 4 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-blue-400">
          <p className="text-lg font-bold text-blue-300 mb-3">4. Cos'e il polimorfismo runtime?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q4" value="a" className="w-4 h-4"/>
              <span>A) Method overloading (stesso nome, parametri diversi)</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q4" value="b" className="w-4 h-4"/>
              <span>B) Method overriding (ridefinizione metodi virtual)</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q4" value="c" className="w-4 h-4"/>
              <span>C) Casting tra tipi</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q4" value="d" className="w-4 h-4"/>
              <span>D) Generics</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer4">
            <p className="text-green-300">✓ Risposta corretta: B) Method overriding</p>
            <p className="text-sm text-gray-300">Il polimorfismo runtime si ottiene tramite override di metodi virtual, risolto durante l'esecuzione</p>
          </div>
        </div>

        {/* Domanda 5 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-cyan-400">
          <p className="text-lg font-bold text-cyan-300 mb-3">5. Quale operatore verifica il tipo di un oggetto senza sollevare eccezioni?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q5" value="a" className="w-4 h-4"/>
              <span>A) typeof</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q5" value="b" className="w-4 h-4"/>
              <span>B) instanceof</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q5" value="c" className="w-4 h-4"/>
              <span>C) is</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q5" value="d" className="w-4 h-4"/>
              <span>D) cast</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer5">
            <p className="text-green-300">✓ Risposta corretta: C) is</p>
            <p className="text-sm text-gray-300">L'operatore 'is' verifica se un oggetto e di un certo tipo e ritorna bool</p>
          </div>
        </div>

        {/* Domanda 6 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-purple-400">
          <p className="text-lg font-bold text-purple-300 mb-3">6. Cosa restituisce l'operatore 'as' se il cast fallisce?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q6" value="a" className="w-4 h-4"/>
              <span>A) Lancia un'eccezione</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q6" value="b" className="w-4 h-4"/>
              <span>B) Ritorna null</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q6" value="c" className="w-4 h-4"/>
              <span>C) Ritorna false</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q6" value="d" className="w-4 h-4"/>
              <span>D) Ritorna l'oggetto originale</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer6">
            <p className="text-green-300">✓ Risposta corretta: B) Ritorna null</p>
            <p className="text-sm text-gray-300">L'operatore 'as' e sicuro: ritorna null se il cast non riesce, senza lanciare eccezioni</p>
          </div>
        </div>

        {/* Domanda 7 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-4 border-l-4 border-blue-400">
          <p className="text-lg font-bold text-blue-300 mb-3">7. Qual e il modificatore di accesso corretto per membri che devono essere accessibili nelle classi derivate?</p>
          <div className="space-y-2 ml-4">
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q7" value="a" className="w-4 h-4"/>
              <span>A) private</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q7" value="b" className="w-4 h-4"/>
              <span>B) public</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q7" value="c" className="w-4 h-4"/>
              <span>C) protected</span>
            </label>
            <label className="flex items-center gap-3 text-gray-300 hover:text-white cursor-pointer">
              <input type="radio" name="q7" value="d" className="w-4 h-4"/>
              <span>D) internal</span>
            </label>
          </div>
          <div className="mt-3 p-3 bg-green-900/20 rounded border border-green-500/30 hidden" id="answer7">
            <p className="text-green-300">✓ Risposta corretta: C) protected</p>
            <p className="text-sm text-gray-300">'protected' permette accesso alla classe base e a tutte le classi derivate</p>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* SEZIONE 2: ESERCIZI DI CODICE */}
      {/* ===================================== */}
      <div className="bg-gradient-to-r from-blue-900/30 to-cyan-900/30 p-6 rounded-xl border-2 border-blue-400/50">
        <h3 className="text-3xl font-bold mb-6 text-blue-300 flex items-center gap-3">
          <span className="text-4xl">💻</span> Esercizi di Completamento Codice
        </h3>

        {/* Esercizio 1 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-6 border-2 border-cyan-500/50">
          <p className="text-xl font-bold text-cyan-300 mb-3">Esercizio 1: Completa la classe derivata</p>
          <p className="text-gray-300 mb-4">Completa il codice della classe Gatto che eredita da Animale:</p>
          <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm border border-gray-700">
            <pre className="text-gray-300">
{`public class Animale
{
    protected string nome;
    protected int eta;

    public Animale(string nome, int eta)
    {
        this.nome = nome;
        this.eta = eta;
    }

    public virtual void FaiVerso()
    {
        Console.WriteLine("Verso generico");
    }
}

public class Gatto ___ Animale  // 1. Completa qui
{
    private string colore;

    public Gatto(string nome, int eta, string colore)
        ___ ___(nome, eta)  // 2. Completa qui per chiamare costruttore base
    {
        this.colore = colore;
    }

    public ___ void FaiVerso()  // 3. Completa qui per ridefinire il metodo
    {
        Console.WriteLine($"{nome} fa MIAO!");
    }

    public void Graffia()
    {
        Console.WriteLine($"{nome} graffia!");
    }
}`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-green-900/20 rounded border border-green-500/30 hidden" id="code-answer1">
            <p className="text-green-300 font-bold mb-2">✓ Soluzione:</p>
            <div className="bg-gray-950 p-3 rounded font-mono text-sm">
              <pre className="text-green-300">
{`1. : (due punti)
2. : base
3. override`}
              </pre>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              La sintassi completa: <code>public class Gatto : Animale</code>,
              <code>: base(nome, eta)</code> per chiamare il costruttore base,
              e <code>public override void FaiVerso()</code> per ridefinire il metodo.
            </p>
          </div>
        </div>

        {/* Esercizio 2 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-6 border-2 border-purple-500/50">
          <p className="text-xl font-bold text-purple-300 mb-3">Esercizio 2: Implementa il polimorfismo</p>
          <p className="text-gray-300 mb-4">Completa il codice per implementare il polimorfismo correttamente:</p>
          <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm border border-gray-700">
            <pre className="text-gray-300">
{`public class Forma
{
    public ___ double CalcolaArea()  // 1. Rendi il metodo ridefinibile
    {
        return 0;
    }
}

public class Rettangolo : Forma
{
    private double larghezza;
    private double altezza;

    public Rettangolo(double l, double a)
    {
        larghezza = l;
        altezza = a;
    }

    public ___ double CalcolaArea()  // 2. Ridefinisci il metodo
    {
        return larghezza * altezza;
    }
}

public class Cerchio : Forma
{
    private double raggio;

    public Cerchio(double r)
    {
        raggio = r;
    }

    public override double CalcolaArea()
    {
        return Math.PI * raggio * raggio;
    }
}

// Utilizzo - Completa
___ f1 = new Rettangolo(5, 10);  // 3. Che tipo usare?
___ f2 = new Cerchio(7);         // 4. Che tipo usare?

Console.WriteLine(f1.CalcolaArea());  // Output: 50
Console.WriteLine(f2.CalcolaArea());  // Output: 153.94...`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-green-900/20 rounded border border-green-500/30 hidden" id="code-answer2">
            <p className="text-green-300 font-bold mb-2">✓ Soluzione:</p>
            <div className="bg-gray-950 p-3 rounded font-mono text-sm">
              <pre className="text-green-300">
{`1. virtual
2. override
3. Forma (polimorfismo - tipo base)
4. Forma (polimorfismo - tipo base)`}
              </pre>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              Il metodo deve essere 'virtual' nella base e 'override' nelle derivate.
              Per il polimorfismo, usiamo il tipo base (Forma) per le variabili!
            </p>
          </div>
        </div>

        {/* Esercizio 3 */}
        <div className="bg-gray-900 p-5 rounded-lg mb-6 border-2 border-pink-500/50">
          <p className="text-xl font-bold text-pink-300 mb-3">Esercizio 3: Casting sicuro</p>
          <p className="text-gray-300 mb-4">Completa il codice usando gli operatori 'is' e 'as' correttamente:</p>
          <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm border border-gray-700">
            <pre className="text-gray-300">
{`public class Dipendente
{
    public string Nome { get; set; }
    public double Stipendio { get; set; }
}

public class Manager : Dipendente
{
    public double Bonus { get; set; }
    public void AssegnaBonus(double importo) { Bonus = importo; }
}

public class Programmatore : Dipendente
{
    public string Linguaggio { get; set; }
    public void Programma() { Console.WriteLine($"Programmando in {Linguaggio}"); }
}

// Lista eterogenea
List<Dipendente> azienda = new List<Dipendente>
{
    new Manager { Nome = "Alice", Stipendio = 5000, Bonus = 1000 },
    new Programmatore { Nome = "Bob", Stipendio = 3000, Linguaggio = "C#" },
    new Dipendente { Nome = "Charlie", Stipendio = 2000 }
};

// Elabora i dipendenti
foreach(Dipendente d in azienda)
{
    Console.WriteLine($"{d.Nome}: {d.Stipendio}");

    // 1. Verifica se e un Manager e assegna bonus extra
    if(d ___ Manager)  // Completa con operatore corretto
    {
        Manager m = d ___ Manager;  // 2. Cast sicuro
        if(m != null)
        {
            m.AssegnaBonus(500);
            Console.WriteLine($"  Bonus totale: {m.Bonus}");
        }
    }

    // 3. Verifica se e Programmatore con pattern matching
    if(d ___ Programmatore prog)  // Completa qui
    {
        prog.Programma();
    }
}`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-green-900/20 rounded border border-green-500/30 hidden" id="code-answer3">
            <p className="text-green-300 font-bold mb-2">✓ Soluzione:</p>
            <div className="bg-gray-950 p-3 rounded font-mono text-sm">
              <pre className="text-green-300">
{`1. is
2. as
3. is`}
              </pre>
            </div>
            <p className="text-sm text-gray-300 mt-2">
              'is' per verificare il tipo, 'as' per cast sicuro (ritorna null se fallisce).
              Il pattern matching <code>if(d is Programmatore prog)</code> combina verifica e cast!
            </p>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* SEZIONE 3: FLASHCARDS TERMINI CHIAVE */}
      {/* ===================================== */}
      <div className="bg-gradient-to-r from-cyan-900/30 to-teal-900/30 p-6 rounded-xl border-2 border-cyan-400/50">
        <h3 className="text-3xl font-bold mb-6 text-cyan-300 flex items-center gap-3">
          <span className="text-4xl">🎴</span> Flashcards - Termini Chiave
        </h3>

        <div className="grid grid-cols-2 gap-4">
          {/* Flashcard 1 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-blue-400/50 hover:border-blue-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-300 mb-3">Classe Base</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Classe da cui altre classi ereditano proprieta e metodi. Chiamata anche <strong>superclasse</strong> o <strong>parent class</strong>.</p>
                <p className="mt-2 text-blue-400">Esempio: <code>Animale</code> e classe base per <code>Cane</code> e <code>Gatto</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 2 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-cyan-400/50 hover:border-cyan-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-cyan-300 mb-3">Classe Derivata</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Classe che eredita da una classe base. Chiamata anche <strong>sottoclasse</strong> o <strong>child class</strong>.</p>
                <p className="mt-2 text-cyan-400">Esempio: <code>Cane</code> e classe derivata di <code>Animale</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 3 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-purple-400/50 hover:border-purple-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-purple-300 mb-3">virtual</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Keyword che indica che un metodo puo essere ridefinito nelle classi derivate tramite override.</p>
                <p className="mt-2 text-purple-400"><code>public virtual void Metodo()</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 4 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-pink-400/50 hover:border-pink-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-pink-300 mb-3">override</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Keyword che ridefinisce un metodo virtual della classe base, fornendo una nuova implementazione.</p>
                <p className="mt-2 text-pink-400"><code>public override void Metodo()</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 5 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-blue-400/50 hover:border-blue-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-300 mb-3">base</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Keyword per accedere a membri della classe base da una classe derivata.</p>
                <p className="mt-2 text-blue-400"><code>base.Metodo()</code> o <code>: base(param)</code> nel costruttore</p>
              </div>
            </div>
          </div>

          {/* Flashcard 6 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-cyan-400/50 hover:border-cyan-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-cyan-300 mb-3">abstract</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Classe o metodo incompleto che deve essere implementato nelle classi derivate. Le classi abstract non possono essere istanziate.</p>
                <p className="mt-2 text-cyan-400"><code>public abstract class Forma</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 7 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-purple-400/50 hover:border-purple-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-purple-300 mb-3">sealed</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Keyword che impedisce ad altre classi di ereditare da questa classe o impedisce l'override di un metodo.</p>
                <p className="mt-2 text-purple-400"><code>public sealed class ClasseFinale</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 8 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-pink-400/50 hover:border-pink-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-pink-300 mb-3">protected</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Modificatore di accesso: membro accessibile nella classe stessa e in tutte le classi derivate.</p>
                <p className="mt-2 text-pink-400"><code>protected string nome;</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 9 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-green-400/50 hover:border-green-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-green-300 mb-3">Upcasting</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Conversione implicita da classe derivata a classe base. Sempre sicura.</p>
                <p className="mt-2 text-green-400"><code>Animale a = new Cane();</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 10 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-orange-400/50 hover:border-orange-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-orange-300 mb-3">Downcasting</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Conversione esplicita da classe base a classe derivata. Richiede 'as' o 'is' per sicurezza.</p>
                <p className="mt-2 text-orange-400"><code>Cane c = a as Cane;</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 11 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-blue-400/50 hover:border-blue-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-blue-300 mb-3">Overloading</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Polimorfismo compile-time: stesso nome metodo, parametri diversi. Risolto dal compilatore.</p>
                <p className="mt-2 text-blue-400"><code>Somma(int, int)</code> vs <code>Somma(double, double)</code></p>
              </div>
            </div>
          </div>

          {/* Flashcard 12 */}
          <div className="bg-gray-900 p-5 rounded-lg border-2 border-cyan-400/50 hover:border-cyan-400 transition-colors cursor-pointer">
            <div className="text-center">
              <p className="text-xl font-bold text-cyan-300 mb-3">Overriding</p>
              <div className="text-sm text-gray-300 border-t border-gray-700 pt-3">
                <p>Polimorfismo runtime: ridefinizione metodi virtual con stessa firma. Risolto a runtime.</p>
                <p className="mt-2 text-cyan-400"><code>public override void Metodo()</code></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================== */}
      {/* SEZIONE 4: BACHECA DISCUSSIONE */}
      {/* ===================================== */}
      <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 p-6 rounded-xl border-2 border-green-400/50">
        <h3 className="text-3xl font-bold mb-6 text-green-300 flex items-center gap-3">
          <span className="text-4xl">💬</span> Bacheca Discussione
        </h3>

        <div className="space-y-4">
          {/* Domanda di discussione 1 */}
          <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-green-400">
            <h4 className="text-xl font-bold text-green-300 mb-3">🤔 Quando usare l'ereditarieta vs composizione?</h4>
            <p className="text-gray-300 mb-3">
              L'ereditarieta rappresenta una relazione "e un" (is-a), mentre la composizione rappresenta "ha un" (has-a).
              Quando preferiresti l'una rispetto all'altra? Discuti con esempi concreti!
            </p>
            <div className="bg-gray-950 p-4 rounded border border-gray-700">
              <p className="text-sm text-gray-400 italic">
                Esempio: Un Cane "e un" Animale (ereditarieta), ma un Cane "ha una" Coda (composizione).
              </p>
            </div>
          </div>

          {/* Domanda di discussione 2 */}
          <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-cyan-400">
            <h4 className="text-xl font-bold text-cyan-300 mb-3">🎭 Vantaggi e svantaggi del polimorfismo</h4>
            <p className="text-gray-300 mb-3">
              Il polimorfismo rende il codice piu flessibile ma puo renderlo meno leggibile.
              Quali sono secondo te i principali vantaggi e svantaggi? In quali scenari e indispensabile?
            </p>
            <div className="bg-gray-950 p-4 rounded border border-gray-700">
              <p className="text-sm text-gray-400 italic">
                Pensa a: manutenibilita, estensibilita, performance, debugging, leggibilita del codice.
              </p>
            </div>
          </div>

          {/* Domanda di discussione 3 */}
          <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-purple-400">
            <h4 className="text-xl font-bold text-purple-300 mb-3">🔒 Classi sealed: quando e perche?</h4>
            <p className="text-gray-300 mb-3">
              C# permette di dichiarare classi 'sealed' che non possono essere ereditate.
              In quali situazioni useresti questa funzionalita? Quali sono i vantaggi?
            </p>
            <div className="bg-gray-950 p-4 rounded border border-gray-700">
              <p className="text-sm text-gray-400 italic">
                Suggerimento: sicurezza, performance, design intent, API stabili.
              </p>
            </div>
          </div>

          {/* Domanda di discussione 4 */}
          <div className="bg-gray-900 p-5 rounded-lg border-l-4 border-blue-400">
            <h4 className="text-xl font-bold text-blue-300 mb-3">⚠️ Problema del Diamond (ereditarieta multipla)</h4>
            <p className="text-gray-300 mb-3">
              C# non supporta ereditarieta multipla proprio per evitare il "Diamond Problem".
              Riesci a spiegare cos'e questo problema? Come lo risolvono le interfacce?
            </p>
            <div className="bg-gray-950 p-4 rounded border border-gray-700">
              <p className="text-sm text-gray-400 italic">
                Esempio: Se classe C eredita da A e B, e sia A che B hanno un metodo Foo(), quale versione eredita C?
              </p>
            </div>
          </div>

          {/* Sfida pratica */}
          <div className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 p-5 rounded-lg border-2 border-yellow-400/50">
            <h4 className="text-xl font-bold text-yellow-300 mb-3 flex items-center gap-2">
              <span className="text-2xl">🏆</span> Sfida Pratica
            </h4>
            <p className="text-gray-300 mb-3">
              Progetta un sistema di gestione per una biblioteca con le seguenti classi:
            </p>
            <ul className="text-gray-300 space-y-2 ml-5 mb-3">
              <li>• <strong>MediaItem</strong> (classe base): titolo, anno, disponibile</li>
              <li>• <strong>Libro</strong> (derivata): autore, ISBN, numeroPagine</li>
              <li>• <strong>DVD</strong> (derivata): regista, durata</li>
              <li>• <strong>Rivista</strong> (derivata): numeroEdizione, mese</li>
            </ul>
            <p className="text-gray-300">
              Implementa metodi virtual/override per: <code>StampaInfo()</code>, <code>CalcolaMulta()</code> (in base ai giorni di ritardo).
              Usa il polimorfismo per gestire una collezione eterogenea di tutti i media!
            </p>
          </div>
        </div>
      </div>

      {/* Bottone mostra risposte (interattivo) */}
      <div className="text-center">
        <button
          className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-xl text-lg shadow-lg transform hover:scale-105 transition-transform"
          onclick="document.querySelectorAll('[id^=answer], [id^=code-answer]').forEach(el => el.classList.toggle('hidden'))"
        >
          Mostra/Nascondi Tutte le Risposte
        </button>
      </div>
    </div>
  )
};
