import { Routes, Route, Link} from 'react-router-dom';
import './style/App.css';
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import MeContacter from './pages/MeContacter';


function App() {
  return (
    <div className="App">
      <header>
        <nav class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
           <svg class="bi me-2" width="40" height="32"><use></use></svg>
           <span class="fs-4">John Doe</span>
          </a>
  
         <ul class="nav nav-pills">
            <li class="nav-item"><Link to="/" class="nav-link active" aria-current="page">Accueil</Link></li>
            <li class="nav-item"><Link to="/Services" class="nav-link">Services</Link></li>
            <li class="nav-item"><Link to="/Realisations" class="nav-link">Réalisations</Link></li>
            <li class="nav-item"><Link to="/Blog" class="nav-link">Blog</Link></li>
            <li class="nav-item"><Link to="/MeContacter" class="nav-link">Me Contacter</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Realisations" element={<Realisations/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/MeContacter" element={<MeContacter/>}></Route>
        </Routes>
      </header>

      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use></use></svg>
          </a>
          <p class="text-body-secondary">© 2024</p>
        </div>

        <div class="col mb-3">

        </div>

        <div class="col mb-3">
          <h5>Section</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
            <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
          </ul>
        </div>

        <div class="col mb-3">
          <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
        </div>

        <div class="col mb-3">
          <h5>Section</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
              <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
            </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;