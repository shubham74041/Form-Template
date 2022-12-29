import React, { useState } from 'react'
import Modal from 'react-modal';
import "./home.css"
import Navbar from '../Navbar'
import { useSelector } from 'react-redux'

export const Home = () => {
    const { formData } = useSelector((state) => state.formData)
    const { dropData } = useSelector((state) => state.dropData)

    console.log({ formData, dropData })
    const handelPrev = () => {
    }
    return (
        <><Navbar />
            <div className='home-main' >
                {formData.map((item, index) => {
                    return (
                        (<div className='form-data-card' key={index}>
                            {<div onClick={handelPrev}>{item?.label}</div>
                            /*<div>{item?.textField[0]?.placeholder}</div>
                            <div>{item?.textField[0]?.label}</div> */}
                        </div>
                        )
                    )
                })}
            </div>
        </>
    )
}

