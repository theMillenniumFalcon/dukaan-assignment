import styled from 'styled-components';
import { Footer } from './components/footer/Footer';
import { FreeProductsSection } from './components/freeproductssection/FreeProductsSection';
import { Navbar } from './components/navbar/Navbar';
import { SloganSection } from './components/slogansection/SloganSection';
import { ThreeOptionSection } from './components/threeoptionsection/ThreeOptionSection';

const AppContainer = styled.div`
background-color: #FAFAFA;
`;

function App() {
  return (
    <AppContainer>
      <Navbar />
      <SloganSection />
      <ThreeOptionSection />
      <FreeProductsSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
