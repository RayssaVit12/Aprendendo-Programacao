import { FiBox } from "react-icons/fi";

function Variaveis() {
  return (
    <section id="variaveis" className="bg-blue-950 text-white p-4 sm:p-10 w-full max-w-full sm:max-w-4xl mx-auto rounded-xl mt-6 sm:mt-10 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
        <FiBox className="inline-block mr-2" /> Variáveis
      </h2>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
        Variáveis são como <span className="text-white font-semibold">baús</span> que guardam informações na memória do computador. Cada baú tem um <span className="text-white font-semibold">nome</span> e pode guardar diferentes tipos de coisas.
      </p>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
        Imagine que você tem baús chamados <span className="text-white font-semibold">idade</span>, <span className="text-white font-semibold">nome</span> e <span className="text-white font-semibold">altura</span>. Cada um guarda um tipo de dado específico.
      </p>

      <div className="bg-gray-900 p-3 sm:p-4 rounded-lg font-mono text-green-300 text-xs sm:text-sm mb-4 overflow-x-auto">
        Exemplo em C:
        <pre className="mt-2">
{`int idade = 20;       // baú que guarda números inteiros
float altura = 1.75;  // baú que guarda números decimais
char letra = 'A';      // baú que guarda uma letra
char nome[] = "Ana";  // baú que guarda texto`}
        </pre>
      </div>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
        Quando você quer usar o valor guardado, basta usar o <span className="text-white font-semibold">nome do baú</span> no seu programa.
      </p>

      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
        Por exemplo, se quisermos mostrar a idade na tela:
      </p>

      <div className="bg-gray-900 p-3 sm:p-4 rounded-lg font-mono text-green-300 text-xs sm:text-sm mt-4 overflow-x-auto">
        <pre className="mt-2">{`printf("Idade: %d", idade);`}</pre>
      </div>
    </section>
  );
}

export default Variaveis;