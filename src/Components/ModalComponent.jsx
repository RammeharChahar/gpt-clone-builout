import React, { useState } from 'react';
import Modal from 'react-modal';
import FeedIcon from '../icons/feed-icon.png';
import XBtnIcon from '../icons/x-btn.png';
import { useMyContext } from "./MyContext";

const ModalComponent = ({ isOpen, closeModal }) => {
    const { feedback, setFeedback  } = useMyContext();
    const [inputData,setInputData] = useState('');

    const handleSubmit = () =>{
        if(inputData){
            setFeedback(inputData);
            closeModal();
        }
    }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      className="custom-modal"
      overlayClassName="custom-overlay"
      ariaHideApp={false}
    >
     <div className='feedback_container'>
        <div className='feedback_top'>
            <div className='feedback_top_left'> 
             <img src={FeedIcon} alt=''/>
             <p className='feedback_top_left_text'>Provide Additional Feedback</p>
            </div>
            <div>
                <button className='feedback_top_left_btn'>
                    <img src={XBtnIcon} alt='' onClick={() => closeModal()}/>
                </button>
            </div>
        </div>
        <input type='text' className='feedback_inputbox' value={inputData} onChange={(e) => setInputData(e.target.value)}/>
        <button className='feedback_submit' onClick={handleSubmit}>Submit</button>
     </div>
    </Modal>
  );
};

export default ModalComponent;
