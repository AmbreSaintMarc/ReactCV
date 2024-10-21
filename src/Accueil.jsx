import AnchorLink from "react-anchor-link-smooth-scroll";
import "./general.css"
import "./accueil.css"



export default function Accueil() {
    return (
      <div className="Accueil">
        <body>
        <section className="presentation">
            <div className="col-md-12">
                <div id="main-img">
                    <div className="layer"></div>
                    <section className="presentation-text">
                    <h1 className="presentation-text__title">Bonjour, je suis John Doe</h1>
                    <h2 className="presentation-text__sub-text">Développeur web full stack</h2>
                    <AnchorLink href="#About">
                    <button className="presentation-text__button">En savoir plus</button>
                    </AnchorLink>
                </section>
                </div>
            </div>
        </section>

        <section id="About">
            <h3>A propos</h3>
            <p>Lorem Ipsum</p>
            <img src="" alt ="Image d'un homme concentré"></img>
            <img src="" alt="Graphique des compétences"></img>
        </section>
        </body>

        </div>
    );
  }
  