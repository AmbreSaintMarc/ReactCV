import "../style/realisations.css"
import "../general.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Realisations() {
    return (
      <div className="realisations">
        <div className="banner"></div>
        <h1 className="text-uppercase">Portfolio</h1>
        <p>Voici quelques-unes de mes réalisations.</p>
        <div className="blue-bar"></div>

        <div className="realisations__cards">
        
          <Card style={{ width: '20rem' }} className="card">
            <Card.Img variant="top" src="../img/portfolio/fresh-food.jpg" />
            <Card.Body>
              <Card.Title as="h2">Fresh food</Card.Title>
              <Card.Text>
                Réalisation d'un site avec commande en ligne.
              </Card.Text>
              <Button variant="outline-primary">Voir</Button>
            </Card.Body>
            <Card.Header>Site réalisé avec PHP et MySQL</Card.Header>
          </Card>

          <Card style={{ width: '20rem' }} className="card">
            <Card.Img variant="top" src="../img/portfolio/restaurant-japonais.jpg" />
            <Card.Body>
              <Card.Title as="h2">Restaurant Akira</Card.Title>
              <Card.Text>
                Réalisation d'un site vitrine.          
              </Card.Text>
              <Button variant="outline-primary" className="button">Voir</Button>
            </Card.Body>
            <Card.Header>Site réalisé avec Wordpress</Card.Header>
          </Card>

          <Card style={{ width: '20rem' }} className="card">
            <Card.Img variant="top" src="../img/portfolio/espace-bien-etre.jpg" />
            <Card.Body>
              <Card.Title as="h2">Espace bien-être</Card.Title>
              <Card.Text>
                Réalisation d'un site vitrine pour un patricien de bien-être.
              </Card.Text>
              <Button variant="outline-primary">Voir</Button>
            </Card.Body>
            <Card.Header>Site réalisé en HTML/CSS</Card.Header>
          </Card>

        </div>

      </div>
    );
  }
  
  export default Realisations;