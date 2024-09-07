import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer.jsx";
import { About, Contact, Mobile, Home, Rugged, Luxury, Simple} from "./components/pages";
import Van from './components/pages/Van.jsx';
import Clearfilters from './components/pages/Clearfilters.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/contact" element={<Contact />} />

        {/* Van routes */}
        <Route path="/van" element={<Van />}>
          <Route path="clearfilters" element={<Clearfilters />} />
          <Route path="simple" element={<Simple />} />
          <Route path="luxury" element={<Luxury />} />
          <Route path="rugged" element={<Rugged />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
