import React from 'react'
import Modal from 'react-modal';

import "./App.css"
const ModalPrev = ({ lableName, textFieldData, fieldLableData = [], toggleModal, modalOpen }) => {
    Modal.setAppElement('#root');
    return (
        <div>
            <Modal
                isOpen={modalOpen}
                onRequestClose={toggleModal}
            >
                <button onClick={toggleModal}>close</button>
                <h1>{lableName}</h1>
                <form onSubmit={toggleModal}>
                    <div>
                        {textFieldData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <label>
                                        {item.label}
                                        <br />
                                        <input
                                            type='text'
                                            placeholder={item.placeholder}
                                            required={item.required}
                                        ></input>
                                    </label>
                                </div>
                            )
                        })}

                    </div>
                    <div>
                        {fieldLableData.map((item, index) => {
                            return (
                                <label key={index}>
                                    {item.label}
                                    <br />
                                    <select
                                        placeholder={item.label}
                                        required
                                    >
                                        {item.Option.map((item2) =>
                                            <option>{item2.Option}</option>

                                        )
                                        }
                                    </select>
                                </label>
                            )
                        }
                        )}
                    </div>
                </form>

                <button className='footer-button'>Submit</button>
            </Modal >
        </div>

    )
}
export default ModalPrev;