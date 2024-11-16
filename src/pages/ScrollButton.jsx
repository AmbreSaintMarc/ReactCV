import "../style/scrollbutton.css"

const GoTop = (props) => {
  
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">
          <i className="goTop__text fas fa-chevron-up" id="goTop__text">
            <div className="goTop__icon"></div>
          </i> 
        </button>
      </div>
    </>
  );
};
export default GoTop;


  