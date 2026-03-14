import hero from "../assets/hero.png";

function Hero() {
  return (
    <section id="introducao" className="w-full h-[300px] sm:h-[350px] bg-black flex items-center justify-center relative">
      <img
        src={hero}
        className="absolute w-full h-full object-cover opacity-40"
      />

      <div className="relative text-center px-4 sm:px-0">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">Aprenda Programação</h2>
        <p className="text-gray-300 mt-2 text-sm sm:text-base">
          Logica de programação, variáveis, operadores e muito mais! Tudo explicado de forma mais simples.
        </p>
      </div>
    </section>
  );
}

export default Hero;