import { FaRepeat, FaLightbulb } from "react-icons/fa6";


function Loops() {
    return (
        <section
            id="loops"
            className="bg-blue-950 dark:bg-blue-950 text-white dark:text-gray-200 p-6 sm:p-10 max-w-4xl mx-auto rounded-xl mt-10 shadow-lg transition-colors duration-300"
        >
            <h2 className="text-3xl font-bold mb-6 text-center">
                Loops / Laços de Repetição
            </h2>

            <p className="text-gray-300 dark:text-gray-400 mb-6 leading-relaxed">
                <FaRepeat className="inline-block text-cyan-400 mr-2" /> Loops servem para <span className="text-white dark:text-blue-300 font-semibold">repetir ações várias vezes</span> sem precisar escrever o mesmo código várias vezes.<br />
                <FaLightbulb className="inline-block text-yellow-400 mr-2" /> Exemplo: imprimir os números de 1 a 5. Em vez de escrever 5 linhas, podemos usar um loop.
            </p>

            <hr className="border-gray-700 dark:border-gray-600 mb-6" />

            {/* 1 for */}
            <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">1 - </span> Loop <span className="text-cyan-400">for</span></h3>
            <p className="text-gray-300 dark:text-gray-400 mb-2">
                Use o <span className="text-cyan-400">for</span> quando você sabe exatamente quantas vezes quer repetir algo:
            </p>

            <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm mb-4 overflow-x-auto">
                <pre>
                    {`for(int i = 1; i <= 5; i++) {
    printf("%d\\n", i); // imprime 1, 2, 3, 4, 5
}`}
                </pre>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6">O programa conta de 1 até 5 e imprime cada número.</p>

            <hr className="border-gray-700 dark:border-gray-600 mb-6" />

            {/*  while */}
            <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">2 - </span> Loop <span className="text-cyan-400">while</span></h3>
            <p className="text-gray-300 dark:text-gray-400 mb-2">
                Use o <span className="text-cyan-400">while</span> quando você quer repetir algo enquanto a condição for verdadeira:
            </p>

            <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm mb-4 overflow-x-auto">
                <pre>
                    {`int i = 1;
while(i <= 5) {
    printf("%d\\n", i); // imprime 1, 2, 3, 4, 5
    i++;
}`}
                </pre>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6">O programa vai repetir a ação enquanto o número for menor ou igual a 5.</p>

            <hr className="border-gray-700 dark:border-gray-600 mb-6" />

            {/* do...while */}
            <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">3 - </span> Loop <span className="text-cyan-400">do...while</span></h3>
            <p className="text-gray-300 dark:text-gray-400 mb-2">
                O <span className="text-cyan-400">do...while</span> sempre executa pelo menos uma vez e depois verifica:
                - Se a condição for verdadeira → repete.
                - Se for falsa → para.
            </p>

            <div className="bg-gray-900 dark:bg-gray-800 p-4 rounded-lg font-mono text-green-300 text-sm mb-4 overflow-x-auto">
                <pre>
                    {`int i = 1;
do {
    printf("%d\\n", i); // imprime 1, 2, 3, 4, 5
    i++;
} while(i <= 5);`}
                </pre>
            </div>
            <p className="text-gray-300 dark:text-gray-400 mb-6">
                Mesmo se a condição já for falsa, o código dentro do <span className="text-cyan-400">do</span> será executado uma vez.
            </p>
        </section>
    );
}

export default Loops;