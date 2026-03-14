import { PiMathOperations } from "react-icons/pi";

function Operadores() {
    return (
        <section id="operadores" className="bg-blue-950 text-white p-4 sm:p-10 w-full max-w-full sm:max-w-4xl mx-auto rounded-xl mt-6 sm:mt-10 shadow-lg">

            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">
                <PiMathOperations className="inline-block mr-2" />
                Operadores em Programação
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">
                Operadores são símbolos que dizem ao computador como <strong>manipular valores</strong>.
                Eles podem fazer contas, comparar números, combinar condições e até tomar decisões rápidas.
            </p>

            {/* Scroll horizontal para todas as tabelas */}
            <div className="overflow-x-auto">

                {/* Operadores Aritméticos */}
                <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">1 - </span>Operadores Aritméticos</h3>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">Servem para fazer contas matemáticas:</p>
                <table className="table-auto w-full text-left text-gray-300 border-collapse border border-gray-700 mb-6">
                    <thead>
                        <tr>
                            <th className="px-2 py-1 border border-gray-700">Operador</th>
                            <th className="px-2 py-1 border border-gray-700">Significado</th>
                            <th className="px-2 py-1 border border-gray-700">Exemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="px-2 py-1 border border-gray-700">+</td><td className="px-2 py-1 border border-gray-700">Soma</td><td className="px-2 py-1 border border-gray-700">5 + 3 = 8</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">-</td><td className="px-2 py-1 border border-gray-700">Subtração</td><td className="px-2 py-1 border border-gray-700">5 - 3 = 2</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">*</td><td className="px-2 py-1 border border-gray-700">Multiplicação</td><td className="px-2 py-1 border border-gray-700">5 * 3 = 15</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">/</td><td className="px-2 py-1 border border-gray-700">Divisão</td><td className="px-2 py-1 border border-gray-700">6 / 3 = 2</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">%</td><td className="px-2 py-1 border border-gray-700">Resto da divisão</td><td className="px-2 py-1 border border-gray-700">5 % 3 = 2</td></tr>
                    </tbody>
                </table>

                {/* Operadores Relacionais */}
                <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">2 - </span>Operadores Relacionais</h3>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">Servem para comparar valores:</p>
                <table className="table-auto w-full text-left text-gray-300 border-collapse border border-gray-700 mb-6">
                    <thead>
                        <tr>
                            <th className="px-2 py-1 border border-gray-700">Operador</th>
                            <th className="px-2 py-1 border border-gray-700">Significado</th>
                            <th className="px-2 py-1 border border-gray-700">Exemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="px-2 py-1 border border-gray-700">==</td><td className="px-2 py-1 border border-gray-700">Igual</td><td className="px-2 py-1 border border-gray-700">5 == 5 → verdadeiro</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">!=</td><td className="px-2 py-1 border border-gray-700">Diferente</td><td className="px-2 py-1 border border-gray-700">5 != 3 → verdadeiro</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">&gt;</td><td className="px-2 py-1 border border-gray-700">Maior que</td><td className="px-2 py-1 border border-gray-700">5 &gt; 3 → verdadeiro</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">&lt;</td><td className="px-2 py-1 border border-gray-700">Menor que</td><td className="px-2 py-1 border border-gray-700">5 &lt; 3 → falso</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">&gt;=</td><td className="px-2 py-1 border border-gray-700">Maior ou igual</td><td className="px-2 py-1 border border-gray-700">5 &gt;= 5 → verdadeiro</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">&lt;=</td><td className="px-2 py-1 border border-gray-700">Menor ou igual</td><td className="px-2 py-1 border border-gray-700">3 &lt;= 5 → verdadeiro</td></tr>
                    </tbody>
                </table>

                {/* Operadores Lógicos */}
                <h3 className="text-xl font-semibold mb-2"><span className="text-green-300">3 - </span> Operadores Lógicos</h3>
                <p className="text-gray-300 mb-2 text-sm sm:text-base">Servem para combinar condições:</p>
                <table className="table-auto w-full text-left text-gray-300 border-collapse border border-gray-700 mb-6">
                    <thead>
                        <tr>
                            <th className="px-2 py-1 border border-gray-700">Operador</th>
                            <th className="px-2 py-1 border border-gray-700">Significado</th>
                            <th className="px-2 py-1 border border-gray-700">Exemplo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td className="px-2 py-1 border border-gray-700">&&</td><td className="px-2 py-1 border border-gray-700">E (AND)</td><td className="px-2 py-1 border border-gray-700">true && false → falso</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">||</td><td className="px-2 py-1 border border-gray-700">OU (OR)</td><td className="px-2 py-1 border border-gray-700">true || false → verdadeiro</td></tr>
                        <tr><td className="px-2 py-1 border border-gray-700">!</td><td className="px-2 py-1 border border-gray-700">NÃO (NOT)</td><td className="px-2 py-1 border border-gray-700">!true → falso</td></tr>
                    </tbody>
                </table>

            </div>

        </section>
    );
}

export default Operadores;