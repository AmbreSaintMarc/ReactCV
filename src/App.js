import { Routes, Route, Link} from 'react-router-dom';
import './style/App.css';
import "./general.css";
import "./icons/fleche-droite.png";
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import MeContacter from './pages/MeContacter';
import Legals from "./pages/Legals";

function App() {
  return (
    <div className="App">
      <header>
        <nav class="d-flex flex-wrap justify-content-center py-3 mb-4" id="nav">
          <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
           <svg class="bi me-2" width="40" height="32"><use></use></svg>
           <span class="fs-4 text-uppercase" id="nav__title">John Doe</span>
          </a>
          <div className='burger-menu'>
          <ul class="nav nav-pills" id="nav-pills">
              <li class="nav-item text-uppercase"><Link to="/" class="nav-link" id="Accueil">Accueil</Link></li>
              <li class="nav-item text-uppercase"><Link to="/Services" class="nav-link">Services</Link></li>
              <li class="nav-item text-uppercase"><Link to="/Realisations" class="nav-link">Réalisations</Link></li>
              <li class="nav-item text-uppercase"><Link to="/Blog" class="nav-link">Blog</Link></li>
              <li class="nav-item text-uppercase"><Link to="/MeContacter" class="nav-link">Me Contacter</Link></li>
            </ul>
            </div>
        </nav>

      </header>

      <body>
        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Realisations" element={<Realisations/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/MeContacter" element={<MeContacter/>}></Route>
          <Route path="/Legals" element={<Legals/>}></Route>
        </Routes>
      </body>

      <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
        <div class="col mb-3">
          <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <svg class="bi me-2" width="40" height="32"><use></use></svg>
          </a>
          <div className='info'>
            <div id='info__john-doe'>
            <h3>John Doe</h3>
              <p>40 rue Laure Diebold 69009 Lyon, France Téléphone: 06 20 30 40 50</p>
              <img src="" alt="GitHub icon"></img>
              <img src="" alt="Twitter icon"></img>
              <img src="" alt="LinkedIn icon"></img>
            </div>

            <div class="col mb-3" id="info-categorie1">
              <h5>Liens utiles</h5>
              <ul class="nav flex-column">
                <li class="mb-2" id="info-categories__link">
                  <Link to="/" class="nav-link p-0 text-body-secondary"><div class="info-arrow"></div>Accueil</Link>
                </li>
                <li class="mb-2" id="info-categories__link"><Link to="/" class="nav-link p-0 text-body-secondary">A propos</Link></li>
                <li class="mb-2" id="info-categories__link"><Link to="/Services" class="nav-link p-0 text-body-secondary">Services</Link></li>
                <li class="mb-2" id="info-categories__link"><Link to="MeContacter" class="nav-link p-0 text-body-secondary">Me contacter</Link></li>
                <li class="mb-2" id="info-categories__link"><Link to="/Legals" class="nav-link p-0 text-body-secondary">Mentions légales</Link></li>
              </ul>
            </div>

            <div class="col mb-3" id="info-categories">
              <h5>Mes dernières réalisations</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Fresh Food</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Restaurant Akira</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Espace bien-être</a></li>
                </ul>
            </div>

            <div class="col mb-3" id="info-categories">
              <h5>Mes derniers articles</h5>
                <ul class="nav flex-column">
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Coder son site en HTML/CSS</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Vendre ses produits sur le web</a></li>
                  <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Se positionner sur Google</a></li>
                </ul>
            </div>


          </div>
        </div>

      <div className="credits">
        <p id="text-body-secondary">© Designed by John Doe 2024</p>
      </div>

      </footer>
      
    </div>
  );
}

export default App;