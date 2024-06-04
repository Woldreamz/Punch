import Animation from './components/Animation';
import Banner from './components/Banner';
import Comprehensive from './components/CompScreening';
import FeatureLight from './components/FeatureLight';
import Footer from './components/Footer';
import FreqAskQues from './components/FreqAskQues';
import Hero from './components/Hero';
import UnionImg from './assets/union.svg';
import JasonGroove from './components/JasonGroove';
import CenterSpace from './components/marketsquare/CenteSpace';
import './index.css';

function App() {
  return (
    <div>
      <div className="section p-8">
        <Animation animation="fade-in-left">
          <Banner />
        </Animation>
        <Animation animation="fade-in-bottom">
          <Hero />
        </Animation>
      </div>
      <img src={UnionImg} alt="Divider" className="mt-20 w-full" />
      <Animation animation="fade-in-left">
        <CenterSpace />
      </Animation>
      <Animation animation="fade-in-bottom">
        <JasonGroove />
      </Animation>
      <Animation animation="fade-in-left">
        <Comprehensive />
      </Animation>
      <Animation animation="fade-in-bottom">
        <FeatureLight />
      </Animation>
      <Animation animation="fade-in-left">
        <FreqAskQues />
      </Animation>
      <Footer />
    </div>
  )
}

export default App