import "./Modal.scss";
import React from "react";
import PropTypes from "prop-types";


function Modal({IconComponent, alertBody, buttonAction, actionText, hideCloseButton}){

  // 닫기 버튼 클릭 시 모달창 닫기
  function closeModal(){
    const modal = document.querySelector('.modal');
    modal.style.display = 'none';
  }


  return (
    <>
      <div className="modal">
        <div className="modal__overlay"></div>
        <div className="modal__content">
          <div className="modal__content__icon">
            <IconComponent/>
          </div>
          <div className="modal__content__body">
              <p>{alertBody}</p>
          </div>
          <div className="modal__content__button">
              {!hideCloseButton && <button type="button" className="close" onClick={closeModal}>닫기</button>}
              <button type="button" className="action" onClick={buttonAction}>{actionText}</button>
          </div>
        </div>
      </div>
    </>
  )

}


// propTypes로 props의 타입을 지정해줌
// isRequired는 필수 props로 지정해줌
Modal.propTypes = {

  // 아이콘 컴포넌트
  IconComponent: PropTypes.elementType.isRequired,
  
  // 알림 내용
  alertBody: PropTypes.string.isRequired,
  
  // action 버튼 클릭 시 실행할 함수
  buttonAction: PropTypes.func.isRequired,

  // action 버튼 텍스트
  actionText: PropTypes.string.isRequired,

  // 닫기 버튼 숨김 여부
  hideCloseButton: PropTypes.bool
}



export default Modal; 