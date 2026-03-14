import Header from "./components/header";
import Hero from "./components/hero";
import Introducao from "./pages/Introducao";
import Variaveis from "./pages/Variaveis";
import Operadores from "./pages/Operadores";
import Condicoes from "./pages/Condicoes";
import EntradaSaida from "./pages/EntradaSaida";
import Loops from "./pages/Loop";
import Footer from "./components/footer";

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Header />
      <Hero />
      
      <Introducao />
      <Variaveis />
      <Operadores />
      <Condicoes />
      <EntradaSaida />
      <Loops />

      <Footer />
    </div>
  );
}

export default App;