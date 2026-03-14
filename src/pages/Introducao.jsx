function Home() {
  return (
    <section className="bg-blue-950 text-white p-4 sm:p-10 w-full max-w-full sm:max-w-4xl mx-auto rounded-xl mt-6 sm:mt-10 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">O que é programação?</h2>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
        Programação é o processo de criar <span className="text-white font-semibold">instruções</span> que dizem ao computador o que ele deve fazer.
      </p>

      <p className="text-gray-300 mb-4 leading-relaxed text-sm sm:text-base">
        Pense no computador como um <span className="text-white font-semibold">robô muito obediente</span>. Ele faz exatamente o que mandamos, mas precisa que tudo seja explicado passo a passo.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
        Quando escrevemos essas instruções usando uma linguagem de programação, estamos criando um <span className="text-white font-semibold">programa</span>.
      </p>

      <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
       Usamos <span className="text-green-300 font-mono">printf</span> para mostrar mensagens na tela:
      </p>

      <div className="bg-gray-900 p-3 sm:p-4 rounded-lg font-mono text-green-300 text-xs sm:text-sm overflow-x-auto">
        Exemplo simples em C:
        <pre className="mt-2">
{`#include <stdio.h>

int main() {
    printf("Olá mundo!");
    return 0;
}`}
        </pre>
      </div>
    </section>
  );
}

export default Home;