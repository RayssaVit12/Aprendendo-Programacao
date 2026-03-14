import { FaArrowRight } from "react-icons/fa6";


function Condicoes() {
  return (
    <section id="condicoes" className="bg-blue-950 dark:bg-blue-950 text-white dark:text-gray-200 p-8 sm:p-10 max-w-4xl mx-auto rounded-xl mt-10 shadow-lg transition-colors duration-300">

      <h2 className="text-3xl font-bold mb-6 text-center">
        Condições em Programação
      </h2>

      <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed">
        Condições permitem que o programa <span className="text-white dark:text-blue-300 font-semibold">decida o que executar</span> dependendo dos valores das variáveis.
      </p>

      <h3 className="text-xl font-semibold mb-2"> <span className="text-green-300">1 - </span>if, else if, else</h3>
      <p className="text-gray-300 dark:text-gray-400 mb-2">
        Permite executar blocos de código diferentes de acordo com uma condição:
      </p>

      <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm mb-6">
        <pre>
          {`int idade;
printf("Digite sua idade: ");
scanf("%d", &idade);

if (idade >= 18) {
    printf("Maior de idade");
} else if (idade >= 13) {
    printf("Adolescente");
} else {
    printf("Criança");
}`}
        </pre>
      </div>

      <p className="text-gray-300 dark:text-gray-400 mb-4 leading-relaxed">
        <span className="text-cyan-400">if </span>significa <span className="text-cyan-400">"se"</span> e so é executada caso a condição seja verdadeira. <span className="text-cyan-400">else if</span> significa <span className="text-cyan-400">"senão se"</span> e é verificada caso a condição do if seja falsa. <span className="text-cyan-400">else</span> significa <span className="text-cyan-400">"senão"</span> e é executada caso todas as condições anteriores sejam falsas.
      </p>

      <hr className="border-gray-700 dark:border-gray-600 mb-6" />

      {/* switch */}
      <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">2 - </span>switch / case</h3>
      <p className="text-gray-300 dark:text-gray-400 mb-2">
        Útil para comparar uma variável com múltiplos valores possíveis:
      </p>

      <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm">
        <pre>
          {`int dia = 3;

switch(dia) {
    case 1:
        printf("Domingo");
        break;
    case 2:
        printf("Segunda-feira");
        break;
    case 3:
        printf("Terça-feira");
        break;
    default:
        printf("Outro dia");
}
`}
        </pre>
      </div>
      <span className="text-green-400 font-semibold"><FaArrowRight className="inline-block mr-2" />Saida:</span> "Terça-feira"

    </section>
  );
}

export default Condicoes;