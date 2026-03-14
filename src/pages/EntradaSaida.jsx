function EntradaSaida() {
  return (
    <section
      id="io"
      className="bg-blue-950 dark:bg-blue-950 text-white dark:text-gray-200 p-6 sm:p-10 max-w-4xl mx-auto rounded-xl mt-10 shadow-lg transition-colors duration-300"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Entrada, Processamento e Saída
      </h2>

      <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed text-sm sm:text-base">
        Todo programa precisa{" "}
        <span className="text-white dark:text-green-300 font-semibold">receber dados</span>,{" "}
        <span className="text-white dark:text-green-300 font-semibold">processar</span> e depois{" "}
        <span className="text-white dark:text-green-300 font-semibold">mostrar resultados</span>.
      </p>

      {/* 1 - Entrada */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2"><span className="text-green-300">1 - </span> Entrada de Dados</h3>
      <p className="text-gray-300 dark:text-gray-400 mb-2 text-sm sm:text-base">
        Usamos funções como <code className="text-green-300 italic underline">scanf</code> em C para receber dados do usuário:
      </p>

      <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm overflow-x-auto mb-6">
        <pre>
          {`int idade;

printf("Digite sua idade: "); 

scanf("%d", &idade); // recebe o dado`}
        </pre>
      </div>

      <hr className="border-gray-700 dark:border-gray-600 mb-6" />


      {/* 2 Processamento */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2"><span className="text-green-300">2 - </span> Processamento</h3>
      <p className="text-gray-300 dark:text-gray-400 mb-2 text-sm sm:text-base">
        Aqui o programa faz cálculos ou toma decisões:
      </p>

      <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm overflow-x-auto mb-6">
        <pre>
          {`int idade;

scanf("%d", &idade);

if (idade >= 18) {
    printf("Maior de idade");
} else {
    printf("Menor de idade");
}`}
        </pre>
      </div>

      <hr className="border-gray-700 dark:border-gray-600 mb-6" />


      {/* Saída */}
      <h3 className="text-lg sm:text-xl font-semibold mb-2"><span className="text-green-300">3 - </span> Saída de Dados</h3>
      <p className="text-gray-300 dark:text-gray-400 mb-2 text-sm sm:text-base">
        Usamos funções como <code className="text-green-300 italic">printf</code> para mostrar resultados:
      </p>

      <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm overflow-x-auto">
        <pre>{`printf("Você digitou: %d", idade);`}</pre>
      </div>
    </section>
  );
}

export default EntradaSaida;