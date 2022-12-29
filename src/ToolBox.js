import React, { useState } from 'react'
import uuid from 'react-uuid';
import "./App.css"
const ToolBox = ({ setTextFieldData, setFieldLableData }) => {
    const [showButton, setShowButton] = useState(false);
    const handleSubmit = () => {
        setShowButton(prev => !prev)
    }

    const inputClick = () => {
        setTextFieldData((prev) => [...prev, { id: uuid(), label: '', placeholder: "", check: "" }])
    }
    const dropDownClick = () => {
        setFieldLableData((prev) => [...prev, { id: uuid(), label: '', Option: [], check: "" }])
    }
    return (
        <>
            <div className='toolbox'>
                <button className='toolbox-button' onClick={handleSubmit}><span>ToolBox</span> </button>{
                    showButton ?
                        <div>
                            <button className='input-button' onClick={inputClick}>
                                Input Text
                            </button>

                            <button className='input-button' onClick={dropDownClick}>
                                <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
                                    <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
                                </svg>
                                Drop Down
                            </button>
                        </div>
                        : null
                }

            </div>
        </>
    )
}

export default ToolBox;