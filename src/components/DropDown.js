import React, { useState } from 'react'
import uuid from 'react-uuid';


const DropDown = ({ fieldLableData, setFieldLableData, itemData = {} }) => {
    const [check, setCheck] = useState(true);
    const [optionData, setOptionData] = useState([]);

    const handleChangeOption = (e) => {
        setOptionData(
            optionData.map((option) =>
                option.id === e.target.id
                    ? { id: option.id, Option: e.target.value }
                    : option
            )
        );
        setFieldLableData(fieldLableData.map((item) => {
            if (itemData.id === item.id) {
                item.Option = optionData;
                return item;
            } else {
                return item;
            }
        }))
    };
    const handleClose = () => {
        setFieldLableData(prev => prev.filter((item) => itemData.id !== item.id))
    }
    const handleClick = (e) => {
        setOptionData(prev => ([...prev, { id: uuid(), label: "" }]))
        setFieldLableData(fieldLableData.map((item) => {
            if (itemData.id === item.id) {
                item.Option = optionData;
                return item;
            } else {
                return item;
            }
        }))

    }
    const optionClose = (e) => {
        setOptionData(prev => prev.filter((item) => e.target.id !== item.id))
    }

    const changeField = (e) => {
        setFieldLableData((prev) => {
            return prev.map(item => {
                if (item.id === itemData.id) {
                    item.label = e.target.value
                }
                return item
            })
        })
    }

    return (
        <div className='input-card' >
            <button onClick={handleClose}>x</button>
            <div>Field label:</div>
            <input className='' placeholder='Enter Field Name...' type='text' onChange={changeField} />
            <div>
                <button onClick={handleClick}>+</button>
                {optionData.map((item, index) => {
                    return (
                        <div key={index}>
                            <span>Option</span>
                            <input id={item.id} className='' placeholder='Enter Option Value...' type='text' onChange={handleChangeOption} />
                            <span>Add Option:</span>
                            <button id={item.id} onClick={optionClose}>x</button>
                        </div>
                    )
                })}

            </div>
            <div>
                Required:
                <input type='checkbox' checked={check} onChange={() => setCheck(prev => !prev)} />
            </div>
        </div >
    )
}

export default DropDown;