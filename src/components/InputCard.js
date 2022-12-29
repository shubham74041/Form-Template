import React, { useState } from 'react'

const InputCard = ({ setTextFieldData, itemData = {} }) => {
    const [check, setCheck] = useState(true)
    const handleClose = () => {
        setTextFieldData(prev => prev.filter((item) => itemData.id !== item.id))
    }
    const changeField = (e) => {
        setTextFieldData((prev) => {
            return prev.map(item => {
                if (item.id === itemData.id) {
                    item.label = e.target.value
                }
                return item
            })
        })
    }
    const changePlacehodlerName = (e) => {
        setTextFieldData((prev) => {
            return prev.map(item => {
                if (item.id === itemData.id) {
                    item.placeholder = e.target.value
                }
                return item
            })
        })
    }
    return (
        <div className='input-card' >
            <button onClick={handleClose}>x</button>
            <div>Field Name:</div>

            <input className='' placeholder='Enter Field Name...' type='text' onChange={changeField} />
            <div>Filed PlaceHoler:</div>
            <input className='' placeholder='Enter placeHolder Name...' type='text' onChange={changePlacehodlerName} />
            <div>
                Required:
                <input type='checkbox' checked={check} onChange={() => setCheck(prev => !prev)} />
            </div>
        </div>
    )
}
export default InputCard;