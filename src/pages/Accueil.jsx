import AnchorLink from "react-anchor-link-smooth-scroll";
import ProgressBar from "./ProgressBar";
import "../general.css"
import "../style/accueil.css"
import "../style/about.css"


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
                            <AnchorLink href="#about">
                            <button className="presentation-text__button">En savoir plus</button>
                            </AnchorLink>
                        </section>
                        </div>
                    </div>
                </section>

                <div id="about">
                    <section className="about__col-1">
                        <h3 className="about__title">A propos</h3>
                        <div className="blue__bar"></div>
                        <p className="about__text">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<b>intégrateur- développeur web</b> au CEF.
                            Au cours de cette formation, j'ai pu acquérir des bases solides pour travaillers dans le domaine du <b>développement web</b>.</p>
                            <p className="about__text">Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <b>développeur web full stack</b>.</p>
                            <p className="about__text"> J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
                    </section>
                    <section className="about__col-2">
                        <div className="about__image" id="about__image"></div>
                        <ProgressBar></ProgressBar>
                    </section>
                </div>
            </body>
        </div>
    );
  }
  