import "../style/scrollbutton.css"
import "../general.css"

const GoTop = (props) => {
  
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">Revenir en haut</button>
      </div>
    </>
  );
};
export default GoTop;


  