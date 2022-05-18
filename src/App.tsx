import { Footer } from './components/footer/Footer';
import { FreeProductsSection } from './components/freeproductssection/FreeProductsSection';
import { SloganSection } from './components/slogansection/SloganSection';
import { ThreeOptionSection } from './components/threeoptionsection/ThreeOptionSection';
import { TopSection } from './components/topsection/TopSection';

function App() {
  return (
    <>
      <TopSection />
      <SloganSection />
      <ThreeOptionSection />
      <FreeProductsSection />
      <Footer />
    </>
  );
}

export default App;
