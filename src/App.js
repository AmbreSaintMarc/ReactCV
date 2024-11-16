import { Routes, Route, Link} from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import './style/App.css';
import "./general.css";
import "./icons/fleche-droite.png";
import Accueil from './pages/Accueil';
import Services from './pages/Services';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import MeContacter from './pages/MeContacter';
import Legals from "./pages/Legals";
import Github from "./pages/Github";
import ScrollButton from './pages/ScrollButton';


function App() {
  const [scrollPosition, setSrollPosition] = useState(0);
  const [showGoTop, setshowGoTop] = useState("goTopHidden");
  const handleVisibleButton = () => {
    const position = window.pageYOffset;
    setSrollPosition(position);

    if (scrollPosition > 50) {
      return setshowGoTop("goTop");
    } else if (scrollPosition < 50) {
      return setshowGoTop("goTopHidden");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  });

  const refScrollUp = useRef();
  const handleScrollUp = () => {
    refScrollUp.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="App">
      <div ref={refScrollUp}> </div>
      <header>
        <nav className="d-flex flex-wrap py-3" id="nav">
          <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
           <svg className="bi me-2" width="40" height="32"><use></use></svg>
           <span className="fs-4 text-uppercase" id="nav__title">John Doe</span>
          </a>
          <div className='menu'>
            <ul className="nav nav-pills" id="nav-pills">
              <li className="nav-item text-uppercase"><Link to="/" className="nav-link" id="Accueil">Accueil</Link></li>
              <li className="nav-item text-uppercase"><Link to="/Services" className="nav-link">Services</Link></li>
              <li className="nav-item text-uppercase"><Link to="/Realisations" className="nav-link">Réalisations</Link></li>
              <li className="nav-item text-uppercase"><Link to="/Blog" className="nav-link">Blog</Link></li>
              <li className="nav-item text-uppercase"><Link to="/MeContacter" className="nav-link">Me Contacter</Link></li>
            </ul>
          </div>
          <Dropdown as={NavItem} className='menu-burger'>
          <Dropdown.Toggle as={NavLink}><div className='menu-burger__icon'></div></Dropdown.Toggle>
            <Dropdown.Menu className="nav nav-pills" id="menu-burger__content">
              <Dropdown.Item className="nav-item text-uppercase"><Link to="/" className="nav-link" id="Accueil">Accueil</Link></Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase"><Link to="/Services" className="nav-link">Services</Link></Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase"><Link to="/Realisations" className="nav-link">Réalisations</Link></Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase"><Link to="/Blog" className="nav-link">Blog</Link></Dropdown.Item>
              <Dropdown.Item className="nav-item text-uppercase"><Link to="/MeContacter" className="nav-link">Me Contacter</Link></Dropdown.Item>
            </Dropdown.Menu>
           </Dropdown>
  
        </nav>

      </header>

      <body>
        <ScrollButton showGoTop={showGoTop} scrollUp={handleScrollUp} />
        <Routes>
          <Route path="/" element={<Accueil/>}></Route>
          <Route path="/Services" element={<Services/>}></Route>
          <Route path="/Realisations" element={<Realisations/>}></Route>
          <Route path="/Blog" element={<Blog/>}></Route>
          <Route path="/MeContacter" element={<MeContacter/>}></Route>
          <Route path="/Legals" element={<Legals/>}></Route>
          <Route path="/Github" element={<Github/>}></Route>
        </Routes>
      </body>

      <footer>
        <div className="col mb-3">
          <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
            <svg className="bi me-2" width="40" height="32"><use></use></svg>
          </a>
          <div className='info'>

            <div className='info__john-doe'>
            <h2>John Doe</h2>
              <p>40 rue Laure Diebold 69009 Lyon, France </p>
              <p>Téléphone : 06 20 30 40 50</p>
              <div className='social'>
                <Link to="/Github"><div className='icons__github'></div></Link>
                <a href="https://www.linkedin.com"><div className='icons__linkedin'></div></a>
                <a href="https://x.com"><div className='icons__twitter'></div></a>
              </div>
            </div>

            <div className="col mb-3" id="info-categories">
              <h4>Liens utiles</h4>
              <ul className="nav flex-column">
                <li className="mb-2" id="info-categories__link">
                  <div className="info-arrow"></div>
                  <Link to="/" className="nav-link p-0 text-body-secondary">Accueil</Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <div className="info-arrow"></div>
                  <Link to="/" className="nav-link p-0 text-body-secondary">A propos</Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <div className="info-arrow"></div>
                  <Link to="/Services" className="nav-link p-0 text-body-secondary">Services</Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <div className="info-arrow"></div>
                  <Link to="MeContacter" className="nav-link p-0 text-body-secondary">Me contacter</Link>
                </li>
                <li className="mb-2" id="info-categories__link">
                  <div className="info-arrow"></div>
                  <Link to="/Legals" className="nav-link p-0 text-body-secondary">Mentions légales</Link>
                </li>
              </ul>
            </div>

            <div className="col mb-3" id="info-categories">
              <h4>Mes dernières réalisations</h4>
                <ul className="nav flex-column">
                  <li className="mb-2" id="info-categories__link-realisations">
                    <div className="info-arrow"></div>
                    <Link to="/Realisations" className="nav-link p-0 text-body-secondary">Fresh Food</Link>
                  </li>
                  <li className="mb-2" id="info-categories__link-realisations">
                    <div className="info-arrow"></div>
                    <Link to="/Realisations" className="nav-link p-0 text-body-secondary">Restaurant Akira</Link>
                  </li>
                  <li className="mb-2" id="info-categories__link-realisations">
                    <div className="info-arrow"></div>
                    <Link to="/Realisations" className="nav-link p-0 text-body-secondary">Espace bien-être</Link>
                  </li>
                </ul>
            </div>

            <div className="col mb-3" id="info-categories">
              <h4>Mes derniers articles</h4>
                <ul className="nav flex-column">
                  <li class="mb-2" id="info-categories__link-blog">
                      <div className="info-arrow"></div>
                      <Link to="/Blog" className="nav-link p-0 text-body-secondary">Coder son site en HTML/CSS</Link>
                  </li>
                  <li className="mb-2" id="info-categories__link-blog">
                      <div className="info-arrow"></div>
                      <Link to="/Blog" className="nav-link p-0 text-body-secondary">Vendre ses produits sur le web</Link>
                  </li>
                  <li className="mb-2" id="info-categories__link-blog">
                      <div className="info-arrow"></div>
                      <Link to="/Blog" className="nav-link p-0 text-body-secondary">Se positionner sur Google</Link>
                  </li>
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