import React, { useState } from 'react'
import uuid from 'react-uuid';
import "./App.css"
import DropDown from './components/DropDown';
import Footer from './components/Footer';
import InputCard from './components/InputCard';
import ModalPrev from './modal';
import { setFormData } from './redux/slices/formData';
import ToolBox from './ToolBox';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setDropData } from './redux/slices/dropData';

const CreateTemplate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [textFieldData, setTextFieldData] = useState([]);
    const [fieldLableData, setFieldLableData] = useState([]);
    const [lableName, setName] = useState("")
    const [modalStatus, setModalStatus] = useState(false);
    const toggleModal = () => {
        setModalStatus(prev => {
            if (prev) {
                return false
            }
            if (lableName !== '') {
                return true
            }
            return prev
        })
    }

    const save = () => {
        dispatch(
            setFormData({
                id: uuid(),
                label: lableName,
                textField: textFieldData,
                dropField: fieldLableData,
            }))
        dispatch(
            setDropData({
                id: uuid(),
                //label: lableName,
                dropField: fieldLableData,
                Option: [],
            })
        )

        navigate("/home")
    }
    const nameChange = (e) => {
        setName(e.target.value)
    }

    return (
        <div className='create-template-main'>
            <ToolBox setTextFieldData={setTextFieldData} setFieldLableData={setFieldLableData} />
            <div>
                <div>
                    <h3>Template Name:</h3>
                    <input className='input-filed' onChange={nameChange} type="text" placeholder='Enter Template form name...' />
                </div>
            </div>
            {textFieldData.map((item, index) => (
                <InputCard
                    key={index}
                    setTextFieldData={setTextFieldData}
                    itemData={item}
                />
            ))
            }
            {
                fieldLableData.map((item, index) => (
                    <DropDown key={index}
                        fieldLableData={fieldLableData}
                        setFieldLableData={setFieldLableData}
                        itemData={item} />
                ))
            }
            <Footer modalIsOpen={toggleModal} handleSubmit={save} />
            <ModalPrev
                lableName={lableName}
                textFieldData={textFieldData}
                fieldLableData={fieldLableData}
                toggleModal={toggleModal}
                modalOpen={modalStatus}
            />
        </div>
    )
}
export default CreateTemplate;