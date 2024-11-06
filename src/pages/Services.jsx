import "../general.css";
import "../style/services.css";

function Services() {
    return (
      <div className="services">
        <div className="services__banner"></div>
        <div className="services__title-zone">
          <h1 className="text-uppercase">Mon offre de services</h1>
          <p>Voici les prestations sur lesquelles je peux intervenir.</p>
          <div className="blue-bar"></div>
        </div>

        <div className="services-categories">
          <div className="ux-design">
            <div className="ux-design__image"></div>
            <h2 className="text-uppercase">UX design</h2>
            <p>L'<b>UX Design</b> est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</p>
          </div>

          <div className="web-development">
           <div className="web-development__image"></div>
           <h2 className="text-uppercase">Développement web</h2>
           <p>Le <b>développement de sites web</b> repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP</p>
          </div>

          <div className="seo">
           <div className="seo__image"></div>
            <h2 className="text-uppercase">Référencement</h2>
            <p>Le <b>référencement naturel d'un site</b>, aussi appelé SEO, consiste à mettre des techniques en oeuvre pour <i>améliorer sa position</i> dans les résultats des moteurs de recherche.</p>
          </div>

        </div>
      </div>
    );
  }
  
  export default Services;