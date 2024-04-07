import React from "react";
import PropTypes from "prop-types";
import styles from './AddModal.module.scss'
import MaterialBar from "./MaterialBar";

const AddModal = ({closeModal}) => {
    const handleCloseModal = () => {
        console.log("Close modal function called");
        closeModal(); // closeModal 함수 호출
    };
    return (
        <div className={styles['modal']}>
        <div className={styles['modal__overlay']}></div>
        <div className={styles["modal__content"]}>
          <div className={styles["modal__content__title"]}>
            <p>재료 추가하기</p>
          </div>
          <div className={styles["modal__content__body"]}>
              <MaterialBar />
          </div>
          <div className={styles["modal__content__button"]}>
              <button type="button" className={styles["action"]} onClick={handleCloseModal}>닫기</button>
          </div>
        </div>
      </div>
    )
}

AddModal.propTypes = {
    closeModal: PropTypes.func,
}

export default AddModal