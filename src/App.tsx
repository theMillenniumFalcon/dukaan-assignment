import styled from 'styled-components';
import { Footer } from './components/footer/Footer';
import { FreeProductsSection } from './components/freeproductssection/FreeProductsSection';
import { SloganSection } from './components/slogansection/SloganSection';
import { ThreeOptionSection } from './components/threeoptionsection/ThreeOptionSection';
import { TopSection } from './components/topsection/TopSection';

const AppContainer = styled.div`
/* position: relative; */
background-color: #FAFAFA;
`;

function App() {
  return (
    <AppContainer>
      <TopSection />
      <SloganSection />
      <ThreeOptionSection />
      <FreeProductsSection />
      <Footer />
    </AppContainer>
  );
}

export default App;
