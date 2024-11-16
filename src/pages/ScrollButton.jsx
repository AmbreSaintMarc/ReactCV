import "../style/scrollbutton.css"

const GoTop = (props) => {
  
  return (
    <>
      <div className={props.showGoTop} onClick={props.scrollUp}>
        <button className="goTop">
          <div id="goTop__text">
            <i className="goTop__text fas fa-chevron-up" id="goTop__content">
           </i> 
          </div>
        </button>
      </div>
    </>
  );
};
export default GoTop;


  