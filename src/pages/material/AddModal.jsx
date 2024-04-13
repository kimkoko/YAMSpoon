import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from './AddModal.module.scss'
import MaterialBar from "./MaterialBar";
import ReactDOM from 'react-dom';
import Delete from "../../components/Icons/Delete";

const AddModal = ({closeModal, handleAddAction}) => {
  const [ materials, setMaterials ] = useState([])

  const handleMaterialSelect = (material) => {
    if (materials.includes(material)) return
    setMaterials([...materials, material])
  }
    
    return ReactDOM.createPortal(
        <div className={styles['modal']}>
        <div className={styles['modal__overlay']}></div>
        <div className={styles["modal__content"]}>
          <div className={styles["modal__content__title"]}>
            <p>재료 추가하기</p>
          </div>
          <div className={styles["modal__content__body"]}>
              <MaterialBar handleMaterialSelect={handleMaterialSelect}/>
              <ListBeforeAdd materials={materials} setMaterials={setMaterials}/>
          </div>
          <div className={styles["modal__content__button"]}>
              <button type="button" className={styles["action"]} onClick={closeModal}>닫기</button>
              <button type="button" 
                className={styles["action"]} 
                onClick={() => {handleAddAction(materials); closeModal();}}
              >
                추가하기
              </button>
          </div>
        </div>
      </div>, document.body
    )
}

const ListBeforeAdd = ({materials, setMaterials}) => {
  if (!materials) return
  
  const handleDeleteClick = (index) => {
    const newArr = materials.filter((_, idx) => idx !== index);
    setMaterials(newArr)
  };
  
  return (
    <div className={styles['select-container']}>
      <div className={styles['select-tap-container']}>
        { materials.map((item, idx) => (
          <div key={idx} className={styles['select-item']}>
            <button className={styles['select-button']}>{item}</button>
            <button className={styles['delete-button']} onClick={() => handleDeleteClick(idx)}><Delete /></button>
          </div>
        )) }
      </div>
    </div>
  )
}

AddModal.propTypes = {
  closeModal: PropTypes.func,
}

ListBeforeAdd.propTypes ={
  setMaterials: PropTypes.func,
  materials: PropTypes.array
}

export default AddModal