import "../general.css";
import "../style/legals.css"
import Accordion from 'react-bootstrap/Accordion';

function Legals() {
    return (
      <div className='legals'>
        <h1 className="text-uppercase">Mentions légales</h1>
        <div className="blue-bar"></div>
        <Accordion className="accordion">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Editeur du site</Accordion.Header>
                <Accordion.Body>
                    <h2 className="legals__h2">John Doe</h2>
                    <div className="accordion__contact">
                        <div className="contact__adress"></div>
                        <p className="adress">40, Rue Laure Diebold 69009 Lyon, France</p>
                        <div className="contact__phone"></div>
                        <a href="06 20 30 40 50" className="phone-number">06 20 30 40 50</a>
                        <div className="contact__mail"></div>
                        <a href="john.doe@gmail.com">john.doe@gmail.com</a>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Hébergeur</Accordion.Header>
                <Accordion.Body>
                    <h2 className="legals__h2">Code Sandbox</h2>
                    <div className="host">
                            <div className="host__adress"></div>
                            <p className="adress">Amsterdam, Pays-Bas</p>
                            <div className="web"></div>
                            <a href="https://codesandbox.io">https://codesandbox.io</a>
                        </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Crédits</Accordion.Header>
                <Accordion.Body>
                <h2 className="legals__h2">Crédits</h2>
                    <div className="accordion__credits">
                        <p>Site développé par John Doe, étudiant du CEF.</p>
                        <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/fr/"> Pixabay</a>.</p>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
      </div>
    );
  }
  
  export default Legals;