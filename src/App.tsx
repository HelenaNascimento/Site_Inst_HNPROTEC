import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Plans } from './components/Plans';
import { AutomationAI } from './components/AutomationAI';
import { Technologies } from './components/Technologies';
import { About } from './components/About';
import { Differentials } from './components/Differentials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Plans />
        <AutomationAI />
        <Technologies />
        <section id="treinamentos" className="section-shell">
          <div className="rounded-lg border border-line bg-white/[0.055] p-6 shadow-glow sm:p-8">
            <p className="eyebrow">Treinamentos</p>
            <h2 className="section-title">Capacitação em tecnologia aplicada ao mercado</h2>
            <p className="section-copy">
              Aulas, mentorias e capacitações em programação, banco de dados, inteligência artificial, automação e
              ferramentas digitais para equipes, profissionais e empresas.
            </p>
          </div>
        </section>
        <About />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
